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

# Debugging prints om te verifiëren dat de paden correct zijn
print(f"Project root toegevoegd aan sys.path: {script_dir}")
print(f"Validatie scripts pad toegevoegd aan sys.path: {script_validation_path}")
print(f"Volledige sys.path: {sys.path}")
