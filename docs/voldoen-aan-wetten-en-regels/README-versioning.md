# Document Versioning System

Dit document beschrijft het git-gebaseerde versioning systeem voor de juridische content in het Algoritmekader.

## Hoe het werkt

Het systeem gebruikt **git commit hashes** als versienummers in plaats van handmatige semantic versioning. Dit zorgt voor:
- ✅ Automatische versioning bij elke wijziging
- ✅ Perfecte traceerbaarheid naar exacte git commit
- ✅ Geen handmatige versie bumps meer nodig
- ✅ Werkt met squash, rebase en alle merge strategieën

## Automatische GitHub Action

Bij elke push naar `main` die markdown bestanden in `docs/voldoen-aan-wetten-en-regels/` wijzigt:

1. **GitHub Action triggert** (`.github/workflows/version-sync.yaml`)
2. **Git configuratie** wordt ingesteld voor commits
3. **Dependencies** worden geïnstalleerd (`pip install -r requirements.txt`)
4. **Script draait** (`python version_helper.py sync --all`)
5. **Wijzigingen gedetecteerd** met git diff
6. **Automatische commit** wordt gemaakt met `[skip ci]` om loops te voorkomen
7. **Push naar repository** met `contents: write` permissions

## Handmatige gebruik

```bash
# Status van alle bestanden bekijken
python version_helper.py status

# Nieuwe versie toevoegen voor specifiek bestand
python version_helper.py add hulpmiddelen/AIIA.md

# Alle bestanden syncen met git
python version_helper.py sync --all

# Force sync (ook als hash gelijk is)
python version_helper.py sync --all --force
```

## Bestandsstructuur

### Frontmatter in .md bestanden
```yaml
---
title: AI Impact Assessment (AIIA)
# ... andere metadata ...
version: "92559128"
version_date: "2025-07-04"
---
```

### Registry in versions.yml
```yaml
files:
  ./hulpmiddelen/AIIA.md:
    current_version: '92559128'
    version_type: git
    created_date: '2025-07-04'
    versions:
    - version: '92559128'
      date: '2025-07-04'
      changes: 'Initial set-up versioning legal content AK'
      type: git
```

## Versie Formaat

- **Git hash**: 8-karakter short hash (bijv. `92559128`)
- **Datum**: YYYY-MM-DD formaat van git commit
- **Changes**: Originele git commit boodschap
- **Type**: `git` (om te onderscheiden van legacy semantic versioning)

## GitHub Action Vereisten

Voor een succesvolle werking van de automatische versioning:

- **Repository permissions**: `contents: write` ingesteld in workflow
- **Dependencies**: `requirements.txt` aanwezig in repository root
- **Git configuratie**: Automatisch ingesteld met github-actions[bot] credentials
- **Skip CI**: `[skip ci]` voorkomt oneindige loops bij auto-commits

## Migration Status

Het systeem is volledig gemigreerd naar git hash versioning:
- **Alleen**: Git hash versioning (`92559128`) - gebruikt voor alle content
- **Legacy**: Semantic versioning volledig verwijderd uit systeem

Alle bestanden gebruiken nu uitsluitend git-gebaseerde versioning voor consistency en traceerbaarheid.
