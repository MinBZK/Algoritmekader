---
title: Bewerkstellig duurzaamheid

---

!!! info "Disclaimer"

    Het Algoritmekader is nog volop in ontwikkeling. Op deze plek willen we vooral aan de slag gaan op een open en transparante wijze. Het is dus niet definitief. Dat betekent dat er dingen opstaan die niet af zijn en soms zelfs fout. Mocht er iets niet kloppen, laat het ons weten via [GitHub](https://github.com/MinBZK/Algoritmekader).


## Norm
**Bewerkstellig duurzaamheid; ook in de ontwikkeling van algoritmen.**

## Risico
De impact van het model op het milieu is disproportioneel hoog.

## Bronnen

#### Wet- en regelgeving
- [AI Act](https://artificialintelligenceact.eu/wp-content/uploads/2023/08/AI-Mandates-20-June-2023.pdf), recital 46a

#### Toetsingskaders
- SDG 11
- EC/AI HLEG April 2019 hoofdstuk II 1.6
- ADR DM.24

## Toelichting
Het trainen van een neuraal netwerk kost bijv. meer energie dan een beslisboom. Er is meegenomen of de hoeveelheid gebruikte energie proportioneel is voor het doel dat van het algoritme. Daarnaast is nagedacht hoe de milieu-impact bij de ontwikkeling zo laag mogelijk kan worden gehouden. Parameters worden bijv. tijdens het trainen niet via trial and error bepaald als deze ook afgeleid kunnen worden.

AI-systemen moeten worden ontwikkeld en gebruikt op een duurzame en milieuvriendelijke manier, evenals op een manier die ten goede komt aan alle mensen, terwijl de langetermijneffecten op het individu, de samenleving en de democratie worden gecontroleerd en beoordeeld.

## Maatregelen
Aanbeveling; geen maatregel:
Inventariseer de impact op het milieu en neem deze mee bij de modelkeuze en ontwikkeling. Maak de consequentie expliciet en leg deze op het juiste niveau vast. Neem indien nodig tegenmaatregelen. Een ultimate tegenmaatregel kan zijn het (tijdelijk) stopzetten van het algoritme.

## Rollen
Hieronder beschrijven we welke rollen er betrokken kunnen worden bij de uitvoering van deze norm. 


## Best practices

De werking van het algoritme en AI-systeem moet transparant zijn
Norm	Uitleg	verplicht voor hoog-risico AI systemen (AI Act)	verplicht voor impactvolle algoritmes	verplicht voor niet-impactvolle algoritmes
De werking van het algoritme en AI-systeem moet transparant zijn		:material-check-bold:{ style="color: #4DB6AC" }	:material-check-bold:{ style="color: #4DB6AC" }	:material-close:{ style="color: #EF5350" }
Risico
Ontbreken transparantie voor burgers/bedrijven/stakeholders (belanghebbenden)

Bronnen
Wet- en regelgeving
AI Act, artikel 60
Toetsingskader
EC/AI HLEG April 2019 - Hoofdstuk II.1.4
ARK 2.23/2.07
Standaarden
Maatregelen
Onderstaand overzicht laat zien welke denkbare maatregelen kunnen worden getroffen om te voldoen aan de normen. Deze maatregelen dienen ter inspiratie. Organisaties zullen zelf moeten bepalen of zij deze maatregelen toepassen.

Selecteer eerst de gebruikte techniek

=== "Rekenregels"

De maatregelen zijn afhankelijk van het risiconiveau van het algoritme. 

=== "impactvol"

    | **Maatregelen bij norm: Transparantie** | **Uitleg** | **Fase Algoritme Levenscyclus** | **Inkoopproces** | **Betrokken actoren** |
    |-----------------------------------------|------------|:-------------------------------:|:----------------:|:---------------------:|
    |                                         |            |                                 |                  |                       |
    |                                         |            |                                 |                  |                       |

=== "niet impactvol"

    je hoeft niks te doen
=== "Machine learning"

=== "hoog risico AI Act"
    
    | **Maatregelen bij norm: Transparantie**                                                                                                          | **Uitleg**                                                                                                                             |            **Fase Algoritme Levenscyclus**            |        **Inkoopproces**        |                                       **Betrokken actoren**                                        |
    |--------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------:|:------------------------------:|:--------------------------------------------------------------------------------------------------:|
    | Bij de output van het algoritme moet waar mogelijk worden getoond welke variabelen een stuwend of dalend effect hebben gehad op de voorspelling. | Hiermee is het voor de gebruiker en belanghebbende inzichtelijker wat heeft bijgedragen aan een hogere of lagere voorspellende waarde. | Ontwerp-, Ontwikkel-, Validatie- en Implementatiefase | Selectiefase en Contractbeheer | Data Engineer, Data Scientist, Product Owner, Behoeftesteller, Inkoopadviseur en Contractbeheerder |
    |                                                                                                                                                  |                                                                                                                                        |                                                       |                                |                                                                                                    |

=== "impactvol"

    | **Maatregelen bij norm: Transparantie**                                                                                                          | **Uitleg**                                                                                                                             |            **Fase Algoritme Levenscyclus**            |        **Inkoopproces**        |                                       **Betrokken actoren**                                        |
    |--------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------:|:------------------------------:|:--------------------------------------------------------------------------------------------------:|
    | Bij de output van het algoritme moet waar mogelijk worden getoond welke variabelen een stuwend of dalend effect hebben gehad op de voorspelling. | Hiermee is het voor de gebruiker en belanghebbende inzichtelijker wat heeft bijgedragen aan een hogere of lagere voorspellende waarde. | Ontwerp-, Ontwikkel-, Validatie- en Implementatiefase | Selectiefase en Contractbeheer | Data Engineer, Data Scientist, Product Owner, Behoeftesteller, Inkoopadviseur en Contractbeheerder |
    |                                                                                                                                                  |                                                                                                                                        |                                                       |                                |                                                                                                    |

=== "niet impactvol"
    
    | **Maatregelen bij norm: Transparantie** | **Uitleg** | **Fase Algoritme Levenscyclus** | **Inkoopproces** | **Betrokken actoren** |
    |-----------------------------------------|------------|:-------------------------------:|:----------------:|:---------------------:|
    |                                         |            |                                 |                  |                       |
    |                                         |            |                                 |                  |                       |
=== "Generatieve AI"

=== "hoog risico AI"

    | **Maatregelen bij norm: Transparantie** | **Uitleg** | **Fase Algoritme Levenscyclus** | **Inkoopproces** | **Betrokken actoren** |
    |-----------------------------------------|------------|:-------------------------------:|:----------------:|:---------------------:|
    |                                         |            |                                 |                  |                       |
    |                                         |            |                                 |                  |                       |

=== "impactvol"

    | **Maatregelen bij norm: Transparantie** | **Uitleg** | **Fase Algoritme Levenscyclus** | **Inkoopproces** | **Betrokken actoren** |
    |-----------------------------------------|------------|:-------------------------------:|:----------------:|:---------------------:|
    |                                         |            |                                 |                  |                       |
    |                                         |            |                                 |                  |                       |

=== "niet impactvol"

    | **Maatregelen bij norm: Transparantie** | **Uitleg** | **Fase Algoritme Levenscyclus** | **Inkoopproces** | **Betrokken actoren** |
    |-----------------------------------------|------------|:-------------------------------:|:----------------:|:---------------------:|
    |                                         |            |                                 |                  |                       |
    |                                         |            |                                 |                  |                       |
Toelichting


Maatregelen






