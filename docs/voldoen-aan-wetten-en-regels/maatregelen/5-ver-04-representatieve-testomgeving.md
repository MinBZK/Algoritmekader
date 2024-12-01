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

- de factoren uit [de impactanalyse](2-owp-99-impactanalyse.md).
- zorg voor testomgeving waarin je betrouwbaarheid, nauwkeurigheid en reproduceerbaarheid kan evalueren.
- analyseer de verschillen tussen de dataset en operationeel gebruik.
- wanneer een gebruikerstest wordt gedaan, zorg voor een representatieve groep gebruikers. Denk bijvoorbeeld aan verschillend enthousiasme en verschillend niveau van digitale/AI-vaardigheden. 
- neem verschillende typen aanvallen mee
- valideer dat de testomgeving de risicoanalyse en het beslissingsproces ondersteunt. 

Voorbeelden om bij te dragen aan een representatieve testomgeving:

- Voeg extra ruis toe aan de testdata
- Test op op gevallen die niet passen in de verdeling van variabelen waarop een classificatiemodel is getraind (de *out-of-distribution* scenario’s). 
- [Test op uitzonderlijke gevallen (*outliers*) en minderheidsgroepen](5-ver-03-biasanalyse.md)
- Stel specifieke testscenario’s op. Dit kan bijvoorbeeld met de [‘What if tool’ van Google](https://ieeexplore.ieee.org/abstract/document/8807255), om specifieke data scenario’s voor een machinelearning model te onderzoeken.

## Bijbehorende vereiste(n)

<!-- list_vereisten_on_maatregelen_page -->

## Risico
Als het algoritme niet getest wordt, of getest wordt in niet-representatieve omstandigheden, kan er een onterecht vertrouwen in het algoritme ontstaan. 
De evaluatie geeft dan goede resultaten, maar het model zal minder presteren in de operationele context waar meer variatie aanwezig is. 

## Bron
- [Bo Li, et al., Trustworthy AI: From Principles to Practices](https://arxiv.org/abs/2110.01167)

## Voorbeeld
