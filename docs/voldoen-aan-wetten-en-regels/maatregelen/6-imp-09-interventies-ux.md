---
title: Neem technische interventies op in de gebruikersinterface om verkeerd gebruik te voorkomen
id: urn:nl:ak:mtr:imp-09
toelichting: Zorg voor een gebruikersinterface die robuust gebruik stimuleert en verkeerd gebruik voorkomt. Voorkom verwarring over hoe een applicatie waarin het algoritme verwerkt zit gebruikt moet worden.
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
Neem technische interventies op in de gebruikersinterface om verkeerd gebruik te voorkomen.

## Toelichting
Een algoritme wat volledig correcte uitkomsten geeft maar vervolgens verkeerd wordt gebruikt kan leiden tot problemen.
Neem bijvoorbeeld een algoritme wat een tekstdocument controleert en voorstelt aan de gebruiker of het compleet is, of nog onderdelen mist.
Wanneer je dan een ‘goedgekeurd’ knop rood maakt, en een ‘afgekeurd’ knop groen, is er een kans dat de gebruiker uit gewoonte op de verkeerde klikt en daarmee alsnog een onjuiste beslissing neemt.
Als deze keuze vervolgens als feedback ook weer wordt doorgevoerd in het systeem kan het algoritme ook nog verkeerd gedrag aanleren.

