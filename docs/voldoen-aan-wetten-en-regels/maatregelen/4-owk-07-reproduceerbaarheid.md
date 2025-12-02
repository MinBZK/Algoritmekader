---
title: Zorg voor reproduceerbaarheid van de uitkomsten
id: urn:nl:ak:mtr:owk-07
toelichting: Zorg ervoor dat uitkomsten van het algoritme herhaald of herleid kunnen worden.
levenscyclus:
- ontwikkelen
onderwerp:
- technische-robuustheid-en-veiligheid
- transparantie
rollen:
- ontwikkelaar
vereiste:
- aia-10-nauwkeurigheid-robuustheid-cyberbeveiliging
sources:
  ADR: DM.14
hide:
- navigation
- toc
---

<!-- tags -->

## Maatregel
Zorg ervoor dat uitkomsten van het algoritme herhaald of herleid kunnen worden.

## Toelichting
De reproduceerbaarheid omschrijft of de resultaten van een algoritme herhaald of herleid kunnen worden.
Het betekent dat dezelfde input leidt tot dezelfde output in alle situaties. In ieder geval moet het algoritme dezelfde werking vertonen.

Reproduceerbaarheid is sterk gelinkt aan herleidbaarheid en traceerbaarheid.
Uitkomsten moeten altijd herleid kunnen worden aan de hand van het model en de data.

Om te zorgen voor reproduceerbaarheid van de uitkomsten, kan je de volgende stappen nemen:

