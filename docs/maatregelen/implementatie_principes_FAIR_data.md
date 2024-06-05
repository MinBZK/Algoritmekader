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
---

<!-- tags -->

Het doel van de principes voor FAIR data is waardevolle data vindbaar, toegankelijk, interoperabel en herbruikbaar maken binnen en buiten de eigen organisatie. Nadrukkelijk niet alleen voor menselijke gebruikers maar juist ook voor machines dus voor AI. Voldoen aan de principes voor FAIR data maakt data "machine actionable", daarom wordt het acronym FAIR ook wel uitgelegd als "Fully AI Ready". De principes voor FAIR data worden beheerd door de Nederlandse stichting [GO FAIR Foundation](https://www.gofair.foundation/). De principes voor FAIR data krijgen een wettelijke grondslag voor onderzoeksgegevens van publiek gefinancierde onderzoeksorganisaties in de [Wet Hergebruik Overheidsinformatie](https://www.tweedekamer.nl/kamerstukken/wetsvoorstellen/detail?cfg=wetsvoorsteldetails&qry=wetsvoorstel%3A36382#wetgevingsproces).

FAIR data is niet per definitie ook open data. Open data voldoet natuurlijk bij voorkeur zoveel mogelijk aan de principes voor FAIR data, om aan de vindbaarheid, toegankelijkheid, interoperabiliteit en herbruikbaarheid van de data zo goed mogelijk te maken. Omgekeerd kan het heel zinvol zijn om privacy gevoelige dus gesloten data te laten voldoen aan de principes voor FAIR data om juist daarmee geautoriseerde toegang tot deze data mogelijk te kunnen maken.

Hieronder volgt een kort overzicht van de vijftien (!) principes voor FAIR data, de implementatie en realisatie genoemd bij elk principe beschrijven achtereenvolgens de mogelijke typen invulling en de mogelijke concrete invulling(en). Er kunnen voor elk principe meerdere mogelijkheden voor implementatie en realisatie zijn.

|                  |                                                                       |
|------------------|-----------------------------------------------------------------------|
| Maatregel        | **FAIR Guiding Principle F1**                                         |
| Principe         | "(meta)data are assigned a globally unique and persistent identifier" |
| Bron             | [GO FAIR Foundation](https://www.gofair.foundation/f1 "F1")           |
| Toepasselijkheid | onderzoeksgegevens van publiek gefinancierde onderzoeksorganisaties   |
| Implementatie    | identifier service                                                    |
| Realisatie       | [PID](https://www.surf.nl/en/services/persistent-identifiers)         |

: FAIR Guiding Principle F1

|                  |                                                                     |
|------------------|---------------------------------------------------------------------|
| Maatregel        | **FAIR Guiding Principle F2**                                       |
| Principe         | "data are described with rich metadata"                             |
| Bron             | [GO FAIR Foundation](https://www.gofair.foundation/f2 "F2")         |
| Toepasselijkheid | onderzoeksgegevens van publiek gefinancierde onderzoeksorganisaties |
| Implementatie    | metadata schema                                                     |
| Realisatie       | [DCAT-AP-NL](https://data.overheid.nl/ondersteuning/open-data/dcat) |

: FAIR Guiding Principle F2

|                  |                                                                                   |
|------------------|-----------------------------------------------------------------------------------|
| Maatregel        | **FAIR Guiding Principle F3**                                                     |
| Principe         | "metadata clearly and explicitly include the identifier of the data it describes" |
| Bron             | [GO FAIR Foundation](https://www.gofair.foundation/f3 "F3")                       |
| Toepasselijkheid | onderzoeksgegevens van publiek gefinancierde onderzoeksorganisaties               |
| Implementatie    | metadata-data linking schema                                                      |
| Realisatie       |                                                                                   |

: FAIR Guiding Principle F3

|                  |                                                                     |
|------------------|---------------------------------------------------------------------|
| Maatregel        | **FAIR Guiding Principle F4**                                       |
| Principe         | "(meta)data are registered or indexed in a searchable resource"     |
| Bron             | [GO FAIR Foundation](https://www.gofair.foundation/f4 "F4")         |
| Toepasselijkheid | onderzoeksgegevens van publiek gefinancierde onderzoeksorganisaties |
| Implementatie    | registry                                                            |
| Realisatie       | data catalogue                                                      |

: FAIR Guiding Principle F4

|                  |                                                                                               |
|------------------|-----------------------------------------------------------------------------------------------|
| Maatregel        | **FAIR Guiding Principle A1**                                                                 |
| Principe         | "(meta)data are retrievable by their identifier using a standardized communications protocol" |
| Bron             | [Go FAIR Foundation](https://www.gofair.foundation/a1 "A1")                                   |
| Toepasselijkheid | onderzoeksgegevens van publiek gefinancierde onderzoeksorganisaties                           |
| Implementatie    | communication protocol                                                                        |
| Realisatie       | HTTP(S)                                                                                       |

: FAIR Guiding Principle A1

|                  |                                                                     |
|------------------|---------------------------------------------------------------------|
| Maatregel        | **FAIR Guiding Principle A1.1**                                     |
| Principe         | "the protocol is open, free, and universally implementable"         |
| Bron             | [GO FAIR Foundation](https://www.gofair.foundation/a1-1 "A1.1")     |
| Toepasselijkheid | onderzoeksgegevens van publiek gefinancierde onderzoeksorganisaties |
| Implementatie    | communication protocol                                              |
| Realisatie       | HTTP(S)                                                             |

: FAIR Guiding Principle A1.1

|                  |                                                                                          |
|------------------|------------------------------------------------------------------------------------------|
| Maatregel        | **FAIR Guiding Principle A1.2**                                                          |
| Principe         | "the protocol allows for an authentication and authorization procedure, where necessary" |
| Bron             | [A1.2](https://www.gofair.foundation/a1-2 "A1.2")                                        |
| Toepasselijkheid | onderzoeksgegevens van publiek gefinancierde onderzoeksorganisaties                      |
| Implementatie    | authorization and authentication service                                                 |
| Realisatie       | [Shibboleth](https://www.shibboleth.net/)                                                |

: FAIR Guiding Principle A1.2

|                  |                                                                       |
|------------------|-----------------------------------------------------------------------|
| Maatregel        | **FAIR Guiding Principle A2**                                         |
| Principe         | "metadata are accessible, even when the data are no longer available" |
| Bron             | [Go FAIR Foundation](https://www.gofair.foundation/a2 "A2")           |
| Toepasselijkheid | onderzoeksgegevens van publiek gefinancierde onderzoeksorganisaties   |
| Implementatie    | metadata preservation policy                                          |
| Realisatie       | afspraken                                                             |

: FAIR Guiding Principle A2

|                  |                                                                                                             |
|------------------|-------------------------------------------------------------------------------------------------------------|
| Maatregel        | **FAIR Guiding Principle I1**                                                                               |
| Principe         | "(meta)data use a formal, accessible, shared, and broadly applicable language for knowledge representation" |
| Bron             | [Go FAIR Foundation](https://www.gofair.foundation/i1 "I1")                                                 |
| Toepasselijkheid | onderzoeksgegevens van publiek gefinancierde onderzoeksorganisaties                                         |
| Implementatie    | knowledge representation language                                                                           |
| Realisatie       | RDF, SKOS                                                                                                   |

: FAIR Guiding Principle I1

|                  |                                                                                                                                                      |
|------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| Maatregel        | **FAIR Guiding Principle I2**                                                                                                                        |
| Principe         | "(meta)data use vocabularies that follow FAIR principles"                                                                                            |
| Bron             | [GO FAIR Foundation](https://www.gofair.foundation/i2 "I2")                                                                                          |
| Toepasselijkheid | onderzoeksgegevens van publiek gefinancierde onderzoeksorganisaties                                                                                  |
| Implementatie    | structured vocabulary                                                                                                                                |
| Realisatie       | [DCAT-AP-NL](https://data.overheid.nl/ondersteuning/open-data/dcat), [Woordenboek Hitte](https://woordenboek.klimaatadaptatienederland.nl/hitte/nl/) |

: FAIR Guiding Principle I2

|                  |                                                                     |
|------------------|---------------------------------------------------------------------|
| Maatregel        | **FAIR Guiding Principle I3**                                       |
| Principe         | "(meta)data include qualified references to other (meta)data"       |
| Bron             | [GO FAIR Foundation](https://www.gofair.foundation/i3 "I3")         |
| Toepasselijkheid | onderzoeksgegevens van publiek gefinancierde onderzoeksorganisaties |
| Implementatie    | semantic model                                                      |
| Realisatie       |                                                                     |

: FAIR Guiding Principle I3

|                  |                                                                                        |
|------------------|----------------------------------------------------------------------------------------|
| Maatregel        | **FAIR Guiding Principle R1**                                                          |
| Principe         | "(meta)data are richly described with a plurality of accurate and relevant attributes" |
| Bron             | [GO FAIR Foundation](https://www.gofair.foundation/r1 "R1")                            |
| Toepasselijkheid | onderzoeksgegevens van publiek gefinancierde onderzoeksorganisaties                    |
| Implementatie    | usage license                                                                          |
| Realisatie       |                                                                                        |

: FAIR Guiding Principle R1

|                  |                                                                             |
|------------------|-----------------------------------------------------------------------------|
| Maatregel        | **FAIR Guiding Principle R1.1**                                             |
| Principe         | "(meta)data are released with a clear and accessible data usage license"    |
| Bron             | [GO FAIR Foundation](https://www.gofair.foundation/r1-1 "R1.1")             |
| Toepasselijkheid | onderzoeksgegevens van publiek gefinancierde onderzoeksorganisaties         |
| Implementatie    | usage license                                                               |
| Realisatie       | [Creative Commons](https://creativecommons.org/share-your-work/cclicenses/) |

: FAIR Guiding Principle R1.1

|                  |                                                                     |
|------------------|---------------------------------------------------------------------|
| Maatregel        | **FAIR Guiding Principle R1.2**                                     |
| Principe         | "(meta)data are associated with detailed provenance"                |
| Bron             | [GO FAIR Foundation](https://www.gofair.foundation/r1-2 "R1.2")     |
| Toepasselijkheid | onderzoeksgegevens van publiek gefinancierde onderzoeksorganisaties |
| Implementatie    | provenance model                                                    |
| Realisatie       | [PROV-DM](https://www.w3.org/TR/prov-dm/)                           |

: FAIR Guiding Principle R1.2

|                  |                                                                     |
|------------------|---------------------------------------------------------------------|
| Naam             | **FAIR Guiding Principle R1.3**                                     |
| Principe         | "(meta)data meet domain-relevant community standards"               |
| Bron             | [GO FAIR Foundation](https://www.gofair.foundation/r1-3 "R1.3")     |
| Toepasselijkheid | onderzoeksgegevens van publiek gefinancierde onderzoeksorganisaties |
| Implementatie    | FAIR implementation profile                                         |
| Realisatie       | Afspraken                                                           |

: FAIR Guiding Principle R1.3

Je vind hier meer informatie over de principes voor FAIR data en de implementatie ervan:

-   de officiële interpretatie van de principes voor FAIR data van de [GO FAIR Foundation](https://www.gofair.foundation/interpretation)

-   het [3-point FAIRification framework 3PFF](https://www.go-fair.org/how-to-go-fair/) van de GO FAIR Foundation

-   de Toolbox verantwoord datagebruik van het programma realisatie [Interbestuurlijke Datastrategie]((https://realisatieibds.nl/page/view/ff607c02-9f09-440a-a0e7-9bbb6c7ceb09/2-data-verzamelen-bruikbaar-maken-en-verwerken)) van DGDOO van BZK

-   in concept nog een vermelding op [NORA online](https://www.noraonline.nl/wiki/FAIR-principes)

<!-- list_vereisten_on_maatregelen_page -->

## Maatregel

## Toelichting

## Bijbehorende vereiste(n)

## Bronnen

| Bron           |
|----------------|
| Algoritmekader |

## Voorbeeld
