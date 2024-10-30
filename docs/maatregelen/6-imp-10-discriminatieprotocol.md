---
title: Maak een plan voor als er (een vermoeden van) discriminatie door een algoritmisch systeem is geconstateerd
id: urn:nl:ak:mtr:imp-10
toelichting: Maak een plan voor de situatie dat er een vermoeden bestaat van discriminatie of als er geconstateerd wordt dat er sprake is van bevooroordeeldheid of discriminatie van een algoritmisch systeem.
vereiste: 
- grw-02-non-discriminatie
levenscyclus: 
- implementatie
onderwerp: 
- bias-en-non-discriminatie
rollen:
- projectleider
hide:
- navigation
- toc

---

<!-- tags -->

## Maatregel
Maak een plan voor de situatie dat er een vermoeden bestaat van discriminatie of als er geconstateerd wordt dat er sprake is van bevooroordeeldheid of discriminatie van een algoritmisch systeem.

## Toelichting
Algoritmes en AI-systemen kunnen leiden tot discriminerende effecten. Dit kan voorkomen worden door hier al in een vroeg stadium van de ontwikkeling rekening mee te houden. 
Analyseer bijvoorbeeld de data op [datakwaliteit en bias in de data](3-dat-01-datakwaliteit.md) en [toets regelmatig je algoritmisch systeem op bias](5-ver-02-biasanalyse.md). 

Mocht het onverhoopt toch mis gaan en er signalen zijn dat de inzet van het algoritme leidt tot discriminerende effecten, dan zijn er verschillende stappen die je moet zetten. 
Daarvoor heeft het Ministerie van Binnenlandse Zaken een [discriminatieprotocol](https://minbzk.github.io/discriminatieprotocol) opgesteld.

Dat protocol bevat de volgende stappen:

1. Stap 1: Vermoeden van onrechtmatigheid

  Een vermoeden van onrechtmatigheid of discriminatie kan vanuit verschillende partijen gemeld worden. 
  Dat kan intern (CIO Office, betrokken medewerkers, of een andere interne auditer) of extern (meldpunt, toezichthouder, media) plaatsvinden. 
  
  - Zorg dat signalen tijdig bij de goede medewerkers terecht komen. 
  - Indien er sprake is van zo'n vermoeden, zorg je dat de uitvoerend directeur, de interne toezichthouder of CIO/CDO geïnformeerd worden hierover. 
  - Maak met de verantwoordelijken een afweging of het betreffende systeem in werking kan blijven of dat [het noodplan voor het stopzetten van het algoritme](4-owk-02-stopzetten-gebruik.md) (tijdelijk) in gang moet worden gezet. 
   
2. Stap 2: Inzicht en overzicht

  Het is van belang om inzicht en overzicht te krijgen over de oorzaak en de gevolgen van eventuele discriminerende effecten van het algoritme. 
  Onderzoek moet worden verricht

  - Bepaal wie er verantwoordelijk is voor het uitvoeren van dit onderzoek.
  - Bepaal of je een onafhankelijk onderzoek wilt doen naar het algoritme. Bijvoorbeeld het onafhankelijk laten toetsen op bias in het algoritmische systeem.
  - Breng in kaart wat de omvang van het probleem is. Hoe lang doet het probleem zich al voort, en hoeveel mensen betreft het?
  - Ga snel met (vertegenwoordigers van) gedupeerden in gesprek over de gevolgen en de mogelijke schade
  - Trek een conclusie of er sprake is van discriminatie, of een sterk vermoeden van discriminatie. 
   
3. Stap 3: Beperken schade

   Bepaal welke mitigerende maatregelen er genomen moeten worden. Als er in het onderzoek is vastgesteld dat er sprake is van discriminatie, dan moet het betreffende systeem worden stopgezet. Hierbij kan je denken aan:

   - Het in werking stellen van het [het noodplan voor het stopzetten van het algoritme](4-owk-02-stopzetten-gebruik.md), indien dat in stap 1 nog niet gebeurd is. 
   - Aanpassingen in het algoritme, de werkinstructies of de bijbehorende processen.
   - Indien het algoritme essentieel is in de uitvoer kan er sprake zijn van een een proportionaliteitsvraagstuk. In dat geval moet er worden bezien wat de alternatieven zijn, en of er delen van het systeem kunnen worden uitgeschakeld.
  
4. Stap 4: Melden en informeren

   De conclusies van de eerdere stappen dienen indien nodig te worden gemeld bij de betreffende instanties. De eventuele gedupeerde burgers dienen te worden geinformeerd over de gevolgen.

   - Indien er sprake is van een hoog-risico-AI-systeem moet je ernstige incidenten melden bij de markttoezichtautoriteiten. Zie [artikel 73 van de AI-verordening](https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=OJ:L_202401689#d1e7117-1-1) en [artikel 3 (49.c) van de AI-verordening](https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=OJ:L_202401689#d1e2093-1-1).
   - Voor alle algoritmes geldt: Informeer afhankelijk van hoeveel mensen geraakt en gedupeerd zijn de grootte van de impact de interne toezichthouder, de externe toezichthouder en de Tweede Kamer. 
   - Informeer de betrokken burgers over de sitatie. Maak indien nodig excuses en geef de mensen die (mogelijk geraakt zijn uitleg zodat zij:
     
       - begrijpen wat er is gebeurd
       - weten wat de waarschijnlijke gevolgen zijn
       - welke mitigerende maatregelen zijn genomen
       - waar mensen terecht kunnen met vragen
       - op de hoogte zijn van het proces rondom de afhandeling van de schade.
        
6. Stap 5: Registratie en afhandeling

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
