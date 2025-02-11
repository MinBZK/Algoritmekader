---
title: Beschrijf welke techniek gebruikt wordt voor de beoogde toepassing
id: urn:nl:ak:mtr:owp-04
toelichting: Beschrijf welke techniek gebruikt wordt voor de beoogde toepassing. 
vereiste: 
- awb-01-zorgvuldigheidsbeginsel
- aia-06-technische-documentatie
- aia-10-nauwkeurigheid-robuustheid-cyberbeveiliging
levenscyclus: 
- ontwerp
onderwerp:
- technische-robuustheid-en-veiligheid
rollen:
- ontwikkelaar
sources:
  ADR: DM.2
  ARK: 
  - 2.04
  - 2.17
hide:
- navigation
- toc
---

<!-- tags -->

## Maatregel
Beschrijf welke techniek gebruikt wordt voor de beoogde toepassing. 

## Toelichting 
- Beschrijf wat voor soort algoritme er gebruikt gaat worden voor de beoogde toepassing. 
- Bepaal of je gebruik wilt maken van een:

    - [zelflerend algoritme](../../overhetalgoritmekader/soorten-algoritmes.md#zelflerende-algoritmes)
    - niet-zelflerend algoritme zoals een algoritme gebaseerd op [rekenregels](../../overhetalgoritmekader/soorten-algoritmes.md#rekenregels)

- Beschrijf vervolgens ook:
    
    - waarom er voor dit type algoritme wordt gekozen
    - wat de alternatieven zijn en waarom die minder passend zijn?
    - waarom dit algoritme het meest geschikt is om het [beoogde doel](1-pba-02-formuleren-doelstelling.md) van het algoritme te bereiken. 

- De precieze details kunnen in dit stadium van de levenscyclus waarschijnlijk nog niet ingevuld worden. Maak een goede eerste inschatting van de gebruikte techniek. Eventueel kan je er ook voor kiezen om verschillende technieken verder te onderzoeken. Dat betekent dat er meerdere algoritmes ontwikkeld worden (op basis van verschillende technieken), en je later een definitieve keuze maakt. 

- Het is belangrijk om uiteindelijk een passend uitlegbaar algoritme te selecteren voor de context waarin het wordt toegepast. Daarin moet de afweging gemaakt worden of de technische [uitlegbaarheid](2-owp-33-toepassen-uitlegbaarheidstechnieken.md) voldoende is in de context die de inzet van het algoritme vereist. Hierbij kan ook de conclusie worden getrokken dat een simpeler, inzichtelijker algoritme de voorkeur krijgt. 

- Maak hierbij een bewuste afweging tussen [uitlegbaarheid](2-owp-33-toepassen-uitlegbaarheidstechnieken.md) en [prestaties](5-ver-02-evalueer-nauwkeurigheid.md) van het algoritme. Over het algemeen geldt dat complexere maar minder uitlegbare algoritmes nauwkeuriger zijn. 

- Veel (statistische) modellen zijn gebaseerd op (statistische) aannames over bijvoorbeeld eigenschappen van de data. Ga na of er aan deze aannames wordt voldaan. 

## Risico
Wanneer je geen zorgvuldige afweging maakt over de techniek die je gebruikt om het doel te bereiken, dan is het niet duidelijk of de meest geschikte techniek wordt gebruikt. Mogelijk zijn er passendere oplossingen om het doel te bereiken. 

## Bijbehorende vereiste(n) { data-search-exclude }
??? expander "Bekijk alle vereisten"
    <!-- list_vereisten_on_maatregelen_page -->

## Bronnen 
- [Impact Assessment Mensenrechten en Algoritmes, 2A.1, 2B.1](../hulpmiddelen/IAMA.md)
- [Onderzoekskader Auditdienst Rijk, DM.2](https://www.rijksoverheid.nl/documenten/rapporten/2023/07/11/onderzoekskader-algoritmes-adr-2023)
- [Toetsingskader Algemene Rekenkamer, 2.04, 2.17](https://www.rekenkamer.nl/onderwerpen/algoritmes/documenten/publicaties/2024/05/15/het-toetsingskader-aan-de-slag)