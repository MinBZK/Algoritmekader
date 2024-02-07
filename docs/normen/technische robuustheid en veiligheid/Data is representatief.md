---
title: Data is representatief

---

!!! info "Disclaimer"

    Het Algoritmekader is nog volop in ontwikkeling. Op deze plek willen we vooral aan de slag gaan op een open en transparante wijze. Het is dus niet definitief. Dat betekent dat er dingen opstaan die niet af zijn en soms zelfs fout. Mocht er iets niet kloppen, laat het ons weten via [GitHub](https://github.com/MinBZK/Algoritmekader).


## Norm
**De data die worden gebruikt is eenduidig en representatief voor de populatie waarop het algoritme wordt toegepast.**

## Risico
- De input- en outputdata voldoen qua kwaliteit, volledigheid en betrouwbaarheid niet aan de functionele eisen, waardoor verkeerde beslissingen genomen.
- Door training van het model met een niet-evenwichtige dataset presteert het model in de praktijk minder goed dan bij de tests.

## Bronnen

#### Wet- en regelgeving

#### Toetsingskaders
EC/AI HLEG April 2019 - hoofdstuk II. 1.2, 2.1§100, 1.3
ADR DM.6, DM.7, DM.9
ARK 2.12, 2.16, 2.10

## Toelichting
- Het model doet iets anders dan verwacht als inputvariabelen en outputdata een andere betekenis hebben dan verwacht.  
- De dataset waarmee het model getraind wordt moet passend zijn bij het beoogde gebruik van het model. Trainings-, test- en validatiedata moeten zijn afgestemd op de doelgroep van het algoritme en de subgroepen daarin. 

## Maatregelen
- Ga voor alle data na of deze tijdig, volledig en definitief beschikbaar is, een herleidbare afkomst heeft, consistent gecodeerd is en  duidelijke metadata bij de variabelen bevat.
- Kijk daarnaast naar het risico op datavervuiling in het proces. Stel documentatie op waarin de functionele eisen zijn opgenomen, in combinatie met resultaten van een check op het voldoen aan deze eisen. Implementeer structurele controles op correcte werking.
Vastlegging van de de keuzes zijn gemaakt bij het samenstellen van de datasets en hoe de kwaliteit hiervan gewaarborgd is. Dusdanig duidelijke omschrijving van de doelpopulatie dat deze statistisch gevalideerd kan worden. Samenvattende statistieken van inputdatasets die gebruikt zijn bij de onderbouwing van data en modelkeuze. Bij de keuze voor training- en testdata in de ontwikkelfase moet zijn gelet op zowel under- als  overfitting. 

## Rollen
Hieronder beschrijven we welke rollen er betrokken kunnen worden bij de uitvoering van deze norm. 


## Best practices
