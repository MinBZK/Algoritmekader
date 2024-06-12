---
title: Implementatie van de principes voor FAIR data
toelichting: Implementatie van de principes voor FAIR data maakt data "machine actionable"
vereiste:
- N.t.b.
levenscyclus:
- Dataverkenning en datapreparatie
bouwblok:
- Data
rollen:
- Gemandateerd verantwoordelijke(n)
- Data engineer
bibliography: references.bib
---

<!-- tags -->

## Maatregel

Het doel van de principes voor FAIR data is waardevolle data vindbaar, toegankelijk, interoperabel en herbruikbaar maken binnen en buiten de eigen organisatie. Dit nadrukkelijk niet alleen voor menselijke gebruikers maar juist ook voor machines dus voor algoritmen en AI. Voldoen aan de principes voor FAIR data maakt data "machine actionable", daarom wordt het acronym FAIR ook wel uitgelegd als "Fully AI Ready". In een tijd waarin data bij de bron en federatieve datastelsels de norm worden, ontstaan steeds meer gedistrinueerde data landschappen binnen en tussen overheidsorganisaties. Juist deze gedistribueerde data landschappen vragen om de implementatie van de principes voor FAIR data om data met name ook voor algoritmen en AI vindbaar, toegankelijk, interoperabel en herbruikbaar te maken, en op enige termijn ook "distributed learning" op overheidsadata mogelijk te maken.

------------------------------------------------------------------------

