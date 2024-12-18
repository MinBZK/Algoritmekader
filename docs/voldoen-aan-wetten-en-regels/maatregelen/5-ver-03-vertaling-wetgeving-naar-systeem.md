---
title: Controleer regelmatig of het algoritme voldoet aan alle wetten en regels en het eigen beleid
id: urn:nl:ak:mtr:ver-03
toelichting: Wet- en regelgeving of beleid bevat de basisregels voor algoritmes. Het is van belang dat een goede vertaling wordt gemaakt van deze regels naar het algoritme.
vereiste:
- awb-01-zorgvuldigheidsbeginsel
- aia-08-transparantie-aan-gebruiksverantwoordelijken
- awb-02-motiveringsbeginsel
- aia-05-data-kwaliteitscriteria
levenscyclus:
- verificatie-en-validatie
onderwerp:
- governance
- transparantie
rollen:
- jurist
hide:
- navigation
- toc
---

<!-- tags -->

## Maatregel
Stel regelmatig vast dat wetgeving en (lokaal) beleid correct is vertaald naar de uitvoering van het te ondersteunen werkproces en de onderliggende systemen. 
 
## Toelichting
- Systemen die overheidsorganisaties inzetten voor bijvoorbeeld het verlenen van subsidies, vergunningen of bijstandsuitkeringen moeten de regels en processtappen volgen die in wetgeving zijn voorgeschreven.
- Er is een vertaling nodig van deze regels en processtappen naar de uitvoering van het werkproces, het datagebruik en onderliggende systemen.
- Algoritmes moeten ook voldoen aan deze regels en processtappen.
- Als algoritmes worden ontwikkeld, moet worden onderzocht wat deze regels zijn en hoe deze moeten worden toegepast bij het ontwikkelen van algoritmes.
- Het moeten voldoen aan wetgeving en beleid kan dus in zekere zin 'begrenzend' werken op wat mag worden gedaan met algoritmes. Dit is mede afhankelijk van de risico classificatie van de specifieke toepassing. 
- Voor algoritmes, bijvoorbeeld regelgebaseerde rekenregels, moet bijvoorbeeld nauwkeurig worden geprogrammeerd in welke gevallen welke bedragen moeten worden uitgekeerd voor een bijstandsuitkering.
- Voor machine learning algoritmes moet bijvoorbeeld worden vastgesteld of de trainingsdata wel tot stand is gekomen in lijn met wetgeving en vastgesteld beleid (datakwaliteit) en welke verbanden en patronen (inputvariabelen) al dan niet passend zijn bij het ondersteunen van wettelijke taken.
 
- Er is een multidisciplinaire samenwerking nodig tussen de proceseigenaar, gebruikers, juristen, informatieanalisten en ontwikkelaar om deze vertaling zorgvuldig en doorlopend te maken.
- Voorafgaand aan het (laten) ontwikkelen van een algoritme moet dit zijn uitgevoerd.
- De toegepaste 'business rules' en de verwerkte data voor de uitvoering van het te ondersteunen werkproces met algoritmes moeten worden onderzocht en beoordeeld.
- Diepgaande procesanalyses (Bv. BPMN niveau Analytisch) en procesbeschrijvingen kunnen hierbij ondersteunen. 
- Als blijkt dat een werkproces niet (meer) conform (gewijzigde) wetgeving of beleid wordt uitgevoerd, dan moet worden beoordeeld of de verworven data of welke deel van de data geschikt is voor het ontwikkelen een algoritme.
- Het is dan raadzaam om de uitvoering van het betreffende werkproces en de werking van onderliggende systemen eerst te 'herstellen' en om hiermee een nieuw datafundament te creëeren (eerst een groot aantal zaken behandelen) die later als trainingsdata kan worden gebruikt. 
  
## Bijbehorende vereiste(n) { data-search-exclude }
??? expander "Bekijk alle vereisten"
    <!-- list_vereisten_on_maatregelen_page -->

## Risico
Een beslissing of besluit wordt niet conform wetgeving genomen en is daarmee onrechtmatig, als geen goede vertaling wordt gemaakt van wetgeving naar het algoritme. 

## Bron
- [Wetsanalyse](https://wendbarewetsuitvoering.pleio.nl/page/view/918f9a63-4383-410e-b526-4b8fb67b1c40/het-boek-wetsanalyse)
- [Onderzoekskader Auditdienst Rijk, DM.15](https://www.rijksoverheid.nl/documenten/rapporten/2023/07/11/onderzoekskader-algoritmes-adr-2023)
- [Toetsingskader Algoritmes Algemene Rekenkamer, 2.05](https://www.rekenkamer.nl/onderwerpen/algoritmes/documenten/publicaties/2024/05/15/het-toetsingskader-aan-de-slag)

## Voorbeeld
[Handleiding Wetanalyse](https://wendbarewetsuitvoering.pleio.nl/attachment/805680a2-1c37-4831-bbfb-2d602ca7d65c) 
