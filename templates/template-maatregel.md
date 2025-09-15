---
# Dit template dient als voorbeeld voor een MAATREGEL in het Algoritmekader.
# Meer over de onderdelen van deze broncode en de voorwaarden waar die aan moeten voldoen, lees je in de documentatie:
# https://github.com/MinBZK/Algoritmekader/wiki/Onderdelen-van-het-Algoritmekader
# let op!  Geen punt (.) achter de titel!

title: Hier staat de titel, die in 1 zin de maatregel beschrijft

# deze unieke code moet aan enkele voorwaarden voldoen, let goed op!
id: urn:nl:ak:mtr:owp-00

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

# vul hier de bestandsnamen in van de vereisten die horen bij deze maatregel (minus de bestandsuitgang '.md'):
vereiste:
- aia-03-risicobeheersysteem
- aia-04-risicobeoordeling-voor-jongeren-en-kwetsbaren
- aia-05-data-kwaliteitscriteria
# LET OP: dit zijn nu nog voorbeelden van 3 vereisten, vervang dit dus met de namen van de vereisten waar deze maatregel bij hoort

# Bij maatregelen geven we bronnen mee in de metadata. Dit betreft alleen de bronnen uit: Toetsingskader van de Algemene Rekenkamer en Onderzoekskader van de Auditdienst Rijk
# Op basis van de informatie over deze bronnen in de metatdata, wordt er automatisch een mapping gemaakt tussen deze twee toetsingskaders en het Algoritmekader.
# We verwijzen als volgt naar deze bronnen (kijk voor de betreffende maatregelen en hun code in de betreffende 2 toetsingskaders. Dit is een voorbeeld):
sources:
  ADR:
  - PRI.11
  ARK:
  - 3.17


# het volgende laten staan, dit is nodig voor de styling van de website:
hide:
- navigation
- toc
---

<!-- Onderstaande comment met "tags" laten staan, dit is nodig voor het functioneren van de website -->
<!-- tags -->


## Maatregel

Hier staat nog een keer duidelijk de maatregel die een organisatie kan nemen. Dit is het advies dat we (liefst in 1 zin) aan organisaties kunnen geven.
Dit kan vaak hetzelfde zijn als de title of toelichting die je hierboven in de metadata hebt meegegeven.


## Toelichting
Hier staat in enkele alinea's meer uitgelegd over de maatregel.

Wat is het advies dat een organisatie krijgt?

Beschrijf dit zo nauwkeurig mogelijk.


## Risico
Hier staat uitgelegd, in één alinea, wat het risico is als deze maatregel níet wordt geïmplementeerd.


## Bijbehorende vereiste(n) { data-search-exclude }
<!-- Hier volgt een lijst met vereisten op basis van de in de metadata ingevulde vereiste -->

<!-- Let op! onderstaande regel met 'list_vereisten_on_maatregelen_page' niet weghalen! Deze maakt automatisch een lijst van bijbehorende verseisten op basis van de metadata  -->
??? expander "Bekijk alle vereisten"
    <!-- list_vereisten_on_maatregelen_page -->


## Bronnen
<!-- Hier staan, als lijstje, de gebruikte, betrouwbare bronnen van de maatregel. -->
- (denk aan de extra enter vóór en na een lijstje met koppeltekens).
- [Gebruikte bron bij deze maatregel](url)


## Voorbeelden

!!! example "Voorbeeld 1: Naam van Voorbeeld of Organisatie"
	Hier staat meer beschreven over het voorbeeld. Bijvoorbeeld iets wat in een rapport of artikel van een organisatie stond over de implementatie van een specifieke maatregel of advies dat zeer gerelateerd is aan deze maatregel in het Algoritmekader.

       Elke alinea bínnen dit voorbeeld heeft een extra inspringing. Verander dit niet, want dan gaat het niet goed met de opmaal van het voorbeeld-blok.


!!! example "Voorbeeld 2: Naam van Voorbeeld of Organisatie"
	Hier staat meer beschreven over het voorbeeld. Bijvoorbeeld iets wat in een rapport of artikel van een organisatie stond over de implementatie van een specifieke maatregel of advies dat zeer gerelateerd is aan deze maatregel in het Algoritmekader.

       Elke alinea bínnen dit voorbeeld heeft een extra inspringing. Verander dit niet, want dan gaat het niet goed met de opmaal van het voorbeeld-blok.


Heb je een ander voorbeeld of best practice, laat het ons weten via [algoritmes@minbzk.nl](mailto:algoritmes@minbzk.nl).
