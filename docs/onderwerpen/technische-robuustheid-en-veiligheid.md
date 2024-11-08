---
title: Technische robuustheid en veiligheid
summary: 
icon: material/cog
---

# Technische robuustheid en veiligheid
Algoritmes van de overheid moeten robuust en veilig zijn. Dit betekent dat je algoritmes in elke situatie goed moeten presteren. Ook als er iets onverwachts gebeurt. En er moet een plan zijn voor als er toch iets misgaat.

## Wat is technisch robuust en veilig?
Een technisch robuust en veilig algoritme presteert onder elke omstandigheid zoals het bedoeld is. 
Een robuust algoritme is:

- Nauwkeurig: Het geeft de juiste uitkomst voor het gewenste doel, maar kan ook aangeven wanneer het daar niet zeker over is.
- Betrouwbaar: Het geeft de juiste uitkomst in nieuwe of onverwachte situaties.
- Reproduceerbaar: Het vertoont hetzelfde gedrag in dezelfde situaties.

Algoritmes zijn veilig onder deze omstandigheden:

- Alleen geautoriseerde personen en systemen kunnen het algoritme gebruiken.
- Het algoritme is op elk moment beschikbaar voor de werking waarvoor het bedoeld is. Is het algoritme toch beperkt beschikbaar, dan is de mogelijke schade hiervan te overzien.

## Belang van robuuste, veilige algoritmes
Algoritmes kunnen grote schade veroorzaken aan de maatschappij. Met een technisch robuust en goed beveiligd algoritme voorkom je:

- onverwachte schadelijke fouten, zoals verkeerde beslissingen door onvoldoende nauwkeurigheid, discriminatie of het uitvallen het systeem
- lekken van informatie, zoals persoonsgegevens
- gebruik van het algoritme voor verkeerde doeleinden
- schade door misbruik of aanvallen van buitenaf

## Gebruik het algoritme waarvoor het bedoeld is
Gebruik het algoritme alleen op de manier zoals het bedoeld is. Dit is de manier die is getest en gecontroleerd. Wanneer het algoritme voor een ander doel wordt gebruikt of in een verkeerde context wordt gebruikt, zijn de resultaten niet meer betrouwbaar. 

Voorkom dat medewerkers op de verkeerde manier werken met het algoritme. Zij moeten weten wat het algoritme wel en niet kan. En wat ze moeten doen als het algoritme fouten maakt of niet goed werkt. Denk aan technische als organisatorische ondersteuning:

- Leid medewerkers op.
- Zorg voor duidelijke processen (governance), zodat gebruikers weten wat de beperkingen zijn en weten wat ze kunnen doen als het algoritme niet werkt zoals bedoeld.
- Zorg voor technische interventies in het ontwerp en interactie met de gebruiker, die gebruikers sturen in het juiste gebruik.

## Controleer regelmatig
Begin zo vroeg mogelijk met het testen en controleren van de gegevens die je gebruikt en de verwachte en werkelijke uitkomsten. In de praktijk verandert de omgeving en de situatie waarin het algoritme wordt gebruikt. Controleer daarom regelmatig of het algoritme de verwachte output geeft:

- Nauwkeurig: Het geeft de juiste uitkomst voor het gewenste doel, maar kan ook aangeven wanneer het daar niet zeker over is.
- Betrouwbaar: Het geeft de juiste uitkomst in nieuwe of onverwachte situaties.
- Reproduceerbaar: Het vertoont hetzelfde gedrag in dezelfde situaties.

Ontwikkel je zelf het algoritme, controleer dan tijdens de ontwikkeling al wat er gebeurt bij verwachte variaties. Zorg bijvoorbeeld dat je bent voorbereid op nieuwe combinaties van de inputdata. Gebruik verschillende test-sets en zorg voor goede monitoring van de gebruikte data, zodat veranderingen in de data snel gesignaleerd worden. 

In de eerste fases [probleemanalyse](../levenscyclus/probleemanalyse.md), [ontwerp](../levenscyclus/ontwerp.md) en [dataverkenning en datapreparatie](../levenscyclus/dataverkenning-en-datapreparatie.md) focus je op een goede voorbereiding. Verken de context waarin het algoritme gebruikt wordt, identificeer de risico’s, concretiseer waarop het algoritme geëvalueerd moet worden, analyseer de data, en ontwerp preventieve maatregelen en evaluatiemethoden. 

Vervolgens voer je dit uit in de [ontwikkelfase](../levenscyclus/ontwikkelen.md) en de [verificatie- en validatiefase](../levenscyclus/verificatie-en-validatie.md). Zorg dat het algoritme goed getest wordt en evalueer het algoritme op de drie aspecten van robuustheid. Waar nodig verbeter je het algoritme. Zorg dat je een uitwijkplan hebt, zodat je weet wat je moet doen als blijkt dat het algoritme niet meer werkt zoals beoogd.

