# Algoritmekader

**Welkom op de Github repo voor het algoritmekader!**

## Algoritmekader

Het ministerie van BZK gaat aan de slag met een Algoritmekader. Het doel daarvan is om overheden op praktische wijze te ondersteunen, zodat zij op een wettige en ethisch verantwoorde wijze algoritmes en AI-systemen gebruiken.

Belangrijk uitgangspunt bij de ontwikkeling van het kader is om zoveel mogelijk gebruik te maken van de kennis en kunde die er al is. En nadenken over hoe bestaande informatie geordend kan worden. Het kader kan daar een handig hulpmiddel voor zijn. Het is belangrijk om bij de inzet van algoritmes in alle fasen te weten welke stappen van belang zijn. De verschillende stappen zijn een goed uitgangspunt voor de ontwikkeling van het Algoritmekader.

## Disclaimer
Het Algoritmekader is nog volop in ontwikkeling. Op deze Github willen we vooral aan de slag gaan op een open en transparante wijze. Het is dus niet definitief. Dat betekent dat er dingen opstaan die niet af zijn en soms zelfs fout. Mocht er iets niet kloppen, laat het ons weten.

## Hoe kan je bijdragen aan de ontwikkeling van het algortimekader?

We ontwikkelen het algoritmekader open source via GitHub. Voor de documentatie maken we gebruik van [Markdown](https://www.markdownguide.org/basic-syntax/) bestanden. Dit bestandsformaat wordt door veel verschillende tools ondersteund, en maakt het eenvoudig versiebeheer op het algoritmekader toe te passen. Hierdoor hebben we grip op reviews en verschillende versies van het kader.

Vooralsnog maken we tijdens de ontwikkelfase gebruik van [mkdocs](https://www.mkdocs.org/) en [material for mkdocs](https://squidfunk.github.io/mkdocs-material/) om de documtentatie inzichtelijk te maken op een website. Hiermee faciliteren we ook al in de ontwikkelfase interactiviteit en flexibiliteit. Uiteindelijk is de bedoeling dat het algoritmekader onderdeel wordt van een bestaande overheidswebsite zoals [Digitale Overheid](www.digitaleoverheid.nl).

Als je wilt bijdragen aan het algoritmekader, is dat voor ons het makkelijkst via GitHub en de markdown bestanden. Hieronder volgen een aantal mogelijkheden hoe je dat kan doen:

### Ben je collaborator?
Indien je door het team van algortimekader bent toegevoegd als *collaborator*, kan je eenvoudiger aanpassingen doen aan het algoritmekader (je hoeft dan geen *fork* te maken). Hieronder volgt een instructie hoe dat werkt. 
1. Bewerk de bestanden door in de mappenstructuur (de `docs` map) te navigeren naar het juiste bestand, en rechtsboven op de `edit` knop te klikken (het potloodje).  Je kan ook nieuwe bestanden toevoegen door rechtsboven op `add file` te klikken.
2. Wanneer je je aanpassingen wilt opslaan, klik je rechtsboven op de `commit changes` knop. Je wordt nu gevraagd om een *commit message* mee te geven. Geef hier een korte en duidelijke omschrijving van jouw aanpassing, bijvoorbeeld `hoofdstuk over normen toegevoegd` of `typo's verbeterd`. Je moet nu een *nieuwe branch* maken om jouw wijzingen te committen. Dit is zodat we controle hebben over wat er op de interactieve website (de `main` branch) staat, en aanpassingen eerst nog reviewd worden door het team van het algoritmekader. Geef een logische naam aan je branch bijvoorbeeld `werkgroep-inkoop`. Klik vervolgens op `propose changes`.
3. Je komt nu gelijk op een pagina om een *pull request te maken*.
   - Wanneer je nog meer aanpassingen wilt doen (bijvoorbeeld aan andere bestanden), hoef je nog geen *pull request* te maken. Je kan dan terug naar de mappenstructuur en verder gaan met je aanpassingen. Je kan dan later in 1 keer al je wijzingen samenvoegen met de versie in productie. 
   - Wanneer je tevreden bent over jouw aanpassingen, en deze wilt samenvoegen met de versie in productie kan je een *pull request* aanmaken, door op de knop `create pull request` te klikken.
4. Wanneer je tevreden bent over jouw aanpassingen, en deze wilt samenvoegen met de versie in productie kan je een *pull request* aanmaken. Bovenaan de repository staat nu een bericht, bijvoorbeeld: `werkgroep-inkoop had recent pushes x minutes ago` met vervolgens een knop `compare & pull request`. Klik op `compare & pull request` en vervolgens op `create pull request`. Je komt nu op een pagina waar je de verschillen tussen jouw versie en de andere versie kan zien.
5. Als er geen conflicten zijn kan je de branch *mergen* met de `main` branch. 
  

### Met *fork* en een *pull request*
1. Maak een *fork* van de repository door rechtsboven op de knop `fork` te klikken. Je hebt nu een eigen versie (repository) van het algoritmekader op je eigen account.
2. Je kan de bestanden nu bewerken door in de mappenstructuur (de `docs` map) te navigeren naar het juiste bestand, en rechtsboven op de `edit` knop te klikken (het potloodje). Mocht je nog geen fork hebben gemaakt, dan kan wordt hier eerst gevraagd een fork te maken. Je kan ook nieuwe bestanden toevoegen door rechtsboven op `add file` te klikken. 
3. Wanneer je je aanpassingen wilt opslaan, klik je rechtsboven op de `commit changes` knop. Je wordt nu gevraagd om een *commit message* mee te geven. Geef hier een korte en duidelijke omschrijving van jouw aanpassing, bijvoorbeeld `hoofdstuk over normen toegevoegd` of `typo's verbeterd`. Je kan dit direct op de `main` branch committen.
4. Wanneer je tevreden bent over jouw aanpassingen, en deze wilt samenvoegen met de versie in productie kan je een *pull request* aanmaken. Bovenaan jouw versie van de repository staat nu een bericht: `jouw branche is x commits ahead of ...` met vervolgens een knop `contribute`. Klik op `contribute` en vervolgens op `open pull request`. Je komt nu op een pagina waar je de verschillen tussen jouw versie en de andere versie kan zien. Check nogmaals of je tevreden bent en klik vervolgens op `open pull request`.
5. Het team van algoritmekader bekijkt nu jouw aanpassingen en zal indien akkoord jouw aanpassingen *mergen*.
   
### Lokaal draaien van de website
