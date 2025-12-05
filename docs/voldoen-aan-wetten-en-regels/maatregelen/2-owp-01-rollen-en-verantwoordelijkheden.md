---
title: Beschrijf de rollen en verantwoordelijkheden voor het ontwikkelen en gebruiken van algoritmes
id: urn:nl:ak:mtr:owp-01
toelichting: Beschrijf de rollen en verantwoordelijkheden voor het ontwikkelen en gebruiken van algoritmes
vereiste:
- avg-06-verantwoordingsplicht-rechtmatigheid
- awb-01-zorgvuldigheidsbeginsel
levenscyclus:
- ontwerp
- implementatie
- monitoring-en-beheer
onderwerp:
- governance
rollen:
- projectleider
sources:
  ADR:
  - SV.9
  - SV.19
  - PRI.1
  ARK:
  - 1.06
  - 3.02
hide:
- navigation
- toc
---

<!-- Let op! onderstaande regel met 'tags' niet weghalen! Deze maakt automatisch de knopjes op basis van de metadata  -->
<!-- tags -->

## Maatregel
Beschrijf de rollen en verantwoordelijkheden voor het ontwikkelen en gebruiken van algoritmes. De rollen en verantwoordelijkheden worden vastgesteld door de verantwoordelijke(n).

## Toelichting
Een reëel risico is dat bepaalde groepen en belanghebbenden over het hoofd worden gezien tijdens het ontwikkelproces van een algoritme.
Daarom is het noodzakelijk om al vroeg in kaart te brengen welke groepen allemaal een mening over het beoogde algoritme kunnen hebben.

Duidelijkheid en borging van rollen en verantwoordelijkheden zorgen voor een effectief en verantwoord verloop van het proces rondom de ontwikkeling, inkoop en gebruik van een algoritme.
Zeker wanneer ongewenste effecten optreden en maatregelen nodig zijn, is duidelijkheid over rollen, verantwoordelijkheden en bijbehorende besluitvormingsstructuren van belang.

Om deze reden kan het handig zijn om een matrix van belanghebbenden op te stellen.
Deze matrix kan in verdere fases helpen wanneer belanghebbenden betrokken moeten worden. In deze matrix kunnen de volgende onderdelen staan:

- Per belanghebbende een beschrijving van wie deze groep is
- Mate van invloed van belanghebbende op het algoritme: wie, wanneer in de levenscyclus zorgt voor passende [menselijke controle](../../onderwerpen/menselijke-controle.md)
- Impact van algoritme op de belanghebbende
- Risico’s voor belanghebbende (wat zal de belanghebbende merken als het algoritme eventueel niet naar behoren functioneert).

Een RACI-matrix/VERI-matrix is een passend middel om de verantwoordelijkheden (Responsible/Verantwoordelijk, Accountable/Eindverantwoordelijk, Consulted/Geraadpleegd, Informed/Geïnfomeerd) te bepalen.
Werk specifieke, gevoelige activiteiten nader uit in concrete taken en verantwoordelijkheden, bijvoorbeeld welke stappen moeten worden gezet om data veilig te leveren ten behoeve van een onderzoek naar onbewuste vooringenomenheid.

## Vaststellen van rollen en verantwoordelijkheden
- Laat de rollen en verantwoordelijkheden vaststellen door de verantwoordelijke(n). Het doel van vaststelling is dat de verantwoordelijke(n) de verantwoordelijkheid neemt en actief een keuze maakt om het algoritme te (laten) ontwikkelen of gebruiken op de beoogde wijze en met de bijbehorende verantwoordelijkheden. Met het vaststellen worden afspraken geformaliseerd.
- Vaststelling van de verantwoordelijkheden kan plaatsvinden door beleidsdocumenten, werkinstructies, verwerkersovereenkomst of een PIA/DPIA, mits de verantwoordelijkheden voldoende duidelijk zijn beschreven.
- Gedurende de levenscyclus kan het voorkomen dat rollen en verantwoordelijkheden opnieuw moet worden beschreven en vastgesteld.

## Verwerking van persoonsgegevens
- Bij het verwerken van persoonsgegevens moet worden vastgelegd wie de (gezamelijke) verwerkingsverantwoordelijken zijn en wie de verwerkers. Uit deze vaststelling van de rolverdeling volgen onder de AVG verschillende rechten en plichten.
- Bij de ontwikkeling en gebruiken van algoritmes is het denkbaar dat de noodzaak voor het verwerken van persoonsgegevens wijzigt en dat meer of andere verwerkingen moeten plaatsvinden. Het is van belang dat wederom wordt beoordeeld wat dit betekent voor de bijbehorende verantwoordelijkheden. Als er sprake is van een wezenlijke wijziging ten opzichte van de al vastgestelde situatie, bijvoorbeeld doordat er meer persoonsgegevens worden verwerkt door een andere partij, dan zal de verwerkingsverantwoordelijke opnieuw tot vaststelling moeten overgaan om de afspraken te formaliseren.


