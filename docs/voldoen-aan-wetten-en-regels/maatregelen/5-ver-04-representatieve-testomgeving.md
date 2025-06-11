---
title: Zorg voor een representatieve testomgeving
id: urn:nl:ak:mtr:ver-04
toelichting: Test het algoritme in verschillende scenario’s en omstandigheden die zoveel mogelijk overeenkomen met de operationele context.
vereiste:
- aia-03-risicobeheersysteem
- aia-11-systeem-voor-kwaliteitsbeheer
- aia-33-verwerking-in-testomgeving
levenscyclus:
- verificatie-en-validatie
onderwerp:
- technische-robuustheid-en-veiligheid
rollen:
- ontwikkelaar
- projectleider
sources:
  ADR: DM.7
hide:
- navigation
- toc
---

<!-- tags -->

## Maatregel
Test het algoritme in verschillende scenario’s en omstandigheden die zoveel mogelijk overeenkomen met de operationele context.

## Toelichting
Representatieve testomstandigheden zijn essentieel om een goed onderbouwd vertrouwen te krijgen in de prestaties en de toegevoegde waarde van het algoritme.
Houd daarbij bijvoorbeeld rekening met voldoende variatie en ruis die voorkomt tijdens het operationeel gebruik of de verschillende type gebruikers die interacteren met het algoritme.
Neem bij het inrichten van een testomgeving de volgende aspecten mee:

- De factoren uit [de impactanalyse](2-owp-06-impactanalyse.md).
- Zorg voor een testomgeving waarin je betrouwbaarheid, nauwkeurigheid en reproduceerbaarheid kan evalueren.
- Analyseer de verschillen tussen de dataset en operationeel gebruik.
- Wanneer een gebruikerstest wordt gedaan, zorg voor een representatieve groep gebruikers. Denk bijvoorbeeld aan verschillend enthousiasme en verschillend niveau van digitale/ AI-vaardigheden.
- Neem verschillende typen (cyber)aanvallen mee.
- Valideer dat de testomgeving de risicoanalyse en het beslissingsproces ondersteunt.

Voorbeelden om bij te dragen aan een representatieve testomgeving:

- Voeg extra ruis toe aan de testdata.
- Test op gevallen die niet passen in de verdeling van variabelen waarop een classificatiemodel is getraind (de *out-of-distribution* scenario’s).
- [Test op uitzonderlijke gevallen (*outliers*) en minderheidsgroepen](5-ver-03-biasanalyse.md)
- Stel specifieke testscenario’s op. Dit kan bijvoorbeeld met de [‘What if tool’ van Google](https://ieeexplore.ieee.org/abstract/document/8807255), om specifieke data scenario’s voor een machinelearning model te onderzoeken.

## Risico
Als het algoritme niet getest wordt, of getest wordt in niet-representatieve omstandigheden, kan er een onterecht vertrouwen in het algoritme ontstaan.
De evaluatie geeft dan goede resultaten, maar het model zal minder presteren in de operationele context waar meer variatie aanwezig is.

## Bijbehorende vereiste(n)

??? expander "Bekijk alle vereisten"
    <!-- list_vereisten_on_maatregelen_page -->

## Bronnen
- [Bo Li, et al., Trustworthy AI: From Principles to Practices](https://arxiv.org/abs/2110.01167)
- [Onderzoekskader Auditdienst Rijk, DM.7](https://www.rijksoverheid.nl/documenten/rapporten/2023/07/11/onderzoekskader-algoritmes-adr-2023)

## Voorbeelden
Heb je een ander voorbeeld of best practice, laat het ons weten via [algoritmes@minbzk.nl](mailto:algoritmes@minbzk.nl)
