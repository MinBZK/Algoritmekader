---
title: Betrouwbare algoritme uitkomsten

---

!!! info "Disclaimer"

    Het Algoritmekader is nog volop in ontwikkeling. Op deze plek willen we vooral aan de slag gaan op een open en transparante wijze. Het is dus niet definitief. Dat betekent dat er dingen opstaan die niet af zijn en soms zelfs fout. Mocht er iets niet kloppen, laat het ons weten via [GitHub](https://github.com/MinBZK/Algoritmekader).


## Norm
**De uitkomsten van het algoritme zijn eenduidig en betrouwbaar.**

## Risico
- Als trainings-, test- en validatiedata door elkaar lopen, treedt overfitting op en lijkt het model beter te presteren dan deze in werkelijkheid het geval is.
- Het doel van het algoritme, de functionele eisen van het model en de performance metrics sluiten onvoldoende op elkaar aan, waardoor niet kan worden vastgesteld of het model voldoende presteert, of dat de kwaliteit op orde is. 
- Door veranderingen in de data presteert het model niet meer zoals verwacht.
- Beslissingen worden genomen op basis van outputdata die verkeerd begrepen zijn.

## Bronnen

#### Wet- en regelgeving

#### Toetsingskaders
EC/AI HLEG April 2019 - hoofdstuk II. 1.1 t/m 1.6, 1.2, 2.1§100
ADR DM.1, DM.4, DM.8, DM.12, DM.5
ARK 2.19, 2.21, 2.22, 1.06, 2.15, 2.20

## Toelichting
- Vermennging van trainings-, test- en validatiedata leidt tot overfitting van het model, waardoor het goed werkt voor de data waarmee het getraind is, maar niet geschikt is voor nieuwe observaties.
- De functionele eisen moeten zijn uitgewerkt in meetbare eisen voor zowel de prestatie, de robuustheid, de bias en de uitlegbaarheid van het model. Deze eisen moeten passen bij de modelspecifieke context.
- Veranderingen in de data kunnen ertoe leiden dat de prestaties van het model achteruit gaan. Wanneer veranderingen in de data niet direct duidelijk zijn, zal periodieke evaluatie plaats moeten te vinden.
- De interpretatie van de uitkomsten van het model moet eenduidig zijn en onafhankelijk van de persoon die de beoordeling uitvoert.

## Maatregelen
- Scheiding en documentatie van de datasets voor training, testen en validatie van et model. Let in het bijzonder op wanneer het model geüpdatet wordt aan de hand van (deels) eerder gebruikte data. 
- Documentatieer alle prestatiecriteria, inclusief de relatie met de doelstellingen en de functionele eisen van het algoritme. Bewaar testresultaten waaruit blijkt dat het algoritme aan de criteria voldoet.
- Leg voor elk algoritme de kwaliteits- en prestatiedoelen vast. Stel een procesbeschrijving op voor het monitoren hiervan. Evalueer bij veranderingen in de data of het model nog aan de doelen voldoet en pas het zonodig aan.
- Eenduidige beschrijving van variabelen. Indien nodig extra toelichting in de metadata.

## Rollen
Hieronder beschrijven we welke rollen er betrokken kunnen worden bij de uitvoering van deze norm. 


## Best practices
Voorbeeld toevoegen van hoe er in een brief aan een burger verwezen wordt naar het [Algoritmeregister](https://algoritmes.overheid.nl/nl). 



