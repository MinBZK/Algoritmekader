---
title: Evalueer de nauwkeurigheid van het algoritme
id: urn:nl:ak:mtr:ver-02
toelichting: Test en evalueer de nauwkeurigheid van het algoritme om te zorgen dat deze accurate uitkomsten geeft. 
vereiste:
- aia-06-technische-documentatie
- aia-10-nauwkeurigheid-robuustheid-cyberbeveiliging
- awb-01-zorgvuldigheidsbeginsel
levenscyclus:
- ontwikkelen
- verificatie-en-validatie
- monitoring-en-beheer
onderwerp:
- technische-robuustheid-en-veiligheid
- bias-en-non-discriminatie
rollen:
- ontwikkelaar
- projectleider
hide:
- navigation
---

<!-- tags -->

## Maatregel
Test en evalueer de nauwkeurigheid van het algoritme om te zorgen dat deze accurate uitkomsten geeft. 

## Toelichting
De nauwkeurigheid van het algoritme wil zeggen: geeft het algoritme de juiste uitkomst voor [het gewenste doel](1-pba-02-formuleren-doelstelling.md); maakt het correcte berekeningen, voorspellingen, aanbevelingen, beslissingen of classificeringen. 

Voor het evalueren van de nauwkeurigheid zijn de volgende stappen essentieel:

- Bepaal met welke methoden en [metriek(en)](#metrieken) je de nauwkeurigheid wilt gaan meten. Pas dit aan op de [ontwerpkeuzes](../../levenscyclus/ontwerp.md), [het beoogde doel](1-pba-02-formuleren-doelstelling.md) en [de bepaalde risico’s](2-owp-99-impact-als-niet-werkt-als-beoogd.md). 
- [Controleer of de data volledig en actueel is](3-dat-01-datakwaliteit.md) om de metrieken te kunnen meten.
- Bepaal welke foutmarge acceptabel is:

    - Bepaal hoe vaak het algoritme een bepaalde fout maken. Houd rekening met verschillende fouten die gemaakt kunnen worden, zoals *false positives* en *false negatives*. Welke fouten zijn erger om te maken? 
    - De foutmarge is afhankelijk van [welke schade wordt er veroorzaakt](2-owp-99-impact-als-niet-werkt-als-beoogd.md) bij onnauwkeurige of foutieve voorspellingen.
    - Heb hierbij aandacht voor de afweging tussen nauwkeurigheid en [betrouwbaarheid](5-ver-06-evalueer-betrouwbaarheid.md). Een model met hoge nauwkeurigheid op de testset kan vaak slechter 
    generaliseren naar situaties net buiten de test set (overfitting). 

- Bepaal interventies voor als het restrisico hoger is dan acceptabel.

    - Wanneer de nauwkeurigheid niet voldoende is tijdens de ontwikkelfase kan er besloten worden door te ontwikkelen, andere maatregelen te treffen (bijvoorbeeld in [menselijke interventies](../../onderwerpen/menselijke-controle.md)) om het restrisico acceptabel te maken of door [te stoppen met de ontwikkeling van het systeem](../../levenscyclus/uitfaseren.md). 
    - Wanneer monitoring aangeeft dat de nauwkeurigheid onvoldoende is, moet er een passende afweging om het systeem te verbeteren, dan wel over te gaan op het [stoppen van het systeem](4-owk-02-stopzetten-gebruik.md).

### Metrieken
Afhankelijk van het type algoritme zijn er verschillende metrieken waarmee je de  nauwkeurigheid kan meten. Veelgebruikte metrieken zijn:

- accuraatheid *(accuracy)*
- precisie *(precision)*
- *recall*
- *F1-score*
- *mean-squared-error*
- *mean-absolute-error*

In verschillende omgevingen en onder verschillende datasets moeten de relevante metrieken voor jouw toepassing worden geëvalueerd.

## Bijbehorende vereiste(n)

<!-- list_vereisten_on_maatregelen_page -->

## Risico
Een onnauwkeurig algoritme geeft de verkeerde uitkomsten waardoor situaties of mogelijk personen verkeerd beoordeeld kunnen worden. 

## Bronnen
- [Europese Commissie, Ethische richtsnoeren voor betrouwbare KI](https://digital-strategy.ec.europa.eu/nl/library/ethics-guidelines-trustworthy-ai)
     
## Voorbeeld

Heb jij een goed voorbeeld? Laat het ons weten!
