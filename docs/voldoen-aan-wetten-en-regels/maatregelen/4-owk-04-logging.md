---
title: Maak logbestanden waarin staat wie wanneer toegang had tot de data en de code
id: urn:nl:ak:mtr:owk-04
toelichting: Door goede logging is te achterhalen wanneer en door wie er welke (ongewenste) aanpassingen zijn gedaan (audit trail).
vereiste:
- bio-01-beveiliging-informatie-en-informatiesystemen
- aia-07-automatische-logregistratie
- aia-13-bewaartermijn-voor-gegenereerde-logs
levenscyclus:
- ontwikkelen
- monitoring-en-beheer
onderwerp:
- technische-robuustheid-en-veiligheid
rollen:
- ontwikkelaar
sources:
  ADR: IB.27
  ARK: 4.06
hide:
- navigation
- toc
---

<!-- tags -->

## Maatregel
Zorg ervoor dat logbestanden worden gecreëerd waarin informatie wordt geregistreerd over gebruikersactiviteiten, uitzonderingen en informatiebeveiligingsgebeurtenissen.
Door goede logging is te achterhalen wanneer en door wie er toegang is geweest tot code en data (audit trail).
Er kan loginformatie gegenereerd, bewaard, toegankelijk gemaakt en gemonitord worden. Logbestanden bevatten vaak gebeurtenissen die gebruikersactiviteiten, uitzonderingen en informatiebeveiligingsgebeurtenissen registreren.
Bedenk wat deze informatie betekent in de context van de werking van het algoritme.

## Toelichting
- Met logbestanden is te achterhalen wanneer en door wie er (ongewenste) aanpassingen zijn gedaan (audit trail).
- Loginformatie moet worden gegenereerd, bewaard, gemonitord en toegankelijk worden gemaakt.
- Logbestanden bevatten vaak gebeurtenissen die gebruikersactiviteiten, uitzonderingen en informatiebeveiligingsgebeurtenissen registreren.
- Bedenk wat deze informatie betekent in de context van de werking van het algoritme. loginformatie gegenereerd, bewaard, toegankelijk gemaakt en gemonitord worden. Logbestanden bevatten vaak gebeurtenissen die gebruikersactiviteiten, uitzonderingen en informatiebeveiligingsgebeurtenissen registreren.
- Stel vast welke informatie bij het ontwikkelen en gebruiken van algoritmes relevant is om te loggen.
- Log behalve het aanpassen van gegevens ook het uitlezen van gegevens waar dat relevant is. Bijvoorbeeld als persoonsgegevens worden opgevraagd.
- Logs dienen periodiek (of doorlopend) gecontroleerd to worden op relevante incidenten. Dat betekent dat wat er gelogd wordt geschikt moet zijn om relevante beveiligingsincidenten op te merken.

## Risico
Wanneer loginformatie ontbreekt, is niet te achterhalen wanneer er (eventueel ongewenste) aanpassingen zijn gedaan (audit trail) op (de code van) het algoritme, of door wie.

## Bijbehorende vereiste(n) { data-search-exclude }
??? expander "Bekijk alle vereisten"
    <!-- list_vereisten_on_maatregelen_page -->

## Bronnen

- [Baseline Informatiebeveiliging Overheid, BIO 12.3.1.1, 12.3.1.4, 12.3.1.5, 12.4.1.1, 12.4.2.2](https://www.digitaleoverheid.nl/overzicht-van-alle-onderwerpen/cybersecurity/bio-en-ensia/baseline-informatiebeveiliging-overheid/)
- [Onderzoekskader Algoritmes Auditdienst Rijk, IB.27](https://www.rijksoverheid.nl/documenten/rapporten/2023/07/11/onderzoekskader-algoritmes-adr-2023)
- [Toetsingskader Algoritmes Algemene Rekenkamer, 4.06](https://www.rekenkamer.nl/onderwerpen/algoritmes/documenten/publicaties/2024/05/15/het-toetsingskader-aan-de-slag)

## Voorbeelden

!!! example "Informatie Beveiligingsdienst: Aanwijzing Logging"

	De informatie beveiligingsdienst (IBD) heeft een handreiking gepubliceerd rondom logging-beleid en -procedures. Hierin wordt onder andere uitgelegd wat voor soorten logbestanden er zijn, voor wie deze belangrijk zijn en wat er in een log moet staan. Daarnaast wordt toegelicht hoe logging gecontroleerd kan/moet worden.
	Dit document kan een goede basis vormen voor het beginnen met log bestanden maken. Zo staan er in dit document verschillende bijlagen zoals een template voor logging-beleid en verschillende infographics die het logging-proces en de controles visualiseren voor de lezer.

	Bron: [Handreiking Logging](https://www.informatiebeveiligingsdienst.nl/product/aanwijzing-logging/)

Heb je een ander voorbeeld of best practice, laat het ons weten via [algoritmes@minbzk.nl](mailto:algoritmes@minbzk.nl).
