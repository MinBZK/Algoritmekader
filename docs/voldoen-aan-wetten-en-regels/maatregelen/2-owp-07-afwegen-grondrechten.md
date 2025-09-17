---
# vul hier een titel in voor deze maatregel
title: Inventariseer welke grondrechten het algoritme kan schenden en maak een belangenafweging
id: urn:nl:ak:mtr:owp-07
# geef hier een korte toelichting van deze maatregel
toelichting: Afwegen grondrechten
vereiste:
- grw-01-fundamentele-rechten
- aia-27-beoordelen-gevolgen-grondrechten
# vul hier de fasen van de levenscyclus in die horen bij deze maatregel
levenscyclus:
- probleemanalyse
- ontwerp
- verificatie-en-validatie
- monitoring-en-beheer

# vul hier de bouwblokken in die horen bij deze maatregel
onderwerp:
- fundamentele-rechten

rollen:
- projectleider
- beleid-en-advies
sources:
  ADR: SV.4
hide:
- navigation
version: "92559128"
version_date: "2025-07-04"
---

<!-- Let op! onderstaande regel met 'tags' niet weghalen! Deze maakt automatisch de knopjes op basis van de metadata  -->
<!-- tags -->

## Maatregel
Identificeer welke grondrechten geraakt worden door het in te zetten algoritme en maak een afweging of dit aanvaardbaar is.

## Toelichting
<!-- Geef hier een toelichting van deze maatregel -->
Een algoritme kan invloed hebben op grondrechten. Op een aantal grondrechten kan een algoritme sneller invloed hebben, zoals recht op [persoonsgegevensbescherming](../../onderwerpen/privacy-en-gegevensbescherming.md), recht op behoorlijk bestuur en recht op [gelijke behandeling](../../onderwerpen/bias-en-non-discriminatie.md).
Deze veelvoorkomende grondrechten krijgen op andere plekken in het Algoritmekader specifieke aandacht.
Er zijn echter ook grondrechten die bij minder algoritmes relevant zijn, maar desalniettemin in die gevallen zeer invloedrijk kunnen zijn.
Het is van belang uiteindelijk een totale afweging te maken van alle grondrechten die (mogelijk) geraakt worden ten opzichte van de voordelen van het in te zetten algoritme.
Een voorbeeld van een grondrecht dat minder snel geraakt wordt is bijvoorbeeld een algoritme om hate speech te kunnen detecteren. Zo'n algoritme zal van invloed kunnen zijn op de vrijheid van meningsuiting en het recht op informatie.

Doorloop in lijn met deel 4 van het [Impact Assessment Mensenrechten en Algoritmes](../hulpmiddelen/IAMA.md) de volgende stappen:

1. Breng in kaart welke grondrechten geraakt kunnen worden door de inzet van het algoritme. Hiervoor kan [bijlage 1 uit het Impact Assessment Mensenrechten en Algoritmes](../hulpmiddelen/IAMA.md) gebruikt worden.
2. Als dat het geval is, is het allereerst van belang om te controleren of hiervoor specifieke wetgeving is waar de inzet van het algoritme aan moet voldoen.
3. Bepaal hoe zwaar de geindentificeerde grondrechten worden geraakt door het beoogde algoritme.
4. Bepaal hoe [doeltreffend/effectief](5-ver-01-functioneren-in-lijn-met-doeleinden.md) het algoritme in de praktijk is.
5. Bepaal of de inzet van het algoritme noodzakelijk is om het [beoogde doel](1-pba-02-formuleren-doelstelling.md) te bereiken. Zijn er alternatieven? Of zijn er mitigerende maatregelen die genomen kunnen worden waardoor grondrechten niet of minder worden geraakt en eventuele nadelige gevolgen verzacht kunnen worden?
6. Gegeven alle voorgaande stappen, bepaal of de inzet van het algoritme proportioneel is om het [beoogde doel](1-pba-02-formuleren-doelstelling.md) te bereiken. Wegen de voordelen op tegen de nadelen?

