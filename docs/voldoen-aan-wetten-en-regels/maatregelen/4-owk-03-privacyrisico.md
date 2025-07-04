---
title: Analyseer de privacy-risico’s en neem maatregelen om deze risico’s laag te houden
id: urn:nl:ak:mtr:owk-03
toelichting: Bij het uitvoeren van een risicoanalyse voor privacyrisico's is het van belang dat de geïdentificeerde risico's worden vertaald naar concrete, mitigerende maatregelen om persoonsgegevens te beschermen.
vereiste:
- avg-13-dpia-verplicht
- avg-10-recht-op-niet-geautomatiseerde-besluitvorming
levenscyclus:
- ontwerp
- ontwikkelen
- monitoring-en-beheer
onderwerp:
- privacy-en-gegevensbescherming
rollen:
- projectleider
- jurist
sources:
  ADR:
  - PRI.2
  - PRI.3
  - PRI.10
  ARK:
  - 3.03
  - 3.06
  - '3.10'
hide:
- navigation
- toc
version: "1.0.0"
version_date: "2025-07-04"
---

<!-- tags -->

## Maatregel
Uitvoeren risicoanalyse en formuleren mitigerende maatregelen voor privacyrisico.

## Toelichting

- Verifieer of een [DPIA](../hulpmiddelen/DPIA.md) is uitgevoerd over het werkproces dat wordt of zal worden ondersteund met een algoritme. Zo nee, voer een risico analyse (DPIA) uit om de risico's voor de rechten en vrijheden van betrokkenen met de inzet van algoritmes in beeld te brengen.
- Organisatorische en technische maatregelen moeten worden getroffen om persoonsgegevens bij de ontwikkeling en het gebruik van het algoritme te beschermen.
- Beleg de mitigerende maatregelen bij betrokken actoren. Denk bijvoorbeeld aan het toekennen van de maatregelen als [anonimiseren en pseudonimiseren van persoonsgegevens](3-dat-04-pseudonimiseren-anonimiseren.md) aan een data engineer, voordat deze kunnen worden gebruikt ten behoeve van het ontwikkelen of controleren van het algoritme.
- Bepaal welke maatregelen moeten zijn gerealiseerd voordat mag worden gestart met de verwerking van de persoonsgegevens en welke moeten worden gemonitord.
- Bepaal of er sprake is van geautomatiseerde besluitvorming. Indien dat het geval is dient er beargumenteerd te worden of dat is toegestaan volgens de AVG.
- Monitor de voortgang op het realiseren van de maatregelen en zorg voor bewijsstuken als deze zijn gerealiseerd. Deze bewijsstukken kunnen onderdeel worden van een audit.
- Als er een noodzaak is om na verloop van tijd meer persoonsgegevens te verwerken of om andere verwerkingen uit te voeren, zal opnieuw een beoordeling moeten plaatsvinden of er privacyrisico's ontstaan en hoe deze kunnen worden gemitigeerd. Gedurende de levenscyclus van het algoritme moet aandacht blijven voor het uitvoeren van de risicoanalyse voor privacyrisico's.
- Bij hoge risico's voor het verwerken van persoonsgegevens is een voorafgaande raadpleging bij de Autoriteit Persoonsgegevens onder artikel 36 AVG verplicht. Bepaal of raadpleging noodzakelijk is.

## Risico
Privacyrisico's met de inzet van algoritmes worden niet gemitigeerd, waardoor privacyrechten van betrokkenen worden geschonden.

## Bijbehorende vereiste(n) { data-search-exclude }
??? expander "Bekijk alle vereisten"
    <!-- list_vereisten_on_maatregelen_page -->

## Bronnen
- [Onderzoekskader Algoritmes Auditdienst Rijk, PRI.2, PRI.3, PRI.10](https://www.rijksoverheid.nl/documenten/rapporten/2023/07/11/onderzoekskader-algoritmes-adr-2023)
- [Toetsingskader Algoritmes Algemene Rekenkamer, 3.03, 3.06, 3.10](https://www.rekenkamer.nl/onderwerpen/algoritmes/documenten/publicaties/2024/05/15/het-toetsingskader-aan-de-slag)
- [Besluit inzake lijst van verwerkingen van persoonsgegevens waarvoor een gegevensbeschermingseffectbeoordeling (DPIA) verplicht is, Autoriteit Persoonsgegevens (Staatscourant 2019, 64418)](https://zoek.officielebekendmakingen.nl/stcrt-2019-64418.html)
- [Model DPIA Rijksdienst](https://www.kcbr.nl/beleid-en-regelgeving-ontwikkelen/beleidskompas/verplichte-kwaliteitseisen/data-protection-impact-assessment#Waar)

## Voorbeelden

Heb je een voorbeeld of best practice, laat het ons weten via [algoritmes@minbzk.nl](mailto:algoritmes@minbzk.nl).
