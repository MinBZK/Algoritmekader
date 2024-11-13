---
title: Soorten algoritmes
summary: Uitleg van de verschillende soorten algoritmes waar je mee kunt werken. En het risico en de impact hiervan.
---

# Soorten algoritmes
Om te voldoen aan de vereisten, moet je weten met welk soort algoritme je werkt. Gaat het om simpele rekenregels of een AI-systeem? En wat voor impact hebben je algoritmes?

## Wanneer is het een algoritme?
Met een algoritme bedoelen we een set regels en instructies die een computer uitvoert, met 1 of meer van deze doelen:

* problemen oplossen
* vragen beantwoorden
* taken of processen uitvoeren
* besluiten nemen

## Rekenregels
Rekenregels (ook wel: regelgebaseerde algoritmes) zijn de meest eenvoudige algoritmes. Dit zijn door mensen bedachte regels die het computersysteem precies moet opvolgen: als x gebeurt, dan doe je y.

Rekenregels:

* zijn expliciet geprogrammeerd en bedacht door mensen
* bestaan uit vaste stappen om een taak uit te voeren

Rekenregels zijn niet kunstmatig intelligent (AI). Rekenregels kunnen wel onderdeel zijn van een AI-systeem. 

### Voorbeelden

* Eenvoudige chatbots die burgers advies geven op basis van door mensen bedachte beslisbomen.
* [Ondersteuning berekening uitkering](https://algoritmes.overheid.nl/nl/algoritme/ondersteuning-berekening-uitkering-gemeente-den-haag/86652588) dat adviseert over uitkeringen, op basis van door mensen bedachte beslisbomen. 
* [Prestatiemonitor](https://algoritmes.overheid.nl/nl/algoritme/prestatiemonitor-inspectie-van-het-onderwijs-ocw/79978718) dat risicoscores berekent van scholen, op basis van door mensen bedachte regels.

## Zelflerende algoritmes
Zelflerende algoritmes zijn algoritmes die zichzelf trainen. Dit proces heet machinelearning. Hierdoor worden computers intelligent zonder dat mensen dit precies zo programmeren. Dit is een veel voorkomende vorm van AI. 

Zelflerende technieken zijn in elk geval:

* **Supervised learning (gecontroleerd leren)**: Je algoritme leert van gegevens die je labelt met informatie. Je biedt bijvoorbeeld foto’s aan met de labels: dit is wel een kat, dit is geen kat. Voorbeeld: [Virtuele assistent Gem](https://algoritmes.overheid.nl/nl/algoritme/virtuele-gemeente-assistent-gem-gemeente-tilburg/21511426).
* **Unsupervised learning (ongecontroleerd leren)**: Je laat het algoritme zelf patronen en structuren ontdekken in ongestructureerde gegevens zonder labels. Je biedt bijvoorbeeld foto’s aan van dieren die het algoritme zelf moet groeperen. Voorbeeld: [Polis](https://algoritmes.overheid.nl/nl/algoritme/polis-provincie-zuidholland/14379550) voor participatieplatformen.
* **Reinforcement learning (bekrachtiginsleren)**: Het algoritme leert door straf en beloning. Het doel is zo hoog mogelijk scoren in zo min mogelijk tijd. Je geeft bijvoorbeeld punten als het algoritme foto’s sorteert die op katten lijken. Voorbeeld: [I-VRI](https://algoritmes.overheid.nl/nl/algoritme/intelligente-verkeersregel-installatie-ivri-bij-verkeerslichten-provincie-zuidholland/34151769) voor verkeerslichten.
* **Deep learning**: Supervised, unsupervised of reinforcement learning gecombineerd met diepe neurale netwerken. Dit zijn kunstmatige neurale netwerken met veel verschillende lagen. Hierdoor kun je nog ingewikkeldere problemen oplossen. Voorbeeld: [Geautomatiseerde gezichtsvergelijking bij het RNI-inschrijfproces](https://algoritmes.overheid.nl/nl/algoritme/geautomatiseerde-gezichtsvergelijking-bij-het-rniinschrijfproces-rijksdienst-voor-identiteitsgegevens/18814864).

## AI-systeem
Met een AI-systeem bedoelen we een systeem dat kunstmatig intelligent is volgens de [Europese AI-verordening](https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=OJ:L_202401689). Dit zijn in elk geval systemen die gebruik maken van:

* supervised learning
* unsupervised learning
* reinforcement learning
* deep learning

Symbolische AI valt mogelijk onder een AI-systeem. Dit is nog onduidelijk in de EU-verordening.

!!! tip "Tip"

    Twijfel je of je algoritme onderdeel is van een AI-systeem? Raadpleeg een expert. Of beschouw het systeem voor de zekerheid als een AI-systeem.

## Risicogroepen AI-systemen
AI-systemen vallen mogelijk onder een risicogroep uit de EU-verordening. Het hangt ervan af waarvoor je dit AI-systeem gebruikt.

### Risico op misleiding
Dit zijn AI-systemen die je gebruikt voor:

* **interactie met mensen**, zoals AI-chatbots
* **genereren van content**, zoals afbeeldingen laten maken door Dall-E 

Over deze systemen moet je [transparant](../onderwerpen/transparantie.md) zijn. Gebruikers mogen niet denken dat zij te maken hebben met echte mensen of originele content.

Zie [AI-verordening, hoofdstuk IV](https://eur-lex.europa.eu/legal-content/NL/TXT/?uri=CELEX:32024R1689#d1e5418-1-1).

### Hoog-risico-AI-systemen
Dit zijn AI-systemen die je gebruikt als veiligheidsonderdeel van bepaalde producten of AI-systemen die je gebruikt voor bepaalde diensten of processen.

#### Veiligheidsonderdeel
Je AI-systeem speelt een belangrijke rol in de veiligheid van een product. En dit product valt onder de harmonisatiewetgeving van de EU, zoals:

* machines
* speelgoed
* liften
* uitrusting en beveiligingssystemen voor plaatsen met ontploffingsgevaar
* radioapparatuur
* drukapparatuur
* pleziervaartuigen
* kabelbaaninstallaties
* gastoestellen
* medische hulpmiddelen
* hulpmiddelen voor het testen van menselijk materiaal (in-vitrodiagnostiek)
* auto-industrie
* luchtvaartindustrie

Zie [AI-verordening, bijlage I](https://eur-lex.europa.eu/legal-content/NL/TXT/?uri=CELEX:32024R1689#d1e38-124-1).

#### Diensten of processen
Je gebruikt het AI-systeem voor:

* **Biometrie**, zoals het herkennen of indelen van mensen op basis van hun vingerafdruk, gezicht of andere lichamelijke kenmerken.
* **Kritieke infrastructuur**, zoals het veilig houden van digitale netwerken en verkeersnetwerken en het leveren van elektriciteit, water, gas en warmte.
* **Onderwijs en beroepsopleiding**, zoals het bepalen welke studenten je toelaat en het beoordelen van hun prestaties of gedrag.
* **Werkgelegenheid, personeelsbeheer en toegang tot zelfstandige arbeid**, zoals het werven en selecteren van mensen, besluiten nemen die invloed hebben op hun contract en het beoordelen van hun prestaties of gedrag.  
* **Essentiële particuliere en openbare diensten**, zoals bepalen wie recht heeft op uitkeringen, gezondheidszorg en andere belangrijke diensten en wie noodhulp krijgt van politie, brandweer en ambulance, het beoordelen van iemands financiële situatie, fraude opsporen en het bepalen van risico’s en prijzen voor levensverzekeringen en ziektekostenverzekeringen.
* **Rechtshandhaving**, zoals iemands kans inschatten om slachtoffer of dader te worden, het gebruik van een leugendetector, het beoordelen van bewijsmateriaal en het opsporen van verdachten.
* **Migratie, asiel en grenzen**, zoals inschatten wat de kans is dat iemand gevaarlijk of illegaal is, het behandelen van aanvragen en klachten en het herkennen of opsporen van mensen.
* **Rechtsbedeling en democratische processen**, zoals het uitleggen van de wet aan een rechtbank, gerechtshof of de Hoge Raad, advies geven bij een geschil of het beïnvloeden van de uitslag van een verkiezing.

Zie [AI-verordening, bijlage III](https://eur-lex.europa.eu/legal-content/NL/TXT/?uri=CELEX:32024R1689#d1e38-127-1).

### Verboden AI-systemen
Dit zijn AI-systemen die:

* **misleiden**
* **misbruik maken van kwetsbaarheden of gevoelige situaties**, zoals het overhalen van mensen met schulden om iets te kopen
* **sociale scores bijhouden** voor gedrag van mensen en hen hiervoor straffen
* **beoordelen** hoe groot het risico is dat iemand een strafbaar feit pleegt
* **afbeeldingen van gezichten ‘scrapen’ (verzamelen)** via internet of bewakingscamera’s en deze opslaan in een databank
* **emoties herkennen** van mensen op hun werkplek of op school
* **biometrisch categoriseren**: mensen indelen in gevoelige categorieën zoals ras en geloof, op basis van lichamelijke kenmerken zoals huidskleur
* **biometrisch identificeren op afstand voor rechtshandhaving**, zoals gezichten herkennen via camera’s op een openbaar plein (hiervoor gelden uitzonderingen in ernstige situaties zoals ontvoeringen en terrorisme)

Zie [AI-verordening, artikel 5](https://eur-lex.europa.eu/legal-content/NL/TXT/?uri=CELEX:32024R1689#d1e2816-1-1).

## Impact van algoritmes
Impactvolle algoritmes moet je publiceren in het [Algoritmeregister](https://algoritmes.overheid.nl/nl). Dat moet in elk geval in deze situaties:

* Je algoritme is **onderdeel van een hoog-risico-AI-systeem**. 
* Je algoritme heeft **invloed op een proces met rechtsgevolgen voor burgers of organisaties**. Bijvoorbeeld het wel of niet krijgen van boetes of subsidies.
* Je algoritme heeft **invloed op de manier waarop de overheid burgers of organisaties indeelt, of contact met hen zoekt**. Bijvoorbeeld bij het inschatten van risico’s of het signaleren van fraude.
* Je **overheidsorganisatie vindt zelf dat het algoritme impact heeft op de maatschappij**. Bijvoorbeeld omdat het algoritme ingewikkeld is, veel data gebruikt, vaak in de media komt of onderzocht wordt door een toezichthouder.

Een impactvol algoritme kan schade veroorzaken aan de maatschappij. Daarom zijn de regels strenger voor impactvolle dan voor niet-impactvolle algoritmes. 

!!! tip "Tip"

    Twijfel je of je algoritme impactvol is of niet? Beschouw het algoritme dan als impactvol.

Meer uitleg en voorbeelden vind je in de [Handreiking Algoritmeregister](https://algoritmes.pleio.nl/wiki/view/19bb6e9e-7a97-43d5-bef3-b1d66e59f4ff/handreiking-algoritmeregister).
