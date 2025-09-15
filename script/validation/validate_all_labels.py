#!/usr/bin/env python3
"""
Script om te valideren dat alle labels in maatregelen en vereisten
overeenkomen met toegestane waarden gedefinieerd in het Algoritmekader:
- levenscycli
- onderwerpen
- rollen
- AI-Verordening gerelateerde labels (alleen voor vereisten)

Gebruik: python validate_all_labels.py
"""

import os
import sys
import yaml
import re

# Configuratie - aangepast voor Algoritmekader repository structuur
BASE_DIR = "docs"
MEASURES_DIR = os.path.join(BASE_DIR, "voldoen-aan-wetten-en-regels/maatregelen")
REQUIREMENTS_DIR = os.path.join(BASE_DIR, "voldoen-aan-wetten-en-regels/vereisten")
ROLES_DIR = os.path.join(BASE_DIR, "rollen")
LIFECYCLE_DIR = os.path.join(BASE_DIR, "levenscyclus")
SUBJECTS_DIR = os.path.join(BASE_DIR, "onderwerpen")
VALID_FILE_EXTENSIONS = [".md"]

# AI-Verordening specifieke labels (alleen voor vereisten)
VALID_SOORT_TOEPASSING = [
    "ai-systeem",
    "ai-systeem-voor-algemene-doeleinden",
    "ai-model-voor-algemene-doeleinden",
]

VALID_RISICOGROEP = [
    "hoog-risico-ai-systeem",
    "niet-van-toepassing",
    "verboden-ai",
    "geen-hoog-risico-ai-systeem",
    "uitzondering-van-toepassing",
]

VALID_TRANSPARANTIEVERPLICHTING = [
    "geen-transparantieverplichting",
    "transparantieverplichting",
    "niet-van-toepassing",
]

VALID_SYSTEEMRISICO = [
    "systeemrisico",
    "geen-systeemrisico",
    "niet-van-toepassing",
]

VALID_OPEN_SOURCE = ["open-source", "geen-open-source", "niet-van-toepassing"]

VALID_UITZONDERING = ["risicogroep-uitzondering-van-toepassing"]

VALID_ROL_AI_ACT = [
    "aanbieder",
    "gebruiksverantwoordelijke",
    "importeur",
    "distributeur",
]

has_errors = False


def get_valid_values_from_directory(directory):
    """
    Haalt geldige waarden op uit de bestandsnamen in een directory
    Bestandsnamen zonder extensie worden als geldige waarden beschouwd,
    behalve index.md
    """
    valid_values = []
    if not os.path.exists(directory):
        print(f"Waarschuwing: Directory niet gevonden: {directory}")
        return valid_values

    for root, _, files in os.walk(directory):
        for filename in files:
            if filename == "index.md":
                continue

            file_ext = os.path.splitext(filename)[1].lower()
            if file_ext in VALID_FILE_EXTENSIONS:
                value = os.path.splitext(filename)[0]
                valid_values.append(value)

    return valid_values


def check_labels(
    file_path,
    is_requirement=False,
    valid_lifecycles=None,
    valid_subjects=None,
    valid_roles=None,
):
    """
    Controleer alle labels in een document en rapporteer ongeldige waarden
    """
    global has_errors

    with open(file_path, "r", encoding="utf-8") as file:
        content = file.read()

    # Voor Markdown bestanden, zoek labels in frontmatter
    frontmatter_match = re.search(r"^---\n([\s\S]*?)\n---", content)
    if not frontmatter_match:
        print(f"Waarschuwing: Geen frontmatter gevonden in {file_path}")
        return

    try:
        frontmatter = yaml.safe_load(frontmatter_match.group(1))

        # Controleer levenscyclus
        check_label_list(frontmatter, "levenscyclus", valid_lifecycles, file_path)

        # Controleer onderwerpen
        check_label_list(frontmatter, "onderwerp", valid_subjects, file_path)

        # Controleer rollen
        check_label_list(frontmatter, "rollen", valid_roles, file_path)

        # Voor vereisten, controleer AI-Verordening gerelateerde labels
        if is_requirement:
            check_label_list(
                frontmatter, "soort-toepassing", VALID_SOORT_TOEPASSING, file_path
            )
            check_label_list(frontmatter, "risicogroep", VALID_RISICOGROEP, file_path)
            check_label_list(
                frontmatter,
                "transparantieverplichting",
                VALID_TRANSPARANTIEVERPLICHTING,
                file_path,
            )
            check_label_list(
                frontmatter, "systeemrisico", VALID_SYSTEEMRISICO, file_path
            )
            check_label_list(frontmatter, "open-source", VALID_OPEN_SOURCE, file_path)
            check_label_list(frontmatter, "uitzondering", VALID_UITZONDERING, file_path)
            check_label_list(frontmatter, "rol-ai-act", VALID_ROL_AI_ACT, file_path)

    except Exception as error:
        print(f"Fout bij het parsen van frontmatter in {file_path}: {error}")
        has_errors = True


