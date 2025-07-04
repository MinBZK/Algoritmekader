---
title: Maak back-ups van algoritmes
id: urn:nl:ak:mtr:mon-01
toelichting: Back-up kopieën van informatie, software en systeemafbeeldingen dienen het liefst regelmatig te worden gemaakt en getest. Idealiter gebeurt dit in overeenstemming met een afgesproken back-up beleid.
vereiste:
- bio-01-beveiliging-informatie-en-informatiesystemen
levenscyclus:
- ontwikkelen
- monitoring-en-beheer
onderwerp:
- technische-robuustheid-en-veiligheid
rollen:
- ontwikkelaar
- beleid-en-advies
sources:
  ADR: IB.26
  ARK: 4.08
hide:
- navigation
- toc
version: "1.0.0"
version_date: "2025-07-04"
---

<!-- tags -->

## Maatregel

Back-up kopieën van informatie, software en systeemafbeeldingen dienen regelmatig te worden gemaakt en getest. Idealiter gebeurt dit in overeenstemming met een afgesproken back-up beleid.
Maak back-ups van de omgeving van het algoritme en zorg ervoor dat het algoritme en de data hersteld kunnen worden.

## Toelichting
Er is een back-up beleid waarin de eisen voor het bewaren en beschermen zijn gedefinieerd en vastgesteld. Dit beleid moet vervolgens worden vertaald naar (technische) maatregelen om het kunnen maken van back-ups te realiseren.

## Risico
Als er geen regelmatige back-ups worden gemaakt en de restore-procedure niet regelmatig wordt getest, bestaat het risico dat er geen hersteloptie is en er een mogelijkheid van gegevensverlies is.

## Bijbehorende vereiste(n) { data-search-exclude }
??? expander "Bekijk alle vereisten"
    <!-- list_vereisten_on_maatregelen_page -->

## Bronnen

- [Baseline Informatiebeveiliging Overheid, 12.3.1.1, 12.3.1.4, 12.3.1.5.](https://www.digitaleoverheid.nl/overzicht-van-alle-onderwerpen/cybersecurity/bio-en-ensia/baseline-informatiebeveiliging-overheid/)
- [Onderzoekskader Algoritmes Auditdienst Rijk, IB.26](https://www.rijksoverheid.nl/documenten/rapporten/2023/07/11/onderzoekskader-algoritmes-adr-2023)
- [Toetsingskader Algoritmes Algemene Rekenkamer, 4.08](https://www.rekenkamer.nl/onderwerpen/algoritmes/documenten/publicaties/2024/05/15/het-toetsingskader-aan-de-slag)

## Voorbeelden

!!! example "Voorbeeld: Informatie Beveligingsdienst - Handreiking back-up en herstel"

    De Informatiebeveiligingsdienst van de Vereniging Nederlandse Gemeenten (VNG) heeft een handreiking back-up en herstel ontwikkeld. Hierin staat uitleg over de wetgeving rondom back-ups en het herstellen van back-ups.

    Aan het einde van deze handreiking staat ook een voorbeeld voor beleid voor gemeentes. Hierin staan al een aantal uitgangspunten die de gemeente alleen hoeft te kopiëren en te ondertekenen.

	Bron: [Producten - Informatiebeveiligingsdienst](https://www.informatiebeveiligingsdienst.nl/product/back-up-en-recovery-gemeente/)

Heb je een ander voorbeeld of best practice, laat het ons weten via [algoritmes@minbzk.nl](mailto:algoritmes@minbzk.nl)
