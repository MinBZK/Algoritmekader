---
title: Voer een biasanalyse uit
toelichting: Analyseer of het gebruik van het algoritme of het proces daaromheen leidt tot onwenselijke of onrechtmatige verschillen in de behandeling van individuen en/of groepen.  
vereiste:
- non-discriminatie
- beoordelen_gevolgen_voor_grondrechten
- fundamentele_rechten
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

De 3 stappen worden hieronder verder toegelicht. 

### Stap 1: Analyseer of er sprake is van bias
In deze stap is het doel om te bepalen in welke mate er sprake is van een systematisch verschil in behandeling van bepaalde objecten, mensen of groepen in vergelijking met anderen. 
Dit verschil kan zowel op een [directe als een indirecte manier](../onderwerpen/bias-en-non-discriminatie/index.md/#bias-in-algoritmische-context) ontstaan. 

#### Toetsen op direct onderscheid
Toetsen op direct onderscheid is in vergelijking tot toetsen op indirect onderscheid relatief eenvoudig. 

:material-arrow-right: Bepaal of de inputvariabelen die gebruikt worden leiden tot een direct onderscheid op basis van godsdienst, levensovertuiging, politieke gezindheid, ras, geslacht, nationaliteit, hetero- of homoseksuele gerichtheid[^1] of burgelijke staat. 

Het is niet mogelijk om een uitputtend overzicht te geven van alle selectiecriteria die mogelijk tot direct onderscheid op grond van ras of nationaliteit kunnen leiden. 
Wel zijn in de jurisprudentie verschillende voorbeelden en aanknopingspunten te vinden. 
Zo staat vast dat selectie op basis van fysieke etnische kenmerken, zoals huidskleur, direct onderscheid op grond van ras oplevert [^2].
Een ander voorbeeld is dat onderscheid op grond van een niet-westers klinkende naam direct onderscheid op grond van afkomst (en dus ras) oplevert [^3].

[^1]: Er is een wetsvoorstel om de term 'hetero- of homoseksuele gerichtheid' in de Algmemene wet gelijke behandeling (Awgb) te wijzigingen in 'seksuele gerichtheid'. Met deze wijziging sluit de Awgb aan bij een eerdere wijziging van artikel 1 van de Grondwet. 

[^2]: Zie [Discriminatie door risicoprofielen, een mensenrechtelijk toetsingskader, College voor de Rechten van de Mens](https://publicaties.mensenrechten.nl/publicatie/61a734e65d726f72c45f9dce)

[^3]: Zie [Discriminatie door risicoprofielen, een mensenrechtelijk toetsingskader, College voor de Rechten van de Mens](https://publicaties.mensenrechten.nl/publicatie/61a734e65d726f72c45f9dce), [College voor de Rechten van de Mens 7 juni 2021, oordeel 2021-70](https://oordelen.mensenrechten.nl/oordeel/2021-70); [College voor de Rechten van de Mens 23 april 2015, oordeel 2015-44](https://oordelen.mensenrechten.nl/oordeel/2015-44); [College voor de Rechten van de Mens 23 april 2015, oordeel 2014-0426](https://oordelen.mensenrechten.nl/oordeel/2015-43).

#### Toetsen op indirect onderscheid
Ook selectiecriteria die op het eerste gezicht geen enkele link lijken te hebben met een [discriminatiegrond](../onderwerpen/bias-en-non-discriminatie/index.md#discriminatiegrond) kunnen leiden tot indirect onderscheid op grond van een discriminatiegrond. 
Enkele voorbeelden van zulke 'ogenschijnlijk neutrale' selectiecriteria die verband hebben met ras of nationaliteit zijn: postcode, hoogte van het inkomen, kenteken, familielid in het buitenland, laaggeletterdheid. 
Indirect onderscheid is in vergelijking met direct onderscheid lastiger op te signaleren en te voorkomen. 
Daarom is het belangrijk jouw algoritmische toepassing regelmatig te analyseren op eventueel indirect onderscheid. 
Het toetsen op indirect onderscheid bestaat uit 6 stappen:

1. **Bepaal wat de [kwetsbare groepen](../maatregelen/kwetsbare_groepen.md) zijn.**
Eventueel kan dit aangevuld worden op basis van de [discriminatiegronden](../onderwerpen/bias-en-non-discriminatie/index.md#discriminatiegrond) uit non-discriminatie wetgeving. Of andere groepen waarvoor verschillen in behandeling ethisch onwenselijk zijn.

2. **Bepaal wat "verschillen in behandeling" betekent in de context van het algoritme.**
In deze stap is het belangrijk om voorafgaand aan de daadwerkelijke analyse met een [brede groep stakeholders](../maatregelen/betrek_belanghebbenden.md) te bepalen wat 'eerlijk' en 'rechtvaardig' wordt bevonden in de context van het betreffende algoritme. 
Er zijn veel verschillende manieren waarop je kan kijken naar onderscheid bij het gebruik van algoritmes. Een onderscheid is het volgende:

    - **Onderscheid op basis van gelijke uitkomsten (representatie)**. 
    De belangrijkste vraag die hier mee beantwoord wordt is: hebben personen uit verschillende groepen gelijke kans om geselecteerd te worden door het algoritme? Of is er sprake van een over- of ondervertegenwoording van bepaalde groepen in de selectie ten opzichte van de betreffende populatie?
    - **Onderscheid op basis van gelijke prestaties (fouten)**. 
    De belangrijkste vraag die hier mee beantwoord wordt is: presteert het algoritme gelijk voor personen uit verschillende groepen? Met andere woorden: maakt het algoritme vaker fouten bij bepaalde groepen? Dat kan er eventueel toe leiden dat bepaalde groepen vaker onterecht wel of niet geselecteerd worden door het algoritme. 

    De verschillende maten/metrieken waarop gekeken kan worden naar onderscheid, worden in de (wetenschappelijke) literatuur ook wel *fairness metrieken* genoemd. 
    Een hulpmiddel om de meest passende metrieken te kiezen in jouw situatie is de [Fairness tree](https://openresearch.amsterdam/en/media/inline/2022/7/14/fairness_handbook.pdf). 

    Door te denken vanuit verschillende perspectieven, zullen er in de praktijk meerdere metrieken van belang zijn. 
    Het kan echter voorkomen dat deze metrieken elkaar tegenspreken. 
    Maak een duidelijke prioritering van de verschillende metrieken om afwegingen te maken tussen de verschillende maten van eerlijkheid. 

3. **Verzamel de benodigde data die nodig is om bovenstaande groepen te bepalen.**
Bepaal welke data benodigd is om te analyseren of er verschillen zijn tussen bepaalde groepen. 
In veel gevallen zal data benodigd zijn die demografische en beschermde kenmerken van groepen omschrijft. 
Het verzamelen en verwerken van deze data kan in strijd zijn met privacy vereisten uit bijvoorbeeld de [Algemene Verordening Gegevensbescherming](../vereisten/persoonsgegevens_worden_rechtmatig_verwerkt.md).
Het is daarom van belang om duidelijk afwegingen te maken tussen privacy en het analyseren van bias die rekening houdt met de juridische en ethische vereisten.

    !!! info "Uitzondering voor hoog risico AI-systemen"

        De AI-verordening biedt een uitzondering voor het verwerken van bijzondere categorieën persoonsgegevens voor het monitoren, opsporen en corrigeren van bias bij AI-systemen met een hoog risico. Zie [artikel 10.5, AI-verordening](https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=OJ:L_202401689#d1e3348-1-1). 

    Om de data op een veilige en rechtmatige manier te gebruiken voor een biasanalyse dient de data van voldoende kwaliteit te zijn. 
    Denk hier goed na of de data eventuele bias bevat die kan duiden op een bepaalde vooringenomenheid in de biasanalyse zelf (historische bias of representatie bias). 
    De data dient bijvoorbeeld voldoende actueel en volledig te zijn. Kunnen de groepen zonder het gebruik van onwenselijke proxies bepaald worden? 

    Voor sommige groepen zal het onmogelijk zijn om te beschikken over data van voldoende kwaliteit om zorgvuldig te toetsen op bias. 
    De laaggeletterdheid van burgers of personen is bijvoorbeeld lastig meetbaar en in veel gevallen niet beschikbaar. 
    Bepaal in zo'n situatie [of er andere mogelijkheden zijn deze groepen te helpen](../maatregelen/kwetsbare_groepen.md), of dat er andere mogelijkheden zijn om eventuele ongelijke behandeling bij deze groepen te constateren. 
    Bijvoorbeeld door hierop te monitoren in de klacht- en bezwarenprocedure. 

4. **Bereken de verschillen in behandeling en/of uitkomsten van het algoritme**.

5. **Indien er een significante verschil in behandeling is geconstateerd, voer een oorzaakanalyse uit**.

6. **Documenteer en onderbouw de gemaakte keuzes en onderliggende afwegingen**.
Evalueer en pas deze keuzes en afwegingen waar nodig aan.

Het doel van een bias toets is toetsen of het gebruik van een algoritme tot onwenselijke en/of onrechtmatige verschillen in de behandeling van individuen en/of groepen leidt. Om deze toets uit te voeren is het nodig om te analyseren of er sprake is van verschillen in behandeling en/of uitkomsten tussen verschillende groepen, om te analyseren of het algoritme onderscheid maakt op basis van beschermde kenmerken. In de laatste stap van de bias toets wordt een rechtvaardigingstoets en een ethische wenselijkheidstoets uitgevoerd.

De bias toets heeft overlap met de maatregelen: kwetsbare groepen, onderbouwing geselecteerde kenmerken (incl. proxy analyse), mensenrechtentoets, accuraatheid, proportionaliteit, subsidiariteit, legitiem doel, noodzakelijkheid.

### Stap 2: Voer een rechtvaardigingstoets uit

### Stap 3: Voer een ethische wenselijkheidstoets uit


## Bijbehorende vereiste(n)

<!-- list_vereisten_on_maatregelen_page -->

## Risico


## Bronnen
| Bron                                                                                                                                                                     |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Toetsingskader Algoritmes Algemene Rekenkamer, 2.01](https://www.rekenkamer.nl/onderwerpen/algoritmes/documenten/publicaties/2024/05/15/het-toetsingskader-aan-de-slag) |
| [Impact Assessment Mensenrechten en Algoritmes, 1](https://www.rijksoverheid.nl/documenten/rapporten/2021/02/25/impact-assessment-mensenrechten-en-algoritmes)          |
| [Onderzoekskader Algoritmes Auditdienst Rijk, DM.1](https://www.rijksoverheid.nl/documenten/rapporten/2023/07/11/onderzoekskader-algoritmes-adr-2023)                    |

## Voorbeeld

Heb jij een goed voorbeeld? Laat het ons weten!