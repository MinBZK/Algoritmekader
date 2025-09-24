---
title: Controleer de datakwaliteit
id: urn:nl:ak:mtr:dat-01
toelichting: Stel vast of de gebruikte data van voldoende kwaliteit is voor de beoogde toepassing.
vereiste:
- avg-05-juistheid-en-actualiteit-van-persoonsgegevens
- aia-05-data-kwaliteitscriteria
levenscyclus:
- dataverkenning-en-datapreparatie
onderwerp:
- data
rollen:
- ontwikkelaar
sources:
  ADR:
  - DM.7
  - DM.9
  - DM.19
  ARK: 2.18
hide:
- navigation
version: "e33a2081"
version_date: "2025-08-26"
---

<!-- tags -->

## Maatregel
Stel vast of de gebruikte data van voldoende kwaliteit is voor de beoogde toepassing.

## Toelichting

- Stel functionele eisen voor de datakwaliteit vast en [analyseer structureel of er aan deze eisen wordt voldaan](7-mon-05-evalueer-bij-veranderingen-in-data.md).
- De kwaliteit van de data die als input voor het algoritme wordt gebruikt is bepalend voor de uitkomsten van het algoritme. Hier wordt soms ook naar gerefereerd als *garbage in = garbage out*.
- Een vraag die gesteld dient te worden: beschrijft de data het fenomeen dat onderzocht dient te worden? Oftewel: is de data _representatief_ voor de [doelpopulatie](1-pba-02-formuleren-doelstelling.md)?
- Het [Raamwerk gegevenskwaliteit](https://www.noraonline.nl/wiki/Raamwerk_gegevenskwaliteit) bevat een breed toepasbare set van kwaliteitsdimensies:

    - juistheid
    - compleetheid
    - validiteit
    - consistentie
    - actualiteit
    - precisie
    - plausibiliteit
    - traceerbaarheid
    - begrijpelijkheid

    Deze dimensies zijn aangevuld met [kwaliteitsattributen](https://www.noraonline.nl/wiki/Raamwerk_gegevenskwaliteit/Kwaliteitsattributen) welke gebruikt kunnen worden om de verschillende dimensies meetbaar te maken.

- De vraag of de data kwaliteit voldoende is, hangt sterk samen met de vraag of er bias in de onderliggende data zit. Analyseer daarom ook welke bias en aannames er besloten zijn in de onderliggende data. Denk hierbij onder andere aan de volgende vormen van bias:

    - [historische bias](../../onderwerpen/bias-en-non-discriminatie.md#herken-bias)
    - [meetbias](../../onderwerpen/bias-en-non-discriminatie.md#herken-bias)
    - [representatie bias](../../onderwerpen/bias-en-non-discriminatie.md#herken-bias)

- Zorg dat je data [vindbaar, toegankelijk, interoperabel en herbruikbaar (FAIR)](3-dat-12-fair-data.md) is.

- Bepaal of de data voldoende representatief is voor de doelpopulatie en of de data voldoende representatief is voor eventuele relevante subgroepen uit de productiedata.

!!! note "Let op!"

    Wanneer je een algoritme inkoopt en de ontwikkeling van het algoritme uitbesteedt aan een derde partij, houdt er dan dan rekening mee dat data traceerbaar en reproduceerbaar moet zijn. Maak hier heldere afspraken over met de aanbieder.

## Risico
- Door onjuiste beslissingen van gegevens kunnen verkeerde beslissingen genomen worden.
- Het model creëert onwenselijke systematische afwijking voor specifieke personen, groepen of andere eenheden. Dit kan leiden tot ongelijke behandeling en discriminerende effecten met eventuele schade voor betrokkenen.


## Bijbehorende vereiste(n) { data-search-exclude }
??? expander "Bekijk alle vereisten"
    <!-- list_vereisten_on_maatregelen_page -->

## Bronnen
- [Onderzoekskader Algoritmes Auditdienst Rijk, DM.7, DM.9, DM.19](https://www.rijksoverheid.nl/documenten/rapporten/2023/07/11/onderzoekskader-algoritmes-adr-2023)
- [Toetsingskader Algoritmes, Algemene Rekenkamder, 2.18](https://www.rekenkamer.nl/onderwerpen/algoritmes/documenten/publicaties/2024/05/15/het-toetsingskader-aan-de-slag)
- [NORA, Raamwerk gegevenskwaliteit](https://www.noraonline.nl/wiki/Raamwerk_gegevenskwaliteit)
- [Impact Assessment Mensenrechten en Algoritmes, 2A.2.2](../hulpmiddelen/IAMA.md)
- [Handreiking non-discriminatie by design](../hulpmiddelen/handreiking-non-discriminatie.md)
- Norm: ["Artificial intelligence - Data quality for analytics and machine learning (ML) - Part 2: Data quality measures"](https://www.iso.org/obp/ui/en/#iso:std:iso-iec:5259:-2:ed-1:v1:en)

## Voorbeelden

!!! example "Voorbeeld: Gemeente Rotterdam - Avola"


	In de Gemeente Rotterdam wordt gebruik gemaakt van een ondersteunend advies algoritme voor een toetsing voor recht op een uitkering, Avola. Dit algoritme maakt gebruik van beslisregels gebaseerd op wet- en regelgeving waarmee een advies aan een consulent van Werk en Inkomen gegeven wordt. De data waarop dit advies gebaseerd is, wordt gedeeltelijk door de burger zelf aangeleverd.

	In het rapport van de Rekenkamer Rotterdam “Kleur bekennen” wordt aangegeven dat er bij het gebruik van Avola ook aandacht is voor de kwaliteit van de gebruikte data. Deze data wordt tijdens het aanvraagproces gecontroleerd door zowel de burger als consulent. Hierbij wordt op onjuistheden getoetst voordat de data gebruikt wordt. Dit zou verder verbeterd kunnen worden door duidelijk aan te geven hoe de gegevens worden gecontroleerd.

	Bron: [Kleur bekennen](https://rekenkamer.rotterdam.nl/onderzoeken/kleur-bekennen/)

Heb je een ander voorbeeld of best practice, laat het ons weten via [algoritmes@minbzk.nl](mailto:algoritmes@minbzk.nl)
