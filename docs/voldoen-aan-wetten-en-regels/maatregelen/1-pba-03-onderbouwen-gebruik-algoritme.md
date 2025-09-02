---
title: Beschrijf waarom een algoritme het probleem moet oplossen
id: urn:nl:ak:mtr:pba-03
toelichting: Bepaal en documenteer waarom het gewenst of nodig is om een algoritme in te zetten om het probleem te kunnen aanpakken.
vereiste:
- aia-00-verboden-AI-praktijken
- awb-01-zorgvuldigheidsbeginsel
levenscyclus:
- probleemanalyse
onderwerp:
- governance
- menselijke-controle
rollen:
- projectleider
sources:
  ADR: SV.2
  ARK: 1.01
hide:
- navigation
- toc
version: "92559128"
version_date: "2025-07-04"
---

<!-- tags -->

## Maatregel
Bepaal en documenteer waarom het gewenst of nodig is om een algoritme in te zetten om het probleem te kunnen aanpakken.

## Toelichting

- Bepaal waarom het gewenst of nodig is om een algoritme in te zetten, en of er ook alternatieven zijn om het probleem op te lossen.
Documenteer de onderbouwing waarom een algoritme een betere oplossing zou bieden dan een niet-geautomatiseerd of niet-digitaal proces.

- Maak een bewuste afweging of een algoritme het juiste middel is om [het probleem](1-pba-01-formuleren-probleemdefinitie.md) op doelmatige en doeltreffende wijze op te lossen, en documenteer deze afweging.

- Beoordeel of de gewenste oplossing is [toegestaan op grond van de AI-Verordening](../vereisten/aia-00-verboden-AI-praktijken.md).

## Risico
Het algoritme is niet het juiste middel om het probleem op te lossen. Het risico daarbij bestaat dat het probleem niet wordt opgelost.

## Bijbehorende vereiste(n) { data-search-exclude }
??? expander "Bekijk alle vereisten"
    <!-- list_vereisten_on_maatregelen_page -->

## Bronnen

- [Impact Assessment Mensenrechten en Algoritmes, 1.01](https://www.rijksoverheid.nl/documenten/rapporten/2021/02/25/impact-assessment-mensenrechten-en-algoritmes)
- [Onderzoekskader Algoritmes Auditdienst Rijk, SV.2](https://www.rijksoverheid.nl/documenten/rapporten/2023/07/11/onderzoekskader-algoritmes-adr-2023)
- [Handreiking identificatie verboden AI-systemen (Powerpoint-bestand)](https://github.com/user-attachments/files/18179740/Handreiking_Uitvraag_VBSystemen.pptx)

## Voorbeelden

!!! example "Politie - HAVANK"
	De politie maakt voor het identificeren van personen gebruik van vingerafdrukken. In Het Automatisch Vingerafdrukkensysteem Nederlandse Kollektie (HAVANK) worden vinger- en handpalmafdrukken verwerkt. Het algoritme controleert of de gegeven vingerafdruk met een andere afdruk overeenkomt op basis van een score.
	Volgens de politie is het onderzoeken en vergelijken van een vingerafdruk met grote aantallen andere afdrukken onmogelijk en onuitvoerbaar. Zij geven aan dat daarom een algoritme hierbij noodzakelijk is om zo de kans op herkenning te vergroten en de kans op fouten te verkleinen.

	Bron: [HAVANK - Politie](https://algoritmes.overheid.nl/nl/algoritme/havank-politie/84289214)

Heb je een ander voorbeeld of best practice, laat het ons weten via [algoritmes@minbzk.nl](mailto:algoritmes@minbzk.nl)
