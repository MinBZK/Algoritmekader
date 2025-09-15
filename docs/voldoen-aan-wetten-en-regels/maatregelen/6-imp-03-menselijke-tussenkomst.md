---
title: Richt bij besluitvorming betekenisvolle menselijke tussenkomst in
id: urn:nl:ak:mtr:imp-03
toelichting: Als algoritmes worden ingezet om te ondersteunen bij het nemen van beslissingen en besluiten door overheidsorganisaties, kan het noodzakelijk zijn om betekenisvolle menselijke tussenkomst in te richten om foutieve output te signaleren en te corrigeren.
vereiste:
- avg-10-recht-op-niet-geautomatiseerde-besluitvorming
- grw-01-fundamentele-rechten
- aia-22-gebruiksverantwoordelijken-monitoren-werking
- awb-01-zorgvuldigheidsbeginsel
- aia-09-menselijk-toezicht
- aia-21-gebruiksverantwoordelijken-menselijk-toezicht
levenscyclus:
- ontwerp
- implementatie
- monitoring-en-beheer
onderwerp:
- menselijke-controle
- governance
rollen:
- projectleider
- beleid-en-advies
sources:
  ADR:
  - SV.5
  - SV.6
  ARK:
  - 3.11
hide:
- navigation
- toc
---

<!-- tags -->
## Maatregel
Richt controle op algoritmes zó in dat voldaan wordt aan de vereiste van menselijke tussenkomst in de zin van artikel 22 van de Algemene Verordening Gegevensbescherming (AVG).

## Toelichting
Bij situaties waar de AVG van toepassing is, is het op grond van artikel 22 van de AVG verboden om volledig geautomatiseerd besluiten te nemen die [rechtsgevolgen of aanmerkelijke effecten hebben](../vereisten/avg-10-recht-op-niet-geautomatiseerde-besluitvorming.md). Er zijn uitzonderingen op dit verbod, zoals het bestaan van een wettelijke grondslag voor dergelijke besluitvorming. Het is van belang dat de menselijke tussenkomst daadwerkelijk ‘betekenisvol’ is. De AVG beschrijft niet hoe betekenisvolle menselijke tussenkomst eruit moet zien. In het SCHUFA-arrest van 7 december 2023 heeft het Hof van Justitie wel bepaald dat er in ieder geval geen sprake is van betekenisvolle menselijke tussenkomst als een bepaalde output van het gebruikte algoritme zo goed als altijd leidt tot een bepaald besluit, ook wanneer dat besluit wel nog door een natuurlijk persoon genomen wordt.

