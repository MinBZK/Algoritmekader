---
title: Maak een noodplan voor het stoppen van het algoritme
id: urn:nl:ak:mtr:owk-02
toelichting: Stel een duidelijk proces op voor situaties waarin het algoritme niet meer werkt zoals beoogd. Dit moet bevatten welke personen welke acties moeten doen en hoe er gewerkt wordt zonder het algoritme.
vereiste: 
- aia-18-corrigerende-maatregelen-voor-non-conforme-ai
- awb-01-zorgvuldigheidsbeginsel
- aia-11-systeem-voor-kwaliteitsbeheer
- grw-01-fundamentele-rechten
- aia-27-beoordelen-gevolgen-grondrechten
- grw-02-non-discriminatie
- aia-19-toegankelijkheidseisen
- aia-09-menselijk-toezicht
- avg-04-proportionaliteit-en-subsidiariteit
- aia-22-gebruiksverantwoordelijken-monitoren-werking
levenscyclus: 
- ontwikkelen
- implementatie
onderwerp: 
- governance
- menselijke-controle
- technische-robuustheid-en-veiligheid
rollen:
- projectleider
- ontwikkelaar
hide:
- navigation
- toc
---
<!-- Let op! onderstaande regel met 'tags' niet weghalen! Deze maakt automatisch de knopjes op basis van de metadata  -->
<!-- tags -->

## Maatregel
<!-- Vul hier een omschrijving in van wat deze maatregel inhoudt. -->
Stel een duidelijk proces op voor situaties waarin het algoritme niet meer werkt zoals beoogd. Dit moet bevatten welke personen welke acties moeten doen en hoe er gewerkt wordt zonder het algoritme.
  
## Toelichting
Er moet gezorgd worden dat er een alternatief plan is voor als het algoritme niet meer werkt zoals beoogd. Dit kan betekenen dat het hele systeem (tijdelijk) wordt stopgezet, dat delen van het systeem (tijdelijk) worden uitgeschakeld of dat er een alternatief systeem gebruikt wordt. 

Dit proces bevat in ieder geval de volgende stappen:

### Leg vast wanneer het algoritme niet meer werkt zoals beoogd
- Leg vast wat de [beoogde werking van het algoritme] is(1-pba-02-formuleren-doelstelling.md).
- Bepaal of [de geïmplementeerde werking overeenkomt met de vastgelegde beoogde werking](5-ver-01-functioneren-in-lijn-met-doeleinden.md) en wanneer het algoritme gestopt moet worden. Dit gebeurt tijdens een [evaluatie](7-mon-04-evaluatieplan.md) of door de [continue monitoring](7-mon-07-plan-continue-monitoring.md). 

### Zorg dat beslissingen kunnen worden herzien
- Leg vast hoe het mogelijk is na te gaan op welk moment het algoritme stopte met werken zoals beoogd. 
Wanneer de melding vanuit continue monitoring komt is het vaak duidelijk wanneer deze waarde wordt overschreden. 
Bij vaste evaluatiemomenten moet dit worden herleid. 
Zorg dat door middel van het [loggen](4-owk-04-logging.md) van de juiste informatie het mogelijk is te herleiden wanneer het algoritme stopte met werken zoals beoogd. 
- Zorg dat beslissingen die zijn genomen vanaf het moment dat het algoritme stopte met werken zoals beoogd kunnen worden herzien. Indien het algoritme niet direct is gestopt zodra het niet meer werkte zoals beoogd, moet er opnieuw gekeken worden naar de beslissingen die daarna zijn genomen. Leg vast op welke manier deze beslissingen herzien worden. 

### Leg vast wat de vervolgacties zijn
- Leg in een proces vast hoe het gebruik van het algoritme moet worden stopgezet. 
- Leg vast hoe er gewerkt worden zonder het algoritme en wat de impact daarvan is op het werkproces.  
- Leg vast wie er binnen en buiten de organisatie geïnformeerd moeten worden. 
- Het is van belang dat bij het ontwerp van algoritmes er rekening wordt gehouden met dat het werkproces ook zonder het algoritme kan worden uitgevoerd.
- In het geval van risicoselectie kan er bijvoorbeeld worden teruggevallen op het enkel uitvoeren van een [aselecte steekproef](6-imp-02-aselecte-steekproeven.md) als selectieinstrument. 
- Als blijkt dat het algoritme ongewenst functioneert, dan moeten (technische) maatregelen zijn getroffen waarmee het gebruik daadwerkelijk kan worden stopgezet. Denk hierbij aan een stopknop en werkinstructies hoe het gebruik kan worden beëindigd.
- Maak aantoonbaar dat deze maatregelen zijn getroffen.
- De proceseigenaar of een menselijk toezichthouder moet in staat zijn om het algoritme op elk moment te kunnen beëindigen.
- Het stopzetten van het gebruik van een algoritme mag niet tot gevolg hebben dat betrokkenen niet meer kunnen achterhalen hoe besluiten tot stand zijn gekomen of dat gevolgen niet meer kunnen worden gecorrigeerd als dat noodzakelijk is. 

Indien er sprake is van discriminerende effecten van een algoritme, kan je gebruik maken van het [discriminatieprotocol](0-org-15-discriminatieprotocol.md). 
   
## Risico
Als er geen duidelijke acties zijn gedefinieerd, kan dat bijvoorbeeld leiden tot de volgende risico’s: het werkproces komt stil te liggen door een niet-werkend algoritme; er worden verkeerde beslissingen genomen doordat het algoritme nog wordt gebruikt terwijl het niet goed meer werkt, kwaadwillenden hebben langer toegang tot het algoritme en/of organisatiedata. 

## Bijbehorende vereiste(n)
<!-- Let op! onderstaande regel met 'list_vereisten_on_maatregelen_page' niet weghalen! Deze maakt automatisch een lijst van bijbehorende verseisten op basis van de metadata  -->
??? expander "Bekijk alle vereisten"
    <!-- list_vereisten_on_maatregelen_page -->

## Bronnen 
<!-- Vul hier de relevante bronnen in voor deze maatregel -->

- [Onderzoekskader Algoritmes Auditdienst Rijk, SV.18, SV.17 ](https://www.rijksoverheid.nl/documenten/rapporten/2023/07/11/onderzoekskader-algoritmes-adr-2023)
- [Toetsingskader Algoritmes Algemene Rekenkamer, 1.03](https://www.rekenkamer.nl/onderwerpen/algoritmes/documenten/publicaties/2024/05/15/het-toetsingskader-aan-de-slag)
- [Impact Assessment Mensenrechten en Algoritmes, 1.5](../hulpmiddelen/IAMA.md)

## Voorbeeld
<!-- Voeg hier een voorbeeld toe, door er bijvoorbeeld naar te verwijzen -->

Heb je een voorbeeld of best practice, laat het ons weten via [algoritmes@minbzk.nl](mailto:algoritmes@minbzk.nl)
