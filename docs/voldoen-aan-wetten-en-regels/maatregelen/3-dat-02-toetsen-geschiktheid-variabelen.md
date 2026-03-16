---
title: Toets en analyseer of de inputvariabelen of risicoindicatoren geschikt zijn voor het beoogde algoritme
id: urn:nl:ak:mtr:dat-02
toelichting:
vereiste:
- grw-02-non-discriminatie
- avg-01-persoonsgegevens-worden-rechtmatig-verwerkt
- avg-04-proportionaliteit-en-subsidiariteit
- avg-10-recht-op-niet-geautomatiseerde-besluitvorming
levenscyclus:
- dataverkenning-en-datapreparatie
- verificatie-en-validatie
onderwerp:
- data
- bias-en-non-discriminatie
- privacy-en-gegevensbescherming
rollen:
- ontwikkelaar
- beleid-en-advies
sources:
hide:
- navigation
version: "e33a2081"
version_date: "2025-08-26"
---

<!-- tags -->

## Maatregel
Toets en analyseer of de inputvariabelen of risicoindicatoren geschikt zijn voor de beoogde toepassing.

## Toelichting
Deze maatregel dekt (een gedeelte van) een eis die vanuit het [advies vanuit de Autoriteit Persoonsgegevens (AP) over geautomatiseerde besluitvorming](https://www.autoriteitpersoonsgegevens.nl/documenten/advies-geautomatiseerde-besluitvorming) wordt gesteld, namelijk dat het risico op discriminatoire verwerkingen is onderzocht en ondervangen.

Analyseer welke variabelen en risicoindicatoren geschikt en wenselijk zijn om te gebruiken als inputdata voor het beoogde algoritme.

!!! note "Opmerking"

    Deze maatregel is specifiek relevant voor de situatie van risicoprofilering. Maar ook voor andere toepassingen zijn deze stappen aanbevolen.

Doorloop voor iedere potentiële indicator de volgende stappen:

1. Ga na of het wettelijk gezien is toegestaan om de variabele te gebruiken voor de beoogde toepassing:

    - De [Algemene Wet Gelijke Behandeling](https://wetten.overheid.nl/BWBR0006502/2020-01-01) verbiedt het directe onderscheid op basis van verschillende kenmerken die bijvoorbeeld relatie hebben met ras of nationaliteit.
    - De [Algemene Verordening Gegevensbescherming](https://www.autoriteitpersoonsgegevens.nl/themas/basis-avg/avg-algemeen/de-avg-in-het-kort) verbiedt het onrechtmatig verwerking van persoonsgegevens.

2. Ga na of de variabele of indicator een proxy is voor [kwetsbare groepen](2-owp-08-kwetsbare-groepen.md). Controleer bijvoorbeeld of er een correlatie bestaat tussen de variabele en nationaliteit of ras, of maak gebruik van bestaande (wetenschappelijke) inzichten uit bijvoorbeeld openbare data. Wanneer je data wilt verwerken om deze proxy's te onderzoeken, houdt dan rekening met geldende wet- en regelgeving. Het verzamelen en verwerken van data over kwetsbare groepen kan in strijd zijn met privacy vereisten uit bijvoorbeeld de Algemene Verordening Gegevensbescherming. Het is daarom van belang om duidelijk afwegingen te maken tussen privacy en het analyseren van proxy's die rekening houdt met de juridische en ethische vereisten.

3. Bepaal of de [datakwaliteit](3-dat-01-datakwaliteit.md) van de variabele of indicator voldoende is. Bepaal of de beschikbare data voldoende representatief is voor het fenomeen dat bedoeld wordt.

4. Ga na of de variabele of indicator een *statistisch* verband heeft met het [beoogde doel](1-pba-02-formuleren-doelstelling.md). Maak hiervoor gebruik van een [aselecte steekproef](6-imp-02-aselecte-steekproeven.md) uit de relevante populatie om de hypothese dat de variabele verband heeft met het beoogde doel statistisch te toetsen. Toets of dit verband significant is.

5. Ga na of de variabele of indicator een *inhoudelijk* verband heeft met het [beoogde doel](1-pba-02-formuleren-doelstelling.md). Naast een statistisch verband kan ook een inhoudelijk verband bijdragen om het gebruik van de indicator te rechtvaardigen.

## Bijbehorende vereiste(n) { data-search-exclude }
??? expander "Bekijk alle vereisten"
    <!-- list_vereisten_on_maatregelen_page -->

## Risico
Indien de variabelen niet voldoende worden getoetst op geschikheid bestaat het risico dat deze variabelen onrechtmatig worden gebruikt, of dat het gebruik van deze variabelen leidt tot nadelige effecten. Dit kan leiden tot discriminerende effecten van het algoritme.

## Bronnen
- [Toetsingskader risicoprofilering – Normen tegen discriminatie op grond van ras en nationaliteit, College voor de Rechten van de Mens](../hulpmiddelen/toetsingskader-risicoprofilering.md)
- [AP-advies geautomatiseerde besluitvorming](https://www.autoriteitpersoonsgegevens.nl/documenten/advies-geautomatiseerde-besluitvorming)

## Voorbeeld
Heb je een voorbeeld of best practice, laat het ons weten via [algoritmes@minbzk.nl](mailto:algoritmes@minbzk.nl)
