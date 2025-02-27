---
# Dit template dient als voorbeeld voor een MAATREGEL in het Algoritmekader.
# Meer over de onderdelen van deze broncode en de voorwaarden waar die aan moeten voldoen, lees je in de documentatie:
# github.com/MinBZK/Algoritmekader/wiki/Onderdelen-van-het-Algoritmekader

title: Hier staat de titel, die in 1 zin de maatregel beschrijft.

# deze unieke code moet aan enkele voorwaarden voldoen, let goed op!
id: urn:nl:ak:mtr:owp-00

toelichting: Hier staat in enkele zinnen uitgelegd wat de regel inhoudt. Maximaal 40 woorden.

# pas deze tags aan om de vereiste aan de goede fases uit de levenscyclus te koppelen:
levenscyclus:
- ontwerp
- implementatie

# pas deze tags aan om de vereiste aan de goede onderwerpen te koppelen:
onderwerp:
- governance
- transparantie

# pas deze tags aan om de vereiste aan de goede rollen te koppelen:
rollen:
- projectleider

# vul hier de bestandsnamen in van de vereisten die horen bij deze maatregel (minus de bestandsuitgang '.md'):
vereiste: 
- aia-03-risicobeheersysteem
- aia-04-risicobeoordeling-voor-jongeren-en-kwetsbaren
- aia-05-data-kwaliteitscriteria
# LET OP: dit zijn nu nog voorbeelden van 3 vereisten, vervang dit dus met de namen van de vereisten waar deze maatregel bij hoort

# 
sources:
  ADR: PRI.11
  ARK: 3.17

# het volgende laten staan, dit is nodig voor de styling van de website:
hide:
- navigation
- toc
---

<!-- tags -->

## Maatregel

Hier staat nog een keer duidelijk de maatregel die een organisatie kan nemen. Dit is het advies dat we (liefst in 1 zin) aan organisaties kunnen geven.
Dit kan vaak hetzelfde zijn als de title of toelichting die je hierboven in de metadata hebt meegegeven.

## Toelichting
Hier staat in enkele alinea's meer uitgelegd over de maatregel.

Wat is het advies dat een organisatie krijgt? 

Beschrijf dit zo nauwkeurig mogelijk.

## Risico 
Hier staat uitgelegd, in één alinea, wat het risico is als deze maatregel níet wordt geïmplementeerd.

## Bijbehorende vereiste(n) { data-search-exclude }
<!-- Hier volgt een lijst met vereisten op basis van de in de metadata ingevulde vereiste -->

<!-- Let op! onderstaande regel met 'list_vereisten_on_maatregelen_page' niet weghalen! Deze maakt automatisch een lijst van bijbehorende verseisten op basis van de metadata  -->
??? expander "Bekijk alle vereisten"
    <!-- list_vereisten_on_maatregelen_page -->

## Bronnen
<!-- Hier staan, als lijstje, de bronnen van de vereiste. Liefst worden hier de exacte artikelen genoemd uit de betreffende wet, inclusief een link naar de wet. -->
- (denk aan de extra enter vóór en na een lijstje met koppeltekens).
- [Artikel 12345, Voorbeeldwet](www.url van wetsartikel.nl)

## Voorbeelden

!!! quote "Ervaring uit de praktijk"

	"Misschien is het grootste succes wel dat we het vooral niet helemaal zelf bedacht hebben. En dat we het gewoon grotendeels gekopieerd hebben van andere partijen die dit hebben gemaakt. En vooral hebben gekeken naar wat we als organisatie nodig hebben."


!!! example "Voorbeeld: Ervaringen Kadaster" 
	Enkele ervaringen van het Kadaster bij het aansluiten van nieuwe onderwerpen op de bestaande governance-structuren:
 	
	1. Bij de inwerkingtreding van de AVG ging men bij veel organisaties, waaronder het Kadaster, voortvarend aan de slag met DPIA’s en andere instrumenten. Volgens het Kadaster is het echter belangrijk te waken voor een schijndossier: begrijp goed wat daadwerkelijk toegepast moet worden voordat je begint; voer geen acties uit alleen om maar aan te tonen dat je eraan voldoet.
	2. Het Kadaster benadrukt daarnaast het belang van een doordachte governance. Hoewel de rol van de Functionaris Gegevensbescherming (FG) wettelijk is vastgelegd, is dit niet voldoende. Er moet worden nagedacht over de benodigde profielen ter ondersteuning van de uitvoering, zoals (centrale) privacy officers, en of hiervoor voldoende capaciteit beschikbaar is.
	3. Verder is het volgens het Kadaster essentieel dat interpretaties van wet- en regelgeving consistent zijn binnen de organisatie en tussen collega’s die binnen de governance-structuur samenwerken.
	4. Uit ervaring blijkt bovendien dat er vaak beleid wordt opgesteld, maar dat in de praktijk de capaciteit ontbreekt om dit uit te voeren. Daarom pleit het Kadaster voor een realistisch beleidsplan waarmee de gestelde doelen daadwerkelijk kunnen worden gerealiseerd.
       

!!! example "Handreiking gezamenlijk gebruik IAMA en DPIA - Ministerie van BZK"
	
	Binnen het Ministerie van Binnenlandse Zaken en Koninkrijksrelaties (BZK) is een handreiking opgesteld voor het gezamenlijk gebruik van twee impact assessments: de [Data Protection Impact Assessment (DPIA)](../hulpmiddelen/DPIA.md) en [Impact Assessment Mensenrechten en Algoritmes (IAMA)](../hulpmiddelen/IAMA.md).

 	In deze handreiking wordt toegelicht wat de overeenkomsten en verschillen tussen het IAMA en DPIA zijn. Daarnaast wordt aangegeven hoe deze instrumenten gecombineerd kunnen worden. Het doel is om zo deze instrumenten op een efficiënte en gebruikersvriendelijke manier samen te kunnen gebruiken.

	Bron: [Handreiking gezamenlijk gebruik IAMA en Model DPIA Rijksdienst](https://www.cip-overheid.nl/media/av0dmahv/20230614-gezamenlijk-gebruik-iama-en-model-dpia-rijksdienst-v1-0.pdf)
 
Heb je een ander voorbeeld of best practice, laat het ons weten via [algoritmes@minbzk.nl](mailto:algoritmes@minbzk.nl) 
