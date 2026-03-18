---
title: Controleer de input van gebruikers op misleiding
id: urn:nl:ak:mtr:dat-11
toelichting: Controleer de inputdata van gebruikers op misleiding.
levenscyclus:
- dataverkenning-en-datapreparatie
- monitoring-en-beheer
vereiste:
- aia-10-nauwkeurigheid-robuustheid-cyberbeveiliging
- aia-22-gebruiksverantwoordelijken-monitoren-werking
- aia-32-ai-modellen-algemene-doeleinden-systeemrisico-cyberbeveiliging
- bio-01-beveiliging-informatie-en-informatiesystemen
- avg-12-beveiliging-van-verwerking
onderwerp:
- data
- technische-robuustheid-en-veiligheid
rollen:
- ontwikkelaar
sources:
  ADR: DM.9
  ARK: 2.08
hide:
- navigation
- toc
---

<!-- Let op! onderstaande regel met 'tags' niet weghalen! Deze maakt automatisch de knopjes op basis van de metadata  -->
<!-- tags -->

## Maatregel
Controleer de inputdata van gebruikers op misleiding.

## Toelichting
Een algemeen belangrijke stap in cyberveiligheid is het valideren of de inputdata voldoet aan de verwachting.
Zo moet gecontroleerd worden of de [input valide, compleet en consistent](3-dat-01-datakwaliteit.md) is.
Bijvoorbeeld door te verifiëren of een leeftijd niet negatief is en of er geen tegenstrijdige informatie gegeven wordt.
Dit wordt typisch “*input sanitization*” genoemd.
Veel programmeertalen en software bibliotheken bieden standaard oplossingen voor input sanitization.

In de context van algoritmes is het raadzaam om ook nog specifieker te monitoren wat voor inputs er gegeven worden aan bijvoorbeeld een AI-systeem.
Zo kan het herhaaldelijk gebruiken van dezelfde input waarden met minimale aanpassingen wijzen op een poging tot een model engineering of een model inversion aanval.

## Generatieve AI
In het specifieke geval van generatieve AI moet er rekening gehouden worden met [*prompt injection attacks*](https://www.ibm.com/topics/prompt-injection).
Dit zijn aanvallen waarbij aanvallers een kwaadaardige opdracht dusdanig verhullen dat standaard checks het niet doorhebben en het model bijvoorbeeld gemanipuleerd wordt om desinformatie te verspreiden, gevoelige data te lekken of zelfs kwaadaardige software uit te voeren.
Op dit moment is nog weinig bekend over hoe dit over het algemeen effectief gemodereerd kan worden.
Echter kunnen in bepaalde situaties bepaalde opdrachten uitgesloten worden. Een ontwikkelaar zal dus moeten onderzoeken om wat voor opdrachten het gaat.
Zo hoeft een AI-systeem dat een klantenservice ondersteunt waarschijnlijk nooit een stuk code uit te voeren.

## Risico
Als inputdata gemanipuleerd wordt dan kan dit leiden tot verkeerd gebruik van het algoritme. Een aanvaller kan bijvoorbeeld doelbewust een afwijkende input kiezen om ervoor te zorgen dat het algoritme op een andere manier gebruikt kan worden.
Daarnaast kunnen onbewuste fouten ertoe leiden dat het model niet meer goed functioneert.

## Bijbehorende vereiste(n) { data-search-exclude }
??? expander "Bekijk alle vereisten"
    <!-- list_vereisten_on_maatregelen_page -->

## Bronnen
- [IBM, What is a prompt injection attack?](https://www.ibm.com/topics/prompt-injection)
- [Onderzoekskader Auditdienst Rijk, DM.9](https://www.rijksoverheid.nl/documenten/rapporten/2023/07/11/onderzoekskader-algoritmes-adr-2023)
- [Toetsingskader Algemene Rekenkamer, 2.08](https://www.rekenkamer.nl/onderwerpen/algoritmes/documenten/publicaties/2024/05/15/het-toetsingskader-aan-de-slag)

## Voorbeelden

!!! example "Gemeente Montferland - Montferland AI"
	De gemeente Montferland heeft een chatbot (MAI) ontwikkeld voor het beantwoorden van algemene vragen. Op deze manier is algemene informatie binnen de gemeente 24/7 bereikbaar voor haar inwoners en worden de medewerkers ontlast van de live chat.
	Omdat deze chatbot generatief is heeft gemeente Montferland ook goed gecontroleerd op gebruikers-input. Hierbij wordt er onder andere gebruik gemaakt van systeeminstructies en filter op de inhoud van input en output. Hiermee wordt zowel respectievelijk de chatbot in de basis geïnstrueerd en tijdens gebruik gecontroleerd.

	Bron: [Mai (Montferland AI) - Gemeente Montferland](https://algoritmes.overheid.nl/nl/algoritme/mai-montferland-ai-gemeente-montferland/96671359)

Heb je een ander voorbeeld of best practice, laat het ons weten via [algoritmes@minbzk.nl](mailto:algoritmes@minbzk.nl)
