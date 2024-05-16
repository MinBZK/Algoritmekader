---
title: Een geb/dpia is verplicht bij hoog risico
toelichting: Een Gegevensbeschermingseffectbeoordeling (GEB) of Data Protection Impact Assessment (DPIA) is verplicht wanneer de verwerking van persoonsgegevens waarschijnlijk een hoog risico met zich meebrengt voor de rechten en vrijheden van natuurlijke personen. Deze beoordeling identificeert en beperkt potentiële risico's en zorgt ervoor dat passende maatregelen worden genomen om de privacy van individuen te beschermen. Deze verplichting draagt bij aan een zorgvuldige en verantwoorde omgang met persoonsgegevens in AI-systemen en algoritmes, waardoor de privacy van individuen wordt gewaarborgd.

status_vereiste: 
 - Geldend
levenscyclus: 
- ontwerp
- dataverkenning-en-datapreparatie
- ontwikkelen
- validatie
bouwblok: 
- privacy-en-gegevensbescherming
rollen:
- privacy-officer
rekenregels: 
- niet-impactvol: Nee
- impactvol: Ja
machine-learning: 
- niet-impactvol: Nee
- impactvol: Ja
- hoog-risico: Ja
generatieve-ai: 
- niet-impactvol: Nee
- impactvol: Ja
- hoog-risico: Ja
---

<!-- tags -->
## Vereiste

Een gegevensbeschermingseffectbeoordeling (DPIA) is verplicht, indien een verwerking van persoonsgegevens waarschijnlijk een hoog risico inhoudt voor de rechten en vrijheden van natuurlijke personen.

## Toelichting 

Een Gegevensbeschermingseffectbeoordeling (GEB) of Data Protection Impact Assessment (DPIA) is verplicht wanneer de verwerking van persoonsgegevens waarschijnlijk een hoog risico met zich meebrengt voor de rechten en vrijheden van natuurlijke personen.
Deze beoordeling identificeert en beperkt potentiële risico's en zorgt ervoor dat passende maatregelen worden genomen om de privacy van individuen te beschermen.
Deze verplichting draagt bij aan een zorgvuldige en verantwoorde omgang met persoonsgegevens in AI-systemen en algoritmes, waardoor de privacy van individuen wordt gewaarborgd.


## Bronnen 

| Bron                        |
|-----------------------------|
|Artikel 35 AVG|

## Wanneer van toepassing? 

=== "Rekenregel"

	| niet-impactvol | impactvol | 
	|----------------|-----------| 
	| :material-close:{style='color: #EF5350' } | :material-check-bold:{ style='color: #4DB6AC' } |

=== "Machine learning"

	| niet-impactvol | impactvol | hoog-risico-ai | 
	|----------------|-----------|-----------| 
	| :material-close:{style='color: #EF5350' } | :material-check-bold:{ style='color: #4DB6AC' } | :material-check-bold:{ style='color: #4DB6AC' } |

=== "Generatieve AI"

	| niet-impactvol | impactvol | hoog-risico-ai | 
	|----------------|-----------|-----------| 
	| :material-close:{style='color: #EF5350' } | :material-check-bold:{ style='color: #4DB6AC' } | :material-check-bold:{ style='color: #4DB6AC' } |

## Risico 

Het niet evalueren van de impact van het verwerking van persoonsgegevens in AI-systemen en algoritmes kan resulteren in het niet onderkennen van de bijbehorende risico's  en het niet op tijd te mitigieren van deze risico's.
Dit kan leiden tot potentiële schendingen van de rechten en vrijheden van betrokkenen.

## Normen 

In afwachting van het standaardisatieproces. 

## Maatregelen 

Hier komt een lijst met relevante maatregelen om te voldoen aan dit vereiste. 