Het is van belang voldoende [belanghebbenden te betrekken](1-pba-04-betrek-belanghebbenden.md) bij het doorlopen van deze stappen om te zorgen dat alle eventueel nadelige aspecten van het in te zetten algoritme worden meegenomen.
Documenteer de te doorlopen stappen en leg de keuzes en afwegingen goed vast.

!!! note "Opmerking"

    Zoals vermeld in de [vereiste voor beoordeling van gevolgen voor grondrechten uit de AI-verordening](../vereisten/aia-27-beoordelen-gevolgen-grondrechten.md) moeten sommige hoog-risico AI-systemen een beoordeling doen van de gevolgen voor grondrechten. Het is nog niet bekend welke vorm dit precies moet hebben.

## Risico
<!-- vul hier het specifieke risico in dat kan worden gemitigeerd met behulp van deze maatregel -->
Het risico is dat er grondrechten, anders dan die expliciet beschermd zijn in andere maatregelen en vereisten, aangetast worden.

## Bijbehorende vereiste(n) { data-search-exclude }
<!-- Hier volgt een lijst met vereisten op basis van de in de metadata ingevulde vereiste -->
<!-- Let op! onderstaande regel met 'list_vereisten_on_maatregelen_page' niet weghalen! Deze maakt automatisch een lijst van bijbehorende verseisten op basis van de metadata  -->
??? expander "Bekijk alle vereisten"
    <!-- list_vereisten_on_maatregelen_page -->


## Bronnen
<!-- Vul hier de relevante bronnen in voor deze maatregel -->
- [Impact Assessment Mensenrechten en Algoritmes, deel 4](../hulpmiddelen/IAMA.md)
- [Onderzoekskader Algoritmes Auditdienst Rijk, SV.4](https://www.rijksoverheid.nl/documenten/rapporten/2023/07/11/onderzoekskader-algoritmes-adr-2023)


## Voorbeelden

!!! example "Gemeente Rotterdam – Evaluatierapport governance algoritmetoepassingen"

	De gemeente Rotterdam maakt gebruik van het Impact Assessment Mensenrechten en Algoritmes (IAMA) na controle op hoog-risico aan de hand van de Algorithm Risk Assesment (ARA). Rotterdam gebruikt hiermee de ARA als een ‘pre-IAMA’ om daarna (waar nodig) het IAMA verder uit te werken. Zij geven aan dat het IAMA veel toegevoegde waarde heeft, zo helpt het onder andere ontwikkelaars met het onderbouwen van problemen binnen een algoritme.

	Bron: [Werken aan verantwoorde algoritmisering](https://rotterdamraad.bestuurlijkeinformatie.nl/Reports/Document/d9d3ccf6-d3da-40cc-bf95-44633d081a19?documentId=73807119-e0b5-45d1-b949-0f4725a537f4)


!!! example "Diverse organisaties  - IAMA in Actie"

	In 2023 en 2024 zijn door Universiteit Utrecht (UU) en het [Rijks ICT Gilde (RIG)](https://www.rijksorganisatieodi.nl/rijks-ict-gilde) een aantal IAMA-trajecten begeleid bij overheidsorganisaties. Hierbij zijn verschillende sessies geweest per organisatie om alle gedeelten van het IAMA te beantwoorden met behulp van de expertise van de UU- of RIG-begeleiders. In het rapport [IAMA in Actie](https://www.rijksoverheid.nl/documenten/rapporten/2024/06/20/iama-in-actie-lessons-learned-van-15-iama-trajecten-bij-nederlandse-overheidsorganisaties) worden de bevindingen van deze IAMA-pilots uitgebreid toegelicht.


Heb je een voorbeeld of best practice, laat het ons weten via [algoritmes@minbzk.nl](mailto:algoritmes@minbzk.nl)
