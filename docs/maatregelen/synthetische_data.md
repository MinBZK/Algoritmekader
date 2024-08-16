---
# vul hier een titel in voor deze maatregel
title: Algoritmes controleren met synthetische en/of CBS data
# geef hier een korte toelichting van deze maatregel
toelichting: Zorg dat selecties gemaakt door algoritmes gecontroleerd worden op achtergrondkenmerken met behulp van synthetische en/of CBS microdata, zodat het inzichtelijk wordt welke groepen door het algoritme worden geselecteerd.
# vul hier de bestandsnamen in van de vereisten die horen bij deze maatregel
vereiste:
- beoordelen_gevolgen_voor_grondrechten
- non_discriminatie
- verboden_toepassingen_evaluatie_of_classificatie_natuurlijke_personen_of_groepen_personen
# vul hier de fasen van de levenscyclus in die horen bij deze maatregel
levenscyclus: 
- dataverkenning-en-datapreparatie
- ontwikkelen
- verificatie-en-validatie
- verboden_toepassingen_evaluatie_of_classificatie_natuurlijke_personen_of_groepen_personen
# vul hier de bouwblokken in die horen bij deze maatregel
bouwblok: 
- conformiteitsbeoordeling
- data
- fundamentele-rechten
---

<!-- Let op! onderstaande regel met 'tags' niet weghalen! Deze maakt automatisch de knopjes op basis van de metadata  -->
<!-- tags -->

## Maatregel
<!-- Vul hier een omschrijving in van wat deze maatregel inhoudt. -->
Maak gebruik van synthetische en/of CBS microdata om de persoonskenmerken van selecties gemaakt door een selectiealgoritme inzichtelijk te maken.

## Toelichting 
<!-- Geef hier een toelichting van deze maatregel -->
Bij het opstellen van selectiealgoritmes mogen bepaalde persoonskenmerken niet gebruikt worden (denk bijvoorbeeld aan migratieachtergrond). Selecties gemaakt door het algoritme zouden echter wel gecontroleerd moeten worden op die persoonskenmerken. Doordat organisaties vaak geen toegang hebben tot data met daarin deze kenmerken of deze data niet mogen gebruiken is het voor de organisaties niet inzichtelijk welke personen geselecteerd worden door hun algoritme en of dit een bepaald groep omvat. Door selecties te koppelen aan synthetische data en/of CBS microdata kunnen deze persoonskenmerken verkregen worden en kunnen selecties meer inzichtelijk gemaakt worden.

## Bijbehorende vereiste(n)
<!-- Hier volgt een lijst met vereisten op basis van de in de metadata ingevulde vereiste -->

<!-- Let op! onderstaande regel met 'list_vereisten_on_maatregelen_page' niet weghalen! Deze maakt automatisch een lijst van bijbehorende verseisten op basis van de metadata  -->
<!-- list_vereisten_on_maatregelen_page -->

## Bronnen 
<!-- Vul hier de relevante bronnen in voor deze maatregel -->

| Bron                        |
|-----------------------------|


## Risico 
<!-- vul hier het specifieke risico in dat kan worden gemitigeerd met behulp van deze maatregel -->

Data over specifieke kwetsbare variabelen is niet beschikbaar, waardoor modeluitkomsten niet gecontroleerd kunnen worden.

## Voorbeeld
<!-- Voeg hier een voorbeeld toe, door er bijvoorbeeld naar te verwijzen -->

Recent is naar buiten gekomen dat DUO gebruikt maakte van een algoritme om studenten te identificeren die zouden frauderen op hun studiefinanciering. Van de studenten die geselecteerd werden door het algoritme had meer dan 90 procent een migratieachtergrond. DUO had geen zicht op de kenmerken van de geselecteerde groep, omdat ze geen data hebben over migratieachtergrond. Had DUO deze informatie wel gehad (door het koppelen van hun selectie aan synthetische en/of CBS microdata) dan had het gebruik van het algoritme stopgezet kunnen worden.

Heb je een voorbeeld of best practice, laat het ons weten via [algoritmes@minbzk.nl](mailto:algoritmes@minbzk.nl)

