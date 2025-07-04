---
title: Beschrijf voor welk doel het algoritme persoonsgegevens gebruikt en waarom dit mag
id: urn:nl:ak:mtr:owp-03
toelichting: Persoonsgegevens mogen alleen verzameld worden voor een ‘welbepaald, uitdrukkelijk omschreven en gerechtvaardigd’ doel.
vereiste:
- avg-01-persoonsgegevens-worden-rechtmatig-verwerkt
- awb-01-zorgvuldigheidsbeginsel
levenscyclus:
- ontwerp
- dataverkenning-en-datapreparatie
- ontwikkelen
- verificatie-en-validatie
- implementatie
onderwerp:
- privacy-en-gegevensbescherming
rollen:
- projectleider
- jurist
sources:
  ADR:
  - PRI.4
  - PRI.7
  ARK:
  - 3.01
  - 3.05
hide:
- navigation
- toc
version: "1.0.0"
version_date: "2025-07-04"
---

<!-- tags -->

## Maatregel

Het doel voor het verwerken van persoonsgegevens met een algoritme is welbepaald en omschreven.

## Toelichting
Persoonsgegevens mogen alleen worden verwerkt voor een ‘welbepaald, uitdrukkelijk omschreven en gerechtvaardigd’ doel. De wettelijke grondslag voor de verwerking van de persoonsgegevens moet zijn beschreven.

De verwerking van persoonsgevens voor het ontwikkelen en gebruiken van een algoritme moet verenigbaar zijn met het oorspronkelijke verwerkingsdoel (doelbinding). Eventuele verdere (subsidiaire) verwerkingen, zoals het verwerken van persoonsgegevens voor een onderzoek naar onbewuste vooringenomenheid, moeten uitdrukkelijk worden omschreven.

Stel een overzicht op waarin is beschreven welke persoonsgegevens mogen worden verwerkt.
Bij de persoonsgegevens is aangegeven om wat voor categorie persoonsgegevens het gaat.
Per kenmerk is toegelicht waarom deze noodzakelijk is om te verwerken voor het ontwikkelen en gebruiken van het algoritme.
Het principe van dataminimalisatie is toegepast, wat betekent dat een keuze is gemaakt of een persoonsgegevens al dan niet strikt noodzakelijk is om het doel te bereiken of dat verwerking ervan achterwege kan blijven.

Voor [het beschermen van deze persoonsgegevens](3-dat-04-pseudonimiseren-anonimiseren.md) wordt per kenmerk aangegeven op welke manier deze kan worden beschermd. Denk hierbij aan het anonimiseren, pseudonomiseren en aggregeren van de persoonsgegevens.

Gebruik een [DPIA](../hulpmiddelen/DPIA.md) om bovenstaande zaken te beschrijven.

## Risico
Als het doel voor het verwerken van persoonsgegevens onvoldoende is omschreven en onderbouwd, ontstaat het risico dat onrechtmatig persoonsgegevens worden verwerkt en een inbreuk wordt gemaakt op privacyrechten van betrokkenen.


## Bijbehorende vereiste(n) { data-search-exclude }
??? expander "Bekijk alle vereisten"
    <!-- list_vereisten_on_maatregelen_page -->

## Bronnen
- [Toetsingskader Algoritmes Algemene Rekenkamer, 3.01, 3.05](https://www.rekenkamer.nl/onderwerpen/algoritmes/documenten/publicaties/2024/05/15/het-toetsingskader-aan-de-slag)
- [Onderzoekskader Algoritmes Auditdienst Rijk, PRI.4](https://www.rijksoverheid.nl/documenten/rapporten/2023/07/11/onderzoekskader-algoritmes-adr-2023)
- [Onderzoekskader Algoritmes Auditdienst Rijk, PRI.7](https://www.rijksoverheid.nl/documenten/rapporten/2023/07/11/onderzoekskader-algoritmes-adr-2023)

## Voorbeelden

!!! example "Stichting Inlichtingenbureau: Signaal Kostendelers"

	Stichting Inlichtingenbureau (IB) maakt gebruik van het algoritme ‘signaal kostendelers’ dat aangeeft wanneer er iets is veranderd dat de hoogte van de bijstandsuitkering kan beïnvloeden. Het IB krijgt informatie over wie in het huishouden woont om zo veranderingen op de kostendelersnorm door te kunnen geven aan gemeenten. Bij dit algoritme wordt onder andere gebruik gemaakt van het BSN en studie-informatie. Deze informatie is noodzakelijk om veranderingen te kunnen controleren van huishoudens. Het verwerken van deze persoonsgegevens is toegestaan onder (onder andere) ‘Wet structuur uitvoeringsorganisatie werk en inkomen’ artikel 63 en ‘Participatiewet’ artikel 64 en artikel 68.
	Het verwerken van deze gegevens is dus noodzakelijk voor het IB om haar functie te kunnen uitvoeren. Dit zal per organisatie verschillen maar soortgelijke wettelijke grondslag kan dus als uitgangspunt genomen worden voor controle binnen de eigen organisatie.

	Bron: [Signaal Kostendelers - Stichting Inlichtingenbureau]( https://algoritmes.overheid.nl/nl/algoritme/signaal-kostendelers-stichting-inlichtingenbureau/43858196#verantwoordGebruik)


Heb je een ander voorbeeld of best practice, laat het ons weten via [algoritmes@minbzk.nl](mailto:algoritmes@minbzk.nl)  
