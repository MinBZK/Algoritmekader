---
# vul hier een titel in voor deze maatregel
title: Voer voorafgaand aan een project een data beschikbaarheid, kwaliteit- en toegankelijkheidsanalayse uit. 
id: urn:nl:ak:mtr:owp-11
# geef hier een korte toelichting van deze maatregel
toelichting: Het is van belang om voorafgaand aan een project vast te stellen of de data die noodzakelijk is om een algoritme te ontwikkelen of te kunnen gebruiken beschikbaar is of gaat worden en van voldoende kwaliteit is. 
# vul hier de bestandsnamen in van de vereisten die horen bij deze maatregel
vereiste: 
- aia-05-data-kwaliteitscriteria
# vul hier de fasen van de levenscyclus in die horen bij deze maatregel
levenscyclus: 
- ontwerp

# vul hier de bouwblokken in die horen bij deze maatregel
onderwerp: 
- publieke-inkoop
- data

# geef hier aan welke rollen bij deze maatregelen betrokken kunnen zijn
rollen:
 - projectleider
 - beleid-en-advies

hide:
- navigation
- toc
---

<!-- Let op! onderstaande regel met 'tags' niet weghalen! Deze maakt automatisch de knopjes op basis van de metadata  -->
<!-- tags -->

## Maatregel
<!-- Vul hier een omschrijving in van wat deze maatregel inhoudt. -->
Voer voorafgaand aan een project een data beschikbaarheids- en [datakwaliteitsanalayse](3-dat-01-datakwaliteit.md) uit.

## Toelichting
<!-- Geef hier een toelichting van deze maatregel -->
- Het is van belang om voorafgaand aan een project vast te stellen of de data die noodzakelijk is om een algoritme te ontwikkelen of te kunnen gebruiken beschikbaar is, gaat worden en of de data van voldoende [kwaliteit](3-dat-01-datakwaliteit.md) is.
- Er moet worden onderzocht of en hoe data vanuit de eigen organisatie, die van een eventuele externe aanbieder of elders beschikbaar kan worden gesteld, kan worden opgeslagen en of goedkeuring kan worden gegeven voor het verwerken van de data.
- De infrastructuur van de eigen organisatie en/of die van een eventuele externe aanbieder moet van voldoende niveau zijn om de beoogde verwerkingen uit te kunnen voeren.
- Een dergelijke analyse levert inzichten op welke problemen er eventueel op dit vlak kunnen ontstaan en geeft input voor de verdere ontwikkeling of (in geval van inkoop) de behoeftestelling.

## Bijbehorende vereiste(n) { data-search-exclude }
<!-- Hier volgt een lijst met vereisten op basis van de in de metadata ingevulde vereiste -->

<!-- Let op! onderstaande regel met 'list_vereisten_on_maatregelen_page' niet weghalen! Deze maakt automatisch een lijst van bijbehorende verseisten op basis van de metadata  -->
??? expander "Bekijk alle vereisten"
    <!-- list_vereisten_on_maatregelen_page -->

## Risico 
<!-- vul hier het specifieke risico in dat kan worden gemitigeerd met behulp van deze maatregel -->
Het zou kunnen voorkomen dat de data niet beschikbaar is en ook niet gaat worden. Dit betekent dat een algoritme ook niet goed gemaakt of gebruikt kan worden. Ook is het belangrijk om te checken of de data beschikbaar blijft als dat nodig is voor het functioneren van het algoritme (bijv. voor het bijleren). Ook bestaat er een risico dat als de data van onvoldoende kwaliteit is, het algoritme niet goed gaat werken. Wanneer niet vooraf bepaald is of de data beschikbaar is en van voldoende kwaliteit kan het gebeuren dat er wel een algoritme gemaakt wordt door een derde partij, maar deze vervolgens niet gebruikt kan worden binnen de organisatie. 

## Voorbeelden

!!! example "Stichting Inlichtingenbureau: Signaal Kostendelers"

	Stichting Inlichtingenbureau (IB) maakt gebruik van het algoritme ‘signaal kostendelers’ wat aangeeft als er iets is veranderd wat de hoogte van de bijstandsuitkering kan beïnvloeden. Het IB krijgt informatie over wie in het huishouden woont om zo veranderingen op de kostendelersnorm door te kunnen geven aan gemeenten. Bij dit algoritme wordt onder andere gebruik gemaakt van het BSN en studie-informatie. Deze informatie is noodzakelijk om veranderingen te kunnen controleren voor huishoudens. Het verwerken van deze persoonsgegevens zijn toegestaan onder (onder andere) ‘Wet structuur uitvoeringsorganisatie werk en inkomen’ artikel 63 en ‘Participatiewet’ artikel 64 en artikel 68.
	Het verwerken van deze gegevens is dus noodzakelijk voor het IB om haar functie te kunnen uitvoeren. Dit zal per organisatie verschillen maar soortgelijke wettelijke grondslag kan dus als uitgangspunt genomen worden voor controle binnen de eigen organisatie.
	
	Bron: [Signaal Kostendelers - Stichting Inlichtingenbureau]( https://algoritmes.overheid.nl/nl/algoritme/signaal-kostendelers-stichting-inlichtingenbureau/43858196#verantwoordGebruik)


## Bronnen 
<!-- Vul hier de relevante bronnen in voor deze maatregel -->

[Towards a Systematic Understanding on the Challenges of Procuring Artificial Intelligence in the Public Sector](https://www.google.nl/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwi20eiMqfmGAxXV9gIHHbnbAjkQFnoECB0QAQ&url=https%3A%2F%2Fec.europa.eu%2Fnewsroom%2Fgrowth%2Fredirection%2Fdocument%2F86850&usg=AOvVaw3rVw_SLj8yjlU-uhWQv2eQ&opi=89978449)