De principes voor FAIR data worden beheerd door de Nederlandse stichting [GO FAIR Foundation](https://www.gofair.foundation/ "GO FAIR Foundation").

[![](images/GFF_website%201000ppi.webp)](https://www.gofair.foundation/)

------------------------------------------------------------------------

De principes voor FAIR data krijgen een wettelijke grondslag voor onderzoeksgegevens van publiek gefinancierde onderzoeksorganisaties in de [Wet Hergebruik Overheidsinformatie](#0). Maar ook daar waar deze wettelijke grondslag niet van toepassing kan de implementatie van de principes voor FAIR data zinvol zijn.

------------------------------------------------------------------------

Hieronder volgt een kort overzicht van de vijftien principes voor FAIR data, de implementatie en realisatie genoemd bij elk principe beschrijven achtereenvolgens de mogelijke typen invulling en de mogelijke concrete invulling(en). Er kunnen voor elk principe meerdere mogelijkheden voor implementatie en realisatie zijn.

|                  |                                                                                                                                                            |
|--------------------|----------------------------------------------------|
| Maatregel        | **FAIR Guiding Principle F1**                                                                                                                              |
| Principe         | "(meta)data are assigned a globally unique and persistent identifier" (meta)data krijgen een wereldwijd unieke en persistente identificatiecode toegewezen |
| Bron             | [GO FAIR Foundation](https://www.gofair.foundation/f1 "F1")                                                                                                |
| Toepasselijkheid | onderzoeksgegevens van publiek gefinancierde onderzoeksorganisaties                                                                                        |
| Implementatie    | identifier service                                                                                                                                         |
| Realisatie       | [PID](https://www.surf.nl/en/services/persistent-identifiers)                                                                                              |

: FAIR Guiding Principle F1

|                  |                                                                                       |
|--------------------|---------------------------------------------------|
| Maatregel        | **FAIR Guiding Principle F2**                                                         |
| Principe         | "data are described with rich metadata" gegevens worden beschreven met rijke metadata |
| Bron             | [GO FAIR Foundation](https://www.gofair.foundation/f2 "F2")                           |
| Toepasselijkheid | onderzoeksgegevens van publiek gefinancierde onderzoeksorganisaties                   |
| Implementatie    | metadata schema                                                                       |
| Realisatie       | [DCAT-AP-NL](https://data.overheid.nl/ondersteuning/open-data/dcat)                   |

: FAIR Guiding Principle F2

|                  |                                                                                                                                                                            |
|--------------------|----------------------------------------------------|
| Maatregel        | **FAIR Guiding Principle F3**                                                                                                                                              |
| Principe         | "metadata clearly and explicitly include the identifier of the data it describes" metadata bevatten duidelijk en expliciet de identificatie van de data die ze beschrijven |
| Bron             | [GO FAIR Foundation](https://www.gofair.foundation/f3 "F3")                                                                                                                |
| Toepasselijkheid | onderzoeksgegevens van publiek gefinancierde onderzoeksorganisaties                                                                                                        |
| Implementatie    | metadata-data linking schema                                                                                                                                               |
| Realisatie       | --                                                                                                                                                                         |

: FAIR Guiding Principle F3

|                  |                                                                                                                                         |
|--------------------|----------------------------------------------------|
| Maatregel        | **FAIR Guiding Principle F4**                                                                                                           |
| Principe         | "(meta)data are registered or indexed in a searchable resource" (meta)data worden geregistreerd of geïndexeerd in een doorzoekbare bron |
| Bron             | [GO FAIR Foundation](https://www.gofair.foundation/f4 "F4")                                                                             |
| Toepasselijkheid | onderzoeksgegevens van publiek gefinancierde onderzoeksorganisaties                                                                     |
| Implementatie    | registry                                                                                                                                |
| Realisatie       | data catalogue                                                                                                                          |

: FAIR Guiding Principle F4

|                  |                                                                                                                                                                                                                        |
|--------------------|----------------------------------------------------|
| Maatregel        | **FAIR Guiding Principle A1**                                                                                                                                                                                          |
| Principe         | "(meta)data are retrievable by their identifier using a standardized communications protocol" (meta)data zijn opvraagbaar op basis van hun identificatiecode met behulp van een gestandaardiseerd communicatieprotocol |
| Bron             | [Go FAIR Foundation](https://www.gofair.foundation/a1 "A1")                                                                                                                                                            |
| Toepasselijkheid | onderzoeksgegevens van publiek gefinancierde onderzoeksorganisaties                                                                                                                                                    |
| Implementatie    | communication protocol                                                                                                                                                                                                 |
| Realisatie       | HTTP(S)                                                                                                                                                                                                                |

: FAIR Guiding Principle A1

|                  |                                                                                                                       |
|--------------------|----------------------------------------------------|
| Maatregel        | **FAIR Guiding Principle A1.1**                                                                                       |
| Principe         | "the protocol is open, free, and universally implementable" het protocol is open, vrij en universeel implementeerbaar |
| Bron             | [GO FAIR Foundation](https://www.gofair.foundation/a1-1 "A1.1")                                                       |
| Toepasselijkheid | onderzoeksgegevens van publiek gefinancierde onderzoeksorganisaties                                                   |
| Implementatie    | communication protocol                                                                                                |
| Realisatie       | HTTP(S)                                                                                                               |

: FAIR Guiding Principle A1.1

|                  |                                                                                                                                                                            |
|--------------------|----------------------------------------------------|
| Maatregel        | **FAIR Guiding Principle A1.2**                                                                                                                                            |
| Principe         | "the protocol allows for an authentication and authorization procedure, where necessary" het protocol een authenticatie- en autorisatieprocedure mogelijk maakt waar nodig |
| Bron             | [A1.2](https://www.gofair.foundation/a1-2 "A1.2")                                                                                                                          |
| Toepasselijkheid | onderzoeksgegevens van publiek gefinancierde onderzoeksorganisaties                                                                                                        |
| Implementatie    | authorization and authentication service                                                                                                                                   |
| Realisatie       | [Shibboleth](https://www.shibboleth.net/)                                                                                                                                  |

: FAIR Guiding Principle A1.2

|                  |                                                                                                                                              |
|--------------------|----------------------------------------------------|
| Maatregel        | **FAIR Guiding Principle A2**                                                                                                                |
| Principe         | "metadata are accessible, even when the data are no longer available" metadata zijn toegankelijk, ook als de data niet meer beschikbaar zijn |
| Bron             | [Go FAIR Foundation](https://www.gofair.foundation/a2 "A2")                                                                                  |
| Toepasselijkheid | onderzoeksgegevens van publiek gefinancierde onderzoeksorganisaties                                                                          |
| Implementatie    | metadata preservation policy                                                                                                                 |
| Realisatie       | afspraken                                                                                                                                    |

: FAIR Guiding Principle A2

|                  |                                                                                                                                                                                                                         |
|--------------------|----------------------------------------------------|
| Maatregel        | **FAIR Guiding Principle I1**                                                                                                                                                                                           |
| Principe         | "(meta)data use a formal, accessible, shared, and broadly applicable language for knowledge representation" (meta)data gebruiken een formele, toegankelijke, gedeelde en breed toepasbare taal voor kennisrepresentatie |
| Bron             | [Go FAIR Foundation](https://www.gofair.foundation/i1 "I1")                                                                                                                                                             |
| Toepasselijkheid | onderzoeksgegevens van publiek gefinancierde onderzoeksorganisaties                                                                                                                                                     |
| Implementatie    | knowledge representation language                                                                                                                                                                                       |
| Realisatie       | RDF, SKOS                                                                                                                                                                                                               |

: FAIR Guiding Principle I1

|                  |                                                                                                                                                      |
|--------------------|----------------------------------------------------|
| Maatregel        | **FAIR Guiding Principle I2**                                                                                                                        |
| Principe         | "(meta)data use vocabularies that follow FAIR principles" (meta)data gebruiken gegevenswoordenboeken of vocabulaires die de FAIR-principes volgen    |
| Bron             | [GO FAIR Foundation](https://www.gofair.foundation/i2 "I2")                                                                                          |
| Toepasselijkheid | onderzoeksgegevens van publiek gefinancierde onderzoeksorganisaties                                                                                  |
| Implementatie    | structured vocabulary                                                                                                                                |
| Realisatie       | [DCAT-AP-NL](https://data.overheid.nl/ondersteuning/open-data/dcat), [Woordenboek Hitte](https://woordenboek.klimaatadaptatienederland.nl/hitte/nl/) |

: FAIR Guiding Principle I2

|                  |                                                                                                                                 |
|--------------------|----------------------------------------------------|
| Maatregel        | **FAIR Guiding Principle I3**                                                                                                   |
| Principe         | "(meta)data include qualified references to other (meta)data" (meta)data omvatten bruikbare verwijzingen naar andere (meta)data |
| Bron             | [GO FAIR Foundation](https://www.gofair.foundation/i3 "I3")                                                                     |
| Toepasselijkheid | onderzoeksgegevens van publiek gefinancierde onderzoeksorganisaties                                                             |
| Implementatie    | semantic model                                                                                                                  |
| Realisatie       | --                                                                                                                              |

: FAIR Guiding Principle I3

|                  |                                                                                                                                                                                   |
|--------------------|----------------------------------------------------|
| Maatregel        | **FAIR Guiding Principle R1**                                                                                                                                                     |
| Principe         | "(meta)data are richly described with a plurality of accurate and relevant attributes" (meta)data worden rijkelijk beschreven met een veelvoud aan juiste en relevante attributen |
| Bron             | [GO FAIR Foundation](https://www.gofair.foundation/r1 "R1")                                                                                                                       |
| Toepasselijkheid | onderzoeksgegevens van publiek gefinancierde onderzoeksorganisaties                                                                                                               |
| Implementatie    | --                                                                                                                                                                                |
| Realisatie       |                                                                                                                                                                                   |

: FAIR Guiding Principle R1

|                  |                                                                                                                                                                         |
|--------------------|----------------------------------------------------|
| Maatregel        | **FAIR Guiding Principle R1.1**                                                                                                                                         |
| Principe         | "(meta)data are released with a clear and accessible data usage license" (meta)data worden beschikbaar gesteld met een duidelijke en toegankelijke datagebruikslicentie |
| Bron             | [GO FAIR Foundation](https://www.gofair.foundation/r1-1 "R1.1")                                                                                                         |
| Toepasselijkheid | onderzoeksgegevens van publiek gefinancierde onderzoeksorganisaties                                                                                                     |
| Implementatie    | usage license                                                                                                                                                           |
| Realisatie       | [Creative Commons](https://creativecommons.org/share-your-work/cclicenses/)                                                                                             |

: FAIR Guiding Principle R1.1

|                  |                                                                                                                |
|--------------------|----------------------------------------------------|
| Maatregel        | **FAIR Guiding Principle R1.2**                                                                                |
| Principe         | "(meta)data are associated with detailed provenance" (meta)data zijn gekoppeld aan een gedetailleerde herkomst |
| Bron             | [GO FAIR Foundation](https://www.gofair.foundation/r1-2 "R1.2")                                                |
| Toepasselijkheid | onderzoeksgegevens van publiek gefinancierde onderzoeksorganisaties                                            |
| Implementatie    | provenance model                                                                                               |
| Realisatie       | [PROV-DM](https://www.w3.org/TR/prov-dm/)                                                                      |

: FAIR Guiding Principle R1.2

|                  |                                                                                                                           |
|--------------------|----------------------------------------------------|
| Naam             | **FAIR Guiding Principle R1.3**                                                                                           |
| Principe         | "(meta)data meet domain-relevant community standards" (meta)data voldoen aan voor het betreffende domein relevante normen |
| Bron             | [GO FAIR Foundation](https://www.gofair.foundation/r1-3 "R1.3")                                                           |
| Toepasselijkheid | onderzoeksgegevens van publiek gefinancierde onderzoeksorganisaties                                                       |
| Implementatie    | FAIR implementation profile                                                                                               |
| Realisatie       | Afspraken                                                                                                                 |

: FAIR Guiding Principle R1.3

<!-- list_vereisten_on_maatregelen_page -->

------------------------------------------------------------------------

## Toelichting

> Het is belangrijk om te beseffen dat FAIR data niet per definitie ook open data zijn. Vanzelfsprekend voldoen open data bij voorkeur zoveel mogelijk aan de principes voor FAIR data, om aan de vindbaarheid, toegankelijkheid, interoperabiliteit en herbruikbaarheid van open data zo goed mogelijk invulling tegeven. Maar juist ook voor (privacy) gevoelige data dus gesloten data kan het heel zinvol zijn deze te laten voldoen aan de principes voor FAIR data, om juist daarmee specifieke geautoriseerde toegang tot gevoelige data mogelijk te kunnen maken.

------------------------------------------------------------------------

## Bijbehorende vereiste(n)

In de tabellen hierboven worden voor elk principe een of meer passende implemenaties van het betreffende principe genoenmd

------------------------------------------------------------------------

## Bronnen

-   [GO FAIR Foundation](https://www.gofair.foundation/interpretation)

-   [3-point FAIRification framework 3PFF](https://www.go-fair.org/how-to-go-fair/)

-   [Interbestuurlijke Datastrategie]((https://realisatieibds.nl/page/view/ff607c02-9f09-440a-a0e7-9bbb6c7ceb09/2-data-verzamelen-bruikbaar-maken-en-verwerken))

-   [NORA online](https://www.noraonline.nl/wiki/FAIR-principes)

------------------------------------------------------------------------

## Voorbeelden

N.t.b.

------------------------------------------------------------------------

## Literatuur

N.t.b.

------------------------------------------------------------------------
