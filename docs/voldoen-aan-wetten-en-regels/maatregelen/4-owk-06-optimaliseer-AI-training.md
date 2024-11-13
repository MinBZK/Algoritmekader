---
title: Optimaliseer AI-trainingsprocessen voor energie-efficiëntie
id: urn:nl:ak:mtr:owk-06
toelichting: Streef naar energiezuinige methoden voor AI-training, zoals het beperken van trainingscycli en het gebruik van energie-efficiënte hardware.
levenscyclus:
- ontwikkelen
onderwerp:
- duurzaamheid
rollen:
- ontwikkelaar
hide:
- navigation
- toc
---

<!-- Let op! onderstaande regel met 'tags' niet weghalen! Deze maakt automatisch de knopjes op basis van de metadata  -->
<!-- tags -->

## Maatregel
Streef naar energiezuinige methoden voor AI-training, zoals het beperken van trainingscycli en het gebruik van energie-efficiënte hardware.

## Toelichting
Het trainen van AI, vooral generatieve AI-modellen, vergt aanzienlijke energie en heeft daardoor een grote ecologische voetafdruk. Een enkele trainingsronde kan al een enorme hoeveelheid CO₂ uitstoten. Door enkele concrete methoden toe te passen, kun je deze impact beperken.

### Energie-optimalisatie door hardwarekeuze en serverbeheer
- Gebruik energie-efficiënte hardware zoals specifiek afgestemde GPU's, die geschikt zijn voor de trainingsbehoeften van het model. Door bijvoorbeeld te kiezen voor GPU’s die optimaal bij je model passen in plaats van de krachtigste beschikbare hardware, kan het energieverbruik drastisch worden verminderd. Houd hiermee rekening in je keuze voor een trainingsomgeving.
- Verder kan servergebruik geoptimaliseerd worden door onnodige trainingsomgevingen tijdig te stoppen of voor andere trainingsomgevingen of testomgevingen te kiezen. Ook kun je servers dynamisch schalen met tools zoals Kubernetes of autoscaling technologie.

### Slimme data- en trainingsoptimalisatie
Niet alle beschikbare data dragen bij aan de modelprestaties. Door een dataselectiestrategie toe te passen, [gebruik je enkel relevante datasets (dataminimalisatie)](3-dat-09-dataminimalisatie.md), wat zorgt voor minder intensieve rekenbelasting tijdens het trainingsproces. Daarnaast kan slimme caching helpen om repetitieve data-opvragingen te beperken, wat bijdraagt aan een lagere energievraag. Bovendien kun je hertrainingscycli van AI beperken door enkel updates te doen wanneer nieuwe data dit echt vereist. Dit voorkomt overbodige trainingscycli en bespaart energie.

## Bijbehorende vereiste(n)
<!-- list_vereisten_on_maatregelen_page -->

## Risico
Zonder energie-efficiënte methoden kan AI-training leiden tot hoge operationele kosten en een aanzienlijke ecologische impact, met name door overmatig gebruik van rekenkracht en energie-intensieve hardware.

## Bronnen
- [How to Make Generative AI Greener - Harvard Business Review](https://hbr.org/2023/07/how-to-make-generative-ai-greener)
- [GreenOps: 4 Tips om AI-training duurzamer te maken - AG Connect](https://www.agconnect.nl/partner/leafcloud/greenops-4-tips-om-ai-training-duurzamer-te-maken)
- [Duurzame kunstmatige intelligentie - TU Delft](https://www.tudelft.nl/en/stories/articles/sustainable-artificial-intelligence-from-chatgpt-to-green-ai)

## Voorbeeld
<!-- Voeg hier een voorbeeld toe, door er bijvoorbeeld naar te verwijzen -->
