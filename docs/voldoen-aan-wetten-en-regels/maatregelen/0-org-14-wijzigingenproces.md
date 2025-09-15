---
title: Maak afspraken over het wijzigen van de code
id: urn:nl:ak:mtr:org-14
toelichting: Richt een formeel wijzigingenproces in, waarmee bepaald wordt hoe codewijzigingen plaatsvinden.
vereiste:
- bio-01-beveiliging-informatie-en-informatiesystemen
levenscyclus:
- organisatieverantwoordelijkheden
onderwerp:
- technische-robuustheid-en-veiligheid
- governance
rollen:
- projectleider
- ontwikkelaar
sources:
  ADR:
  - IB.1
  - IB.2
  - IB.3
  - IB.4
  - IB.5
  ARK: 4.07
hide:
- navigation
- toc
---

<!-- tags -->

## Maatregel

Richt een wijzigingenproces in, waarmee bepaald wordt hoe codewijzigingen plaatsvinden.


## Toelichting

Bij het inrichten van een proces om wijzigingen aan de code te mogen aanbrengen, kunnen aan de volgende elementen worden gedacht:

- Wijzigingen dienen van te voren te worden geautoriseerd door de systeemeigenaar of product owner. (BIO 12.1.2)
- Wijzigingen worden getest in een andere omgeving dan de productieomgeving. (BIO 12.1.4, 14.2.3, 14.2.9, 14.3.1)
- Wijzigingen worden door de systeemeigenaar of product owner goedgekeurd op basis van gedocumenteerde testresultaten en pas daarna doorgevoerd in de productieomgeving. (BIO 12.1.2, 14.2.2, 14.2.9)
- Er dient functiescheiding te zijn ingericht tussen het aanvragen, goedkeuren en doorvoeren van wijzigingen om onbevoegde en onbedoelde wijzigingen te beperken. (BIO 6.1.2, 14.2.2)
- Er dient periodiek controle plaats te vinden op wijzigingen aan het systeem, zodanig dat oneigenlijke wijzigingen worden gesignaleerd. (BIO 9.4.4, 12.4.1)

## Risico
Als een formeel wijzigingenproces ontbreekt bestaat het risico van ongeautoriseerde toegang, wijziging of beschadiging van de code van het algoritme, of de uitkomsten van het algoritme.

## Bijbehorende vereiste(n) { data-search-exclude }
??? expander "Bekijk alle vereisten"
    <!-- list_vereisten_on_maatregelen_page -->

## Bronnen

- [Baseline Informatiebeveiliging Overheid](https://www.digitaleoverheid.nl/overzicht-van-alle-onderwerpen/cybersecurity/bio-en-ensia/baseline-informatiebeveiliging-overheid/)
- [Onderzoekskader Algoritmes Auditdienst Rijk, IB.1 t/m IB.5](https://www.rijksoverheid.nl/documenten/rapporten/2023/07/11/onderzoekskader-algoritmes-adr-2023)
- [Toetsingskader Algoritmes Algemene Rekenkamer, 4.07](https://www.rekenkamer.nl/onderwerpen/algoritmes/documenten/publicaties/2024/05/15/het-toetsingskader-aan-de-slag)

## Voorbeelden

!!! example "Informatie Beveiligingsdienst - Aanwijzing Logging"

	De informatie beveiligingsdienst (IBD) heeft een handreiking gepubliceerd rondom logging-beleid en -procedures. Hierin wordt onder andere uitgelegd wat voor soorten logbestanden er zijn, voor wie deze belangrijk zijn en wat er in een log moet staan. Daarnaast wordt toegelicht hoe logging gecontroleerd kan/moet worden.

	Dit document kan een goede basis vormen voor het beginnen met log bestanden maken. Zo staan er in dit document verschillende bijlagen zoals een template voor logging-beleid en verschillende infographics die het logging-proces en de controles visualiseren voor de lezer.

	Bron: [Handreiking Logging](https://www.informatiebeveiligingsdienst.nl/product/aanwijzing-logging/)

Heb je een ander voorbeeld of best practice, laat het ons weten via [algoritmes@minbzk.nl](mailto:algoritmes@minbzk.nl)
