---
title: Bias en non-discriminatie
---

!!! info "Disclaimer"

    Het Algoritmekader is nog volop in ontwikkeling. Op deze plek willen we vooral aan de slag gaan op een open en transparante wijze. Het is dus niet definitief. Dat betekent dat er dingen opstaan die niet af zijn en soms zelfs fout. Mocht er iets niet kloppen, laat het ons weten via [GitHub](https://github.com/MinBZK/Algoritmekader).

Algoritmes worden binnen de overheid veelvuldig ingezet om publieke taken uit te voeren. Dit biedt veel kansen, maar er zijn ook risico's aan verbonden.
Hoewel algoritmes in sommige gevallen kunnen bijdragen aan het tegengaan van discriminatie, kan bias[^1] in het algoritme ook leiden tot een ongelijke en oneerlijke behandeling van burgers of groepen, en kan er ook sprake zijn van discriminerende effecten.
In dit bouwblok van het algoritmekader besteden we aandacht aan de onderwerpen bias, eerlijkheid en non-discriminatie.
We werken uit wat bias is, hoe bias kan ontstaan, hoe we dit kunnen signaleren, welke maatregelen er genomen kunnen worden om dit te voorkomen en geven we handvatten wat te doen wanneer een (onwenselijke) bias is gesignaleerd.

Hierbij is het goed om op te merken dat het omgaan met het thema bias gedurende het ontwikkelen, inkopen of gebruik van het algoritme vraagt om continue aandacht voor dit onderwerp.
Het betreft geen probleem dat eenmalig kan worden weggenomen, maar het vraagt voortdurende reflectie op eerlijkheid en rechtvaardigheid van het systeem.

[^1]: In het Nederlands vertaald als vooringenomenheid, vooroordeel of neiging

Dit bouwblok wordt uitgewerkt in vereisten die weergeven wat er vanuit wet- en regelgeving en bestaande toetsingskaders vereist is om bias en discriminatie tegen te gaan.
Daarbij worden er suggesties gedaan hoe deze vereisten kunnen worden nageleefd met concrete maatregelen, en welke actoren daarbij betrokken kunnen zijn.
Waar mogelijk worden concrete voorbeelden en best practices uit de praktijk gegeven en zal worden aangegeven bij welk type algoritmen of AI dit relevant is.
Deze vereisten en maatregelen worden ook gekoppeld aan de algoritme levenscyclus.
Dit geeft een beeld van wanneer bepaalde vereisten of maatregelen, bij het ontwikkelen van algoritmen en AI, moeten worden geadresseerd.

Door bij de ontwikkeling van algoritmes rekening te houden met vereisten die voorkomen uit wet- en regelgeving, het type algoritme of AI en de potentiële risico’s die ontstaan bij het gebruiken ervan, kunnen negatieve gevolgen worden voorkomen.

De onderwerpen bias en non-discriminatie spelen daarom een belangrijke rol bij de totstandkoming van verantwoord ontwikkelde algoritmen en AI en het gebruik daarvan door ambtenaren.

## Aanbevelingen

[Rathenau](https://www.rathenau.nl/nl/digitalisering/algoritmes-afwegen)

- Geef als uitvoeringsorganisatie meer inzicht in hoe biastoetsing plaatsvindt
- Zet een nationaal kennisplatform voor biastoetsing op waar expertise kan worden ontwikkeld en gedeeld. Bepaal welke mate van standaardisatie gewenst is en of wettelijke eisen nodig zijn.

[ADR](https://open.overheid.nl/documenten/7052294a-e70a-4084-88da-d09ae5f202cb/file)

- Plaats de handreiking in een kader in relatie tot andere instrumenten
- Overweeg een risicogerichte benadering voor de toepassing van de handreiking
- Werk aan het vergroten van bewustzijn voor algoritmen en (data-)ethiek in de organisatie
- Zorg voor duidelijkheid in taken en verantwoordelijkheden van verschillende betrokkenen
- Beleg verantwoordelijkheid voor de handreiking en borg de (blijvende) aandacht ervoor
- Verplichte toepassing van de handreiking kan bestaande initiatieven tenietdoen

[Toetsingskader ADR](https://open.overheid.nl/documenten/61b54381-d331-40ed-8fce-b2883b195f25/file)

- De definitie van de verschillende groepen en de gewenste prestatie van het model voor deze groepen zijn opgenomen in de functionele eisen.
- De mate van geaccepteerde bias in de uitkomst is opgenomen in de functionele eisen en uitgewerkt in meetbare prestatiecriteria.
- De methoden om bias te voorkomen, detecteren en corrigeren zijn vastgelegd.
- De mate van bias in de data, dataverzameling en het model zijn in kaart gebracht.
- Tijdens de ontwikkeling van het model is beoordeeld of er een verschil bestaat tussen de prestatie van het model tussen verschillende subgroepen. De prestatiemetrieken afleidbaar uit de confusionmatrix zijn vergeleken voor deze subgroepen.
- De uitkomstbias van productiedata is beoordeeld voor de verschillende subgroepen en voldoet aan de prestatiecriteria.
- Bij de geconstateerde bias is beoordeeld of deze op discriminatie duidt.

[College voor de Rechten van de Mens](https://publicaties.mensenrechten.nl/publicatie/61a734e65d726f72c45f9dce) (Richtlijnen)

- Overheidsinstanties mogen bij opsporings- en handhavingsbevoegdheden, met het oog op effectiviteit, efficiëntie en kostenbesparing, gebruik maken van risicoprofielen. Binnen deze risicoprofielen mogen ervaringsgegevens die tot een bepaalde vooronderstelling leiden een rol spelen, tenzij dit leidt tot discriminatie op grond van ras of nationaliteit
- Risicoprofielen die uitsluitend of in doorslaggevende mate gebaseerd zijn op ras (waaronder etniciteit en afkomst) zijn in strijd met het discriminatieverbod;
- Risicoprofielen die zich richten op één bepaalde afkomst of nationaliteit hebben een stigmatiserend effect en zijn daarom strijdig met het discriminatieverbod;
- Risicoprofielen die uitsluitend gebaseerd zijn op nationaliteit zijn zeer moeilijk te rechtvaardigen;
- Risicoprofielen waarin ras of nationaliteit mede een rol speelt, kunnen slechts gerechtvaardigd worden door zeer zwaarwegende redenen;
- Het gebruik van ras of nationaliteit als selectiecriterium binnen een risicoprofiel is nooit toegestaan als er geen objectieve relatie kan worden aangetoond tussen dit selectiecriterium en het legitieme doel van het profiel;
- In alle gevallen moeten de selectiecriteria binnen een risicoprofiel samen voldoende relevant en objectief (geschikt) zijn om op een effectieve wijze bij te dragen aan de verwezenlijking van het nagestreefde legitieme doel;
- Het gebruik van ras of nationaliteit als selectiecriterium binnen een risicoprofiel moet daarnaast noodzakelijk zijn om het gewenste doel tebereiken.
- Selectiebeslissingen moeten te allen tijde uitlegbaar zijn.

## Mogelijke hulpmiddelen en methoden

- [Fairness Handbook](https://amsterdamintelligence.com/resources/the-fairness-handbook)
