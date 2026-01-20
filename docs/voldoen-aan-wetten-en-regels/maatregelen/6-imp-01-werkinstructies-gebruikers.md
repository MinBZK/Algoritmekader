---
title: Stel een werkinstructie op voor gebruikers
id: urn:nl:ak:mtr:imp-01
toelichting: Stel een duidelijke werkinstructie op voor medewerkers die gebruik maken van of in aanraking komen met het algoritme
vereiste:
- aia-01-ai-geletterdheid
- awb-01-zorgvuldigheidsbeginsel
- aia-28-transparantieverplichtingen
- aia-09-menselijk-toezicht
- grw-02-non-discriminatie
- aia-21-gebruiksverantwoordelijken-menselijk-toezicht
levenscyclus:
- implementatie
onderwerp:
- menselijke-controle
- transparantie
- governance
rollen:
- projectleider
- beleid-en-advies
sources:
  ARK: 3.07
  ADR:
  - DM.3
  - DM.10
  - DM.12
hide:
- navigation
- toc
version: "e33a2081"
version_date: "2025-08-26"
---

<!-- Let op! onderstaande regel met 'tags' niet weghalen! Deze maakt automatisch de knopjes op basis van de metadata  -->
<!-- tags -->

## Maatregel
Stel een werkinstructie op voor gebruikers zodat zij weten hoe het algoritme correct gebruikt kan worden en hoe ze om kunnen gaan met de (veiligheids)risico's.

## Toelichting
Het is belangrijk dat gebruikers een werkinstructie ontvangen met informatie over hoe zij met het algoritme kunnen en moeten werken. Hierin worden zaken beschreven als:

- Op wat voor manier het algoritme ondersteunt bij het uitvoeren van (wettelijke) taken en hoe het past in de werkwijze. Maak hierbij een duidelijke keuze rondom de rol van het systeem/algoritme bij de werkwijze van medewerkers.
- Wat de mogelijkheden en beperkingen zijn bij het gebruik van het algoritme. Op welke manieren mag het algoritme gebruikt worden? En op welke manieren niet? Wat zijn de grenzen van toepasbaarheid? En wat zijn de voorwaarden waaronder het model gebruikt kan worden en waaronder niet?
- Maak duidelijke werkinstructies en protocollen om te voorkomen dat beslissingen, gebaseerd op de output van het systeem, door (automation) bias worden beïnvloed.
- Welke informatie mag er worden ingevoerd in het systeem? En welke informatie niet?
- Wat de impact is van het gebruik van het algoritme op de samenleving en individuen (denk aan [fundamentele rechten](../../onderwerpen/fundamentele-rechten.md) en [energieverbruik](7-mon-06-meten-milieu-impact.md) of dat een besluit met rechtsgevolgen wordt genomen).
- Zorg dat medewerkers weten waar ze eventuele problemen met het systeem kunnen melden. Bespreek regelmatig met de betrokken medewerkers welke uitdagingen of verbeteringen zij zien bij het gebruik van het systeem.
- Wat de risico's zijn die aan het gebruik verbonden zijn. Denk aan:

    - verschillende vormen van [bias](../../onderwerpen/bias-en-non-discriminatie.md), zoals automation bias,
    - foutieve beslissingen
    - veiligheidsrisico's.

- Welke maatregelen zijn getroffen om deze risico's te beperken (bijv. [bias analyse](5-ver-03-biasanalyse.md), ['stopknop' ingebouwd](4-owk-02-stopzetten-gebruik.md), transparantie over de output).
- Hoe de output van het algoritme moet worden geïnterpreteerd en hoe het algoritme tot deze beslissing is gekomen. Zorg dat de output op een eenduidige manier kan worden geïnterpreteerd.
- Hoe het werkproces kan worden uitgevoerd, zonder ondersteuning van het algoritme.
- Hoe kan je weten dat het systeem niet (meer) goed werkt?
- Welke protocollen er zijn als incidenten zich voordoen.
- Waar je op moet letten om veiligheidsrisico's te verminderen.
- Welke waarschuwingen het systeem kan en zou moeten geven op basis van [continue monitoring](7-mon-07-plan-continue-monitoring.md). Hoe er omgegaan moet worden bij deze waarschuwingen.

