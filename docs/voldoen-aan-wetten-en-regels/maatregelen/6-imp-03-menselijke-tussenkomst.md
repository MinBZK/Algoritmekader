---
title: Richt de juiste menselijke controle in van het algoritme
id: urn:nl:ak:mtr:imp-03
toelichting: Als algoritmes worden ingezet om te ondersteunen bij het nemen van beslissingen en besluiten door overheidsorganisaties, kan het noodzakelijk zijn om menselijke tussenkomst in te richten om foutieve output te signaleren en te corrigeren.
vereiste:
- avg-10-recht-op-niet-geautomatiseerde-besluitvorming
- grw-01-fundamentele-rechten
- aia-22-gebruiksverantwoordelijken-monitoren-werking
- awb-01-zorgvuldigheidsbeginsel
- aia-09-menselijk-toezicht
- aia-21-gebruiksverantwoordelijken-menselijk-toezicht
levenscyclus:
- ontwerp
- implementatie
- monitoring-en-beheer
onderwerp:
- menselijke-controle
- governance
rollen:
- projectleider
- beleid-en-advies
sources:
  ADR:
  - SV.5
  - SV.6
  ARK:
  - 3.11
hide:
- navigation
- toc
version: "e33a2081"
version_date: "2025-08-26"
---

<!-- tags -->
## Maatregel
Richt (technische) controlemechanismen in voor menselijke tussenkomst (of: menselijke controle) waarmee de output van een algoritme kan worden gecontroleerd.


## Toelichting

Algoritmes ondersteunen vaak beslissingen en besluitvorming van overheidsorganisaties. Deze beslissingen of besluiten kunnen betrokkenen in [aanmerkelijke mate raken of zelfs rechtsgevolgen](../vereisten/avg-10-recht-op-niet-geautomatiseerde-besluitvorming.md) hebben. Omdat algoritmes niet foutloos zijn, is het belangrijk dat een mens controleert wat een algoritme doet en, waar nodig, corrigeert. Dit proces heet 'menselijke tussenkomst' en moet betekenisvol zijn, niet slechts symbolisch.

Het inrichten, monitoren en evalueren van menselijke controle is cruciaal om te voorkomen dat algoritmes negatieve effecten veroorzaken of de menselijke autonomie ondermijnen.

Betekenisvolle menselijke controle houdt in dat:

- Het toezicht wordt uitgevoerd door iemand die bevoegd en bekwaam is om een beslissing of besluit te wijzigen.
- Automatische aanbevelingen niet klakkeloos worden overgenomen. Bijvoorbeeld: een systeem dat standaard een suggestie accepteert door een enkele klik voldoet hier niet aan.
- De vormen van menselijke tussenkomst al in een vroeg stadium, bijvoorbeeld in de ontwerpfase, worden vastgesteld op basis van risicoanalyses.
- Gebruikers voldoende kennis, tijd en verantwoordelijkheid hebben om weloverwogen beslissingen te nemen over het functioneren van algoritmes. Dit betekent ook dat externe factoren, zoals tijdsdruk of onvoldoende informatie, de beoordeling van de output niet mogen beïnvloeden. (zie ook het [Onderzoekskader algoritmes, Auditdienst Rijk, SV.6](../hulpmiddelen/onderzoekskader-adr.md))

Soms is menselijke tussenkomst minder relevant, zoals bij ‘gebonden bevoegdheden’. Hierbij is weinig tot geen ruimte om een beslissing of besluit aan te passen. Voorbeelden zijn:

- Het opleggen van verkeersboetes onder de Wet administratiefrechtelijke handhaving verkeersvoorschriften (Wahv).
- Het automatisch aanpassen van studiefinanciering op basis van inkomenswijzigingen.

Om menselijke tussenkomst goed te organiseren, zijn technische en organisatorische maatregelen nodig. Dit geldt ook wanneer een externe aanbieder de algoritmes levert. In dat geval moet de verantwoordelijke organisatie (gebruiksverantwoordelijke) samen met de aanbieder bepalen hoe menselijke tussenkomst zinvol kan worden ingericht.

### Inrichten van menselijke controle

