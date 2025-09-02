---
title: Controleer en verbeter regelmatig de kwaliteit van het algoritme
id: urn:nl:ak:mtr:org-12
toelichting: Bij kwaliteit kan worden gedacht aan doeltreffenheid, doelmatigheid, betrouwbaarheid en accuraatheid (geschiktheid) en non-discriminatie.
vereiste:
- aia-11-systeem-voor-kwaliteitsbeheer
- aia-27-beoordelen-gevolgen-grondrechten
levenscyclus:
- organisatieverantwoordelijkheden
- monitoring-en-beheer
onderwerp:
- governance
- menselijke-controle
rollen:
- projectleider
- beleid-en-advies
sources:
  ADR:
  - SV.15
  - SV.16
  - SV.17
  ARK: 1.08
hide:
- navigation
- toc

version: "92559128"
version_date: "2025-07-04"
---

<!-- Let op! onderstaande regel met 'tags' niet weghalen! Deze maakt automatisch de knopjes op basis van de metadata  -->
<!-- tags -->

## Maatregel
 Richt een proces in voor een periodieke evaluatie van de kwaliteit van het algoritme.

## Toelichting
- Het is van belang dat een proces wordt ingericht waarmee periodiek de kwaliteit van algoritmes wordt geëvalueerd.
-	Bij kwaliteit van een algoritme kan worden gedacht aan doeltreffenheid, doelmatigheid, betrouwbaarheid en accuraatheid (geschiktheid), non-discriminatie en menselijke controle.
-	Hieronder vallen het analyseren en evalueren van ingediende klachten en incidenten.
-	Hieronder vallen ook het analyseren en evalueren van besluiten door of aan de hand van het algoritme.
- Na verloop van tijd kan de accuraatheid van machine learning modellen bijvoorbeeld wijzigen of kan het gebeuren dat bepaalde groepen (indien van toepassing) anders worden behandeld.
- Het is van belang dat monitoringsactiviteiten worden ingericht om deze kwaliteitsaspecten tijdig te beoordelen.
- Als er ongewenste wijzigingen plaatsvinden met betrekking tot de kwaliteit, moeten die worden geëvalueerd en zullen maatregelen moeten worden getroffen om deze te herstellen.
- Het proces moet er voor zorgen dat de juiste experts of stakeholders worden betrokken bij het proces van evaluatie en het treffen van passende maatregelen.

Let op! Sommige maatregelen in het Algoritmekader gaan dieper in op het uitvoeren van risicoanalyses.

## Risico
Zonder evaluatie van de kwaliteit van het algoritme is er geen goede sturing, beheersing en verantwoording mogelijk als er ongewenste wijzigingen plaatsvinden in het algoritme of AI-systeem.

## Bijbehorende vereiste(n) { data-search-exclude }
<!-- Let op! onderstaande regel met 'list_vereisten_on_maatregelen_page' niet weghalen! Deze maakt automatisch een lijst van bijbehorende verseisten op basis van de metadata  -->
??? expander "Bekijk alle vereisten"
    <!-- list_vereisten_on_maatregelen_page -->

## Bronnen
- [Onderzoekskader Algoritmes Auditdienst Rijk, SV.15, SV.16, SV.17 ](https://www.rijksoverheid.nl/documenten/rapporten/2023/07/11/onderzoekskader-algoritmes-adr-2023)
- [Toetsingskader Algoritmes Algemene Rekenkamer, 1.08](https://www.rekenkamer.nl/onderwerpen/algoritmes/documenten/publicaties/2024/05/15/het-toetsingskader-aan-de-slag)


## Voorbeelden

!!! example "Douane - Detecteren risico’s voor naleving vergunningsplicht"

	De Douane maakt gebruik van een algoritme om te selecteren welke goederen een (extra) controle krijgen. Dit wordt gedaan op basis van aangiftegegevens die bedrijven aanleveren. Op basis van deze data wordt een vergelijking gemaakt met een bekend risicoprofiel. Deze risicoprofielen worden periodiek gecontroleerd aan de hand van de hoeveelheid kloppende controles. Daarnaast wordt ieder jaar per profiel gekeken of deze verfijnd, verlengd of beëindigd moeten worden. Op deze manier wordt regelmatig gecontroleerd of het algoritme nog voldoende functioneert.

	Bron: [Detecteren risico’s voor naleving vergunningsplicht voor de uitvoer sanctiemaatregelen](https://algoritmes.overheid.nl/nl/algoritme/detecteren-risicos-voor-naleving-vergunningsplicht-voor-de-uitvoer-sanctiemaatregelen-douane/41675247#verantwoordGebruik)

Heb je een ander voorbeeld of best practice, laat het ons weten via [algoritmes@minbzk.nl](mailto:algoritmes@minbzk.nl)
