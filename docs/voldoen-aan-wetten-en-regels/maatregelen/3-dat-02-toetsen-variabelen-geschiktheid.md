---
title: Toets en analyseer of de inputvariabelen of risicoindicatoren geschikt zijn voor het beoogde algoritme
id: urn:nl:ak:mtr:dat-02
toelichting: 
vereiste:
- grw-02-non-discriminatie
- avg-01-persoonsgegevens-worden-rechtmatig-verwerkt
levenscyclus:
- dataverkenning-en-datapreparatie
- verificatie-en-validatie
onderwerp:
- data
- bias-en-non-discriminatie
rollen:
- ontwikkelaar
- beleid-en-advies
- privacy-en-gegevensbescherming
sources:
hide:
- navigation
---

<!-- tags -->

## Maatregel
Toets en analyseer of de inputvariabelen of risicoindicatoren geschikt zijn voor de beoogde toepassing.

## Toelichting
Analyseer welke variabelen en risicoindicatoren geschikt en wenselijk zijn om te gebruiken als inputdata voor het beoogde algoritme. 

!!! note "Opmerking"

    Deze maatregel is specifiek relevant voor de situatie van risicoprofilering. Maar ook voor andere toepassingen zijn deze stappen aanbevolen. 

Doorloop voor iedere potentiële indicator de volgende stappen:

1. Ga na of het wettelijk gezien is toegestaan om de variabele te gebruiken voor de beoogde toepassing:

    - De [Algemene Wet Gelijke Behandeling](https://wetten.overheid.nl/BWBR0006502/2020-01-01) verbiedt het directe onderscheid op basis van verschillende kenmerken die bijvoorbeeld relatie hebben met ras of nationaliteit.
    - De [Algemene Verordening Gegevensbescherming](https://www.autoriteitpersoonsgegevens.nl/themas/basis-avg/avg-algemeen/de-avg-in-het-kort) verbiedt het onrechtmatig verwerking van persoonsgegevens. 

2. Ga na of de variabele of indicator een *inhoudelijk* verband heeft met het [beoogde doel](1-pba-02-formuleren-doelstelling.md). Een correlatie in de data is in veel gevallen niet voldoende om het gebruik te rechtvaardigen. 

3. Ga na of de variabele of indicator een proxy is voor [kwetsbare groepen](2-owp-08-kwetsbare-groepen.md). Controleer bijvoorbeeld of er een correlatie bestaat tussen de variabele en nationaliteit of ras. Dit 

4. Bepaal of de [datakwaliteit](3-dat-01-datakwaliteit.md) van de variabele of indicator voldoende is. Bepaal of de beschikbare data voldoende representatief is voor het fenomeen dat bedoeld wordt.   

5. Ga na of de variabele of indicator een *statistisch* verband heeft met het [beoogde doel](1-pba-02-formuleren-doelstelling.md). Maak hiervoor gebruik van een [aselecte steekproef](6-imp-02-aselecte-steekproeven.md) uit de relevante populatie om de hypothese dat de variabele verband heeft met het beoogde doel statistisch te toetsen. Toets of dit verband significant is. 

## Bijbehorende vereiste(n) { data-search-exclude }
??? expander "Bekijk alle vereisten"
    <!-- list_vereisten_on_maatregelen_page -->

## Risico
Indien de variabelen niet voldoende worden getoetst op geschikheid bestaat het risico dat deze variabelen onrechtmatig worden gebruikt, of dat het gebruik van deze variabelen leidt tot nadelige effecten. Dit kan leiden tot discriminerende effecten van het algoritme. 

## Bronnen
- [Toetsingskader risicoprofilering – Normen tegen discriminatie op grond van ras en nationaliteit, College voor de Rechten van de Mens](https://publicaties.mensenrechten.nl/publicatie/4093c026-ae41-4c1d-aa78-4ce0e205b5de)
- [Publieke standaard profileringsalgoritme, Algorithm Audit](https://algorithmaudit.eu/nl/knowledge-platform/knowledge-base/public_standard_profiling/)

## Voorbeeld
Heb je een voorbeeld of best practice, laat het ons weten via [algoritmes@minbzk.nl](mailto:algoritmes@minbzk.nl) 

