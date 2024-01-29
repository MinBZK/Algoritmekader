# Algoritmekader

**Welkom op de Github repo voor het algoritmekader!**

## Algoritmekader

Het ministerie van BZK gaat aan de slag met een Algoritmekader. Het doel daarvan is om overheden op praktische wijze te ondersteunen, zodat zij op een wettige en ethisch verantwoorde wijze algoritmes en AI-systemen gebruiken.

Belangrijk uitgangspunt bij de ontwikkeling van het kader is om zoveel mogelijk gebruik te maken van de kennis en kunde die er al is. En nadenken over hoe bestaande informatie geordend kan worden. Het kader kan daar een handig hulpmiddel voor zijn. Het is belangrijk om bij de inzet van algoritmes in alle fasen te weten welke stappen van belang zijn. De verschillende stappen zijn een goed uitgangspunt voor de ontwikkeling van het Algoritmekader.

## Disclaimer
Het Algoritmekader is nog volop in ontwikkeling. Op deze Github willen we vooral aan de slag gaan op een open en transparante wijze. Het is dus niet definitief. Dat betekent dat er dingen opstaan die niet af zijn en soms zelfs fout. Mocht er iets niet kloppen, laat het ons weten.

## Hoe kan je bijdragen aan de ontwikkeling van het algoritmekader?