Denk hierbij na over het eventueel bijscholen van medewerkers als het kennisniveau nog onvoldoende is om de werkinstructies goed te begrijpen.

## Risico
<!-- vul hier het specifieke risico in dat kan worden gemitigeerd met behulp van deze maatregel -->

Het algoritme wordt onjuist gebruikt of verkeerd geïnterpreteerd door gebruikers waardoor onjuiste belissingen of besluiten worden genomen. Als gebruikers niet weten hoe ze veilig moeten werken, kunnen ze (onbewust) toegang bieden aan kwaadwillenden.

## Bijbehorende vereiste(n) { data-search-exclude }
<!-- Let op! onderstaande regel met 'list_vereisten_on_maatregelen_page' niet weghalen! Deze maakt automatisch een lijst van bijbehorende verseisten op basis van de metadata  -->
??? expander "Bekijk alle vereisten"
	<!-- list_vereisten_on_maatregelen_page -->

## Bronnen
<!-- Vul hier de relevante bronnen in voor deze maatregel -->

- [Toetsingskader Algoritmes Algemene Rekenkamer, 3.07](https://www.rekenkamer.nl/onderwerpen/algoritmes/documenten/publicaties/2024/05/15/het-toetsingskader-aan-de-slag)
- [Onderzoekskader algoritmes, Auditdienst Rijk, DM.3, DM.10 en DM.12](../hulpmiddelen/onderzoekskader-adr.md)
- [Ethics Guidelines of Trustworthy AI](https://op.europa.eu/en/publication-detail/-/publication/d3988569-0434-11ea-8c1f-01aa75ed71a1)
- [Handreiking non-discriminatie by design](../hulpmiddelen/handreiking-non-discriminatie.md)
- [Impact Assessment Mensenrechten en Algoritmes](https://www.rijksoverheid.nl/documenten/rapporten/2021/02/25/impact-assessment-mensenrechten-en-algoritmes)
- [Toetsingskader risicoprofilering – Normen tegen discriminatie op grond van ras en nationaliteit, College voor de Rechten van de Mens](https://publicaties.mensenrechten.nl/publicatie/4093c026-ae41-4c1d-aa78-4ce0e205b5de)

## Voorbeelden
<!-- Voeg hier een voorbeeld toe, door er bijvoorbeeld naar te verwijzen -->
!!! example "Gemeente Utrecht: Handleiding Generatieve AI"


	De gemeente Utrecht heeft in April 2024 een handleiding gepubliceerd voor Generatieve AI (GenAI), bijvoorbeeld ChatGPT. Hierin wordt uitgelegd hoe het systeem gebruikt kan worden om zo medewerkers uit te leggen welke risico’s vastzitten aan het gebruik van GenAI. Daarnaast wordt benoemd hoe de beslissingen rondom deze handleiding tot stand zijn gekomen.

	Deze handleiding is breed opgesteld en zal dus voor een specifiek algoritme binnen een organisatie aangepast moeten worden. De opzet voor een handleiding staat al en kan ter inspiratie gebruikt worden voor andere handleidingen.


	Bron: [Handleiding Generatieve AI - Gemeente Utrecht](https://kennisnetwerkdata.pleio.nl/groups/view/f6ad627e-001b-4053-8413-2e65aa8b63e4/kennisbank-data-en-samenleving/wiki/view/041884ee-fd28-4697-ac4f-1d2241bf8fa0/gebruikshandleiding-generatieve-ai-van-de-gemeente-utrecht)

Heb je een ander voorbeeld of best practice, laat het ons weten via [algoritmes@minbzk.nl](mailto:algoritmes@minbzk.nl)
