---
title: FAIR data
toelichting: Maak waardevolle data vindbaar, toegankelijk, interoperabel en herbruikbaar (FAIR) binnen en buiten de eigen organisatie.
levenscyclus:
  - dataverkenning-en-datapreparatie
onderwerp:
  - data
rollen:
  - data-engineer
hide: navigation
---

<!-- tags -->

## Maatregel

Maak waardevolle data vindbaar, toegankelijk, interoperabel en herbruikbaar (FAIR) binnen en buiten de eigen organisatie.

## Toelichting

De internationale [FAIR-principes](https://www.gofair.foundation/) zijn richtlijnen voor de manier van beschrijven, opslag en publicatie van data. 

- **Findable** (vindbaar): Metadata moet gemakkelijk te vinden zijn voor zowel mensen als computers.
- **Accessible** (toegankelijk): Gebruikers moeten weten hoe toegang tot de data verkregen kan worden (autorisatie en authenticatie)
- **Interoperable** (uitwisselbaar): Data moet meestal geïntegreerd worden met andere data en bijbehorden applicaties, opslag en processen.
- **Reusable** (herbruikbaar): Het uiteindelijke doel van FAIR is om hergebruik van data te optimaliseren.

Wanneer je voldoet aan de 15 principes is je data 'machine actionable'. Dit maakt het mogelijk dat de data effectief gebruikt kan worden voor verschillende algoritmes en AI-systemen.

FAIR data betekent niet per definitie dat data open data is. Juist ook voor (privacy) gevoelige data (gesloten data) kan het heel zinvol zijn om te voldoen aan de principes voor FAIR data, om juist daarmee specifieke geautoriseerde toegang tot gevoelige data mogelijk te kunnen maken.

### 15 principes voor FAIR data

Er zijn 15 principes voor FAIR data geformuleerd:

#### Findable (vindbaar)
- [F1: Aan (meta)data wordt een wereldwijd unieke en permanente identifier toegevoegd](https://www.gofair.foundation/f1)

    !!! example "Voorbeeld"

        Met behulp van [Persistent Identifiers (PID)](https://www.surf.nl/diensten/persistent-identifiers) zorg je ervoor dat jouw data (bijvoorbeeld onderzoeksdata) altijd vindbaar blijft. 
        PID's kun je vergelijken met het ISBN-nummer bij boeken. Het idee is dat ook als de locatie of de onderliggende infrastructuur verandert, de verwijzing intact blijft. 

- [F2: Data wordt beschreven met rijke metadata](https://www.gofair.foundation/f2)

    !!! example "Voorbeeld"

        Het team van [data.overheid.nl](https://data.overheid.nl/) heeft de metadata standaard [DCAT-AP-DONL](https://docs.datacommunities.nl/data-overheid-nl-documentatie/dcat/dcat-ap-donl) ontwikkeld die speciaal voor de uitwisseling van dataset informatie voor de Nederlandse situatie is ingericht. Dit is gebaseerd op de [Data Catalog Vocabulary (DCAT) versie](https://www.w3.org/TR/vocab-dcat/) die de Europese Unie heeft opgesteld. Je kan hierover meer lezen op de site van [data.overheid.nl](https://data.overheid.nl/ondersteuning/open-data/dcat).

- [F3: Metadata bevat duidelijk en expliciet de identificatie van de data die ze beschrijven](https://www.gofair.foundation/f3)
- [F4: (Meta)data worden geregistreerd of geïndexeerd in een doorzoekbare bron](https://www.gofair.foundation/f4) 

#### Accessible (toegankelijk)
- [A1: (Meta)data zijn opvraagbaar op basis van hun identificatiecode met behulp van een gestandaardiseerd communicatieprotocol](https://www.gofair.foundation/a1) 
- [A1.1: Het protocol is open, vrij en universeel implementeerbaar](https://www.gofair.foundation/a1-1) 
- [A1.2: Het protocol maakt waar nodig een authenticatie- en autorisatieprocedure mogelijk](https://www.gofair.foundation/a1-2) 
- [A2: Metadata zijn toegankelijk, ook als de data niet meer beschikbaar zijn](https://www.gofair.foundation/a2) 

#### Interoperable (uitwisselbaar)
- [I1: (Meta)data gebruikt een formele, toegankelijke, gedeelde en breed toepasbare taal voor kennisrepresentatie](https://www.gofair.foundation/i1) 
- [I2: (Meta)data gebruikt gegevenswoordenboeken of vocabulaires die FAIR-principes volgen](https://www.gofair.foundation/i2) 

    !!! example "Voorbeeld woordenboek"

        In het [woordenboek Hitte](https://woordenboek.klimaatadaptatienederland.nl/hitte/nl/) staan ongeveer 230 definities van termen rond het thema hitte die gebruikt worden in het klimaatadaptatieveld. Dit woordenboek is ontwikkeld in opdracht van het ministerie van Infrastructuur en Waterstaat door overheidsstichting Geonovum.

- [I3: (Meta)data bevat gekwalificeerde verwijzingen naar andere (meta)data](https://www.gofair.foundation/i3) 

#### Reusable (herbruikbaar)
- [R1: (Meta)data wordt rijkelijk beschreven met een veelheid aan nauwkeurige en relevante attributen](https://www.gofair.foundation/r1) 
- [R1.1: (Meta)data wordt vrijgegeven met een duidelijke en toegankelijke licentie voor datagebruik](https://www.gofair.foundation/r1-1) 
- [R1.2: (Meta)data wordt geassocieerd met gedetailleerde herkomst](https://www.gofair.foundation/r1-1) 

    !!! example "Voorbeeld"

        [PROV-DM](https://www.w3.org/TR/prov-dm/) is een conceptueel datamodel dat gebruikt kan worden voor de herkomstinformatie (provenance) van data. 
        
- [R1.3: (Meta)data voldoet aan domein-relevante normen](https://www.gofair.foundation/r1-3) 

## Vereisten

<!-- list_vereisten_on_maatregelen_page -->

!!! note "Opmerking"

    [Artikel 5b van de Wet hergebruik van overheidsinformatie](https://wetten.overheid.nl/jci1.3:c:BWBR0036795&hoofdstuk=III&paragraaf=3.1&artikel=5b&z=2024-06-19&g=2024-06-19) stelt dat dnderzoeksgegevens in overeenstemming met de FAIR-beginselen actief beschikbaar moeten worden gesteld voor hergebruik door een publiek gefinancierde onderzoeksorganisatie. Dit geldt voor zover:

    1. die documenten zijn geproduceerd in het kader van geheel of gedeeltelijk met overheidsmiddelen gefinancierde wetenschappelijke onderzoeksactiviteiten;
    2. die documenten openbaar zijn gemaakt via een institutionele of thematische databank als bedoeld in artikel 10, tweede lid, van de richtlijn; en
    3. rechtmatige handelsbelangen, activiteiten inzake kennisoverdracht en reeds bestaande intellectuele eigendomsrechten zich hiertegen niet verzetten.
 

## Bronnen

- [GO FAIR Foundation](https://www.gofair.foundation/interpretation)
- [3-point FAIRification framework 3PFF](https://www.go-fair.org/how-to-go-fair/)
- [Toolbox verantwoord datagebruik, 2b](https://realisatieibds.nl/page/view/ff607c02-9f09-440a-a0e7-9bbb6c7ceb09/3-data-verzamelen)
- [NORA online](https://www.noraonline.nl/wiki/FAIR-principes)

