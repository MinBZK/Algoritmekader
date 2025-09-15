---
title: Maak een evaluatieplan voor tijdens het gebruik van het algoritme
id: urn:nl:ak:mtr:mon-04
toelichting: Maak een evaluatieplan voor wanneer het algoritme in gebruik is. Dit plan bevat wanneer, wat en hoe er geëvalueerd dient te worden om te valideren of het model nog in lijn is met de vastgestelde doelstelling.
vereiste:
- aia-03-risicobeheersysteem
- aia-18-corrigerende-maatregelen-voor-non-conforme-ai
- aia-22-gebruiksverantwoordelijken-monitoren-werking
- aia-34-monitoring-na-het-in-de-handel-brengen
levenscyclus:
- monitoring-en-beheer
onderwerp:
- technische-robuustheid-en-veiligheid
rollen:
- projectleider
sources:
  ARK: 2.14
hide:
- navigation
---

<!-- tags -->

## Maatregel
Maak een evaluatieplan voor wanneer het algoritme in gebruik is.
Dit plan bevat wanneer, wat en hoe er geëvalueerd dient te worden om te valideren of het model nog in lijn is met de [vastgestelde doelstelling](1-pba-02-formuleren-doelstelling.md).

## Toelichting
Het evaluatieplan moet aangeven op welke momenten er wordt geëvalueerd, wat er opnieuw wordt geëvalueerd en hoe dat wordt gedaan.

Voor het opstellen van het evaluatieplan zijn de volgende stappen nodig:

1. [Bepaal of periodieke controle noodzakelijk is](#bepaal-of-periodieke-controle-noodzakelijk-is)
2. [Bepaal bij welke gebeurtenissen het algoritme geëvalueerd moet worden](#bepaal-bij-welke-gebeurtenissen-het-algoritme-geevalueerd-moet-worden)
3. [Bepaal wat er geëvalueerd moet worden](#bepaal-wat-er-geevalueerd-moet-worden)

### Bepaal of periodieke controle noodzakelijk is
Stel vast of er periodieke momenten zijn vanuit bijvoorbeeld wetgeving, organisatiebeleid of risicomanagement waarop het wenselijk is dat het algoritme geëvalueerd wordt.

### Bepaal bij welke gebeurtenissen het algoritme geëvalueerd moet worden
Wat zijn gebeurtenissen die om een nieuwe evaluatie vragen? Denk bijvoorbeeld aan momenten waarop het bijtrainen van het model noodzakelijk is, zoals:

- Een wijziging in de data of het algoritme.
- Aangepaste wetgeving.
- Andere context of tijd waarin het algoritme gebruikt wordt.
- Een nieuwe werkwijze.
- Het optreden van een incident.
- Gebruikersfeedback.
- Een verandering in de gebruikscontext (bijv. een situatie als COVID-19).

### Bepaal wat er geëvalueerd moet worden
Bepaal welke onderdelen van het algoritme geëvalueerd dienen te worden bij een periodieke controle of wanneer er een gebeurtenis plaatsvindt waardoor evaluatie wenselijk is.

Wat minimaal periodiek geëvalueerd moet worden is:

- [nauwkeurigheid](5-ver-02-evalueer-nauwkeurigheid.md)
- [betrouwbaarheid](5-ver-06-evalueer-betrouwbaarheid.md)
- [reproduceerbaarheid](4-owk-07-reproduceerbaarheid.md)
- [bias](5-ver-03-biasanalyse.md)
- [veiligheid](7-mon-08-test-weerbaarheid-tegen-aanvallen.md)
- [grondrechten](2-owp-07-afwegen-grondrechten.md)
- [privacy](4-owk-03-privacyrisico.md).

Bij een evaluatie hoeft niet altijd alles weer geëvalueerd te worden. Dit hangt af van het type wijzigingen die er zijn geweest en van de aspecten die continu worden gemonitored. Leg vast wat er wanneer geëvalueerd dient te worden.

### Documenteer voor en tijdens iedere evaluatie
Zorg dat de benodigde informatie voor de evaluatie wordt opgeslagen en beschikbaar is voor de evaluatiemomenten. Denk aan invoerwaarden, resultaten en gebruikersstatistieken.

Betrek bij het opstellen van dit plan een [diverse groep van belanghebbenden](1-pba-04-betrek-belanghebbenden.md) met o.a. ontwikkelaars, gebruikers en ethisch adviseurs. Zorg dat het evaluatieplan periodiek wordt herzien of deze nog voldoet.

## Risico
Er zullen veranderingen plaatsvinden in de gebruikscontext, de data en in het algoritme zelf (bijv. door bijtrainen). Wanneer niet wordt geëvalueerd tijdens het gebruik is het onbekend of het algoritme nog steeds werkt zoals beoogd en voldoet aan de acceptatiecriteria.

## Bijbehorende vereiste(n)

??? expander "Bekijk alle vereisten"
	<!-- list_vereisten_on_maatregelen_page -->

## Bronnen
- [Toetsingskader Algemene Rekenkamer, 2.14](https://www.rekenkamer.nl/onderwerpen/algoritmes/documenten/publicaties/2024/05/15/het-toetsingskader-aan-de-slag)

## Voorbeelden

!!! example "UWV - Claim beoordelings- en borgingsysteem"
	Om te bepalen of iemand nog kan werken en hoeveel maakt het UWV gebruik van een 'Claim beoordelings- en borgingsysteem' (CBBS). Dit systeem bepaalt aan de hand van onder andere de beoordeling van de verzekeringsarts en de UWV-polisadministratie het arbeidsongeschiktheidspercentage. Deze waarde wordt gebruikt als basis om een geschikte baan te vinden voor het individu dat beoordeeld wordt.
	Het UWV geeft aan CBBS iedere dag te testen om zo te kijken of het goed werkt. Daarnaast wordt er specifiek gecontroleerd na wijzigingen in bijvoorbeeld wet- en regelgeving, bij functieveranderingen of als de zwaarte van een functie veranderd. Dit evaluatiebeleid geeft dus aan wat er gecontroleerd wordt en wanneer.

	Bron: [Claim Beoordelings- en Borgingsysteem]( https://algoritmes.overheid.nl/nl/algoritme/claim-beoordelings-en-borgingsysteem-cbbs-uitvoeringsinstituut-werknemersverzekeringen/21447945)

Heb je een ander voorbeeld of best practice, laat het ons weten via [algoritmes@minbzk.nl](mailto:algoritmes@minbzk.nl)  
