---
title: Controleer regelmatig of het algoritme werkt zoals het bedoeld is
id: urn:nl:ak:mtr:ver-01
toelichting: Stel vast dat het algoritme voortdurend functioneert in lijn met de vastgestelde doelstelling
vereiste:
- awb-01-zorgvuldigheidsbeginsel
- aia-10-nauwkeurigheid-robuustheid-cyberbeveiliging
levenscyclus:
- ontwikkelen
- verificatie-en-validatie
- monitoring-en-beheer
onderwerp:
- technische-robuustheid-en-veiligheid
- bias-en-non-discriminatie
rollen:
- projectleider
- ontwikkelaar
sources:
  ADR:
  - DM.1
  - DM.4
  ARK:
  - 2.01
  - 2.07
hide:
- navigation
version: "1.0.0"
version_date: "2025-07-04"
---

<!-- tags -->

## Maatregel
Stel vast dat het algoritme voortdurend functioneert in lijn met de [vastgestelde doelstelling](1-pba-02-formuleren-doelstelling.md).

## Toelichting
- Vertaal de [vastgestelde doelstelling](1-pba-02-formuleren-doelstelling.md) naar functionele eisen voor het algoritme. Werk het vastgestelde doel uit in een beschrijving in logische taal/ pseudo code of documentatie die handvatten biedt aan de ontwikkelaar.
- Monitor de mate waarin aan deze eisen wordt voldaan door het algoritme.
- Bepaal en leg vast hoe eventuele parameters, business rules en indicatoren bepaald worden. Zorg dat dit breed wordt afgestemd in de organisatie (ontwikkelteam, opdrachtgevers en beheer).
- Houd hier rekening met eventuele [(statistische) bias](../../onderwerpen/bias-en-non-discriminatie.md#bias-in-statistiek-en-berekeningen): meten we daadwerkelijk wat we denken te meten?
- Wanneer het algoritme meerdere doelen dient, is het belangrijk ook te evalueren op meerdere functionele eisen.
- Wanneer er sprake is van een (handmatige) behandeling, bepaal dan wanneer deze behandeling als 'succesvol' gezien kan worden.

## Risico
Het algoritme functioneert niet in lijn met geformuleerde doelstellingen.
<!-- iets toevoegen over scope creep -->

## Bijbehorende vereiste(n) { data-search-exclude }
??? expander "Bekijk alle vereisten"
    <!-- list_vereisten_on_maatregelen_page -->

## Bronnen
- [Toetsingskader Algoritmes Algemene Rekenkamer, 2.01, 2.07](https://www.rekenkamer.nl/onderwerpen/algoritmes/documenten/publicaties/2024/05/15/het-toetsingskader-aan-de-slag)
- [Impact Assessment Mensenrechten en Algoritmes, 1](https://www.rijksoverheid.nl/documenten/rapporten/2021/02/25/impact-assessment-mensenrechten-en-algoritmes)
- [Onderzoekskader Algoritmes Auditdienst Rijk, DM.1, DM.4](https://www.rijksoverheid.nl/documenten/rapporten/2023/07/11/onderzoekskader-algoritmes-adr-2023)

## Voorbeelden

!!! example "Belastingdienst – Signaal Omzetbelasting Grote Ondernemingen"

	De Belastingdienst controleert aangiftes, waaronder omzetbelasting voor grote ondernemingen. Dit doen ze met behulp van het algoritme Signaalmodel OB GO (SOB GO), dat een risicobeoordeling geeft aan aangiftes die hieronder vallen. Het algoritme is intern ontwikkeld en wordt ook intern onderhouden en gecontroleerd. Dit gebeurt onder andere aan de hand van de bedrijfsregels binnen de Belastingdienst en een kwaliteitsframework.

	De bedrijfsregels worden jaarlijks geëvalueerd, waarbij ook resultaten uit een steekproef van de aangiften worden meegenomen. Het kwaliteitsframework bestaat uit regels en afspraken die gevolgd moeten worden bij het ontwikkelen van algoritmes, waaronder SOB GO. Dit framework wordt op vaste momenten gebruikt om te kijken of SOB GO nog steeds aan de kwaliteitseisen voldoet.

	Bron: [Signaalmodel Omzetbelasting Grote Ondernemingen (SOB GO) - Belastingdienst]( https://algoritmes.overheid.nl/nl/algoritme/signaalmodel-omzetbelasting-grote-ondernemingen-sob-go-belastingdienst/62272663)

Heb je een ander voorbeeld of best practice, laat het ons weten via [algoritmes@minbzk.nl](mailto:algoritmes@minbzk.nl)  