Er zijn verschillende manieren om menselijke tussenkomst in te richten, afhankelijk van de specifieke toepassing van een algoritme. Hieronder worden vier mogelijkheden beschreven die kunnen worden ingezet, los of in combinatie:

#### 1. Human in the loop
Bij dit model speelt de mens een actieve rol in elke fase van het algoritme. Deze variant geeft de meeste controle en invloed, maar kan leiden tot vertraagde of minder efficiënte besluitvorming, vooral bij real-time of zeer complexe taken waarbij snelheid cruciaal is.
Een voorbeeld van toepassen van human-in-the-loop is het nakijken en beoordelen van de output van een algoritme door een mens, telkens voordat een beslissing wordt genomen. Het verwerken van data gebeurt alleen in opdracht van de mens en verder neemt het algoritme of AI model geen autonome beslissingen.

#### 2. Human on the loop
Hier behoudt de mens toezicht en kan ingrijpen wanneer dat nodig is om te garanderen dat een model veilig en ethisch opereert. Dit model biedt daardoor een balans tussen autonome besluitvorming en menselijke controle. Het is vooral nuttig in situaties waarin afwijkende keuzes of acties van het algoritme grote gevolgen kunnen hebben. De menselijke operator houdt de werking van het algoritme in de gaten en staat klaar om in te grijpen of beslissingen terug te draaien wanneer nodig.

#### 3. Human above the loop
In dit model houdt de mens toezicht op een hoger niveau, met een focus op strategische en ethische keuzes, in plaats van dat de menselijke operator zich bezighoudt met directe operationele beslissingen. Dit stelt de mens in staat in te grijpen wanneer kritieke morele, juridische of sociale zorgen ontstaan om het model op de langere termijn bij te sturen.  De menselijke tussenkomst is gericht op het bepalen van beleid en de richtlijnen voor algoritmes. Het gaat daarbij niet alleen over het definiëren van operationele procedures maar ook het maken van bepaalde ethische overwegingen, het zorgen voor naleving van regelgeving en het overwegen van de implicaties van de inzet van algoritmes op de lange termijn.

#### 4. Human before the loop
Hier maakt de mens vooraf ethische en morele afwegingen die in het algoritme zelf worden ingebouwd. Hoewel het model in productie autonoom opereert, zal de menselijke input gedurende de ontwikkeling ervoor zorgen dat het model ook in complexe situaties volgens de juiste (ethische) afwegingen keuzes en acties onderneemt.

