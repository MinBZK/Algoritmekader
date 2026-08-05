"""
Tests voor het contract tussen de externe beslishulp AI-verordening en de
labelmapping in docs/javascripts/modal.js.

De beslishulp draait in een iframe en zet zijn uitkomst in sessionStorage onder
"labelsbysubcategory": een object {subcategorie: [antwoordlabel, ...]}. modal.js
plakt die twee samen tot "<subcategorie>-<antwoordlabel>" en zoekt dat op in
labelMapper. Staat de combinatie daar niet in, dan krijgt het label het
achtervoegsel "[onbekend]" en filtert updateLabels() het weg -- de dimensie
verdwijnt dan geruisloos uit het filter.

Zo brak het filteren toen de beslishulp in v1.2.15 de subcategorie "Rol"
hernoemde naar "Verantwoordelijkheid": modal.js kende alleen nog "Rol-aanbieder".
Deze tests vergelijken de gepinde beslishulp-bundle met de mapping in modal.js,
zodat zo'n hernoeming bij de volgende versiebump direct opvalt.
"""

import json
import re
import urllib.error
import urllib.request
from pathlib import Path

import pytest

REPO_ROOT = Path(__file__).resolve().parents[2]
BESLISHULP_HTML = REPO_ROOT / "docs/html/beslishulp.html"
MODAL_JS = REPO_ROOT / "docs/javascripts/modal.js"

DOWNLOAD_ATTEMPTS = 3
DOWNLOAD_TIMEOUT = 60


# --------------------------------------------------------------------------
# modal.js: de labelmapping uitlezen
# --------------------------------------------------------------------------

# labelMapper.addEntry('aanbieder', 'Aanbieder', 'rol-ai-act', ["Rol-aanbieder"]);
ADD_ENTRY = re.compile(
    r"labelMapper\.addEntry\(\s*"
    r"'([^']*)'\s*,\s*"  # label
    r"'([^']*)'\s*,\s*"  # display_value
    r"'([^']*)'\s*"  # group
    r"(?:,\s*\[([^\]]*)\])?\s*"  # synoniemen (optioneel)
    r"\)"
)


def modal_synonyms() -> set[str]:
    """Alle sleutels waarop labelMapper.find() een treffer geeft, lowercase.

    Dat zijn zowel de canonieke "<group>-<label>" sleutels als de synoniemen;
    ValueMapper.addEntry() registreert beide en zoekt lowercase op.
    """
    source = MODAL_JS.read_text(encoding="utf-8")
    keys: set[str] = set()

    for label, _display, group, synonyms in ADD_ENTRY.findall(source):
        keys.add(f"{group}-{label}".lower())
        if synonyms:
            # modal.js gebruikt door elkaar enkele en dubbele quotes
            keys.update(
                s.lower() for s in re.findall(r"""['"]([^'"]*)['"]""", synonyms)
            )

    assert keys, "geen labelMapper.addEntry() aanroepen gevonden in modal.js"
    return keys


# --------------------------------------------------------------------------
# beslishulp: het gepinde bundel uitlezen
# --------------------------------------------------------------------------


def beslishulp_url() -> str:
    match = re.search(
        r'src="(https://github\.com/[^"]+/index\.js)"',
        BESLISHULP_HTML.read_text(encoding="utf-8"),
    )
    assert match, f"geen beslishulp script-URL gevonden in {BESLISHULP_HTML}"
    return match.group(1)


@pytest.fixture(scope="session")
def beslishulp_bundle() -> str:
    """De gepinde beslishulp-bundle, eenmalig opgehaald per testsessie."""
    url = beslishulp_url()
    last_error: Exception | None = None

    for _ in range(DOWNLOAD_ATTEMPTS):
        try:
            with urllib.request.urlopen(url, timeout=DOWNLOAD_TIMEOUT) as response:
                return response.read().decode("utf-8", errors="replace")
        except (urllib.error.URLError, TimeoutError) as error:  # pragma: no cover
            last_error = error

    pytest.fail(f"kon beslishulp-bundle niet ophalen van {url}: {last_error}")


def subcategories(bundle: str) -> set[str]:
    """De sleutels van labelsbysubcategory, uit het initiele sjabloon.

    De beslishulp initialiseert de store met een JSON-sjabloon waarin elke
    subcategorie op ["nader te bepalen"] staat; dat sjabloon is de enige plek
    waar alle sleutels compleet bij elkaar staan.
    """
    keys = set(re.findall(r'"([^"]+)":\s*\["nader te bepalen"\]', bundle))
    assert keys, "geen labelsbysubcategory-sjabloon gevonden in de beslishulp-bundle"
    return keys