Werk bijvoorbeeld aan de hand van [User Centered Design principes](https://www.interaction-design.org/literature/topics/user-centered-design) om de gebruiker centraal te stellen.

### Evaluatie
Breng risico’s in kaart door het goed testen van het systeem in een praktijksetting. Evalueer hier het gedrag van de gebruiker in het grotere systeem.

Onderdelen hiervan zijn:

#### Aandacht van de gebruiker
Oog en muisbewegingen kunnen inzicht geven waar de aandacht van de gebruiker naartoe gaat.
Als er bijvoorbeeld een controle gedaan moet worden over de uitkomst van het algoritme voor het maken van een definitieve beslissing wil je inzicht krijgen of de gebruiker naar de juiste elementen kijkt om die beslissing te maken.

#### Interactiegedrag van de gebruiker
Clicks, scrollen, of het gebruik van het algoritme op zich (in plaats van zelf tot een beslissing komen) horen bij het gedrag van de gebruiker.
Dit kan inzicht geven of het systeem correct wordt gebruikt, maar ook waar gebruikers mogelijk juist blijven hangen.

#### Feedback mechanismes
- Zijn er manieren waarop de gebruiker feedback kan geven over de uitkomsten wanneer deze naar vermoeden niet kloppen?
- Zijn er manieren waarop de gebruiker om hulp kan vragen en wat voor vragen zijn dit?
- Op wat voor manier worden errors in het systeem doorgegeven aan de gebruiker?

#### Transparantie en uitlegbaarheid
Een correct gebruik begint bij een [duidelijke instructie en inzicht hoe een algoritme werkt](6-imp-01-werkinstructies-gebruikers.md) en hoe daar mee om te gaan.
Evalueer of de gebruikte methodes hiervoor hun doel bereiken.

#### Toegankelijkheid
Het is belangrijk om te controleren of het algoritme toegankelijk in gebruik is voor iedereen, inclusief personen met een beperking.

#### Beveiliging en controle
Het onjuist gebruik waarvoor specifiek gedrag opgemerkt kan worden bij bovenstaande evaluaties moet worden gemonitored.
Vervolgens kunnen er beveiligingen (denk aan een melding ‘weet je het zeker?’) ingebouwd worden als zulk gedrag wordt geregistreerd.
Kijk vervolgens of deze interventies effectief zijn om fouten te voorkomen.

## Risico
Een gebruikersinterface die verkeerd gebruik door gebruikers mogelijk maakt, kan ervoor zorgen dat gebruikers verkeerde invoerwaarden geven, zich niet aan de beoogde werkwijze houden of per ongeluk toegang geven aan kwaadwillenden.

## Bijbehorende vereiste(n) { data-search-exclude }
??? expander "Bekijk alle vereisten"
    <!-- list_vereisten_on_maatregelen_page -->

## Bronnen
- [Valid Useful User Experience Measurement ](https://www.academia.edu/28475349/Valid_Useful_User_Experience_Measurement)
- [7 fundamental user experience (UX) design principles all designers should know (2024) - UX Design Institute](https://www.uxdesigninstitute.com/blog/ux-design-principles/)
- [Web Content Accessibility Guidelines (WCAG) 2.2](https://www.w3.org/TR/WCAG22/)
- [User Centered Design (UCD)](https://www.interaction-design.org/literature/topics/user-centered-design)

## Voorbeelden
<!-- Voeg hier een voorbeeld toe, door er bijvoorbeeld naar te verwijzen -->

!!! example "Verschillende overheden – Octobox Anonimiseren"

    Verschillende overheden maken gebruik van Octobox Anonimiseren, een anonimiseringstool die (persoons)gegevens aanduidt voor maskering. Octobox zoekt deze (persoons)gegevens binnen het document, ongeacht de inhoud. Na deze aanduiding moet er door een vakinhoudelijk persoon gecontroleerd worden of deze gegevens inderdaad gemaskeerd moeten worden of niet. Deze kunnen goed- en afgekeurd worden en ook gewijzigd worden voor goedkeuring. Daarnaast is er de optie om handmatig informatie te maskeren om zo andere (of gemiste) informatie te maskeren. De tool is op deze manier op een intuïtieve manier te gebruiken door medewerkers.

    Bron: [Octobox Anonimiseren](https://algoritmes.overheid.nl/nl/algoritme/octobox-anonimiseren-ministerie-van-binnenlandse-zaken-en-koninkrijksrelaties/28793885)



!!! example "Gemeente Veere – AI-analyse tool "

    De gemeente Veere heeft een analyse tool voor het versnellen en vergemakkelijken van het verwerken van input bij participatieprocessen. Hierbij worden bijvoorbeeld samenvattingen en categorieën gemaakt om zo de gebruiker te helpen bij het analyseren.
    De gebruikersinterface zorgt ervoor dat de originele bron data ook standaard mee getoond worden om zo te verduidelijken waar de informatie vandaan komt. Daarnaast worden ook altijd referenties naar bron meegenomen in de samenvattingen. De interface maakt de gebruiker ook bewust van mogelijke fouten of hallucinaties die gemaakt kunnen worden door waarschuwingen te tonen.

    Bron: [AI-analyse tool (AI Sensemaking) - Gemeente Veere]( https://algoritmes.overheid.nl/nl/algoritme/aianalyse-tool-ai-sensemaking-gemeente-veere/62557610)



!!! example "Gemeente Ede  – WOZ-Taxatiemodellen "

    De gemeente Ede heeft een algoritme in gebruik als ondersteuning bij het bepalen (en controleren) van de WOZ-waarde van woningen. Dit wordt gedaan aan de hand van Machine Learning modellen die op basis van onder andere woning- en locatiekenmerken gecombineerd met markt- en verkoop condities de WOZ-waarde kan bepalen. Hierbij wordt bepaald welke kenmerken het meeste gewicht hebben voor deze bepaling.

    Als de taxateurs de WOZ-waarde gaan bepalen, zien zij ook de algoritmisch bepaalde waarde. Hierbij is aan de hand van kleuren de zekerheid van de waarde aangegeven. Groen geeft een hoge zekerheid aan, oranje een redelijke zekerheid en rood een matige zekerheid. Op deze manier wordt voor taxateurs direct duidelijk en intuïtief wat de waarden inhouden.

    Bron: [WOZ-Taxatiemodellen]( https://algoritmes.overheid.nl/nl/algoritme/woztaxatiemodellen-gemeente-ede/39323486)


Heb je een ander voorbeeld of best practice, laat het ons weten via [algoritmes@minbzk.nl](mailto:algoritmes@minbzk.nl)  
