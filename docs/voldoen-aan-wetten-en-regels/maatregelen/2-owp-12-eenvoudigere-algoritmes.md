---
title: Ontwerp algoritmes zo eenvoudig mogelijk  
id: urn:nl:ak:mtr:owp-12
toelichting: Ontwerp algoritmes gericht op eenvoud en efficiëntie, zodat het energieverbruik en de benodigde rekenkracht tijdens gebruik minimaal blijven.  
levenscyclus:
- ontwerp
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
Ontwerp algoritmes gericht op eenvoud en efficiëntie, zodat het energieverbruik en de benodigde rekenkracht tijdens gebruik minimaal blijven.

## Toelichting
Complexe algoritmes vereisen vaak aanzienlijke rekenkracht, wat energie-intensief kan zijn. Door algoritmes minder complex en rekenintensief te ontwerpen, verlaag je de benodigde middelen en energie bij het trainen en uiteindelijk toepassen van deze algoritmes. Een efficiënter ontwerp maakt de algoritmes energiezuiniger in de trainings- en gebruiksfase en draagt zo bij aan duurzaamheid in de gehele levenscyclus.

### Modellen vereenvoudigen en focussen op kernfunctionaliteit
Wanneer je een nieuw algoritme ontwikkelt, kun je de omvang en rekenbelasting beperken door alleen noodzakelijke functionaliteit op te nemen. Focus op de kernfunctionaliteit, zodat je gebruik maakt van een kleiner model dat beter te begrijpen en gemakkelijker te beheren is. Het vermijden van overbodige functionaliteiten maakt het algoritme minder zwaar en verlaagt de milieu-impact aanzienlijk.

### Minder complexiteit door divide-and-conquer en dynamisch programmeren
Een populaire methode om complexiteit te verlagen is het *divide-and-conquer* principe, waarbij je een grote algoritmische berekening opsplitst in kleinere, overzichtelijke deelberekeningen en deze vervolgens oplost (je splitst hierbij het technische probleem in meerdere kleinere problemen). Dit vermindert de rekenlast aanzienlijk en verhoogt de efficiëntie. Ook kun je met *dynamisch programmeren* optimalisaties toevoegen door eerder berekende resultaten op te slaan en te hergebruiken, wat herhaling van berekeningen voorkomt en de rekenkracht vermindert.

### Minder complexiteit door modeloptimalisatie
- Door gebruik te maken van *pruning* kunnen minder relevante verbindingen en nodes in een neuraal netwerk worden verwijderd, waardoor de rekenbelasting vermindert.
- *Quantization* verlaagt de precisie van numerieke waarden in een model, wat opslag en rekenkracht verlaagt zonder de prestaties significant te beïnvloeden.
- *Knowledge distillation* kan verder helpen door de kennis van een groot model over te dragen naar een kleiner, minder complex model, dat vervolgens efficiënter werkt.

## Bijbehorende vereiste(n)
??? expander "Bekijk alle vereisten"
    <!-- list_vereisten_on_maatregelen_page -->

## Risico
Ontwerpen zonder oog voor efficiëntie kan leiden tot energie-intensieve algoritmes die hoge kosten en milieubelasting met zich meebrengen.

## Bronnen
- [What is knowledge distillation? (IBM)](https://www.ibm.com/topics/knowledge-distillation)
- 

## Voorbeeld
<!-- Voeg hier een voorbeeld toe, door er bijvoorbeeld naar te verwijzen -->