## Risico
De sturing en verantwoording is ontoereikend of niet geborgd, waardoor er onvoldoende betrokkenheid of capaciteit is van verantwoordelijken. Ook kan er dan onvoldoende deskundigheid in de organisatie zijn, wat de kans vergroot op fouten en ongewenste effecten. Zonder het vaststellen van rollen en verantwoordelijkheden kan er geen effectieve sturing plaatsvinden op partijen die betrokken zijn bij het ontwikkelen of gebruiken van algoritmes.

## Bijbehorende vereiste(n) { data-search-exclude }
??? expander "Bekijk alle vereisten"
    <!-- list_vereisten_on_maatregelen_page -->

## Bronnen
<!-- Vul hier de relevante bronnen in voor deze maatregel -->
- [Toetsingskader Algoritmes Algemene Rekenkamer, 1.06, 3.02](https://www.rekenkamer.nl/onderwerpen/algoritmes/documenten/publicaties/2024/05/15/het-toetsingskader-aan-de-slag)
- [Onderzoekskader Algoritmes Auditdienst Rijk, SV.9, SV.19, PRI.1](https://www.rijksoverheid.nl/documenten/rapporten/2023/07/11/onderzoekskader-algoritmes-adr-2023)

## Voorbeelden

!!! example "RACI matrix - diverse organisaties"

	Bij Gemeentelijke Model Architectuur (GEMMA) wordt aangegeven dat een RACI matrix rollen en verantwoordelijkheden goed weergeeft en onderscheidt. Het RACI matrix is een afkorting voor  Responsible (Verantwoordelijk), Accountable (Eindverantwoordelijk), Consulted (Raadplegen) en Informed (Informeren). In deze matrix staan horizontaal de rollen en staan verticaal de taken/producten waar een rol verantwoordelijk voor is.
	Dit matrix geeft veel verschillende rollen weer die in het beste geval voor verschillende functionarissen zijn. GEMMA geeft ook aan dat in kleinere organisaties (kleinere gemeenten) dit niet altijd mogelijk is. Het is dus belangrijk om te weten dat dit verschillend is per gemeente en afhankelijk van de [volwassenheid](0-org-06-volwassenheidsmodel.md) van inrichting van gegevensmanagement.

	![Screenshot van een RACI-matrix waarin in een tabel staat aangegeven welke rol of rollen verantwoordelijk zijn voor een taak of product. Het bestand waaruit het screenshot is genomen is te downloaden op de website van GEMMA. Bij de bron vind je een link naar het bestand.](https://www.gemmaonline.nl/images/gemma/c/cf/GMT_GM_RACI.png)

	Bron: [RACI matrix](https://www.gemmaonline.nl/wiki/Bestand:RACI_GM-BIG-AVG-ENSIA_v1_0.xlsx.zip)

!!! example "UWV - Beleidsdocument model risico management"

	Het UWV heeft een beleidsdocument model risico management gepubliceerd in 2021 waarin alle verantwoordelijkheden en rollen toegelicht worden. Hier is een volledig hoofdstuk aan gewijd waarin alle rollen toegelicht worden aan de hand van een korte functie-naam en beschrijving. Daarnaast worden deze ook ingedeeld in de categorieën per verdedigingslinie (LINKIE). De rollen worden in ook los verder verduidelijkt rondom de verantwoordelijkheden die ze hebben inclusief mogelijke extra taken voor de persoon die hoofd is van deze rol.

	Bron: [Algoritmelevenscyclus - UWV], pagina 12( https://www.uwv.nl/overuwv/Images/bijlage-4-beslissing-op-bezwaar-op-wob-verzoek-software-en-algoritmes.pdf)

!!! example "Proceseigenaar"
	De proceseigenaar wordt vaak verantwoordelijk gehouden voor eventuele gevolgen van het gebruik van het algoritme. Deze maatregel zorgt ervoor dat de proceseigenaar niet alle verantwoordelijkheid draagt, omdat dit vaak niet realistisch is. Met deze maatregel kunnen er heldere afspraken over de verschillende verantwoordlijkheden worden gemaakt. Hierdoor wordt het draagvlak groter, zonder ten koste te gaan van de duidelijkheid over rollen en verantwoordelijkheden.


Heb je een ander voorbeeld of best practice, laat het ons weten via [algoritmes@minbzk.nl](mailto:algoritmes@minbzk.nl).
