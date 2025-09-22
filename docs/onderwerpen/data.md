---
title: Verantwoord datagebruik
summary:
hide:
- path
---
# Verantwoord datagebruik

Overheden moeten verantwoord omgaan met de data die hun algoritmes gebruiken. De data moet voldoen aan regels voor bijvoorbeeld privacy. De kwaliteit van de data moet goed zijn. En overheden moeten deze gegevens goed beheren. Zo wordt het algoritme:

* Betrouwbaar (zijn de resultaten die het algoritme geeft onder dezelfde omstandigheden hetzelfde?)
* Valide (doet het algoritme wat het beoogt te doen?)

## Wat is verantwoord datagebruik?
Verantwoord datagebruik betekent:

* Rechtmatig gebruik van gegevens
* Goede datakwaliteit
* Goed databeheer

### Rechtmatig gebruik van data
Net als organisaties mogen algoritmes niet zomaar gegevens verzamelen en gebruiken. Dit moet rechtmatig gebeuren: volgens de wettelijke regels. Zo moet je rekening houden met auteursrechten. Ook vóórdat het algoritme in gebruik is, moet je rechtmatig omgaan met data. Dus tijdens het trainen, valideren en testen.

Andere belangrijke regels gaan over privacy. Zo mag je algoritme alleen de minimale persoonsgegevens gebruiken die nodig zijn om het doel te bereiken. Technieken om dit te doen zijn:

* Anonimiseren: data zoveel mogelijk anoniem maken
* [Pseudonimiseren](https://www.autoriteitpersoonsgegevens.nl/themas/beveiliging/beveiliging-van-persoonsgegevens/gegevens-pseudonimiseren): data moeilijker herleidbaar maken (meestal in geval van persoonsgegevens)
* Aggregeren: data zoveel mogelijk combineren of samenvoegen tot 1 waarde, zoals een totaal of gemiddelde

### Goede datakwaliteit
Goede datakwaliteit is in het geval van het trainen of ontwikkelen van een algoritme belangrijk zodat het algoritme een zo hoog mogelijke validiteit krijgt. Bij het gebruik van een zelflerend algoritme kan slechte datakwaliteit de validiteit van het algoritme verlagen. Met rekenregels met een hoge validiteit kan slechte datakwaliteit juist aangetoond worden en heeft de datakwaliteit geen invloed op de algoritme zelf.

Je bepaalt en controleert zelf de [kwaliteit van je dataset](../voldoen-aan-wetten-en-regels/maatregelen/3-dat-01-datakwaliteit.md). Check bijvoorbeeld of alle gegevens juist, compleet en actueel zijn. En herken [bias in je data](bias-en-non-discriminatie.md).

### Goed databeheer: datagovernance en datamanagement
Goed databeheer betekent dat je organisatie duidelijke afspraken maakt over het:

* opslaan en verwerken van data
* gebruik van data: welke data mag je waarvoor gebruiken?
* beveiligen van data
* bewaken van de datakwaliteit, zoals het actueel houden van de gegevens
* eigenaarschap van data, bijvoorbeeld de partij die het algoritme ontwikkelt
* documenteren en labelen van data (metadata)

Leg de processen en afspraken hierover vast in de [datagovernance](https://realisatieibds.nl/page/view/f51c90d3-c33d-4826-83d2-7381c0b14aba/8-data-governance) van je organisatie. In een datamanagementstrategie beschrijf je hoe je organisatie data verzamelt, ordent en gebruikt. Zo kan je organisatie optimaal gebruikmaken van data.

Hoe goed je organisatie data beheert, check je met [datavolwassenheidsmodellen](https://realisatieibds.nl/page/view/ad94d97c-4d48-443c-aedd-235b2d0ca8b6/wegwijzer-volwassenheidsmodellen) uit de Toolbox verantwoord datagebruik van de Interbestuurlijke Datastrategie (IBDS). Of gebruik de [beslishulp datavolwassenheid](https://realisatieibds.nl/groups/view/c23ab74c-adb4-424e-917d-773a37968efe/kenniscentrum-van-de-ibds/wiki/view/2447d2a8-6c48-468d-9739-00772688853f/beslishulp-datavolwassenheid).

## Belang van verantwoord datagebruik
Algoritmes kunnen veel schade veroorzaken in de maatschappij als ze de verkeerde gegevens gebruiken.

Met verantwoord datagebruik verklein je de kans op:

* verkeerde beslissingen doordat je algoritme resultaten baseert op data van slechte kwaliteit
* discriminerende effecten van algoritmes doordat je data bias bevat
* lekken van privacygevoelige informatie, zoals persoonsgegevens
* gebruik van data die niet rechtenvrij zijn, zoals teksten met auteursrechten
* dat resultaten niet te reproduceren zijn, doordat de data niet goed is opgeslagen

Voor een zo hoog mogelijke kwaliteit van een algoritme gaan hoge datakwaliteit en het kwalitatief juist programmeren van het algoritme hand in hand.

### Bescherming van cruciale infrastructuurdata
Niet alleen persoonsgegevens, maar ook gegevens over de Nederlandse infrastructuur vragen om verantwoord datagebruik. Dit omvat zowel fysieke infrastructuur, zoals wegen, bruggen, tunnels en energievoorzieningen, als digitale infrastructuur, zoals datakabels en datacentra.

Het ongecontroleerd delen of gebruiken van deze gegevens, bijvoorbeeld voor het trainen van buitenlandse AI-toepassingen, kan risico’s opleveren voor de nationale veiligheid en de continuïteit van vitale systemen. Overheden en organisaties moeten deze data goed [beveiligen](technische-robuustheid-en-veiligheid.md) en duidelijke [kaders opstellen](../voldoen-aan-wetten-en-regels/maatregelen/0-org-02-beleid-opstellen-inzet-algoritmes.md) om verantwoord gebruik te waarborgen.

## Vereisten { data-search-exclude }

<!-- list_vereisten onderwerp/data no-search no-onderwerp no-rol no-levenscyclus -->

## Aanbevolen maatregelen { data-search-exclude }

<!-- list_maatregelen onderwerp/data no-search no-onderwerp no-rol no-levenscyclus -->

## Hulpmiddelen

* [Toolbox verantwoord datagebruik](https://realisatieibds.nl/page/view/628d59dd-0755-4c20-8217-d3f26d9d8a5c/toolbox-voor-verantwoord-datagebruik), Interbestuurlijke Datastrategie (IBDS)
* [Richtlijnen voor ‘FAIR’ data](https://www.gofair.foundation/), GO FAIR Foundation
