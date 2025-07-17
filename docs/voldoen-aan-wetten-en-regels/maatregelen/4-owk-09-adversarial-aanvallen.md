---
title: Ontwerp en train het algoritme om bestand te zijn tegen (cyber)aanvallen
id: urn:nl:ak:mtr:owk-09
toelichting: Bescherm het algoritme zoveel mogelijk tegen kwetsbaarheden van adversarial AI-aanvallen.
levenscyclus:
- ontwikkelen
onderwerp:
- technische-robuustheid-en-veiligheid
rollen:
- beleid-en-advies
- ontwikkelaar
vereiste:
- aia-10-nauwkeurigheid-robuustheid-cyberbeveiliging
- aia-22-gebruiksverantwoordelijken-monitoren-werking
- aia-32-ai-modellen-algemene-doeleinden-systeemrisico-cyberbeveiliging
- bio-01-beveiliging-informatie-en-informatiesystemen
- avg-12-beveiliging-van-verwerking
hide:
- navigation
- toc
---

<!-- Let op! onderstaande regel met 'tags' niet weghalen! Deze maakt automatisch de knopjes op basis van de metadata  -->
<!-- tags -->

## Maatregel
Ontwerp en train het algoritme om bestand te zijn tegen adversarial aanvallen.

## Toelichting
De impact van een adversarial AI-aanval hangt af van de [mate van autonomie](../../../ai-verordening/ai-verordening-in-het-kort/#ai-systeem) waarmee een algoritme wordt ingezet.
Een algemene impact-beperkende maatregel is daarom om menselijke gebruikers duidelijke instructies mee te geven om de uitkomsten van de algoritmes te controleren.

Voor de verschillende types adversarial AI-aanvallen zijn specifieke maatregelen mogelijk:

### Poisoning aanval
Bij een poisoning aanval wordt het AI-systeem vergiftigd doordat een aanvaller aanpassingen aan de trainingsdata doet, waardoor het AI-systeem fouten gaat maken.
Bijvoorbeeld een spamfilter die getraind is op gemanipuleerde data en zo bepaalde spam e-mails doorlaat.
Maatregelen gericht op het [behoud van de integriteit van de trainingsdata](3-dat-10-datamanipulatie.md) kunnen hiertegen worden ingezet.

### Input- of evasion aanval
Bij een input- of evasion aanval voegt een aanvaller hele kleine bewerkingen toe aan input zodat een AI-systeem wordt misleid: het trekt een foute conclusie.
Een voorbeeld hiervan is het plakken van een gele post-it op een stopbord, waardoor een auto met AI gebaseerde omgevingsherkenning het bord niet meer goed kan herkennen en zijn snelheid aanpast.
Op evasion aanvallen kan geanticipeerd worden bij het testen van de [robuustheid](2-owp-33-technische-interventies-robuustheid.md) van algoritmes. Bijvoorbeeld door als onderdeel van een [representatieve testomgeving](5-ver-04-representatieve-testomgeving.md) ook rekening te houden met moedwillig, subtiel aangepaste input.

### Backdoor
Een backdoor in een algoritme geeft een aanvaller toegang en/ of de mogelijkheid om deze te manipuleren.
Een voorbeeld hiervan is een nummerbord herkenningsalgoritme dat tijdens de ontwikkelfase van een backdoor voorzien is van een aanvaller, waardoor via een speciale toevoeging aan een nummerbord deze niet meer herkend wordt.
Maatregelen gericht op controle van verwerking van trainingsdata, gebruik van ontwikkeltools en halffabricaten en het trainingsproces beperken de mogelijkheid om aanvallers backdoors te laten injecteren.

### Model stealing
Bij *model stealing* of *model reverse engineering* brengt een aanvaller in kaart hoe een algoritme in elkaar zit.
Hierdoor kan een aanvaller het algoritme voor andere doeleinden misbruiken, zoals het vinden van kwetsbaarheden of van *evasion tactieken* voor het algoritme.

### Inversion of inference aanval
Met *inversion of inference* aanvallen kan een aanvaller achterhalen wat voor (mogelijk vertrouwelijke) trainingsdata is gebruikt.
Zo kunnen gevoelige informatie worden blootgelegd, waaronder privacygevoelige gegevens en intellectueel eigendom.

## Risico
Adversarial AI-aanvallen kunnen leiden tot ongewenste misleiding, manipulatie of uitschakeling van de werking van een algoritme of tot verlies van gevoelige gegevens.

## Bijbehorende vereiste(n) { data-search-exclude }
??? expander "Bekijk alle vereisten"
    <!-- list_vereisten_on_maatregelen_page -->

## Bronnen
- [Adversarial AI in het cyberdomein, TNO](https://www.tno.nl/nl/newsroom/2023/02/technieken-cyberaanvallen-ai/)
- [OWASP Top 10 for Large Language Model Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/)

## Voorbeelden
<!-- Voeg hier een voorbeeld toe, door er bijvoorbeeld naar te verwijzen -->

!!! example "Sandia: Defending against Adversarial Examples"

    Adversarial aanvallen zijn er zoals hierboven uitgelegd op verschillende manieren wat er voor zorgt dat per aanval een andere aanpak nodig is. Sandia, een Amerikaanse nationale veiligheidsorganisatie, heeft onderzoek gedaan naar een aantal van deze aanvallen en is met maatregelen gekomen. De meerderheid van deze maatregelen zijn redelijk technisch en kunnen het beste in context geplaatst worden aan de hand van het artikel.
    Een maatregel daarentegen kan redelijk gemakkelijk uitgevoerd worden en dat is het analyseren van mogelijke risico’s. Sandia geeft drie categoriën aan: _defensible_, _semi-defensible_, en _indefensible_; respectievelijk verdedigbaar, semi-verdedigbaar en onverdedigbaar. Verdedigbare modellen zijn in de juiste omstandigheden goed te vertrouwen. Semi-verdedigbare modellen hebben minstens één hoog-risico grens waar op een manier omheen gewerkt kan worden. Onverdedigbare modellen geven toegang tot input en output data, vaak zijn dit real-time algoritmes of algoritmes waar de trainingsdata openbaar (toegankelijk) is.
    In alle drie de gevallen moet voorzichtig worden omgegaan met het ontwerp, maar in het geval van semi-verdedigbaar en onverdedigbaar moet er extra [goed gemonitored worden](7-mon-07-plan-continue-monitoring.md).


    Bron: [Defending against Adversarial Examples](https://doi.org/10.2172/1569514)

Heb je een ander voorbeeld of best practice, laat het ons weten via [algoritmes@minbzk.nl](mailto:algoritmes@minbzk.nl)
