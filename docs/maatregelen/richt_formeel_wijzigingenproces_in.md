---
title: Richt een wijzigingenproces in voor codewijzigingen
toelichting: Richt een formeel wijzigingenproces in, waarmee bepaald wordt hoe codewijzigingen plaatsvinden.
vereiste:
- beveiliging_informatie_en_informatiesystemen
levenscyclus:
- ontwerp
- ontwerp
- ontwikkelen
- implementatie
- monitoring-en-beheer
bouwblok:
- technische-robuustheid-en-veiligheid
- governance
rollen:
- projectleider
- proceseigenaar
- proceseigenaar
- data-scientist
- data-engineer
- security-officer
hide:
- navigation
---

<!-- tags -->

## Maatregel

Richt een wijzigingenproces in, waarmee bepaald wordt hoe codewijzigingen plaatsvinden.


## Toelichting

Bij het inrichten van een proces om wijzigingen aan de code te mogen aanbrengen, kunnen aan de volgende elementen worden gedacht:

- Wijzigingen dienen van te voren te worden geautoriseerd door de systeemeigenaar of product owner. (BIO 12.1.2)
- Wijzigingen worden getest in een andere omgeving dan de productieomgeving. (BIO 12.1.4, 14.2.3, 14.2.9, 14.3.1)
- Wijzigingen worden door de systeemeigenaar of product owner goedgekeurd op basis van gedocumenteerde testresultaten en pas daarna doorgevoerd in de productieomgeving. (BIO 12.1.2, 14.2.2, 14.2.9)
- Er dient functiescheiding te zijn ingericht tussen het aanvragen, goedkeuren en doorvoeren van wijzigingen om onbevoegde en onbedoelde wijzigingen te beperken. (BIO 6.1.2, 14.2.2)
- Er dient periodiek controle plaats te vinden op wijzigingen aan het systeem, zodanig dat oneigenlijke wijzigingen worden gesignaleerd. (BIO 9.4.4, 12.4.1)

## Risico
Als een formeel wijzigingenproces ontbreekt bestaat het risico van ongeautoriseerde toegang, wijziging of beschadiging van de code van het algoritme, of de uitkomsten van het algoritme.

## Bijbehorende vereiste(n)

<!-- list_vereisten_on_maatregelen_page -->

## Bronnen

| Bron                        |
|-----------------------------|
| [Baseline Informatiebeveiliging Overheid](https://www.digitaleoverheid.nl/overzicht-van-alle-onderwerpen/cybersecurity/bio-en-ensia/baseline-informatiebeveiliging-overheid/) |
| [Onderzoekskader Algoritmes Auditdienst Rijk, IB.1 t/m IB.5](https://www.rijksoverheid.nl/documenten/rapporten/2023/07/11/onderzoekskader-algoritmes-adr-2023) |
| [Toetsingskader Algoritmes Algemene Rekenkamer, 4.07](https://www.rekenkamer.nl/onderwerpen/algoritmes/documenten/publicaties/2024/05/15/het-toetsingskader-aan-de-slag)  |

## Voorbeeld

Heb jij een goed voorbeeld? Laat het ons weten!
