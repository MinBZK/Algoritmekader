---
title: Bepaal welke feedbackloops van invloed zijn op het algoritme
id: urn:nl:ak:mtr:owk-08
toelichting: Stel vast op welke manier de uitkomst of de inzet van het algoritme van invloed kan zijn op het proces en de werking in een latere fase. Probeer deze ‘feedbackloops’ in kaart te brengen zodat ze mogelijk voorkomen kunnen worden of gemonitored kunnen worden op mogelijke negatieve effecten.
levenscyclus:
- ontwerp
- ontwikkelen
onderwerp:
- technische-robuustheid-en-veiligheid
- bias-en-non-discriminatie
rollen:
- projectleider
- ontwikkelaar
hide:
- navigation
- toc
---

<!-- tags -->

## Maatregel
Stel vast op welke manier de uitkomst of de inzet van het algoritme van invloed kan zijn op het proces en de werking in een latere fase.
Probeer deze ‘feedbackloops’ in kaart te brengen zodat ze mogelijk voorkomen kunnen worden of gemonitored kunnen worden op mogelijke negatieve effecten.

## Toelichting
Een feedbackloop kan zich voordoen wanneer de uitkomst van een algoritme wordt gebruikt als nieuwe input voor het algoritme.
Deze feedbackloops kunnen een vertekend beeld van de werkelijkheid geven en de robuustheid van het algoritme over tijd in gevaar brengen. Dit is met name van belang wanneer algoritmes bijleren (continue of periodiek).

!!! note "Opmerking"

    Merk op dat feedbackloops ook een positief effect kunnen hebben, wanneer bijvoorbeeld gebruikerservaring wordt meegenomen in de doorontwikkeling van het algoritme.

Er zijn verschillende vormen van feedbackloops:

- *Sampling feedbackloop*: wanneer de beslissing die volgt uit het algoritme effect heeft op de kans dat bepaalde groepen in een volgende selectie terechtkomen.

- *Individual feedbackloop*: wanneer de mening of visie van een beoordelaar verandert door [het gebruiken van het algoritme](../../onderwerpen/bias-en-non-discriminatie.md#bias-in-menselijk-denken)(het overnemen van de ‘vooroordelen van een systeem’).

- *Feature feedbackloop*: bijvoorbeeld wanneer de uitkomst dat een subsidie niet verstrekt wordt, ook als kenmerk ‘eerdere weigering van subsidie’ wordt gebruikt door het algoritme.

- *Outcome feedbackloop*: wanneer burgers of bedrijven op basis van de uitkomst ander gedrag gaan vertonen. In het voorbeeld van de subsidie betekent dit bijvoorbeeld dat burgers hun uitgavepatroon veranderen.

- *Machine-learning model feedbackloop*: wanneer nieuwe data die beschikbaar komt is beïnvloed door de beslissing van het algoritme zelf en deze data wordt gebruikt om een machine-learning model mee te (her)trainen. Een ander voorbeeld is wanneer alleen data wordt gebruikt van de personen die daadwerkelijk subsidie ontvangen om het algoritme op te (her)trainen. De groep die geen subsidie ontvangt ontbreekt dan in de dataset.

### Adversarial feedbackloops
Soms kunnen feedbackloops opzettelijk ingezet worden als ‘aanval’ op het systeem.
Dit hoeft niet per se vijandig te zijn, maar het kan gaan om het opzettelijk reageren op of aanpassen van de beslissingen die uit een algoritme volgen.
Bijvoorbeeld wanneer mensen liegen bij het invullen van een vragenlijst van de GGD wanneer ze een soa-test willen doen, omdat ze weten dat ze dan gekwalificeerd worden voor een gratis test [^1].
Wanneer de belanghebbende het gedrag aanpast zonder dat zijn of haar kenmerken daadwerkelijk veranderen, omdat het heeft geleerd hoe het algoritme oordeelt, is dat voorbeeld van een adversarial feature feedbackloop.
Deze feedbackloops wil je het liefste voorzien en mitigeren.

[^1]: Zie https://nos.nl/op3/artikel/2143511-soa-sjoemelaars-liegen-voor-gratis-test

### Monitoring en ophalen informatie
Feedbackloops kunnen ook een positieve werking hebben op het algoritme. Het is verstandig om feedback op te halen om in te zien wat de reactie is van mensen op (beslissingen van) een algoritme.
Dit kan bijvoorbeeld door gebruikers of belanghebbende burgers vragenlijsten te laten invullen met vragen over hun gedrag en de ontwikkelingen hierin te monitoren.
Daarnaast kan het ophalen van ervaringen met het algoritme worden gebruikt voor doorontwikkeling en verbetering van het algoritme waarbij de gewenste en ongewenste effecten meegenomen worden.

Ten slotte verdient [bias](../../onderwerpen/bias-en-non-discriminatie.md) specifieke aandacht. Houd goed in de gaten hoe het algoritme gebruikmaakt van de kenmerken van gevoelige groepen en wat de effecten van de uitkomsten zijn op hun gedrag en de datadistributie.

## Risico
Feedbackloops kunnen invloed hebben op verschillende onderdelen van het systeem waarin een algoritme zit. Als dit onopgemerkt gebeurt kan dit een negatief effect hebben op de accuraatheid en betrouwbaarheid van het algoritme, of ongewenste bias ontwikkelen.

## Bijbehorende vereiste(n)
??? expander "Bekijk alle vereisten"
    <!-- list_vereisten_on_maatregelen_page -->

## Bronnen
- [Lucía Vicente, et al., Humans inherit artificial intelligence biases](https://www.nature.com/articles/s41598-023-42384-8)
- [Nicolò Pagan, et al., A Classification of Feedback Loops and Their Relation to Biases in Automated Decision-Making Systems](https://arxiv.org/abs/2305.06055)
- [Jonathan Stray, The AI Learns to Lie to Please You: Preventing Biased Feedback Loops in Machine-Assisted Intelligence Analysis](https://www.mdpi.com/2813-2203/2/2/20)

## Voorbeelden
Heb je een ander voorbeeld of best practice, laat het ons weten via [algoritmes@minbzk.nl](mailto:algoritmes@minbzk.nl)
