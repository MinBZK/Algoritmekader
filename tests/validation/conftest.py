# tests/validation/conftest.py
import os
import sys

# Bereken het pad naar de script/validation directory
script_dir = os.path.dirname(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
)
sys.path.insert(0, script_dir)  # Voeg de root van het project toe

# Voeg ook het specifieke validatie pad toe
script_validation_path = os.path.join(script_dir, "script", "validation")
sys.path.insert(0, script_validation_path)
