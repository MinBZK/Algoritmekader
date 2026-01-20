---
title: Pas uitlegbaarheidstechnieken toe en evalueer en valideer deze
id: urn:nl:ak:mtr:owp-32
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
sources:
  ADR: DM.11
  ARK: 2.04
hide:
- navigation
- toc
version: "92559128"
version_date: "2025-07-04"
---

<!-- tags -->

## Maatregel
Pas uitlegbaarheidstechnieken toe en evalueer en valideer deze.

## Toelichting
Uitlegbaarheidstechnieken helpen om de werking van een algoritme transparant te maken.
De keuze voor het type algoritme bepaalt hoe transparant je kunt zijn. Van rekenregels kun je namelijk precies uitleggen hoe deze tot een beslissing komen. Aan de andere kant kunnen complexe AI-systemen een black box zijn. Het is dan onduidelijk hoe deze systemen beslissingen maken.

Afhankelijk van het type algoritme zijn er uitlegbaarheidstechnieken beschikbaar om de werking en keuzes van een algoritme bloot te leggen. Er moet eerst een keuze worden gemaakt welk type algoritme geschikt is gezien de [informatiebehoefte](2-owp-30-informeer-betrokkenen.md). Het is belangrijk om samen met de betrokken partijen vast te leggen welke uitlegbaarheidstechnieken moeten worden toegepast. Bij bronnen kan informatie worden geraadpleegd die helpen bij het vinden van de juiste methodiek.

## Gebruik uitlegbaarheid bij besluiten

Onderzoek hoe uitlegbaarheidstechnieken kunnen bijdragen aan het motiveren van besluiten. Dit kan bijvoorbeeld door:

- De output van het algoritme te koppelen aan het zaakdossier, met een toelichting op de interpretatie van die output.
- De output of een samenvatting hiervan op te nemen in de beschikking.

## Generatieve AI

Bij gebruik van generatieve AI is het haast onmogelijk om direct uitlegbaar te maken hoe een uitkomst tot stand is gekomen. Om toch (deels) uitleg te kunnen geven over de werking van een generatief AI-model kun je uitleg verschaffen over de capaciteiten, beperkingen en trainingsdata van het AI-model. Daarnaast is het verstanding om te onderzoeken wat de risico's zijn als de uitkomsten van een generatief AI-systeem niet uitgelegd kunnen worden.

## Beperkingen en veiligheid

Vanuit veiligheidsoverwegingen kan bij specifieke algoritmes besloten worden om bepaalde informatie over de werking van een algoritme niet aan iedereen vrij te geven. Denk hierbij aan de beperkingen die de [Wet Open Overheid](../vereisten/woo-01-recht-op-toegang-tot-publieke-informatie.md) oplegt. Houd ook rekening met mogelijke risico’s op aanvallen die kunnen ontstaan door het gebruik van uitlegbaarheidstechnieken, zoals omschreven in: A Survey of Privacy-Preserving Model Explanations: Privacy Risks, Attacks, and Countermeasures.

## Evaluatie en validatie

Evalueer de uitlegbaarheid van het systeem op functionele, operationele, bruikbaarheids- en veiligheidsvereisten in samenwerking met betrokkenen zoals gebruikers. Valideer of de uitkomst van het algoritme begrijpelijk genoeg is voor een gebruiker om hier op een verantwoorde wijze mee te werken.

## Risico
Als er geen rekening wordt gehouden met de uitlegbaarheid van een algoritme binnen een bepaalde context ontstaat het risico dat de output van het algoritme niet wordt begrepen of verkeerd wordt geïnterpreteerd, wat kan leiden tot onjuist gebruik.

## Bijbehorende vereiste(n) { data-search-exclude }
??? expander "Bekijk alle vereisten"
	<!-- list_vereisten_on_maatregelen_page -->

## Bronnen

- [Onderzoekskader Auditdienst Rijk, DM.11](https://www.rijksoverheid.nl/documenten/rapporten/2023/07/11/onderzoekskader-algoritmes-adr-2023)
- [Toetsingskader Algoritmes, Algemene Rekenkamder, 2.04](https://www.rekenkamer.nl/onderwerpen/algoritmes/documenten/publicaties/2024/05/15/het-toetsingskader-aan-de-slag)
- [Toolkit voor implementatie](https://xaitk.org/)
- [An introduction to explainable AI with Shapley values](https://shap.readthedocs.io/en/latest/example_notebooks/overviews/An%20introduction%20to%20explainable%20AI%20with%20Shapley%20values.html)
- [Benchmarking eXplainable AI - A Survey on Available Toolkits and Open Challenges](https://www.ijcai.org/proceedings/2023/747)
- [UXAI: Design Strategy](https://www.uxai.design/design-strategy)
- [Overzicht (evaluatie van) metrieken XAI](https://dl.acm.org/doi/pdf/10.1145/3583558)
- [Part 2: Explaining AI in practice | ICO](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/explaining-decisions-made-with-artificial-intelligence/part-2-explaining-ai-in-practice/)
- [A Survey of Privacy-Preserving Model Explanations: Privacy Risks, Attacks, and Countermeasures](https://arxiv.org/abs/2404.00673)
- [Towards Transparency by Design for Artificial Intelligence, Science and Engineering Ethics](https://link.springer.com/article/10.1007/s11948-020-00276-4)
- [From Anecdotal Evidence to Quantitative Evaluation Methods: A Systematic Review on Evaluating Explainable AI](https://dl.acm.org/doi/pdf/10.1145/3583558)


## Voorbeelden

!!! example "Gemeente Amsterdam - Slimme check levensonderhoud"

	Gemeente Amsterdam heeft in een pilot gebruik gemaakt van een algoritme dat medewerkers helpt om te bepalen of een aanvraag levensonderhoud onderzoekswaardig is. De gemeente heeft ook een document waarin wordt toegelicht hoe verwerkte data gebruikt wordt. Dit is gedaan aan de hand van bijvoorbeeld een belangrijkheids-score per kenmerk. Op deze manier wordt inzichtelijk en uitlegbaar wat de invloed is van individuele kenmerken.

 	Bron: [Overzicht Verwerkte Data en Features](https://algoritmeregister.amsterdam.nl/onderzoekswaardigheid-slimme-check-levensonderhoud/#:~:text=Overzicht%20Verwerkte%20Data%20en%20Features.pdf)

Heb je een ander voorbeeld of best practice, laat het ons weten via [algoritmes@minbzk.nl](mailto:algoritmes@minbzk.nl).
