---
title: Leg vast wat de impact van het algoritme is als het niet werkt zoals beoogd
id: urn:nl:ak:mtr:owp-
toelichting: Leg vast wie er wordt geraakt, welke processen beïnvloed worden door het algoritme en wat de impact is wanneer het systeem niet werkt zoals beoogd. Neem deze informatie proactief mee in het ontwerp en de ontwikkeling van je algoritme. 
vereiste:
- grw-01-fundamentele-rechten
- avg-11-privacy-bij-ontwerp-bij-verwerking-van-persoonsgegevens
levenscyclus:
- probleemanalyse
- ontwerp
onderwerp:
- technische-robuustheid-en-veiligheid
- fundamentele-rechten
rollen:
- projectleider
hide:
- navigation
- toc
---

<!-- tags -->

## Maatregel
Leg vast wie er wordt geraakt, welke processen beïnvloed worden door het algoritme en wat de impact is wanneer het systeem niet werkt zoals beoogd. Neem deze informatie proactief mee in het ontwerp en de ontwikkeling van je algoritme. 

## Toelichting
Er moet een analyse gemaakt worden van de impact van een algoritme dat niet werkt zoals bedoeld. 
Een algoritme dat niet werkt zoals bedoeld kan bijvoorbeeld betekenen dat het algoritme een foutieve beslissing maakt of dat het algoritme is uitgevallen. 
De analyse op wie dit een impact heeft en hoe groot die impact is, is van belang voor de ontwerpkeuzes, de risicoanalyse en de evaluatie. 
Wanneer een foutieve beslissing zwaarwegende gevolgen heeft, moet er in het ontwerp gezorgd worden dat de kans op deze fout verminderd wordt.
In de evaluatie moet er worden bepaald of de resterende risico’s acceptabel zijn. 
Een analyse van de impact is hiervoor noodzakelijk. 
Voer de impactanalyse uit met een multidisciplinaire groep en documenteer afwegingen en keuzes hierbij. Neem in de impactanalyse de volgende stappen:

Wanneer een algoritme niet werkt als beoogd, kan dit inbreuk maken op [grondrechten](../../onderwerpen/fundamentele-rechten.md) van eventuele betrokken burgers. 
Onderdeel van deze impactanalyse is om te bepalen of je algoritme bepaalde [grondrechten kan raken]((2-owp-06-afwegen-grondrechten.md)), aantasten of mogelijk schenden. 

- **Leg vast welke stakeholders worden geraakt**
Denk hierbij aan de directe gebruiker, degene waarover het besluit wordt genomen en derde partijen die input leveren of de resultaten ontvangen. Houd hierbij rekening met [kwetsbare groepen waarbij het nodig is om deze groep extra bescherming te bieden](2-owp-07-kwetsbare-groepen.md). 

- **Leg vast welke processen worden geraakt**
Denk hierbij aan werkproces(sen) waarin het algoritme wordt gebruikt, maar ook aan vervolgprocessen of parallelle processen die beïnvloed worden door de resultaten van het algoritme.

- **Leg vast wat de impact is van een niet goed werkend algoritme (per stakeholder en proces)**
Bepaal per stakeholder en per proces wat het gevolg is van een niet goed werkend systeem. Indien het systeem uitvalt, hoe worden de partijen daardoor geraakt en wat is het gevolg. Zijn er processen die mogelijk stilvallen of moeten worden aangepast?  

    Analyseer ook de gevolgen van foutieve beslissingen. 
    Let op dat verschillende typen fouten een verschillende impact hebben. 
    Bijvoorbeeld in het geval van een ziektedetectie algoritme als voorsortering of een patiënt een uitgebreidere test moet ondergaan is de impact groter als de patiënt ten onrechte als geen-risico wordt geclassificeerd dan als iemand ten onrechte een extra controle moet ondergaan. 

- **Bepaal welke factoren van invloed zijn op de kans dat het fout gaat**
Het risico is afhankelijk van de kans dat een fout voorkomt. Voor risicoanalyse en mitigatie is het van belang om de factoren die van invloed zijn op de fouten in kaart te brengen. Deze geven input aan de ontwerpfase en mitigerende maatregelen. Denk hierbij aan factoren in de [data](3-dat=01-datakwaliteit.md), [het algoritme](2-owp-soort-algoritme.md), het gebruik en externe factoren. 


## Bijbehorende vereiste(n)

<!-- list_vereisten_on_maatregelen_page -->

## Risico
Als er geen goede impactanalyse wordt gemaakt, kunnen risico’s over het hoofd worden gezien. Een niet werkend systeem kan dan een grote impact hebben op mensen of de organisatie. 

## Bronnen


## Voorbeeld

Heb jij een goed voorbeeld? Laat het ons weten!

