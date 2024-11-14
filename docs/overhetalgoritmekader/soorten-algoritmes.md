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
Met een AI-systeem bedoelen we een systeem dat kunstmatig intelligent is volgens de [Europese AI-verordening](../voldoen-aan-wetten-en-regels/ai-verordening#definitie-van-een-ai-systeem). Dit zijn in elk geval systemen die gebruik maken van:

* supervised learning
* unsupervised learning
* reinforcement learning
* deep learning


!!! tip "Tip"

    Twijfel je of je algoritme onderdeel is van een AI-systeem? Raadpleeg een expert. Of beschouw het systeem voor de zekerheid als een AI-systeem.

## Risicogroepen AI-systemen
AI-systemen vallen mogelijk onder een van de risicogroepen uit de AI-verordening:

* [Risico op misleiding](../voldoen-aan-wetten-en-regels/ai-verordening/#risico-op-misleiding)
* [Hoog-risico-AI-systemen](../pr-preview/pr-374/voldoen-aan-wetten-en-regels/ai-verordening/#hoog-risico-ai-systemen)
* [Verboden AI-systemen](../voldoen-aan-wetten-en-regels/ai-verordening/#verboden-ai-systemen)

Het hangt ervan af waarvoor je dit AI-systeem gebruikt.

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
