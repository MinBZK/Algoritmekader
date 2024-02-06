---
title: Doel en keuze algoritme

---

!!! info "Disclaimer"

    Het Algoritmekader is nog volop in ontwikkeling. Op deze plek willen we vooral aan de slag gaan op een open en transparante wijze. Het is dus niet definitief. Dat betekent dat er dingen opstaan die niet af zijn en soms zelfs fout. Mocht er iets niet kloppen, laat het ons weten via [GitHub](https://github.com/MinBZK/Algoritmekader).


## Norm
**Het algoritme dat wordt gebruikt is geschikt voor het doel waarvoor het wordt ingezet.**

## Risico
- Het algoritme gebruikt een model, terwijl niet voldaan wordt aan de voorwaarden voor het gebruik ervan. 
- De hyperparameters zijn niet goed gekozen, waardoor niet goed gestuurd kan worden op het leerproces en het model suboptimaal presteert. 

## Bronnen

#### Wet- en regelgeving

#### Toetsingskaders
EC/AI HLEG April 2019 - hoofdstuk II. 1.2, 1.2
ADR DM.2, DM.3
ARK 2.06

## Toelichting
- Het moet duidelijk zijn onder welke voorwaarden het model wel of niet gebruikt kan worden. Denk hierbij bijvoorbeeld aan modeleisen voor de verdeling van data of afwijkingen van de productieset ten opzichte van de testset. Dit is dusdanig begrijpelijk dat de grenzen ook bekend zijn voor (nieuwe) medewerkers wanneer de ontwikkelaars van het model niet meer binnen de organisatie werkzaam zijn.
- Een hyperparameter is een parameter waarmee kan worden gestuurd op een trainings-/leerproces. Het uitvoeren van een peer review (4-ogen principe) en vastlegging van de code in Git kan hiervan een uitwerking zijn.

## Maatregelen
- Documenteer de grenzen van de toepasbaarheid van het model en de voorwaarden waaronder het kan worden gebruikt.
- Leg de keuze voor de hyperparameters vast en beargumenteer deze, bijvoorbeeld in Git en/of het technisch of functioneel ontwerp.

## Rollen
Hieronder beschrijven we welke rollen er betrokken kunnen worden bij de uitvoering van deze norm. 



## Best practices
Voorbeeld toevoegen van hoe er in een brief aan een burger verwezen wordt naar het [Algoritmeregister](https://algoritmes.overheid.nl/nl). 



