---
title: Stel een plan op voor continue monitoring
id: urn:nl:ak:mtr:mon-07
toelichting: Maak een plan voor wat er continu gemonitord moet worden tijdens het gebruik van het algoritme. Dit plan bevat niet alleen wat en hoe er gemonitord wordt, maar ook bij welke overschrijdingen actie moet worden ondernomen.
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
hide:
- navigation
- toc
---

<!-- tags -->

## Maatregel
Maak een plan voor wat er continu gemonitord moet worden tijdens het gebruik van het algoritme. Dit plan bevat niet alleen wat en hoe er gemonitord wordt, maar ook bij welke overschrijdingen actie moet worden ondernomen.

## Toelichting
Het monitoringplan moet aangeven wat er continu moet worden gemonitord en op welke manier dit moet gebeuren. 
Daarnaast bevat het plan in welke situaties er actie moet worden ondernomen, en wie daarbij betrokken moet zijn. 

Voor op opstellen van het monitoringplan zijn de volgende stappen nodig:

### Bepaal waar je continu op wilt monitoren
Denk hierbij aan:

- toegankelijkheid van het model (uitvallen of haperingen)
- foutmeldingen
- prestaties: [werkt het model nog zoals beoogd](5-ver-01-functioneren-in-lijn-met-doeleinden.md)
- [datakwaliteit](3-dat-01-datakwaliteit.md) en data drift (de data die in het systeem wordt ingevoerd kan veranderen over tijd)
- invoerwaarden (probeert een gebruiker het systeem te manipuleren)

### Bepaal hoe je het gaat meten en welke informatie je hiervoor nodig hebt
Welke metrieken worden er gebruikt om de vastgelegde aspecten te meten? 
Welke informatie moet er opgeslagen worden om deze metrieken te kunnen meten? Analyseer ook of er aspecten zijn die niet met metrieken gemeten kunnen worden en hoe je die aspecten kan monitoren.   

### Bepaal de grenswaarden: bij welke overschrijding moet er actie worden genomen?
Voor een effectieve monitoring is het van belang dat duidelijk is wanneer er actie moet worden ondernomen op de resultaten. Leg vast voor elk van de aspecten die gemonitord wordt bij welke waarden er actie moet worden genomen. Hiervoor is het noodzakelijk om een duidelijke omschrijving te hebben wat de beoogde werking van het systeem is. Het is ook mogelijk om meerdere waarden per monitor te bepalen, waar bij een eerste overschrijding alleen een waarschuwing wordt gegeven en bij een tweede het algoritme bijvoorbeeld wordt overgegaan tot het [noodplan](4-owk-02-stopzetten-gebruik.md). 

### Bepaal welke acties genomen moeten worden bij een overschrijding
Je legt hier in eerste instantie vast of het algoritme moet worden stopgezet, beperkt moet worden in de inzet of nog gebruikt kan blijven worden. Ten tweede bepaal je wat voor andere acties er moeten worden genomen, bijvoorbeeld moet er een nieuwe uitgebreide evaluatie moet plaatsvinden, moet het algoritme worden bijgewerkt, moet er nieuwe data verzameld worden, moet de beveiliging verbeterd worden, moet er worden overgestapt op plan B. 

### Leg vast hoe en aan wie er een waarschuwing wordt gegeven wanneer een waarde wordt overschreden
Om effectief te kunnen ingrijpen is het van belang dat wordt vastgelegd in het monitoring plan op welke manier er een waarschuwing wordt gegeven, aan wie deze waarschuwing wordt gegeven en welke informatie deze persoon nodig heeft. Bepaal bijvoorbeeld ook of een systeem automatisch wordt uitgeschakeld of dat een mens die keuze moet maken. 

Betrek bij het opstellen van dit plan een [diverse groep van belanghebbenden](1-pba-04-betrek-belanghebbenden.md) met o.a. ontwikkelaars, gebruikers en ethisch adviseurs. Zorg dat het evaluatieplan periodiek wordt herzien of deze nog voldoet.  


## Bijbehorende vereiste(n)

<!-- list_vereisten_on_maatregelen_page -->

## Risico
Tijdens dagelijks gebruik wil je continu monitoren of het systeem nog werkt zoals beoogd. Wanneer dit niet gebeurt worden mogelijke fouten en veiligheidsrisico’s niet opgemerkt. 

## Bronnen


## Voorbeeld

Heb jij een goed voorbeeld? Laat het ons weten!

