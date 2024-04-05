---
title: Bias en non-discriminatie
---

!!! info "Disclaimer"

    Het Algoritmekader is nog volop in ontwikkeling. Op deze plek willen we vooral aan de slag gaan op een open en transparante wijze. Het is dus niet definitief. Dat betekent dat er dingen opstaan die niet af zijn en soms zelfs fout. Mocht er iets niet kloppen, laat het ons weten via [GitHub](https://github.com/MinBZK/Algoritmekader).

## Wat en waarom?
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

### Wat is bias?
*Bias* is een Engelse term die in het Nederlands wordt vertaald als vooringenomenheid, vooroordeel of neiging. 
Omdat niet één van die termen helemaal de lading van het begrip *bias* dekt, maken we in het Algoritmekader gebruik van de term *bias*. 
De term *bias* heeft verschillende betekenissen afhankelijk van de context waarin het gebruikt wordt en de disciplines die daarbij betrokken zijn. 
Vaak wordt er naar bias gekeken als een technisch concept, maar het omvat daarnaast ook menselijke aspecten. 
Om beter de verschillende betekennissen van het begrip *bias* te begrijpen, maken we onderscheid in drie verschillende aspecten van bias: statistische bias, systemische bias en menselijke bias.

#### Statistische bias
Statistische bias wordt gedefinieerd als *een consistente numerieke afwijking van een schatting ten opzichte van de werkelijke onderliggende waarde*. 
Dit fenomeen kan in allerlei verschillende contexten plaatsvinden, niet alleen bij het gebruik van algoritmes of AI. 
Een voorbeeld is wanneer een bepaalde meting van een waarde niet goed gekalibreerd is en er sprake is van een consistente afwijking van de te meten waarde (bijvoorbeeld dat we consistent 10% hoger meten). 
In de context van algoritmes en AI kan deze vorm van bias voorkomen wanneer er een steekproef wordt gebruikt die niet representatief is voor de populatie, en de schattingen op basis van de steekproef vervolgens systematisch afwijken van de werkelijke waarde in de gebruikte doelpopulatie.
Statistische bias duidt op een systematische fout die gemaakt wordt door het algoritme. 
Deze fout kan hetzelfde zijn voor alle groepen en hoeft daardoor niet in alle gevallen te duiden op ongelijke behandeling of discriminerende effecten. 
Voorbeelden van statistische bias zijn meetfouten (measurement bias), foute data of data op een te simpele manier representeren (representatie bias).

#### Systemische bias 
We spreken van systemische bias als er sprake is van een *systematisch verschil in behandeling van bepaalde objecten, mensen of groepen in vergelijking met anderen*[^2].
Dit systematische verschil of onderscheid kan zowel op een directe als op een indirecte manier ontstaan. 

> De [Algemene wet gelijke behandeling](https://wetten.overheid.nl/BWBR0006502/2020-01-01) spreekt van **direct onderscheid** wanneer *een persoon op een andere wijze wordt behandeld dan een ander in een vergelijkbare situatie wordt, is of zou worden behandeld, op grond van godsdienst, levensovertuiging, politieke gezindheid, ras, geslacht, nationaliteit, hetero- of homoseksuele gerichtheid of burgerlijke staat*.

> De [Algemene wet gelijke behandeling](https://wetten.overheid.nl/BWBR0006502/2020-01-01) spreekt van **indirect onderscheid** indien *een ogenschijnlijk neutrale bepaling, maatstaf of handelwijze personen met een bepaalde godsdienst, levensovertuiging, politieke gezindheid, ras, geslacht, nationaliteit, hetero- of homoseksuele gerichtheid of burgerlijke staat in vergelijking met andere personen bijzonder treft*. 

[^2]: Zie [ISO/IEC TR 24027:2021 en](https://www.nen.nl/iso-iec-tr-24027-2021-en-289193) [^3]

Een geconstateerd systematische onderscheid is niet altijd fout en is niet altijd verboden. 
Het geconstateerde onderscheid kan in bepaalde situaties en onder bepaalde voorwaarden gerechtvaardigd zijn. 
Voor direct onderscheid kan er bijvoorbeeld sprake zijn van een wettelijke uitzondering die het gemaakte onderscheid toelaat. 
Voor indirect onderscheid geldt dat behalve een wettelijke uitzondering er ook een objectieve rechtvaardiging kan bestaan, waarmee het geconstateerde onderscheid in bepaalde gevallen toelaatbaar kan zijn. 

Het maken van een eventueel onderscheid is in sommige gevallen nauw verbonden met het gebruik van algoritmes en AI. 
Soms worden algoritmes en AI bijvoorbeeld juist ingezet om op een zo objectief mogelijke manier te bepalen welke groepen meer of minder belang hebben bij een andere behandeling. 
In deze gevallen zal er altijd na moeten worden gegaan of er sprake is van een objectieve rechtvaardiging voor het gemaakte onderscheid.

In de context van algoritmes en AI wordt de term *unfairness* gebruikt wanneer er sprake is van een ongerechtvaardigd onderscheid die bepaalde groepen meer bevoordeelt dan andere [^5]. 
In de Nederlandse taal spreken we dan van oneerlijkheid of onrechtvaardigheid (of in positieve zin van respectievelijk fairness, eerlijkheid en rechtvaardigheid). 
Oneerlijk gedrag van algoritmes en AI-systemen kan leiden tot het niet naleven van gevestigde overtuigingen en normen, wat voorkeursbehandeling en discriminatie in de hand kan werken. 

[^5]: Zie [NEN-EN-ISO/IEC 22989:2023 en](https://www.nen.nl/nen-en-iso-iec-22989-2023-en-312642) [^3] 

Ongerechtvaardigde systemische bias is vaak een gevolg van bepaalde processen of systemen die gebruikt worden op zo'n wijze dat bepaalde groepen bevoordeeld worden en andere groepen benadeeld worden.
Dit is vaak geen bewuste vorm van vooringenomenheid, maar kan bijvoorbeeld ontstaan doordat de meerderheid bestaande regels of normen volgt, en het systeem geoptimaliseerd is op de meerderheid.

#### Menselijke bias 
Menselijke bias omvat de systematische fouten in het menselijk denken. 
Deze menselijke vooroordelen zijn vaak impliciet van aard en hebben betrekking op de manier waarop een individu bepaalde informatie waarneemt en verwerkt om bijvoorbeeld een beslissing te nemen. 
In de context van algoritmes kan deze vorm van bias invloed hebben op hoe data wordt verzameld, op de wijze waarop het algoritme wordt geoptimaliseerd en de besluiten die door mensen worden genomen op basis van het algoritme.
Voorbeelden van vormen menselijke bias is wanneer er voorkeur wordt geven aan de voorspellingen van een algoritme die reeds bestaande overtuigingen bevestigen (confirmation bias/bevestigingsbias), of wanneer mensen de neiging hebben om voorkeur te geven aan suggesties die door het algoritme worden gedaan (automatiseringsbias)

## Gebruikte definities
Onderstaand bieden we een overzicht van de gebruikte definities in het algoritmekader die betrekking hebben op het onderwerp bias en non-discriminatie. 

| Term of begrip                   | Definitie                                                                                                                                                                                                                                                                                                            | Bron                                                                                                                                                                                      |
|----------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| systemische bias | systematisch verschil in behandeling van bepaalde objecten, mensen of groepen in vergelijking met andere.                                                                                                                                                                                                            | [ISO/IEC TR 24027:2021 en](https://www.nen.nl/iso-iec-tr-24027-2021-en-289193) [^3]                                                                                                       |
| directe discriminatie            | de ongelijke behandeling van een persoon of groep personen ten opzichte van andere personen in een vergelijkbare situatie, op grond van een beschermd persoonskenmerk (discriminatiegrond).                                                                                                                          | [College voor de rechten van de mens, Discriminatie door risicoprofielen - een mensenrechtelijk toetsingskader](https://publicaties.mensenrechten.nl/publicatie/61a734e65d726f72c45f9dce) |
| indirecte discriminatie          | wanneer een ogenschijnlijk neutrale bepaling, maatstaf of handelwijze personen met een bepaald beschermd persoonskenmerk (discriminatiegrond) in vergelijking met andere personen in het bijzonder benadeelt, tenzij hiervoor een objectieve rechtvaardiging bestaat.                                                | [College voor de rechten van de mens, Discriminatie door risicoprofielen - een mensenrechtelijk toetsingskader](https://publicaties.mensenrechten.nl/publicatie/61a734e65d726f72c45f9dce) |
| direct onderscheid               | indien een persoon op een andere wijze wordt behandeld dan een ander in een vergelijkbare situatie wordt, is of zou worden behandeld, op grond van godsdienst, levensovertuiging, politieke gezindheid, ras, geslacht, nationaliteit, hetero- of homoseksuele gerichtheid of burgerlijke staat                       | [Algemene wet gelijke behandeling](https://wetten.overheid.nl/BWBR0006502/2020-01-01)                                                                                                     |
| indirect onderscheid             | indien een ogenschijnlijk neutrale bepaling, maatstaf of handelwijze personen met een bepaalde godsdienst, levensovertuiging, politieke gezindheid, ras, geslacht, nationaliteit, hetero- of homoseksuele gerichtheid of burgerlijke staat in vergelijking met andere personen bijzonder treft.                      | [Algemene wet gelijke behandeling](https://wetten.overheid.nl/BWBR0006502/2020-01-01)                                                                                                     |
| algoritmische fairness           | het vakgebied dat bestudeert hoe algoritmische systemen zich moeten gedragen om mensen eerlijk te behandelen, dat wil zeggen zonder discriminatie op grond van beschermde gevoelige kenmerken zoals leeftijd, geslacht, handicap, etnische of raciale afkomst, religie of geloofsovertuiging, of seksuele geaardheid | [The fairness handbook](https://openresearch.amsterdam/en/media/inline/2022/7/14/fairness_handbook.pdf)                                                                                   |
| ground truth (NL vertaling?)     | waarde van de doelvariabele voor een bepaald item van gelabelde invoergegevens. [^4]                                                                                                                                                                                                                                 | [NEN-EN-ISO/IEC 22989:2023 en](https://www.nen.nl/nen-en-iso-iec-22989-2023-en-312642) [^3]                                                                                               |
| etnisch profileren               | Het gebruik door overheidsinstanties van selectiecriteria als ras, huidskleur, taal, religie, nationaliteit of nationale of etnische afkomst bij de uitoefening van toezichts-, handhavings- en opsporingsbevoegdheden, zonder dat daarvoor een objectieve en redelijke rechtvaardiging bestaat.                     | [College voor de rechten van de mens, Discriminatie door risicoprofielen - een mensenrechtelijk toetsingskader](https://publicaties.mensenrechten.nl/publicatie/61a734e65d726f72c45f9dce) |
| discriminatiegrond               | Beschermde persoonskenmerken op basis waarvan het maken van onderscheid tussen personen verboden is. Bijvoorbeeld: ras, nationaliteit, religie, geslacht, seksuele gerichtheid, handicap of chronische ziekte                                                                                                        | [College voor de rechten van de mens, Discriminatie door risicoprofielen - een mensenrechtelijk toetsingskader](https://publicaties.mensenrechten.nl/publicatie/61a734e65d726f72c45f9dce) |
| risicoprofiel                    | Een verzameling van één of meer selectiecriteria op basis waarvan een bepaald risico op normovertreding wordt ingeschat en een selectiebeslissing wordt gemaakt.                                                                                                                                                     | [College voor de rechten van de mens, Discriminatie door risicoprofielen - een mensenrechtelijk toetsingskader](https://publicaties.mensenrechten.nl/publicatie/61a734e65d726f72c45f9dce) |
| groep                            | deelverzameling van objecten in een domein die zijn gekoppeld omdat ze gemeenschappelijke kenmerken hebben.                                                                                                                                                                                                          | [ISO/IEC TR 24027:2021 en](https://www.nen.nl/iso-iec-tr-24027-2021-en-289193) [^3]                                                                                                       |

[^3]: Hoewel het gebruik van de NEN-ISO-normen in het Algoritmekader auteursrechtelijk is beschermd, heeft het Nederlands Normalisatie Instituut (NEN) voor het gebruik in het Algoritmekader toestemming verleend. Zie [nen.nl](https://www.nen.nl/) voor meer informatie over NEN en het gebruik van hun producten.
[^4]: De term ground truth impliceert niet dat de gelabelde invoergegevens consistent overeenkomen met de werkelijke waarde van de doelvariabelen.

Omdat bias op verschillende manieren kan ontstaan, zijn er allerlei verschillende vormen van bias, die hieronder gedefinieerd worden. Deze lijst is niet uitputtend. 

| Begrip                     | Definitie                                                                                                                                                                                                                                                                                                                                                                                                          | Bron                                                                                                                                                                                              |
|----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| automatiseringsbias        | de neiging van mensen om de voorkeur te geven aan suggesties van geautomatiseerde besluitvormingssystemen en om tegenstrijdige informatie te negeren die zonder automatisering is verkregen, zelfs als deze correct is                                                                                                                                                                                             | [ISO/IEC TR 24027:2021 en](https://www.nen.nl/iso-iec-tr-24027-2021-en-289193) [^3]                                                                                                               |
| menselijke cognitieve bias | bias die optreedt wanneer mensen informatie verwerken en interpreteren.                                                                                                                                                                                                                                                                                                                                            | [ISO/IEC TR 24027:2021 en](https://www.nen.nl/iso-iec-tr-24027-2021-en-289193) [^3]                                                                                                               |
| bevestigingsbias           | soort menselijke cognitieve bias die de voorkeur geeft aan voorspellingen van AI-systemen die reeds bestaande overtuigingen of hypotheses bevestigen                                                                                                                                                                                                                                                               | [ISO/IEC TR 24027:2021 en](https://www.nen.nl/iso-iec-tr-24027-2021-en-289193) [^3]                                                                                                               |
| data bias                  | dataeigenschappen die, als ze niet worden aangepakt, leiden tot AI-systemen die beter of slechter presteren voor verschillende groepen                                                                                                                                                                                                                                                                             | [ISO/IEC TR 24027:2021 en](https://www.nen.nl/iso-iec-tr-24027-2021-en-289193) [^3]                                                                                                               |
| statistische bias          | soort consistente numerieke afwijking in een schatting ten opzichte van de werkelijke onderliggende waarde, inherent aan de meeste schattingen                                                                                                                                                                                                                                                                     | [ISO/IEC TR 24027:2021 en](https://www.nen.nl/iso-iec-tr-24027-2021-en-289193) [^3]                                                                                                               |
| historische bias           | Verwijzend naar de langdurige vooroordelen die in de loop der tijd in de samenleving zijn gecodeerd. Verwant aan, maar verschillend van, vooroordelen in historische beschrijving, of de interpretatie, analyse en verklaring van de geschiedenis. Een veel voorkomend voorbeeld van historische vooringenomenheid is de neiging om de wereld te bekijken vanuit een Westers of Europees perspectief               | [NIST, Towards a Standard for identifying and managing bias in artificial intelligence](https://www.nist.gov/publications/towards-standard-identifying-and-managing-bias-artificial-intelligence) |
| activiteitenbias           | Een soort selectievooroordeel dat optreedt wanneer systemen/platforms hun trainingsgegevens krijgen van de meest actieve gebruikers, in plaats van minder actieve (of inactieve) gebruikers.                                                                                                                                                                                                                       | [NIST, Towards a Standard for identifying and managing bias in artificial intelligence](https://www.nist.gov/publications/towards-standard-identifying-and-managing-bias-artificial-intelligence) |
| versterkingsbias           | Ontstaat wanneer de verdeling over voorspellingsoutputs scheef is in vergelijking met de prior-verdeling van het voorspellingsdoel.                                                                                                                                                                                                                                                                                | [NIST, Towards a Standard for identifying and managing bias in artificial intelligence](https://www.nist.gov/publications/towards-standard-identifying-and-managing-bias-artificial-intelligence) |
| cognitieve bias            | Een brede term die in het algemeen verwijst naar een systematisch patroon van afwijking van rationele oordeels- en besluitvorming. In vele decennia van onderzoek naar oordeelsvorming en besluitvorming is een grote verscheidenheid aan cognitieve vertekeningen geïdentificeerd, waarvan sommige adaptieve mentale snelkoppelingen zijn die bekend staan als heuristieken.                                      | [NIST, Towards a Standard for identifying and managing bias in artificial intelligence](https://www.nist.gov/publications/towards-standard-identifying-and-managing-bias-artificial-intelligence) |
| verankeringsbias           | Een cognitieve bias, de invloed van een bepaald referentiepunt of anker op de beslissingen van mensen. Vaak vollediger aangeduid als anchoring-and-adjustment, of anchoring-and-adjusting: nadat een anker is vastgesteld, passen mensen zich onvoldoende aan vanuit dat ankerpunt om tot een definitief antwoord te komen. Beslissers zijn bevooroordeeld ten opzichte van een aanvankelijk gepresenteerde waarde | [NIST, Towards a Standard for identifying and managing bias in artificial intelligence](https://www.nist.gov/publications/towards-standard-identifying-and-managing-bias-artificial-intelligence) |
| gedragsbias                | systematische verstoringen in gebruikersgedrag tussen platforms of contexten, of tussen gebruikers die zijn vertegenwoordigd in verschillende datasets                                                                                                                                                                                                                                                             | [NIST, Towards a Standard for identifying and managing bias in artificial intelligence](https://www.nist.gov/publications/towards-standard-identifying-and-managing-bias-artificial-intelligence) |
| implementatie bias         | Ontstaat wanneer systemen worden gebruikt als beslissingshulp voor mensen, omdat de menselijke tussenpersoon kan handelen op voorspellingen op manieren die meestal niet zijn gemodelleerd in het systeem. Het zijn echter nog steeds individuen die het gebruikte systeem gebruiken                                                                                                                               | [NIST, Towards a Standard for identifying and managing bias in artificial intelligence](https://www.nist.gov/publications/towards-standard-identifying-and-managing-bias-artificial-intelligence) |
| evaluatie bias             | Ontstaat wanneer de test- of externe benchmarkpopulaties niet in gelijke mate de verschillende delen van de gebruikerspopulatie vertegenwoordigen of door het gebruik van prestatiemaatstaven die niet geschikt zijn voor de manier waarop het model zal worden gebruikt                                                                                                                                           | [NIST, Towards a Standard for identifying and managing bias in artificial intelligence](https://www.nist.gov/publications/towards-standard-identifying-and-managing-bias-artificial-intelligence) |
| meetbias                   | Ontstaat wanneer kenmerken en labels benaderingen zijn voor gewenste grootheden, waarbij mogelijk belangrijke factoren worden weggelaten of groeps- of ingangsafhankelijke ruis wordt geïntroduceerd die leidt tot differentiële prestaties.                                                                                                                                                                       | [NIST, Towards a Standard for identifying and managing bias in artificial intelligence](https://www.nist.gov/publications/towards-standard-identifying-and-managing-bias-artificial-intelligence) |
| representatie bias         | Ontstaat doordat subgroepen niet willekeurig worden geselecteerd in een steekproef, waardoor trends die voor één populatie worden geschat, niet generaliseerbaar zijn naar gegevens van een nieuwe populatie                                                                                                                                                                                                       | [NIST, Towards a Standard for identifying and managing bias in artificial intelligence](https://www.nist.gov/publications/towards-standard-identifying-and-managing-bias-artificial-intelligence) |



### Omstreden variabelen

#### Bijzondere persoonsgegevens
De [AVG](https://www.autoriteitpersoonsgegevens.nl/themas/basis-avg/privacy-en-persoonsgegevens/wat-zijn-persoonsgegevens) ziet deze persoonsgegevens als bijzondere persoonsgegevens:

- persoonsgegevens waaruit iemands ras of etnische afkomst blijkt;
- persoonsgegevens waaruit iemands politieke opvattingen blijken;
- persoonsgegevens waaruit iemands religieuze of levensbeschouwelijke overtuigingen blijken;
- persoonsgegevens waaruit het lidmaatschap van een vakbond blijkt;
- gegevens over iemands gezondheid;
- gegevens over iemands seksueel gedrag of seksuele gerichtheid;
- genetische gegevens;
- biometrische gegevens (bedoeld voor de unieke identificatie van een persoon).

#### Beschermde persoonsgegevens

[The fairness handbook](https://openresearch.amsterdam/en/media/inline/2022/7/14/fairness_handbook.pdf)  definieert de volgende lijst van beschermde persoonsgegevens (protected attributes):
- Migration Background
- Nationality
- Race
- Ethnicity
- Country of Birth
- Gender
- Sex
- Sexual Orientation
- Religion
- Age
- Pregnancy
- Civil Status
- Socioeconomic Class
- Income
- Skin Colour
- Language
- Political Views
- Health
- Disability status
- Biometrics

## Bias en non-discriminatie ten opzichte van de levenscyclus

| **Fase levenscyclus**                                                                                 | **Relevant ja/nee** | **Toelichting** |
|-------------------------------------------------------------------------------------------------------|:-------------------:|-----------------|
| [Probleemanalyse](../../levenscyclus/probleemanalyse.md)                                              |                     |                 |
| [Ontwerp](../../levenscyclus/ontwerp.md)                                                              |                     |                 |
| [Data verkennen en data preparatie](../../levenscyclus/data%20verkenning%20en%20data%20preparatie.md) |                     |                 |
| [Ontwikkelen](../../levenscyclus/ontwikkelen.md)                                                      |                     |                 |
| [Validatie](../../levenscyclus/validatie.md)                                                          |                     |                 |
| [Implementatie](../../levenscyclus/implementatie.md)                                                  |                     |                 |
| [Monitoren](../../levenscyclus/monitoren.md)                                                          |                     |                 |
| [Archiveren](../../levenscyclus/archiveren.md)                                                        |                     |

Per fase van de levenscyclus lichten we toe welke vormen van bias kunnen onstaan.

### Probleemanalyse
### Ontwerp
### Data verkennen en data preparatie
### Ontwikkelen
### Validatie
### Implementatie
### Monitoren
### Archiveren

## Vereisten

Onderstaand een overzicht van de minimale vereisten die volgen uit geldende wet- en regelgeving, toetingskaders en andere bronnen

=== "Laag risico" 

    | **Norm**                          | **Uitleg**                               | **Bron** |
    |-----------------------------------|------------------------------------------|----------|
    | Verbod op ongelijke behandeling in gelijke omstandigheden. Discriminatie wegens godsdienst, levensovertuiging, politieke gezindheid, ras, geslacht of op welke grond dan ook, is niet toegestaan    | Korte uitleg over norm 1                |          | IKA1.0
 
=== "Hoog risico"

    | **Norm**                          | **Uitleg**                               | **Bron** |
    |-----------------------------------|------------------------------------------|----------|
    | Verbod op ongelijke behandeling in gelijke omstandigheden. Discriminatie wegens godsdienst, levensovertuiging, politieke gezindheid, ras, geslacht of op welke grond dan ook, is niet toegestaan    | Korte uitleg over norm 1                |          | IKA1.0



## Rollen
Overzicht van welke rollen belangrijk zijn te betrekken bij dit bouwblok. 

<div class="grid cards" markdown>

- __technische expert__ bron: handreiking non-discriminatie by design
- __projectleider__ bron: handreiking non-discriminatie by design
- __jurist__ bron: handreiking non-discriminatie by design
- __functionaris gegevensbescherming__ bron: handreiking non-discriminatie by design
- __relevante stakeholders__ bron: handreiking non-discriminatie by design
- __domein expert__ bron: handreiking non-discriminatie by design
- __data steward__ bron: handreiking non-discriminatie by design
- __data analist__ bron: handreiking non-discriminatie by design
- __beleid__ bron: evaluatie handreiking non-discriminatie by design door ADR

</div>

## Aanbevelingen
[Rathenau](https://www.rathenau.nl/nl/digitalisering/algoritmes-afwegen)

* Geef als uitvoeringsorganisatie meer inzicht in hoe biastoetsing plaatsvindt 
* Zet een nationaal kennisplatform voor biastoetsing op waar expertise kan worden ontwikkeld en gedeeld. Bepaal welke mate van standaardisatie gewenst is en of wettelijke eisen nodig zijn.

[ADR](https://open.overheid.nl/documenten/7052294a-e70a-4084-88da-d09ae5f202cb/file)

* Plaats de handreiking in een kader in relatie tot andere instrumenten 
* Overweeg een risicogerichte benadering voor de toepassing van de handreiking 
* Werk aan het vergroten van bewustzijn voor algoritmen en (data-)ethiek in de organisatie 
* Zorg voor duidelijkheid in taken en verantwoordelijkheden van verschillende betrokkenen 
* Beleg verantwoordelijkheid voor de handreiking en borg de (blijvende) aandacht ervoor 
* Verplichte toepassing van de handreiking kan bestaande initiatieven tenietdoen 

[Toetsingskader ADR](https://open.overheid.nl/documenten/61b54381-d331-40ed-8fce-b2883b195f25/file)

* De definitie van de verschillende groepen en de gewenste prestatie van het model voor deze groepen zijn opgenomen in de functionele eisen.
* De mate van geaccepteerde bias in de uitkomst is opgenomen in de functionele eisen en uitgewerkt in meetbare prestatiecriteria.
* De methoden om bias te voorkomen, detecteren en corrigeren zijn vastgelegd.
* De mate van bias in de data, dataverzameling en het model zijn in kaart gebracht.
* Tijdens de ontwikkeling van het model is beoordeeld of er een verschil bestaat tussen de prestatie van het model tussen verschillende subgroepen. De prestatiemetrieken afleidbaar uit de confusionmatrix zijn vergeleken voor deze subgroepen.
* De uitkomstbias van productiedata is beoordeeld voor de verschillende subgroepen en voldoet aan de prestatiecriteria.
* Bij de geconstateerde bias is beoordeeld of deze op discriminatie duidt.

[College voor de Rechten van de Mens](https://publicaties.mensenrechten.nl/publicatie/61a734e65d726f72c45f9dce) (Richtlijnen)

* Overheidsinstanties mogen bij opsporings- en handhavingsbevoegdheden, met het oog op effectiviteit, efficiëntie en kostenbesparing, gebruik maken van risicoprofielen. Binnen deze risicoprofielen mogen ervaringsgegevens die tot een bepaalde vooronderstelling leiden een rol spelen, tenzij dit leidt tot discriminatie op grond van ras of nationaliteit
* Risicoprofielen die uitsluitend of in doorslaggevende mate gebaseerd zijn op ras (waaronder etniciteit en afkomst) zijn in strijd met het discriminatieverbod;
* Risicoprofielen die zich richten op één bepaalde afkomst of nationaliteit hebben een stigmatiserend effect en zijn daarom strijdig met het discriminatieverbod;
* Risicoprofielen die uitsluitend gebaseerd zijn op nationaliteit zijn zeer moeilijk te rechtvaardigen;
* Risicoprofielen waarin ras of nationaliteit mede een rol speelt, kunnen slechts gerechtvaardigd worden door zeer zwaarwegende redenen;
* Het gebruik van ras of nationaliteit als selectiecriterium binnen een risicoprofiel is nooit toegestaan als er geen objectieve relatie kan worden aangetoond tussen dit selectiecriterium en het legitieme doel van het profiel;
* In alle gevallen moeten de selectiecriteria  binnen een risicoprofiel samen voldoende relevant en objectief (geschikt) zijn om op een effectieve wijze bij te dragen aan de verwezenlijking van het nagestreefde legitieme doel;
* Het gebruik van ras of nationaliteit als selectiecriterium binnen een risicoprofiel moet daarnaast noodzakelijk zijn om het gewenste doel tebereiken.
* Selectiebeslissingen moeten te allen tijde uitlegbaar zijn.
  
## Mogelijke hulpmiddelen en methoden
* [Fairness Handbook](https://amsterdamintelligence.com/resources/the-fairness-handbook)
* [Handreiking non-discriminatie-by-design](https://www.rijksoverheid.nl/documenten/rapporten/2021/06/10/handreiking-non-discriminatie-by-design)
* [College voor de rechten van de mens, Discriminatie door risicoprofielen - een mensenrechtelijk toetsingskader](https://publicaties.mensenrechten.nl/publicatie/61a734e65d726f72c45f9dce)
