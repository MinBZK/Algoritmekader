---
title: AI-systemen loggen automatisch bepaalde gegevens
id: urn:nl:ak:ver:aia-07
toelichting: AI-systemen met een hoog risico zijn dusdanig technisch vormgegeven dat gebeurtenissen gedurende hun levenscyclus automatisch worden geregistreerd (“logs”).
levenscyclus:
- ontwikkelen
- monitoring-en-beheer
onderwerp:
- governance
- technische-robuustheid-en-veiligheid
hide:
- navigation
---

<!-- let op! Deze vereiste geldt altijd omdat je volgens de AVG en de BIO ook moet loggen -->

<!-- tags -->
## Vereiste

Algoritmes en AI-systemen zijn dusdanig technisch vormgegeven dat gebeurtenissen gedurende hun levenscyclus automatisch worden geregistreerd (“logs”). 


## Toelichting

AI-systemen met een hoog risico zijn ontworpen met functionaliteiten die gebeurtenissen gedurende hun levenscyclus automatisch registreren.
Dit wordt vaak aangeduid als "logs".
Deze logs bieden een traceerbaarheidsmechanisme waarmee gebruiksverantwoordelijken en autoriteiten incidenten en fouten kunnen analyseren, naleving kunnen controleren en mogelijke risico's kunnen identificeren en aanpakken.
Het doel van deze registratie is om de transparantie en verantwoordingsplicht van AI-systemen te vergroten, waardoor het beheer van risico's en incidenten verbetert.

Voor AI-systemen met een hoog-risico voorziet de loggingcapaciteit ten minste in: a) de registratie van de duur van elk gebruik van het systeem; b) de referentiedatabank aan de hand waarvan de inputdata zijn gecontroleerd door het systeem; c) de inputdata ten aanzien waarvan de zoekopdracht een match heeft opgeleverd; d) de identificatie van natuurlijke personen die betrokken zijn bij de verificatie van de resultaten. Specifiek voor gebruiksverantwoordelijken

Voor AI-systemen die door bestuursorganen worden gebruikt of AI-systmen die persoonsgegevens verwerken leveren de BIO en AVG vergelijkbare verplichingen op die ook van toepassing zijn op AI-systmen die niet gezien worden als een AI-systeem met hoog risico. Daarbij komen nog verplichtingen om de logs doorlopend of periodiek te monitoren op incidenten.

## Bronnen

- [Artikel 12 Verordening Artificiële Intelligentie](https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=OJ:L_202401689#d1e3495-1-1)
- [Artikel 26.6 Verordening Artificiële Intelligentie](https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=OJ:L_202401689#d1e3495-1-1), zie ook [deze vereiste over logging door gebruiksverantwoordelijke](aia-25-gebruiksverantwoordelijken-bewaren-logs.md).
- [Hoofdstuk 12.4 Baseline Informatiebeveiliging Overheid ](https://www.bio-overheid.nl/media/13kduqsi/bio-versie-104zv_def.pdf)
- [Artikel 5 en 32 Algemene Verordening Gegevensbescherming](https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=CELEX:32016R0679)

## Wanneer van toepassing?

## Risico

Ontbreken van automatische logregistratie kan leiden tot een gebrek aan transparantie en traceerbaarheid van het AI-systeem, wat het vermogen om verantwoordelijkheid te nemen en eventuele problemen aan te pakken belemmert en betrokkenen wiens persoonsgegevens worden verwerkt of geraakt worden door beslissingen van het AI-systeem in hun rechten kunnen worden beperkt.

## Maatregelen

<!-- list_maatregelen vereiste/aia-07-automatische-logregistratie no-search no-onderwerp no-rol no-levenscyclus -->
