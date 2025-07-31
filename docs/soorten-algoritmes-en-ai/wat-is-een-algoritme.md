---
title: Wat is een algoritme?
summary: Uitleg van de verschillende soorten algoritmes waar je mee kunt werken.
---

# Wat is een algoritme?
Met een algoritme bedoelen we een set regels en instructies die een computer uitvoert, met als doel: problemen oplossen, vragen beantwoorden, taken of processen uitvoeren en/of besluiten nemen. Dit kunnen simpele rekenregels zijn. Of zelflerende algoritmes en AI-systemen.

## Rekenregels
Rekenregels (ook wel: regelgebaseerde algoritmes) zijn de meest eenvoudige algoritmes. Dit zijn door mensen bedachte regels die het computersysteem precies moet opvolgen: als x gebeurt, dan doe je y.

Rekenregels:

* zijn expliciet geprogrammeerd en bedacht door mensen
* bestaan uit vaste stappen om een taak uit te voeren

Het bevatten van rekenregels maakt van een systeem geen AI. Rekenregels kunnen wel onderdeel zijn van een AI-systeem.

### Voorbeelden

* Eenvoudige chatbots die burgers advies geven op basis van door mensen bedachte beslisbomen.
* [Ondersteuning berekening uitkering](https://algoritmes.overheid.nl/nl/algoritme/gm0518/86652588/ondersteuning-berekening-uitkering) dat adviseert over uitkeringen, op basis van door mensen bedachte beslisbomen.
* [Prestatiemonitor](https://algoritmes.overheid.nl/nl/algoritme/oorg12355/79978718/prestatiemonitor) dat risicoscores berekent van scholen, op basis van door mensen bedachte regels.

## Zelflerende algoritmes
Zelflerende algoritmes zijn algoritmes die zichzelf trainen. Dit proces heet machinelearning. Hierdoor leren computers van data, zonder dat mensen dit precies zo programmeren. Ze zoeken bijvoorbeeld naar patronen of doen voorspellingen. Dit is een veel voorkomende vorm van AI.

Zelflerende technieken zijn in elk geval:

* **Supervised learning (gecontroleerd leren)**: Je algoritme leert van gegevens die je labelt met informatie. Je biedt bijvoorbeeld foto’s aan met de labels: dit is wel een kat, dit is geen kat. Voorbeeld: [Virtuele assistent Gem](https://algoritmes.overheid.nl/nl/algoritme/gm0553/12751163/virtuele-gemeente-assistent-gem).
* **Unsupervised learning (ongecontroleerd leren)**: Je laat het algoritme zelf patronen en structuren ontdekken in ongestructureerde gegevens zonder labels. Je biedt bijvoorbeeld foto’s aan van dieren die het algoritme zelf moet groeperen. Voorbeeld: [Polis](https://algoritmes.overheid.nl/nl/algoritme/pv28/14379550/polis) voor participatieplatformen.
* **Reinforcement learning (bekrachtiginsleren)**: Het algoritme leert door straf en beloning. Het doel is zo hoog mogelijk scoren in zo min mogelijk tijd. Je geeft bijvoorbeeld punten als het algoritme foto’s sorteert die op katten lijken. Dit proces is vergelijkbaar met hoe mensen leren door ervaring. Bij reinforcement learning leert het AI-model autonoom bij. Bij _<span lang="en">online reinforcement learning</span>_ kan het model in productie ook nog continu zichzelf bijstellen. Je kunt er ook voor kiezen dit alleen in trainingsfase te doen, en het model 'bevroren' in te zetten. Voorbeeld van reinforcement learning: [I-VRI](https://algoritmes.overheid.nl/nl/algoritme/pv28/34151769/intelligente-verkeersregelinstallatie-ivri) voor verkeerslichten.
* **Deep learning**: Supervised, unsupervised of reinforcement learning gecombineerd met diepe neurale netwerken. Dit zijn kunstmatige neurale netwerken met veel verschillende lagen. Hierdoor kun je nog ingewikkeldere problemen oplossen. Voorbeeld: [Geautomatiseerde gezichtsvergelijking bij het RNI-inschrijfproces](https://algoritmes.overheid.nl/nl/algoritme/oorg10103/18814864/geautomatiseerde-gezichtsvergelijking-bij-het-rniinschrijfproces).

## AI-systeem
Met een AI-systeem bedoelen we een systeem dat kunstmatig intelligent is volgens de [Europese AI-verordening](../ai-verordening/ai-verordening-in-het-kort.md#ai-systeem). Je systeem zal in de meeste gevallen onder de definitie van AI-systeem vallen als gebruik wordt gemaakt van:

* supervised learning
* unsupervised learning
* reinforcement learning
* deep learning


!!! tip "Tip"

    Twijfel je of je algoritme onderdeel is van een AI-systeem? Volg de [handreiking Identificatie AI-systemen AI-verordening](https://aienalgoritmes.pleio.nl/wiki/view/6e0e62ea-b3bc-4a95-8ba7-59672e9ffd0d/ai-verordening-hulpmiddelen-implementatie). Kom je er niet uit? Raadpleeg een expert. Of beschouw het systeem voor de zekerheid als een AI-systeem.

## Help ons deze pagina te verbeteren
Deel je idee, suggestie of opmerking via [GitHub](https://github.com/MinBZK/Algoritmekader/issues/new/choose) of mail ons via [algoritmes@minbzk.nl](mailto:algoritmes@minbzk.nl).
