---
title: Bescherm persoonsgegevens door data te anonimiseren, pseudonimiseren of te aggregeren
id: urn:nl:ak:mtr:dat-04
toelichting: Pas maatregelen toe als pseudonimiseren, anonimiseren of aggregeren van persoonsgegevens bij het verwerken van de data.
vereiste:
- avg-03-minimale-verwerking-van-persoonsgegevens
- avg-12-beveiliging-van-verwerking
levenscyclus:
- dataverkenning-en-datapreparatie
- ontwikkelen
onderwerp:
- privacy-en-gegevensbescherming
rollen:
-  ontwikkelaar
-  jurist
sources:
  ADR: PRI.5
  ARK:
  - '2.20'
  - 3.06
hide:
- navigation
- toc
version: "92559128"
version_date: "2025-07-04"
---

<!-- tags -->
## Maatregel

Pas maatregelen toe als pseudonimiseren, anonimiseren of aggregeren van persoonsgegevens toe bij het verwerken van de data.

## Toelichting
- Als is vastgesteld welke persoonsgegevens mogen worden verwerkt voor het ontwikkelen en gebruiken van algoritmes, moet worden nagegaan of er maatregelen kunnen worden getroffen om deze te beschermen.
- Het algoritme verwerkt niet meer persoonsgegevens dan noodzakelijk; de verwerkte gegevens zijn proportioneel en substantieel.
- Hierbij kan worden gedacht aan het pseudonomiseren, anonimiseren of aggregeren van persoonsgegevens.
- Het bepalen of persoonsgegevens mogen worden verwerkt voor algoritmes moet worden bekeken in samenhang met maatregelen die kunnen worden getroffen om deze gegevens te beschermen.

## Risico
Het niet goed pseudonimiseren, anonimiseren of aggregeren van persoonsgegevens kan leiden tot onterecht gebruik van deze gegevens en kan daarbij een inbreuk op privacy veroorzaken.

## Bijbehorende vereiste(n) { data-search-exclude }
??? expander "Bekijk alle vereisten"
    <!-- list_vereisten_on_maatregelen_page -->

## Bronnen
- [Onderzoekskader Auditdienst Rijk, PRI.5](https://www.rijksoverheid.nl/documenten/rapporten/2023/07/11/onderzoekskader-algoritmes-adr-2023)
- [Toetsingskader Algoritmes Algemene Rekenkamer, 2.20, 3.06](https://www.rekenkamer.nl/onderwerpen/algoritmes/documenten/publicaties/2024/05/15/het-toetsingskader-aan-de-slag)

## Voorbeelden

!!! example "Groep Gegevensbescherming: Artikel 20 (WP 216)"

    In een advies van de 'Artikel 29 Werkgroep' (tegenwoordig vervangen door de [European Data Protection Board (EDPB)](https://www.edpb.europa.eu/about-edpb/who-we-are/legacy-art-29-working-party_nl)) over anonimiseringstechnieken staan verschillende technieken benoemd voor het pseudonimiseren en anonimiseren van persoonsgegevens. Hierbij wordt gekeken naar de factoren: Herleidbaarheid, Koppelbaarheid en Deduceerbaarheid. Hierbij worden ook vaak gemaakte fouten aangegeven zodat deze voorkomen kunnen worden.
    Er wordt bij iedere techniek een voorbeeld gegeven, maar de exacte implementatie moet zelf verder bekeken worden. Dit voorbeeld kan ondersteunen bij het kiezen van een vorm van gegevensbescherming.
    _[Volgens de Autoriteit Persoonsgegevens](https://www.autoriteitpersoonsgegevens.nl/themas/beveiliging/beveiliging-van-persoonsgegevens/gegevens-pseudonimiseren#:~:text=De%20European%20Data%20Protection%20Board,privacytoezichthouders%20uit%20de%20EER%20samenwerken.) werkt de EDPB aan guidelines over anonimiseren en pseudonimiseren. Zodra hier meer over bekend is, zal dit toegevoegd worden._

    Bron: [Opinion 05/2014 on 'Anonymisation Techniques'](https://ec.europa.eu/justice/article-29/documentation/opinion-recommendation/index_en.htm#maincontentSec4)

!!! example "Gemeente Amsterdam: Blurring as a Service"

	De Gemeente Amsterdam maakt gebruik van een algoritme waarmee mensen op straat beter geanonimiseerd kunnen worden; Blurring as a Service. Hierbij worden persoonsgegevens zoals gezicht en andere lichaamskenmerken (biometrische persoonsgegevens) vervaagd of ‘geblurd’.

	Bron: [Gemeente Amsterdam - Blurring as a Service](https://algoritmeregister.amsterdam.nl/ai-system/blurring-as-a-service/1132/)

Heb je een voorbeeld of best practice, laat het ons weten via [algoritmes@minbzk.nl](mailto:algoritmes@minbzk.nl)
