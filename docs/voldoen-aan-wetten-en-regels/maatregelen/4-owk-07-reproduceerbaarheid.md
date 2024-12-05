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
hide:
- navigation
- toc
---

<!-- tags -->

## Maatregel
Zorg ervoor dat uitkomsten van het algoritme herhaald of herleid kunnen worden.

## Toelichting
De reproduceerbaarheid omschrijft of de resultaten van een algoritme herhaald of herleid kunnen worden. 
Het betekent dat dezelfde input leidt tot dezelfde output in alle situaties. In ieder geval moet het algoritme hetzelfde gedrag vertonen. 

Reproduceerbaarheid is sterk gelinkt aan herleidbaarheid en traceerbaarheid. 
Uitkomsten moeten altijd herleid kunnen worden aan de hand van het model en de data. 

Om te zorgen voor reproduceerbaarheid van de uitkomsten, kan je de volgende stappen nemen:

1. [Bepaal welke mate van reproduceerbaarheid nodig is](#bepaal-welke-mate-van-reproduceerbaarheid-nodig-is)
2. [Implementeer verschillende stappen die bijdragen aan reproduceerbaarheid](#implementeer-verschillende-stappen-die-bijdragen-aan-reproduceerbaarheid)
3. [Test of het algoritme het gewenste niveau van reproduceerbaarheid heeft](#test-of-het-algoritme-het-gewenste-niveau-van-reproduceerbaarheid-heeft)

### Bepaal welke mate van reproduceerbaarheid nodig is
Afhankelijk van de toepassing moeten de resultaten van het algoritme te precies reproduceren zijn. 
Wanneer er gebruik wordt gemaakt van genertieve AI hoeft de output niet altijd exact hetzelfde te zijn. 

### Implementeer verschillende stappen die bijdragen aan reproduceerbaarheid
Om te zorgen dat uitkomsten reproduceerbaar zijn, implementeer je het volgende in je processen en systemen:

- Zorg voor versiebeheer op de code en de bijbehorende systemen. Dit geldt zowel tijdens ontwikkeling als tijdens operatie. Tools als [Github](https://github.com/) of [Gitlab](https://about.gitlab.com/) kunnen ondersteunen bij versiebeheer van code. 
- Zorg dat de data (trainings- en testdata) kan worden gereproduceerd. Maak gebruik van versiebeheer op de data, maak backups van de data, sla snapshots van de data op en maak gebruik van timestamps. 
- Documenteer wijzigingen aan het algoritme of de systemen daaromheen.
- Beheer afhankelijkheden van software bibliotheken en de beschikbare versies. Verschillende versies van veelgebruikte open-source software bibliotheken kunnen leiden tot verschillende resultaten. Gebruik bijvoorbeeld tools als [Docker](https://www.docker.com/) om deze versies te beheren.  
- Logging van tussenresultaten, eindresultaten, parameters en andere benodigde informatie. 
- Houd de documentatie compleet en compact. 

### Test of het algoritme het gewenste niveau van reproduceerbaarheid heeft
Het is belangrijk om het algoritme te testen op de mate van reproduceerbaarheid. Dit kan je doen door:

- experimenten meerdere keren te herhalen. 
- te testen of kan worden achterhaald hoe een bepaald resultaat tot stand is gekomen. Is het duidelijk welke data is gebruikt, en welke versie van het algoritme is gebruikt? Test of het resultaat op basis van deze informatie opnieuw kan worden gegenereerd.
- Rekening te houden met willekeur in het systeem. Dit is bijvoorbeeld relevant wanneer er gebruikt wordt gemaakt van *seeds* en/of *random number generators*. Experimenteer wat de invloed is van verschillende seeds op de uitkomsten, en analyseer of het systeem dezelfde resultaten geeft voor een vaste seed. Indien van belang, documenteer de seed die er gebruikt wordt. 
- Test of een versie van het algoritme opnieuw gereconstrueerd kan worden op basis van de gedocumenteerde informatie: 

    - trainingsdata
    - parameters
    - versies van gebruikte software (softwarebibliotheken)
    - etc.

- Indien er gebruik wordt gemaakt van generatieve AI kan er getest worden wat de uitkomsten zijn voor dezelfde of heel vergelijkbare prompts. 

## Bijbehorende vereiste(n)
<!-- list_vereisten_on_maatregelen_page -->

## Risico
Wanneer uitkomsten niet herhaald kunnen worden, kan er niet worden gegarandeerd dat vergelijkbare casussen tot vergelijkbare uitkomsten komen. 
Dit maakt de uitkomsten van het algoritme mogelijk oneerlijk. 
Wanneer een herhaald experiment niet tot dezelfde uitkomsten leidt, kan het experiment niet vertrouwd worden. 
Als uitkomsten niet herleid kunnen worden, kan er geen uitleg worden gegeven waarom een bepaalde beslissing tot stand is gekomen. 
Hierdoor kan geen verantwoording worden geboden. 

## Bronnen
- [MLOps Principles: Reproducability](https://ml-ops.org/content/mlops-principles#reproducibility)
- [Ministerie van Infrastructuur en Waterstaat, AI Impact Assessment](https://www.rijksoverheid.nl/documenten/rapporten/2022/11/30/ai-impact-assessment-ministerie-van-infrastructuur-en-waterstaat)
- [Harald Semmelrock, et al., Reproducibility in Machine Learning-Driven Research](https://arxiv.org/pdf/2307.10320)
- [Odd Erik Gundersen, et al., Do machine learning platforms provide out-of-the-box reproducibility?](https://www.sciencedirect.com/science/article/pii/S0167739X21002090)
- [Odd Erik Gundersen, et al., State of the Art: Reproducibility in Artificial Intelligence ](https://ojs.aaai.org/index.php/AAAI/article/view/11503)

## Voorbeeld
Heb jij een goed voorbeeld? Laat het ons weten!
