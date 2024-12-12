---
title: Controleer de input van gebruikers op misleiding
id: urn:nl:ak:mtr:dat-11
toelichting: Controleer de input van gebruikers op misleiding.
levenscyclus:
- dataverkenning-en-datapreparatie
- monitoring-en-beheer
vereiste:
- aia-10-nauwkeurigheid-robuustheid-cyberbeveiliging
- aia-22-gebruiksverantwoordelijken-monitoren-werking
- aia-32-ai-modellen-algemene-doeleinden-systeemrisico-cyberbeveiliging
- bio-01-beveiliging-informatie-en-informatiesystemen
- avg-12-beveiliging-van-verwerking
onderwerp:  
- data  
- technische-robuustheid-en-veiligheid
rollen:  
- ontwikkelaar
hide:  
- navigation  
- toc  
---

<!-- Let op! onderstaande regel met 'tags' niet weghalen! Deze maakt automatisch de knopjes op basis van de metadata  -->
<!-- tags -->

## Maatregel
Controleer de input van gebruikers op misleiding.

## Toelichting
Een algemeen belangrijke stap in cyberveiligheid is het valideren of een input voldoet aan de verwachting. 
Zo moet gecontroleerd worden of de [input valide, compleet en consistent](3-dat-01-datakwaliteit.md) is. 
Zo kan bijvoorbeeld geverifieerd worden of een leeftijd niet negatief is en of er geen tegenstrijdige informatie gegeven wordt. 
Dit wordt typisch “*input sanitization*” genoemd. 
Veel programmeertalen en software bibliotheken bieden standaard oplossingen voor input sanitization.

In de context van algoritmes is het raadzaam om ook nog specifieker te monitoren op wat voor inputs er gegeven worden aan bijvoorbeeld een AI-systeem. 
Zo kan het herhaaldelijk gebruiken van dezelfde input waarden met minimale aanpassingen wijzen op een poging tot een model engineering of een model inversion aanval. 

### Generatieve AI
In het specifieke geval van generatieve AI moet er rekening gehouden worden met [*prompt injection attacks*](https://www.ibm.com/topics/prompt-injection). 
Dit zijn aanvallen waarbij aanvallers een kwaadaardige opdracht dusdanig verhullen dat standaard checks het niet doorhebben en het model bijvoorbeeld gemanipuleerd wordt om desinformatie te verspreiden, gevoelige data te lekken of zelfs kwaadaardige software uit te voeren. 
Op dit moment is nog weinig bekend over hoe dit over het algemeen effectief gemodereerd kan worden. 
Echter kunnen in bepaalde situaties bepaalde opdrachten uitgesloten worden. 
Zo hoeft een AI-systeem dat een klantenservice ondersteunt waarschijnlijk nooit een stuk code uit te voeren. 

## Bijbehorende vereiste(n) { data-search-exclude }
??? expander "Bekijk alle vereisten"
    <!-- list_vereisten_on_maatregelen_page -->

## Risico
Een aanvaller kan bijvoorbeeld doelbewust een afwijkende input kiezen om het model om de tuin te leiden. 
Daarnaast kunnen onbewuste fouten ertoe leiden dat het model niet meer goed functioneert.

## Bronnen
- [IBM, What is a prompt injection attack?](https://www.ibm.com/topics/prompt-injection)