We ontwikkelen het algoritmekader open source via GitHub. Voor de documentatie maken we gebruik van [Markdown](https://www.markdownguide.org/basic-syntax/) bestanden. Dit bestandsformaat wordt door veel verschillende tools ondersteund, en maakt het eenvoudig versiebeheer op het algoritmekader toe te passen. Hierdoor hebben we grip op reviews en verschillende versies van het kader.

Vooralsnog maken we tijdens de ontwikkelfase gebruik van [mkdocs](https://www.mkdocs.org/) en [material for mkdocs](https://squidfunk.github.io/mkdocs-material/) om de documentatie inzichtelijk te maken op een website. Hiermee faciliteren we ook al in de ontwikkelfase interactiviteit en flexibiliteit. Uiteindelijk is de bedoeling dat het algoritmekader onderdeel wordt van een bestaande overheidswebsite zoals [Digitale Overheid](www.digitaleoverheid.nl).

Als je wilt bijdragen aan het algoritmekader, is dat voor ons het makkelijkst via GitHub en de markdown bestanden. Hieronder volgen een aantal mogelijkheden hoe je dat kan doen:

### Heb je een fout gevonden? Of heb je een vraag, opmerking of een andere aanbeveling? Maak een issue aan!
1. Via [Issues](https://github.com/MinBZK/Algoritmekader/issues) kan je bestaande issues bekijken of een nieuwe *issue* aanmaken.
2. Via de knop `new issue` kan je een nieuw issue aanmaken.
3. Voeg hier toe wat je vraag of opmerking is en geef een uitgebreide toelichting, zodat we duidelijk begrijpen wat jouw vraag of opmerking is.
4. Het is vervolgens mogelijk om een discussie te voeren over het door jou aangemaakte issue door comments toe te voegen. 
5. Het team van het algoritmekader gaat aan de slag met jouw issue en zal mogelijk contact opnemen voor een verduidelijking of oplossing. 

### Ben je collaborator? Maak gebruik van branches!
Indien je door het team van algoritmekader bent toegevoegd als *collaborator*, kan je eenvoudiger aanpassingen doen aan het algoritmekader. Hieronder volgt een instructie hoe dat werkt. 

#### Branches
We werken met verschillende *branches*, waardoor we vrij kunnen ontwikkelen, zonder dat dat gelijk invloed heeft op de versie in *productie*. Linksbovenin zie je de verschillende branches die er zijn (zie afbeelding voor een voorbeeld). De *main* branch is de versie van het algoritmekader die gekoppeld is aan https://minbzk.github.io/Algoritmekader/. 

![afbeelding](https://github.com/MinBZK/Algoritmekader/assets/71120805/36ebc0a2-acf0-4404-aad6-59cbd0bc3243)

De *main* branch wordt standaard weergegeven en kan alleen aangepast worden na goedkeuring door het team van het algoritmekader. Als je wilt bijdragen moet je dus eerst werken in een andere branch. 

1. Je kan van branch wisselen door linksboven op de huidige branch te klikken en vervolgens jouw branch waarin je wilt werken te selecteren. Je kan eventueel ook een nieuwe branch maken door de naam van de branch in te typen. Kies een logische naam, bijvoorbeeld `werkgroep-inkoop`.
2. Bewerk de bestanden door in de mappenstructuur (de `docs` map) te navigeren naar het juiste bestand, en rechtsboven op de `edit` knop te klikken (het potloodje). Je kan ook nieuwe bestanden toevoegen door rechtsboven op `add file` te klikken.
3. Wanneer je je aanpassingen wilt opslaan, klik je rechtsboven op de `commit changes` knop. Je wordt nu gevraagd om een *commit message* mee te geven. Geef hier een korte en duidelijke omschrijving van jouw aanpassing, bijvoorbeeld `hoofdstuk over normen toegevoegd` of `typo's verbeterd`. Indien je nog niet van branch gewisseld was, wordt er gevraagd om alsnog een nieuwe branch te maken. Klik vervolgens op `commit changes`.
4. Bewerk meer bestanden op dezelfde manier. 
5. Wanneer je tevreden bent over jouw aanpassingen, en deze wilt samenvoegen met de *main* branch zodat zichtbaar worden op https://minbzk.github.io/Algoritmekader/, kan je een *pull request* aanmaken. Bovenaan de repository staat nu een bericht, bijvoorbeeld: `werkgroep-inkoop had recent pushes x minutes ago` met vervolgens een knop `compare & pull request`. Klik op `compare & pull request`. Je komt nu op een pagina waar je een titel een een beschrijving mee kan geven aan je pull request. Vul dit in en klik vervolgens op `create pull request`.
6. Je komt nu op een pagina waar je de verschillen tussen jouw versie en de andere versie kan zien. Het is ook mogelijk een discussie te voeren over de door jou aangedragen wijzigingen.
7. Het team van het algoritmekader gaat nu jouw wijzigingen reviewen en indien akkoord worden jouw aanpassingen gemergd met de *main* branch. Let op! Je kan zelf nooit je eigen pull request mergen, dit moet worden gedaan na review door een collega. 
  
### Met *fork* en een *pull request*
Indien je niet bent toegevoegd als collaborator, kan je toch bijdragen aan het algoritmekader. Dit werkt door zelf een kopie (*fork*) te maken van de repository op je eigen account. 
1. Maak een *fork* van de repository door rechtsboven op de knop `fork` te klikken. Je hebt nu een kopie van de repository gemaakt op je eigen account.
2. Je kan de bestanden nu bewerken door in de mappenstructuur (de `docs` map) te navigeren naar het juiste bestand, en rechtsboven op de `edit` knop te klikken (het potloodje). Mocht je nog geen fork hebben gemaakt, dan kan wordt hier eerst gevraagd een fork te maken. Je kan ook nieuwe bestanden toevoegen door rechtsboven op `add file` te klikken. 
3. Wanneer je je aanpassingen wilt opslaan, klik je rechtsboven op de `commit changes` knop. Je wordt nu gevraagd om een *commit message* mee te geven. Geef hier een korte en duidelijke omschrijving van jouw aanpassing, bijvoorbeeld `hoofdstuk over normen toegevoegd` of `typo's verbeterd`.
4. Je komt nu gelijk op een pagina waar je jouw aanpassingen kan vergelijken. Wanneer je tevreden bent over je aanpassingen, maak je een *pull request* aan door op de knop `Create pull request`te klikken.
5. Je kan nu nog meer aanpassingen doen aan andere bestanden. 
6. Wanneer je tevreden bent over jouw aanpassingen, en deze wilt samenvoegen met de versie in productie kan je een *pull request* aanmaken. Bovenaan jouw versie van de repository staat nu een bericht: `jouw branche is x commits ahead of ...` met vervolgens een knop `contribute`. Klik op `contribute` en vervolgens op `open pull request`. Je komt nu op een pagina waar je de verschillen tussen jouw versie en de andere versie kan zien. Check nogmaals of je tevreden bent en klik vervolgens op `open pull request`.
7. Het team van algoritmekader bekijkt nu jouw aanpassingen en zal indien akkoord jouw aanpassingen *mergen*.
   
### Lokaal draaien van de website (via de command line)
Je kan de site van het algoritmekader ook lokaal draaien en gelijk je aanpassingen bekijken. Dit werkt als volgt:
1. Maak een fork van de repository als je die nog niet hebt (indien je collaborator/code owner bent is het maken van een fork niet nodig) 
2. Clone de repository op je lokale machine met behulp van `git clone https://github.com/github-username/repository-name.git`
3. Check de nodige dependencies via het command `mkdocs get-deps` en zorg dat deze dependencies lokaal geinstalleerd zijn (bijvoorbeeld `pip install mkdocs`)
4. Run vervolgens `mkdocs serve` om de website lokaal te draaien.
5. In de terminal staat nu `serving on ...` Klik op de link om de website lokaal te tonen. 

#### Lokaal aanpassingen doen en pull request maken
1. Maak een nieuwe branch aan door `git checkout -b branch-name`
2. Doe de aanpassingen die je wilt doen
3. Voeg de bestandne die je hebt aangepast toe met behulp van `git add filepaden-van-aangepaste-bestanden` (tip gebruik eerst `git status`)
4. Commit de aanpassingen met behulp van `git commit -m "Korte toelichting bij de commit"`
5. Wanneer je de website met jouw aanpassingen lokaal wilt draaien kan dat via het command `mkdocs serve`
6. Indien je je aanpassingen wilt mergen met de main repository, push je de aanpassingen naar de remote met behulp van `git push origin branch-name`
7. Maak een pull-request aan
8. Het team van het algoritmekader gaat nu jouw wijzigingen reviewen en indien akkoord worden jouw aanpassingen gemergd met de *main* branch.

### Iets aanpassen in de navigatie van de website?
We maken gebruik van  [mkdocs](https://www.mkdocs.org/) en [material for mkdocs](https://squidfunk.github.io/mkdocs-material/) om de documentatie inzichtelijk te maken op een website. In het bestand [mkdocs.yml](https://github.com/MinBZK/Algoritmekader/blob/main/mkdocs.yml) bestand staan de settings voor deze website. In principe hoef je hier niets aan aan te passen. 
Onderdeel van deze settings is de navigatie voor de site (welke kopjes zijn zichtbaar, en welke kopjes vallen daaronder). Dit staat in de `nav:` sectie. Indien je een kopje wilt toevoegen, kan dat in deze sectie. 

## Vragen?
Maak een [Issue](https://github.com/MinBZK/Algoritmekader/issues) aan op GitHub. Kom je er niet uit, dan kan je altijd mailen naar algoritmes@minbzk.nl 
