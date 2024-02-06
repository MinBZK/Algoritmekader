---
title: Non discriminatie

---

!!! info "Disclaimer"

    Het Algoritmekader is nog volop in ontwikkeling. Op deze plek willen we vooral aan de slag gaan op een open en transparante wijze. Het is dus niet definitief. Dat betekent dat er dingen opstaan die niet af zijn en soms zelfs fout. Mocht er iets niet kloppen, laat het ons weten via [GitHub](https://github.com/MinBZK/Algoritmekader).


## Norm
**Verbod op ongelijke behandeling in gelijke omstandigheden. Discriminatie wegens godsdienst, levensovertuiging, politieke gezindheid, ras, geslacht of op welke grond dan ook, is niet toegestaan.**

## Risico
- Toepassing van het model leidt tot discriminatie op basis van beschermde persoonskenmerken. 

- Andere data dan beschermde persoonskenmerken leiden tot discriminatie in de uitkomsten. 

- Het gebruik van proxy variabelen leidt tot indirecte discriminatatie.

- Bias in het algoritme leidt tot discriminatie

## Bronnen

#### Wet- en regelgeving
- Grondwet Art. 1
- EVRM Art. 1 en 14, jo. 21 HvEU jo. 1 GW
- Algemene wet gelijke behandeling, Protocol 12 2.2, Artikel 1 lid 1 sub c 
- Aritkel 9 AVG

#### Toetsingskaders
EC/AI HLEG April 2019 - hoofdstuk II. 1.1, 1.5

## Toelichting
- Er is sprake van een objectieve rechtvaardiging als sprake is van een legitiem doel en het middel dat wordt gebruikt om het doel te bereiken is passend, noodzakelijk en evenredig. Om te bepalen of een algoritme verboden onderscheid maakt, moet worden bekeken of door het algoritme sprake is van een ongelijke behandeling van een persoon of groep personen in verhouding tot anderen in een vergelijkbare situatie.

Verdacht onderscheid op basis van onder andere:
- Burgerlijke staat
- Handicap/chronische ziekte
- Geslacht (incl. genderidentiteit)
- Godsdienst
- Leeftijd
- Levensovertuiging
- Nationaliteit
- Politieke gezindheid
- Ras/etniciteit
- Seksuele gerichtheid

- Onvoldoende representativiteit in de trainingsdata kan leiden tot ongelijke uitkomsten
Onvoldoende representativiteit in de trainingsdata kan leiden tot ongelijke uitkomsten. Kan bij voorspellende algoritmes ook leiden tot ongewenste feedbackloops. (Gebruik van data van bijvoorbeeld vroegere surveillances en criminaliteitscijfers in nieuwe algoritmes kan leiden tot link aan wijken, personen met een immigratieachtergrond. Indien het geval, is dit niet representatief en neutraal)

- Ogenschijnlijk neutrale data die op het eerste gezicht geen enkele link hebben met afkomst of nationaliteit kunnen leiden tot indirect onderscheid op grond van ras of nationaliteit. Voorbeelden zijn postcode, hoogte van inkomen, hoogte van inkomensafhankelijke toeslagen, kinderopvang door een gastouderbureau met een ‘homogeen’ klantenbestand, een familielid in het buitenland, kenteken en laaggeletterdheid.
(ook black box opties zoal bias mitigation met adversarial networks zijn mogelijk)

- Van belang bij de gemete bias die duidt op discriminatie is het kijken vanuit wetgeving én wenselijkheid.
- Eerst moet duidelijk worden wat eerlijk is voor het proces. Dan kunnen fairness metrics worden opgesteld om eerlijkheid te meten
- Documentatie van de aanpak van bias bevordert de controleerbaarheid.
- De keuze voor een gewenste prestatie per groep is een ethische afweging. 
- Bias in de trainingsdata kan leiden tot bias in het model. Regels in het model kan leiden tot bias. De beslissing van de eindgebruiker kan leiden tot bias. Bias in de inputdata kan doorwerken tot bias in de uitkomst.
- Een model kan gemiddeld goed presteren, maar kan voor bepaalde subgroepen die minder in de testset aanwezig waren verkeerde uitkomsten geven. Een ongebalanceerde dataset kan ervoor zorgen dat het model minder goed presteert voor sommige subgroepen in de data.
-  Tijdens de ontwikkeling van het model kunnen methoden om bias te corrigeren helpen om uiteindelijk aan de prestatiecriteria te voldoen. Testresultaten op de uitkomtstbias tijdens het ontwikkelen zijn ook wenselijk. Merk op dat voor het meten van uitkomst bias alleen de inputdata en uitkomst van het model nodig is. Uitkomstbias kan zonder gelabelde dataset gemeten worden.


## Maatregelen
- Stel vast of bij het doel, design of de uitkomst van het algoritme sprake is van mogelijk verdacht (direct of indirect) onderscheid. Maak bij de uitkomst ook gebruik van controlevariabelen (bijvoorbeeld nationaliteit/ras). Stel vervolgens vast of dit leid tot benadeling. Bepaal of er goede redenen zijn voor het maken van onderscheid zoals een wettelijke uitzondering of een objectieve rechtvaardiging.  Maak de consequentie expliciet en leg deze op het juiste niveau vast. Neem indien nodig tegenmaatregelen. Een ultimate tegenmaatregel kan zijn het (tijdelijk) stopzetten van het algoritme.
- Zorg voor gelijke mate van vertegenwoordiging relevante groepen. Selecteer een afgebakende toepassing om het systeem te testen; zorg dat deze afgebakende toepassing representatief is voor het gehele domein waarop het AI-systeem later wordt ingezet. Maak de consequentie expliciet en leg deze op het juiste niveau vast. Neem indien nodig tegenmaatregelen. Een ultimate tegenmaatregel kan zijn het (tijdelijk) stopzetten van het algoritme. 
- Documenteer de mate van afhankelijkheid van historische data. Weeg af of de geconstateerde afhankelijkheid wenselijk is en of deze op discriminatie duidt. Maak de consequentie expliciet en leg deze op het juiste niveau vast. Neem indien nodig tegenmaatregelen. Een ultimate tegenmaatregel kan zijn het (tijdelijk) stopzetten van het algoritme.
- Identificeer bij een onrechtmatigheid in de uitkomst van het algoritme ogenschijnlijk neutrale data (proxies). Maak de consequentie expliciet en leg deze op het juiste niveau vast. Neem indien nodig tegenmaatregelen. Een ultimate tegenmaatregel kan zijn het (tijdelijk) stopzetten van het algoritme.
- Beoordeel of de geconstateerde bias wenselijk is en of deze op discriminatie duidt. Maak de consequentie expliciet en leg deze op het juiste niveau vast. Neem indien nodig tegenmaatregelen. Een ultimate tegenmaatregel kan zijn het (tijdelijk) stopzetten van het algoritme.
- Documenteer in de funtionele eisen de definitie van acceptabele bias. In de documentatie waarin deze eisen tot meetbare prestatiecriteria zijn uitgewerkt is te vinden welke fairness metrics hierbij horen. Maak de consequenties expliciet.
- Documenteer in de functionele eisen de methoden van voorkomen, detecteren en corrigeren van bias. Maak de consequenties expliciet.
- Documenteer in de functionele eisen de doelstelling voor en definitie van de verschillende groepen en gewenste prestatie van het model voor deze groepen. Maak de consequenties expliciet en bespreek dit in het ethisch gesprek.
- Documenteer de mate van bias in de (trainings)data, dataverzameling en het model. Maak de consequentie expliciet en leg deze op het juiste niveau vast. Neem indien nodig tegenmaatregelen. Een ultimate tegenmaatregel kan zijn het (tijdelijk) stopzetten van het algoritme.
- Beoordeel tijdens de ontwikkeling van het model of een verschil bestaat tussen prestatie van het model voor verschillende subgroepen. Maak de consequentie expliciet en leg deze op het juiste niveau vast. Neem indien nodig tegenmaatregelen. Een ultimate tegenmaatregel kan zijn het (tijdelijk) stopzetten van het algoritme.
- Beoordeel of de uitkomstbias van de productiedata voor de verschillende subgroepen voldoet aan de productiecriteria. Doe dit ook met een testset gedurende het ontwikkelproces. Maak de consequentie expliciet en leg deze op het juiste niveau vast. Neem indien nodig tegenmaatregelen. Een ultimate tegenmaatregel kan zijn het (tijdelijk) stopzetten van het algoritme.


## Rollen
Hieronder beschrijven we welke rollen er betrokken kunnen worden bij de uitvoering van deze norm. 


## Best practices
Het is aan te bevelen om hiervoor de handreiking non-discriminatie by design te gebruiken.

https://open.overheid.nl/documenten/ronl-3f9fa69c-acf4-444d-96e1-5c48df00eb3c/pdf

Indien risicoprofielen worden ingezet en bestaat een risico op discriminatie, dan kan de Beslisboom van het College van de Rechten van de Mens worden gebruikt.
 
https://publicaties.mensenrechten.nl/file/2aecbba3-e0ab-015f-5e51-93293b16ecca.pdf



