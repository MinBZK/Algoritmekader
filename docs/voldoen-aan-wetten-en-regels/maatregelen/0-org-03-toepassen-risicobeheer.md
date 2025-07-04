---
title: Maak een plan voor het omgaan met risico’s
id: urn:nl:ak:mtr:org-03
toelichting: Alle stappen van risicobeheer worden periodiek uitgevoerd en op het juiste niveau in de organisatie behandeld.
vereiste:
- aia-03-risicobeheersysteem
- awb-01-zorgvuldigheidsbeginsel
levenscyclus:
- organisatieverantwoordelijkheden
onderwerp:
- governance
rollen:
- projectleider
- beleid-en-advies
sources:
  ADR: SV.13
  ARK: 1.03
hide:
- navigation
- toc

version: "1.0.0"
version_date: "2025-07-04"
---

<!-- Let op! onderstaande regel met 'tags' niet weghalen! Deze maakt automatisch de knopjes op basis van de metadata  -->
<!-- tags -->

## Maatregel
<!-- Vul hier een omschrijving in van wat deze maatregel inhoudt. -->
Pas risicobeheer gestructureerd toe voorafgaand en gedurende de ontwikkeling en gebruik van algoritmes.

## Toelichting
<!-- Geef hier een toelichting van deze maatregel -->
- Bepaal tijdig, bijvoorbeeld in de ontwerpfase om [wat voor toepassing het gaat](2-owp-05-soort-algoritme.md) (algoritme of AI-systeem) en bepaal welke risicoclassificatie hierbij hoort.
- Bepaal op basis van de toepassing en de risicoclassificatie, welke aspecten van risicobeheer moeten worden toegepast.
- Inventariseer tijdig, bijvoorbeeld in de probleemanalayse- of ontwerpfase, bij betrokken experts welke beleidskaders en hulpmiddelen binnen de organisatie moeten worden ingezet om risicobeheer toe te passen.
- Bepaal op basis van de [levenscyclus van een algoritme of AI-systeem](0-org-08-beslismoment-levenscyclus.md) wanneer welke aspecten van risicobeheer moeten worden toegepast.
- Maak inzichtelijk op welke niveaus risicobeheer kan en moet worden belegd bij het ontwikkelen en gebruiken van algoritmes.
- Daarbij gaat het om het identificeren, analyseren, evalueren (afhankelijk van de risicobereidheid), behandelen (risicoreactie, o.a. maatregelen), monitoren & beoordelen en communiceren & rapporteren van risico's.
- Gedurende de levenscyclus van een algoritme of AI-systemen kunnen nieuwe risico's ontstaan waar mogelijk nieuwe maatregelen voor moeten worden getroffen. Het is van belang dat iteratief wordt gewerkt aan mitigerende maatregelen en dat risicobeheer periodiek wordt toegepast.

Let op! Sommige maatregelen in het Algoritmekader gaan dieper in op het uitvoeren van risicoanalyses.

## Generatieve AI
Bij het gebruik van generatieve AI is het van extra belang dat risico's gedekt worden.

- Breng de veiligheidsrisico's van generatieve AI-toepassingen systematisch in kaart, bijvoorbeeld door middel van de [OWASP Risk Rating Methodology](https://owasp.org/www-community/OWASP_Risk_Rating_Methodology).
- Verzeker je ervan dat je door ontwikkeling of gebruik van generatieve AI [niet discrimineert](../../onderwerpen/bias-en-non-discriminatie.md). [Stel een protocol op voor situaties waar discriminatie toch optreedt](0-org-15-discriminatieprotocol.md).
- Zorg ervoor dat je een eindverantwoordelijke aanstelt op het kruisingsgebied tussen cybersecurity en generatieve AI, en een eindverantwoordelijke voor privacy en generatieve AI. Stel ook een ondersteunende rol aan, bij wie medewerkers terecht kunnen voor vragen over generatieve AI.
- Maak het mogelijk om [incidenten te rapporteren](../vereisten/aia-31-ai-modellen-algemene-doeleinden-systeemrisico-ernstige-incidenten.md).

## Risico
Risico's worden niet (tijdig) vastgesteld en adequaat geadresseerd en behandeld.

## Bijbehorende vereiste(n) { data-search-exclude }
<!-- Hier volgt een lijst met vereisten op basis van de in de metadata ingevulde vereiste -->

<!-- Let op! onderstaande regel met 'list_vereisten_on_maatregelen_page' niet weghalen! Deze maakt automatisch een lijst van bijbehorende verseisten op basis van de metadata  -->
??? expander "Bekijk alle vereisten"
    <!-- list_vereisten_on_maatregelen_page -->

## Bronnen
<!-- Vul hier de relevante bronnen in voor deze maatregel -->
- [Onderzoekskader Algoritmes Auditdienst Rijk, SV.13 ](https://www.rijksoverheid.nl/documenten/rapporten/2023/07/11/onderzoekskader-algoritmes-adr-2023)
- [Toetsingskader Algoritmes Algemene Rekenkamer, 1.03](https://www.rekenkamer.nl/onderwerpen/algoritmes/documenten/publicaties/2024/05/15/het-toetsingskader-aan-de-slag)
- [OWASP Risk Rating Methodology](https://owasp.org/www-community/OWASP_Risk_Rating_Methodology)

## Voorbeelden

!!! example "Nationaal Cyber Security Centrum: Richtlijnen veilig software ontwikkelen"

    Het Nationaal Cyber Security Centrum van het Ministerie van Justitie en Veiligheid heeft een publicatie over het ontwikkelen van veilige software. Hierin staat beschreven hoe op beleidsmatig niveau beveiligingsrichtlijnen toegepast kunnen worden. Er wordt in Hoofdstuk B.03 'Risicomanagement' een duidelijk beeld geschetst van wat noodzakelijke maatregelen hiervoor zijn.

    Hier worden ook verschillende methodes voorgesteld voor de risicoanalyse. Omdat deze publicatie uit 2021 komt is bijvoorbeeld de NEN-ISO/IEC 27005:2011 niet maar van toepassing maar is deze vervangen door de versie uit 2024 ([NEN-ISO/IEC 27005:2024](https://www.nen.nl/nen-en-iso-iec-27005-2024-en-327805)).

    Bron: [Beleids- en beheersingsrichtlijnen voor de ontwikkeling van veilige software](https://www.ncsc.nl/documenten/publicaties/2019/mei/01/beleids--en-beheersingsrichtlijnen-voor-de-ontwikkeling-van-veilige-software)


Heb je een ander voorbeeld of best practice, laat het ons weten via [algoritmes@minbzk.nl](mailto:algoritmes@minbzk.nl)
