---
title: Automatische logregistratie voor hoog-risico ai
toelichting: AI-systemen met een hoog risico zijn ontworpen met functionaliteiten die gebeurtenissen gedurende hun levenscyclus automatisch registreren, wat vaak wordt aangeduid als "logs". Deze logs bieden een traceerbaarheidsmechanisme waarmee exploitanten en autoriteiten incidenten en fouten kunnen analyseren, naleving kunnen controleren en mogelijke risico's kunnen identificeren en aanpakken. Het doel van deze registratie is om de transparantie en verantwoordingsplicht van AI-systemen te vergroten, waardoor het beheer van risico's en incidenten verbetert.
status_vereiste: 
 - Treedt in werking op DATUM
levenscyclus: 
- dataverkenning-en-datapreparatie
- ontwikkelen
bouwblok: 
- governance
rekenregels: 
- niet-impactvol: Nee
- impactvol: Ja
machine-learning: 
- niet-impactvol: Ja
- impactvol: Ja
- hoog-risico: Ja
generatieve-ai: 
- niet-impactvol: Ja
- impactvol: Ja
- hoog-risico: Ja
---

<!-- tags -->
## Vereiste

AI-systemen met een hoog risico zijn dusdanig technisch vormgegeven dat gebeurtenissen gedurende hun levenscyclus automatisch worden geregistreerd (“logs”).

## Toelichting 

Ai-systemen met een hoog risico zijn ontworpen met functionaliteiten die gebeurtenissen gedurende hun levenscyclus automatisch registreren, wat vaak wordt aangeduid als "logs".
deze logs bieden een traceerbaarheidsmechanisme waarmee exploitanten en autoriteiten incidenten en fouten kunnen analyseren, naleving kunnen controleren en mogelijke risico's kunnen identificeren en aanpakken.
het doel van deze registratie is om de transparantie en verantwoordingsplicht van ai-systemen te vergroten, waardoor het beheer van risico's en incidenten verbetert.

## Bronnen 

| Bron                        |
|-----------------------------|
|Artikel 12(1) Registratie- AI verordening|

## Wanneer van toepassing? 

=== "Rekenregel"

	| niet-impactvol | impactvol | 
	|----------------|-----------| 
	| :material-close:{style='color: #EF5350' } | :material-check-bold:{ style='color: #4DB6AC' } |

=== "Machine learning"

	| niet-impactvol | impactvol | hoog-risico-ai | 
	|----------------|-----------|-----------| 
	| :material-check-bold:{ style='color: #4DB6AC' }  | :material-check-bold:{ style='color: #4DB6AC' } | :material-check-bold:{ style='color: #4DB6AC' } |

=== "Generatieve AI"

	| niet-impactvol | impactvol | hoog-risico-ai | 
	|----------------|-----------|-----------| 
	| :material-check-bold:{ style='color: #4DB6AC' }  | :material-check-bold:{ style='color: #4DB6AC' } | :material-check-bold:{ style='color: #4DB6AC' } |

## Risico 

Ontbreken van automatische logregistratie kan leiden tot een gebrek aan transparantie en traceerbaarheid van het AI-systeem, wat het vermogen om verantwoordelijkheid te nemen en eventuele problemen aan te pakken belemmert.

## Normen 

In afwachting van het standaardisatieproces. 

## Maatregelen 

Hier komt een lijst met relevante maatregelen om te voldoen aan dit vereiste. 
