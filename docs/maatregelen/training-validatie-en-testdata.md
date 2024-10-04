---
title: Train-, validatie- en testdata
toelichting: Indien je gebruik maakt van machine learning technieken, maak een passende keuze voor gescheiden train-, test- en validatiedata en houdt hierbij rekening met underfittng en overfitting. 
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
- data-scientist
hide:
- navigation
- toc
---

<!-- tags -->

## Maatregel
Indien je gebruik maakt van machine learning technieken, maak een passende keuze voor gescheiden train-, test- en validatiedata en houdt hierbij rekening met underfittng en overfitting. 

## Toelichting
Verdeel je dataset in drie delen:

1. **de trainingsset**

    Deze dataset wordt gebruikt om het model te trainen. Uit deze dataset worden de onderliggende patronen of relaties geleerd die later gebruikt kunnen worden om voorspellingen mee te doen.

    De [kwaliteit](datakwaliteit.md) van deze dataset moet goed zijn en zo representatief mogelijk voor de doelpopulatie. Eventuele bias of vooroordelen in deze dataset kan door het trainen in het model sluipen. 

2. **de validatieset**

    De validatieset fungeert als een onafhankelijke, onbevooroordeelde dataset voor het vergelijken van de prestaties van verschillende algoritmen die zijn getraind op onze trainingsset.

    Verschillende modellen kunnen getraind worden op de trainingsdataset. Zo kan je bijvoorbeeld variëren in de (hyper)parameters of de inputvariabelen. Dit leidt tot verschillende varianten van het model. Om de prestaties van de verschillende modellen te vergelijken, moeten we een nieuwe dataset gebruiken: de validatieset. Zou je hiervoor de trainingsdataset gebruiken, kan dat leiden tot [overfitting](https://hastie.su.domains/ISLP/ISLP_website.pdf.download.html), wanneer het model dan te specifiek afgestemd is op 1 dataset. Het model kan dan niet voldoende generaliseren voor nieuwe situaties.

3. **de testset**

    Nadat er met behulp van de validatieset een keuze is gemaakt voor een passend model en bijbehorende (hyper)parameters, moet je het model nog testen op nieuwe data. Dit geeft een beeld van de werkelijke prestaties van het model in nieuwe omstandigheden. 

    Let op dat je pas naar deze resultaten kijkt als laatste stap. Inzichten uit deze testdataset mogen niet worden meegenomen in de ontwikkeling, omdat dit kan leiden tot overfitting. Het model zal dan in productie mogelijk minder goed presteren. 

### Hoe split ik mijn dataset? 

#### Grootte van de drie datasets
Er is geen optimale verdeling van de drie datsets. Veelvoorkomende verhoudingen om je data in te splitten zijn:

- 80% trainingsset, 10% validatieset, 10% testset
- 70% trainingsset, 15% validatieset, 15% testset
- 60% trainingsset, 20% validatieset, 20% testset

Afhankelijk van de hoeveelheid beschikbare data en de context maak je hierin een keuze. Houdt hierbij rekening met:

- Hoe minder trainingdata, hoe groter de variantie van het model tijdens het trainen. De patronen en relaties die ontdekt zijn, bevatten dan een grotere onzekerheid. 
- Hoe minder validatie- en testdata je gebruikt, hoe grote de variantie en de onzekerheid in de verwachte prestaties van het algoritme. 
- Hoe complexer het model, en hoe meer (hyper)parameters er zijn om te optimaliserne, hoe groter de validatieset moet zijn om het model met optimale presetaties te vinden. Wanneer er weinig hyperparameters zijn, is een relatief kleine validatieset vaak voldoende. 

#### k-fold cross validation
Naast dat je de datasets willekeurig kan verdelen in drie delen (aselect), kan je ook meer geavanceerde technieken gebruiken. Een robuuste en veelgebruikte techniek is [k-fold cross validation](https://hastie.su.domains/ISLP/ISLP_website.pdf.download.html), waarbij het model *k* keer wordt getraind op verschillende delen van de data. 

## Bijbehorende vereiste(n)

<!-- list_vereisten_on_maatregelen_page -->

## Risico
Door onjuiste training van het model presteert het model in de praktijk minder goed dan bij de tests. Als trainings-, validatie- en testdata door elkaar lopen ("data leakage"), kan dit leiden tot overfitting, waardoor het model beter lijkt te presteren dan in werkelijkheid het geval is.

## Bronnen
- [Onderzoekskader Auditdienst Rijk, DM.5, DM.6](https://open.overheid.nl/documenten/61b54381-d331-40ed-8fce-b2883b195f25/file)
- [Toetsingskader Algoritmes Algemene Rekenkamer, 2.15](https://www.rekenkamer.nl/onderwerpen/algoritmes/documenten/publicaties/2024/05/15/het-toetsingskader-aan-de-slag) 

## Voorbeeld

Heb jij een goed voorbeeld? Laat het ons weten!

