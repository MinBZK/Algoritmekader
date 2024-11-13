---
title: Technische robuustheid en veiligheid
hide: 
- path
---

# Technische robuustheid en veiligheid
Algoritmes van de overheid moeten robuust en veilig zijn. Dit betekent dat je algoritmes in elke situatie goed presteren, ook als er iets onverwachts gebeurt. Gaat er toch iets mis, dan is er een noodplan.

## Wat is technisch robuust en veilig?
Een technisch robuust en veilig algoritme presteert onder elke omstandigheid zoals het bedoeld is. 

Een robuust algoritme is:

* Nauwkeurig: Het algoritme geeft de juiste uitkomst voor het gewenste doel, of meldt dat de uitkomst onzeker is.
* Betrouwbaar: Ook in nieuwe of onverwachte situaties geeft het algoritme de juiste uitkomst.
* Reproduceerbaar: In dezelfde situaties vertoont het algoritme hetzelfde gedrag.

Een algoritme is veilig onder deze omstandigheden:

* Geautoriseerde toegang: Alleen personen en systemen met toestemming kunnen het algoritme gebruiken of beheren.
* Confidentieel: Het algoritme kan geen vertrouwelijke of gevoelige informatie lekken door aanvallen.
* Integer: Kwaadwillenden kunnen nergens in de levenscyclus van het algoritme onbedoeld de controle van het model overnemen.
* Beschikbaar: Je kunt op elk moment het algoritme gebruiken waarvoor het bedoeld is. Gaat dit toch fout, dan ontstaat er geen grote schade.

## Belang van robuuste, veilige algoritmes
Algoritmes kunnen grote schade veroorzaken aan de maatschappij. Met een technisch robuust en goed beveiligd algoritme voorkom je:

* onverwachte schadelijke uitkomsten, zoals verkeerde beslissingen of discriminatie door onvoldoende nauwkeurigheid 
* uitval van het systeem
* lekken van informatie, zoals persoonsgegevens
* gebruik van het algoritme voor verkeerde doelen
* schade door misbruik of aanvallen van buitenaf

## Gebruik algoritmes op de juiste manier
Gebruik een algoritme alleen voor het juiste doel en op de juiste manier. Dit is de manier die is getest en gecontroleerd. Wanneer je het algoritme gebruikt voor een ander doel of in een verkeerde context, zijn de resultaten niet meer betrouwbaar. 

Voorkom dat medewerkers op de verkeerde manier werken met het algoritme. Zij moeten weten wat het algoritme wel en niet kan. En wat ze moeten doen als het algoritme fouten maakt of niet goed werkt. Denk aan technische en organisatorische ondersteuning:

* Leid medewerkers op.
* Maak duidelijke afspraken over werkprocessen ([governance](governance.md)).
* Stuur gebruikers in het juiste gebruik via interactie en technische verbeteringen in het ontwerp.

## Controleer regelmatig
Begin zo vroeg mogelijk met regelmatige controles van de uitkomst en werking van het algoritme. In de praktijk verandert de omgeving en de situatie waarin het algoritme wordt gebruikt. Controleer daarom regelmatig of het algoritme nog werkt zoals het is bedoeld. 

### Voorbeeld
Een algoritme leest kentekens tijdens parkeercontroles. Het herkent de juiste letters en cijfers op elk kenteken. Ook als het bord een andere kleur heeft, op een andere plek zit of vies is. Het algoritme is nauwkeurig en dus robuust.

Een algoritme berekent het risico op fraude door mensen. Maar bij personen uit dezelfde groep geeft het algoritme de ene keer als uitkomst ‘hoog risico’ en de andere keer ‘geen risico’. De uitkomst is niet reproduceerbaar. Hierdoor is het algoritme niet robuust.

### Controles voorbereiden
Bereid de controles voor tijdens de levenscyclusfases probleemanalyse, ontwerp en dataverkenning en datapreparatie. Onderzoek de situatie waarin je organisatie het algoritme gaat gebruiken: Wat zijn de risico’s? Welke onderdelen van het algoritme moet je evalueren? Analyseer de kwaliteit en variatie van de data. Bedenk maatregelen waarmee je de risico’s zoveel mogelijk voorkomt. En bedenk met welke methode je de controles gaat evalueren. 

Ontwikkel je het algoritme zelf, controleer dan tijdens de ontwikkeling al wat er gebeurt in de verschillende situaties die je verwacht. Experimenteer met nieuwe combinaties van de inputdata en gebruik verschillende representatieve test-sets.

### Controles uitvoeren
Voer de controles uit tijdens de ontwikkelfase en de verificatie- en validatiefase. Test het algoritme goed. Evalueer hoe robuust en veilig het algoritme is. Verbeter het algoritme waar nodig. En monitor goed welke data het algoritme gebruikt, zodat je veranderingen in die data snel signaleert. Maak een noodplan voor als blijkt dat het algoritme niet meer werkt zoals het bedoeld was.

Blijf regelmatig controleren tijdens de fases implementatie en monitoring en beheer. Dit zijn de fases waarin je het algoritme gebruikt. Presteert het algoritme niet goed, los het probleem dan op of stop het gebruik. 

