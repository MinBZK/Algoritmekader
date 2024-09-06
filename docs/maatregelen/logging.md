---
title: Zorg ervoor dat logbestanden worden gecreëerd waarin informatie wordt geregistreerd over gebruikersactiviteiten, uitzonderingen en informatiebeveiligingsgebeurtenissen
toelichting: Door goede logging is te achterhalen wanneer en door wie er (ongewenste) aanpassingen zijn gedaan (audit trail).
vereiste:
- beveiliging_informatie_en_informatiesystemen
- automatische_logregistratie
- bewaartermijn_voor_gegenereerde_logs
levenscyclus:
- ontwerp
- dataverkenning-en-datapreparatie
- ontwikkelen
- verificatie-en-validatie
- implementatie
- monitoring-en-beheer
onderwerp:
- technische-robuustheid-en-veiligheid
- governance
- transparantie
- menselijke-controle
rollen:
- projectleider
- informatiebeheerder
- security-officer
- archiefdeskundige
hide:
- navigation
- toc
---

<!-- tags -->

## Maatregel
Zorg ervoor dat logbestanden worden gecreëerd waarin informatie wordt geregistreerd over gebruikersactiviteiten, uitzonderingen en informatiebeveiligingsgebeurtenissen
Door goede logging is te achterhalen wanneer en door wie er toegang is geweest tot code en data (audit trail).
Er kan loginformatie gegenereerd, bewaard, toegankelijk gemaakt en gemonitord worden. Logbestanden bevatten vaak gebeurtenissen die gebruikersactiviteiten, uitzonderingen en informatiebeveiligingsgebeurtenissen registreren.
Bedenk wat deze informatie betekent in de context van de werking van het algoritme of algoritmisch systeem.


## Toelichting

- Met logbestanden is te achterhalen wanneer en door wie er (ongewenste) aanpassingen zijn gedaan (audit trail).
- Loginformatie moet worden gegenereerd, bewaard, gemonitord en toegankelijk worden gemaakt.
- Logbestanden bevatten vaak gebeurtenissen die gebruikersactiviteiten, uitzonderingen en informatiebeveiligingsgebeurtenissen registreren.
- Bedenk wat deze informatie betekent in de context van de werking van het algoritme of algoritmisch systeem. loginformatie gegenereerd, bewaard, toegankelijk gemaakt en gemonitord worden. Logbestanden bevatten vaak gebeurtenissen die gebruikersactiviteiten, uitzonderingen en informatiebeveiligingsgebeurtenissen registreren.
- Stel vast welke informatie bij het ontwikkelen en gebruiken van algoritmes en AI-systemen relevant is om te loggen. 
- Log behalve het aanpassen van gegevens ook het uitlezen van gegevens waar dat relevant is. Bijvoorbeeld als persoonsgegevens worden opgevraagd.
- Logs dienen periodiek (of doorlopend) gecontroleerd to worden op relevante incidenten. Dat betekent dat wat er gelogd wordt geschikt moet zijn om relevante beveiligingsincidenten op te merken. 

## Risico
Wanneer loginformatie ontbreekt, is niet te achterhalen wanneer er (eventueel ongewenste) aanpassingen zijn gedaan (audit trail) op (de code van) het algoritme, of door wie.


## Bijbehorende vereiste(n)

<!-- list_vereisten_on_maatregelen_page -->

## Bronnen

| Bron                        |
|-----------------------------|
| [Baseline Informatiebeveiliging Overheid, BIO 12.3.1.1, 12.3.1.4, 12.3.1.5, 12.4.1.1, 12.4.2.2, ](https://www.digitaleoverheid.nl/overzicht-van-alle-onderwerpen/cybersecurity/bio-en-ensia/baseline-informatiebeveiliging-overheid/) |
| [Onderzoekskader Algoritmes Auditdienst Rijk, IB.27](https://www.rijksoverheid.nl/documenten/rapporten/2023/07/11/onderzoekskader-algoritmes-adr-2023) |
| [Toetsingskader Algoritmes Algemene Rekenkamer, 4.06](https://www.rekenkamer.nl/onderwerpen/algoritmes/documenten/publicaties/2024/05/15/het-toetsingskader-aan-de-slag)  |

## Voorbeeld

Heb jij een goed voorbeeld? Laat het ons weten!
