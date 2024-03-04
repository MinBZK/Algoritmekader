---
title: Aantoonbaarheid

---

!!! info "Disclaimer"

    Het Algoritmekader is nog volop in ontwikkeling. Op deze plek willen we vooral aan de slag gaan op een open en transparante wijze. Het is dus niet definitief. Dat betekent dat er dingen opstaan die niet af zijn en soms zelfs fout. Mocht er iets niet kloppen, laat het ons weten via [GitHub](https://github.com/MinBZK/Algoritmekader).


## Norm
**.**

# De werking van het algoritmen of AI-systeem is aantoonbaar

| **Norm**                                                                                                                  | **Uitleg**                  | **verplicht voor hoog-risico AI systemen (AI Act)** |    **verplicht voor impactvolle algoritmes**    | **verplicht voor niet-impactvolle algoritmes**  |
|---------------------------------------------------------------------------------------------------------------------------|-----------------------------|:---------------------------------------------------:|:-----------------------------------------------:|:-----------------------------------------------:|
| Aantoonbare werking van het algoritmen of AI-systeem | Technische documentatie moet worden opgesteld op een manier die aantoont dat het hoog risico AI-systeem voldoet aan de eisen, en de nationale toezichthoudende autoriteiten en aangemelde instanties voorzien van de nodige informatie om de naleving van de eisen voor het AI-systeem te beoordelen |   :material-check-bold:{ style="color: #4DB6AC" }   | :material-check-bold:{ style="color: #4DB6AC" } | :material-close:{ style="color: #EF5350" } |


## Risico
In progress

## Bronnen

#### Wet- en regelgeving
- [AI Act](https://artificialintelligenceact.eu/wp-content/uploads/2023/08/AI-Mandates-20-June-2023.pdf), artikel 11
- Bijlage IV bij AI-verordening 


#### Toetsingskaders


#### Standaarden


## Maatregelen
Onderstaand overzicht laat zien welke denkbare maatregelen kunnen worden getroffen om te voldoen aan de normen. Deze maatregelen dienen ter inspiratie. Organisaties zullen zelf moeten bepalen of zij deze maatregelen toepassen. 


Selecteer eerst de gebruikte techniek

=== "Rekenregels"

    De maatregelen zijn afhankelijk van het risiconiveau van het algoritme. 
    
    === "impactvol"

        | **Maatregelen bij norm: Technische documentatie** | **Uitleg** | **Fase Algoritme Levenscyclus** | **Inkoopproces** | **Betrokken actoren** |
        |-----------------------------------------|------------|:-------------------------------:|:----------------:|:---------------------:|
        |  De technische werking van het algoritme is beschreven | In het Algoritmeregister moeten impactvolle algoritmen worden opgenomen. Onderdeel hiervan is een beschrijving geven van de technische werking. | Validatie-, Implementatie en Monitoringsfase | Fase 3: Uitvoering opdracht: Contractbeheer | Product Owner, Data Scientist, Proceseigenaar, Functioneel Beheerder, Architect, leverancier |

    === "niet impactvol"

        Er hoeven geen maatregelen te worden getroffen.

    
=== "Machine learning"

    === "hoog risico AI Act"
        
        | **Maatregelen bij norm: Technische documentatie**                                                                                                          | **Uitleg**                                                                                                                             |            **Fase Algoritme Levenscyclus**            |        **Inkoopproces**        |                                       **Betrokken actoren**                                        |
        |--------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------:|:------------------------------:|:--------------------------------------------------------------------------------------------------:|
        Informatie over het AI-systeem is uitgewerkt door de ontwikkelaar conform bijlage IV AI-verordening en wordt periodiek bijgewerkt. | Bijlage IV bevat de aspecten die minimaal beschreven moeten worden als het gaat om hoge risico AI-systemen. | Ontwikkel-, Validatie, Implementatie en Monitoringsfase. | Fase 1: Voorbereiding opdracht: Specificeren, Fase 3: Uitvoeren opdracht Contractbeheer | Product Owner, Data Scientist, Proceseigenaar, Functioneel Beheerder, Architect, Leverancier |
                                                                                                                                                                                         

    === "impactvol"

        | **Maatregelen bij norm: Technische documentatie**                                                                                                          | **Uitleg**                                                                                                                             |            **Fase Algoritme Levenscyclus**            |        **Inkoopproces**        |                                       **Betrokken actoren**                             |--------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------:|:------------------------------:|:--------------------------------------------------------------------------------------------------:|
        |  De technische werking van het algoritme is beschreven | In het Algoritmeregister moeten impactvolle algoritmen worden opgenomen. Onderdeel hiervan is een beschrijving geven van de technische werking. | Validatie-, Implementatie en Monitoringsfase | Fase 3: Uitvoering opdracht: Contractbeheer | Product Owner, Data Scientist, Proceseigenaar, Functioneel Beheerder, Architect, leverancier |
    
        |                                                                                                                                                  |                                                                                                                                        |                                                       |                                |                                                                                                    |

    === "niet impactvol"
        
        | **Maatregelen bij norm: Technische documentatie** | **Uitleg** | **Fase Algoritme Levenscyclus** | **Inkoopproces** | **Betrokken actoren** |
        |-----------------------------------------|------------|:-------------------------------:|:----------------:|:---------------------:|
        |                                         |            |                                 |                  |                       |
        |                                         |            |                                 |                  |                       |
=== "Generatieve AI"

    === "hoog risico AI"

        | **Maatregelen bij norm: Technische documentatie** | **Uitleg** | **Fase Algoritme Levenscyclus** | **Inkoopproces** | **Betrokken actoren** |
        |-----------------------------------------|------------|:-------------------------------:|:----------------:|:---------------------:|
        | Informatie over het AI-systeem is uitgewerkt conform bijlage IV AI-verordening. Deze informatie wordt periodiek bijgewerkt. | Bijlage IV bevat de aspecten die minimaal beschreven moeten worden als het gaat om hoge risico AI-systemen. | Ontwikkel-, Validatie, Implementatie en Monitoringsfase. | Fase 1: Voorbereiding opdracht: Specificeren, Fase 3: Uitvoeren opdracht Contractbeheer | Product Owner, Data Scientist, Proceseigenaar, Functioneel Beheerder, Architect |
        |                                         |            |                                 |                  |                       |

    === "impactvol"

        | **Maatregelen bij norm: Technische documentatie** | **Uitleg** | **Fase Algoritme Levenscyclus** | **Inkoopproces** | **Betrokken actoren** |
        |-----------------------------------------|------------|:-------------------------------:|:----------------:|:---------------------:|
        |                                         |            |                                 |                  |                       |
        |                                         |            |                                 |                  |                       |

    === "niet impactvol"

        | **Maatregelen bij norm: Technische documentatie** | **Uitleg** | **Fase Algoritme Levenscyclus** | **Inkoopproces** | **Betrokken actoren** |
        |-----------------------------------------|------------|:-------------------------------:|:----------------:|:---------------------:|
        |                                         |            |                                 |                  |                       |
        |                                         |            |                                 |                  |                       |



## Best practices




