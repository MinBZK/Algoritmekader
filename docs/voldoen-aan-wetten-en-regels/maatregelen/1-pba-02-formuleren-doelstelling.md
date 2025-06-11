---
title: Beschrijf het doel van het algoritme
id: urn:nl:ak:mtr:pba-02
toelichting: Het doel en de eventuele subdoelen van het algoritme moeten zo specifiek mogelijk zijn geformuleerd, en waar mogelijk gekwantificeerd.
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
  ADR:
  - SV.3
  - DM.7
  ARK:
  - 1.01
  - 1.02
hide:
- navigation
- toc
---

<!-- tags -->

## Maatregel

Het doel en de eventuele subdoelen van het algoritme moeten zo specifiek mogelijk zijn geformuleerd, en waar mogelijk gekwantificeerd.
Maak de consequenties van het algoritme specifiek en zorg dat het doel van het algoritme formeel is vastgesteld en vastgelegd.

## Toelichting

- Het doel van de inzet van een algoritme dient zo concreet en specifiek mogelijk gedefinieerd te worden.
Indien er meerdere doelen zijn, is het belangrijk om een zekere rangorde te maken: wat zijn de belangrijkste doelen? En waarom?
Welke doelen zijn subdoelen, waarvoor het minder belangrijk is om deze te realiseren?

- Vertrek vanuit de uitdaging of probleemsituatie, niet vanuit een oplossing ('AI gebruiken omwille van het AI gebruiken').

- Indien mogelijk, dienen de doelstellingen gekwantificeerd te worden (SMART).

- Probeer vast te stellen wat de doelpopulatie is, zodat in een later stadium data kan worden gezocht dat [representatief is daarvoor, wat bijdraagt aan de datakwaliteit](3-dat-01-datakwaliteit.md) van een algoritme.

- Om te zorgen voor voldoende draagvlak voor de beoogde doelen, is het noodzaak om [voldoende belanghebbenden te betrekken](1-pba-04-betrek-belanghebbenden.md).
Hierbij kan het ook helpen om burgers te betrekken bij de totstandkoming van de doelstellingen, bijvoorbeeld door middel van een burgerpanel of het betrekken van belangengroepen.

## Risico
Het algoritme dient niet het beoogde doel en onderliggend probleem.
Zonder eenduidigheid over het doel is geen sturing op en verantwoording over het algoritme mogelijk.
Er is dan een groter risico op fouten en/of verschillen in interpretatie.

Wanneer doelstellingen niet meetbaar zijn gemaakt, is het onmogelijk om achteraf te kwantificeren of de doelstellingen zijn behaald.
Doelstellingen zijn in dat geval moeilijk bespreekbaar.

## Bijbehorende vereiste(n) { data-search-exclude }
??? expander "Bekijk alle vereisten"
    <!-- list_vereisten_on_maatregelen_page -->

## Bronnen

- [Toetsingskader Algoritmes Algemene Rekenkamer, 1.01, 1.02](https://www.rekenkamer.nl/onderwerpen/algoritmes/documenten/publicaties/2024/05/15/het-toetsingskader-aan-de-slag)
- [Impact Assessment Mensenrechten en Algoritmes, 1.2](https://www.rijksoverheid.nl/documenten/rapporten/2021/02/25/impact-assessment-mensenrechten-en-algoritmes)
- [Onderzoekskader Algoritmes Auditdienst Rijk, SV.3, DM.7](https://www.rijksoverheid.nl/documenten/rapporten/2023/07/11/onderzoekskader-algoritmes-adr-2023)


## Voorbeelden

!!! example "Gemeente Arnhem – Parkeercontrole Scanauto"

	De gemeente Arnhem maakt gebruik van scanautos om te controleren of auto’s op de plek waar ze staan parkeerrecht hebben. Dit wordt gedaan door kentekenherkenning waarna er wordt gecontroleerd of het gescande kenteken in een database met geregistreerde parkeerrechten valt (vergunninghouder of parkeerkaart koper). Als dit niet zo is wordt dit handmatig gecontroleerd.
	De gemeente heeft verschillende subdoelen gesteld naast het hoofddoel van handhaven. Deze doelen zijn uitgewerkt rondom het meten en dus informatie vergaren. Het gaat hier om betaalbereidheid en parkeerdruk om zo een goed beeld te krijgen van de gemeente.

	Bron: [Parkeercontrole scanauto - Gemeente Arnhem](https://algoritmes.overheid.nl/nl/algoritme/parkeercontrole-scanauto-gemeente-arnhem/73165981)

Heb je een ander voorbeeld of best practice, laat het ons weten via [algoritmes@minbzk.nl](mailto:algoritmes@minbzk.nl)
