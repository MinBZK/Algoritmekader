---
title: Vermeld het gebruik van persoonsgegevens in het verwerkingsregister
id: urn:nl:ak:mtr:imp-07
toelichting: Door in het verwerkingsregister te vermelden welke persoonsgegevens worden verwerkt voor het gebruik van een algoritme, wordt een betrokkene geïnformeerd over de verwerking van diens persoonsgegevens en is intern inzichtelijk welke persoonsgegevens worden verwerkt.
vereiste:
- avg-07-transparantie-bij-verwerken-persoonsgegevens
levenscyclus:
- implementatie
onderwerp:
- transparantie
- privacy-en-gegevensbescherming
rollen:
- projectleider
- jurist
sources:
  ADR: PRI.8
  ARK: 3.04
hide:
- navigation
- toc
version: "92559128"
version_date: "2025-07-04"
---

<!-- tags -->

## Maatregel

 Neem de ontwikkeling en gebruik van een algoritme op in het verwerkingsregister als persoonsgegevens worden verwerkt.

## Toelichting
- Door in het verwerkingsregister te vermelden welke persoonsgegevens worden verwerkt voor het gebruik van een algoritme wordt een betrokkene geïnformeerd over de verwerking van diens persoonsgegevens.
- Hiermee is ook voor de organisatie intern inzichtelijk welke persoonsgegevens voor welke toepassingen worden verwerkt.
- Het is van belang dat vanaf het moment dat persoonsgegevens worden verwerkt, meteen een vermelding hiervan wordt gemaakt in het verwerkingsregister.
- Dat betekent dat als persoonsgegevens worden verwerkt bij het ontwikkelen en trainen van het algoritme en deze nog niet in gebruik zijn genomen, al een vermelding moet worden gedaan in het verwerkingsregister.
- Bij beëindiging van het gebruik van het algoritme moet het verwerkingsregister worden aangepast.

## Risico
Betrokkenen en de interne organisatie zijn niet op de hoogte welke persoonsgegevens worden verwerkt met een algoritme, waardoor zij hier geen controle over hebben.


## Bijbehorende vereiste(n) { data-search-exclude }
??? expander "Bekijk alle vereisten"
    <!-- list_vereisten_on_maatregelen_page -->


## Bronnen

- [Onderzoekskader Algoritmes Auditdienst Rijk, PRI.8](https://www.rijksoverheid.nl/documenten/rapporten/2023/07/11/onderzoekskader-algoritmes-adr-2023)
- [Autoriteit Persoonsgegevens](https://www.autoriteitpersoonsgegevens.nl/themas/basis-avg/privacyrechten-avg/recht-op-informatie)
- [Toetsingskader Algoritmes Algemene Rekenkamer, 3.04](https://www.rekenkamer.nl/onderwerpen/algoritmes/documenten/publicaties/2024/05/15/het-toetsingskader-aan-de-slag)

## Voorbeelden

!!! example "Gemeente Amsterdam: Blurring as a Service"

	De Gemeente Amsterdam maakt gebruik van een algoritme waarmee mensen op straat beter geanonimiseerd kunnen worden; Blurring as a Service. Hierbij worden persoonsgegevens zoals gezicht en andere lichaamskenmerken (biometrische persoonsgegevens) vervaagd of ‘geblurd’.

    Het verwerken van deze gegevens is opgenomen in het volledige verwerkingsregister en is te vinden op pagina 239 onder het kopje “3.1.4. Blurring as a Service”.

	Bron: [Het verwerkingsregister AVG - Gemeente Amsterdam](https://www.amsterdam.nl/privacy/verwerkingsregister/verwerkingsregister-avg/)

Heb je een ander voorbeeld of best practice, laat het ons weten via [algoritmes@minbzk.nl](mailto:algoritmes@minbzk.nl)
