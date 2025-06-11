#!/usr/bin/env python3
"""
Script om te valideren dat bestandsprefixes overeenkomen met hun URN-waarden
Dit zorgt ervoor dat bestandsnaamconventies consistent zijn met hun inhoud

Gebruik: python validate_file_prefix_urn.py
"""

import os
import sys
import yaml
import re

# Configuratie - aangepast voor Algoritmekader repository structuur
MEASURES_DIR = "docs/voldoen-aan-wetten-en-regels/maatregelen"
REQUIREMENTS_DIR = "docs/voldoen-aan-wetten-en-regels/vereisten"
VALID_FILE_EXTENSIONS = [".md"]

# Verwacht URN naar bestandsprefix patroon
# bijv. als URN is "urn:nl:ak:mtr:org-02" of "urn:nl:ak:ver:aia-01",
# moet de bestandsnaam beginnen met "org-02-" of "aia-01-" respectievelijk
URN_PREFIX_REGEX = r".*:([^:]+)$"

has_errors = False


def extract_urn(file_path):
    """
    Extraheer URN uit een Markdown bestand met frontmatter
    """
    with open(file_path, "r", encoding="utf-8") as file:
        content = file.read()

    file_ext = os.path.splitext(file_path)[1].lower()

    if file_ext == ".md":
        # Voor Markdown bestanden, zoek URN in frontmatter
        frontmatter_match = re.search(r"^---\n([\s\S]*?)\n---", content)
        if frontmatter_match:
            try:
                frontmatter = yaml.safe_load(frontmatter_match.group(1))
                # In het Algoritmekader staat de URN in het 'id' veld
                return frontmatter.get("id")
            except Exception as error:
                print(f"Fout bij het parsen van frontmatter in {file_path}: {error}")
                global has_errors
                has_errors = True
                return None

    return None


def get_identifier_from_urn(urn):
    """
    Extraheer het identifier-deel uit een URN
    bijv. uit "urn:nl:ak:mtr:org-02" extraheren we "org-02"
    """
    match = re.search(URN_PREFIX_REGEX, urn)
    return match.group(1) if match else None


def validate_file_prefix(file_path, urn):
    """
    Controleer of bestandsnaam de juiste prefix heeft op basis van URN
    Ondersteunt ook numerieke voorvoegsels (zoals 0-, 1-, 2-) voor maatregelen
    """
    file_name = os.path.basename(file_path)
    identifier = get_identifier_from_urn(urn)

    if not identifier:
        print(f'ERROR: Kan identifier niet extraheren uit URN "{urn}" in {file_path}')
        return False

    # Voor het Algoritmekader kunnen bestanden beginnen met een optioneel numeriek voorvoegsel
    # zoals "0-", "1-", "2-" gevolgd door de identifier en een koppelteken
    # bijv. "0-org-02-beschrijving-van-maatregel.md" of "org-02-beschrijving-van-maatregel.md"

    # Reguliere expressie patroon voor: optioneel cijfer gevolgd door koppelteken,
    # dan de exacte identifier, dan een koppelteken
    pattern = rf"^(?:\d+-)?{re.escape(identifier)}-"

    if not re.search(pattern, file_name):
        print(f"ERROR: Bestandsprefix komt niet overeen in {file_path}")
        print(f"  URN: {urn}")
        print(f"  Verwacht bestandsnaampatroon: [optioneel cijfer-]{identifier}-...")
        print(f"  Werkelijke bestandsnaam: {file_name}")
        return False

    return True


def scan_directory(directory):
    """
    Scan directory recursief voor bestanden met URNs
    """
    if not os.path.exists(directory):
        print(f"Waarschuwing: Directory niet gevonden: {directory}")
        return

    total_files = 0
    valid_files = 0

    for root, _, files in os.walk(directory):
        for filename in files:
            # Sla index.md bestanden over
            if filename == "index.md":
                continue

            file_path = os.path.join(root, filename)
            file_ext = os.path.splitext(filename)[1].lower()

            if file_ext in VALID_FILE_EXTENSIONS:
                total_files += 1
                urn = extract_urn(file_path)

                if urn:
                    if validate_file_prefix(file_path, urn):
                        valid_files += 1
                    else:
                        global has_errors
                        has_errors = True
                else:
                    print(f"Waarschuwing: Geen URN gevonden in {file_path}")

    if total_files > 0:
        print(
            f"Gecontroleerd: {total_files} bestanden in {directory}, {valid_files} hebben geldige prefixes"
        )


# Hoofdprogramma
def main():
    print("Bestandsprefix en URN consistentie controleren...")

    # Controleer maatregelen en vereisten directories
    scan_directory(MEASURES_DIR)
    scan_directory(REQUIREMENTS_DIR)

    # Rapporteer resultaten
    if has_errors:
        print("\nValidatie mislukt: Bestandsprefix inconsistenties gevonden")
        sys.exit(1)
    else:
        print("\nSucces! Alle bestandsprefixes komen overeen met hun URN-waarden.")
        sys.exit(0)


if __name__ == "__main__":
    main()
