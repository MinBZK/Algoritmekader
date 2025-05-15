#!/usr/bin/env python3
"""
Script om te controleren of alle URNs in maatregelen en vereisten uniek zijn

Gebruik: python validate_urn_uniqueness.py
"""

import os
import sys
import yaml
import re

# Configuratie - aangepast voor Algoritmekader repository structuur
MEASURES_DIR = "docs/voldoen-aan-wetten-en-regels/maatregelen"
REQUIREMENTS_DIR = "docs/voldoen-aan-wetten-en-regels/vereisten"
VALID_FILE_EXTENSIONS = [".md"]

# Sla alle gevonden URNs op met hun bestandspaden voor rapportage
urn_map = {}
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
                print(f"Error bij het parsen van frontmatter in {file_path}: {error}")
                global has_errors
                has_errors = True
                return None

    return None


def scan_directory(directory):
    """
    Scan directory recursief voor bestanden met URNs
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
                urn = extract_urn(file_path)

                if urn:
                    if urn in urn_map:
                        print(f'ERROR: Dubbele URN gevonden: "{urn}"')
                        print(f"  - {urn_map[urn]}")
                        print(f"  - {file_path}")
                        global has_errors
                        has_errors = True
                    else:
                        urn_map[urn] = file_path
                else:
                    print(f"Waarschuwing: Geen URN gevonden in {file_path}")


# Hoofdprogramma
def main():
    print("URN uniciteit controleren...")

    # Controleer maatregelen en vereisten directories
    scan_directory(MEASURES_DIR)
    scan_directory(REQUIREMENTS_DIR)

    # Rapporteer resultaten
    if has_errors:
        print("\nValidatie mislukt: Dubbele URNs gevonden")
        sys.exit(1)
    elif len(urn_map) == 0:
        print(
            "\nWaarschuwing: Geen URNs gevonden. Controleer bestandspaden en formaten."
        )
        sys.exit(0)
    else:
        print(f"\nSucces! Alle {len(urn_map)} URNs zijn uniek.")
        sys.exit(0)


if __name__ == "__main__":
    main()