def check_label_list(frontmatter, label_name, valid_values, file_path):
    """
    Controleer of een label of lijst van labels geldige waarden bevat
    """
    global has_errors

    if label_name not in frontmatter:
        # Alleen waarschuwen als het een verplicht label is
        if label_name in ["levenscyclus", "onderwerp", "rollen"]:
            print(f"Waarschuwing: Geen '{label_name}' label gevonden in {file_path}")
        return

    values = frontmatter[label_name]
    # Verwerk zowel enkele waarden als arrays
    label_values = values if isinstance(values, list) else [values]

    for value in label_values:
        # Speciale afhandeling voor uitzondering veld met logische expressies
        if label_name == "uitzondering" and (
            '"' in value or "(" in value or "||" in value or "&&" in value
        ):
            # Dit is een complexe logische expressie voor uitzonderingen, accepteer deze
            continue
        elif valid_values and value not in valid_values:
            print(f'ERROR: Ongeldige {label_name}-waarde "{value}" in {file_path}')
            print(f"  Geldige waarden zijn: {', '.join(valid_values)}")
            has_errors = True


def scan_directory(
    directory,
    is_requirement=False,
    valid_lifecycles=None,
    valid_subjects=None,
    valid_roles=None,
):
    """
    Scan directory recursief voor bestanden en controleer alle labels
    """
    if not os.path.exists(directory):
        print(f"Waarschuwing: Directory niet gevonden: {directory}")
        return

    for root, _, files in os.walk(directory):
        for filename in files:
            # Sla index.md bestanden over
            if filename == "index.md":
                continue

            file_path = os.path.join(root, filename)
            file_ext = os.path.splitext(filename)[1].lower()

            if file_ext in VALID_FILE_EXTENSIONS:
                check_labels(
                    file_path,
                    is_requirement,
                    valid_lifecycles,
                    valid_subjects,
                    valid_roles,
                )


def main():
    print("Labels in maatregelen en vereisten controleren...")

    # Haal de geldige waarden op basis van de bestandsstructuur op
    print("\nGeldige waarden ophalen uit bestandsstructuur...")
    valid_roles = get_valid_values_from_directory(ROLES_DIR)
    valid_lifecycles = get_valid_values_from_directory(LIFECYCLE_DIR)
    valid_subjects = get_valid_values_from_directory(SUBJECTS_DIR)

    print(f"Opgehaalde levenscycli: {', '.join(valid_lifecycles)}")
    print(f"Opgehaalde onderwerpen: {', '.join(valid_subjects)}")
    print(f"Opgehaalde rollen: {', '.join(valid_roles)}")

    # Controleer maatregelen
    print("\nControleren van maatregelen...")
    scan_directory(
        MEASURES_DIR,
        is_requirement=False,
        valid_lifecycles=valid_lifecycles,
        valid_subjects=valid_subjects,
        valid_roles=valid_roles,
    )

    # Controleer vereisten
    print("\nControleren van vereisten...")
    scan_directory(
        REQUIREMENTS_DIR,
        is_requirement=True,
        valid_lifecycles=valid_lifecycles,
        valid_subjects=valid_subjects,
        valid_roles=valid_roles,
    )

    # Rapporteer resultaten
    if has_errors:
        print("\nValidatie mislukt: Ongeldige label-waarden gevonden")
        sys.exit(1)
    else:
        print("\nSucces! Alle labels zijn geldig.")
        print(f"Gevalideerde levenscycli: {', '.join(valid_lifecycles)}")
        print(f"Gevalideerde onderwerpen: {', '.join(valid_subjects)}")
        print(f"Gevalideerde rollen: {', '.join(valid_roles)}")
        sys.exit(0)


if __name__ == "__main__":
    main()
