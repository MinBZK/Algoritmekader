---
title: Een DPIA is verplicht bij hoog risico
toelichting: Een Data Protection Impact Assessment (DPIA) is verplicht, indien een verwerking van persoonsgegevens waarschijnlijk een hoog risico inhoudt voor de rechten en vrijheden van natuurlijke personen. Deze beoordeling identificeert en beperkt potentiële risico's en zorgt ervoor dat passende maatregelen worden genomen om de privacy van individuen te beschermen. Deze verplichting draagt bij aan een zorgvuldige en verantwoorde omgang met persoonsgegevens in AI-systemen en algoritmes, waardoor de privacy van individuen wordt gewaarborgd.
status_vereiste: 
 - geldend
levenscyclus: 
- ontwerp
- dataverkenning-en-datapreparatie
- ontwikkelen
- verificatie-en-validatie
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

Gebruiksverantwoordelijken van AI-systemen met een hoog risico gebruiken die informatie op grond van artikel 13 AI Verordening om hun verplichting na te komen om een gegevensbeschermingseffectbeoordeling uit te voeren. 

## Bronnen 

| Bron                        |
|-----------------------------|
|[Artikel 35 Algemene Verordening Gegevensbescherming](https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=CELEX:32016R0679) |
|[Artikel 26(9) Verordening Artificiële Intelligentie](https://www.europarl.europa.eu/doceo/document/TA-9-2024-0138-FNL-COR01_NL.pdf) |

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

## Maatregelen 

<!-- list_maatregelen vereiste/dpia_verplicht_bij_hoog_risico --> 
