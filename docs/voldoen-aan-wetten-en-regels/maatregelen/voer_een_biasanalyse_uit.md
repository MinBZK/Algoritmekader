---
title: Voer een biasanalyse uit
toelichting: Analyseer of het gebruik van het algoritme of het proces daaromheen leidt tot onwenselijke of onrechtmatige verschillen in de behandeling van individuen en/of groepen.  
vereiste:
- grw-02-non-discriminatie
- aia-29-beoordelen-gevolgen-grondrechten
- grw-01-fundamentele-rechten
levenscyclus:
- ontwerp
- verificatie-en-validatie
- monitoring-en-beheer
onderwerp:
- bias-en-non-discriminatie
rollen:
- ethicus
- data-scientist
- opdrachtgever
- projectleider
- jurist
- domeinspecialist
hide:
- navigation
---

<!-- tags -->

## Maatregel
Analyseer of het gebruik van het algoritme of het proces daaromheen leidt tot onwenselijke of onrechtmatige verschillen in de behandeling van individuen en/of groepen.  

## Toelichting
Het uitvoeren van een analyse over onwenselijke of onrechtmatige verschillen bestaat grofweg uit 3 stappen:

- [Stap 1](#stap-1-analyseer-of-er-sprake-is-van-bias): Analyseer of er sprake is van bias: *systematisch verschil in behandeling van bepaalde objecten, mensen of groepen in vergelijking met anderen.*
- [Stap 2](#stap-2-voer-een-rechtvaardigingstoets-uit): Voer een rechtvaardigingstoets uit om te bepalen of het geconstateerde verschil uit stap 1 te rechtvaardigen is. 
- [Stap 3](#stap-3-voer-een-ethische-wenselijkheidstoets-uit): Voer een ethische wenselijkheidstoets uit om te bepalen of het geconstateerde verschil uit stap 1 ethisch wenselijk is. 

Voor alle stappen geldt dat het belangrijk is om de gemaakte keuzes en afwegingen zorgvuldig te onderbouwen en te documenteren. De 3 stappen worden hieronder verder toegelicht. 

!!! note "Opmerking" 

    Deze maatregel is in ieder geval van toepassing op natuurlijke personen. Voor andere rechtspersonen zoals bedrijven kan dit ook van toepassing zijn. Denk bijvoorbeeld aan een gelijke behandeling tussen eenmanszaken en grotere bedrijven. 

### Stap 1: Analyseer of er sprake is van bias
In deze stap is het doel om te bepalen in welke mate er sprake is van een systematisch verschil in behandeling van bepaalde objecten, mensen of groepen in vergelijking met anderen. 
Dit verschil kan zowel op een [directe als een indirecte manier](../../onderwerpen/bias-en-non-discriminatie/index.md/#bias-in-algoritmische-context) ontstaan. 

#### Toetsen op direct onderscheid
Toetsen op direct onderscheid is in vergelijking tot toetsen op indirect onderscheid relatief eenvoudig. 

:material-arrow-right: Bepaal of de inputvariabelen die gebruikt worden leiden tot een direct onderscheid op basis van godsdienst, levensovertuiging, politieke gezindheid, ras, geslacht, nationaliteit, hetero- of homoseksuele gerichtheid[^1] of burgelijke staat. 

Het is niet mogelijk om een uitputtend overzicht te geven van alle selectiecriteria die mogelijk tot direct onderscheid op grond van ras of nationaliteit kunnen leiden. 
Wel zijn in de jurisprudentie verschillende voorbeelden en aanknopingspunten te vinden. 
Zo staat vast dat selectie op basis van fysieke etnische kenmerken, zoals huidskleur, direct onderscheid op grond van ras oplevert[^2].
Een ander voorbeeld is dat onderscheid op grond van een niet-westers klinkende naam direct onderscheid op grond van afkomst (en dus ras) oplevert[^3].

[^1]: Er is een wetsvoorstel om de term 'hetero- of homoseksuele gerichtheid' in de Algmemene wet gelijke behandeling (Awgb) te wijzigingen in 'seksuele gerichtheid'. Met deze wijziging sluit de Awgb aan bij een eerdere wijziging van artikel 1 van de Grondwet. 

[^2]: Zie [Discriminatie door risicoprofielen, een mensenrechtelijk toetsingskader, College voor de Rechten van de Mens](https://publicaties.mensenrechten.nl/publicatie/61a734e65d726f72c45f9dce)

[^3]: Zie [Discriminatie door risicoprofielen, een mensenrechtelijk toetsingskader, College voor de Rechten van de Mens](https://publicaties.mensenrechten.nl/publicatie/61a734e65d726f72c45f9dce), [College voor de Rechten van de Mens 7 juni 2021, oordeel 2021-70](https://oordelen.mensenrechten.nl/oordeel/2021-70); [College voor de Rechten van de Mens 23 april 2015, oordeel 2015-44](https://oordelen.mensenrechten.nl/oordeel/2015-44); [College voor de Rechten van de Mens 23 april 2015, oordeel 2014-0426](https://oordelen.mensenrechten.nl/oordeel/2015-43).

#### Toetsen op indirect onderscheid
Ook selectiecriteria die op het eerste gezicht geen enkele link lijken te hebben met een [discriminatiegrond](../../onderwerpen/bias-en-non-discriminatie/index.md#discriminatiegrond) kunnen leiden tot indirect onderscheid op grond van een discriminatiegrond. 
Enkele voorbeelden van zulke 'ogenschijnlijk neutrale' selectiecriteria die verband hebben met ras of nationaliteit zijn: postcode, hoogte van het inkomen, kenteken, familielid in het buitenland, laaggeletterdheid. 
Indirect onderscheid is in vergelijking met direct onderscheid lastiger op te signaleren en te voorkomen. 
Daarom is het belangrijk jouw algoritmische toepassing regelmatig te analyseren op eventueel indirect onderscheid. 
Het toetsen op indirect onderscheid bestaat uit 5 stappen:

1. **Bepaal wat de [kwetsbare groepen](../maatregelen/kwetsbare_groepen.md) zijn.**
Eventueel kan dit aangevuld worden op basis van de [discriminatiegronden](../../onderwerpen/bias-en-non-discriminatie/index.md#discriminatiegrond) uit non-discriminatie wetgeving. Of andere groepen waarvoor verschillen in behandeling ethisch onwenselijk zijn.

2. **Bepaal wat "verschillen in behandeling" betekent in de context van het algoritme.**
In deze stap is het belangrijk om voorafgaand aan de daadwerkelijke analyse met een [brede groep stakeholders](../maatregelen/betrek_belanghebbenden.md) te bepalen wat 'eerlijk' en 'rechtvaardig' wordt bevonden in de context van het betreffende algoritme. 
Er zijn veel verschillende manieren waarop je kan kijken naar onderscheid bij het gebruik van algoritmes. Voorbeelden van manieren waarop je naar onderscheid kan kijken zijn:

    - **Onderscheid op basis van gelijke uitkomsten (representatie)**. 
    De belangrijkste vraag die hier mee beantwoord wordt is: hebben personen uit verschillende groepen gelijke kans om geselecteerd te worden door het algoritme? Of is er sprake van een over- of ondervertegenwoording van bepaalde groepen in de selectie ten opzichte van de betreffende populatie?
    - **Onderscheid op basis van gelijke prestaties (fouten)**. 
    De belangrijkste vraag die hier mee beantwoord wordt is: presteert het algoritme gelijk voor personen uit verschillende groepen? Met andere woorden: maakt het algoritme vaker fouten bij bepaalde groepen? Dat kan er eventueel toe leiden dat bepaalde groepen vaker onterecht wel of niet geselecteerd worden door het algoritme. 

    Om te toetsen of er sprake is van onderscheid op basis van gelijke prestaties, is het noodzakelijk om [de prestaties van het algoritme goed te analyseren](../maatregelen/functioneren_in_lijn_met_doeleinden.md). 
    In het geval van classificatie is het daarvoor nodig om een zogeheten *confusion matrix* op te stellen. 
    Een confusion matrix is een tabel waarin de voorspellingen van het algoritme worden vergeleken met de werkelijke waarden (de *ground truth*). 

    De verschillende maten/metrieken waarop gekeken kan worden naar onderscheid, worden in de (wetenschappelijke) literatuur ook wel *fairness metrieken* genoemd. 
    Veel van deze metrieken kunnen op basis van de confusion matrix berekend worden. 
    Een hulpmiddel om de meest passende metrieken te kiezen in jouw situatie is de [Fairness tree](https://openresearch.amsterdam/en/media/inline/2022/7/14/fairness_handbook.pdf). 

    Door te denken vanuit verschillende perspectieven, zullen er in de praktijk meerdere metrieken van belang zijn. 
    Het kan echter voorkomen dat deze metrieken elkaar tegenspreken. 
    Maak een duidelijke prioritering van de verschillende metrieken om afwegingen te maken tussen de verschillende opvattingen van eerlijkheid. 

3. **Verzamel de benodigde data die nodig is om bovenstaande groepen te bepalen.**
Bepaal welke data benodigd is om te analyseren of er verschillen zijn tussen bepaalde groepen. 
In veel gevallen zal data benodigd zijn die demografische en beschermde kenmerken van groepen omschrijft. 
Het verzamelen en verwerken van deze data kan in strijd zijn met privacy vereisten uit bijvoorbeeld de [Algemene Verordening Gegevensbescherming](../vereisten/avg-01-persoonsgegevens-worden-rechtmatig-verwerkt.md).
Het is daarom van belang om duidelijk afwegingen te maken tussen privacy en het analyseren van bias die rekening houdt met de juridische en ethische vereisten.

    !!! info "Uitzondering voor hoog risico AI-systemen"

        De AI-verordening biedt een uitzondering voor het verwerken van bijzondere categorieën persoonsgegevens voor het monitoren, opsporen en corrigeren van bias bij AI-systemen met een hoog risico. Zie [artikel 10.5, AI-verordening](https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=OJ:L_202401689#d1e3348-1-1). 

    Om de data op een veilige en rechtmatige manier te gebruiken voor een biasanalyse dient de data van voldoende kwaliteit te zijn. 
    Denk hier goed na of de data eventuele bias bevat die kan duiden op een bepaalde vooringenomenheid in de biasanalyse zelf (historische bias of representatie bias). 
    De data dient bijvoorbeeld voldoende actueel en volledig te zijn.

    Voor sommige groepen zal het onmogelijk zijn om te beschikken over data van voldoende kwaliteit om zorgvuldig te toetsen op bias. 
    De laaggeletterdheid van burgers of personen is bijvoorbeeld lastig meetbaar en in veel gevallen niet beschikbaar. 
    Bepaal in zo'n situatie [of er andere mogelijkheden zijn deze groepen te helpen](../maatregelen/kwetsbare_groepen.md), of dat er andere mogelijkheden zijn om eventuele ongelijke behandeling bij deze groepen te constateren. 
    Bijvoorbeeld door hierop te monitoren in de klacht- en bezwarenprocedure. 

4. **Bereken de verschillen in behandeling en/of uitkomsten van het algoritme**.
Er zijn verschillende open source softwarepakketten die je hierbij kunnen ondersteunen, zoals [fairlearn](https://fairlearn.org/), [Aequitas](https://github.com/dssg/aequitas), [fairml](https://cran.r-project.org/web/packages/fairml/index.html), [fairness](https://cran.r-project.org/web/packages/fairness/index.html) of [AI Fairness 360](https://aif360.res.ibm.com/).

5. **Probeer te verklaren hoe het geconstateerde onderscheid is ontstaan**.
Als er in de vorige stap een significant onderscheid is geconstateerd, is het belangrijk om na te gaan hoe dit onderscheid is ontstaan. 
Dit kan bijvoorbeeld ontstaan door:
    - een vorm van bias in de onderliggende inputdata. Je kan hierbij denken aan: 
        - historische bias: in hoeverre beschrijft de data de huidige situatie?
        - representatie bias: is de data waarop getraind wordt representatief voor de bijbehorende populatie? Zijn trends uit de gebruikte data generaliseerbaar naar de totale populatie?
        - meetbias: beschrijven de inputvariabelen wel wat ze moeten beschrijven? In hoeverre zijn dit benaderingen waarbij eventuele factoren worden weggelaten?
    - een vorm van bias in het proces na afloop van het algoritme
        - is er sprake van automatiseringsbias of bevestigingsbias in de (handmatige) beoordeling?

:material-arrow-right: Wanneer duidelijker is hoe de geconstateerde bias is ontstaan, is het goed om te verkennen of er mogelijkheden zijn om dit (in de toekomst) te voorkomen. 

Het is belangrijk hier [een brede groep aan belanghebbenden bij te betrekken](../maatregelen/betrek_belanghebbenden.md). 
De oorzaken van bias komen uit de 'echte wereld', waarbij patronen in datasets historische, demografische en sociale verschillen weerspiegielen. 
Het verklaren en voorkomen van bias vraagt daarmee niet alleen om technische oplossingen, maar het is belangrijk de hele socio-technische omgeving waarin het algoritme wordt ingezet mee te nemen. 

### Stap 2: Voer een rechtvaardigingstoets uit
Wanneer er in [Stap 1](#stap-1-analyseer-of-er-sprake-is-van-bias) is geconstateerd dat er sprake is van een onderscheid, dient de volgende vraag beantwoord te worden:

> Valt dit onderscheid te rechtvaardigen?

Een geconstateerd systematisch onderscheid is niet altijd fout en is niet altijd verboden, maar het vraagt wel altijd om aandacht en zorgvuldigheid. 
Het geconstateerde onderscheid kan in bepaalde situaties en onder bepaalde strikte voorwaarden gerechtvaardigd zijn:

- Voor **direct onderscheid** kan er bijvoorbeeld sprake zijn van een wettelijke uitzondering die het gemaakte onderscheid toelaat. 
- Voor **indirect onderscheid** geldt dat behalve een wettelijke uitzondering er ook een **objectieve rechtvaardiging** kan bestaan, waarmee het geconstateerde onderscheid in bepaalde gevallen toelaatbaar kan zijn. 

Twee subvragen die hierbij beantwoord moeten worden zijn:

- streeft het in te zetten algoritme een legitiem doel na?
- bestaat er een redelijke relatie van evenredigheid tussen het gebruikte algoritme en de nagestreefde doelstelling?

Wanneer er geen rechtvaardiging is voor het gemaakte onderscheid, spreken we van een verboden direct of indirect onderscheid, ofwel discriminatie. 
Het algoritme of AI-systeem mag in dat geval niet gebruikt worden.

Voor meer toelichting over het uitvoeren van een rechtvaardigingstoets, verwijzen we naar het rapport [Discriminatie door risicoprofielen - Een mensenrechtelijk toetsingskader](https://publicaties.mensenrechten.nl/publicatie/61a734e65d726f72c45f9dce) van het College voor de Rechten van de Mens. 

### Stap 3: Voer een ethische wenselijkheidstoets uit
Bepaal of het geconstateerde onderscheid uit [Stap 1](#stap-1-analyseer-of-er-sprake-is-van-bias) ethisch wenselijk is. Dit hangt samen met de algemene wenselijkheid van de inzet van het algoritme.  
<!-- link toevoegen -->

In sommige gevallen kan het zo zijn dat ondanks dat er een objectieve rechtvaardiging bestaat voor het gemaakte onderscheid, dit vanuit ethisch perspectief toch onwenselijk is. 
Bepaal [met een grote groep belanghebbenden](../maatregelen/betrek_belanghebbenden.md) wat eventuele (nadelige) effecten van het gemaakte onderscheid kunnen zijn, of jullie dit eerlijk vinden en of er eventuele alternatieven zijn. 

!!! note "Opmerking"

    De bepaling over wat eerlijk is en wat ethisch wenselijk is kan in sommige gevallen ook politiek bevonden worden. Houd hier rekening met de politiek-bestuurlijke verantwoordelijkheden en zorg indien nodig dat de [politiek-bestuurlijke verantwoordelijkhden](../../governance/huidige-situatie/politiek-bestuurlijke-verantwoordelijkheden.md) duidelijk zijn. 

## Bijbehorende vereiste(n)

<!-- list_vereisten_on_maatregelen_page -->

## Risico
Wanneer er geen zorgvuldige analyse naar (onwenselijke) bias is uitgevoerd, bestaat het risico dat het gebruik van het algoritme discriminerende effecten met zich meebrengt. 
Dit kan leiden tot een ongelijke behandeling van burgers met eventuele schade voor betrokkenen.

## Bronnen
- [Toetsingskader Algoritmes Algemene Rekenkamer, 2.19, 3.08](https://www.rekenkamer.nl/onderwerpen/algoritmes/documenten/publicaties/2024/05/15/het-toetsingskader-aan-de-slag)
- [Onderzoekskader Algoritmes Auditdienst Rijk, DM.16, DM.17, DM.18, DM.20, DM.21, DM.22](https://www.rijksoverheid.nl/documenten/rapporten/2023/07/11/onderzoekskader-algoritmes-adr-2023) 
- [Discriminatie door risicoprofielen - Een mensenrechtelijk toetsingskader, College voor de Rechten van de Mens](https://publicaties.mensenrechten.nl/publicatie/61a734e65d726f72c45f9dc)
- [Handreiking non-discriminatie by design](https://www.rijksoverheid.nl/documenten/rapporten/2021/06/10/handreiking-non-discriminatie-by-design)

## Voorbeelden
- [Addendum Vooringenomenheid voorkomen, Algorithm Audit](https://algorithmaudit.eu/nl/algoprudence/cases/aa202402_preventing-prejudice_addendum/) met bijbehorende data en broncode op [Github](https://github.com/NGO-Algorithm-Audit/DUO-CUB)
- [Onderzoek misbruik uitwonendenbeurs, PricewaterhouseCoopers](https://www.rijksoverheid.nl/documenten/rapporten/2024/03/01/eindrapport-pwc-rapportage-onderzoek-misbruik-uitwonendenbeurs)
- [Pilot Slimme Check, Gemeente Amsterdam](https://openresearch.amsterdam/nl/page/105057/eindevaluatie-pilot-slimme-check---bias-analyse-eindrapport)
- [Bias toetsing 'Kort Verblijf Visa' aanvragen, Rijks ICT Gilde](https://www.rijksoverheid.nl/documenten/publicaties/2023/04/01/bias-toetsing-kort-verblijf-visa-aanvragen)
- [Report on Algorithmic bias assesment, SigmaRed](https://www.rijksoverheid.nl/documenten/rapporten/2024/02/07/sigmared-report-on-algorithmic-bias-assessment)
