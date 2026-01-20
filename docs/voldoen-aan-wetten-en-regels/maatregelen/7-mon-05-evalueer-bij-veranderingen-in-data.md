---
title: Monitor regelmatig op veranderingen in de data. Bij veranderingen evalueer je de prestaties en output van het algoritme.
id: urn:nl:ak:mtr:mon-05
toelichting: Monitor regelmatig op veranderingen in de data. Bij geconstateerde veranderingen evalueer je de prestaties en de output van het algoritme.
vereiste:
- aia-05-data-kwaliteitscriteria
- aia-11-systeem-voor-kwaliteitsbeheer
- aia-10-nauwkeurigheid-robuustheid-cyberbeveiliging
- avg-05-juistheid-en-actualiteit-van-persoonsgegevens
levenscyclus:
- monitoring-en-beheer
onderwerp:
- data
- technische-robuustheid-en-veiligheid
rollen:
- ontwikkelaar
sources:
  ADR: DM.8
  ARK:
  - 1.02
  - 1.08
  - 2.06
  - 2.08
  - 2.13
hide:
- navigation
- toc
version: "e33a2081"
version_date: "2025-08-26"
---

<!-- tags -->

## Maatregel
Monitor regelmatig op veranderingen in de inputdata. Bij geconstateerde veranderingen evalueer je de prestaties en de output van het algoritme.

## Toelichting
De inputdata kan voortdurend veranderen.
Dat kan komen doordat de context waarin het algoritme wordt gebruikt verandert, of door een technische fout wanneer de data bijvoorbeeld niet goed is ingelezen of aangeleverd.
Het te laat opmerken van zo'n verandering kan grote gevolgen hebben.
Daarom is het belangrijk om regelmatig te controleren en evalueren of:

- De data van [voldoende kwaliteit is voor de beoogde toepassing](3-dat-01-datakwaliteit.md).
- Het algoritme nog [presteert in lijn met de vastgestelde doelen](5-ver-01-functioneren-in-lijn-met-doeleinden.md).
- De gegevens op de juiste en volledige manier worden verwerkt.

Zeker wanneer er gebruikt wordt gemaakt van informatie van derden is het belangrijk om regelmatig te controleren of er veranderingen in de data zijn. Goede monitoring op datakwaliteit zorgt ervoor dat je voldoende controle hebt over de kwaliteit van de data, zelfs als je hiervoor afhankelijk bent van andere partijen.

## Risico
Door veranderingen in de data presteert het model niet meer zoals verwacht.

## Bijbehorende vereiste(n) { data-search-exclude }
??? expander "Bekijk alle vereisten"
    <!-- list_vereisten_on_maatregelen_page -->

## Bronnen
- [Onderzoekskader algoritmes, Auditdienst Rijk, DM.8](../hulpmiddelen/onderzoekskader-adr.md)
- [Toetsingskader Algoritmes Algemene Rekenkamer, 1.02, 1.08, 2.06, 2.08, 2.13](https://www.rekenkamer.nl/onderwerpen/algoritmes/documenten/publicaties/2024/05/15/het-toetsingskader-aan-de-slag)
- Norm: ["Information technology - Artificial intelligence - Data life cycle framework"](https://www.nen.nl/nen-en-iso-iec-8183-2024-en-325716)

## Voorbeelden

!!! example "Gemeente Den Haag: Quality-Bot"
	De gemeente Den Haag maakt gebruik van een datakwaliteit algoritme: Quality-Bot (Q-Bot). Dit algoritme controleert bestaande en nieuwe patronen in de data om zo de bronhouder nieuwe inzichten te kunnen geven in de data. Op deze manier kan datakwaliteit ingeschat worden en kunnen fouten worden ontdekt.
	Dit algoritme monitort dus geen directe veranderingen autonoom maar communiceert deze naar de werknemer. Op deze manier kan gecontroleerd worden of wat voor data veranderingen er optreden. Het evalueren van (vervolg) prestaties is niet mogelijk omdat dit algoritme niet direct is aangesloten op een vervolg algoritme maar gezien kan worden als een voor-traject.

	Bron: [Algoritme datakwaliteit - Gemeente Den Haag]( https://algoritmes.overheid.nl/nl/algoritme/algoritme-datakwaliteit-gemeente-den-haag/67582219)

Heb je een ander voorbeeld of best practice, laat het ons weten via [algoritmes@minbzk.nl](mailto:algoritmes@minbzk.nl)  
