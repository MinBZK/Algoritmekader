---
title: Discriminerende effecten van algoritmes
hide: 
- path
---

# Discriminerende effecten van algoritmes

Wie algoritmes ontwikkelt of gebruikt, moet discriminerende effecten hiervan voorkomen. Want met algoritmes kun je makkelijk discrimineren, ook al is dat niet de bedoeling. Let daarom steeds op ‘bias’. Dit zijn vooroordelen of fouten in je algoritme of aanpak.

## Wat zijn discriminerende effecten van algoritmes?
Algoritmes hebben een discriminerend effect als je mensen ongelijk behandelt in gelijke situaties. En dit mag niet volgens de wet of de rechter.

Een camera met gezichtsherkenning herkent bijvoorbeeld geen vrouwen van kleur. Of een computerprogramma selecteert vooral mensen met een laag inkomen als risicogroep voor fraude.

Zo’n discriminerend effect ontstaat doordat het algoritme een verboden onderscheid maakt:

- Direct onderscheid: Het algoritme gebruikt een [discriminatiegrond](https://www.mensenrechten.nl/mensenrechten-voor-jou/discriminatie-en-gelijke-behandeling/wat-is-discriminatie) als variabele, zoals geloof, politieke voorkeur, ras, nationaliteit, geslacht, handicap, burgerlijke staat, vermogen of leeftijd.
- Indirect onderscheid: Het algoritme lijkt neutraal of eerlijk. Maar later blijkt dat bepaalde mensen op een andere manier worden behandeld door hun geloof, politieke of seksuele voorkeur, ras, geslacht, of burgerlijke staat. 


> [!TIP]
> Heeft je algoritme een discriminerend effect, dan moet je zo snel mogelijk [stoppen met het algoritme](../levenscyclus/uitfaseren.md). Gebruik bijvoorbeeld het [discriminatieprotocol](https://minbzk.github.io/discriminatieprotocol/) van het ministerie van Binnenlandse Zaken.

### Uitzondering
Een direct of indirect onderscheid is niet altijd verboden volgens [Artikel 2 Algemene wet gelijke behandeling](https://wetten.overheid.nl/jci1.3:c:BWBR0006502&hoofdstuk=1&paragraaf=1&artikel=1&z=2020-01-01&g=2020-01-01). In bepaalde situaties en onder bepaalde strenge voorwaarden mag je zo’n onderscheid wel maken. 

Direct onderscheid maken mag bijvoorbeeld als hiervoor een uitzondering staat in de wet. Zo mag je bijvoorbeeld in situaties waar het gaat om moederschap of zwangerschap onderscheid maken op basis van geslacht. 

Indirect onderscheid maken mag niet, tenzij hiervoor een wettelijke uitzondering geldt. Of je hebt een goede reden (objectieve rechtvaardiging). Selecteert je algoritme bijvoorbeeld alleen vrouwen voor een vacature, dan moet je hier een goede reden voor hebben. En het algoritme moet passend en noodzakelijk zijn om een doel te bereiken dat wettelijk is toegestaan. Anders is het discriminatie.

## Belang van discriminerende effecten voorkomen
Discriminatie is verboden volgens [Artikel 1 van de Nederlandse Grondwet](https://wetten.overheid.nl/jci1.3:c:BWBR0001840&hoofdstuk=1&artikel=1&z=2023-02-22&g=2023-02-22). En algoritmes kunnen snel een discriminerend effect hebben op grote groepen mensen. Vooral [impactvolle algoritmes](../overhetalgoritmekader/impact-van-algoritmes.md) kunnen veel schade veroorzaken in de maatschappij door discriminatie.

Het is erg moeilijk om discriminerende effecten te voorkomen. Discriminatiegronden weglaten als variabele in je algoritme is niet genoeg. Want discriminatie ontstaat ook indirect, door bias.

## Herken bias
Bias herkennen is een belangrijke stap in het voorkomen van discriminerende effecten van algoritmes.

'Bias' is een Engels woord voor vooroordeel of vooringenomenheid. Volgens de norm [ISO/IEC TR 24027](https://www.nen.nl/iso-iec-tr-24027-2021-en-289193) maken algoritmes met een bias steeds een bepaald soort fout. Hierdoor behandelen ze bepaalde mensen, groepen of producten steeds (systematisch) op een verschillende manier. Dit verhoogt de kans op discriminatie.

Alle algoritmes hebben vooroordelen en maken fouten, net als de mens. Wil je dit aanpakken, zoek dan naar bias in het algoritme zelf en in de mensen en processen om het algoritme heen. Een bias-vrij algoritme is niet mogelijk.

Bias ontstaat bijvoorbeeld in:

- statistiek en berekeningen (statistische bias)
- systemen en processen in bijvoorbeeld de samenleving of je organisatie (systemische bias)
- het menselijk denken (menselijke bias)

### Bias in statistiek en berekeningen
Dit zijn fouten in de:

- kwaliteit van de data
- manier waarop algoritmes data verwerken

Voorbeelden:

<details>
<summary>Meet-bias (measurement bias)</summary>

Je algoritme maakt een verkeerde schatting of benadering van kenmerken of labels. Dit komt doordat het de ene variabele gebruikt om een andere variabele te voorspellen of te benaderen (proxy). En hierbij laat het belangrijke informatie weg, of het voegt onbelangrijke informatie (ruis) toe.

Een algoritme maakt bijvoorbeeld een verkeerde schatting van het risico op overlijden aan longontsteking in het ziekenhuis. Het algoritme leert namelijk uit de data dat dit risico lager is voor astmapatiënten. Maar dit komt niet door hun astma. Het algoritme laat weg dat astmapatiënten met longontsteking direct naar de intensive care gaan. En mensen zonder astma niet.  

</details>

<details>
<summary>Versterkingsbias (amplification bias)</summary>

Je algoritme versterkt een patroon uit de trainingsdata.

Een algoritme dat mensen en hun acties herkent, voorspelt bijvoorbeeld 5 keer zo vaak de combinatie ‘vrouw’ en ‘koken’. Terwijl deze combinatie in de trainingsdata maar 2 keer zo vaak voorkomt. 

</details>

<details>
<summary>Evaluatie-bias (evaluation bias)</summary>

Je algoritme trekt verkeerde conclusies omdat de evaluatiedata niet kloppen, of niet compleet zijn. 

Een algoritme voor gezichtsherkenning herkent bijvoorbeeld vrouwen van kleur niet goed, omdat deze vrouwen te weinig voorkomen in de dataset voor evaluatie. 

</details>

<details> 
<summary>Representatie-bias (representation bias)</summary>

Je algoritme doet voorspellingen over een grote groep, op basis van resultaten uit subgroepen met te weinig verschillende proefpersonen.

Een algoritme beoordeelt bijvoorbeeld de populariteit van treinstations onder reizigers op basis van hun smartphone-gebruik. Maar deze groep is niet representatief, omdat oudere reizigers vaak minder gebruik maken van smartphones.

</details>


### Bias in systemen en processen
Dit is vooringenomenheid die vaak in de loop der tijd is ontstaan in de samenleving of je organisatie. Deze vooringenomenheid werkt door in processen of systemen, of wordt soms versterkt door algoritmes. Dit gebeurt vaak niet bewust. 

Systemische bias heet ook wel: institutionele vooringenomenheid. Dit betekent dat vooroordelen vaak horen bij de cultuur en samenleving. Die vooroordelen zitten daardoor ook in veel datasets, en kunnen zo versterkt worden door je algoritme. 

Voorbeelden:

<details>
<summary>Historische bias </summary>

Je algoritme heeft vooroordelen die in de loop der tijd ontstonden in de samenleving.

Een algoritme gebruikt bijvoorbeeld data die gebaseerd is op oude belastingregels, terwijl er nieuwe wetten en regels zijn. Dan zit er een historische bias in je data. Of een algoritme voorspelt bijvoorbeeld de koopkracht van mensen, maar gebruikt hiervoor data uit een tijd waarin mannen meer verdienden dan vrouwen.

</details>
 
<details>
<summary>Activiteitenbias (activity bias)</summary>

Je algoritme geeft een verkeerd beeld over gebruikers van interactieve producten, zoals websites of apps. Dit komt omdat alleen de meest actieve gebruikers trainingsdata aanleveren.

Een algoritme onderzoekt bijvoorbeeld wat burgers van een bepaalde brief vinden op basis van kliks in een digitale vragenlijst. Het algoritme kan niet zeggen wat burgers écht vinden, omdat de meest actieve internetgebruikers vaker klikken en vaker de vragenlijst invullen.

</details>

<details>
<summary>Samenlevingsbias (societal bias)</summary>
Je algoritme maakt een fout op basis van stereotypes die voorkomen in de samenleving. Dit gebeurt vooral in AI-systemen die taal verwerken via Natural Language Processing (NLP).

Een algoritme dat teksten maakt, geeft bijvoorbeeld ‘verpleegster’ als vrouwelijke vorm van ‘dokter’. Dit komt omdat het stereotype dokter in die samenleving een man is.

</details>

### Bias in menselijk denken
Dit zijn vooroordelen in het menselijk denken die steeds (systematisch) invloed hebben op de manier waarop iemand iets ziet, hoort, ruikt, proeft of voelt.

Menselijke bias kan invloed hebben op de:

- verzamelde data
- manier waarop je het algoritme optimaliseert
- besluiten die je neemt op basis van het algoritme

Voorbeelden:

<details>
<summary>Automatiseringsbias</summary>

Mensen maken een denkfout omdat zij de voorkeur geven aan adviezen van automatische besluitvormingssystemen. Zelfs als uit andere informatie blijkt dat deze adviezen niet kloppen.

Wanneer behandelaren handmatig controleren of een uitkering van een burger klopt, hebben zij vaak de neiging om de beslissing te volgen van het algoritme. 

</details>

<details>
<summary>Cognitieve bias</summary>

Mensen maken een denkfout omdat zij volgens een vast patroon afwijken van logisch nadenken. Vaak gebeurt dit om complexe denktaken te versimpelen of versnellen.

Administratief medewerkers weigeren bijvoorbeeld een AI-systeem te gebruiken, omdat ze slechte ervaringen hebben met een ander AI-systeem. Zij willen het nieuwe AI-systeem dus niet gebruiken, terwijl ze dit nooit gebruikt hebben.

</details>

<details>
<summary>Bevestigingsbias</summary>

Mensen maken een denkfout omdat zij de voorkeur geven aan voorspellingen van algoritmes die hun eigen overtuigingen of gedachtes bevestigen.

Rechercheurs zoeken bijvoorbeeld direct naar bewijs om verdachte X te veroordelen, nadat een algoritme X voorspelt als dader. Terwijl de rechercheurs ook ander bewijs moeten zoeken.

</details>

<details>
<summary>Implementatie-bias</summary>

Een algoritme wordt op een andere manier gebruikt dan hoe het bedoeld is en waarvoor het ontwikkeld is. Dit komt vaak voor wanneer een algoritme wordt gebruikt als beslishulp voor mensen. erkt niet goed door de menselijke denkfout dat gebruikers op dezelfde manier omgaan met adviezen. Terwijl gebruikers verschillend omgaan met adviezen. Hierdoor is het algoritme niet goed getest tijdens de implementatiefase.

Een wet over bijvoorbeeld immigratie wordt ingevoerd en er wordt een algoritme ontwikkeld om te onderzoeken wat de gevolgen hiervan zijn. Dit algoritme is dan ook bedoeld om voor bepaalde groepen mensen te kijken wat de gevolgen zijn. Het algoritme wordt ook gebruikt bij het toekennen van staatsburgerschap aan de hand van de gevolgen. Dit is niet zoals het systeem bedoeld is en dus kunnen er incomplete antwoorden of resultaten uitkomen.

</details>

<details>
<summary>Overlevingsbias (survivorship bias)</summary>
Mensen hebben de neiging om voorkeur te geven aan dingen, mensen of observaties die door een bepaalde selectie zijn gekomen. Naar de gevallen die buiten de selecties vallen wordt vaak niet of minder gekeken. Dit kan leiden tot een zichzelf versterkend proces.  Zo worden bijvoorbeeld modellen die werken verbeterd, maar wordt niet gekeken waarom de andere modellen niet werken.

Om fraudeherkenning te vergemakkelijken wordt bijvoorbeeld een model getraind op data van personen/huishoudens die eerder zijn gecontroleerd op mogelijke fraude. Hiermee wordt een groot gedeelte personen/huishoudens niet meegenomen in de trainingsdata, omdat deze groep niet eerder gecontroleerd is. 

</details>

## Bepaal wat eerlijk en rechtvaardig is
Ontdek je bias, dan wil je je algoritme of je aanpak verbeteren. Hoe je dat doet, hangt af van wat je organisatie zelf eerlijk en rechtvaardig vindt. Dit heet ook wel het bepalen van ‘algoritmische fairness’.  

## Let altijd op discriminerende effecten
Het risico op bias en discriminatie blijft altijd bestaan. Je kunt dit niet in 1 keer wegnemen. 

Houd daarom rekening met bias tijdens het ontwikkelen, inkopen en gebruiken van algoritmes. En controleer voortdurend of je algoritmes en je aanpak nog eerlijk en rechtvaardig zijn. Let hierop in alle fasen van de levenscyclus van het algoritme.
    
## Vereisten { data-search-exclude }

<!-- list_vereisten onderwerp/bias-en-non-discriminatie no-search no-onderwerp no-rol no-levenscyclus -->

## Aanbevolen maatregelen { data-search-exclude }

<!-- list_maatregelen onderwerp/bias-en-non-discriminatie no-search no-onderwerp no-rol no-levenscyclus -->

## Aanbevolen hulpmiddelen

<!-- list_hulpmiddelen onderwerp/bias-en-non-discriminatie no-search no-onderwerp no-rol no-levenscyclus no-id -->

## Help ons deze pagina te verbeteren
Deel je idee, suggestie of opmerking via [GitHub](https://github.com/MinBZK/Algoritmekader/edit/main/docs/rollen/index.md) of mail ons via [algoritmes@minbzk.nl](mailto:algoritmes@minbzk.nl).
