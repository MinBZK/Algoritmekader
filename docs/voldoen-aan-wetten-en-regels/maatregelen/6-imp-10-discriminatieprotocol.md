---
title: Stel een protocol vast voor de situatie dat er (een vermoeden van) discriminatie door een algoritme is geconstateerd en pas dit wanneer nodig toe.
id: urn:nl:ak:mtr:imp-10
toelichting: Stel een protocol op voor de situatie dat er een vermoeden bestaat van discriminatie of als er geconstateerd wordt dat er sprake is van bevooroordeeldheid of discriminatie door een algoritme en pas dit protocol toe. 
vereiste: 
- grw-02-non-discriminatie
levenscyclus: 
- organisatieverantwoordelijkheden
- implementatie
onderwerp: 
- bias-en-non-discriminatie
rollen:
- projectleider
- beleid-en-advies
hide:
- navigation
- toc

---

<!-- tags -->

## Maatregel
Stel een protocol vast voor de situatie dat er (een vermoeden van) discriminatie door een algoritme is geconstateerd en pas dit wanneer nodig toe.

## Toelichting
De inzet van algoritme kan onbedoeld leiden tot discriminerende effecten. 
Het is van belang om als organisatie een protocol te hebben vastgesteld waarin is uitgewerkt hoe wordt omgegaan met situaties waarin (een vermoeden van) discriminatie door een algoritme is geconstateerd.
In een dergelijk protocol kunnen de handelingen worden beschreven die moeten worden uitgevoerd om deze situatie te gaan herstellen.
Het vaststellen van een dergelijk protocol geeft ontwikkelaar en gebruikers (vooraf) duidelijkheid wat van hen wordt verwacht en wat zij kunnen doen om discriminatie door algoritmes te voorkomen.  
Een voorbeeld hiervan is het analyseren van de data op [datakwaliteit en bias in de data](3-dat-01-datakwaliteit.md) en [toets regelmatig je algoritmisch systeem op bias](5-ver-03-biasanalyse.md). 

Het Ministerie van Binnenlandse Zaken en Koninkrijksrelaties heeft een [discriminatieprotocol](https://minbzk.github.io/discriminatieprotocol) opgesteld wat organisaties handvatten biedt.

Een discriminatieprotocol kan de volgende stappen bevatten:

### Stap 1: Vermoeden van onrechtmatigheid

Een vermoeden van bevooroordeeldheid of discriminatie kan vanuit verschillende partijen gemeld worden. 
Signalen hiervoor kunnen worden ontvangen vanuit de interne organisatie, bijvoorbeeld door de betrokken ontwikkelaars, gebruikers of beheerders, of door externe partijen, zoals belanghebbenden, toezichthouder, journalisten. 
  
  - Zorg dat signalen tijdig bij de goede medewerkers terecht komen. 
  - Indien er sprake is van zo'n vermoeden, zorg je dat bijvoorbeeld de uitvoerend directeur, de interne toezichthouder en/of de CIO en CDO hierover worden geïnformeerd. 
  - Maak met de verantwoordelijken een afweging of het betreffende systeem in werking kan blijven of dat bijvoorbeeld [het noodplan voor het stopzetten van het algoritme](4-owk-02-stopzetten-gebruik.md) (tijdelijk) in gang moet worden gezet. 

### Stap 2: Inzicht en overzicht

Het is van belang om inzicht en overzicht te krijgen over de oorzaak en de gevolgen van eventuele discriminerende effecten van het algoritme. 
Daarvoor kan worden gedacht aan het uitvoeren van een bias analyse.

  - Bepaal wie er verantwoordelijk is voor het uitvoeren van het onderzoek.
  - Bepaal of je een onafhankelijk onderzoek wilt doen naar het algoritme.
  - Breng in kaart wat de omvang van het probleem is. Hoe lang doet het probleem zich al voort, en hoeveel mensen betreft het?
  - Ga snel met (vertegenwoordigers van) gedupeerden in gesprek over de gevolgen en de mogelijke schade
  - Trek een conclusie of er sprake is van discriminatie, of een sterk vermoeden van discriminatie. 

### Stap 3: Beperken schade

Bepaal welke mitigerende maatregelen er genomen moeten worden. Als er in het onderzoek is vastgesteld dat er sprake is van discriminatie, dan moet het betreffende systeem worden stopgezet. Hierbij kan je denken aan:

   - Het in werking stellen van het [het noodplan voor het stopzetten van het algoritme](4-owk-02-stopzetten-gebruik.md), indien dat in stap 1 nog niet gebeurd is. 
   - Aanpassingen in het algoritme, de werkinstructies of de bijbehorende processen.
   - Indien het algoritme essentieel is in de uitvoer kan er sprake zijn van een een proportionaliteitsvraagstuk. In dat geval moet er worden bezien wat de alternatieven zijn, en of er delen van het systeem kunnen worden uitgeschakeld.
  
### Stap 4: Melden en informeren

De conclusies van de eerdere stappen moeten, indien nodig, worden gemeld bij de betreffende instanties. De eventuele gedupeerde burgers dienen te worden geïnformeerd over de gevolgen.

   - Als er sprake is van een hoog-risico-AI-systeem moeten ernstige incidenten worden gemeld bij de markttoezichtautoriteiten. Zie [artikel 73 van de AI-verordening](https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=OJ:L_202401689#d1e7117-1-1) en [artikel 3 (49.c) van de AI-verordening](https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=OJ:L_202401689#d1e2093-1-1).
   - Voor alle algoritmes geldt: Informeer de interne toezichthouder, de externe toezichthouder en de politiek, afhankelijk van hoeveel mensen geraakt en gedupeerd zijn en de impact. 
   - Informeer de betrokken burgers over de sitatie. Maak indien nodig excuses en geef de mensen die (mogelijk) geraakt zijn uitleg zodat zij:
     
       - begrijpen wat er is gebeurd
       - weten wat de waarschijnlijke gevolgen zijn
       - welke mitigerende maatregelen zijn genomen
       - waar mensen terecht kunnen met vragen
       - op de hoogte zijn van het proces rondom de afhandeling van de schade.
        
### Stap 5: Registratie en afhandeling

  - Registreer het algoritme in het [algoritmeregister](https://algoritmes.overheid.nl/nl), indien dat nog niet gebeurd is.
  - Zorg voor goede klachtenafhandeling en herstelprocedures. 

## Bijbehorende vereiste(n)
<!-- Hier volgt een lijst met vereisten op basis van de in de metadata ingevulde vereiste -->

<!-- Let op! onderstaande regel met 'list_vereisten_on_maatregelen_page' niet weghalen! Deze maakt automatisch een lijst van bijbehorende verseisten op basis van de metadata  -->
<!-- list_vereisten_on_maatregelen_page -->

## Bronnen 
<!-- Vul hier de relevante bronnen in voor deze maatregel -->
- [Discriminatieprotcol van het Ministerie van Binnenlandse Zaken en Koninkrijksrelaties](https://minbzk.github.io/discriminatieprotocol/)

## Voorbeeld
<!-- Voeg hier een voorbeeld toe, door er bijvoorbeeld naar te verwijzen -->

Heb je een voorbeeld of best practice, laat het ons weten via [algoritmes@minbzk.nl](mailto:algoritmes@minbzk.nl)
