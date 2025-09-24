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
sources:
  ARK: 2.03
  ADR:
  - DM.1
  - DM.4
hide:
- navigation
version: "e33a2081"
version_date: "2025-08-26"
---

<!-- tags -->

## Maatregel
Test en evalueer de nauwkeurigheid van het algoritme om te zorgen dat deze accurate uitkomsten geeft.

## Toelichting
De nauwkeurigheid van het algoritme wil zeggen: geeft het algoritme de juiste uitkomst voor [het gewenste doel](1-pba-02-formuleren-doelstelling.md); maakt het correcte berekeningen, voorspellingen, aanbevelingen, beslissingen of classificeringen.

Voor het evalueren van de nauwkeurigheid zijn de volgende stappen essentieel:

- Bepaal met welke methoden en [metriek(en)](#metrieken) je de nauwkeurigheid wilt gaan meten. Pas dit aan op de [ontwerpkeuzes](../../levenscyclus/ontwerp.md), [het beoogde doel](1-pba-02-formuleren-doelstelling.md) en [de bepaalde risico’s](2-owp-06-impactanalyse.md).
- [Controleer of de data volledig en actueel is](3-dat-01-datakwaliteit.md) om de metrieken te kunnen meten.
- Bepaal welke foutmarge acceptabel is:

    - Bepaal hoe vaak het algoritme een bepaalde fout maakt. Houd rekening met verschillende fouten die gemaakt kunnen worden, zoals *false positives* en *false negatives*. Welke fouten zijn erger om te maken?
    - De foutmarge is afhankelijk van [welke schade wordt veroorzaakt](2-owp-06-impactanalyse.md) bij onnauwkeurige of foutieve voorspellingen.
    - Heb hierbij aandacht voor de afweging tussen nauwkeurigheid en [betrouwbaarheid](5-ver-06-evalueer-betrouwbaarheid.md). Een model met hoge nauwkeurigheid op de testset kan vaak slechter generaliseren naar situaties net buiten de test set (overfitting).
    - Bepaal interventies voor als het restrisico hoger is dan acceptabel.

    - Wanneer de nauwkeurigheid niet voldoende is tijdens de ontwikkelfase kan er besloten worden door te ontwikkelen, andere maatregelen te treffen (bijvoorbeeld in [menselijke interventies](../../onderwerpen/menselijke-controle.md)) om het restrisico acceptabel te maken of door [te stoppen met de ontwikkeling van het systeem](../../levenscyclus/uitfaseren.md).
    - Wanneer monitoring aangeeft dat de nauwkeurigheid onvoldoende is, moet er een passende afweging worden gemaakt om het systeem te verbeteren dan wel over te gaan op het [stoppen van het systeem](4-owk-02-stopzetten-gebruik.md).

### Metrieken
Afhankelijk van het type algoritme zijn er verschillende metrieken waarmee je de nauwkeurigheid kan meten. Veelgebruikte metrieken/methoden zijn:

- accuraatheid *(accuracy)*
- precisie *(precision)*
- *recall*
- *F1-score*
- *mean-squared-error*
- *mean-absolute-error*
- *ROC-curve*

Leg vast welke keuze je maakt voor bepaalde metrieken en waarom. In verschillende omgevingen en onder verschillende datasets moeten de relevante metrieken voor jouw toepassing worden geëvalueerd.

## Risico
Een onnauwkeurig algoritme geeft de verkeerde uitkomsten waardoor situaties of mogelijk personen verkeerd beoordeeld kunnen worden.

## Bijbehorende vereiste(n)

??? expander "Bekijk alle vereisten"
    <!-- list_vereisten_on_maatregelen_page -->

## Bronnen
- [Europese Commissie, Ethische richtsnoeren voor betrouwbare KI](https://digital-strategy.ec.europa.eu/nl/library/ethics-guidelines-trustworthy-ai)
- [Toetingskader Algemene Rekenkamer, 2.03](https://www.rekenkamer.nl/onderwerpen/algoritmes/documenten/publicaties/2024/05/15/het-toetsingskader-aan-de-slag)
- [Onderzoekskader algoritmes, Auditdienst Rijk, DM.1 en DM.4](../hulpmiddelen/onderzoekskader-adr.md)

## Voorbeelden

!!! example "Gemeente Amsterdam – Public Eye"

	De gemeente Amsterdam maakt gebruik van een algoritme – Public Eye – om te bepalen hoeveel mensen er op een afbeelding staan. Public Eye wordt gebruikt om te kunnen monitoren hoeveel voetgangers er op plekken in de stad zijn, om zo onveilige situaties en drukte goed te kunnen begeleiden.

	De gemeente geeft aan dat zij een minimum nauwkeurigheid van 70% hanteert om relevante inzichten te krijgen. In de praktijk levert Public Eye een hogere nauwkeurigheid van 90%, afgeleid van trainingsbeelden. Deze data is handmatig geannoteerd door een selecte groep werknemers die dit periodiek doet.

	Bron: [Public Eye-Amsterdam Algoritmeregister](https://algoritmeregister.amsterdam.nl/ai-system/public-eye/231/)


!!! example "Gemeente Ede – WOZ-taxatiemodellen"

	De gemeente Ede heeft een algoritme in gebruik als ondersteuning bij het bepalen (en controleren) van de WOZ-waarde van woningen. Dit wordt gedaan aan de hand van machine-learning modellen die op basis van onder andere woning- en locatiekenmerken, gecombineerd met markt- en verkoopconditites, de WOZ-waarde kunnen bepalen. Hierbij wordt bepaald welke kenmerken het meeste gewicht hebben voor deze bepaling.

	Om deze uitkomsten te kunnen controleren wordt er aan de hand van ratio's bekeken of het algoritme nauwkeurig werkt (zie afbeelding hieronder). Aan de hand van deze ratio's wordt gecontroleerd of het algoritme aansluit bij het marktniveau. Als de waarden van de ratio's buiten de bandbreedte liggen, wordt de WOZ-waarde aangepast of wordt deze afwijking verder verklaard.

	![image](https://github.com/user-attachments/assets/8230f572-8836-40ef-9f91-ca8b1143c17a)

	Bron: [WOZ-taxatiemodellen - Gemeente Ede]( https://algoritmes.overheid.nl/nl/algoritme/woztaxatiemodellen-gemeente-ede/39323486#werking)

Heb je een ander voorbeeld of best practice, laat het ons weten via [algoritmes@minbzk.nl](mailto:algoritmes@minbzk.nl)  
