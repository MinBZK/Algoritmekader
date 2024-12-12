---
title: Pas uitlegbaarheidstechnieken toe en evalueer en valideer deze.
id: urn:nl:ak:mtr:owp-33
toelichting: Uitlegbaarheidstechnieken helpen om de werking van een algoritme transparant te maken.
vereiste:
- aia-08-transparantie-aan-gebruiksverantwoordelijken
- aia-26-recht-op-uitleg-ai-besluiten
- awb-02-motiveringsbeginsel
levenscyclus:
- ontwerp
onderwerp:
- transparantie
rollen:
- projectleider
- beleid-en-advies
- ontwikkelaar
hide:
- navigation
- toc
---

<!-- tags -->

## Maatregel
Pas uitlegbaarheidstechnieken toe en evalueer en valideer deze.

## Toelichting
Uitlegbaarheidstechnieken helpen om de werking van een algoritme transparant te maken.
De keuze voor het type algoritme bepaalt hoe transparant je kunt zijn. Van rekenregels kun je namelijk precies uitleggen hoe deze tot een beslissing komen. Maar complexe AI-systemen kunnen een black box zijn. Het is dan onduidelijk hoe deze systemen beslissingen maken. 

Afhankelijk van het type algoritme zijn er uitlegbaarheidstechnieken beschikbaar om de werking en keuzes van een algoritme bloot te leggen. Er moet eerst een keuze worden gemaakt welk type algoritme geschikt is gezien de [informatiebehoefte](2-owp-31-informeer-betrokkenen.md). Het is belangrijk om samen met de betrokken partijen vast te leggen welke uitlegbaarheidstechnieken moeten worden toegepast. Bij bronnen kan informatie worden geraadpleegd die helpen bij het vinden van de juiste methodiek.

### Gebruik uitlegbaarheid bij besluiten

Onderzoek hoe uitlegbaarheidstechnieken kunnen bijdragen aan het motiveren van besluiten. Dit kan bijvoorbeeld door:
	
	- De output van het algoritme te koppelen aan het zaakdossier, met een toelichting op de interpretatie van die output.
	- De output of een samenvatting hiervan op te nemen in de beschikking.
 
### Beperkingen en veiligheid

Vanuit veiligheidsoverwegingen kan bij specifieke algoritmes besloten worden om bepaalde informatie over de werking van een algoritme niet aan iedereen vrij te geven. Denk hierbij aan de beperkingen die de [Wet Open Overheid](../vereisten/woo-01-recht-op-toegang-tot-publieke-informatie.md) oplegt. Houd ook rekening met mogelijke risico’s op aanvallen die kunnen ontstaan door het gebruik van uitlegbaarheidstechnieken, zoals omschreven in: A Survey of Privacy-Preserving Model Explanations: Privacy Risks, Attacks, and Countermeasures. 

### Evaluatie en validatie

Evalueer de uitlegbaarheid van het systeem op functionele, operationele, bruikbaarheids- en veiligheidsvereisten in samenwerking met betrokkenen zoals gebruikers. Valideer of de uitkomst van het algoritme begrijpelijk genoeg is voor gebruiker om hier op een verantwoorde wijze mee te werken.

## Bijbehorende vereiste(n) { data-search-exclude }

<!-- list_vereisten_on_maatregelen_page -->

## Risico
Als er geen rekening wordt gehouden met de uitlegbaarheid van een algoritme binnen een bepaalde context, ontstaat het risico dat de output van het algoritme niet wordt begrepen of verkeerd wordt geïnterpreteerd, wat kan leiden tot onjuist gebruik.

## Bronnen
- [Toolkit voor implementatie](https://xaitk.org/)
- [An introduction to explainable AI with Shapley values](https://shap.readthedocs.io/en/latest/example_notebooks/overviews/An%20introduction%20to%20explainable%20AI%20with%20Shapley%20values.html)
- [Paper over (de evaluatie van) toolkits](https://www.ijcai.org/proceedings/2023/0747.pdf)
- [UXAI: Design Strategy](https://www.uxai.design/design-strategy)
- [Overzicht (evaluatie van) metrieken XAI](https://dl.acm.org/doi/pdf/10.1145/3583558)
- [Part 2: Explaining AI in practice | ICO](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/explaining-decisions-made-with-artificial-intelligence/part-2-explaining-ai-in-practice/)
- [A Survey of Privacy-Preserving Model Explanations: Privacy Risks, Attacks, and Countermeasures](https://arxiv.org/pdf/2404.00673)
- [Towards Transparency by Design for Artificial Intelligence | Science and Engineering Ethics](https://link.springer.com/content/pdf/10.1007/s11948-020-00276-4.pdf).
- [From Anecdotal Evidence to Quantitative Evaluation Methods: A Systematic Review on Evaluating Explainable AI](https://dl.acm.org/doi/pdf/10.1145/3583558)

## Voorbeeld

- [Gemeente Amsterdam - Onderzoekswaardigheid Algoritme ‘Slimme check’.](https://algoritmeregister.amsterdam.nl/onderzoekswaardigheid-slimme-check-levensonderhoud) Een tool die de medewerkers helpt om te bepalen of een aanvraag levensonderhoud onderzoekswaardig is. (niet meer in gebruik!): [Overzicht Verwerkte Data en Features](https://algoritmeregister.amsterdam.nl/wp-content/plugins/saidot-integratorv2/proxy.php?url=Qkjr73KewvSGp9K9GZcmjTzlFZxCvCvCFeCDZeqMWRfHl5SQ4WcgwEYMZGiOmz3w4DbAf%2B73Yic31bbsTTUISY905oRIWR1r%2Bh06UaTgeZk%2BPcwkNkxWYVfLz5h9mbDw19Fj1XHD1g6w30YkMleiFFhHSpbAez2OaEPto8K6tm9qmPY8wULc9S045oV91H5POhzx9CuNwZTEs%2BC1rhX6sUo5%2BO%2FPoDtN4TAV92gDl9dwxWjbJ9BYI4Jxm6M2GEan253nLkJMa035Ly2QTN7NOvaiuSOqqzjNqOPo8h8Ezryj4o5Q%2B%2FWhYRoA3v2ZM0npHxs9oQ8R5WGIbUKXUYQ2Rf6WyitIeWn6CP6tinNekB0%3D)
