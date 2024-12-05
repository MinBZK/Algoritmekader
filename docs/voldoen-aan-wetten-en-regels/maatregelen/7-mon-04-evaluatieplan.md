---
title: Maak een evaluatieplan voor tijdens het gebruik van het algoritme
id: urn:nl:ak:mtr:mon-05
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
hide:
- navigation
- toc
---

<!-- tags -->

## Maatregel
Maak een evaluatieplan voor wanneer het algoritme in gebruik is. 
Dit plan bevat wanneer, wat en hoe er geëvalueerd dient te worden om te valideren of het model nog in lijn is met de [vastgestelde doelstelling](1-pba-02-formuleren-doelstelling.md). 

## Toelichting
Het evaluatieplan moet aangeven op welke momenten er wordt geëvalueerd, wat er opnieuw wordt geëvalueerd en hoe dat wordt gedaan. 

Voor het opstellen van het evaluatieplan zijn de volgende stappen nodig:

1. [Bepaal of periodieke controle noodzakelijk is](#bepaal-of-periodieke-controle-noodzakelijk-is)
2. [Bepaal bij welke gebeurtenissen het algoritme geëvalueerd moet worden](#bepaal-bij-welke-gebeurtenissen-het-algoritme-geëvalueerd-moet-worden)
3. [Bepaal wat er geëvalueerd moet worden](#bepaal-wat-er-geëvalueerd-moet-worden)

### Bepaal of periodieke controle noodzakelijk is
Stel vast of er periodieke momenten zijn vanuit bijvoorbeeld wetgeving, organisatiebeleid of risicomanagement waarop het wenselijk is dat het algoritme geëvalueerd wordt. 

### Bepaal bij welke gebeurtenissen het algoritme geëvalueerd moet worden
Wat zijn gebeurtenissen die om een nieuwe evaluatie vragen? Denk bijvoorbeeld aan momenten waarop het bijtrainen van het model noodzakelijk is, zoals:

- een wijziging in de data of het algoritm
- aangepaste wetgeving
- andere context of tijd waarin het algoritme gebruikt wordt
- een nieuwe werkwijze
- het optreden van een incident-
- gebruikersfeedback 
- een verandering in de gebruikscontext (bijv. een situatie als COVID-19)  

### Bepaal wat er geëvalueerd moet worden
Bepaal welke onderdelen van het algoritme geëvalueerd dienen te worden bij een periodieke controle of wanneer er een gebeurtenis plaatsvindt waardoor evaluatie wenselijk is.

Wat minimaal periodiek geëvalueerd moet worden is:

- [nauwkeurigheid](5-ver-02-evalueer-nauwkeurigheid.md)
- [betrouwbaarheid](5-ver-06-evalueer-betrouwbaarheid.md)
- [reproduceerbaarheid](4-owk-07-reproduceerbaarheid.md)
- [bias](5-ver-03-biasanalyse.md)
- [veiligheid](#)
- [grondrechten](2-owp-06-afwegen-grondrechten.md)
- [privacy](4-owk-03-privacyrisico.md)

Bij een evaluatie hoeft niet altijd alles weer geëvalueerd te worden. Dit hangt af van het type wijzigingen die er zijn geweest en van de aspecten die continu worden gemonitord. Leg vast wat er wanneer geëvalueerd dient te worden. 

### Documenteer voor en tijdens iedere evaluatie
Zorg dat de benodigde informatie voor de evaluatie wordt opgeslagen en beschikbaar is voor de evaluatiemomenten.Denk aan invoerwaarden, resultaten en gebruikersstatistieken. 

Betrek bij het opstellen van dit plan een [diverse groep van belanghebbenden](1-pba-04-betrek-belanghebbenden.md) met o.a. ontwikkelaars, gebruikers en ethisch adviseurs. Zorg dat het evaluatieplan periodiek wordt herzien of deze nog voldoet.  

## Bijbehorende vereiste(n)

<!-- list_vereisten_on_maatregelen_page -->

## Risico
Er zullen veranderingen plaatsvinden in de gebruikscontext, de data en in het algoritme zelf (bijv. door bijtrainen). Wanneer niet wordt geëvalueerd tijdens de operatie is het onbekend of het algoritme nog steeds werkt zoals beoogd en voldoet aan de acceptatiecriteria. 

## Bronnen


## Voorbeeld

Heb jij een goed voorbeeld? Laat het ons weten!