Dit model is essentieel in situaties waar menselijk ingrijpen tijdens de uitvoering niet mogelijk is (wanneer er bijvoorbeeld weinig of helemaal geen tijd is om als mens te interveniëren), maar waar ethische keuzes cruciaal blijven. Denk aan bestrijding van zeemijnen of situaties met zelfrijdende auto’s in onvoorspelbare verkeerssituaties (bron: [Towards Digital Life: Een toekomstvisie op AI anno 2032, TNO](https://www.tno.nl/nl/visie-ai-2032/)). Deze variant kan ook worden ingezet voor situaties waarin wel nog menselijk ingrijpen mogelijk is.

## Risico
Het niet inrichten van passende menselijke controle leidt tot onverantwoorde inzet van algoritmen en het niet voldoen aan wettelijke vereisten.

## Bijbehorende vereiste(n) { data-search-exclude }
??? expander "Bekijk alle vereisten"
    <!-- list_vereisten_on_maatregelen_page -->

## Bronnen

- [Toetsingskader Algoritmes Algemene Rekenkamer, 3.11](https://www.rekenkamer.nl/onderwerpen/algoritmes/documenten/publicaties/2024/05/15/het-toetsingskader-aan-de-slag)
- [Menselijke tussenkomst | Algoritmes | Algemene Rekenkamer](https://www.rekenkamer.nl/onderwerpen/algoritmes/toetsingskader/ethiek/menselijke-tussenkomst)
- [Onderzoekskader Algoritmes Auditdienst Rijk, SV.5, SV.6](https://www.rijksoverheid.nl/documenten/rapporten/2023/07/11/onderzoekskader-algoritmes-adr-2023)
- [Advies landsadvocaat over geautomatiseerde selectietechnieken, p.9](https://www.rijksoverheid.nl/documenten/rapporten/2024/03/13/bijlage-2-advies-landsadvocaat-over-geautomatiseerde-selectietechniek)
- [Recht op een menselijke blik bij besluiten | Autoriteit Persoonsgegevens](https://www.autoriteitpersoonsgegevens.nl/themas/basis-avg/privacyrechten-avg/recht-op-een-menselijke-blik-bij-besluiten#:~:text=Reactie%20op%20verzoek-,Geautomatiseerd%20besluit,noemen%20dit%20een%20geautomatiseerd%20besluit.)
- Kamerstukken IT 2017-2018, 34 851, nr. (MvT UAVG), p. 120-121
- [Ethics guidelines for trustworthy AI | Shaping Europe’s digital future](https://digital-strategy.ec.europa.eu/en/library/ethics-guidelines-trustworthy-ai), deel (64)
- [Towards Digital Life: Een toekomstvisie op AI anno 2032, TNO](https://www.tno.nl/nl/visie-ai-2032/)
- [Algoritmes afwegen | Rathenau Instituut](https://www.rathenau.nl/nl/digitalisering/algoritmes-afwegen)
-	[Managing supplier delivery reliability risk under limited information: Foundations for a human-in-the-loop DSS - ScienceDirect](https://www.sciencedirect.com/science/article/abs/pii/S0167923612002886)
-	[Human control of AI systems: from supervision to teaming | AI and Ethics (springer.com)](https://link.springer.com/article/10.1007/s43681-024-00489-4)
-	[Zijn er beperkingen op het gebruik van geautomatiseerde besluitvorming? - Europese Commissie](https://commission.europa.eu/law/law-topic/data-protection/rules-business-and-organisations/dealing-citizens/are-there-restrictions-use-automated-decision-making_nl#:~:text=Example-,Antwoord,is%20of%20hen%20aanzienlijk%20be%C3%AFnvloedt.)

## Voorbeelden

!!! example "Hof van Justitie van de Europese Unie: Prejudiciële verwijzing"

    In 2021 heeft een burger SCHUFA (een Duits bedrijf wat kredietwaardigheid informatie deelt met derden) aangeklaagd naar aanleiding van een niet ingewilligd verzoek tot inzage en wissing van diens persoonsgegevens. De reden hiervoor kwam door een afwijzing van ondersteuning op basis van geautomatiseerde individuele besluitvorming. Zij maakten geen gebruik van betekenisvolle menselijke controle en dus is SCHUFA verantwoordelijk gehouden.

	Bron: [HvJEU december 2023, ECLI:EU:C:2023:957 (SCHUFA Scoring)](https://eur-lex.europa.eu/legal-content/nl/TXT/?uri=CELEX:62021CJ0634)


!!! example "Rijksdienst voor Ondernemend Nederland: Risicocontrole Subsidieaanvragen"

    De Rijksdienst voor Ondernemend Nederland (RVO) maakt gebruik van een algoritme bij het behandelen van subsidieaanvragen. Hierbij wordt bij iedere aanvraag een risico-indicatie gemaakt op basis van een aantal regels. Als er volgens het algoritme geen risico’s zijn wordt de aanvraag automatisch aangemaakt, zo niet wordt de aanvraag nog beoordeeld door een adviseur.

    Daarnaast worden aanvragen met ingewikkelde technieken of boven een bepaald bedrag altijd door een adviseur beoordeeld. Op deze manier is er sprake van betekenisvolle [menselijke controle](../../onderwerpen/menselijke-controle.md).

	Bron: [Rijksdienst voor Ondernemend Nederland: Risicocontrole Subsidieaanvragen](https://algoritmes.overheid.nl/nl/algoritme/risicocontrole-sde-subsidieaanvragen-rijksdienst-voor-ondernemend-nederland/51892728#verantwoordGebruik)

Heb je een ander voorbeeld of best practice, laat het ons weten via [algoritmes@minbzk.nl](mailto:algoritmes@minbzk.nl)  
