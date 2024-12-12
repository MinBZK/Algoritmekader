---
title: Voorkom kwetsbaarheden die geïntroduceerd worden in de supply-chain van het algoritme
id: urn:nl:ak:mtr:owp-36
toelichting: Het in gebruik nemen van algoritmes die door anderen zijn ontwikkeld brengt risico’s met zich mee waar je je tegen moet beschermen. Deze risico’s moeten adequaat afgedekt worden door afhankelijkheden te analyseren en afspraken te maken met leveranciers en controles uit te voeren.
vereiste:
- aia-10-nauwkeurigheid-robuustheid-cyberbeveiliging
- aia-22-gebruiksverantwoordelijken-monitoren-werking
- aia-32-ai-modellen-algemene-doeleinden-systeemrisico-cyberbeveiliging
- bio-01-beveiliging-informatie-en-informatiesystemen
- avg-12-beveiliging-van-verwerking
levenscyclus:
- ontwerp
onderwerp:
- publieke-inkoop
- data
- technische-robuustheid-en-veiligheid
rollen:
- ontwikkelaar
- beleid-en-advies
- jurist
hide:
- navigation
---

<!-- tags -->

## Maatregel
Het in gebruik nemen van algoritmes die door anderen zijn ontwikkeld brengt risico’s met zich mee waar je je tegen moet beschermen. 
Deze risico’s moeten adequaat afgedekt worden door afhankelijkheden te analyseren en afspraken te maken met leveranciers en controles uit te voeren.

## Toelichting
Veel algoritmes zullen niet zelf ontwikkeld worden, maar bijvoorbeeld compleet [ingekocht](../../onderwerpen/publieke-inkoop.md) worden of op een externe server getraind worden. 
Redenen om dit te doen zijn het reeds beschikbaar zijn van een voorgetraind algoritme of bijvoorbeeld een gebrek aan technische kennis, een gebrek aan voldoende trainingsdata en een gebrek aan rekenkracht binnen de eigen organisatie. 

Echter is het een stuk lastiger om deze modellen te beschermen tegen aanvallen zoals [backdoors] omdat er geen (directe) controle is op het correct uitvoeren van een trainingsproces. 

Een eerste stap is om in kaart te brengen welke afhankelijkheden er zijn en te onderzoeken of deze inderdaad te vertrouwen zijn. 
Het helpt daarbij om bekende, vertrouwde leveranciers te gebruiken. Daarnaast moeten er duidelijke afspraken gemaakt worden met leveranciers, bijvoorbeeld in de vorm van een [Service Level Agreement (SLA)](2-owp-26-maak-vereisten-onderdeel-van-service-level-agreement.md). 
Op deze manier kan bijvoorbeeld afgedwongen worden waar de data vandaan komt en hoe deze beschermd moet worden, wie er verantwoordelijk is voor het correct trainen en functioneren van het algoritme en hoe incidenten afgehandeld moeten worden.

Tot slot kunnen extra maatregelen genomen worden om te verifiëren dat het model inderdaad functioneert zoals afgesproken. Zo kunnen er formele methodes gebruikt worden om het algoritme te verifiëren, en kan het gedrag van het algoritme getest worden tegen bekende, foutieve invoerwaarden. 


## Bijbehorende vereiste(n) { data-search-exclude }
??? expander "Bekijk alle vereisten"
    <!-- list_vereisten_on_maatregelen_page -->

## Risico
Als onvoldoende duidelijk is hoe een algoritme werkt en tot stand is gekomen kan deze onverwachts gedrag vertonen tijdens het gebruik.

## Bronnen
- [TNO, Ministerie van Justitie en Veiligheid, Verkenning van het raakvlak van cybersecurity en AI](https://www.rijksoverheid.nl/onderwerpen/terrorismebestrijding/documenten/rapporten/2024/10/28/tk-bijlage-4-tno-2024-r10768-verkenning-van-het-raakvlak-van-cybersecurity-en-ai)
- [AIVD, AI-systemen: ontwikkel ze veilig](https://www.aivd.nl/documenten/publicaties/2023/02/15/ai-systemen-ontwikkel-ze-veilig#:~:text=Steeds%20meer%20computersystemen%20maken%20gebruik,organisaties%20zich%20hiertegen%20kunnen%20verdedigen )

## Voorbeeld

Heb jij een goed voorbeeld? Laat het ons weten!

