---
title: Gebruik bij machine learning technieken gescheiden train-, test- en validatiedata en houd rekening met underfitting en overfitting
id: urn:nl:ak:mtr:dat-07
toelichting: Indien je gebruik maakt van machine learning technieken, maak een passende keuze voor gescheiden train-, test- en validatiedata en houd hierbij rekening met underfitting en overfitting.
vereiste:
- aia-10-nauwkeurigheid-robuustheid-cyberbeveiliging
levenscyclus:
- dataverkenning-en-datapreparatie
- ontwikkelen
onderwerp:
- data
- technische-robuustheid-en-veiligheid
- bias-en-non-discriminatie
rollen:
- ontwikkelaar
sources:
  ADR:
  - DM.5
  - DM.6
  ARK:
  - 2.15
  - 2.21
hide:
- navigation
- toc
---

<!-- tags -->

## Maatregel
Indien je gebruik maakt van machine learning technieken, maak een passende keuze voor gescheiden train-, test- en validatiedata en houd hierbij rekening met underfitting en overfitting.

## Toelichting
Verdeel je dataset in drie delen:

1. **De trainingset**

    Deze dataset wordt gebruikt om het model te trainen. Uit deze dataset worden de onderliggende patronen of relaties geleerd die later gebruikt kunnen worden om voorspellingen mee te doen.

    De [kwaliteit](3-dat-01-datakwaliteit.md) van deze dataset moet goed zijn en zo representatief mogelijk van de doelpopulatie. Eventuele [bias](../../onderwerpen/bias-en-non-discriminatie.md#herken-bias) of vooroordelen in deze dataset kunnen door het trainen in het model sluipen.

    Let bij het samenstellen van de traningset op dat de data waarop het model gebaseerd is, niet beschikbaar is voordat de uitkomsten zijn geobserveerd. Met andere woorden, zorg ervoor de de voorspellingen geen onderdeel kunnen zijn van de inputvariabelen.

2. **De validatieset**

    De validatieset fungeert als een onafhankelijke, onbevooroordeelde dataset voor het vergelijken van de prestaties van verschillende algoritmes die zijn getraind op de trainingset.

    Verschillende modellen kunnen getraind worden op de trainingset. Zo kan je bijvoorbeeld variëren in de (hyper)parameters of de inputvariabelen. Dit leidt tot verschillende varianten van het model. Om de prestaties van de verschillende modellen te vergelijken, moeten we een nieuwe dataset gebruiken: de validatieset. Zou je hiervoor de trainingset gebruiken, kan dat leiden tot [overfitting](https://www.statlearning.com), omdat het model te specifiek afgestemd is op 1 dataset. Het model kan dan niet voldoende generaliseren voor nieuwe situaties.

3. **De testset**

    Nadat er met behulp van de validatieset een keuze is gemaakt voor een passend model en bijbehorende (hyper)parameters, moet je het model nog testen op nieuwe data. Dit geeft een beeld van de werkelijke prestaties van het model in nieuwe omstandigheden.

    Let op dat je pas naar deze resultaten kijkt als laatste stap. Inzichten uit deze testdataset mogen niet worden meegenomen in de ontwikkeling, omdat dit kan leiden tot overfitting. Het model zal dan in productie mogelijk minder goed presteren.

### Grootte van de drie datasets

Er is geen optimale verdeling van de drie datsets. Veelvoorkomende verhoudingen om data te splitten zijn:

- 80% trainingsset, 10% validatieset, 10% testset
- 70% trainingsset, 15% validatieset, 15% testset
- 60% trainingsset, 20% validatieset, 20% testset

Afhankelijk van de hoeveelheid beschikbare data en de context maak je hierin een keuze. Houdt hierbij rekening met:

- Hoe minder trainingdata, hoe groter de variatie van het model tijdens het trainen. De patronen en relaties die ontdekt zijn bevatten dan een grotere onzekerheid.
- Hoe minder validatie- en testdata je gebruikt, hoe groter de variatie en de onzekerheid in de verwachte prestaties van het algoritme.
- Hoe complexer het model en hoe meer (hyper)parameters er zijn om te optimaliseren, hoe groter de validatieset moet zijn om het model met optimale presetaties te vinden. Wanneer er weinig hyperparameters zijn, is een relatief kleine validatieset vaak voldoende.

### K-fold cross validation

Naast dat je de datasets willekeurig kan verdelen in drie delen (aselect), kan je ook meer geavanceerde technieken gebruiken. Een robuuste en veelgebruikte techniek is [k-fold cross validation](https://www.statlearning.com), waarbij het model *k* keer wordt getraind op verschillende delen van de data.

## Risico
Door onjuiste training van het model presteert het model in de praktijk minder goed dan bij de tests. Als training-, validatie- en testdata door elkaar lopen ("data leakage"), kan dit leiden tot overfitting waardoor het model beter lijkt te presteren dan in werkelijkheid het geval is.

## Bijbehorende vereiste(n) { data-search-exclude }
??? expander "Bekijk alle vereisten"
    <!-- list_vereisten_on_maatregelen_page -->

## Bronnen

- [Onderzoekskader algoritmes, Auditdienst Rijk, DM.5 en DM.6](../hulpmiddelen/onderzoekskader-adr.md)
- [Toetsingskader Algoritmes Algemene Rekenkamer, 2.15, 2.21](https://www.rekenkamer.nl/onderwerpen/algoritmes/documenten/publicaties/2024/05/15/het-toetsingskader-aan-de-slag)


## Voorbeelden
!!! example "Gemeente Amsterdam: Lokaliseren van lantaarnpalen"

    Gemeente Amsterdam heeft een systeem voor het herkennen van lantaarnpalen. Hiervoor is een subset van de data gebruikt uit Amsterdam-Oost om te trainen. Het testen is onder andere gebeurd in Weesp wat in het Zuid-Oosten van de gemeente ligt. Het uiteindelijke doel is het gehele gebied gemeente Amsterdam.
    Het grootste punt van verbetering zou zijn om de trainingdata en validatiedata expliciet te benoemen. Daarnaast zou de trainingdata het beste uit verschillende delen van het gebied gemeente Amsterdam gehaald kunnen worden om zo overfitting op Amsterdam-Oost te voorkomen.

    Bron: [Lokaliseren lantaarnpalen - Algoritmeregister](https://algoritmes.overheid.nl/nl/algoritme/lokaliseren-van-lantaarnpalen-gemeente-amsterdam/17364371)


!!! example "Gemeente Ede – WOZ-taxatiemodellen"

	De gemeente Ede heeft een algoritme in gebruik als ondersteuning bij het bepalen (en controleren) van de WOZ-waarde van woningen. Dit wordt gedaan aan de hand van Machine Learning modellen die op basis van onder andere woning- en locatiekenmerken gecombineerd met markt- en verkoop condities de WOZ-waarde kan bepalen. Hierbij wordt bepaald welke kenmerken het meeste gewicht hebben voor deze bepaling.
 	Dit algoritme is getraind op 80% van de data om vanuit daar verbanden tussen transactieprijzen en kenmerken te leren. Voor de testset is 20% van de data gebruik om te valideren of nieuwe (onbekende) data ook correct gewaardeerd wordt.

	Bron: [WOZ-taxatiemodellen - Gemeente Ede](https://algoritmes.overheid.nl/nl/algoritme/woztaxatiemodellen-gemeente-ede/39323486)


Heb je een voorbeeld of best practice, laat het ons weten via [algoritmes@minbzk.nl](mailto:algoritmes@minbzk.nl)
