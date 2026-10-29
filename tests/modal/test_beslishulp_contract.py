"""
Tests voor het contract tussen de externe beslishulp AI-verordening en de
labelmapping in docs/javascripts/modal.js.

De beslishulp draait in een iframe en zet zijn uitkomst in sessionStorage onder
"labelsbysubcategory": een object {subcategorie: [antwoordlabel, ...]}. modal.js
plakt die twee samen tot "<subcategorie>-<antwoordlabel>" en zoekt dat op in
labelMapper. Staat de combinatie daar niet in, dan krijgt het label het
achtervoegsel "[onbekend]" en filtert updateLabels() het weg -- de dimensie
verdwijnt dan geruisloos uit het filter.

Zo brak het filteren toen de beslishulp de subcategorie "Rol" hernoemde naar
"Verantwoordelijkheid": modal.js kende alleen nog "Rol-aanbieder", waardoor de
rol-dimensie niets meer deed.

De kern van deze tests is test_modal_kent_elke_uitkomst_van_de_beslishulp: die
leidt uit de gepinde bundle af welke *combinaties* van subcategorie en
antwoordlabel de beslishulp daadwerkelijk kan opleveren, en controleert dat
modal.js ze allemaal kent. Losse controles op subcategorie en antwoordlabel zijn
niet genoeg -- die blijven groen als beide namen wel ergens in de mapping
voorkomen maar niet in die combinatie.
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

# De beslishulp-bundle is geminificeerd; welke quotestijl de minifier kiest
# verschilt per versie (v1.2.24 gebruikt backticks).
Q = r"['\"`]"


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


def question_subcategories(bundle: str) -> dict[str, str]:
    """De categorielijst van de beslishulp: questionId -> subcategorie."""
    pairs = re.findall(
        rf"questionId:{Q}([^'\"`]+){Q},category:{Q}[^'\"`]*{Q},subcategory:{Q}([^'\"`]+){Q}",
        bundle,
    )
    assert pairs, "geen questionId/subcategory-lijst gevonden in de beslishulp-bundle"
    return dict(pairs)


def resolve_subcategory(question_id: str, by_question: dict[str, str]) -> str | None:
    """De subcategorie die de beslishulp bij een vraag zoekt.

    Spiegelt de lookup in de bundle: die probeert achtereenvolgens "1", "1.4" en
    "1.4.1" en houdt de langste treffer over. Vraag 1.4.1 staat dus niet zelf in
    de lijst maar erft "Soort toepassing" van 1.4.
    """
    parts = question_id.split(".")
    found = by_question.get(parts[0])
    for depth in (2, 3):
        if len(parts) >= depth:
            deeper = by_question.get(".".join(parts[:depth]))
            if deeper is not None:
                found = deeper
    return found


def outcome_pairs(bundle: str) -> set[tuple[str, str]]:
    """Alle (subcategorie, antwoordlabel) combinaties die de beslishulp oplevert.

    De bundle koppelt een antwoordlabel aan een subcategorie via de vraag waar
    het antwoord bij hoort (addLabelBySubCategory(label, subcategory)). We lopen
    de bundle daarom op volgorde af en hangen elke labels:[...] aan de laatst
    geziene questionId.
    """
    by_question = question_subcategories(bundle)

    events: list[tuple[int, str, str]] = []
    # `nextQuestionId` matcht hier niet op: dat heeft een hoofdletter Q.
    for match in re.finditer(rf"(?<![A-Za-z])questionId:{Q}([^'\"`]+){Q}", bundle):
        events.append((match.start(), "vraag", match.group(1)))
    for match in re.finditer(r"labels:\[([^\]]*)\]", bundle):
        events.append((match.start(), "labels", match.group(1)))
    events.sort()

    pairs: set[tuple[str, str]] = set()
    current: str | None = None
    for _, kind, value in events:
        if kind == "vraag":
            current = value
            continue
        if current is None:
            continue
        subcategory = resolve_subcategory(current, by_question)
        if subcategory is None or subcategory == "Conclusie":
            continue
        for label in re.findall(rf"{Q}([^'\"`]+){Q}", value):
            pairs.add((subcategory, label))

    assert pairs, "geen antwoordlabels gevonden in de beslishulp-bundle"

    # Bij de conclusie zet de beslishulp elke subcategorie die niet aan bod kwam
    # van "nader te bepalen" op "niet van toepassing" (updateLabelsAtConclusion),
    # dus die combinatie kan voor iedere subcategorie voorbijkomen.
    for subcategory in subcategories(bundle):
        pairs.add((subcategory, "niet van toepassing"))

    return pairs


# --------------------------------------------------------------------------
# Tests
# --------------------------------------------------------------------------


def test_modal_kent_elke_uitkomst_van_de_beslishulp(beslishulp_bundle: str):
    """Elke combinatie die de beslishulp kan opleveren moet modal.js kennen.

    Dit is de test die de "Rol" -> "Verantwoordelijkheid" hernoeming vangt: niet
    of beide namen ergens voorkomen, maar of "<subcategorie>-<antwoord>" precies
    zo in labelMapper staat. Zo niet, dan valt die filterdimensie stil weg.
    """
    synonyms = modal_synonyms()

    missing = sorted(
        f"{subcategory}-{label}"
        for subcategory, label in outcome_pairs(beslishulp_bundle)
        if f"{subcategory}-{label}".lower() not in synonyms
    )

    assert not missing, (
        f"modal.js kent deze uitkomst(en) van {beslishulp_url()} niet: {missing}. "
        f"Voeg ze als synoniem toe aan labelMapper in "
        f"{MODAL_JS.relative_to(REPO_ROOT)}, anders krijgen ze '[onbekend]' en "
        f"filtert die dimensie niet meer mee."
    )


def test_uitkomst_van_de_beslishulp_levert_alle_filterlabels_op():
    """Een volledige beslishulp-uitkomst moet op alle filterdimensies mappen.

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


def test_elke_subcategorie_kent_niet_van_toepassing():
    """"niet van toepassing" moet voor elke subcategorie gemapt zijn.

    Bij de conclusie krijgt elke subcategorie die niet aan bod kwam deze waarde.
    updateLabels() filtert hem daarna weg op display_value, maar zonder mapping
    komt hij eerst als onbekend label langs en waarschuwt find() bij elke
    doorloop van de beslishulp.
    """
    synonyms = modal_synonyms()

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

    missing = sorted(
        subcategory
        for subcategory in documented
        if f"{subcategory}-niet van toepassing".lower() not in synonyms
    )

    assert not missing, (
        f"modal.js mist '<subcategorie>-niet van toepassing' voor {missing}."
    )


def test_beslishulp_uitkomst_dekt_de_gedocumenteerde_subcategorieen(
    beslishulp_bundle: str,
):
    """De offline tests hierboven moeten de echte subcategorieen blijven gebruiken."""
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
