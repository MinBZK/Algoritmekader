---
title: Menselijke controle over algoritmes
hide:
- path
---

# Menselijke controle over algoritmes
Algoritmes van de overheid moeten onder controle blijven van mensen. In alle gevallen moet een mens in staat zijn om het algoritme aan te passen, te stoppen of de output kritisch te evalueren en, zo nodig, naast zich neer te leggen.

## Wat is menselijke controle?
Menselijke controle kan gezien worden als alle wijzen waarop mensen invloed hebben op de werking en uitkomsten van een algoritme en hoe zij kritisch daarmee omgaan. Zo zijn mensen steeds in staat om in te grijpen als op één van deze vlakken een probleem optreedt.

In bestaande wet- en regelgeving worden twee vormen van menselijke controle specifiek benoemd. De Algemene Verordening Gegevensbescherming (AVG) spreekt in artikel 22 over het recht op menselijke tussenkomst bij besluitvorming gebaseerd op geautomatiseerde verwerking en profilering dat voor betrokkene rechtsgevolgen heeft of die de betrokkene in aanmerkelijke mate treft. Volledig geautomatiseerde besluitvorming is in principe verboden. De AI-verordening spreekt in artikel 14 over menselijk toezicht. Dit artikel bevat een breed palet aan toezichtmaatregelen die verplicht zijn bij hoog-risico AI-systemen in de zin van de AI-verordening.

## Belang van menselijke controle
Algoritmegebruik kan op grote schaal de levens en rechten van burgers beïnvloeden. Het is daarom belangrijk dat mensen die de algoritmes gebruiken controle houden op de werking daarvan en of deze daadwerkelijk binnen de gestelde kaders functioneren. Het is van belang dat dit door mensen gedaan wordt, omdat mensen over eigenschappen en kennis beschikken die algoritmes niet hebben.

De Europese wetgever heeft specifiek voor de geautomatiseerde verwerking van persoonsgegevens voor besluitvorming en voor algoritmes die als hoog-risico AI-systeem gekwalificeerd kunnen worden een expliciete vorm van menselijke controle willen regelen.

De bescherming van persoonsgegevens is een grondrecht in de Europese Unie. De verwerking van persoonsgegevens zou steeds ten dienste van de mens moeten staan. De snelle technologische en globaliserende ontwikkelingen hebben samen met de economische en sociale integratie van de interne Europese markt een grote toename van verzameling en deling van persoonsgegevens veroorzaakt. Het is in dat licht dat de AVG ertoe verplicht dat bij besluiten die gebaseerd zijn op geautomatiseerde verwerking van persoonsgegevens, met inbegrip van profilering, in principe altijd een mens kritisch dient te kijken naar de output van een algoritme en het op basis daarvan te nemen besluit. Uitzonderingen hierop zijn alleen mogelijk als waarborgen worden ingericht.

Hetzelfde geldt voor de AI-systemen die in de AI-verordening als hoog risico gekwalificeerd worden. Dit zijn systemen die aanzienlijke schadelijke gevolgen kunnen hebben voor de gezondheid, veiligheid en grondrechten van personen binnen de Europese Unie. Om schade te beperken verplicht de AI-verordening de aanbieders van deze systemen ertoe ze zo in te richten dat er door mensen op doeltreffende wijze toezicht op kan worden uitgeoefend.

Menselijke controle is voornamelijk noodzakelijk in de gevallen dat een algoritme onverhoopt niet goed functioneert en incorrecte output levert. Het zou grote negatieve gevolgen voor betrokkenen kunnen hebben als er geen persoon is die dan kan tegenhouden dat op basis daarvan besluiten worden genomen. In het verlengde daarvan kan op basis van deze controle dan ook het systeem zelf weer worden aangepast of verbeterd. Een zekere vorm van controle is dus ook op zijn plek bij het ontwikkelen van algoritmes en het trainen daarvan. Zo ontstaat er een cyclus van ontwikkeling, training, gebruik en verbetering, waarbij controle bij iedere fase wenselijk en bij enkele fasen verplicht is.

Het is hierbij belangrijk om steeds in het oog te houden dat menselijke controle enkel door mensen gedaan kan worden. De controle kan dus niet zelf weer geautomatiseerd worden. Je kan mensen wel ondersteunen met technologische hulpmiddelen.

## Aanpak menselijke controle
Er bestaan dus specifieke normen voor menselijke tussenkomst en menselijk toezicht. De AP heeft handvatten opgesteld voor de inrichting van betekenisvolle menselijke tussenkomst in de zin van de AVG. Richtlijnen voor de inrichting van menselijk toezicht op hoog-risico AI-systemen volgen nog.

Om in meer algemene termen na te denken over hoe menselijke controle kan worden ingericht volgt hieronder algemene informatie. Ten eerste is het goed om in elk geval twee vormen van controle te onderscheiden:

* Technische controle: Controle uitoefenen op het algoritme zelf en de technische kenmerken daarvan. Je bepaalt bijvoorbeeld dat een AI-systeem alleen mag 'bijleren’ wanneer de data voldoet aan bepaalde voorwaarden voor sociale representativiteit.
* Gebruikerscontrole: Controle op het gebruik van algoritmes. Je houdt een vorm van toezicht op de werking van het algoritme bij gebruik en kan het algoritme stilleggen of wijzigen.

