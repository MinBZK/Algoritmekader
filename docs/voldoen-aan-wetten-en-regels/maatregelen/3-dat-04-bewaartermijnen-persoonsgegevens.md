---
title: Geef data zoals persoonsgegevens een bewaartermijn met een vernietigingsprocedure 
id: urn:nl:ak:mtr:dat-04
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
hide:
- navigation
- toc
---

<!-- tags -->

## Maatregel

Bepaal de bewaartermijnen en richt een vernietigingsprocesdure in voor de verwerkte (persoons)gegevens.

## Toelichting

- (Persoons)gegevens die het algoritme verwerkt worden niet langer bewaard dan voor de verwezenlijking van de 
verwerkingsdoeleinden noodzakelijk is.
- Beschrijf de bewaartermijnen voor de gegevens, bijvoorbeeld in een DPIA.
- Beschrijf hoe de (persoons)gegeven moeten worden vernietigd.
- Zorg ervoor dat de vereisten met betrekking tot bewaartermijnen correct zijn of worden vertaald naar het algoritme en de onderliggende (zaak)systemen.
- Controleer of deze maatregelen voor de bewaartermijnen en vernietiging van de (persoons)gegevens (in de onderliggende systemen) zijn getroffen en zorg dat dit aantoonbaar is, bijvoorbeeld met logbestanden.
- Maak aantoonbaar dat persoonsgegevens zijn vernietigd, bijvoorbeeld met logbestanden.  

## Bijbehorende vereiste(n) { data-search-exclude }
??? expander "Bekijk alle vereisten"
    <!-- list_vereisten_on_maatregelen_page -->

## Bronnen

- [Onderzoekskader Algoritmes Auditdienst Rijk, PRI.11](https://www.rijksoverheid.nl/documenten/rapporten/2023/07/11/onderzoekskader-algoritmes-adr-2023)
- [Toetsingskader Algoritmes Algemene Rekenkamer, 3.17](https://www.rekenkamer.nl/onderwerpen/algoritmes/documenten/publicaties/2024/05/15/het-toetsingskader-aan-de-slag)


## Voorbeeld

    !!! example "UWV: Klantapplicatie WW"

        _Dit voorbeeld kan zonder veel aanpassingen in uw organisatie gebruikt worden._<br>
        Het UWV maakt gebruik van algoritme rondom WW-uitkering. Hiervoor geven ze aan welke persoonsgegevens gebruikt worden in een lijst. Daarna worden via een tabel toegelicht waar deze persoonsgegevens exact voor worden gebruikt. Zo wordt bijvoorbeeld ‘geslacht’ gebruikt voor ‘aanhef in de brief’ 

        Bron: [Klantapplicatie WW - UWV](https://www.uwv.nl/nl/over-uwv/organisatie/algoritmeregister-uwv/klantapplicatie-ww)

