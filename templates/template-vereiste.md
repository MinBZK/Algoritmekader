---
# Dit template dient als voorbeeld voor een VEREISTE in het Algoritmekader.
# Meer over de onderdelen van deze broncode en de voorwaarden waar die aan moeten voldoen, lees je in de documentatie:
# https://github.com/MinBZK/Algoritmekader/wiki/Onderdelen-van-het-Algoritmekader
# let op!  Geen punt (.) achter de titel!

title: Hier staat de titel, die in 1 zin de regel/wet/verplichting/gewenste situatie beschrijft

# deze unieke code moet aan enkele voorwaarden voldoen, let goed op!
id: urn:nl:ak:ver:aia-00

toelichting: Hier staat in enkele zinnen uitgelegd wat de regel inhoudt. Maximaal 40 woorden.

# pas deze tags aan om de vereiste aan de goede fases uit de levenscyclus te koppelen:
levenscyclus:
- ontwerp
- implementatie

# pas deze tags aan om de vereiste aan de goede onderwerpen te koppelen:
onderwerp:
- governance
- transparantie

# pas deze tags aan om de vereiste aan de goede rollen te koppelen:
rollen:
- projectleider

# pas deze tags aan om de vereiste aan de goede labels uit de AI Verordening te koppelen. Let op: alle mogelijke tags zijn in dit voorbeeld ingevuld. Gebruik alleen wat geldt. Lees hier meer over in de documentatie
# github.com/MinBZK/Algoritmekader/wiki/Onderdelen-van-het-Algoritmekader
soort-toepassing:
- ai-systeem
- ai-systeem-voor-algemene-doeleinden
- ai-model-voor-algemene-doeleinden
risicogroep:
- hoog-risico-ai-systeem
- geen-hoog-risico-ai-systeem
- uitzondering-van-toepassing
- verboden-ai-systeem
rol-ai-act:
- aanbieder
- gebruiksverantwoordelijke
- importeur
- distributeur
systeemrisico:
- systeemrisico
- geen-systeemrisico
- niet-van-toepassing
transparantieverplichting:
- transparantieverplichting
- geen-transparantieverplichting
- niet-van-toepassing
open-source:
- open-source
- geen-open-source
- niet-van-toepassing

# het volgende laten staan, dit is nodig voor de styling van de website
hide:
- navigation
---

<!-- Onderstaande comment met "tags" laten staan, dit is nodig voor het functioneren van de website -->
<!-- tags -->

## Vereiste
Hier staat nog een keer duidelijk de verplichting/regel/gewenste situatie waar een organisatie zich aan móet houden. Dit kan vaak hetzelfde zijn als de title of toelichting die je hierboven in de metadata hebt meegegeven.

## Toelichting
Hier staat in enkele alinea's meer uitgelegd over de vereiste.

Wat moet de gebruiker wel/niet doen? Wanneer? En volgens welke wet?

Hoe moet die regel geïnterpreteerd worden?


## Bronnen
<!-- Hier staan, als lijstje, de bronnen van de vereiste. Liefst worden hier de exacte artikelen genoemd uit de betreffende wet, inclusief een link naar de wet. -->
- (denk aan de extra enter vóór en na een lijstje met koppeltekens).
- [Artikel 12345, Voorbeeldwet](url van wetsartikel)

## Van toepassing op
<!-- Onderstaande titel Van toepassing op, en de code met tags-ai-act laten staan, dit is nodig voor het functioneren van de website. Hier komen de goede labels te staan, afhankelijk van wat er in de metadata is aangegeven bij de verschillende AI-Verordening labels / profielen (zie hierboven). -->
<!-- tags-ai-act -->

## Risico
Hier staat uitgelegd, in één alinea, wat het risico is als deze vereiste níet wordt geïmplementeerd.


## Maatregelen { data-search-exclude }
<!-- Onderstaande tag met list_maatregelen is nodig voor het juist laten zien van een lijstje met de bijbehorende maatregelen bij deze vereiste. In maatregelbestanden wordt aangegeven bij welke vereisten die maatregel hoort. LET OP: pas wel de code van de vereiste aan, zodat de góede maatregelen worden gebruikt. Waar hieronder dus nog aia-02-documentatie-beoordeling-niet-hoog-risico-ai staat, maak daarvan de bestandsnaam van de vereiste die je nu aan het aanpassen/toevoegen bent (exclusief de bestandsuitgang .md). -->

<!-- list_maatregelen vereiste/aia-02-documentatie-beoordeling-niet-hoog-risico-ai no-search no-onderwerp no-rol no-levenscyclus -->
