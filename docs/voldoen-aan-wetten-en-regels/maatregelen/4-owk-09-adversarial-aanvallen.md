---
title: Ontwerp en train het algoritme om bestand te zijn tegen aanvallen
id: urn:nl:ak:mtr:owk-09
toelichting: Bescherm het algoritme zoveel mogelijk tegen kwetsbaarheden van adversarial AI-aanvallen. 
levenscyclus:
- ontwikkelen
onderwerp:
- technische-robuustheid-en-veiligheid
rollen:
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
Bescherm het algoritme zoveel mogelijk tegen kwetsbaarheden van adversarial AI-aanvallen. 

## Toelichting
De impact van een adversarial AI aanval hangt af van de [mate van autonomie](../ai-verordening.md#definitie-van-een-ai-systeem) waarmee een algoritme wordt ingezet. 
Een algemene impact-beperkende maatregel is daarom om menselijke gebruikers duidelijke instructies mee te geven om de uitkomsten van de algoritmen te controleren.

Voor de verschillende typen adversarial AI zijn specifieke maatregelen mogelijk: 

### Poisoning aanval
Bij een poisoning aanval wordt het AI-systeem vergiftigd doordat een aanvaller aanpassingen aan de trainingsdata doet, waardoor het AI-systeem fouten gaat maken. 
Bijvoorbeeld een spamfilter die getraind is op gemanipuleerde data, en zo toch nog bepaalde spam e-mails doorlaat. 
Maatregelen gericht op het [behoud van de integriteit van de trainingsdata](3-dat-11-datamanipulatie.md) kunnen hiertegen worden ingezet.

### Input- of evasion aanval
Bij een input- of evasion aanval voegt een aanvaller hele kleine bewerkingen toe aan een input zodat een AI-systeem wordt misleid: het trekt een foute conclusie. 
Een voorbeeld hiervan is het plakken van een gele post-it op een stopbord, waardoor een auto met AI gebaseerde omgevingsherkenning het bord niet meer goed kan herkennen en zijn snelheid aanpast. 
Op evasion aanvallen kan geanticipeerd worden bij het testen van de [robuustheid](2-owp-34-technische-interventies-robuustheid.md) van algoritmen. Bijvoorbeeld door als onderdeel van een [representatieve testomgeving](5-ver-04-representatieve-testomgeving.md) ook rekening te houden met moedwillig, subtiel aangepaste input.

### Backdoor
Een backdoor in een algoritme geeft een aanvaller er toegang toe en/of de mogelijkheid om deze te manipuleren. 
Een voorbeeld hiervan is een nummerbord herkenningsalgoritme dat tijdens de ontwikkelfase van een backdoor voorzien is door een aanvaller, waardoor via een speciale toevoeging aan een nummerbord deze niet meer herkend wordt. 
Maatregelen gericht op controle van verwerking van trainingsdata, gebruik van ontwikkeltools en halffabricaten en het trainingsproces beperken de mogelijkheid om aanvallers backdoors te laten injecteren.

### Model stealing
Bij *model stealing* of *model reverse engineering* brengt een aanvaller in kaart hoe een algoritme in elkaar zit. 
Hierdoor kan een aanvaller het algoritme voor andere doeleinden misbruiken, zoals het vinden van kwetsbaarheden of van *evasion tactieken* voor het algoritme.

### Inversion of inference aanval
Met *inversion of inference* aanvallen kan een aanvaller achterhalen wat voor (mogelijk vertrouwelijke) trainingsdata is gebruikt. 
Zo kunnen gevoelige informatie worden blootgelegd, waaronder privacygevoelige gegevens en intellectueel eigendom.

## Bijbehorende vereiste(n) { data-search-exclude }
??? expander "Bekijk alle vereisten"
    <!-- list_vereisten_on_maatregelen_page -->

## Risico
Adversarial AI-aanvallen kunnen leiden tot ongewenste misleiding, manipulatie of uitschakeling van de werking van een algoritme of tot verlies van gevoelige gegevens.

## Bronnen
- [TNO, Adversarial AI
in het cyberdomein](https://publications.tno.nl/publication/34640579/Mf1Fda/TNO-2023-R10292.pdf)
- [OWASP Top 10 for Large Language Model Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/)

## Voorbeeld
<!-- Voeg hier een voorbeeld toe, door er bijvoorbeeld naar te verwijzen -->
