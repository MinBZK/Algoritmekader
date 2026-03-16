---
title: Taken en verantwoordelijkheden zijn toebedeeld in de algoritmegovernance
id: urn:nl:ak:mtr:org-10
toelichting: Taken en verantwoordelijkheden zijn toebedeeld in de algoritmegovernance
levenscyclus:
- organisatieverantwoordelijkheden
onderwerp:
- governance
rollen:
- projectleider
- beleid-en-advies
sources:
  ADR: SV.9
hide:
- navigation
- toc
version: "92559128"
version_date: "2025-07-04"
---
<!-- tags -->

## Maatregel

Taken en verantwoordelijkheden zijn toebedeeld in de algoritmegovernance.

## Toelichting
- Bij het vormgeven van een doeltreffende algoritmegovernance is het beleggen van expliciete taken en verantwoordelijkheden cruciaal.
- Het beleggen van deze taken en verantwoordelijkheden zorgt voor een actiegerichte structuur waarin duidelijkheid bestaat over wie wanneer aan zet is.
- Denk hierbij aan het opstellen van een RACI-matrix en pas dit binnen de organisatie toe per risicoclassificatie voor algoritmes.
- Rollen en verantwoordelijkheden kunnen worden gekoppeld aan de [vereisten](../vereisten/index.md) en [maatregelen](../maatregelen/index.md) die moeten worden gerealiseerd in de verschillende [fasen van de levenscyclus](../../levenscyclus/over-de-levenscyclus.md) van een algoritme.
- Organisaties zullen zelf moeten beoordelen welke taken en verantwoordelijkheden ze willen koppelen aan de beschikbare (of nieuwe) rollen binnen hun organisaties.
- Zie hieronder een mogelijk voorbeeld van hoe dit eruit kan zien.
- Bij zeer complexe processen waarbij ondersteunende rollen nodig zijn, kun je ook de uitgebreidere RASCI-matrix gebruiken, waarbij de toegevoegde S staat voor Supportive.

![Format](https://github.com/user-attachments/assets/3debe7b6-0c42-40f5-a366-9cc5cc90cd3e)

De rollen en verantwoordelijkheden voor reguliere algoritmes en AI kunnen anders zijn dan voor generatieve AI. Waar het gebruik van reguliere algoritme en Al-toepassingen duidelijk onder de verantwoordelijkheid van het management valt, wordt er bij hulpmiddelen die gebruik maken van generatieve AI meer verantwoordelijkheid gevraagd van betrokken medewerkers. Hier wordt vaak ingezet om te zorgen voor bewustwording van verantwoord gebruik van deze technologie bij verschillende medewerkers.

## Risico
<!-- vul hier het specifieke risico in dat kan worden gemitigeerd met behulp van deze maatregel -->
Een risico dat kan worden gemitigeerd met behulp van deze maatregel is dat het werkproces rondom algoritmegovernance niet efficiënt is ingedeeld en bijvoorbeeld kan leiden tot dubbele werkzaamheden of overzicht verliezen.


## Bijbehorende vereiste(n) { data-search-exclude }
<!-- Hier volgt een lijst met vereisten op basis van de in de metadata ingevulde vereiste -->

<!-- Let op! onderstaande regel met 'list_vereisten_on_maatregelen_page' niet weghalen! Deze maakt automatisch een lijst van bijbehorende verseisten op basis van de metadata  -->
??? expander "Bekijk alle vereisten"
    <!-- list_vereisten_on_maatregelen_page -->

## Bronnen
- [Onderzoekskader Auditdienst Rijk, SV.9](https://www.rijksoverheid.nl/documenten/rapporten/2023/07/11/onderzoekskader-algoritmes-adr-2023)

## Voorbeelden

!!! example "RACI matrix - diverse organisaties"

	Bij Gemeentelijke Model Architectuur (GEMMA) wordt aangegeven dat een RACI matrix rollen en verantwoordelijkheden goed weergeeft en onderscheidt. Het RACI matrix is een afkorting voor  Responsible (Verantwoordelijk), Accountable (Eindverantwoordelijk), Consulted (Raadplegen) en Informed (Informeren). In deze matrix staan horizontaal de rollen en staan verticaal de taken/producten waar een rol verantwoordelijk voor is.
	Deze matrix geeft veel verschillende rollen weer die in het beste geval voor verschillende functionarissen zijn. GEMMA geeft ook aan dat in kleinere organisaties (kleinere gemeenten) dit niet altijd mogelijk is. Het is dus belangrijk om te weten dat dit verschillend is per gemeente en afhankelijk van de [volwassenheid](0-org-06-volwassenheidsmodel.md) van inrichting van gegevensmanagement.

    ![Voorbeeld invulling RACI matrix](https://www.gemmaonline.nl/images/gemma/c/cf/GMT_GM_RACI.png)

	Bron: [RACI matrix](https://www.gemmaonline.nl/wiki/Bestand:RACI_GM-BIG-AVG-ENSIA_v1_0.xlsx.zip)


!!! example "Belastingdienst  - Werkpakketten"

	Binnen de Belastingdienst Analytische en Cognitieve Technologie heeft het team CoE Cognitieve oplossingen ervaren dat het gebruik van _werkpakketten_ goed werkt. Werkpakketten zijn een omschrijving van taken en verantwoordelijkheden in plaats van uitgewerkte functies. Op deze manier staan er een groot aantal dingen vast maar hoeft er niet op microniveau regide te staan. Alle werkpakketten zijn overlegd en besproken om kwaliteit te behouden, maar uitwerkingen kunnen het beste uit de praktijk komen. Zij geven dan ook mee; “Wees als algoritmegovernance nog nieuw is zeker in het begin bewust dat inrichting altijd beter kan; ga grondig maar ook flexibel te werk.”

	Bron: Analytische en Cognitieve Technologie | CoE Cognitieve Oplossingen


!!! example "Verschillende organisaties  - Three-lines-model"

	Er zijn verschillende organisaties waaronder het UWV en gemeente Rotterdam die gebruik maken van het three-lines-model. Dit model geeft aan dat er drie niveaus zijn van verantwoordelijkheid voor een effectieve governance. De eerste lijn gaat vaak over de directe acties, de tweede lijn over het ondersteunen van de eerste lijn en de derde lijn over het controleren van lijn een en twee.

    Meer informatie over het implementeren van het three-lines-model is te vinden onder ["Richt een algoritmegovernance in met three lines of defence"](0-org-07-intern-toezicht.md)


Heb je een ander voorbeeld of best practice, laat het ons weten via [algoritmes@minbzk.nl](mailto:algoritmes@minbzk.nl) .
