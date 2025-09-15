---
title: Beschrijf welke data gebruikt wordt voor de beoogde toepassing
id: urn:nl:ak:mtr:owp-11
toelichting: Beschrijf welke data gebruikt wordt voor de beoogde toepassing.
vereiste:
- aia-05-data-kwaliteitscriteria
levenscyclus:
- ontwerp
- dataverkenning-en-datapreparatie
onderwerp:
- data
rollen:
- ontwikkelaar
- beleid-en-advies
hide:
- navigation
- toc
---

<!-- Let op! onderstaande regel met 'tags' niet weghalen! Deze maakt automatisch de knopjes op basis van de metadata  -->
<!-- tags -->

## Maatregel
Beschrijf welke data gebruikt wordt voor de beoogde toepassing.

## Toelichting
- Maak in een vroege fase van de ontwikkeling een inschatting van welke data er gebruikt gaat worden voor het algoritme.
- Leg na het uitvoeren van een [beschikbaarheids-](2-owp-02-data-beschikbaarheid.md), [kwaliteits-](3-dat-01-datakwaliteit.md) en toegankelijkheidsanalyse vast welke data wordt verwerkt voor het ontwikkelen en gebruiken van het algoritme.
- Beschrijf daarbij om wat voor gegevens het gaat en uit welke bron deze komen.
- Bepaal of het is [toegestaan om deze data](2-owp-03-doel-verwerken-persoonsgegevens.md) te verwerken.
- Het is denkbaar dat het onderzoek van de kwaliteit van de data in een latere fase in de levenscyclus pas grondig kan worden uitgevoerd.

## Generatieve AI
Bij generatieve AI kan er sprake zijn van een model dat verder getraind wordt door ingegeven data.

- Bepaal of het model verder getraind zal worden, en zo ja, met welke data.
- Beschrijf of deze data wordt opgeslagen, wie toegang heeft, en hoe de integriteit hiervan wordt gewaarborgd.

## Risico
Als er niet wordt beschreven welke data wordt gebruikt voor een toepassing wordt het risico gelopen dat bij gebruik van een algoritme er kans is op bias-vorming en mindere transparantie. Bij generatieve AI kan er ook sprake zijn van data die ongewenst wordt verwerkt in de AI-toepassing.


## Bijbehorende vereiste(n) { data-search-exclude }
??? expander "Bekijk alle vereisten"
    <!-- list_vereisten_on_maatregelen_page -->

## Bronnen
- [Impact Assessment Mensenrechten en Algoritmes, 2A.2.1](../hulpmiddelen/IAMA.md)

## Voorbeelden


Heb je een voorbeeld of best practice, laat het ons weten via [algoritmes@minbzk.nl](mailto:algoritmes@minbzk.nl)
