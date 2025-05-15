# Algoritmekader Validatie Scripts

Deze map bevat scripts om de kwaliteit en consistentie van het Algoritmekader te valideren.

## Beschikbare validatiescripts

- **validate_all_labels.py**: Controleert of alle labels (levenscyclus, onderwerpen, rollen, etc.) in maatregelen en vereisten overeenkomen met toegestane waarden.
- **validate_urn_uniqueness.py**: Controleert of alle URN's uniek zijn binnen het Algoritmekader.
- **validate_file_prefix_urn.py**: Controleert of bestandsnamen beginnen met de juiste prefix uit het URN.
- **run_all_validations.py**: Voert alle bovenstaande scripts in één keer uit.

## Pre-commit setup

Voor de beste workflow raden we aan om de validaties te integreren in je git workflow met pre-commit:

1. Installeer pre-commit:
   ```
   pip install pre-commit
   ```

2. Installeer de pre-commit hooks in je lokale repository:
   ```
   pre-commit install
   ```

Nu zullen alle validaties automatisch worden uitgevoerd wanneer je een `git commit` doet. Als er problemen worden gevonden, zal de commit worden geweigerd en krijg je informatie over wat er moet worden opgelost.

## Handmatig uitvoeren

Je kunt alle validaties ook handmatig uitvoeren:

```
python script/validation/run_all_validations.py
```

Of een individueel validatiescript uitvoeren:

```
python script/validation/validate_all_labels.py
```

## Uitbreiden van de validaties

Wanneer je een nieuw validatiescript toevoegt:

1. Voeg het toe aan de `VALIDATION_SCRIPTS` lijst in `run_all_validations.py`
2. Zorg dat het script een exit code 0 retourneert bij succes en een niet-nul exit code bij fouten
3. Update deze README met een beschrijving van je nieuwe script
