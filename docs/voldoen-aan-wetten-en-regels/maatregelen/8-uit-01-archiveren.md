---
title: Bij uitfaseren en doorontwikkeling wordt correct omgegaan met data en modelinformatie
id: urn:nl:ak:mtr:uit-01
toelichting: Verwijder bij uitfasering van je algoritme gevoelige gegevens in het kader van privacy en gegevensbescherming, maar behoud essentiële modelinformatie.
levenscyclus:
- uitfaseren
- ontwerp
onderwerp:
- technische-robuustheid-en-veiligheid
- privacy-en-gegevensbescherming
- transparantie
rollen:
- ontwikkelaar
vereiste:
- arc-01-archiefwet
- aia-12-bewaartermijn-voor-documentatie
- avg-02-beperkte-bewaartermijn-van-persoonsgegevens
sources:
  ADR:
  - PRI.11
  - IB.27
hide:
- navigation
- toc

---

<!-- Let op! onderstaande regel met 'tags' niet weghalen! Deze maakt automatisch de knopjes op basis van de metadata  -->
<!-- tags -->

## Maatregel
Verwijder bij [uitfasering](../../levenscyclus/uitfaseren.md) van je algoritme gevoelige gegevens in het kader van [privacy en gegevensbescherming](../../onderwerpen/privacy-en-gegevensbescherming.md), maar behoud essentiële modelinformatie.

## Toelichting
Als het doel van het algoritme niet langer bestaat, kan een algoritme (zowel data als model) uitgeschakeld of verwijderd worden.
Tegelijkertijd kan dit voor door het algoritme gemaakte beslissingen betekenen dat niet meer te achterhalen is welke data is gebruikt en waarom het model deze zo beoordeeld heeft.
In de ontwerpfase van het algoritme wordt daarom [vastgelegd welke elementen bewaard dienen te worden en waarom](2-owp-09-archiveren-documenten.md).

Door op een juiste manier om te gaan met uitfaseren kan worden voorkomen dat de potentiële latere effecten van algoritmes worden geadresseerd.
De werking van een algoritme en de manier waarop beslissingen in het verleden zijn genomen, blijven behouden. Dit zorgt voor transparantie en controleerbaarheid of auditeerbaarheid.
Zo kan worden vastgesteld of de uitkomsten zijn aangepast, waardoor bijvoorbeeld fraude onzichtbaar zou worden in geval van verwijdering.
Ook in geval een organisatie later juridisch aansprakelijk wordt gesteld, is inzicht in hoe beslissingen tot stand zijn gekomen belangrijk.
Tegelijkertijd kan data die niet essentieel is worden verwijderd, om zo de kans op misbruik en lekken van data te voorkomen.

## Risico
Het niet correct uitfaseren van een algoritme heeft mogelijk negatieve effecten op het gebied van uitlegbaarheid, transparantie en verantwoording.

## Bijbehorende vereiste(n) { data-search-exclude }
??? expander "Bekijk alle vereisten"
    <!-- list_vereisten_on_maatregelen_page -->

## Bronnen
- [Onderzoekskader Algoritmes Auditdienst Rijk, PRI.11](https://www.rijksoverheid.nl/documenten/rapporten/2023/07/11/onderzoekskader-algoritmes-adr-2023)

## Voorbeelden
Heb je een ander voorbeeld of best practice, laat het ons weten via [algoritmes@minbzk.nl](mailto:algoritmes@minbzk.nl)
