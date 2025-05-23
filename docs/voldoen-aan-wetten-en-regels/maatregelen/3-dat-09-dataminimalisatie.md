---
title: Beperk de omvang van datasets voor energie-efficiëntie
id: urn:nl:ak:mtr:dat-09
toelichting: Houd datasets beperkt tot het noodzakelijke en voldoende specifiek om onnodige energieconsumptie te voorkomen tijdens de verwerking en opslag van data voor algoritmes.
levenscyclus:
- dataverkenning-en-datapreparatie
- ontwikkelen
onderwerp:
- data
- duurzaamheid
rollen:
- ontwikkelaar
- projectleider
sources:
  ADR: PRI.5
  ARK: '2.20'
hide:
- navigation
- toc
---

<!-- Let op! onderstaande regel met 'tags' niet weghalen! Deze maakt automatisch de knopjes op basis van de metadata  -->
<!-- tags -->

## Maatregel
Houd datasets beperkt tot het noodzakelijke en voldoende specifiek om onnodige energieconsumptie te voorkomen tijdens de verwerking en opslag van data voor algoritmes. We noemen dit ook wel dataminimalisatie.

## Toelichting
Hoe meer je bewaart, hoe meer ruimte dat kost om op te slaan. Bovendien verbruikt elk apparaat dat nodig is om data op te slaan stroom. Dat heeft grote invloed op de CO₂-uitstoot van een datacentrum.
Grote datasets brengen daarom hoge energie- en opslagkosten met zich mee. Door de dataset bewust te beperken tot relevante gegevens, kun je ook de energie-efficiëntie van algoritmes aanzienlijk verbeteren. Vooral bij de ontwikkeling van AI-systemen kan het verminderen van data bijdragen aan lagere energiebehoeften en CO₂-uitstoot.

### Technieken voor dataminimalisatie
- **Slimme selectie van trainingdata**: Gebruik methoden die irrelevante data uit de dataset filteren, zoals dataselectie-algoritmes en sampling-technieken. Door te focussen op relevante data, beperk je de omvang zonder de prestaties van het model te beïnvloeden.
- **Verwijderen van redundante en dubbele data**: Deduplicatie van data minimaliseert onnodige verwerkingskracht. Door alleen unieke en relevante gegevens op te slaan, wordt de opslagbehoefte verder beperkt.
- **Opschonen en archiveren van verouderde data**: [Regelmatige archivering](2-owp-09-archiveren-documenten.md) of verwijdering van verouderde data in je dataset zorgt voor een verminderde voetafdruk en verhoogt ook de efficiëntie.

## Risico
Zonder dataminimalisatie loopt je organisatie het risico op onnodig hoge energie- en opslagkosten, en een grotere ecologische impact.

## Bijbehorende vereiste(n) { data-search-exclude }
??? expander "Bekijk alle vereisten"
    <!-- list_vereisten_on_maatregelen_page -->

## Bronnen
- [Onderzoekskader Auditdienst Rijk, PRI.5](https://www.rijksoverheid.nl/documenten/rapporten/2023/07/11/onderzoekskader-algoritmes-adr-2023)
- [Toetsingskader Algoritmes Algemene Rekenkamer, 2.20](https://www.rekenkamer.nl/onderwerpen/algoritmes/documenten/publicaties/2024/05/15/het-toetsingskader-aan-de-slag)
- [Rijks ICT-dashboard](https://www.rijksictdashboard.nl/duurzaamheid)
- [Sustainable artificial intelligence – TU Delft](https://www.tudelft.nl/en/stories/articles/sustainable-artificial-intelligence-from-chatgpt-to-green-ai)

## Voorbeelden
!!! example "Basisregistratie Personen: Dataminimalisatie"

    De Basisregistratie Personen (BRP) heeft in 2023 een experiment uitgevoerd rondom dataminimalisatie. BRP-gegevens zoals naam en geslacht werden vertaald naar direct bruikbare informatie zoals aanschrijfnaam. Op deze manier werd informatie op een efficiëntere manier doorgegeven.
    Het experiment van BRP is een indirecte vorm van energie-efficiëntie omdat er minder (onnodige) data verstrekt wordt aan de aanvrager. Hierdoor hoeft de aanvrager minder data op te slaan en te verwerken.

    Bron: [Experimentbesluit BRP dataminimalisatie](https://www.internetconsultatie.nl/experimentbesluitbrp/b1)

Heb je een ander voorbeeld of best practice, laat het ons weten via [algoritmes@minbzk.nl](mailto:algoritmes@minbzk.nl)
