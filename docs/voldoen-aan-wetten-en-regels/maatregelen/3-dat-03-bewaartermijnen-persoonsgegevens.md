---
title: Geef data zoals persoonsgegevens een bewaartermijn met een vernietigingsprocedure
id: urn:nl:ak:mtr:dat-03
toelichting: Zorg ervoor dat de vereisten met betrekking tot bewaartermijnen en de vernietiging correct zijn of worden vertaald naar het algoritme en de onderliggende systemen. Controleer of deze maatregelen zijn getroffen en zorg dat dit aantoonbaar is.
vereiste:
- arc-01-archiefwet
- aia-12-bewaartermijn-voor-documentatie
- avg-02-beperkte-bewaartermijn-van-persoonsgegevens
levenscyclus:
- ontwikkelen
- monitoring-en-beheer
onderwerp:
- technische-robuustheid-en-veiligheid
- privacy-en-gegevensbescherming
rollen:
- jurist
- projectleider
sources:
  ADR: PRI.11
  ARK: 3.17
hide:
- navigation
- toc
version: "1.0.0"
version_date: "2025-07-04"
---

<!-- tags -->

## Maatregel

Bepaal de bewaartermijnen en richt een vernietigingsprocesdure in voor de verwerkte (persoons)gegevens.

## Toelichting

- (Persoons)gegevens die het algoritme verwerkt worden niet langer bewaard dan voor de verwezenlijking van de
verwerkingsdoeleinden noodzakelijk is.
- Beschrijf de bewaartermijnen voor de gegevens, bijvoorbeeld in een DPIA.
- Beschrijf hoe de (persoons)gegevens moeten worden vernietigd.
- Zorg ervoor dat de vereisten met betrekking tot bewaartermijnen correct zijn of worden vertaald naar het algoritme en de onderliggende (zaak)systemen.
- Controleer of deze maatregelen voor de bewaartermijnen en vernietiging van de (persoons)gegevens (in de onderliggende systemen) zijn getroffen en zorg dat dit aantoonbaar is, bijvoorbeeld met logbestanden.
- Maak aantoonbaar dat persoonsgegevens zijn vernietigd, bijvoorbeeld met logbestanden.

## Risico
Een risico dat kan voorkomen bij deze maatregel is dat bewaartermijnen van (persoons)gegevens kunnen worden overschreden zonder dat dit op tijd kenbaar wordt doordat er geen (volledige) vernietigingsprocedure is vastgesteld.

## Bijbehorende vereiste(n) { data-search-exclude }
??? expander "Bekijk alle vereisten"
    <!-- list_vereisten_on_maatregelen_page -->

## Bronnen

- [Onderzoekskader Algoritmes Auditdienst Rijk, PRI.11](https://www.rijksoverheid.nl/documenten/rapporten/2023/07/11/onderzoekskader-algoritmes-adr-2023)
- [Toetsingskader Algoritmes Algemene Rekenkamer, 3.17](https://www.rekenkamer.nl/onderwerpen/algoritmes/documenten/publicaties/2024/05/15/het-toetsingskader-aan-de-slag)


## Voorbeelden

!!! example "UWV: Klantapplicatie WW"

    Het UWV heeft in haar privacy statement aangegeven dat zij zich houdt aan de richtlijnen van de Archiefwet voor het bewaren van persoonsgegevens. Hierin staat beschreven welke data bewaard/verwijderd moet worden en op welke termijn. Er staat hier ook een kopje over “Uitvoering Vernietiging” waarin uitgelegd staat dat een afdeling binnen het UWV de vernietiging uitvoert.

    Dit voorbeeld zou verder uitgebreid kunnen worden door de vernietigingsprocedure verder toe te lichten. Op dit moment wordt niet uitgelegd over hoe elektronische of fysieke data vernietigd wordt.

    Bron: [Selectielijst UWV - Nationaal Archief](https://www.nationaalarchief.nl/archiveren/kennisbank/selectielijst-voor-het-uitvoeringsinstituut-werknemersverzekeringen-uwv-voor)

Heb je een ander voorbeeld of best practice, laat het ons weten via [algoritmes@minbzk.nl](mailto:algoritmes@minbzk.nl)
