---
title: Neem technische interventies in de UX om verkeerd gebruik te voorkomen
id: urn:nl:ak:mtr:imp-10
toelichting: Zorg voor een user interface die robuust gebruik stimuleert en verkeerd gebruik voorkomt. Voorkom verwarring over hoe een applicatie waarin het algoritme verwerkt zit gebruikt moet worden. 
levenscyclus:
- implementatie
- ontwikkelen
onderwerp:
- technische-robuustheid-en-veiligheid
- menselijke-controle
rollen:
- ontwikkelaar
- projectleider
- beleid-en-advies
vereiste:
- aia-10-nauwkeurigheid-robuustheid-cyberbeveiliging
hide:
- navigation
- toc
---

<!-- Let op! onderstaande regel met 'tags' niet weghalen! Deze maakt automatisch de knopjes op basis van de metadata  -->
<!-- tags -->

## Maatregel
Zorg voor een user interface die robuust gebruik stimuleert en verkeerd gebruik voorkomt. Voorkom verwarring over hoe een applicatie waarin het algoritme verwerkt zit gebruikt moet worden. 

## Toelichting
Een algoritme wat volledig correcte uitkomsten geeft maar vervolgens verkeerd wordt gebruikt kan leiden tot problemen. 
Neem bijvoorbeeld een algoritme wat een tekstdocument controleert en voorstelt aan de gebruiker of dit compleet is, of nog onderdelen mist.
Wanneer je dan een ‘goedgekeurd’ knop rood maakt, en een ‘afgekeurd’ knop groen, is er een kans dat de gebruiker uit gewoonte op de verkeerde klikt en daarmee alsnog een onjuiste beslissing neemt. 
Als deze keuze vervolgens als feedback ook weer wordt doorgevoerd in het systeem kan het algoritme ook nog verkeerd gedrag aanleren. 

Werk bijvoorbeeld aan de hand van [User Centered Design principes](https://www.interaction-design.org/literature/topics/user-centered-design) om de gebruiker centraal te stellen. 

## Evaluatie
Breng risico’s in kaart door het goed testen van het systeem in een praktijksetting. Evalueer hier het gedrag van de gebruiker in het grotere systeem.  

Onderdelen hiervan zijn:

### Aandacht van de gebruiker 
Oog en muisbewegingen kunnen inzicht geven waar de aandacht van de gebruiker naartoe gaat. 
Als er bijvoorbeeld een controle gedaan moet worden over de uitkomst van het algoritme voor het maken van een definitieve beslissing, wil je inzicht krijgen of de gebruiker naar de juiste elementen kijkt om die beslissing te maken. 

### Interactiegedrag van de gebruiker 
Clicks, scrollen, of het gebruik van het algoritme op zich (in plaats van zelf tot een beslissing komen) horen bij het gedrag van de gebruiker. 
Dit kan inzicht geven of het systeem correct wordt gebruikt, maar ook waar gebruikers mogelijk juist blijven hangen. 

### Feedback mechanismes 
- Zijn er manieren waarop de gebruiker feedback kan geven over de uitkomsten wanneer deze naar vermoeden niet kloppen?
- Zijn er manieren waarop de gebruiker om hulp kan vragen en wat voor vragen zijn dit?
- Op wat voor manier worden errors in het systeem doorgegeven aan de gebruiker? 

### Transparantie en uitlegbaarheid
Een correct gebruik begint bij een [duidelijke instructie en inzicht hoe een algoritme werkt](6-imp-01-werkinstructies-gebruikers.md) en hoe daar mee om te gaan. 
Evalueer of de gebruikte methodes hiervoor hun doel bereiken.

### Toegankelijkheid
Het is belangrijk om te controleren of het algoritme toegankelijk in gebruik is voor iedereen, inclusief personen met een beperking. 

### Beveiliging en controle
Het onjuist gebruik waarvoor specifiek gedrag opgemerkt kan worden bij bovenstaande evaluaties moet worden gemonitord.
Vervolgens kunnen er beveiligingen (denk aan een melding ‘weet je het zeker?’) ingebouwd worden als zulk gedrag wordt geregistreerd. 
Kijk vervolgens of deze interventies effectief zijn om fouten te voorkomen. 


## Bijbehorende vereiste(n) { data-search-exclude }
??? expander "Bekijk alle vereisten"
    <!-- list_vereisten_on_maatregelen_page -->

## Risico
Een user interface die verkeerd gebruik door gebruikers mogelijk maakt, kan ervoor zorgen dat gebruikers verkeerde invoerwaarden geven, zich niet aan de beoogde werkwijze houden of per ongeluk toegang geven aan kwaadwillenden.

## Bronnen
- [Valid Useful User Experience Measurement ](https://www.academia.edu/28475349/Valid_Useful_User_Experience_Measurement)
- [7 fundamental user experience (UX) design principles all designers should know (2024) - UX Design Institute](https://www.uxdesigninstitute.com/blog/ux-design-principles/)
- [Web Content Accessibility Guidelines (WCAG) 2.2](https://www.w3.org/TR/WCAG22/)
- [User Centered Design (UCD)](https://www.interaction-design.org/literature/topics/user-centered-design)


## Voorbeeld
<!-- Voeg hier een voorbeeld toe, door er bijvoorbeeld naar te verwijzen -->
