---
title: Algoritme continuïteit

---

!!! info "Disclaimer"

    Het Algoritmekader is nog volop in ontwikkeling. Op deze plek willen we vooral aan de slag gaan op een open en transparante wijze. Het is dus niet definitief. Dat betekent dat er dingen opstaan die niet af zijn en soms zelfs fout. Mocht er iets niet kloppen, laat het ons weten via [GitHub](https://github.com/MinBZK/Algoritmekader).

# De continuïteit van het algoritme is gewaarborgd.

## Toelichting

## Maatregelen
- Alle gebruikte data moeten traceerbaar of reproduceerbaar zijn. In geval van uitbesteding van het beheer aan derden moeten hierover heldere afspraken gemaakt worden gemaakt.
- Richt een proces in rondom monitoring van het algoritme.
- Zorg voor heldere afspraken op het gebied van onderhoud en beheer op het algoritme, o.a. met betrekking tot de technische componenten, de gebruikte data, het model en de daarin gebruikte parameters.

## Bronnen

| **Norm of beheersmaatregel**                                                                                                                                                                            | **Bron**                                                                                                                                                                           |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| De organisatie heeft volledige controle of eigenaarschap over de data. Wanneer dit niet mogelijk is, zijn afspraken gemaakt om de functionele eisen te waarborgen.                                      | [Onderzoekskader algoritmes ADR 2023, DM.23](https://www.rijksoverheid.nl/documenten/rapporten/2023/07/11/onderzoekskader-algoritmes-adr-2023)                                     |
| Vastgelegde afspraken met externe partijen, waarborgen om lock-in en te grote afhankelijkheid te voorkomen. Inclusief exit-strategie. Denk ook aan eigenaarschap van gebruikte data voor het algoritme. | [Toetsingskader Algemene Rekenkamer, 1.07](https://www.rekenkamer.nl/onderwerpen/algoritmes-digitaal-toetsingskader/documenten/publicaties/2021/01/28/download-het-toetsingskader) |
| Ingericht proces rondom monitoring op genoemde aspecten                                                                                                                                                 | [Toetsingskader Algemene Rekenkamer, 1.08](https://www.rekenkamer.nl/onderwerpen/algoritmes-digitaal-toetsingskader/documenten/publicaties/2021/01/28/download-het-toetsingskader) |
| Voor alle databronnen/gebruikte data regelen dat er geen beperkingen/verplichtingen zijn                                                                                                                | [Toetsingskader Algemene Rekenkamer, 2.17](https://www.rekenkamer.nl/onderwerpen/algoritmes-digitaal-toetsingskader/documenten/publicaties/2021/01/28/download-het-toetsingskader) |
| Onderhoud en beheer op de technische componenten, het model, de gebruikte data, parameters, enzovoort                                                                                                   | [Toetsingskader Algemene Rekenkamer, 2.24](https://www.rekenkamer.nl/onderwerpen/algoritmes-digitaal-toetsingskader/documenten/publicaties/2021/01/28/download-het-toetsingskader) |

??? question "vragen"
    
    Op welk niveau willen we de normen definieren? Ik vind zelf "*De continuïteit van het algoritme is gewaarborgd*" wel heel erg vaag, terwijl de maatregelen daaronder eigenlijk best concreet zijn..? is dat niet eerder het niveau waar we op willen zitten?

## Risico
- De organisatie is voor de data of het model afhankelijk van derden en kan daardoor reproduceerbaarheid, prestatie, continuïteit en beheersing niet garanderen, [Onderzoekskader algoritmes ADR 2023, DM.23](https://www.rijksoverheid.nl/documenten/rapporten/2023/07/11/onderzoekskader-algoritmes-adr-2023).
- Er vindt na ingebruikname van het algoritme onvoldoende monitoring plaats op de werking ervan, waardoor fouten of ongewenste effecten in de toepassinge ervan niet tijdig worden opgemerkt.
- Er vindt onvoldoende capaciteit in de beheerorganisatie, waardoor benodigde aanpassingen op het algoritme niet tijdig worden doorgevoerd.

EC/AI HLEG April 2019 hoofdstuk II 1.7
COBIT APO11 / BAI04 / DSS04 / PO09 / APO14 / BAI06
AKR 2.17, 1.07, 1.08, 2.24

## Toelichting
- De data en het model zijn bij voorkeur in eigen beheer. Wanneer dit niet mogelijk is, zijn afspraken gemaakt om de functionele eisen te waarborgen.
- Na ingebruikname van een algoritme moet periodiek beoordeeld worden of het nog doet wat het zou moeten doen.  Je kunt hierbij denken aan monitoring op beschikbaarheid, prestaties/kwaliteit en of het algoritme voldoet aan actuele wet- en regelgeving.
- Het risico bestaat dat bij het in productie nemen van het algoritme onvoldoende aandacht wordt besteed aan de overdracht aan de beheersorganisatie. Gevolg hiervan kan zijn dat in de beheersorganisatie onvoldioende capaciteit en/of kennis beschikbaar is om eventuele aanpassingen tijdig door te voeren. 

## Maatregelen
- Alle gebruikte data moet traceerbaarbaar of reproduceerbaar zijn. In geval van uitbesteding van het beheer aan derden moeten hierover heldere afspraken gemaakt worden gemaakt. 
- Ingericht proces rondom monitoring op genoemde aspecten.
- Onderhoud en beheer op het algoritme vindt plaats op basis van heldere afspraken, o.a. met betrekking tot de technische componenten, de gebruikte data, het model en de daarin gebruikte parameters.


## Rollen
Hieronder beschrijven we welke rollen er betrokken kunnen worden bij de uitvoering van deze norm. 




## Best practices

