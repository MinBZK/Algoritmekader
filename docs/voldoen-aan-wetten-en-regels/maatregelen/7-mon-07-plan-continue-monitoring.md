---
title: Stel een plan op voor continue monitoring
id: urn:nl:ak:mtr:mon-07
toelichting: Maak een plan voor wat er continu gemonitored moet worden tijdens het gebruik van het algoritme. Dit plan bevat niet alleen wat en hoe er gemonitored wordt, maar ook bij welke overschrijdingen actie moet worden ondernomen.
vereiste:
- aia-03-risicobeheersysteem
- aia-18-corrigerende-maatregelen-voor-non-conforme-ai
- aia-22-gebruiksverantwoordelijken-monitoren-werking
- aia-34-monitoring-na-het-in-de-handel-brengen
levenscyclus:
- monitoring-en-beheer
onderwerp:
- technische-robuustheid-en-veiligheid
rollen:
- projectleider
sources:
  ARK: 2.14
hide:
- navigation
- toc
---

<!-- tags -->

## Maatregel
Maak een plan voor wat er continu gemonitored moet worden tijdens het gebruik van het algoritme. Dit plan bevat niet alleen wat en hoe er gemonitored wordt, maar ook bij welke overschrijdingen actie moet worden ondernomen.

## Toelichting
Het plan voor monitoring moet aangeven wat er continu moet worden gemonitored en op welke manier dit moet gebeuren.
Daarnaast bevat het plan in welke situaties er actie moet worden ondernomen, en wie daarbij betrokken moet zijn.

Voor het opstellen van het plan voor monitoring zijn de volgende stappen nodig:

## Bepaal waar je continu op wilt monitoren
Denk hierbij aan:

- [Bias en discriminerende effecten](5-ver-03-biasanalyse.md).
- Toegankelijkheid van het model (uitvallen of haperingen).
- Foutmeldingen.
- Prestaties: [werkt het model nog zoals beoogd](5-ver-01-functioneren-in-lijn-met-doeleinden.md).
- [Datakwaliteit](3-dat-01-datakwaliteit.md) en data drift (de data die in het systeem wordt ingevoerd kan veranderen over tijd).
- Invoerwaarden (probeert een gebruiker het systeem te manipuleren).

## Bepaal hoe je het gaat meten en welke informatie je hiervoor nodig hebt
Welke metrieken worden er gebruikt om de vastgelegde aspecten te meten?
Welke informatie moet er opgeslagen worden om deze metrieken te kunnen meten? Analyseer ook of er aspecten zijn die niet met metrieken gemeten kunnen worden en hoe je die aspecten kan monitoren.

## Bepaal de grenswaarden: bij welke overschrijding moet er actie worden genomen?
Voor een effectieve monitoring is het van belang dat duidelijk is wanneer er actie moet worden ondernomen op de resultaten. Leg vast voor elk van de aspecten die gemonitored worden bij welke waarden er actie moet worden genomen. Hiervoor is het noodzakelijk om een duidelijke omschrijving te hebben wat de beoogde werking van het systeem is. Het is ook mogelijk om meerdere waarden per monitor te bepalen, waarbij bij een eerste overschrijding alleen een waarschuwing wordt gegeven en bij een tweede bij het algoritme bijvoorbeeld wordt overgegaan tot het [noodplan](4-owk-02-stopzetten-gebruik.md).

## Bepaal welke acties genomen moeten worden bij een overschrijding
Je legt hier in eerste instantie vast of het algoritme moet worden stopgezet, beperkt moet worden in de inzet of in gebruik kan blijven. Ten tweede bepaal je wat voor andere acties er moeten worden genomen, bijvoorbeeld of er een nieuwe uitgebreide evaluatie moet plaatsvinden, moet het algoritme worden bijgewerkt, moet er nieuwe data verzameld worden, moet de beveiliging verbeterd worden of moet er worden overgestapt op plan B.

## Leg vast hoe en aan wie er een waarschuwing wordt gegeven wanneer een waarde wordt overschreden
Om effectief te kunnen ingrijpen is het van belang dat wordt vastgelegd in het monitoringsplan op welke manier er een waarschuwing wordt gegeven, aan wie deze waarschuwing wordt gegeven en welke informatie deze persoon nodig heeft. Bepaal bijvoorbeeld ook of een systeem automatisch wordt uitgeschakeld of dat een mens die keuze moet maken.

Betrek bij het opstellen van dit plan een [diverse groep van belanghebbenden](1-pba-04-betrek-belanghebbenden.md) met onder andere ontwikkelaars, gebruikers en ethisch adviseurs. Zorg dat het evaluatieplan periodiek wordt herzien of deze nog voldoet.

## Risico
Tijdens dagelijks gebruik wil je continu monitoren of het systeem nog werkt zoals beoogd. Wanneer dit niet gebeurt worden mogelijke fouten en veiligheidsrisico’s niet opgemerkt.

## Bijbehorende vereiste(n)

??? expander "Bekijk alle vereisten"
	<!-- list_vereisten_on_maatregelen_page -->

## Bronnen
- [Toetsingskader Algemene Rekenkamer, 2.14](https://www.rekenkamer.nl/onderwerpen/algoritmes/documenten/publicaties/2024/05/15/het-toetsingskader-aan-de-slag)
- [Toetsingskader risicoprofilering – Normen tegen discriminatie op grond van ras en nationaliteit, College voor de Rechten van de Mens](https://publicaties.mensenrechten.nl/publicatie/4093c026-ae41-4c1d-aa78-4ce0e205b5de)

## Voorbeelden

!!! example "Gemeente Montferland - Montferland AI"
	De gemeente Montferland heeft een chatbot (MAI) ontwikkeld voor het beantwoorden van algemene vragen. Op deze manier is algemene informatie binnen de gemeente 24/7 bereikbaar voor haar inwoners en worden de medewerkers ontlast van de live chat. Om privacy te waarborgen wordt MAI continu via een automatisch systeem op locatie gemonitored via het controleren van de logbestanden per chat. Als in dit logbestand privacygevoelige informatie gesignaleerd wordt, wordt er direct melding van gemaakt. In dat geval wordt een mail verstuurd naar de servicedesk, systeembeheer en naar de hoofdontwikkelaar van MAI. Daarnaast wordt er een incident aangemaakt door de servicedesk en wordt het incident getoond op het grote scherm bij de systeembeheerders.

	Bron: [Mai (Montferland AI) - Gemeente Montferland](https://algoritmes.overheid.nl/nl/algoritme/mai-montferland-ai-gemeente-montferland/96671359)

Heb je een ander voorbeeld of best practice, laat het ons weten via [algoritmes@minbzk.nl](mailto:algoritmes@minbzk.nl)  
