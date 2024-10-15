---
title: Richt wachtwoordbeheer in
toelichting: Richt wachtwoordbeheer in, waarmee bepaald wordt hoe wachtwoorden worden opgeslagen, wanneer wijzigingen moeten plaatsvinden en waaraan wachtwoorden moeten voldoen.
vereiste:
- bio-01-beveiliging-informatie-en-informatiesystemen
levenscyclus:
- organisatieverantwoordelijkheden
onderwerp:
- technische-robuustheid-en-veiligheid
- governance
rollen:
- projectleider
- beleid-en-advies
hide:
- navigation
- toc
---

<!-- tags -->

## Maatregel

Richt wachtwoordbeheer in, waarmee bepaald wordt hoe wachtwoorden worden opgeslagen, wanneer wijzigingen moeten plaatsvinden en waaraan wachtwoorden moeten voldoen. Hiermee wordt de toegang tot bijvoorbeeld ontwikkelomgevingen geregeld op een veilige manier.


## Toelichting

Bij het inrichten van wachtwoordbeheer moeten de volgende zaken worden toegepast:

- Alle wachtwoorden van gebruikers en beheerders dienen periodiek te worden gewijzigd, met een maximum van 1 jaar (BIO 9.4.3). Initiële wachtwoorden en wachtwoorden die gereset zijn, hebben een maximale geldigheidsduur van 24 uur en moeten bij het eerste gebruik worden gewijzigd.
- Voor toegang vanuit een onvertrouwde omgeving dient twee-factor authenticatie te worden gebruikt (BIO 9.4.2.1). Als er geen gebruik wordt gemaakt van two-factor authenticatie, is de wachtwoordlengte minimaal 8 posities en complex van samenstelling. In situaties waar geen two-factor authenticatie mogelijk is, wordt minimaal halfjaarlijks het wachtwoord vernieuwd.
- Na een periode van maximaal 15 minuten inactiviteit dient de toegang tot de applicatie te worden vergrendeld en na 10 foutieve inlogpogingen dient het account geblokkeerd te worden (BIO 11.2.9, BIO 9.4.3). De tijdsduur dat een account wordt geblokkeerd na overschrijding van het aantal keer foutief inloggen is vastgelegd.
- Wachtwoorden mogen niet in originele vorm (plaintext) worden opgeslagen, maar dienen versleuteld te worden. (NIST 5.1.1.2)
- De eisen aan wachtwoorden moeten geautomatiseerd worden afgedwongen.


## Risico
Als het wachtwoordbeheer van onvoldoende kwaliteit is, kan oneigenlijke toegang plaatsvinden tot het algoritme of uitkomsten van het algoritme, bijvoorbeeld doordat het wachtwoord te eenvoudig is.

## Bijbehorende vereiste(n)

<!-- list_vereisten_on_maatregelen_page -->

## Bronnen

- [Baseline Informatiebeveiliging Overheid](https://www.digitaleoverheid.nl/overzicht-van-alle-onderwerpen/cybersecurity/bio-en-ensia/baseline-informatiebeveiliging-overheid/)
- [Onderzoekskader Algoritmes Auditdienst Rijk, IB.6 t/m IB.9](https://www.rijksoverheid.nl/documenten/rapporten/2023/07/11/onderzoekskader-algoritmes-adr-2023)
- [Toetsingskader Algoritmes Algemene Rekenkamer, 4.03](https://www.rekenkamer.nl/onderwerpen/algoritmes/documenten/publicaties/2024/05/15/het-toetsingskader-aan-de-slag)
- [NIST 5.1.1.2](https://pages.nist.gov/800-63-3/sp800-63b.html#sec5)

## Voorbeeld

Heb jij een goed voorbeeld? Laat het ons weten!
