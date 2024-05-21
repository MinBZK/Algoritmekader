---
title: Data van hoog-risico ai moet voldoen aan kwaliteitscriteria
toelichting: AI-systemen met een hoog risico die data gebruiken voor het trainen van AI-modellen, moeten gebaseerd zijn op datasets die voldoen aan specifieke kwaliteitscriteria. Deze criteria zorgen ervoor dat de data geschikt zijn voor training, validatie en tests, wat de betrouwbaarheid en nauwkeurigheid van het AI-systeem waarborgt. De kwaliteitscriteria is te vinden in leden 2 t/m 5 van artikel 10 van de AI-verordening. Bijvoorbeeld datasets moeten aan praktijken voor databeheer voldoen en moeten relevant, representatief, accuraat en volledig zijn.
status_vereiste:
  - Geldend
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

AI-systemen met een hoog risico die technieken gebruiken die het trainen van AI-modellen met data omvatten, worden ontwikkeld op basis van datareeksen voor training, validatie en tests die voldoen aan de kwaliteitscriteria als bedoeld in de leden 2 tot en met 5 telkens wanneer dergelijke datareeksen worden gebruikt.

## Toelichting

AI-systemen met een hoog risico die data gebruiken voor het trainen van AI-modellen, moeten gebaseerd zijn op datasets die voldoen aan specifieke kwaliteitscriteria.
Deze criteria zorgen ervoor dat de data geschikt zijn voor training, validatie en tests, wat de betrouwbaarheid en nauwkeurigheid van het AI-systeem waarborgt.
De kwaliteitscriteria is te vinden in leden 2 t/m 5 van artikel 10 van de AI-verordening.
Bijvoorbeeld datasets moeten aan praktijken voor databeheer voldoen en moeten relevant, representatief, accuraat en volledig zijn.

## Bronnen

| Bron                                                   |
| ------------------------------------------------------ |
| Artikel 10(1) Data and datagovernance - AI verordening |

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

## Normen

In afwachting van het standaardisatieproces.

## Maatregelen

Hier komt een lijst met relevante maatregelen om te voldoen aan dit vereiste.
