#!/usr/bin/env python3
"""
Helper script om alle Algoritmekader validatie scripts lokaal uit te voeren

Gebruik: python run_all_validations.py
"""

import os
import sys
import subprocess

# Script configuratie
SCRIPTS_DIR = os.path.dirname(os.path.abspath(__file__))
VALIDATION_SCRIPTS = [
    "validate_urn_uniqueness.py",
    "validate_all_labels.py",
    "validate_file_prefix_urn.py",
]


def run_script(script_path):
    """
    Voer een script uit en geef aan of het succesvol was
    """
    script_name = os.path.basename(script_path)
    print(f"\n\n==== {script_name} uitvoeren ====\n")

    try:
        # Script uitvoeren en output doorsturen naar terminal
        result = subprocess.run(["python", script_path], check=False)
        return result.returncode == 0
    except Exception as e:
        print(f"Fout bij het starten van script {script_path}: {e}")
        return False


def main():
    has_errors = False

    for script in VALIDATION_SCRIPTS:
        script_path = os.path.join(SCRIPTS_DIR, script)

        if os.path.exists(script_path):
            if run_script(script_path):
                print(f"✅ {script} succesvol uitgevoerd")
            else:
                print(f"❌ {script} mislukt")
                has_errors = True
        else:
            print(f"⚠️ Script niet gevonden: {script_path}")
            has_errors = True

    if has_errors:
        print(
            "\n❌ Een of meer validatiescripts zijn mislukt. Los de problemen op voordat je commit."
        )
        sys.exit(1)
    else:
        print("\n✅ Alle validatiescripts zijn succesvol uitgevoerd!")
        sys.exit(0)


if __name__ == "__main__":
    main()
