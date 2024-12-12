---
title: Controleer de data op manipulatie en ongewenste afhankelijkheden
id: urn:nl:ak:mtr:dat-11
toelichting: De dataset die gebruikt wordt om een model te trainen of updaten moet periodiek gecontroleerd worden op manipulatie (data poisoning). Voorkom ongewenste afhankelijkheden.
levenscyclus:
- dataverkenning-en-datapreparatie
- monitoring-en-beheer
vereiste:
- aia-10-nauwkeurigheid-robuustheid-cyberbeveiliging
- aia-22-gebruiksverantwoordelijken-monitoren-werking
- aia-32-ai-modellen-algemene-doeleinden-systeemrisico-cyberbeveiliging
- bio-01-beveiliging-informatie-en-informatiesystemen
- avg-12-beveiliging-van-verwerking
onderwerp:  
- data  
- technische-robuustheid-en-veiligheid
rollen:  
- ontwikkelaar
- beleid-en-advies
hide:  
- navigation  
- toc  
---

<!-- Let op! onderstaande regel met 'tags' niet weghalen! Deze maakt automatisch de knopjes op basis van de metadata  -->
<!-- tags -->

## Maatregel
De dataset die gebruikt wordt om een model te trainen of updaten moet periodiek gecontroleerd worden op manipulatie (data poisoning). Voorkom ongewenste afhankelijkheden.

## Toelichting
Dit type aanval wordt een “data poisoning” aanval genoemd [^1] [^2] [^3]. Een kwaadwillende kan op verschillende manieren te werk gaan:

- Bewust verkeerde informatie aan de dataset toevoegen. Dit is bijvoorbeeld mogelijk door als aanvaller zelf een foutieve dataset beschikbaar te stellen. Controleer daarom goed of een afgenomen dataset de kenmerken heeft die je verwacht. Daarnaast kun je ook nog verifiëren of bijvoorbeeld het proces waarmee de dataset vergaard is op de juiste manier is uitgevoerd. Tot slot is het verstandig om te voorkomen dat de dataset afhankelijk is van een enkele bron.
- Een aanvaller kan een bestaande dataset aanpassen, door bijvoorbeeld labels om te draaien. In dit geval moet een aanvaller toegang krijgen tot de locatie van de dataset. Bescherming hiertegen begint met algemene beveiligingsmaatregelen, bijvoorbeeld zoals beschreven in de [BIO](../hulpmiddelen/BIO.md). Daarnaast moet er ook gekeken worden naar het voorkomen van een insider aanval. Dit kan door selectief te zijn in het verlenen van toegang tot de locatie van de data en bijvoorbeeld het toepassen van een vier-ogen principe.
- In lijn met het aanpassen van de dataset kan een aanvaller ook een deel van de dataset verwijderen. Dit is naar verwachting makkelijker te realiseren dan het selectief aanpassen van de data. Door bijvoorbeeld alle data over een bepaalde groep personen uit de dataset te verwijderen functioneert het model minder goed voor die groep. Controleer daarom of de dataset waarmee uiteindelijk getraind wordt precies hetzelfde is als de origineel bedoelde data. Dit kan bijvoorbeeld door middel van een handtekening die geverifieerd kan worden. 

Op deze manieren kan een aanvaller een model algemeen slecht laten functioneren, of alleen fouten laten maken op specifiek gekozen invoerwaarden. Zo kan een aanvaller de trainingsdata zo beïnvloeden dat nummerborden met een stip altijd foutief gelezen worden waardoor criminelen kentekencontroles kunnen ontwijken. In dit geval wordt ook wel gesproken over een [“backdoor” aanval](4-owk-09-adversarial-aanvallen.md#backdoor).

### Adversarial traning
Daarnaast kan het principe van [adversarial training](https://arxiv.org/abs/1611.01236) worden toegepast door zelf bewust foutieve invoerwaarden aan de trainingsdata toe te voegen. 
Door een algoritme hierop te laten trainen kan deze beter bestand gemaakt worden tegen aanvallen tijdens het gebruik.

## Bijbehorende vereiste(n) { data-search-exclude }
??? expander "Bekijk alle vereisten"
    <!-- list_vereisten_on_maatregelen_page -->

## Risico
Een aanvaller kan proberen om de trainingsdataset te manipuleren om het uiteindelijke model doelbewust fouten te laten maken. Dit kan leiden tot verkeerde antwoorden, vooroordelen of zelfs kwetsbaarheden in het model.

## Bronnen
- [Crowdstrike, Data Poisoning: The Exploitation of Generative AI](https://www.crowdstrike.com/en-us/cybersecurity-101/cyberattacks/data-poisoning/)
- [TNO, Ministerie van Justitie en Veiligheid, Verkenning van het raakvlak van cybersecurity en AI](https://www.rijksoverheid.nl/onderwerpen/terrorismebestrijding/documenten/rapporten/2024/10/28/tk-bijlage-4-tno-2024-r10768-verkenning-van-het-raakvlak-van-cybersecurity-en-ai)
- [AIVD, AI-systemen: ontwikkel ze veilig](https://www.aivd.nl/documenten/publicaties/2023/02/15/ai-systemen-ontwikkel-ze-veilig#:~:text=Steeds%20meer%20computersystemen%20maken%20gebruik,organisaties%20zich%20hiertegen%20kunnen%20verdedigen )
- [Kurakin, et al., Adversarial Machine Learning at Scale](https://arxiv.org/abs/1611.01236)

[^1]: [Crowdstrike, Data Poisoning: The Exploitation of Generative AI](https://www.crowdstrike.com/en-us/cybersecurity-101/cyberattacks/data-poisoning/)
[^2]: [Ministerie van Justitie en Veiligheid, Verkenning van het raakvlak van cybersecurity en AI](https://www.rijksoverheid.nl/onderwerpen/terrorismebestrijding/documenten/rapporten/2024/10/28/tk-bijlage-4-tno-2024-r10768-verkenning-van-het-raakvlak-van-cybersecurity-en-ai)
[^3]: [AIVD, AI-systemen: ontwikkel ze veilig](https://www.aivd.nl/documenten/publicaties/2023/02/15/ai-systemen-ontwikkel-ze-veilig#:~:text=Steeds%20meer%20computersystemen%20maken%20gebruik,organisaties%20zich%20hiertegen%20kunnen%20verdedigen )