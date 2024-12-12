---
title: Zorg dat er geen gevoelige informatie kan lekken op basis van de output van het algoritme
id: urn:nl:ak:mtr:owk-09
toelichting: Zorg dat er geen gevoelige informatie kan lekken op basis van de output van een algoritme. Limiteer daarom de hoeveelheid informatie in de uitkomst.
levenscyclus:
- ontwikkelen
- implementatie
- monitoring-en-beheer
onderwerp:
- technische-robuustheid-en-veiligheid
rollen:
- ontwikkelaar
vereiste:
- aia-10-nauwkeurigheid-robuustheid-cyberbeveiliging
- aia-22-gebruiksverantwoordelijken-monitoren-werking
- aia-32-ai-modellen-algemene-doeleinden-systeemrisico-cyberbeveiliging
- bio-01-beveiliging-informatie-en-informatiesystemen
- avg-12-beveiliging-van-verwerking
hide:
- navigation
- toc
---

<!-- Let op! onderstaande regel met 'tags' niet weghalen! Deze maakt automatisch de knopjes op basis van de metadata  -->
<!-- tags -->

## Maatregel
Zorg dat er geen gevoelige informatie kan lekken op basis van de output van een algoritme. 
Limiteer daarom de hoeveelheid informatie in de uitkomst.

## Toelichting
Een aanvaller kan aan de hand van de uitkomsten van een model proberen om bepaalde eigenschappen over het model of de dataset te achterhalen. In de [brochure van de AIVD](https://www.aivd.nl/documenten/publicaties/2023/02/15/ai-systemen-ontwikkel-ze-veilig) wordt specifiek gewaarschuwd voor “*model engineering*”, “*model inversion*” en “*inference*” aanvallen.

- **Model engineering** refereert aan aanvallen die als bedoeling hebben om te achterhalen hoe het model werkt. Dit kan bijvoorbeeld als doel hebben om intellectueel eigendom te stelen of om effectiever zwakheden in het model te kunnen onderzoeken.

- **Model inversion** beschrijft aanvallen waarbij het doel is om de trainingsdata te reconstrueren. Dit kan wederom interessant zijn voor het stelen van intellectueel eigendom, maar ook het achterhalen van privé gegevens als het bijvoorbeeld om een medische dataset gaat.

- **Inference** aanvallen zijn ook gericht op het achterhalen van informatie over de trainingsdata. In tegenstelling tot model inversion, is het doel niet om de gehele trainingsdata terug te krijgen, maar specifieke informatie. Zo kan het doel bijvoorbeeld zijn om te achterhalen of een bepaald persoon onderdeel was van de trainingsdata of kan met een deel van de informatie over een persoon geprobeerd worden om missende informatie te achterhalen. Dit type aanvallen is vaak makkelijker uit te voeren van een volledige model inversion.

### Technieken voor voorkomen van lekken

### Statistical Disclosure Control
Statistical Disclosure Control (SDC) is een veelgebruikte techniek om ervoor te zorgen dat er geen gevoelige informatie lekt uit de uitkomst van een datagedreven onderzoek.
Alhoewel SDC vooral gericht is om traditionele dataanalyses kan het ook gebruikt worden in de context van algoritmes of AI. 
Er zijn verschillende voorbeelden hoe SDC kan worden toegevoegd aan een AI-systeem, zoals [The SACRO-ML package](https://arxiv.org/abs/2212.01233).

### k-anonimity
Daarnaast bestaan er ook nieuwere technieken die kunnen helpen bij het onherkenbaar maken van mogelijk gevoelige informatie in de outputs van algoritmes. Zo zijn er technieken gebaseerd op het generaliseren van data om individuen onherkenbaar te maken, zoals [k-anonimity](https://dl.acm.org/doi/10.1142/s0218488502001648). 

### Differential privacy
Ook bestaan er technieken die ruis toevoegen aan de uitkomst, met wiskundige garanties van de veiligheid. De meest populaire techniek voor het toevoegen van ruis is [differential privacy](https://dl.acm.org/doi/10.1007/11787006_1).

### Rate limiting
De hierboven benoemde oplossingen focussen op het beveiligen van één output van het algoritme. Veel aanvallen berusten echter ook op het veelvuldig aanroepen van een algoritme. Een andere oplossing die dit tegen kan gaan is het limiteren van het aantal interacties dat een gebruiker mag hebben met een algoritme, ook wel bekend als *rate limiting*. 

## Transparantie vs veiligheidsrisico
Tot slot moet er ook afgewogen worden op welke manier [transparantie](../../onderwerpen/transparantie.md) van het algoritme leidt tot extra veiligheidsrisico’s. 
Intuïtief kan een aanvaller makkelijker dingen te weten komen over een algoritme als er informatie gepresenteerd wordt over waarom bijvoorbeeld een AI-systeem een bepaalde keuze maakt. 
Zo is een veelgebruikte techniek voor inference aanvallen om te kijken hoe zelfverzekerd een model is voor een bepaalde input. 
Een erg zelfverzekerde beslissing duidt er namelijk vaak op dat de input inderdaad in de trainingsdata zat. 
Ook het gebruik van explainable AI kan leiden tot extra veiligheidsrisico’s. Zo kan een uitleg gebaseerd op een tegenvoorbeeld makkelijk informatie over een persoon lekken als deze het tegenvoorbeeld is. In 2024 is er [een overzicht van bekende gevaren van specifieke uitlegbaarheidstechnieken](https://arxiv.org/abs/2404.00673).

## Bijbehorende vereiste(n) { data-search-exclude }
??? expander "Bekijk alle vereisten"
    <!-- list_vereisten_on_maatregelen_page -->

## Risico
Als een gebruiker teveel informatie te zien krijgt kan dit bijvoorbeeld leiden tot het lekken van trainingsdata of eigenschappen van het algoritme.

## Bronnen
- [Smith, et al., Safe machine learning model release from Trusted Research Environments: The SACRO-ML package](https://arxiv.org/abs/2212.01233)
- [Sweeney, et al., k-anonymity: a model for protecting privacy](https://dl.acm.org/doi/10.1142/s0218488502001648)
- [Dwork, et al., Differential privacy](https://dl.acm.org/doi/10.1007/11787006_1)
- [Nguyen, et al., A Survey of Privacy-Preserving Model Explanations: Privacy Risks, Attacks, and Countermeasures](https://arxiv.org/abs/2404.00673)

## Voorbeeld
<!-- Voeg hier een voorbeeld toe, door er bijvoorbeeld naar te verwijzen -->
