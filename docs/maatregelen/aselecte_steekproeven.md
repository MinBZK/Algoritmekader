---
# vul hier een titel in voor deze maatregel
title: Gebruik aselecte  als er gebruik gemaakt wordt van risicogestuurde selectie
# geef hier een korte toelichting van deze maatregel
toelichting: Zorg dat een risicogestuurde selectie niet alleen gemaakt worden op basis van een algoritme, maar dat er ook willekeurige gevallen toegevoegd worden aan de selectie. Deze kan gebruikt worden om modellen te onderhouden.
vereiste:
- beoordelen_gevolgen_voor_grondrechten
- non_discriminatie
# vul hier de fasen van de levenscyclus in die horen bij deze maatregel
levenscyclus:
- implementatie
- monitoring-en-beheer
# vul hier de bouwblokken in die horen bij deze maatregel
onderwerp: 
- bias-en-non-discriminatie
- technische-robuustheid-en-veiligheid
hide:
- navigation
---

<!-- Let op! onderstaande regel met 'tags' niet weghalen! Deze maakt automatisch de knopjes op basis van de metadata  -->
<!-- tags -->

## Maatregel
Uitvoeren van aselecte steekproeven als aanvulling wanneer gebruik gemaakt wordt van risicogestuurde selectie.

## Toelichting 
<!-- Geef hier een toelichting van deze maatregel -->
Aselecte steekproeven kunnen een waardevolle toevoeging zijn bij risicogestuurde selectie.

Het toevoegen van aselecte steekproeven maakt het mogelijk om over tijd te beoordelen of het algoritme nog voldoende effectief is.
Populaties veranderen immers over tijd. Een selectie die het meest effectief was bij ingebruikname, kan over tijd dat niet meer zijn.
Door alleen risicogestuurd te selecteren, wordt dit niet inzichtelijk, omdat bepaalde groepen zelden tot nooit gecontroleerd worden.
Door de aanvullende mogelijkheid van monitoring, kan over tijd beoordeeld worden of er nog steeds sprake is van de meest proportionele vorm.
Als dat niet zo is, kan bijvoorbeeld gekozen worden voor aanpassing van de risicogestuurde selectie of overgaan op volledig aselect.

De maatregel gaat daarmee niet direct discriminatie tegen, omdat er sprake kan zijn van discriminatie ongeacht de effectiviteit van de risicogestuurde selectie.
Een lagere effectiviteit maakt het echter lastiger het gemaakte onderscheid te rechtvaardigen.

Het gebruik van een aselecte steekproef is in veel gevallen essentieel om het systeem te kunnen toetsen op vooringenomenheid. 
Een aselecte steekproef geeft ook inzicht in heel deel van de populatie dat doorgaans niet geselecteerd en behandeld wordt door het betreffende risicogestuurde algoritme. 
Dit maakt het mogelijk om te toetsen of er sprake is van een over- of ondervertegenwoordiging van bepaalde groepen, of om te bepalen of bepaalde typen fouten vaker gemaakt worden in bepaalde groepen.

Bij AI-systemen die verder leren op basis van verkregen data kan daarnaast sprake zijn van een reinforcing feedbackloop, omdat zij geen representatieve data krijgen.
Het toevoegen van aselecte steekproeven kan deze feedbackloop doorbreken.

Het is aan te bevelen om, waar mogelijk, behandelaars niet in te lichten of een casus toegewezen is op basis van een risicogestuurd of aselecte selectie.
Daardoor wordt beperkt dat een behandelaar met tunnelvisie een zaak bekijkt.
De behandelaar weet immers dat er tussen de selecties zaken zitten waar niet sprake is van verhoogd risico.
Op die manier kan automation bias beperkt te worden.
Niet in alle gevallen zal dit mogelijk zijn, omdat de behandelaar ook uit andere aangeleverde gegevens kan halen op basis waarvan een casus geselecteerd is.
Het is dan belang om op andere wijze de tunnelvisie tegen te gaan.

De precieze inzet van aselecte steekproeven zal afhangen van de context.
Zo verschilt het per context hoeveel zaken aselect geselecteerd moeten worden.
Bepaal welke groepen er precies vergeleken dienen te worden en bepaal aan de hand daarvan een passende steekproefgrootte zodanig dat er gesproken kan worden over statistische significantie. 

In sommige gevallen zal de impact van een selectie ook dusdanig zijn, dat het zich niet leent voor aselecte steekproef.
Zo kan een aselecte steekproef wel de basis zijn voor bureauonderzoek, maar mogelijk niet als enige basis voor een huisbezoek.
Deze belangenenafweging moet per context gemaakt worden.

## Bijbehorende vereiste(n)
<!-- Hier volgt een lijst met vereisten op basis van de in de metadata ingevulde vereiste -->

<!-- Let op! onderstaande regel met 'list_vereisten_on_maatregelen_page' niet weghalen! Deze maakt automatisch een lijst van bijbehorende verseisten op basis van de metadata  -->
<!-- list_vereisten_on_maatregelen_page -->

## Bronnen 
<!-- Vul hier de relevante bronnen in voor deze maatregel -->

| Bron                        |
|-----------------------------|
|[Rapportage Algoritmerisico's Nederland voorjaar 2024 (pp. 36-41)](https://www.autoriteitpersoonsgegevens.nl/documenten/rapportage-ai-algoritmerisicos-nederland-ran-voorjaar-2024)|


## Risico 
<!-- vul hier het specifieke risico in dat kan worden gemitigeerd met behulp van deze maatregel -->
* Historical bias
* Representation bias
* Automation bias en Reinforcing Feedback Loop

## Voorbeeld
<!-- Voeg hier een voorbeeld toe, door er bijvoorbeeld naar te verwijzen -->
In het onderzoek van zowel [Algorithm Audit](https://algorithmaudit.eu/nl/algoprudence/cases/aa202401_preventing-prejudice/) als [PricewaterhouseCoopers](https://www.rijksoverheid.nl/documenten/rapporten/2024/03/01/eindrapport-pwc-rapportage-onderzoek-misbruik-uitwonendenbeurs) naar de Controle Uitwonendenbeurs is het belang van de aselecte steekproef duidelijk geworden. 

Heb je een voorbeeld of best practice, laat het ons weten via [algoritmes@minbzk.nl](mailto:algoritmes@minbzk.nl)


