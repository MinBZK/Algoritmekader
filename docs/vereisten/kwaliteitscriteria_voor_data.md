---
title: Data van hoog-risico ai moet voldoen aan kwaliteitscriteria
toelichting: AI-systemen met een hoog risico die data gebruiken voor het trainen van AI-modellen, moeten gebaseerd zijn op datasets die voldoen aan specifieke kwaliteitscriteria. Deze criteria zorgen ervoor dat de data geschikt zijn voor training, validatie en tests, wat de betrouwbaarheid en nauwkeurigheid van het AI-systeem waarborgt. De kwaliteitscriteria is te vinden in leden 2 t/m 5 van artikel 10 van de AI-verordening. Bijvoorbeeld datasets moeten aan praktijken voor databeheer voldoen en moeten relevant, representatief, accuraat en volledig zijn.
status_vereiste: 
 - geldend
levenscyclus: 
- ontwerp
- dataverkenning-en-datapreparatie
- verificatie-en-validatie
bouwblok: 
- governance
- data
rekenregels: 
- niet-impactvol: Nee
- impactvol: Nee
machine-learning: 
- niet-impactvol: Ja
- impactvol: Nee
- hoog-risico: Ja
generatieve-ai: 
- niet-impactvol: Nee
- impactvol: Nee
- hoog-risico: Ja
---

<!-- tags -->

## Vereiste

AI-systemen met een hoog risico die technieken gebruiken die het trainen van AI-modellen met data omvatten, worden ontwikkeld op basis van datasets voor training, validatie en tests die voldoen aan de kwaliteitscriteria telkens wanneer dergelijke datasets worden gebruikt.

## Toelichting 

AI-systemen met een hoog risico die data gebruiken voor het trainen van AI-modellen, moeten gebaseerd zijn op datasets die voldoen aan specifieke kwaliteitscriteria.
Deze criteria zorgen ervoor dat de data geschikt zijn voor training, validatie en tests, wat de betrouwbaarheid en nauwkeurigheid van het AI-systeem waarborgt.

Deze vereiste houdt in dat de gebruikte datasets onder meer moeten voldoen aan:
- datasets voor training, validatie en tests worden onderworpen aan praktijken op het gebied van databeheer die stroken met het beoogde doel van het AI-systeem met een hoog risico. Dit heeft in het bijzonder betrekking op relevante ontwerpkeuzes, processen voor dataverzameling, verwerkingsactiviteiten voor datavoorbereiding, het opstellen van aannames met name betrekking tot de informatie die de data moeten meten en vertegenwoordigen, beschikbaarheid, kwantiteit en geschiktheid van de datasets en een beoordeling op mogelijke vooringenomenheid en passende maatregelen om deze vooringenomenheid op te sporen, te voorkomen en te beperken. 
- datasets voor training, validatie en tests zijn relevant, voldoende representatief en zoveel mogelijk foutenvrij en volledig met het oog op het beoogde doel.
- Er wordt rekening gehouden met de eigenschappen of elementen die specifiek zijn voor een bepaalde geografische, contextuele, functionele of gedragsomgeving waarin het AI-systeem wordt gebruikt.

## Bronnen 

| Bron                        |
|-----------------------------|
|[Artikel 10(1) Verordening Artificiële Intelligentie](https://www.europarl.europa.eu/doceo/document/TA-9-2024-0138-FNL-COR01_NL.pdf)|

## Wanneer van toepassing? 

=== "Rekenregel"

	| niet-impactvol | impactvol | 
	|----------------|-----------| 
	| :material-close:{style='color: #EF5350' } | :material-close:{style='color: #EF5350' } |

=== "Machine learning"

	| niet-impactvol | impactvol | hoog-risico-ai | 
	|----------------|-----------|-----------| 
	| :material-check-bold:{ style='color: #4DB6AC' }  | :material-close:{style='color: #EF5350' } | :material-check-bold:{ style='color: #4DB6AC' } |

=== "Generatieve AI"

	| niet-impactvol | impactvol | hoog-risico-ai | 
	|----------------|-----------|-----------| 
	| :material-close:{style='color: #EF5350' } | :material-close:{style='color: #EF5350' } | :material-check-bold:{ style='color: #4DB6AC' } |

## Risico 

Gebruik van laagkwalitatieve of bevooroordeelde datasets kan leiden tot onbetrouwbare en oneerlijke AI-besluitvorming.
Onvoldoende kwaliteitsborging van testdata kan leiden tot vertekende resultaten en gebrekkige prestaties van het AI-systeem bij gebruik in de praktijk.

## Maatregelen 

=== "Allen"
	<!-- list_maatregelen vereiste/kwaliteit_voor_data -->
=== "Governance"
	<!-- list_maatregelen vereiste/kwaliteit_voor_data boubwlok/governance -->
=== "Publieke inkoop"
	<!-- list_maatregelen vereiste/kwaliteit_voor_data bouwblok/publieke-inkoop -->
