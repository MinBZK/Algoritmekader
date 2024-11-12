---
title: Bepaal en beschrijf welke techniek het beste past bij de beoogde toepassing
id: urn:nl:ak:mtr:owp-04
toelichting: Bepaal en beschrijf welke techniek het beste past bij de beoogde toepassing.
vereiste: 
- awb-01-zorgvuldigheidsbeginsel
- aia-06-technische-documentatie
- aia-10-nauwkeurigheid-robuustheid-cyberbeveiliging
levenscyclus: 
- ontwerp
onderwerp:
- technische-robuustheid-en-veiligheid
rollen:
- ontwikkelaar
- projectleider
hide:
- navigation
- toc
---

<!-- tags -->

## Maatregel
Bepaal en beschrijf welke techniek het beste past bij de beoogde toepassing.

## Toelichting 
De keuze voor het type algoritme (en onderliggende techniek)) heeft invloed op veel zaken, zoals [hoe duurzaam je uiteindelijke algoritme of systeem is](../onderwerpen/duurzaamheid.md), hoe je [menselijke controle](../onderwerpen/menselijke-controle.md) uitoefent of de eventuele [vooringenomenheid](../onderwerpen/bias-en-non-discriminatie.md) die in een model kan sluipen. Voor al deze onderwerpen is het belangrijk om vóór de ontwikkeling van een toepassing de voor- en nadelen van een technologie goed af te wegen.
Zorg er ook voor dat deze keuze gedocumenteerd wordt.

- Bepaal of je gebruik wilt maken van een:

    - [zelflerend algoritme](../overhetalgoritmekader/soorten-algoritmes.md#zelflerende-algoritmes)
    - niet-zelflerend algoritme zoals een algoritme gebaseerd op [rekenregels](../overhetalgoritmekader/soorten-algoritmes.md#rekenregels)

- Beschrijf vervolgens ook:
    
    - waarom er voor dit type algoritme wordt gekozen
    - wat de alternatieven zijn en waarom die minder passend zijn?
    - waarom dit algoritme het meest geschikt is om het [beoogde doel](1-pba-02-formuleren-doelstelling.md) van het algoritme te bereiken. 

- De precieze details kunnen in dit stadium van de levenscyclus waarschijnlijk nog niet ingevuld worden. Maak een goede eerste inschatting van de gebruikte techniek. Eventueel kan je er ook voor kiezen om verschillende technieken verder te onderzoeken. Dat betekent dat er meerdere algoritmes ontwikkeld worden (op basis van verschillende technieken), en je later een definitieve keuze maakt. 

## Voorbeeld
Zoals hierboven aangegeven kan de afweging worden gemaakt op basis van verschillende onderwerpen. Als het gaat om menselijke controle, zijn dit bijvoorbeeld de voor en nadelen die je kunt gebruiken bij die afweging:

| Algoritme                    | Voordelen                                                                                                                                                                      | Nadelen                                                                                                                                                                                                                     |
|------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Rekenregels (regelgebaseerde algoritmen) | - Het model wordt door de mens geprogrammeerd waardoor er volledige invloed is op werking van het model.<br>- Het model is in productie goed te monitoren en keuzes voor bepaalde data en parameters in het model zijn te verklaren door de mens. | - Data kan bestaande biases bevatten waardoor deze biases ook in het model terugkomen. Bijvoorbeeld, wanneer de data vooral witte mensen bevat, zal het model beter werken voor witte mensen.<br>- Menselijke controle kan het vermogen van een model om goed te generaliseren vertragen omdat de mens handmatig parameters moet (bij)stellen.<br>- Menselijke controle kan het vinden van positieve nieuwe/onverwachte patronen of relaties in data tegengaan. |
| Supervised Learning          | - De mens kan data labelen en het leerproces controleren waarmee er invloed is op de gewenste uitkomsten.<br>- Het model is in productie makkelijker te monitoren en corrigeren wanneer ongewenste uitkomsten zich voordoen. | - Data kan bestaande biases bevatten waardoor deze biases ook in het model terugkomen.<br>- Menselijke controle kan het vermogen van een model om goed te generaliseren vertragen.<br>- Menselijke controle kan het vinden van positieve nieuwe/onverwachte patronen of relaties in data in de weg staan. |
| Unsupervised Learning        | - De mens kan parameters instellen en patronen/uitkomsten die het model vindt interpreteren, waarmee resultaten gevalideerd kunnen worden.                                         | - Het gebrek aan gelabelde input maakt het voor mensen moeilijk om te begrijpen en valideren of de uitkomsten juist zijn.                                                                                                    |
| Reinforcement Learning       | - De mens kan het beloningssysteem van het model controleren en daarmee ethisch/wenselijk gedrag van het algoritme stimuleren.<br>- Menselijke controle kan gebruikt worden om onwenselijk gedrag van het algoritme te voorkomen. | - Slecht ontworpen beloningen kunnen leiden tot onwenselijke en onethisch gedrag van het algoritme.<br>- Menselijke controle kan het vermogen van het algoritme om optimale oplossingen of accurate voorspellingen te vinden onnodig belemmeren. |
| Deep Learning (incl. Gen AI) | - De mens kan de netwerkarchitectuur structureren en trainingsparameters afstellen om betere resultaten te behalen.<br>- Menselijke controle kan ethisch gebruik van het model inrichten en het misbruiken van krachtige algoritmes voorkomen. | - Vanwege hoge complexiteit en lage mate van interpreteerbaarheid van het algoritme (black box) verliest de mens controle en begrip van het besluitvormingsproces van het algoritme.                                         |



## Risico
Het niet maken van deze afweging in een vroeg stadium kan tot onverantwoord gebruik van algoritmen leiden, of tot het niet halen van vereisten of organisatiedoelen op gebieden als [duurzaamheid](../onderwerpen/duurzaamheid.md), [menselijke controle](../onderwerpen/menselijke-controle.md) of [bias](../onderwerpen/bias-en-non-discriminatie.md).

## Bijbehorende vereiste(n)
<!-- list_vereisten_on_maatregelen_page -->

## Bronnen 
- [Impact Assessment Mensenrechten en Algoritmes, 2A.1, 2B.1](../instrumenten/IAMA.md)
- [The many meanings of meaningful human control | AI and Ethics (springer.com)](https://link.springer.com/article/10.1007/s43681-023-00320-6)
- [Algorithmic Decision-Making and the Control Problem | Minds and Machines (springer.com)](https://link.springer.com/article/10.1007/s11023-019-09513-7)
- [Meaningful human control: actionable properties for AI system development | AI and Ethics (springer.com)](https://link.springer.com/article/10.1007/s43681-022-00167-3)