Is het algoritme in gebruik ([implementatie](../levenscyclus/implementatie.md) en [monitoring en beheer](../levenscyclus/monitoring-en-beheer.md), dan blijf je regelmatig controleren. Presteert het algoritme niet goed, los het probleem dan op of [stop het gebruik](../levenscyclus/uitfaseren.md). 

### Voorbeelden
Een algoritme leest kentekens tijdens parkeercontroles. Het herkent de juiste letters en cijfers op elk kenteken. Ook als het bord een andere kleur heeft, op een andere plek zit of vies is. Het algoritme is nauwkeurig en dus robuust.
Een algoritme berekent het risico op fraude door mensen. Maar bij personen uit dezelfde groep geeft het algoritme de ene keer als uitkomst ‘hoog risico’ en de andere keer ‘geen risico’. De uitkomst is niet reproduceerbaar. Hierdoor is het algoritme niet robuust.

!!! tip "Tip"

    Houd rekening met 'concept drift'. Dit betekent dat de eigenschappen van je data in de loop van de tijd kunnen veranderen. Hierdoor trekt je algoritme mogelijk verkeerde conclusies. Zo was er vóór 2020 een verband tussen thuiswerken en ziek zijn. Maar sinds de coronacrisis in 2020 is dit verband minder sterk, omdat gezonde mensen vaker thuiswerken. 

## Bescherm algoritmes tegen aanvallen en bedreigingen
Beveilig het ICT-systeem waarin het algoritme wordt gebruikt. Dit zijn bijvoorbeeld maatregelen uit de Baseline Informatiebeveiliging Overheid (BIO) die je standaard neemt voor beveiliging van ICT-systemen tegen cyberaanvallen.

Begin zo vroeg mogelijk met beveiligen. Beveilig in elk geval in de fases [ontwikkelen](../levenscyclus/ontwikkelen.md), [verificatie en validatie](../levenscyclus/verificatie-en-validatie.md), [implementatie](../levenscyclus/implementatie.md), [monitoring en beheer](../levenscyclus/monitoring-en-beheer.md) en [uitfaseren](../levenscyclus/uitfaseren.md).

## Verklein de kans op schade
Veroorzaak zo min mogelijk schade als het toch fout gaat. 

Maak een uitwijkplan voor incidenten. Het doel van dit plan is ervoor zorgen dat de fout zo min mogelijk gevolgen heeft voor de organisatie en de maatschappij. In het plan staat bijvoorbeeld wie wat moet doen als het systeem uitvalt.

## Vereisten

<!-- list_vereisten onderwerp/technische-robuustheid-en-veiligheid no-search no-onderwerp no-rol no-levenscyclus -->

## Maatregelen

<!-- list_maatregelen onderwerp/technische-robuustheid-en-veiligheid no-search no-onderwerp no-rol no-levenscyclus -->

## Bronnen

- Natalia Díaz-Rodríguez et al, 2023, [Connecting the dots in trustworthy Artificial Intelligence: From AI principles, ethics, and key requirements to responsible AI systems and regulation](https://doi.org/10.1016/j.inffus.2023.101896), Information Fusion 99.
- Andrea Tocchetti, Lorenzo Corti, Agathe Balayn, Mireia Yurrita, Philip Lippmann, Marco Brambilla, and Jie Yang. 2022. [A.I. Robustness: a Human-Centered Perspective on Technological Challenges and Opportunities](https://agathe-balayn.github.io/assets/pdf/ACM_survey23.pdf). In ACM, New York, NY, USA
- Ronan Hamon, Henrik Junklewitz, Ignacio Sanchez, 2020, Robustness and Explainability of Artificial Intelligence: from technical to policy solutions, JRC Technical Report, EUR 30040 EN
- Bhanu Chander, Chinju John, Lekha Warrier, Gopalakrishnan Kumaravelan, 2024, [Toward Trustworthy AI in the Context of Explainability and Robustness](http://dx.doi.org/10.1145/3675392 ), ACM Computing Surveys
- Niels Brink, Yori Kamphuis, Yuri Maas, Gwen Jansen-Ferdinandus, Jip van Stijn, Bram Poppink, Puck de Haan, Irina Chiscop, 2023, Adversarial AI in de cyber domain, TNO-2023-R10292-EN

## Help ons deze pagina te verbeteren
Deel je idee, suggestie of opmerking via [GitHub](https://github.com/MinBZK/Algoritmekader/edit/main/docs/bouwblokken/technische-robuustheid-en-veiligheid/index.md) of mail ons via [algoritmes@minbzk.nl](mailto:algoritmes@minbzk.nl).