def answer_labels(bundle: str) -> set[str]:
    """Alle antwoordlabels die de beslishulp aan een subcategorie kan toekennen.

    Staan in de vragenlijst als labels:[`aanbieder`,...]. De gebruikte
    quotestijl verschilt per minifier-versie, vandaar beide varianten.
    """
    labels: set[str] = set()
    for array in re.findall(r"labels:\[([^\]]*)\]", bundle):
        labels.update(re.findall(r"[`\"']([^`\"']+)[`\"']", array))

    labels.discard("nader te bepalen")
    assert labels, "geen antwoordlabels gevonden in de beslishulp-bundle"
    return labels


# --------------------------------------------------------------------------
# Tests
# --------------------------------------------------------------------------


def test_modal_kent_elke_subcategorie_van_de_beslishulp(beslishulp_bundle: str):
    """Elke subcategorie moet als voorvoegsel in de mapping voorkomen.

    Vangt hernoemingen als "Rol" -> "Verantwoordelijkheid": zonder passend
    voorvoegsel valt de hele dimensie uit het vereistenfilter.
    """
    synonyms = modal_synonyms()

    missing = sorted(
        subcategory
        for subcategory in subcategories(beslishulp_bundle)
        if not any(key.startswith(f"{subcategory.lower()}-") for key in synonyms)
    )

    assert not missing, (
        f"modal.js kent geen mapping voor subcategorie(en) {missing} van "
        f"{beslishulp_url()}. Voeg synoniemen '<subcategorie>-<antwoord>' toe aan "
        f"labelMapper in {MODAL_JS.relative_to(REPO_ROOT)}."
    )


def test_modal_kent_elk_antwoordlabel_van_de_beslishulp(beslishulp_bundle: str):
    """Elk antwoordlabel moet als achtervoegsel in de mapping voorkomen.

    Vangt hernoemde antwoorden, bijvoorbeeld "hoog-risico AI" -> iets anders.
    """
    synonyms = modal_synonyms()

    missing = sorted(
        label
        for label in answer_labels(beslishulp_bundle)
        if not any(key.endswith(f"-{label.lower()}") for key in synonyms)
    )

    assert not missing, (
        f"modal.js kent geen mapping voor antwoordlabel(s) {missing} van "
        f"{beslishulp_url()}. Vul de bijbehorende synoniemen aan in labelMapper in "
        f"{MODAL_JS.relative_to(REPO_ROOT)}."
    )


def test_uitkomst_van_de_beslishulp_levert_alle_filterlabels_op():
    """Een volledige beslishulp-uitkomst moet op alle zes filterdimensies mappen.

    Offline regressietest voor de bug waarbij de rol-dimensie wegviel: hier
    staat letterlijk wat de beslishulp oplevert en wat het filter ervan moet
    maken. De twee genegeerde groepen ('operationeel',
    'conformiteitsbeoordelingsinstantie') laat updateLabels() zelf vallen.
    """
    # given - uitkomst voor een aanbieder van een hoog-risico AI-systeem
    labels_by_subcategory = {
        "Verantwoordelijkheid": ["aanbieder"],
        "Operationeel": ["in gebruik"],
        "Soort toepassing": ["AI-systeem"],
        "Risicogroep": ["hoog-risico AI"],
        "Conformiteitsbeoordelingsinstantie": ["niet van toepassing"],
        "Systeemrisico": ["niet van toepassing"],
        "Transparantieverplichting": ["geen transparantieverplichting"],
        "Open source": ["geen open-source"],
    }

    # when - modal.js plakt subcategorie en antwoord aan elkaar en zoekt dat op
    synonyms = modal_synonyms()
    unmapped = [
        f"{subcategory}-{value}"
        for subcategory, values in labels_by_subcategory.items()
        for value in values
        if f"{subcategory}-{value}".lower() not in synonyms
    ]

    # then - geen enkele combinatie mag als "[onbekend]" wegvallen
    assert not unmapped, (
        f"deze beslishulp-uitkomsten mappen niet: {unmapped}. "
        f"Ze krijgen '[onbekend]' en worden door updateLabels() weggefilterd, "
        f"waardoor die filterdimensie stilletjes niets meer doet."
    )


def test_beslishulp_uitkomst_dekt_de_gedocumenteerde_subcategorieen(
    beslishulp_bundle: str,
):
    """De regressietest hierboven moet de echte subcategorieen blijven gebruiken."""
    documented = {
        "Verantwoordelijkheid",
        "Operationeel",
        "Soort toepassing",
        "Risicogroep",
        "Conformiteitsbeoordelingsinstantie",
        "Systeemrisico",
        "Transparantieverplichting",
        "Open source",
    }

    assert subcategories(beslishulp_bundle) == documented, (
        "de subcategorieen van de beslishulp zijn gewijzigd; werk "
        f"test_uitkomst_van_de_beslishulp_levert_alle_filterlabels_op bij. "
        f"Nu in de bundle: {json.dumps(sorted(subcategories(beslishulp_bundle)))}"
    )
