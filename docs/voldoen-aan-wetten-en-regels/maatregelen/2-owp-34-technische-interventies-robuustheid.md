---
title: Identificeer en implementeer technische interventies die robuustheid vergroten
id: urn:nl:ak:mtr:owp-34
toelichting: Bepaal in het ontwerp welke technische interventies bijdragen aan de robuustheid van het algoritme. Deze keuzes moeten in lijn zijn met het beoogde doel en de context. 
vereiste:
- aia-06-technische-documentatie
levenscyclus:
- ontwerp
- ontwikkelen
onderwerp:
- technische-robuustheid-en-veiligheid
rollen:
- ontwikkelaar
hide:
- navigation
- toc
---

<!-- tags -->

## Maatregel
Bepaal in het ontwerp welke technische interventies bijdragen aan de [robuustheid](../../onderwerpen/technische-robuustheid-en-veiligheid.md#wat-is-technisch-robuust-en-veilig) van het algoritme. Deze keuzes moeten in lijn zijn met het [beoogde doel](1-pba-02-formuleren-doelstelling.md) en de context. 

## Toelichting
Maak in de ontwerpfase de volgende afwegingen:

- **Identificeer en implementeer technische interventies die de robuustheid vergroten**

    In het ontwerp en in de training kunnen extra interventies worden genomen die de robuustheid vergroten. Dit kan op verschillende niveaus. Denk bijvoorbeeld aan: 
    
    - *Data Augmentation*: op data niveau kan de dataset uitgebreid worden met variaties op de oorspronkelijke data, bijvoorbeeld door het toevoegen van extra ruis aan de dataset; 
    - *Regularisatie*: tijdens training kunnen interventies worden gebruikt die overfitting voorkomen zoals *dropout* of *weight decay*. 
    - *[Cross-validation](3-dat-07-training-validatie-en-testdata.md#k-fold-cross-validation)*: tijdens training kunnen meerdere combinaties van train- en testsets gebruikt worden om generalisatie te waarborgen.
    - *Model ensembles*: er kunnen meerdere modellen gecombineerd worden om samen een beslissing te maken, dit minimaliseert de impact van een fout van één model. 
    - *[Adversarial training](#)*: het trainen met speciale voorbeelden die bedoeld zijn om het model te misleiden.  
    - Ook zijn er andere methoden die generalisatie kunnen verbeteren, zoals *invariant risk minimization*, *robust optimization*, *transfer learning* en *causal learning*. 

- **Bepaal de factoren waarop je interventies voor robuustheid beoordeelt**
    Afhankelijk van de context, verschillen de factoren waarop je deze afwegingen maakt. 
    Denk aan complexiteit van de data, invoerdata en resultaten, [risico en impact als het fout gaat](2-owp-06-impactanalyse.md), belang van [betrouwbaarheid versus nauwkeurigheid](../../onderwerpen/technische-robuustheid-en-veiligheid.md#wat-is-technisch-robuust-en-veilig), of belang van robuustheid versus transparantie. 

- **Leg de beargumenteerde keuze vast**
    Leg vast welke keuzes er gemaakt zijn en waarom deze keuzes zijn gemaakt. 

## Bijbehorende vereiste(n)

<!-- list_vereisten_on_maatregelen_page -->

## Risico
Wanneer robuustheid niet in het ontwerp al wordt meegenomen, kan er voor een model worden gekozen waar het niet mogelijk is robuustheid voldoende te waarborgen.
Het model wordt dan ofwel ingezet met de risico’s van dien of de innovatie moet later stop gezet worden. 

## Bronnen
- [Kenniscentrum Data & Maatschappij, Ethisch principe 2: technische robuustheid en veiligheid](https://data-en-maatschappij.ai/publicaties/ethisch-principe-2-technische-robuustheid-en-veiligheid)
- [Europese Commissie, Ethische richtsnoeren voor betrouwbare KI](https://digital-strategy.ec.europa.eu/nl/library/ethics-guidelines-trustworthy-ai)
- [A. Tocchetti et al., A.I. Robustness: a Human-Centered Perspective on Technological Challenges and Opportunities](https://arxiv.org/abs/2210.08906)

## Voorbeeld

Heb jij een goed voorbeeld? Laat het ons weten!

