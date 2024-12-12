---
title: Evalueer de betrouwbaarheid van het algoritme
id: urn:nl:ak:mtr:ver-06
toelichting: Evalueer de betrouwbaarheid van het algoritme door het algoritme te testen op verschillende input en in verschillende situaties.  
vereiste:
- aia-10-nauwkeurigheid-robuustheid-cyberbeveiliging
levenscyclus:
- ontwikkelen
- verificatie-en-validatie
- monitoring-en-beheer
onderwerp:
- technische-robuustheid-en-veiligheid
rollen:
- ontwikkelaar
hide:
- navigation
---

<!-- tags -->

## Maatregel
Evalueer de betrouwbaarheid van het algoritme door het algoritme te testen op verschillende input en in verschillende situaties. 

## Toelichting
De betrouwbaarheid van een algoritme omschrijft of het algoritme in staat is om onder verschillende omstandigheden en met alle mogelijke input tot een correcte uitkomst te komen. 
In sommige gevallen is het wenselijk om duidelijk aan te geven wat de onzekerheid is van een uitkomst, of dat het juiste antwoord niet bepaald kan worden of er kans is op fouten.  

Om de betrouwbaarheid te evalueren kan je de volgende stappen doorlopen:

1. [Bepaal methodes en metrieken](#bepaal-methodes-en-metrieken)
2. [Zorg voor een representatieve testset](#zorg-voor-een-representatieve-testset)
3. [Bepaal welke mate van betrouwbaarheid noodzakelijk is](#bepaal-welke-mate-van-betrouwbaarheid-noodzakelijk-is)
4. [Bepaal interventies voor als het restrisico hoger is dan acceptabel](#bepaal-interventies-voor-als-het-restrisico-hoger-is-dan-acceptabel)
5. [Zorg en controleer of de betrouwbaarheid van een uitkomst wordt meegegeven in de output](#zorg-en-controleer-of-de-betrouwbaarheid-van-een-uitkomst-wordt-meegegeven-in-de-output)

### Bepaal methodes en metrieken
Bepaal met welke methodes je betrouwbaarheid wil evalueren en welke metrieken je daarvoor wilt gebruiken.
De metrieken voor prestatie kunnen gelijk zijn aan die van [nauwkeurigheid](5-ver-02-evalueer-nauwkeurigheid.md#metrieken), alleen gaat het om de score hierop in een onbekende situatie. 
Het testen van betrouwbaarheid kan bijvoorbeeld door precisie of recall te meten onder extreme omstandigheden of met ruis in de data. 

!!! info "Methodes om te testen op betrouwbaarheid"

    Afhankelijk van het type algoritme zijn er verschillende methodes om betrouwbaarheid te testen. 
    In de literatuur gaat het ook wel over generalisatie wanneer we spreken over het correct presteren op nieuwe of minder voorkomende inputs en omstandigheden. 
    Hieronder enkele voorbeelden van methoden die gebruikt kunnen worden:

    - De *monkey test* is een manier om voor willekeurige, invalide of onverwachte inputs het gedrag van het algoritme te testen. Het idee is om een onvoorspelbare gebruiker (of een script) willekeurige acties te laten uitvoeren om te kijken hoe het systeem erop reageert. 
    - Door een *out-of-sample test* kan worden getest hoe een machinelearning algoritme presteert bij een dataset verdeling die niet in de training is meegegeven. 
    - Door *stresstesten* test je de prestatie van het algoritme onder extreme omstandigheden of ruis in de data. 
    - Met synthetische data kunnen goed uitlegbare en controleerbare distributieshifts worden gesimuleerd, om te testen of het algoritme in een onbekende situatie, waar geen data van bruikbaar of beschikbaar is, presteert. 
    - De [AI Blindspots kaartenset](https://data-en-maatschappij.ai/tools/ai-blindspots-2.0) kan helpen om risico’s voor betrouwbaarheid (en specifiek [bias](../../onderwerpen/bias-en-non-discriminatie.md)) te identificeren. 

Pas de methodes en metrieken aan op de ontwerpkeuzes, zoals de context waarin het algoritme gebruikt wordt en het [soort algoritme](2-owp-05-soort-algoritme.md). 
Onderzoek of er specifieke situaties of omstandigheden zijn waarvan bekend is dat deze kunnen variëren. 

??? example "Voorbeeld"

    Analyseer welke veranderingen of wisselingen in de [inputdata](2-owp-02-gebruikte-data.md) er kunnen plaatsvinden. Bijvoorbeeld door economische schommelingen of door veranderingen in gebruikersgedrag. Test of het algoritme goed blijft presteren onder deze omstandigheden. 

??? example "Voorbeeld"

    De verdeling van de inputdata kan invloed hebben op de prestaties van een machinelearning algoritme (distributieshift). Test hoe het algoritme presteert onder andere verdelingen van de inputdata. 

### Zorg voor een representatieve testset
Zorg dat er een [representatieve testset](5-ver-04-representatieve-testomgeving.md) beschikbar is waarin het algoritme kan worden getest in verschillende scenario's. Test het algoritme in verschillende omstandigheden:

- gebruikers
- omgeving
- interface
- verschillende datasets

Test je algoritme op generaliseerbaarheid van de uitkomsten buiten de standaard omgeving. 

### Bepaal welke mate van betrouwbaarheid noodzakelijk is
- Bedenk onder welke variaties het systeem zeker betrouwbaar moet werken en hoe goed het moet kunnen werken onder rand- of uitzonderlijke gevallen. 
- Afhankelijk van de toepassing moeten resultaten altijd dezelfde uitkomst geven of niet ([reproduceerbaarheid](4-owk-07-reproduceerbaarheid.md)). In het geval van generatieve AI hoeft het antwoord bijvoorbeeld niet altijd exact hetzelfde te zijn. 
- Heb hierbij aandacht voor de afweging tussen [nauwkeurigheid](5-ver-02-evalueer-nauwkeurigheid.md) en betrouwbaarheid. Een model met hoge nauwkeurigheid op de testset kan vaak slechter generaliseren naar situaties net buiten de test set (overfitting). 

### Bepaal interventies voor als het restrisico hoger is dan acceptabel
Bepaal wat er moet gebeuren wanneer de betrouwbaarheid niet voldoende is. Hiervoor zijn verschillende mogelijkheden:

- Verder ontwikkelen aan het algoritme en andere maatregelen treffen om het restrisico acceptabel te maken. Bijvoorbeeld door:

    - meer [menselijke controle](../../onderwerpen/menselijke-controle.md) toe te voegen 
    - een ander [soort algoritme](2-owp-05-soort-algoritme.md) of [techniek](2-owp-04-gebruikte-techniek.md) te gebruiken. 
    - bij machinelearning algoritmes kan je overfitting voorkomen door [verschillende trainingsdatasets en testdatasets te gebruiken](3-dat-07-training-validatie-en-testdata.md), zoals bij [k-fold-cross-validation](3-dat-07-training-validatie-en-testdata.md#k-fold-cross-validation). 
    - door (hyper)parameters aan te passen kan het algoritme worden aangepast zodat het beter presteert in verschillende testsituaties. 

- [Te stoppen met de ontwikkeling en/of het gebruik van het systeem](../../levenscyclus/uitfaseren.md). 

### Zorg en controleer of de betrouwbaarheid van een uitkomst wordt meegegeven in de output
Voorspellingen of uitkomsten van een algoritme kunnen onzeker zijn. Zorg dat de (on)zekerheid van een uitkomst wordt meegegeven in de output van een algoritme. 
Dat kan bijvoorbeeld door een foutmarge mee te geven. 
In veel gevallen kan het wenselijk zijn dat het systeem aangeeft wanneer een uitkomst te onzeker is, of soms zelfs geen antwoord geeft vanwege de onzekerheid. 
Dit kan bijdragen aan het vertrouwen in het algoritme. 

### Zorg voor continue monitoring op betrouwbaarheid
Zorg dat het algoritme continu wordt [gemonitord](../../levenscyclus/monitoring-en-beheer.md) op de betrouwbaarheid en de prestaties van het systeem. Maak gebruik van periodieke updates en [valideer regelmatig de kwaliteit gebruikte data](3-dat-01-datakwaliteit.md). 

## Bijbehorende vereiste(n)

<!-- list_vereisten_on_maatregelen_page -->

## Risico
Een onbetrouwbaar algoritme kan in een nieuwe of onverwachte situatie de verkeerde uitkomsten geven. 

## Bronnen
- [Bo Li, et al., Trustworthy AI: From Principles to Practices](https://arxiv.org/abs/2110.01167)
- [Pablo Soldati, et al., Design Principles for Model Generalization and Scalable AI Integration in Radio Access Networks](https://arxiv.org/abs/2306.06251v2)
- [Jiashuo Liu, et al., Towards Out-Of-Distribution Generalization: A Survey](https://arxiv.org/abs/2108.13624)
- [Kenniscentrum Data & Maatschappij - Tool: AI Blindspots 2.0](https://data-en-maatschappij.ai/tools/ai-blindspots-2.0)
- [Kaiyang Zhou, et al., Domain Generalization: A Survey](https://ieeexplore.ieee.org/abstract/document/9847099)

## Voorbeeld

Heb jij een goed voorbeeld? Laat het ons weten!
