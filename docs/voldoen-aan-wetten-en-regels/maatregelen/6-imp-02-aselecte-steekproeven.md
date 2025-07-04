---
# vul hier een titel in voor deze maatregel
title: Doe aselecte steekproeven om algoritmes met 'risicogestuurde selectie’ te controleren
id: urn:nl:ak:mtr:imp-02
# geef hier een korte toelichting van deze maatregel
toelichting: Zorg dat een risicogestuurde selectie niet alleen gemaakt wordt op basis van een algoritme, maar dat er ook willekeurige gevallen toegevoegd worden aan de selectie. Deze aselecte steekproeven kunnen gebruikt worden om modellen te onderhouden.
vereiste:
- aia-27-beoordelen-gevolgen-grondrechten
- grw-02-non-discriminatie
- aia-10-nauwkeurigheid-robuustheid-cyberbeveiliging
levenscyclus:
- dataverkenning-en-datapreparatie
- implementatie
- monitoring-en-beheer
onderwerp:
- bias-en-non-discriminatie
- technische-robuustheid-en-veiligheid
rollen:
- ontwikkelaar
hide:
- navigation
- toc
version: "1.0.0"
version_date: "2025-07-04"
---

<!-- Let op! onderstaande regel met 'tags' niet weghalen! Deze maakt automatisch de knopjes op basis van de metadata  -->
<!-- tags -->

## Maatregel
Uitvoeren van aselecte steekproeven als aanvulling wanneer gebruik gemaakt wordt van risicogestuurde selectie.