> [!TIP]
> Houd rekening met concept drift. Dit betekent dat de eigenschappen van je data in de loop van de tijd kunnen veranderen. Hierdoor trekt je algoritme mogelijk verkeerde conclusies. Zo was er vóór 2020 een verband tussen thuiswerken en ziek zijn. Maar sinds de coronacrisis in 2020 is dit verband minder sterk, omdat gezonde mensen vaker thuiswerken. 

## Bescherm algoritmes tegen aanvallen en bedreigingen
Beveilig het ICT-systeem waarin het algoritme wordt gebruikt. Dit zijn bijvoorbeeld maatregelen uit de Baseline Informatiebeveiliging Overheid (BIO) die je standaard neemt voor beveiliging van ICT-systemen tegen cyberaanvallen.

Beveilig de algoritmes zelf tegen cybercriminelen. Belangrijke bedreigingen voor algoritmes zijn:

* Trainingsdata van een AI-model aanpassen, waardoor het later fouten gaat maken tijdens het gebruik.
* Input van een algoritme aanpassen om het normale gedrag te omzeilen, of om het algoritme specifieke, ongewenste output te laten geven.
* Een ‘achterdeurtje’ inbouwen met toegang tot het algoritme, waardoor aanvallers het algoritme kunnen misbruiken.
* Intellectueel eigendom of kwetsbaarheden afleiden uit de details van een AI-model.
* Gevoelige informatie afleiden uit de eigenschappen van trainingsdata.

Lees meer in het [TNO-rapport Verkenning van het raakvlak cybersecurity en AI](https://www.rijksoverheid.nl/documenten/rapporten/2024/10/28/tk-bijlage-4-tno-2024-r10768-verkenning-van-het-raakvlak-van-cybersecurity-en-ai).

Aandachtspunten voor het beschermen van algoritmes tegen specifieke dreigingen:

* Controleer of de trainingsdata geschikt, correct en betrouwbaar is.
* Controleer of de inputdata geschikt, correct en betrouwbaar is.
* Houd bij complexe algoritmes rekening met verborgen en onwenselijke functionaliteiten.
* Train je algoritme om bestand te zijn tegen aanvallen. 
* Stimuleer veilig gebruik van het algoritme door gebruikers.
* Maak afspraken met leveranciers en controleer de geleverde algoritmes voor gebruik.
* Test periodiek of het algoritme weerbaar is tegen bekende aanvallen.

Hiermee voorkom je:

* misleiding, doordat het algoritme niet werkt op de bedoelde manier
* verkeerde implementatie en daardoor een verkeerde werking

Begin zo vroeg mogelijk met beveiligen. Beveilig in elk geval in de fases ontwikkelen, verificatie en validatie, implementatie, monitoring en beheer en uitfaseren.

## Verklein de kans op schade
Veroorzaak zo min mogelijk schade als het toch fout gaat. En maak een noodplan voor incidenten. Het doel van dit plan is ervoor zorgen dat de fout zo min mogelijk gevolgen heeft voor de organisatie en de maatschappij. In het plan staat bijvoorbeeld wie wat moet doen als het systeem uitvalt.

## Vereisten

<!-- list_vereisten onderwerp/technische-robuustheid-en-veiligheid no-search no-onderwerp no-rol no-levenscyclus -->

## Aanbevolen maatregelen

<!-- list_maatregelen onderwerp/technische-robuustheid-en-veiligheid no-search no-onderwerp no-rol no-levenscyclus -->

## Hulpmiddelen

<!-- list_hulpmiddelen onderwerp/technische-robuustheid-en-veiligheid no-search no-onderwerp no-rol no-levenscyclus no-id -->

## Bronnen

- Natalia Díaz-Rodríguez et al, 2023, [Connecting the dots in trustworthy Artificial Intelligence: From AI principles, ethics, and key requirements to responsible AI systems and regulation](https://doi.org/10.1016/j.inffus.2023.101896), Information Fusion 99.
- Andrea Tocchetti, Lorenzo Corti, Agathe Balayn, Mireia Yurrita, Philip Lippmann, Marco Brambilla, and Jie Yang. 2022. [A.I. Robustness: a Human-Centered Perspective on Technological Challenges and Opportunities](https://agathe-balayn.github.io/assets/pdf/ACM_survey23.pdf). In ACM, New York, NY, USA
- Ronan Hamon, Henrik Junklewitz, Ignacio Sanchez, 2020, Robustness and Explainability of Artificial Intelligence: from technical to policy solutions, JRC Technical Report, EUR 30040 EN
- Bhanu Chander, Chinju John, Lekha Warrier, Gopalakrishnan Kumaravelan, 2024, [Toward Trustworthy AI in the Context of Explainability and Robustness](http://dx.doi.org/10.1145/3675392 ), ACM Computing Surveys
- Niels Brink, Yori Kamphuis, Yuri Maas, Gwen Jansen-Ferdinandus, Jip van Stijn, Bram Poppink, Puck de Haan, Irina Chiscop, 2023, Adversarial AI in de cyber domain, TNO-2023-R10292-EN
