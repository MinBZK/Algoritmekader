---
title: Documenteer en beargumenteer de keuze voor gebruikte model en parameters
id: urn:nl:ak:mtr:owk-11
toelichting: Documenteer en beargumenteer de keuze voor gebruikte model en parameters.
levenscyclus:
- ontwikkelen
- implementatie
onderwerp:
- technische-robuustheid-en-veiligheid
rollen:
- ontwikkelaar
vereiste:
- aia-10-nauwkeurigheid-robuustheid-cyberbeveiliging
- aia-06-technische-documentatie
- aia-08-transparantie-aan-gebruiksverantwoordelijken
- awb-02-motiveringsbeginsel
sources:
  ADR: DM.2
  ARK: 
  - 2.02
  - 2.03
  - 2.16
  - 2.17
hide:
- navigation
- toc
---

<!-- Let op! onderstaande regel met 'tags' niet weghalen! Deze maakt automatisch de knopjes op basis van de metadata  -->
<!-- tags -->

## Maatregel
Documenteer en beargumenteer de keuze voor gebruikte model en parameters. 

## Toelichting
Documenteer en beargumenteer tijdens de ontwikkeling van een algoritme de technische keuzes die gemaakt worden voor het betreffende model. 

Dit houdt in dat ten minste het volgende wordt gedocumenteerd en beargumenteer:

- keuzes voor (hyper)parameters
- keuzes voor het gebruikte model
- wordt er voldaan aan onderliggende (statistische) aannames van het model?

Onderbouw deze keuzes van parameters en verschillende modellen bijvoorbeeld op basis van de gemeten [nauwkeurigheid](5-ver-02-evalueer-nauwkeurigheid.md). 

Goede documentatie zorgt er voor dat opgebouwde kennis door kan worden gegeven. 


## Bijbehorende vereiste(n) { data-search-exclude }
??? expander "Bekijk alle vereisten"
    <!-- list_vereisten_on_maatregelen_page -->

## Risico
Wanneer keuzes niet goed worden gedocumenteerd en onderbouwd is later niet te herleiden waarom welke keuzes zijn gemaakt in ontwerp en implementatie waardoor transparantie en verantwoording niet mogelijk is. 

## Bronnen
- [Onderzoekskader Auditdienst Rijk, DM.2](https://www.rijksoverheid.nl/documenten/rapporten/2023/07/11/onderzoekskader-algoritmes-adr-2023)
- [Toetinskader Algemene Rekenkamer, 2.02, 2.03, 2.16, 2.17](https://www.rekenkamer.nl/onderwerpen/algoritmes/documenten/publicaties/2024/05/15/het-toetsingskader-aan-de-slag) 

## Voorbeeld
<!-- Voeg hier een voorbeeld toe, door er bijvoorbeeld naar te verwijzen -->
