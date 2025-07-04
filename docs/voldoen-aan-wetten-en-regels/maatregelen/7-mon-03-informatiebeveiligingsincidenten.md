---
title: Maak een noodplan voor beveiligingsincidenten
id: urn:nl:ak:mtr:mon-03
toelichting: Richt een proces in waarmee beveiligingsincidenten m.b.t. algoritmes en data zo spoedig mogelijk worden opgelost.
vereiste:
- bio-01-beveiliging-informatie-en-informatiesystemen
- aia-10-nauwkeurigheid-robuustheid-cyberbeveiliging
- avg-12-beveiliging-van-verwerking
levenscyclus:
- organisatieverantwoordelijkheden
- monitoring-en-beheer
onderwerp:
- technische-robuustheid-en-veiligheid
- governance
rollen:
- projectleider
- beleid-en-advies
- jurist
sources:
  ADR: IB.30
  ARK: 4.06
hide:
- navigation
- toc
version: "1.0.0"
version_date: "2025-07-04"
---

<!-- tags -->

## Maatregel
Richt een proces in waarmee beveiligingsincidenten met betrekking tot algoritmes en data zo spoedig mogelijk worden opgelost.


## Toelichting
Er zijn procedures aanwezig die borgen dat beveiligingsincidenten met betrekking tot algoritmes en data zo spoedig mogelijk, afhankelijk van de kwalificatie van het incident, worden opgepakt.


## Risico
Te late reactie op incidenten kan ervoor zorgen dat de BIV (beschikbaarheid, integriteit en vertrouwelijkheid) van het algoritme of data kan worden aangetast.

## Bijbehorende vereiste(n) { data-search-exclude }
??? expander "Bekijk alle vereisten"
    <!-- list_vereisten_on_maatregelen_page -->

## Bronnen

- [Baseline Informatiebeveiliging Overheid, BIO 12.3.1.1, 12.3.1.4, 12.3.1.5](https://www.digitaleoverheid.nl/overzicht-van-alle-onderwerpen/cybersecurity/bio-en-ensia/baseline-informatiebeveiliging-overheid/)
- [Onderzoekskader Algoritmes Auditdienst Rijk, IB.30](https://www.rijksoverheid.nl/documenten/rapporten/2023/07/11/onderzoekskader-algoritmes-adr-2023)
- [Toetsingskader Algoritmes Algemene Rekenkamer, 4.06](https://www.rekenkamer.nl/onderwerpen/algoritmes/documenten/publicaties/2024/05/15/het-toetsingskader-aan-de-slag)


## Voorbeelden

!!! example "Voorbeeld: Ministerie van Economische Zaken - Uitwijk- en herstelplan"

	Het Ministerie van Economische zaken heeft een template voor een Disaster Recovery Plan (DRP) opgesteld. Aan de hand van dit document kunnen duidelijke handelingen en verantwoordelijkheden opgeschreven worden voor wanneer een algoritme stopgezet moet worden.

	Dit DRP is vrij algemeen en heeft geen specificaties voor algoritmes in het template staan. Dit zal dus verder uitgewerkt moeten worden, maar dit DRP kan als basis dienen voor het verder uitwerken.

	Bron: [Uitwijk- en herstelplan](https://www.digitaltrustcenter.nl/informatie-advies/uitwijk-en-herstelplan)

!!! example "Voorbeeld: Netwerk Informatiebeveiliging en Privacy - Incident Management"

	Het Netwerk Informatiebeveiliging en Privacy (IBP) voor primair en voortgezet onderwijs heeft een template voor incidentmanagementbeleid, het incidentmanagementproces en een beveiligingsincident stappenplan & logboek. In het procestemplate staat onder andere een procesflow, een beschrijving van alle processtappen en een communicatieplan.

	Deze documenten zijn specifiek voor primair en voortgezet onderwijs maar zijn gemakkelijk aan te passen.

	Bron: [Incidentmanagement](https://aanpakibp.kennisnet.nl/incidentmanagement/#tools-en-voorbeelddocumenten)

Heb je een ander voorbeeld of best practice, laat het ons weten via [algoritmes@minbzk.nl](mailto:algoritmes@minbzk.nl)
