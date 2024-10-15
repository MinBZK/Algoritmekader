---
title: Zorg voor een goede beveiliging van een algoritme.
toelichting: Zorg voor een goede beveiliging van de verschillende softwarecomponenten van een algoritme of AI-systeem.
vereiste:
- bio-01-beveiliging-informatie-en-informatiesystemen
- avg-12-beveiliging-van-verwerking
- aia-10-nauwkeurigheid-robuustheid-cyberbeveiliging
levenscyclus:
- ontwerp
- ontwikkelen
- verificatie-en-validatie
- implementatie
- monitoring-en-beheer
onderwerp:
- technische-robuustheid-en-veiligheid
- governance
rollen:
- projectleider
- informatiebeheerder
- security-officer
- privacy-officer
hide:
- navigation
- toc
---

<!-- tags -->

## Maatregel
Zorg voor een goede beveiliging van de verschillende softwarecomponenten van een algoritme of AI-systeem.
Bepaal of de data voldoende is beveiligd en maak hierin onderscheid tussen de inputdata en de outputdata.

## Toelichting

Er zijn beheersmaatregelen die kunnen helpen bij het zorgen voor een goede beveiliging van verschillende (software-)componenten van een algoritme of systeem. Hierbij kan worden gedacht aan:
Het toepassen van wachtwoordbeheer. [Baseline Informatiebeveiliging Overheid](https://www.digitaleoverheid.nl/overzicht-van-alle-onderwerpen/cybersecurity/bio-en-ensia/baseline-informatiebeveiliging-overheid/), de [NCSC Handreiking voor implementatie van detectieoplossingen](https://www.ncsc.nl/documenten/publicaties/2019/mei/01/handreiking-voor-implementatie-van-detectie-oplossingen) en het [Impact Assessment Mensenrechten en Algoritmes](../instrumenten/IAMA.md).

- Inzicht creëren in de beoogde opzet van de IT-infrastructuur (de architectuur) en de werkelijk geconfigureerde hard- en software. (CIS Control 1, BIO 8.1.1).
- Inrichten van een formeel proces voor het beheer van technische kwetsbaarheden. Dit omvat minimaal periodieke (geautomatiseerde) controle op de aanwezigheid van kwetsbaarheden in de te toetsen systemen, een risicoafweging en navolgbare afwerking daarvan of risicoacceptatie (BIO 12.6).
- Beoordelen, patchen en updaten van kwetsbaarheden in IT-systemen als deze bekend zijn. (BIO 12.6.1)
- Verwijderen of deactiveren van softwarecomponenten en services die niet noodzakelijk zijn voor het functioneren van het algoritme om beveiligingsrisico’s te beperken. (BIO 12.6.1)
- Er vindt zonering plaats binnen de technische infrastructuur conform de uitgangspunten die zijn vastgelegd in een operationeel beleidsdocument, waarbij minimaal sprake is van scheiding tussen vertrouwde en onvertrouwde netwerken (BIO 9.4.2). Denk ook aan het scheiden in netwerken (BIO 13.1.3).
- Actieve monitoring van de algoritme data vindt plaats zodat beveiligingsincidenten en -gebeurtenissen in een vroeg stadium worden gedetecteerd. (BIO 12.4.1, NCSC Handreiking voor implementatie van detectieoplossingen).
- Netwerkverkeer en componenten worden actief gemonitord. (BIO 12.4.1).
- Beoordeel of de data ten behoeve van het ontwikkelen en gebruiken van het algoritme voldoende is beveiligd. Maak hierin onderscheid tussen de trainingsdata, inputdata en de outputdata.


## Risico
Oneigenlijke toegang van buitenaf kan plaatsvinden via zwakheden in het systeem.

## Bijbehorende vereiste(n)

<!-- list_vereisten_on_maatregelen_page -->

## Bronnen

- [Baseline Informatiebeveiliging Overheid](https://www.digitaleoverheid.nl/overzicht-van-alle-onderwerpen/cybersecurity/bio-en-ensia/baseline-informatiebeveiliging-overheid/)
- [Onderzoekskader Algoritmes Auditdienst Rijk, IB.18 t/m IB.25](https://www.rijksoverheid.nl/documenten/rapporten/2023/07/11/onderzoekskader-algoritmes-adr-2023)
- [NCSC Handreiking voor implementatie van detectieoplossingen](https://www.ncsc.nl/documenten/publicaties/2019/mei/01/handreiking-voor-implementatie-van-detectie-oplossingen)
- [Handleiding Quickscan Information Security](https://www.cip-overheid.nl/media/xhxglzi0/20180220-quickscan-bir2017.pdf)

## Voorbeeld

Heb jij een goed voorbeeld? Laat het ons weten!