Wanneer en hoe je controle uitoefent, hangt af van het [soort algoritme en risico](../soorten-algoritmes-en-ai/wat-is-een-algoritme.md), de [levenscyclusfase](../levenscyclus/index.md) van je project en je [expertise](../rollen/index.md). Bepaal in elk geval zo vroeg mogelijk wie in welke levenscyclusfase verantwoordelijk is voor menselijke controle en [beschrijf dit in een RACI-matrix of VERI-matrix](../voldoen-aan-wetten-en-regels/maatregelen/2-owp-01-rollen-en-verantwoordelijkheden.md). Menselijke controle is nodig in verschillende fases, door verschillende mensen. Er is nooit één persoon verantwoordelijk voor de totale controle. Het beste is dus om uit te gaan van meerdere 'humans in the loop' oftewel een 'team in the loop'.

Tijdens de ontwikkeling en het gebruik kun je menselijke controle op de volgende manieren uitoefenen:

1. _<span lang="en">Human in the loop</span>_
Bij dit model speelt de mens een actieve rol in elke fase van het algoritme. Deze variant geeft de meeste controle en invloed, maar kan leiden tot vertraagde of minder efficiënte besluitvorming, vooral bij real-time of zeer complexe taken waarbij snelheid cruciaal is. Een voorbeeld van toepassen van human-in-the-loop is het nakijken en beoordelen van de output van een algoritme door een mens, telkens voordat een beslissing wordt genomen. Het verwerken van data gebeurt alleen in opdracht van de mens en het algoritme of AI-model neemt geen autonome beslissingen.

2. _<span lang="en">Human on the loop</span>_
Hier behoudt de mens toezicht en kan ingrijpen wanneer dat nodig is om te garanderen dat een model veilig en ethisch opereert. Dit model biedt daardoor een balans tussen autonome besluitvorming en menselijke controle. Het is vooral nuttig in situaties waarin afwijkende keuzes of acties van het algoritme grote gevolgen kunnen hebben. De menselijke operator houdt de werking van het algoritme in de gaten en staat klaar om in te grijpen of beslissingen terug te draaien wanneer nodig.

3. _<span lang="en">Human above the loop</span>_
In dit model houdt de mens toezicht op een hoger niveau, met een focus op strategische en ethische keuzes, in plaats van dat de menselijke operator zich bezighoudt met directe operationele beslissingen. Dit stelt de mens in staat in te grijpen wanneer kritieke morele, juridische of sociale zorgen ontstaan om het model op de langere termijn bij te sturen. De menselijke tussenkomst is gericht op het bepalen van beleid en de richtlijnen voor algoritmes. Het gaat daarbij niet alleen over het definiëren van operationele procedures maar ook het maken van bepaalde ethische overwegingen, het zorgen voor naleving van regelgeving en het overwegen van de implicaties van de inzet van algoritmes op de lange termijn.

4. _<span lang="en">Human before the loop</span>_
Hier maakt de mens vooraf ethische en morele afwegingen die in het algoritme zelf worden ingebouwd. Hoewel het model in productie autonoom opereert, zal de menselijke input gedurende de ontwikkeling ervoor zorgen dat het model ook in complexe situaties volgens de juiste (ethische)afwegingen keuzes en acties onderneemt.

Dit model is essentieel in situaties waar menselijk ingrijpen tijdens de uitvoering niet mogelijk is(wanneer er bijvoorbeeld weinig of helemaal geen tijd is om als mens te interveniëren), maar waar ethische keuzes cruciaal blijven. Denk aan bestrijding van zeemijnen of situaties met zelf rijdende auto’s in onvoorspelbare verkeerssituaties (bron: Towards Digital Life: Een toekomstvisie op AI anno2032, TNO). Deze variant kan ook worden ingezet voor situaties waarin wel nog menselijk ingrijpen mogelijk is.

## Meer informatie?
Raadpleeg de publicatie van de Autoriteit Persoonsgegevens over [handvatten voor betekenisvolle menselijke tussenkomst](https://www.autoriteitpersoonsgegevens.nl/actueel/betekenisvolle-menselijke-tussenkomst-bij-algoritmische-besluitvorming).

## Vereisten { data-search-exclude }

<!-- list_vereisten onderwerp/menselijke-controle no-search no-onderwerp no-rol no-levenscyclus -->


## Aanbevolen maatregelen

<!-- list_maatregelen onderwerp/menselijke-controle no-search no-onderwerp no-rol no-levenscyclus -->

## Hulpmiddelen

<!-- list_hulpmiddelen onderwerp/menselijke-controle no-search no-onderwerp no-rol no-levenscyclus no-id -->

## Help ons deze pagina te verbeteren
Deel je idee, suggestie of opmerking via [GitHub](https://github.com/MinBZK/Algoritmekader/edit/main/docs/onderwerpen/menselijke-controle.md) of mail ons via [algoritmes@minbzk.nl](mailto:algoritmes@minbzk.nl).