1. [Bepaal welke mate van reproduceerbaarheid nodig is](#bepaal-welke-mate-van-reproduceerbaarheid-nodig-is)
2. [Implementeer verschillende stappen die bijdragen aan reproduceerbaarheid](#implementeer-verschillende-stappen-die-bijdragen-aan-reproduceerbaarheid)
3. [Test of het algoritme het gewenste niveau van reproduceerbaarheid heeft](#test-of-het-algoritme-het-gewenste-niveau-van-reproduceerbaarheid-heeft)

## Bepaal welke mate van reproduceerbaarheid nodig is
Afhankelijk van de toepassing moeten de resultaten van het algoritme precies te reproduceren zijn.
Wanneer er gebruik wordt gemaakt van generatieve AI hoeft de output niet altijd exact hetzelfde te zijn.

## Implementeer verschillende stappen die bijdragen aan reproduceerbaarheid
Om te zorgen dat uitkomsten reproduceerbaar zijn, implementeer je het volgende in je processen en systemen:

- Zorg voor versiebeheer op de code en de bijbehorende systemen. Dit geldt zowel tijdens ontwikkeling als tijdens operatie. Tools als [GitHub](https://github.com/) of [GitLab](https://about.gitlab.com/) kunnen ondersteunen bij versiebeheer van code.
- Zorg dat de data (trainings- en testdata) kan worden gereproduceerd. Maak gebruik van versiebeheer op de data, maak backups van de data, sla snapshots van de data op en maak gebruik van timestamps.
- Documenteer wijzigingen aan het algoritme of de systemen daaromheen.
- Beheer afhankelijkheden van software bibliotheken en de beschikbare versies. Verschillende versies van veelgebruikte open-source software bibliotheken kunnen leiden tot verschillende resultaten. Gebruik bijvoorbeeld tools als [Docker](https://www.docker.com/) om deze versies te beheren.
- Logging van tussenresultaten, eindresultaten, parameters en andere benodigde informatie.
- Houd de documentatie compleet en compact.

## Test of het algoritme het gewenste niveau van reproduceerbaarheid heeft
Het is belangrijk om het algoritme te testen op de mate van reproduceerbaarheid. Dit kan je doen door:

- Experimenten meerdere keren te herhalen.
- Te testen of kan worden achterhaald hoe een bepaald resultaat tot stand is gekomen. Is het duidelijk welke data is gebruikt, en welke versie van het algoritme is gebruikt? Test of het resultaat op basis van deze informatie opnieuw kan worden gegenereerd.
- Rekening te houden met willekeur in het systeem. Dit is bijvoorbeeld relevant wanneer er gebruikt wordt gemaakt van *seeds* en/ of *random number generators*. Experimenteer wat de invloed is van verschillende seeds op de uitkomsten, en analyseer of het systeem dezelfde resultaten geeft voor een vaste seed. Indien van belang, documenteer de seed die gebruikt wordt.
- Test of een versie van het algoritme opnieuw gereconstrueerd kan worden op basis van de gedocumenteerde informatie:

    - trainingsdata
    - parameters
    - versies van gebruikte software (softwarebibliotheken)
    - etc.

## Generatieve AI
Bij generatieve AI is het vaak lastiger om de reproduceerbaarheid te testen. Je kunt het volgende doen om dit risico te beperken:

- Maak gebruik van open applicaties of modellen, waar mogelijk open source-applicaties en -modellen. Deze bieden meer inzicht op het gebied van transparantie. Let wel op dat deze transparantie niet ten koste mag gaan van de veiligheid.
- Test wat de uitkomsten zijn voor dezelfde of heel vergelijkbare prompts, en controleer of deze exact of nagenoeg hetzelfde zijn.

## Risico
Wanneer uitkomsten niet herhaald kunnen worden, kan er niet worden gegarandeerd dat vergelijkbare casussen tot vergelijkbare uitkomsten komen.
Dit maakt de uitkomsten van het algoritme mogelijk oneerlijk.
Wanneer een herhaald experiment niet tot dezelfde uitkomsten leidt, kan het experiment niet vertrouwd worden.
Als uitkomsten niet herleid kunnen worden, kan er geen uitleg worden gegeven waarom een bepaalde beslissing tot stand is gekomen.
Hierdoor kan geen verantwoording worden geboden.

## Bijbehorende vereiste(n)
??? expander "Bekijk alle vereisten"
    <!-- list_vereisten_on_maatregelen_page -->

## Bronnen
- [Onderzoekskader Auditdienst Rijk, DM.14](https://www.rijksoverheid.nl/documenten/rapporten/2023/07/11/onderzoekskader-algoritmes-adr-2023)
- [MLOps Principles: Reproducability](https://ml-ops.org/content/mlops-principles#reproducibility)
- [Ministerie van Infrastructuur en Waterstaat, AI Impact Assessment](https://www.rijksoverheid.nl/documenten/rapporten/2022/11/30/ai-impact-assessment-ministerie-van-infrastructuur-en-waterstaat)
- [Harald Semmelrock, et al., Reproducibility in Machine Learning-Driven Research](https://arxiv.org/abs/2307.10320)
- [Odd Erik Gundersen, et al., Do machine learning platforms provide out-of-the-box reproducibility?](https://www.sciencedirect.com/science/article/pii/S0167739X21002090)
- [Odd Erik Gundersen, et al., State of the Art: Reproducibility in Artificial Intelligence ](https://ojs.aaai.org/index.php/AAAI/article/view/11503)

## Voorbeelden

!!! example "Dienst Toeslagen: Populatiebepaling Kindregeling"

	De Dienst Toeslagen maakt gebruik van een algoritme als ondersteuning om in kaart te brengen welke (pleeg)kinderen in aanmerking komen voor een tegemoetkoming van de kindregeling. Op deze manier kan efficiënter, nauwkeuriger en consistenter herkend worden wie hier voor in aanmerking komen.
	Om er voor te zorgen dat deze bepaling reproduceerbaar is wordt gebruik gemaakt van versie-beheer. Hierbij worden wijzigingen in de populatie doorgevoerd en bijgehouden. Hiernaast wordt ook aanvullende informatie die tijdens de kritieke periode bekend was in een aparte kolom gezet om zo reproduceerbaarheid te kunnen garanderen.

	Bron: [Populatiebepaling kindregeling - Dienst Toeslagen](https://algoritmes.overheid.nl/nl/algoritme/populatiebepaling-kindregeling-dienst-toeslagen/34319693)


Heb je een ander voorbeeld of best practice, laat het ons weten via [algoritmes@minbzk.nl](mailto:algoritmes@minbzk.nl)  
