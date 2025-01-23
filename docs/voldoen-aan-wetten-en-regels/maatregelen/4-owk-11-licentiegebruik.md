---
title: Gebruik een passende licentie bij publicatie of gebruik van (open) data of algoritmes
id: urn:nl:ak:mtr:owk-11
toelichting: Gebruik bij het publiceren of gebruiken van data of algoritmes een passende licentie die aansluit bij het beoogde doel en de bescherming van burgers. Overweeg hierbij zorgvuldig welke voorwaarden nodig zijn, zoals bronvermelding of het delen onder gelijke voorwaarden.
levenscyclus:
- ontwikkelen
- dataverkenning-en-datapreparatie
- monitoring-en-beheer
onderwerp:
- data
rollen:
- ontwikkelaar
- jurist
vereiste:
- arc-01-archiefwet
- aut-01-auteursrechten
- dat-01-databankenwet
- aia-05-data-kwaliteitscriteria
hide:
- navigation
- toc
---

<!-- Let op! onderstaande regel met 'tags' niet weghalen! Deze maakt automatisch de knopjes op basis van de metadata  -->
<!-- tags -->

## Maatregel
Gebruik bij het publiceren of gebruiken van data of algoritmes een passende licentie die aansluit bij het beoogde doel en de bescherming van burgers. Overweeg hierbij zorgvuldig welke voorwaarden nodig zijn, zoals bronvermelding of het delen onder gelijke voorwaarden.

## Toelichting
Het kiezen van de juiste licentie is belangrijk bij het publiceren en gebruiken van datasets en algoritmes. Dit zorgt ook voor [betere datakwaliteit (zie o.a. R1.1 uit FAIR)](3-dat-02-fair-data.md). In de huidige digitale samenleving, met name door de opkomst van generatieve AI, is het belangrijk om de balans te vinden tussen openheid en traceerbaarheid.
Overweeg bij het kiezen van een licentie de volgende aspecten:

- Bronvermelding: Wil je gebruikers van bijvoorbeeld de dataset verplichten om de oorspronkelijke bron te vermelden?
- Share-alike: Wil je gebruikers verplichten om *afgeleide werken* van hetgeen zij gebruiken, onder dezelfde voorwaarden / licentie te delen?
- Commercieel gebruik: Bepaal of en onder welke voorwaarden commercieel gebruik is toegestaan.
- Herroepbaarheid: Houd rekening met toekomstige aanpassingen van de licentie.

Voorbeelden van licenties zijn:

- Creative Commons BY-SA: Vereist bronvermelding en het delen onder gelijke voorwaarden
- Creative Commons BY: Vereist alleen bronvermelding
- Publiek Domein met bronvermeldingsplicht: Voor maximale openheid met behoud van traceerbaarheid

## Risico
Enkele risico's bij het niet vermelden van de passende licentie:

- Onduidelijke licentievoorwaarden kunnen leiden tot onbedoeld gebruik van de dataset
- Te restrictieve licenties kunnen hergebruik onnodig beperken
- Te open licenties (zoals CC0) kunnen leiden tot oncontroleerbare mis- en desinformatie
- Onherroepelijke licenties bieden geen flexibiliteit voor toekomstige aanpassingen

## Bijbehorende vereiste(n) { data-search-exclude }
??? expander "Bekijk alle vereisten"
    <!-- list_vereisten_on_maatregelen_page -->

## Bronnen
- [Licentiewijzer voor overheden - voor licenties bij software](https://opensourcewerken.nl/news/view/84367829-63bb-4039-8528-e9b0041c7067/met-zes-vragen-de-juiste-licentiecategorie-kiezen)
- [Licensing Assistant - tool van de Europese commissie, ook voor licenties bij software](https://interoperable-europe.ec.europa.eu/collection/eupl/solution/licensing-assistant)
- [FAIR Data Principles - R1.1](https://www.gofair.foundation/r1-1)
- [Creative Commons licenties](https://creativecommons.org/licenses/)
- [Open Data Handboek](https://www.digitaleoverheid.nl/overzicht-van-alle-onderwerpen/nieuwe-technologieen-data-en-ethiek/open-data/)

## Voorbeeld
!!! example "Voorbeeld: Nationaal Archief en licenties op data"

    Het [Nationaal Archief](https://www.nationaalarchief.nl/) kiest ervoor om de CC-BY-SA licentie te gaan gebruiken, om de burger te beschermen tegen oncontroleerbare mis-/desinformatie door bijvoorbeeld generatieve AI die bronvermelding     achterwege laat. Met deze CC-BY-SA licentievorm blijven we [open data](https://www.nationaalarchief.nl/onderzoeken/open-data) publiceren, maar is ‘public domain zonder voorwaarden’ / CC0 niet meer het ultieme doel. Het belangrijkste argument voor het toepassen van de CC-BY-SA licentie is dat het ervoor zorgt dat de burger de hoognodige informatie krijgt die nodig is om mis-/desinformatie te herkennen. Bijkomend voordeel van de CC-BY-SA licentie is o.a. dat die veranderd kan worden wanneer dat in de toekomst nodig zou zijn; in tegenstelling tot de onherroepelijke CC0.
    
    Het Nationaal Archief heeft gekozen voor deze Creative Commons licentie (die gelden in zowel auteursrecht als databankrecht en zijn goed machine-leesbaar), maar het kan ook anders. Data kan ook bijvoorbeeld gepubliceerd worden als Publiek Domein met de voorwaarde dat bronvermelding verplicht is voor alle hergebruik.
