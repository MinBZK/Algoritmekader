---
title: Beschrijf het probleem dat het algoritme moet oplossen
id: urn:nl:ak:mtr:pba-01
toelichting: Formuleer en documenteer wat de aanleiding is om een algoritme in te willen zetten.
vereiste:
- awb-01-zorgvuldigheidsbeginsel
levenscyclus:
- probleemanalyse
onderwerp:
- governance
- transparantie
rollen:
- projectleider
sources:
  ADR: SV.1
  ARK: 1.01
hide:
- navigation
- toc
version: "1.0.0"
version_date: "2025-07-04"
---

<!-- tags -->

## Maatregel
Formuleer en documenteer wat de aanleiding is om een algoritme in te willen zetten.
Formuleer duidelijk de probleemdefinitie en probleemafbakening waarvoor het algoritme een oplossing zou moeten vormen.

## Toelichting
Formuleer de probleemdefinitie en probleemafbakening zo concreet en precies mogelijk. Maak dit waar mogelijk kwantificeerbaar.

## Risico
Het algoritme dient niet het onderliggende probleem.
Zonder eenduidigheid over het op te lossen probleem is geen sturing op en verantwoording over het algoritme mogelijk.

## Bijbehorende vereiste(n) { data-search-exclude }
??? expander "Bekijk alle vereisten"
    <!-- list_vereisten_on_maatregelen_page -->

## Bronnen

- [Impact Assessment Mensenrechten en Algoritmes, 1.01](https://www.rijksoverheid.nl/documenten/rapporten/2021/02/25/impact-assessment-mensenrechten-en-algoritmes)
- [Onderzoekskader Algoritmes Auditdienst Rijk, SV.1](https://www.rijksoverheid.nl/documenten/rapporten/2023/07/11/onderzoekskader-algoritmes-adr-2023)

## Voorbeelden

!!! example "Gemeente Meierijstad: Melding openbare ruimte"

	De gemeente Meierijstad maakt gebruik van een melding systeem Signalen waarin inwoners situaties zoals overlast, gevaarlijke verkeerssituaties of straatmeubulair kunnen melden. De melder moet hierbij de juiste categorie kiezen (bv overlast) maar omdat er veel categorieën waren ging dit niet altijd goed. Dit kon zorgen voor vertraging en dus langere wachttijd of meer meldingen. Tegenwoordig gebruikt de gemeente een algoritme wat de tekst van burgers analyseert en op basis daarvan een categorie bepaalt. Op deze manier hoeft de melder geen categorie meer te kiezen en wordt de vertraging verholpen.

	De gemeente maakt daarnaast gebruik van menselijke controle op meldingen waarbij de categorie met minder dan 40% zekerheid ingedeeld is.

	Bron: [Meldingen openbare ruimte](https://algoritmes.overheid.nl/nl/algoritme/meldingen-openbare-ruimte-gemeente-meierijstad/26519744)

Heb je een ander voorbeeld of best practice, laat het ons weten via [algoritmes@minbzk.nl](mailto:algoritmes@minbzk.nl)