## Toelichting
<!-- Geef hier een toelichting van deze maatregel -->
Deze maatregel dekt (een gedeelte van) een eis die vanuit het [advies vanuit de Autoriteit Persoonsgegevens (AP) over geautomatiseerde besluitvorming](https://www.autoriteitpersoonsgegevens.nl/documenten/advies-geautomatiseerde-besluitvorming) wordt gesteld, namelijk dat het risico op discriminatoire verwerkingen is onderzocht en ondervangen.

Aselecte steekproeven kunnen een waardevolle toevoeging zijn bij risicogestuurde selectie.

Het toevoegen van aselecte steekproeven maakt het mogelijk om over tijd te beoordelen of het algoritme nog voldoende effectief is.
Populaties veranderen immers over tijd. Een selectie die het meest effectief was bij ingebruikname kan over tijd dat niet meer zijn.
Door alleen risicogestuurd te selecteren wordt dit niet inzichtelijk, omdat bepaalde groepen zelden tot nooit gecontroleerd worden.
Door de aanvullende mogelijkheid van monitoring, kan over tijd beoordeeld worden of er nog steeds sprake is van de meest proportionele vorm.
Als dat niet zo is, kan bijvoorbeeld gekozen worden voor aanpassing van de risicogestuurde selectie of overgaan op volledig aselect.

De maatregel gaat daarmee niet direct discriminatie tegen, omdat er sprake kan zijn van discriminatie ongeacht de effectiviteit van de risicogestuurde selectie.
Een lagere effectiviteit maakt het echter lastiger het gemaakte onderscheid te rechtvaardigen.

Het gebruik van een aselecte steekproef is in veel gevallen essentieel om het systeem te kunnen toetsen op vooringenomenheid.
Een aselecte steekproef geeft ook inzicht in een deel van de populatie dat doorgaans niet geselecteerd en behandeld wordt door het betreffende risicogestuurde algoritme.
Dit maakt het mogelijk om te toetsen of er sprake is van een over- of ondervertegenwoordiging van bepaalde groepen, of om te bepalen of bepaalde typen fouten vaker gemaakt worden in bepaalde groepen.

Bij AI-systemen die verder leren op basis van verkregen data kan daarnaast sprake zijn van een reinforcing feedbackloop, omdat zij geen representatieve data krijgen.
Het toevoegen van aselecte steekproeven kan deze feedbackloop doorbreken.

Het is aan te bevelen om, waar mogelijk, behandelaars niet in te lichten of een casus toegewezen is op basis van een risicogestuurd of aselecte selectie.
Daardoor wordt beperkt dat een behandelaar met tunnelvisie een zaak bekijkt.
De behandelaar weet immers dat er tussen de selecties zaken zitten waar niet sprake is van verhoogd risico.
Op die manier kan automation bias beperkt te worden.
Niet in alle gevallen zal dit mogelijk zijn, omdat de behandelaar ook uit andere aangeleverde gegevens kan halen op basis waarvan een casus geselecteerd is.
Het is dan van belang om op andere wijze de tunnelvisie tegen te gaan.

De precieze inzet van aselecte steekproeven zal afhangen van de context.
Zo verschilt het per context hoeveel zaken aselect geselecteerd moeten worden.
Bepaal welke groepen er precies vergeleken dienen te worden en bepaal aan de hand daarvan een passende steekproefgrootte zodanig dat er gesproken kan worden over statistische significantie.

In sommige gevallen zal de impact van een selectie ook dusdanig zijn dat het zich niet leent voor aselecte steekproef.
Zo kan een aselecte steekproef wel de basis zijn voor bureauonderzoek, maar mogelijk niet als enige basis voor een huisbezoek.
Deze belangenenafweging moet per context gemaakt worden.

## Risico
<!-- vul hier het specifieke risico in dat kan worden gemitigeerd met behulp van deze maatregel -->
* Historical bias
* Representation bias
* Automation bias en Reinforcing Feedback Loop

## Bijbehorende vereiste(n) { data-search-exclude }
<!-- Hier volgt een lijst met vereisten op basis van de in de metadata ingevulde vereiste -->

<!-- Let op! onderstaande regel met 'list_vereisten_on_maatregelen_page' niet weghalen! Deze maakt automatisch een lijst van bijbehorende verseisten op basis van de metadata  -->
??? expander "Bekijk alle vereisten"
    <!-- list_vereisten_on_maatregelen_page -->

## Bronnen
<!-- Vul hier de relevante bronnen in voor deze maatregel -->

- [Rapportage Algoritmerisico's Nederland voorjaar 2024 (pp. 36-41)](https://www.autoriteitpersoonsgegevens.nl/documenten/rapportage-ai-algoritmerisicos-nederland-ran-voorjaar-2024)
- [AP-advies geautomatiseerde besluitvorming](https://www.autoriteitpersoonsgegevens.nl/documenten/advies-geautomatiseerde-besluitvorming)


## Voorbeelden
<!-- Voeg hier een voorbeeld toe, door er bijvoorbeeld naar te verwijzen -->
!!! example "Algorithm Audit: analyse Controle Uitwonendenbeurs"

	Stichting Algorithm Audit heeft de risicoprofilering in het Controle Uitwonendenbeurs-proces (CUB-proces) onderzocht op verzoek van Dienst Uitvoering Onderwijs (DUO). DUO heeft tussen 2010 en 2023 gebruik gemaakt van een risicoprofiel voor het tegengaan van onrechtmatig gebruik van de uitwonendenbeurs. Dit is in 2023 in opspraak geraakt en DUO heeft Algorithm Audit verzocht hier verder onderzoek naar te doen.
    Tijdens de kwantitatieve analyse heeft Algorithm Audit gewerkt aan de hand van aselecte steekproeven. Aan de hand van deze data hebben ze verschillende deelvragen beantwoord en blijkt dat tussen een aantal selectiecriteria onvoldoende statistisch verband gebleken is. Door middel van de aselecte steekproef blijkt hierdoor dat de selectie(criteria) aangepast moet(en) worden.


	Bron: [Algorithm Audit: analyse Controle Uitwonendenbeurs](https://algorithmaudit.eu/nl/algoprudence/cases/aa202401_preventing-prejudice/)


!!! example "Rijksdienst voor Ondernemend Nederland: Risicocontrole Subsidieaanvragen"

	De Rijksdienst voor Ondernemend Nederland (RVO) maakt gebruik van een algoritme bij het behandelen van subsidieaanvragen. Hierbij wordt bij iedere aanvraag een risico-indicatie gemaakt op basis van een aantal regels. Als er volgens het algoritme geen risico’s zijn wordt de aanvraag automatisch aangemaakt, zo niet wordt de aanvraag nog beoordeeld door een adviseur.

	Daarnaast wordt het algoritme gecontroleerd aan de hand van een steekproef. Op deze manier wordt getest of het algoritme tot de juiste conclusie is gekomen of aangescherpt moet worden. Mocht door de steekproef blijken dat het algoritme niet goed werkt geeft de RVO ook aan dat de keuze gemaakt kan worden om het algoritme niet te gebruiken. Op deze manier wordt aan de hand van steekproeven gecontroleerd dat het algoritme naar behoren werkt.

	Bron: [Rijksdienst voor Ondernemend Nederland: Risicocontrole Subsidieaanvragen](https://algoritmes.overheid.nl/nl/algoritme/risicocontrole-sde-subsidieaanvragen-rijksdienst-voor-ondernemend-nederland/51892728#verantwoordGebruik)

Heb je een ander voorbeeld of best practice, laat het ons weten via [algoritmes@minbzk.nl](mailto:algoritmes@minbzk.nl).
