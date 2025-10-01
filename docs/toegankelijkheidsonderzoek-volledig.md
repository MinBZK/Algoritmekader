# WCAG 2.1 A/AA Toegankelijkheidsonderzoek – Algoritmekader

## A. Informatie over de opdracht

**Onderzoeker:** Ruben Rouwhof – Rijks ICT Gilde  
**Datum:** September 2025  
**Opdrachtgever:** Afdeling D – Ministerie van Binnenlandse Zaken en Koninkrijksrelaties  
**Norm:** WCAG 2.1 A en AA  
**Soort onderzoek:** Volledig onderzoek  
**Versie:** 1.0  

## B. Informatie over het onderzoek

**Evaluatiemethode:** WCAG-E  
**Scope:** [https://minbzk.github.io/Algoritmekader/](https://minbzk.github.io/Algoritmekader/)  

**Steekproef:**
- [Homepage](https://minbzk.github.io/Algoritmekader/)
- [Soorten algoritmes en AI](https://minbzk.github.io/Algoritmekader/soorten-algoritmes-en-ai/)
- [Risico van AI-systemen](https://minbzk.github.io/Algoritmekader/soorten-algoritmes-en-ai/risico-van-ai-systemen/)
- [Onderwerpen](https://minbzk.github.io/Algoritmekader/onderwerpen/)
- [Privacy en gegevensbescherming](https://minbzk.github.io/Algoritmekader/onderwerpen/privacy-en-gegevensbescherming/)
- [Levenscyclus - Ontwikkelen](https://minbzk.github.io/Algoritmekader/levenscyclus/ontwikkelen/)
- [Rollen - Beleid en advies](https://minbzk.github.io/Algoritmekader/rollen/beleid-en-advies/)
- [Maatregelen](https://minbzk.github.io/Algoritmekader/voldoen-aan-wetten-en-regels/maatregelen/)
- [AI-verordening beslishulp](https://ai-verordening-beslishulp.apps.digilab.network/)

**Gebruikte browsers/software:** Google Chrome, Microsoft Edge, Firefox

## C. Informatie over de getoetste website of app

**Basisniveau toegankelijkheidsondersteuning:** Alle gangbare browsers en hulpapparatuur.  
**Technologieën:** MkDocs + Material for MkDocs, HTML, CSS, JavaScript, jQuery, Mermaid.js, Choices.js, Tablesort.js, maatwerk scripts.  
**Vormgeving volgens NL Design System (NLDS).**  
**Gebruik van WAI-ARIA waar relevant. Geen SMIL, PDF of embedded media.**  
**Documentatie technieken:** [W3C WCAG 2.1 Techniques](https://www.w3.org/WAI/WCAG21/Techniques/)

## D. Management Summary

Het Algoritmekader voldoet op veel onderdelen aan WCAG 2.1, maar er zijn structurele knelpunten rond niet-tekstuele content, toetsenbordtoegankelijkheid, contrast en navigatie. Deze tekortkomingen beperken toegankelijkheid voor gebruikers met visuele of motorische beperkingen.

### Kernproblemen:

- **Ontbrekende alt-teksten** op functionele elementen
- **Inconsistente focus management** en keyboard accessibility
- **Contrast problemen** bij tekst en UI-elementen  
- **Tooltips en hover states** niet toegankelijk via toetsenbord

### Aanbevolen vervolgstappen:

- **Korte termijn:** Implementeer kritieke A-niveau fixes
- **Middellange termijn:** Plan structurele verbeteringen voor AA-niveau compliance
- **Lange termijn:** Integreer accessibility testing in ontwikkelproces

Door deze verbeteringen wordt de website volledig WCAG 2.1 A/AA compliant en beter bruikbaar voor alle gebruikers.

## E. Belangrijkste Knelpunten

### Kritieke problemen (niveau A):

- **1.1.1 Niet-tekstuele content:**  
  Missende alt-teksten op functionele iconen

- **2.1.1 Toetsenbord:**  
  Exportknoppen niet toegankelijk via toetsenbord  

- **2.4.1 Blokken omzeilen:**  
  Skiplinks niet consequent toegepast

- **2.4.3 Focus volgorde:**  
  Inconsistente startpositie van focus per pagina

### Belangrijke problemen (niveau AA):

- **1.4.3 Contrast:**  
  Onvoldoende contrast bij logo en labels

- **1.4.10 Reflow:**  
  Tabellen en afbeeldingen niet schaalbaar naar 320px

- **1.4.13 Content bij hover:**  
  Tooltips niet toegankelijk via toetsenbord  

- **2.4.7 Focus zichtbaar:**  
  Inconsistente focus states bij filters

## G. Overzicht WCAG Succescriteria

| Nr. | Succescriterium | Niveau | Status |
|-----|-----------------|--------|--------|
| 1.1.1 | Niet-tekstuele content | A | <span class="mdx-badge" data-md-color-accent="deep-orange"><span class="mdx-badge__text">Voldoet niet</span></span> |
| 1.2.1 | Louter-geluid en louter-videobeeld | A | <span class="mdx-badge" data-md-color-accent="blue"><span class="mdx-badge__text">n.v.t</span></span> |
| 1.2.2 | Ondertitels | A | <span class="mdx-badge" data-md-color-accent="blue"><span class="mdx-badge__text">n.v.t</span></span> |
| 1.2.3 | Audiodescriptie of media-alternatief | A | <span class="mdx-badge" data-md-color-accent="blue"><span class="mdx-badge__text">n.v.t</span></span> |
| 1.2.4 | Ondertitels (live) | AA | <span class="mdx-badge" data-md-color-accent="blue"><span class="mdx-badge__text">n.v.t</span></span> |
| 1.2.5 | Audiodescriptie (vooraf opgenomen) | AA | <span class="mdx-badge" data-md-color-accent="blue"><span class="mdx-badge__text">n.v.t</span></span> |
| 1.3.1 | Info en relaties | A | <span class="mdx-badge" data-md-color-accent="deep-orange"><span class="mdx-badge__text">Voldoet niet</span></span> |
| 1.3.2 | Betekenisvolle volgorde | A | <span class="mdx-badge" data-md-color-accent="deep-orange"><span class="mdx-badge__text">Voldoet niet</span></span> |
| 1.3.3 | Zintuiglijke eigenschappen | A | <span class="mdx-badge" data-md-color-accent="teal"><span class="mdx-badge__text">Voldoet</span></span> |
| 1.3.4 | Weergavestand | AA | <span class="mdx-badge" data-md-color-accent="teal"><span class="mdx-badge__text">Voldoet</span></span> |
| 1.3.5 | Identificeer het doel van de input | AA | <span class="mdx-badge" data-md-color-accent="teal"><span class="mdx-badge__text">Voldoet</span></span> |
| 1.4.1 | Gebruik van kleur | A | <span class="mdx-badge" data-md-color-accent="teal"><span class="mdx-badge__text">Voldoet</span></span> |
| 1.4.2 | Geluidsbediening | A | <span class="mdx-badge" data-md-color-accent="blue"><span class="mdx-badge__text">n.v.t</span></span> |
| 1.4.3 | Contrast (minimum) | AA | <span class="mdx-badge" data-md-color-accent="deep-orange"><span class="mdx-badge__text">Voldoet niet</span></span> |
| 1.4.4 | Herschalen van tekst | AA | <span class="mdx-badge" data-md-color-accent="teal"><span class="mdx-badge__text">Voldoet</span></span> |
| 1.4.5 | Afbeeldingen van tekst | AA | <span class="mdx-badge" data-md-color-accent="deep-orange"><span class="mdx-badge__text">Voldoet niet</span></span> |
| 1.4.10 | Reflow | AA | <span class="mdx-badge" data-md-color-accent="deep-orange"><span class="mdx-badge__text">Voldoet niet</span></span> |
| 1.4.11 | Contrast van niet-tekstuele content | AA | <span class="mdx-badge" data-md-color-accent="deep-orange"><span class="mdx-badge__text">Voldoet niet</span></span> |
| 1.4.12 | Tekstafstand | AA | <span class="mdx-badge" data-md-color-accent="indigo"><span class="mdx-badge__text">Nog in te vullen</span></span> |
| 1.4.13 | Content bij hover of focus | AA | <span class="mdx-badge" data-md-color-accent="deep-orange"><span class="mdx-badge__text">Voldoet niet</span></span> |
| 2.1.1 | Toetsenbord | A | <span class="mdx-badge" data-md-color-accent="deep-orange"><span class="mdx-badge__text">Voldoet niet</span></span> |
| 2.1.2 | Geen toetsenbordval | A | <span class="mdx-badge" data-md-color-accent="teal"><span class="mdx-badge__text">Voldoet</span></span> |
| 2.1.4 | Enkel teken sneltoetsen | A | <span class="mdx-badge" data-md-color-accent="teal"><span class="mdx-badge__text">Voldoet</span></span> |
| 2.2.1 | Timing aanpasbaar | A | <span class="mdx-badge" data-md-color-accent="teal"><span class="mdx-badge__text">Voldoet</span></span> |
| 2.2.2 | Pauzeren, stoppen, verbergen | A | <span class="mdx-badge" data-md-color-accent="teal"><span class="mdx-badge__text">Voldoet</span></span> |
| 2.3.1 | Drie flitsen of beneden drempelwaarde | A | <span class="mdx-badge" data-md-color-accent="teal"><span class="mdx-badge__text">Voldoet</span></span> |
| 2.4.1 | Blokken omzeilen | A | <span class="mdx-badge" data-md-color-accent="deep-orange"><span class="mdx-badge__text">Voldoet niet</span></span> |
| 2.4.2 | Paginatitel | A | <span class="mdx-badge" data-md-color-accent="teal"><span class="mdx-badge__text">Voldoet</span></span> |
| 2.4.3 | Focus volgorde | A | <span class="mdx-badge" data-md-color-accent="deep-orange"><span class="mdx-badge__text">Voldoet niet</span></span> |
| 2.4.4 | Linkdoel (in context) | A | <span class="mdx-badge" data-md-color-accent="deep-orange"><span class="mdx-badge__text">Voldoet niet</span></span> |
| 2.4.5 | Meerdere manieren | AA | <span class="mdx-badge" data-md-color-accent="teal"><span class="mdx-badge__text">Voldoet</span></span> |
| 2.4.6 | Koppen en labels | AA | <span class="mdx-badge" data-md-color-accent="teal"><span class="mdx-badge__text">Voldoet</span></span> |
| 2.4.7 | Focus zichtbaar | AA | <span class="mdx-badge" data-md-color-accent="deep-orange"><span class="mdx-badge__text">Voldoet niet</span></span> |
| 2.4.11 | Focus niet bedekt (minimum) | AA | <span class="mdx-badge" data-md-color-accent="teal"><span class="mdx-badge__text">Voldoet</span></span> |
| 3.1.1 | Taal van de pagina | A | <span class="mdx-badge" data-md-color-accent="teal"><span class="mdx-badge__text">Voldoet</span></span> |
| 3.1.2 | Taal van onderdelen | AA | <span class="mdx-badge" data-md-color-accent="teal"><span class="mdx-badge__text">Voldoet</span></span> |
| 3.2.1 | Bij focus | A | <span class="mdx-badge" data-md-color-accent="teal"><span class="mdx-badge__text">Voldoet</span></span> |
| 3.2.2 | Bij input | A | <span class="mdx-badge" data-md-color-accent="teal"><span class="mdx-badge__text">Voldoet</span></span> |
| 3.2.3 | Consistente navigatie | AA | <span class="mdx-badge" data-md-color-accent="teal"><span class="mdx-badge__text">Voldoet</span></span> |
| 3.2.4 | Consistente identificatie | AA | <span class="mdx-badge" data-md-color-accent="teal"><span class="mdx-badge__text">Voldoet</span></span> |
| 3.2.6 | Consistente hulp | A | <span class="mdx-badge" data-md-color-accent="teal"><span class="mdx-badge__text">Voldoet</span></span> |
| 3.3.1 | Foutidentificatie | A | <span class="mdx-badge" data-md-color-accent="teal"><span class="mdx-badge__text">Voldoet</span></span> |
| 3.3.2 | Labels of instructies | A | <span class="mdx-badge" data-md-color-accent="teal"><span class="mdx-badge__text">Voldoet</span></span> |
| 3.3.3 | Foutsuggestie | AA | <span class="mdx-badge" data-md-color-accent="teal"><span class="mdx-badge__text">Voldoet</span></span> |
| 3.3.4 | Foutpreventie (wettelijk, financieel, gegevens) | AA | <span class="mdx-badge" data-md-color-accent="teal"><span class="mdx-badge__text">Voldoet</span></span> |
| 3.3.7 | Overbodige invoer | A | <span class="mdx-badge" data-md-color-accent="teal"><span class="mdx-badge__text">Voldoet</span></span> |
| 3.3.8 | Toegankelijke authenticatie (minimum) | AA | <span class="mdx-badge" data-md-color-accent="teal"><span class="mdx-badge__text">Voldoet</span></span> |
| 4.1.1 | Parsen | A | <span class="mdx-badge" data-md-color-accent="indigo"><span class="mdx-badge__text">Vervallen</span></span> |
| 4.1.2 | Naam, rol, waarde | A | <span class="mdx-badge" data-md-color-accent="indigo"><span class="mdx-badge__text">Nog in te vullen</span></span> |
| 4.1.3 | Statusberichten | AA | <span class="mdx-badge" data-md-color-accent="teal"><span class="mdx-badge__text">Voldoet</span></span> |

## H. WCAG 2.1 Principes - Uitleg

WCAG 2.1 is gebaseerd op vier hoofdprincipes die zorgen dat websites toegankelijk zijn voor mensen met verschillende beperkingen:

### Principe 1: Waarneembaar (Perceivable)

**Uitleg:** Informatie en onderdelen van de gebruikersinterface moeten op manieren worden gepresenteerd die gebruikers kunnen waarnemen.

**Wat betekent dit?**  
Alle content moet zichtbaar, hoorbaar of voelbaar zijn voor mensen met verschillende beperkingen. Denk aan:

- Blinde gebruikers die een screenreader gebruiken
- Slechtziende gebruikers die content vergroten
- Doven die ondertiteling nodig hebben
- Mensen met kleurenblindheid

**Richtlijnen:**

- **1.1 Tekstalternatieven:**  
  Geef tekstbeschrijvingen voor afbeeldingen en andere niet-tekstuele content

- **1.2 Op tijd gebaseerde media:**  
  Bied alternatieven voor video's en audio (ondertiteling, audiodescriptie)

- **1.3 Aanpasbaar:**  
  Zorg dat informatie op verschillende manieren kan worden gepresenteerd zonder betekenis te verliezen

- **1.4 Onderscheidbaar:**  
  Maak het eenvoudiger voor gebruikers om content te zien en horen

### Principe 2: Bedienbaar (Operable)

**Uitleg:** Componenten van de gebruikersinterface en navigatie moeten bedienbaar zijn door alle gebruikers.

**Wat betekent dit?**  
Alle functies moeten bruikbaar zijn door mensen die verschillende hulpmiddelen gebruiken:

- Toetsenbordgebruikers die geen muis kunnen gebruiken
- Mensen die spraakbesturing gebruiken
- Gebruikers met motorische beperkingen

**Richtlijnen:**

- **2.1 Toetsenbordtoegankelijk:**  
  Alle functionaliteit moet beschikbaar zijn via het toetsenbord

- **2.2 Genoeg tijd:**  
  Geef gebruikers voldoende tijd om content te lezen en taken te voltooien

- **2.3 Epilepsie preventie:**  
  Vermijd content die epileptische aanvallen kan veroorzaken

- **2.4 Navigeerbaar:**  
  Help gebruikers navigeren en vinden waar ze zijn

- **2.5 Input modaliteiten:**  
  Ondersteuning voor verschillende invoermethoden

### Principe 3: Begrijpbaar (Understandable)

**Uitleg:** Informatie en de bediening van de gebruikersinterface moeten begrijpbaar zijn.

**Wat betekent dit?**  
Content en functionaliteit moeten logisch en voorspelbaar zijn voor:

- Mensen met cognitieve beperkingen
- Gebruikers met leesmoeilijkheden
- Mensen die de taal niet als moedertaal hebben

**Richtlijnen:**

- **3.1 Leesbaar:**  
  Maak tekst leesbaar en begrijpbaar

- **3.2 Voorspelbaar:**  
  Zorg voor consistente en voorspelbare webpagina's

- **3.3 Invoerhulp:**  
  Help gebruikers fouten te voorkomen en te corrigeren

### Principe 4: Robuust (Robust)

**Uitleg:** Content moet robuust genoeg zijn om betrouwbaar geïnterpreteerd te worden door verschillende hulptechnologieën.

**Wat betekent dit?**  
De website moet goed werken met:

- Huidige screenreaders en andere hulpmiddelen
- Toekomstige technologieën
- Verschillende browsers en apparaten

**Richtlijnen:**

- **4.1 Compatibel:**  
  Maximaliseer compatibiliteit met huidige en toekomstige hulpmiddelen

## I. Technische analyse van de codebase

### Code-niveau toegankelijkheidsbevindingen

#### HTML Semantiek (site/index.html):

✓ **Goed geïmplementeerd:**
- Correcte doctype en lang attribuut (html lang="nl")  
- ARIA labels aanwezig voor navigatie  
- Skip link aanwezig: `<a href="#algoritmekader" class="md-skip">Ga naar inhoud</a>`  

⚠️ **Verbeterpunten:**
- Lege alt-attributen: alt=" " op homepage-afbeeldingen  
- Geen ARIA-labels op exportknoppen  

#### CSS Analyse (stylesheets/extra.css):

⚠️ **Kleurcontrast problemen:**
- Primaire kleur #154273 vs achtergronden
- Hover states: #316fb3 mogelijk onvoldoende contrast

✓ **Goed geïmplementeerd:**
- Focus states gedefinieerd voor buttons  

⚠️ **Verbeterpunten:**
- Ontbrekende focus indicators voor alle interactieve elementen  

#### JavaScript Toegankelijkheid (javascripts/filtering.js):

✓ **Goed geïmplementeerd:**
- Keyboard accessible filtering via native HTML controls  
- Event listeners voor input/change events  

⚠️ **Verbeterpunten:**
- Focus management bij dynamische updates ontbreekt  
- Choices.js configuratie kan beter voor screenreaders

## J. Detailleerde WCAG Bevindingen per Succescriterium

### Principe 1: Waarneembaar

Informatie en componenten van de gebruikersinterface moeten toonbaar zijn op een voor gebruikers waarneembare wijze.

#### Richtlijn 1.1: Tekstalternatieven
Lever tekstalternatieven voor alle niet-tekstuele content, zodat die veranderd kan worden in andere vormen die mensen nodig hebben, zoals grote letters, braille, spraak, symbolen of eenvoudiger taal.

??? expander "WCAG-succescriterium 1.1.1 Niet-tekstuele content **Niveau A** - <span class='mdx-badge' data-md-color-accent='deep-orange'><span class='mdx-badge__text'>Voldoet niet</span></span>"

    **Doel:**  
    Alle niet-tekstuele content die aan de gebruiker wordt gepresenteerd, heeft een tekstalternatief dat hetzelfde doel dient.

    **Wat te doen:**  
    Voeg tekstalternatieven toe aan afbeeldingen, iconen en andere niet-tekstuele content.

    **Waarom het belangrijk is:**  
    Screenreaders kunnen alleen tekst voorlezen. Zonder alt-teksten weten blinde gebruikers niet wat er op afbeeldingen staat.

    **Resultaat:** <span class="mdx-badge" data-md-color-accent="deep-orange"><span class="mdx-badge__text">Voldoet niet</span></span>

    **Bevindingen:**
    - Functionele iconen in de GitHub-widget (navigatiebalk) hebben geen tekstalternatief
    - Afbeeldingen op de homepage hebben bewust geen alt-teksten (niet-functioneel), maar sommige functionele iconen missen alternatieven
    - In tabellen (bij rollen, levenscyclus en onderwerpen) staan functionele iconen zonder beschrijving
    - Exportknoppen ("Exporteer maatregelen" en "Exporteer vereisten") gebruiken iconen zonder tekstalternatief
    - Infographics zoals GMT_GM_RACI.png, MITRE_Maturity-Model-Overview.png en modellevenscyclus.png zijn niet digitaal toegankelijk

    **Aanpak voor verbetering:**
    - Infographics toegankelijk maken via tekstuele beschrijving of aparte pagina
    - Informatie die via kleur wordt overgebracht ook op een andere manier zichtbaar maken
    - Infographics schaalbaar maken voor mobiel

**Links:**
- [GMT_GM_RACI.png](https://www.gemmaonline.nl/images/gemma/c/cf/GMT_GM_RACI.png) - Zie maatregel owp-01 en maatregel org-10
- [MITRE_Maturity-Model-Overview.png](https://minbzk.github.io/Algoritmekader/voldoen-aan-wetten-en-regels/maatregelen/images/MITRE_Maturity-Model-Overview_0.png) - Zie maatregel org-06

#### Richtlijn 1.2: Op tijd gebaseerde media
Lever alternatieven voor op tijd gebaseerde media.

??? expander "WCAG-succescriterium 1.2.1 Louter-geluid en louter-videobeeld (vooraf opgenomen) **Niveau A** - <span class='mdx-badge' data-md-color-accent='blue'><span class='mdx-badge__text'>Niet van toepassing</span></span>"

    **Resultaat:** <span class="mdx-badge" data-md-color-accent="blue"><span class="mdx-badge__text">Niet van toepassing</span></span>

    **Bevindingen:**  
    Website bevat geen audio-only of video-only content.

??? expander "WCAG-succescriterium 1.2.2 Ondertitels (vooraf opgenomen) **Niveau A** - <span class='mdx-badge' data-md-color-accent='blue'><span class='mdx-badge__text'>Niet van toepassing</span></span>"

    **Resultaat:** <span class="mdx-badge" data-md-color-accent="blue"><span class="mdx-badge__text">Niet van toepassing</span></span>

    **Bevindingen:**  
    Website bevat geen video's met audio.

??? expander "WCAG-succescriterium 1.2.3 Audiodescriptie of media-alternatief (vooraf opgenomen) **Niveau A** - <span class='mdx-badge' data-md-color-accent='blue'><span class='mdx-badge__text'>Niet van toepassing</span></span>"

    **Resultaat:** <span class="mdx-badge" data-md-color-accent="blue"><span class="mdx-badge__text">Niet van toepassing</span></span>

    **Bevindingen:**  
    Website bevat geen video content.

??? expander "WCAG-succescriterium 1.2.4 Ondertitels (live) **Niveau AA** - <span class='mdx-badge' data-md-color-accent='blue'><span class='mdx-badge__text'>Niet van toepassing</span></span>"

    **Resultaat:** <span class="mdx-badge" data-md-color-accent="blue"><span class="mdx-badge__text">Niet van toepassing</span></span>

    **Bevindingen:**  
    Website bevat geen live audio content.

??? expander "WCAG-succescriterium 1.2.5 Audiodescriptie (vooraf opgenomen) **Niveau AA** - <span class='mdx-badge' data-md-color-accent='blue'><span class='mdx-badge__text'>Niet van toepassing</span></span>"

    **Resultaat:** <span class="mdx-badge" data-md-color-accent="blue"><span class="mdx-badge__text">Niet van toepassing</span></span>

    **Bevindingen:**  
    Website bevat geen vooraf opgenomen video content.

#### Richtlijn 1.3: Aanpassing
Creëer content die op verschillende manieren kan worden gepresenteerd zonder dat informatie of structuur verloren gaat.

??? expander "WCAG-succescriterium 1.3.1 Info en relaties **Niveau A** - <span class='mdx-badge' data-md-color-accent='deep-orange'><span class='mdx-badge__text'>Voldoet niet</span></span>"

    **Doel:**  
    Informatie, structuur en relaties die door de presentatie worden overgebracht, kunnen programmatisch worden bepaald of zijn beschikbaar in tekst.

    **Wat te doen:**  
    Gebruik semantische HTML-elementen en ARIA-labels om structuur en relaties duidelijk te maken.

    **Waarom het belangrijk is:**  
    Screenreaders vertrouwen op HTML-structuur om content logisch voor te lezen.

    **Resultaat:** <span class="mdx-badge" data-md-color-accent="deep-orange"><span class="mdx-badge__text">Voldoet niet</span></span>

    **Bevindingen:**
    - Tabellen voor hulpmiddelen, maatregelen en vereisten zijn niet correct gemarkeerd en daardoor slecht leesbaar voor screenreaders
    - Sortingfunctionaliteit in tabellen (zoals op /hulpmiddelen/AIIA/index.html#relevantie) is alleen zichtbaar bij hover en niet bruikbaar via toetsenbord

??? expander "WCAG-succescriterium 1.3.2 Betekenisvolle volgorde **Niveau A** - <span class='mdx-badge' data-md-color-accent='deep-orange'><span class='mdx-badge__text'>Voldoet niet</span></span>"

    **Doel:**  
    Wanneer de volgorde waarin content wordt gepresenteerd van invloed is op de betekenis, kan een juiste leesvolgorde programmatisch worden bepaald.

    **Wat te doen:**  
    Zorg dat de HTML-volgorde logisch is, ook zonder CSS.

    **Waarom het belangrijk is:**  
    Screenreaders lezen content in HTML-volgorde, niet in visuele volgorde.

    **Resultaat:** <span class="mdx-badge" data-md-color-accent="deep-orange"><span class="mdx-badge__text">Voldoet niet</span></span>

    **Bevindingen:**
    - Navigatiebalk (met name GitHub-widget) verliest bruikbaarheid zonder CSS
    - Tekstcontent blijft grotendeels bruikbaar

??? expander "WCAG-succescriterium 1.3.3 Zintuiglijke eigenschappen **Niveau A** - <span class='mdx-badge' data-md-color-accent='teal'><span class='mdx-badge__text'>Voldoet</span></span>"

    **Doel:**  
    Instructies voor het begrijpen en bedienen van content zijn niet alleen afhankelijk van zintuiglijke eigenschappen van componenten zoals vorm, kleur, grootte, visuele locatie, oriëntatie of geluid.

    **Resultaat:** <span class="mdx-badge" data-md-color-accent="teal"><span class="mdx-badge__text">Voldoet</span></span>

    **Bevindingen:**  
    Instructies zijn niet alleen afhankelijk van kleur of vorm.

??? expander "WCAG-succescriterium 1.3.4 Weergavestand **Niveau AA** - <span class='mdx-badge' data-md-color-accent='teal'><span class='mdx-badge__text'>Voldoet</span></span>"

    **Doel:**  
    Content beperkt zijn weergave en bediening niet tot een enkele weergavestand, zoals staand of liggend, tenzij een specifieke weergavestand essentieel is.

    **Resultaat:** <span class="mdx-badge" data-md-color-accent="teal"><span class="mdx-badge__text">Voldoet</span></span>

    **Bevindingen:**  
    Website werkt in zowel staande als liggende oriëntatie.

??? expander "WCAG-succescriterium 1.3.5 Identificeer het doel van de input **Niveau AA** - <span class='mdx-badge' data-md-color-accent='teal'><span class='mdx-badge__text'>Voldoet</span></span>"

    **Doel:**  
    Het doel van elk invoerveld dat om informatie over de gebruiker vraagt, kan programmatisch worden bepaald wanneer het veld een doel vervult dat is geïdentificeerd in de sectie Input Purposes for User Interface Components.

    **Resultaat:** <span class="mdx-badge" data-md-color-accent="teal"><span class="mdx-badge__text">Voldoet</span></span>

    **Bevindingen:**
    - Geen formulieren met persoonlijke data aanwezig

#### Richtlijn 1.4: Onderscheidbaar
Maak het gebruikers gemakkelijker om content te zien en te horen, inclusief scheiding van voorgrond en achtergrond.

??? expander "WCAG-succescriterium 1.4.1 Gebruik van kleur **Niveau A** - <span class='mdx-badge' data-md-color-accent='teal'><span class='mdx-badge__text'>Voldoet</span></span>"

    **Doel:**  
    Kleur wordt niet gebruikt als de enige visuele manier om informatie over te brengen, een actie aan te duiden, een reactie uit te lokken of een visueel element te onderscheiden.

    **Resultaat:** <span class="mdx-badge" data-md-color-accent="teal"><span class="mdx-badge__text">Voldoet</span></span>

    **Bevindingen:**  
    Informatie wordt niet alleen via kleur overgebracht.

??? expander "WCAG-succescriterium 1.4.2 Geluidsbediening **Niveau A** - <span class='mdx-badge' data-md-color-accent='blue'><span class='mdx-badge__text'>Niet van toepassing</span></span>"

    **Resultaat:** <span class="mdx-badge" data-md-color-accent="blue"><span class="mdx-badge__text">Niet van toepassing</span></span>

    **Bevindingen:**  
    Website heeft geen automatisch afspelende audio.

??? expander "WCAG-succescriterium 1.4.3 Contrast (minimum) **Niveau AA** - <span class='mdx-badge' data-md-color-accent='deep-orange'><span class='mdx-badge__text'>Voldoet niet</span></span>"

    **Doel:**  
    De visuele presentatie van tekst en afbeeldingen van tekst heeft een contrastverhouding van ten minste 4,5:1.

    **Wat te doen:**  
    Verhoog het kleurcontrast tussen tekst en achtergrond naar minimaal 4.5:1.

    **Waarom het belangrijk is:**  
    Mensen met visuele beperkingen hebben voldoende contrast nodig om tekst te kunnen lezen.

    **Resultaat:** <span class="mdx-badge" data-md-color-accent="deep-orange"><span class="mdx-badge__text">Voldoet niet</span></span>

    **Bevindingen:**
    - Contrastproblemen bij kleine teksten in het logo en labels in de levenscyclus
    - Sommige afbeeldingen en iconen voldoen niet aan de vereiste 4,5:1

??? expander "WCAG-succescriterium 1.4.4 Herschalen van tekst **Niveau AA** - <span class='mdx-badge' data-md-color-accent='teal'><span class='mdx-badge__text'>Voldoet</span></span>"

    **Doel:**  
    Behalve voor ondertiteling en afbeeldingen van tekst kan tekst worden herschaald tot 200 procent zonder ondersteunende technologie zonder verlies van content of functionaliteit.

    **Resultaat:** <span class="mdx-badge" data-md-color-accent="teal"><span class="mdx-badge__text">Voldoet</span></span>

    **Bevindingen:**  
    Tekst kan worden vergroot tot 200% zonder problemen.

??? expander "WCAG-succescriterium 1.4.5 Afbeeldingen van tekst **Niveau AA** - <span class='mdx-badge' data-md-color-accent='deep-orange'><span class='mdx-badge__text'>Voldoet niet</span></span>"

    **Doel:**  
    Als de gebruikte technologieën de visuele presentatie kunnen realiseren, wordt tekst gebruikt om informatie over te brengen in plaats van afbeeldingen van tekst.

    **Resultaat:** <span class="mdx-badge" data-md-color-accent="deep-orange"><span class="mdx-badge__text">Voldoet niet</span></span>

    **Bevindingen:**
    - Zie 1.1.1: meerdere afbeeldingen worden gebruikt als tekst, zonder toegankelijk alternatief

??? expander "WCAG-succescriterium 1.4.10 Reflow **Niveau AA** - <span class='mdx-badge' data-md-color-accent='deep-orange'><span class='mdx-badge__text'>Voldoet niet</span></span>"

    **Doel:**  
    Content kan worden gepresenteerd zonder verlies van informatie of functionaliteit, en zonder dat scrollen in twee dimensies nodig is voor verticale scrolling content bij een breedte gelijkwaardig aan 320 CSS pixels.

    **Resultaat:** <span class="mdx-badge" data-md-color-accent="deep-orange"><span class="mdx-badge__text">Voldoet niet</span></span>

    **Bevindingen:**
    - Tabellen en afbeeldingen schalen niet naar 320px breedte
    - Horizontaal scrollen is noodzakelijk

??? expander "WCAG-succescriterium 1.4.11 Contrast van niet-tekstuele content **Niveau AA** - <span class='mdx-badge' data-md-color-accent='deep-orange'><span class='mdx-badge__text'>Voldoet niet</span></span>"

    **Doel:**  
    De visuele presentatie heeft een contrastverhouding van ten minste 3:1 tegen aangrenzende kleuren voor gebruikersinterfacecomponenten en grafische objecten.

    **Resultaat:** <span class="mdx-badge" data-md-color-accent="deep-orange"><span class="mdx-badge__text">Voldoet niet</span></span>

    **Bevindingen:**
    - Contrastproblemen bij iconen, knoppen en formuliervelden

??? expander "WCAG-succescriterium 1.4.12 Tekstafstand **Niveau AA** - <span class='mdx-badge' data-md-color-accent='indigo'><span class='mdx-badge__text'>Nog in te vullen</span></span>"

    **Doel:**  
    In content die is geïmplementeerd met behulp van opmaaktalen die de volgende tekststijleigenschappen ondersteunen, treedt er geen verlies van content of functionaliteit op door alle volgende instellingen en niets veranderen aan andere stijleigenschappen.

    **Resultaat:** <span class="mdx-badge" data-md-color-accent="indigo"><span class="mdx-badge__text">Nog in te vullen</span></span>

    **Bevindingen:**
    - Aanbeveling: gebruik rem-eenheden i.p.v. pixels

??? expander "WCAG-succescriterium 1.4.13 Content bij hover of focus **Niveau AA** - <span class='mdx-badge' data-md-color-accent='deep-orange'><span class='mdx-badge__text'>Voldoet niet</span></span>"

    **Doel:**  
    Waar het ontvangen en vervolgens verwijderen van aanwijzerobject hover of toetsenbordfocus aanvullende content zichtbaar en dan weer verborgen maakt, geldt het volgende.

    **Wat te doen:**  
    Zorg dat tooltips en hover content ook toegankelijk zijn via toetsenbord.

    **Waarom het belangrijk is:**  
    Toetsenbordgebruikers moeten dezelfde informatie kunnen bereiken als muisgebruikers.

    **Resultaat:** <span class="mdx-badge" data-md-color-accent="deep-orange"><span class="mdx-badge__text">Voldoet niet</span></span>

    **Bevindingen:**
    - Definities in de begrippenlijst verdwijnen alleen door muisbeweging, niet via toetsenbord
    - Tooltips zijn niet toegankelijk met toetsenbordnavigatie

### Principe 2: Bedienbaar

Componenten van de gebruikersinterface en navigatie moeten bedienbaar zijn door alle gebruikers.

#### Richtlijn 2.1: Toetsenbordtoegankelijk
Maak alle functionaliteit beschikbaar vanaf een toetsenbord.

??? expander "WCAG-succescriterium 2.1.1 Toetsenbord **Niveau A** - <span class='mdx-badge' data-md-color-accent='deep-orange'><span class='mdx-badge__text'>Voldoet niet</span></span>"

    **Doel:**  
    Elke actie is uit te voeren met een toetsenbord.

    **Wat te doen:**  
    Acties die je kunt uitvoeren met een aanwijzer kunnen ook met een toetsenbord.

    **Waarom het belangrijk is:**  
    Veel mensen zijn afhankelijk van bediening met het toetsenbord, onder andere mensen die blind zijn of een beperkte mobiliteit hebben.

    **Resultaat:** <span class="mdx-badge" data-md-color-accent="deep-orange"><span class="mdx-badge__text">Voldoet niet</span></span>

    **Bevindingen:**
    - Exporteer knop niet toegankelijk
    - Navigatiebar verspringt in focus
    - Hover voor betekenis niet toegankelijk

??? expander "WCAG-succescriterium 2.1.2 Geen toetsenbordval **Niveau A** - <span class='mdx-badge' data-md-color-accent='teal'><span class='mdx-badge__text'>Voldoet</span></span>"

    **Doel:**  
    Bezoekers die een toetsenbord gebruiken komen niet vast te zitten.

    **Wat te doen:**  
    Zorg ervoor dat bezoekers altijd weg kunnen navigeren van onderdelen.

    **Waarom het belangrijk is:**  
    Mensen die leunen op toetsenbordgebruik kunnen vaak niet op een andere manier navigeren.

    **Resultaat:** <span class="mdx-badge" data-md-color-accent="teal"><span class="mdx-badge__text">Voldoet</span></span>

    **Bevindingen:**
    - Nergens vast gelopen

??? expander "WCAG-succescriterium 2.1.4 Enkel teken sneltoetsen **Niveau A** - <span class='mdx-badge' data-md-color-accent='teal'><span class='mdx-badge__text'>Voldoet</span></span>"

    **Doel:**  
    Verminder onbedoeld gebruik van sneltoetsen.

    **Wat te doen:**  
    Zorg ervoor dat sneltoetsen uitgeschakeld of aangepast kunnen worden.

    **Waarom het belangrijk is:**  
    Sneltoetsen met één teken zijn makkelijk onbedoeld te activeren, vooral met spraakbediening.

    **Resultaat:** <span class="mdx-badge" data-md-color-accent="teal"><span class="mdx-badge__text">Voldoet</span></span>

    **Bevindingen:**
    - Geen sneltoetsen gebruikt

#### Richtlijn 2.2: Genoeg tijd
Geef gebruikers genoeg tijd om content te lezen en te gebruiken.

??? expander "WCAG-succescriterium 2.2.1 Timing aanpasbaar **Niveau A** - <span class='mdx-badge' data-md-color-accent='teal'><span class='mdx-badge__text'>Voldoet</span></span>"

    **Doel:**  
    Bezoekers hebben de tijd om taken af te ronden.

    **Wat te doen:**  
    Laat bezoekers tijdslimieten uitzetten of aanpassen.

    **Waarom het belangrijk is:**  
    Mensen met beperkingen kunnen meer tijd nodig hebben om taken af te ronden.

    **Resultaat:** <span class="mdx-badge" data-md-color-accent="teal"><span class="mdx-badge__text">Voldoet</span></span>

    **Bevindingen:**
    - Zit geen tijdslimiet aan taken

??? expander "WCAG-succescriterium 2.2.2 Pauzeren, stoppen, verbergen **Niveau A** - <span class='mdx-badge' data-md-color-accent='teal'><span class='mdx-badge__text'>Voldoet</span></span>"

    **Doel:**  
    Minder bezoekers worden afgeleid door inhoud die vernieuwt of beweegt.

    **Wat te doen:**  
    Geef gebruikers controle over inhoud die verandert.

    **Waarom het belangrijk is:**  
    Mensen met cognitieve beperkingen kunnen afgeleid raken.

    **Resultaat:** <span class="mdx-badge" data-md-color-accent="teal"><span class="mdx-badge__text">Voldoet</span></span>

    **Bevindingen:**
    - Er is geen inhoud die automatisch verandert of beweegt

#### Richtlijn 2.3: Epilepsie en fysieke reacties
Ontwerp content niet op een manier die bekend staat om het veroorzaken van epileptische aanvallen of fysieke reacties.

??? expander "WCAG-succescriterium 2.3.1 Drie flitsen of beneden drempelwaarde **Niveau A** - <span class='mdx-badge' data-md-color-accent='teal'><span class='mdx-badge__text'>Voldoet</span></span>"

    **Doel:**  
    Maximaal drie flitsen in een seconde.

    **Wat te doen:**  
    Zorg ervoor dat een website geen onderdelen bevat met meer dan drie flitsen binnen één seconde.

    **Waarom het belangrijk is:**  
    Het tonen van meer dan drie flitsen binnen één seconde kan een epileptische aanval veroorzaken bij gebruikers die hiervoor gevoelig zijn.

    **Resultaat:** <span class="mdx-badge" data-md-color-accent="teal"><span class="mdx-badge__text">Voldoet</span></span>

    **Bevindingen:**
    - Geen flitsen kunnen ontdekken

#### Richtlijn 2.4: Navigeerbaar
Bied manieren om gebruikers te helpen navigeren, content te vinden en te bepalen waar ze zijn.

??? expander "WCAG-succescriterium 2.4.1 Blokken omzeilen **Niveau A** - <span class='mdx-badge' data-md-color-accent='deep-orange'><span class='mdx-badge__text'>Voldoet niet</span></span>"

    **Doel:**  
    Gebruikers kunnen blokken content die op meerdere webpagina's worden herhaald omzeilen.

    **Wat te doen:**  
    Voeg skiplinks toe om naar de hoofdcontent te springen.

    **Waarom het belangrijk is:**  
    Toetsenbordgebruikers hoeven niet door alle navigatie te tabben om bij de content te komen.

    **Resultaat:** <span class="mdx-badge" data-md-color-accent="deep-orange"><span class="mdx-badge__text">Voldoet niet</span></span>

    **Bevindingen:**
    - Er zijn af en toe skiplinks toegevoegd zoals 'ga naar inhoud', maar dit is niet consequent toegepast

??? expander "WCAG-succescriterium 2.4.2 Paginatitel **Niveau A** - <span class='mdx-badge' data-md-color-accent='teal'><span class='mdx-badge__text'>Voldoet</span></span>"

    **Doel:**  
    Webpagina's hebben titels die het onderwerp of doel beschrijven.

    **Wat te doen:**  
    Geef elke pagina een beschrijvende, unieke titel.

    **Waarom het belangrijk is:**  
    Screenreaders lezen de titel als eerste voor, zodat gebruikers weten waar ze zijn.

    **Resultaat:** <span class="mdx-badge" data-md-color-accent="teal"><span class="mdx-badge__text">Voldoet</span></span>

    **Bevindingen:**
    - Hier heeft @Corinne aan gewerkt. Op "onderwerpen" na

??? expander "WCAG-succescriterium 2.4.3 Focus volgorde **Niveau A** - <span class='mdx-badge' data-md-color-accent='deep-orange'><span class='mdx-badge__text'>Voldoet niet</span></span>"

    **Doel:**  
    Wanneer een toetsenbordgebruiker binnen de webpagina navigeert, bijvoorbeeld met de Tab-toets, moet de tabvolgorde logisch en voorspelbaar zijn.

    **Wat te doen:**  
    Zorg voor een logische tabvolgorde van links naar rechts en van boven naar beneden.

    **Waarom het belangrijk is:**  
    Een voorspelbare focus volgorde is belangrijk voor toetsenbordgebruikers.

    **Resultaat:** <span class="mdx-badge" data-md-color-accent="deep-orange"><span class="mdx-badge__text">Voldoet niet</span></span>

    **Bevindingen:**
    - De focus begint niet altijd op dezelfde plek
    - https://minbzk.github.io/Algoritmekader/voldoen-aan-wetten-en-regels/maatregelen/ springt focus direct naar eerste filter
    - https://minbzk.github.io/Algoritmekader/voldoen-aan-wetten-en-regels/maatregelen/0-org-04-politiek-bestuurlijke-verantwoordelijkheid/index.html begint met skiplink
    - https://minbzk.github.io/Algoritmekader/rollen/ begint in navigatie
    - https://minbzk.github.io/Algoritmekader/ begint in global search

??? expander "WCAG-succescriterium 2.4.4 Linkdoel (in context) **Niveau A** - <span class='mdx-badge' data-md-color-accent='deep-orange'><span class='mdx-badge__text'>Voldoet niet</span></span>"

    **Doel:**  
    De linktekst vertelt eenduidig aan de gebruiker waar de link naar toe gaat (het linkdoel).

    **Wat te doen:**  
    Zorg dat linkteksten beschrijvend zijn en het doel van de link duidelijk maken.

    **Waarom het belangrijk is:**  
    Screenreadergebruikers kunnen een lijst van alle links oproepen om snel te navigeren.

    **Resultaat:** <span class="mdx-badge" data-md-color-accent="deep-orange"><span class="mdx-badge__text">Voldoet niet</span></span>

    **Bevindingen:**
    - Niet alle linkdoelen zijn duidelijk. Bijvoorbeeld: "Verboden AI is uitgefaseerd" – waar uitgefaseerd een verbastering is van uitfaseren. Niet duidelijk dat je naar die pagina gaat
    - Op pagina https://minbzk.github.io/Algoritmekader/ai-verordening/ is niet duidelijk dat er een nieuw modal opent als je op "beslishulp AI-verordering" klikt
    - Niet duidelijk wanneer er een externe bron op nieuw tab wordt geopend

??? expander "WCAG-succescriterium 2.4.5 Meerdere manieren **Niveau AA** - <span class='mdx-badge' data-md-color-accent='teal'><span class='mdx-badge__text'>Voldoet</span></span>"

    **Doel:**  
    Gebruikers kunnen op meerdere manieren bij inhoud komen.

    **Wat te doen:**  
    Zorg voor minstens 2 manieren om bij dezelfde inhoud te komen.

    **Waarom het belangrijk is:**  
    Niet iedereen kan op dezelfde manier naar inhoud navigeren.

    **Resultaat:** <span class="mdx-badge" data-md-color-accent="teal"><span class="mdx-badge__text">Voldoet</span></span>

    **Bevindingen:**
    - Alles is via navigatie en via global search te vinden

??? expander "WCAG-succescriterium 2.4.6 Koppen en labels **Niveau AA** - <span class='mdx-badge' data-md-color-accent='teal'><span class='mdx-badge__text'>Voldoet</span></span>"

    **Doel:**  
    Koppen en labels beschrijven het onderwerp of het doel van de inhoud.

    **Wat te doen:**  
    Gebruik duidelijke, beschrijvende koppen en labels.

    **Waarom het belangrijk is:**  
    Alle gebruikers hebben hier baat bij, zeker als gebruikers de pagina snel scannen.

    **Resultaat:** <span class="mdx-badge" data-md-color-accent="teal"><span class="mdx-badge__text">Voldoet</span></span>

??? expander "WCAG-succescriterium 2.4.7 Focus zichtbaar **Niveau AA** - <span class='mdx-badge' data-md-color-accent='deep-orange'><span class='mdx-badge__text'>Voldoet niet</span></span>"

    **Doel:**  
    Zorg dat het goed zichtbaar is welk element de toetsenbordfocus heeft.

    **Wat te doen:**  
    Gebruik een duidelijke focusring (outline) voor alle interactieve elementen.

    **Waarom het belangrijk is:**  
    Toetsenbordgebruikers moeten zien waar ze zijn op de pagina.

    **Resultaat:** <span class="mdx-badge" data-md-color-accent="deep-orange"><span class="mdx-badge__text">Voldoet niet</span></span>

    **Bevindingen:**
    - Niet alle input/filters hebben een duidelijke en consistente focus state

??? expander "WCAG-succescriterium 2.4.11 Focus niet bedekt (minimum) **Niveau AA** - <span class='mdx-badge' data-md-color-accent='teal'><span class='mdx-badge__text'>Voldoet</span></span>"

    **Doel:**  
    Houd een gefocussed onderdeel zichtbaar.

    **Wat te doen:**  
    Zorg ervoor dat een onderdeel met toetsenbordfocus minstens deels zichtbaar is.

    **Waarom het belangrijk is:**  
    Wat toetsenbordfocus heeft moet zichtbaar zijn voor mensen die een toetsenbord gebruiken.

    **Resultaat:** <span class="mdx-badge" data-md-color-accent="teal"><span class="mdx-badge__text">Voldoet</span></span>

    **Bevindingen:**
    - Alles blijft leesbaar wanneer toetsenbord focus actief is

### Principe 3: Begrijpbaar

Informatie en de bediening van de gebruikersinterface moeten begrijpbaar zijn.

#### Richtlijn 3.1: Leesbaar
Maak tekstcontent leesbaar en begrijpbaar.

??? expander "WCAG-succescriterium 3.1.1 Taal van de pagina **Niveau A** - <span class='mdx-badge' data-md-color-accent='teal'><span class='mdx-badge__text'>Voldoet</span></span>"

    **Doel:**  
    Geef de menselijke taal waarin de tekst van een webpagina is geschreven aan.

    **Wat te doen:**  
    Gebruik het lang-attribuut in het html-element, bijvoorbeeld `<html lang="nl">`.

    **Waarom het belangrijk is:**  
    Screenreaders kunnen de tekst correct uitspreken in de juiste taal.

    **Resultaat:** <span class="mdx-badge" data-md-color-accent="teal"><span class="mdx-badge__text">Voldoet</span></span>

    **Bevindingen:**
    - Taal wordt in body meegegeven

??? expander "WCAG-succescriterium 3.1.2 Taal van onderdelen **Niveau AA** - <span class='mdx-badge' data-md-color-accent='teal'><span class='mdx-badge__text'>Voldoet</span></span>"

    **Doel:**  
    Geef wisseling van de taal aan waarin de tekst van elke passage of zin is geschreven.

    **Wat te doen:**  
    Markeer tekst in andere talen met het lang-attribuut.

    **Waarom het belangrijk is:**  
    Screenreaders kunnen tekst in andere talen correct uitspreken.

    **Resultaat:** <span class="mdx-badge" data-md-color-accent="teal"><span class="mdx-badge__text">Voldoet</span></span>

    **Bevindingen:**
    - Wordt zoveel mogelijk correct gedaan zoals: `<span lang="en">_large language models_</span>` (LLMs)
    - `_<span lang="en">Human in the loop</span>_`: Een mens moet de acties starten van het algoritme

#### Richtlijn 3.2: Voorspelbaar
Laat webpagina's verschijnen en functioneren op voorspelbare manieren.

??? expander "WCAG-succescriterium 3.2.1 Bij focus **Niveau A** - <span class='mdx-badge' data-md-color-accent='teal'><span class='mdx-badge__text'>Voldoet</span></span>"

    **Doel:**  
    Verras een gebruiker niet als die een interactief element focus geeft.

    **Wat te doen:**  
    Zorg dat focus geen onverwachte contextwijzigingen veroorzaakt.

    **Waarom het belangrijk is:**  
    Maak functionaliteit voorspelbaar en daardoor goed te begrijpen.

    **Resultaat:** <span class="mdx-badge" data-md-color-accent="teal"><span class="mdx-badge__text">Voldoet</span></span>

    **Bevindingen:**
    - Er zijn geen onverwachte interacties gevonden

??? expander "WCAG-succescriterium 3.2.2 Bij input **Niveau A** - <span class='mdx-badge' data-md-color-accent='teal'><span class='mdx-badge__text'>Voldoet</span></span>"

    **Doel:**  
    Verras een gebruiker niet, maar maak functionaliteit voorspelbaar.

    **Wat te doen:**  
    Zorg dat formulierinput geen onverwachte contextwijzigingen veroorzaakt.

    **Waarom het belangrijk is:**  
    Gebruikers moeten controle hebben over wanneer iets gebeurt.

    **Resultaat:** <span class="mdx-badge" data-md-color-accent="teal"><span class="mdx-badge__text">Voldoet</span></span>

    **Bevindingen:**
    - Er zijn geen onverwachte interacties gevonden

??? expander "WCAG-succescriterium 3.2.3 Consistente navigatie **Niveau AA** - <span class='mdx-badge' data-md-color-accent='teal'><span class='mdx-badge__text'>Voldoet</span></span>"

    **Doel:**  
    Navigatie is meer voorspelbaar.

    **Wat te doen:**  
    Geef delen van de navigatie overal dezelfde volgorde.

    **Waarom het belangrijk is:**  
    Voorspelbare inhoud is extra belangrijk voor mensen met beperkingen.

    **Resultaat:** <span class="mdx-badge" data-md-color-accent="teal"><span class="mdx-badge__text">Voldoet</span></span>

    **Bevindingen:**
    - Vaste volgorde
    - Nav boven consistent
    - Subpaginas links
    - Pagina headers/parts rechts

??? expander "WCAG-succescriterium 3.2.4 Consistente identificatie **Niveau AA** - <span class='mdx-badge' data-md-color-accent='teal'><span class='mdx-badge__text'>Voldoet</span></span>"

    **Doel:**  
    Acties zijn meer voorspelbaar.

    **Wat te doen:**  
    Zorg dat functies die herhalen hetzelfde te herkennen zijn.

    **Waarom het belangrijk is:**  
    Herhaalde herkenning is extra belangrijk voor mensen met een beperking.

    **Resultaat:** <span class="mdx-badge" data-md-color-accent="teal"><span class="mdx-badge__text">Voldoet</span></span>

    **Bevindingen:**
    - Door het gebruik van iconen, buttons te beperken zijn acties voorspelbaar
    - Chevron wordt gebruikt als iets naar beneden uitklapt zoals met exporteer button of expander

??? expander "WCAG-succescriterium 3.2.6 Consistente hulp **Niveau A** - <span class='mdx-badge' data-md-color-accent='teal'><span class='mdx-badge__text'>Voldoet</span></span>"

    **Doel:**  
    Maak het gemakkelijker hulp en ondersteuning te vinden.

    **Wat te doen:**  
    Plaats hulp op dezelfde plek wanneer deze op meerdere pagina's beschikbaar is.

    **Waarom het belangrijk is:**  
    Mensen kunnen makkelijker hulp vinden als het op dezelfde plek beschikbaar is.

    **Resultaat:** <span class="mdx-badge" data-md-color-accent="teal"><span class="mdx-badge__text">Voldoet</span></span>

    **Bevindingen:**
    - Contact informatie in footer altijd zichtbaar en toegankelijk
    - Contact via github ook altijd zichtbaar en toegankelijk via top navigatie

#### Richtlijn 3.3: Invoerhulp
Help gebruikers fouten te voorkomen en te corrigeren.

??? expander "WCAG-succescriterium 3.3.1 Foutidentificatie **Niveau A** - <span class='mdx-badge' data-md-color-accent='teal'><span class='mdx-badge__text'>Voldoet</span></span>"

    **Doel:**  
    Laat een gebruiker weten als er fouten zijn bij het invullen van een formulier.

    **Wat te doen:**  
    Vertel duidelijk en toegankelijk wanneer een formulierveld niet, of niet goed is ingevuld.

    **Resultaat:** <span class="mdx-badge" data-md-color-accent="teal"><span class="mdx-badge__text">Voldoet</span></span>

    **Bevindingen:**
    - Wordt geen gebruik gemaakt van formulieren, behalve in beslishulp. Daar zijn foutmeldingen beschikbaar en duidelijk

??? expander "WCAG-succescriterium 3.3.2 Labels of instructies **Niveau A** - <span class='mdx-badge' data-md-color-accent='teal'><span class='mdx-badge__text'>Voldoet</span></span>"

    **Doel:**  
    Gebruikers weten wat ze in moeten voeren.

    **Wat te doen:**  
    Geef een label of uitleg bij invoer.

    **Waarom het belangrijk is:**  
    Iedereen, vooral mensen met cognitieve beperkingen, weet waar men aan toe is.

    **Resultaat:** <span class="mdx-badge" data-md-color-accent="teal"><span class="mdx-badge__text">Voldoet</span></span>

    **Bevindingen:**
    - Filters hebben label met naam filter
    - Zoekbalk heeft instructie "typ om te beginnen met zoeken"

??? expander "WCAG-succescriterium 3.3.3 Foutsuggestie **Niveau AA** - <span class='mdx-badge' data-md-color-accent='teal'><span class='mdx-badge__text'>Voldoet</span></span>"

    **Doel:**  
    Laat een gebruiker op een toegankelijke manier weten hoe een formulierveld goed in te vullen.

    **Wat te doen:**  
    Geef hiervoor hints, suggesties en voorbeelden.

    **Resultaat:** <span class="mdx-badge" data-md-color-accent="teal"><span class="mdx-badge__text">Voldoet</span></span>

    **Bevindingen:**
    - Wordt geen gebruik gemaakt van formulieren, behalve in beslishulp. Daar zijn foutmeldingen beschikbaar en duidelijk

??? expander "WCAG-succescriterium 3.3.4 Foutpreventie (wettelijk, financieel, gegevens) **Niveau AA** - <span class='mdx-badge' data-md-color-accent='teal'><span class='mdx-badge__text'>Voldoet</span></span>"

    **Doel:**  
    Wanneer een gebruiker een formulier invult met juridische, financiële of persoonlijke gegevens, zorg er dan voor dat gebruiker de ingevulde gegevens kan controleren en corrigeren.

    **Resultaat:** <span class="mdx-badge" data-md-color-accent="teal"><span class="mdx-badge__text">Voldoet</span></span>

    **Bevindingen:**
    - Wordt geen gebruik gemaakt van formulieren, behalve in beslishulp. Daar wordt niet om juridische, financiële of persoonlijke gegevens gevraagd

??? expander "WCAG-succescriterium 3.3.7 Overbodige invoer **Niveau A** - <span class='mdx-badge' data-md-color-accent='teal'><span class='mdx-badge__text'>Voldoet</span></span>"

    **Doel:**  
    Maak het gemakkelijker om een proces van meerdere stappen te doorlopen.

    **Wat te doen:**  
    Vraag geen dubbele informatie in dezelfde sessie.

    **Waarom het belangrijk is:**  
    Mensen met cognitieve beperkingen kunnen moeite hebben met het onthouden van eerdere invoer.

    **Resultaat:** <span class="mdx-badge" data-md-color-accent="teal"><span class="mdx-badge__text">Voldoet</span></span>

    **Bevindingen:**
    - Wordt geen gebruik gemaakt van formulieren, behalve in beslishulp

??? expander "WCAG-succescriterium 3.3.8 Toegankelijke authenticatie (minimum) **Niveau AA** - <span class='mdx-badge' data-md-color-accent='teal'><span class='mdx-badge__text'>Voldoet</span></span>"

    **Doel:**  
    Maak inloggen mogelijk met minder mentale inspanning.

    **Wat te doen:**  
    Dwing mensen niet iets op te lossen, te onthouden of uit te schrijven.

    **Waarom het belangrijk is:**  
    Sommige mensen met cognitieve beperkingen kunnen geen puzzels oplossen, een wachtwoord of gebruikersnaam onthouden, of eenmalige toegangscodes herhalen.

    **Resultaat:** <span class="mdx-badge" data-md-color-accent="teal"><span class="mdx-badge__text">Voldoet</span></span>

    **Bevindingen:**
    - Er vindt geen authenticatie plaats

### Principe 4: Robuust

Content moet robuust genoeg zijn om betrouwbaar geïnterpreteerd te worden door verschillende hulptechnologieën.

#### Richtlijn 4.1: Compatibel
Maximaliseer compatibiliteit met huidige en toekomstige ondersteunende technologieën.

??? expander "WCAG-succescriterium 4.1.1 Parsen **Niveau A** - <span class='mdx-badge' data-md-color-accent='indigo'><span class='mdx-badge__text'>Vervallen</span></span>"

    **Resultaat:** <span class="mdx-badge" data-md-color-accent="indigo"><span class="mdx-badge__text">Vervallen</span></span>

    **Bevindingen:**
    - De werkgroep die WCAG maakt heeft 4.1.1 de afgelopen jaren besproken en vastgesteld dat dit criterium tegenwoordig niet meer relevant is, omdat browsers en hulptechnologieën intussen zijn verbeterd

??? expander "WCAG-succescriterium 4.1.2 Naam, rol, waarde **Niveau A** - <span class='mdx-badge' data-md-color-accent='indigo'><span class='mdx-badge__text'>Nog in te vullen</span></span>"

    **Doel:**  
    Geef interactieve elementen zoals buttons, links en formuliervelden een toegankelijke naam en een bijpassende rol.

    **Wat te doen:**  
    Gebruik semantische HTML en ARIA-attributes waar nodig.

    **Waarom het belangrijk is:**  
    Screenreaders hebben deze informatie nodig om elementen correct aan te kondigen.

    **Resultaat:** <span class="mdx-badge" data-md-color-accent="indigo"><span class="mdx-badge__text">Nog in te vullen</span></span>

??? expander "WCAG-succescriterium 4.1.3 Statusberichten **Niveau AA** - <span class='mdx-badge' data-md-color-accent='teal'><span class='mdx-badge__text'>Voldoet</span></span>"

    **Doel:**  
    Je kunt updates met belangrijke informatie met de gebruiker delen via een statusbericht.

    **Wat te doen:**  
    Gebruik ARIA live regions voor dynamische content updates.

    **Waarom het belangrijk is:**  
    Gebruikers die de melding niet zien, krijgen deze informatie toch mee.

    **Resultaat:** <span class="mdx-badge" data-md-color-accent="teal"><span class="mdx-badge__text">Voldoet</span></span>

    **Bevindingen:**
    - Er zijn geen statusberichten

---

*Rapport versie 1.0 - September 2025*