De publicatie ['Handvatten betekenisvolle menselijke tussenkomst' van de Autoriteit Persoonsgegevens (AP)](https://www.autoriteitpersoonsgegevens.nl/actueel/betekenisvolle-menselijke-tussenkomst-bij-algoritmische-besluitvorming) geeft de volgende richtlijnen voor het inrichten van betekenisvolle menselijke tussenkomst:

### Mens
De AP geeft aan dat de mens eigenschappen heeft die algoritmes niet hebben. Om die eigenschappen betekenisvol tot uiting te laten komen, zijn de volgende onderdelen belangrijk:

- Beoordelaars moeten alle relevante factoren kunnen betrekken.
- Beoordelaars moeten hun eigen menselijk inzicht kunnen inzetten.
- Beoordelaars moeten voldoende bekwaam zijn om het algoritme, de output en de totstandkoming van het besluit te beoordelen.

### Technologie en ontwerp
De AP waarschuwt dat niet alleen de mens invloed moet kunnen uitoefenen, maar dat de technologie ook de mens kan beïnvloeden. Zo kan bijvoorbeeld <i>automation bias</i> optreden, waarbij mensen de prestaties en nauwkeurigheid van algoritmes overschatten. Zo wordt te snel de output van het algoritme zonder kritische blik gevolgd. Aan de andere kant kan ook <i>algorithmic aversion</i> ontstaan, waarbij juist sprake is van een onderschatting van dezelfde eigenschappen van het algoritme. Dit heeft als risico dat menselijke bias in de besluitvorming wordt geïntroduceerd. Om de technologie zo in te richten dat menselijke tussenkomst op betekenisvolle wijze mogelijk blijft, zijn de volgende onderdelen belangrijk.

- De interface moet zo worden ontworpen en vormgegeven dat neutraliteit wordt gewaarborgd en betekenisvolle tussenkomst wordt gestimuleerd.
- De beoordelaar moet de data kunnen zien die relevant zijn bij de beoordeling, zonder dat dit onoverzichtelijk wordt.
- De beoordelaar moet de data in een relevante context kunnen zien.
- De beoordelaar moet de data in een zo neutraal mogelijke volgorde te zien krijgen.
- De wijze van beoordelen moet op een gevarieerde wijze plaatsvinden om te voorkomen dat het routinematig wordt en daarmee zijn functie verliest.

### Proces
De AP geeft aan dat de betekenis van menselijke tussenkomst beïnvloed kan worden door het proces daaromheen. Om het proces rond de menselijke tussenkomst zo in te richten dat deze optimaal betekenisvol is, zijn de volgende onderdelen belangrijk.

- Het moment binnen de besluitvorming waarop de menselijke tussenkomst plaatsvindt moet passend zijn bij het besluit en de werking van het algoritme. Het kan nodig zijn dat de menselijke tussenkomst op meerdere momenten plaatsvindt.
- Beoordelaars moeten voldoende tijd krijgen om beslissingen te maken.
- Beoordelaars moeten bevoegdheid hebben om tegen het algoritme in te gaan en zich vrij voelen dat ook daadwerkelijk te doen.
- Beoordelaars moeten voldoende ondersteuning hebben bij het nemen van beslissingen.

### Governance
De AP noemt dat binnen een organisatie het belang van betekenisvolle menselijke tussenkomst moet worden onderschreven en dat de organisatie steeds verantwoordelijkheid moet blijven nemen voor de inzet van algoritmes en de daarvoor noodzakelijke inrichting van de menselijke tussenkomst. Om te waarborgen dat binnen een organisatie de juiste personen daarvoor verantwoordelijk blijven, zijn de volgende onderdelen belangrijk.

- De organisatie legt haar beleid over betekenisvolle menselijke tussenkomst vast in procedures.
- De organisatie traint en instrueert beoordelaars voldoende om hun rol te kunnen vervullen.
- De verantwoordelijke toetst en monitort het proces en de gebruikte algoritmes en voert wijzigingen door bij blijkende onvoldoende betekenisvolle menselijke tussenkomst.

De AP heeft in de publicatie ['Handvatten betekenisvolle menselijke tussenkomst'](https://www.autoriteitpersoonsgegevens.nl/actueel/betekenisvolle-menselijke-tussenkomst-bij-algoritmische-besluitvorming) een groot aantal vragen opgenomen die verantwoordelijken zich dienen te stellen bij de inrichting van betekenisvolle menselijke tussenkomst ter invulling van de hierboven omschreven onderdelen. Het is raadzaam die handvatten te gebruiken.

## Risico
Wanneer algoritmen een rol spelen in besluitvormingsprocessen met rechtsgevolgen of andere aanmerkelijke effecten voor betrokkene en hierbij geen betekenisvolle menselijke tussenkomst is ingericht, dan kan dit kwalificeren als volledig geautomatiseerde besluitvorming die in strijd is met het verbod van artikel 22 van de AVG. Ook kan de kwaliteit van de besluitvorming lager zijn zonder betekenisvolle menselijke tussenkomst.

## Bijbehorende vereiste(n) { data-search-exclude }
??? expander "Bekijk alle vereisten"
    <!-- list_vereisten_on_maatregelen_page -->

## Bronnen

- [Autoriteit Persoonsgegevens - 'Handvatten betekenisvolle menselijke tussenkomst'](https://www.autoriteitpersoonsgegevens.nl/actueel/betekenisvolle-menselijke-tussenkomst-bij-algoritmische-besluitvorming)
- [Toetsingskader Algoritmes Algemene Rekenkamer, 3.11](https://www.rekenkamer.nl/onderwerpen/algoritmes/documenten/publicaties/2024/05/15/het-toetsingskader-aan-de-slag)
- [Menselijke tussenkomst | Algoritmes | Algemene Rekenkamer](https://www.rekenkamer.nl/onderwerpen/algoritmes/toetsingskader/ethiek/menselijke-tussenkomst)
- [Onderzoekskader Algoritmes Auditdienst Rijk, SV.5, SV.6](https://www.rijksoverheid.nl/documenten/rapporten/2023/07/11/onderzoekskader-algoritmes-adr-2023)
- [Advies landsadvocaat over geautomatiseerde selectietechnieken, p.9](https://www.rijksoverheid.nl/documenten/rapporten/2024/03/13/bijlage-2-advies-landsadvocaat-over-geautomatiseerde-selectietechniek)
- [Recht op een menselijke blik bij besluiten | Autoriteit Persoonsgegevens](https://www.autoriteitpersoonsgegevens.nl/themas/basis-avg/privacyrechten-avg/recht-op-een-menselijke-blik-bij-besluiten#:~:text=Reactie%20op%20verzoek-,Geautomatiseerd%20besluit,noemen%20dit%20een%20geautomatiseerd%20besluit.)
- Kamerstukken IT 2017-2018, 34 851, nr. (MvT UAVG), p. 120-121
- [Ethics guidelines for trustworthy AI | Shaping Europe’s digital future](https://digital-strategy.ec.europa.eu/en/library/ethics-guidelines-trustworthy-ai), deel (64)
- [Towards Digital Life: Een toekomstvisie op AI anno 2032, TNO](https://www.tno.nl/nl/visie-ai-2032/)
- [Algoritmes afwegen | Rathenau Instituut](https://www.rathenau.nl/nl/digitalisering/algoritmes-afwegen)
-	[Managing supplier delivery reliability risk under limited information: Foundations for a human-in-the-loop DSS - ScienceDirect](https://www.sciencedirect.com/science/article/abs/pii/S0167923612002886)
-	[Human control of AI systems: from supervision to teaming | AI and Ethics (springer.com)](https://link.springer.com/article/10.1007/s43681-024-00489-4)
-	[Zijn er beperkingen op het gebruik van geautomatiseerde besluitvorming? - Europese Commissie](https://commission.europa.eu/law/law-topic/data-protection/rules-business-and-organisations/dealing-citizens/are-there-restrictions-use-automated-decision-making_nl#:~:text=Example-,Antwoord,is%20of%20hen%20aanzienlijk%20be%C3%AFnvloedt.)

## Voorbeelden

!!! example "Hof van Justitie van de Europese Unie: Prejudiciële verwijzing"

    In 2021 heeft een burger SCHUFA (een Duits bedrijf wat kredietwaardigheid informatie deelt met derden) aangeklaagd naar aanleiding van een niet ingewilligd verzoek tot inzage en wissing van diens persoonsgegevens. De reden hiervoor kwam door een afwijzing van ondersteuning op basis van geautomatiseerde individuele besluitvorming. Het Hof van Justitie oordeelde dat, zoals bij de kredietscores van SCHUFA het geval was, er geen sprake is van betekenisvolle menselijke tussenkomst als de uitkomsten van het gebruikte algoritme zo goed als altijd leiden tot een bepaalde uitkomst voor de betrokkene.

	Bron: [HvJEU december 2023, ECLI:EU:C:2023:957 (SCHUFA Scoring)](https://eur-lex.europa.eu/legal-content/nl/TXT/?uri=CELEX:62021CJ0634)


!!! example "Rijksdienst voor Ondernemend Nederland: Risicocontrole SDE++ Subsidieaanvragen"

    De Rijksdienst voor Ondernemend Nederland (RVO) maakt gebruik van een algoritme bij het behandelen van subsidieaanvragen. Per ronde komen er duizenden aanvragen binnen. Het algoritme geeft elke aanvraag een risico-indicatie. Elke aanvraag met een risico-indicatie wordt beoordeeld door een adviseur. De adviseur bekijkt het onderdeel met een risico-indicatie. Als de aanvraag niet volledig is of als de informatie niet voldoende is, dan kan de aanvrager de kans krijgen om extra informatie aan te leveren of iets uit te leggen. Het algoritme zorgt nooit voor een directe afwijzing. Aanvragen voor ingewikkelde technieken of aanvragen boven een bepaald bedrag worden altijd helemaal door een adviseur beoordeeld en niet alleen op het onderdeel met een risico.

	Bron: [Rijksdienst voor Ondernemend Nederland: Risicocontrole SDE++ Subsidieaanvragen](https://algoritmes.overheid.nl/nl/algoritme/oorg10005/51892728/risicocontrole-sde-subsidieaanvragen#verantwoordGebruik)

Heb je een ander voorbeeld of best practice, laat het ons weten via [algoritmes@minbzk.nl](mailto:algoritmes@minbzk.nl)  
