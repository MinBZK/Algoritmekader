---
title: Test regelmatig of een algoritme voldoende weerbaar is tegen bekende aanvallen.
id: urn:nl:ak:mtr:mon-08
toelichting: Controleer regelmatig of je algoritme bestand is tegen aanvallen. 
levenscyclus:
- ontwikkelen
- verificatie-en-validatie
- monitoring-en-beheer
onderwerp:
- technische-robuustheid-en-veiligheid
rollen:
- ontwikkelaar
vereiste:
- aia-10-nauwkeurigheid-robuustheid-cyberbeveiliging
- aia-22-gebruiksverantwoordelijken-monitoren-werking
- aia-32-ai-modellen-algemene-doeleinden-systeemrisico-cyberbeveiliging
- bio-01-beveiliging-informatie-en-informatiesystemen
- avg-12-beveiliging-van-verwerking
hide:
- navigation
- toc

---

<!-- Let op! onderstaande regel met 'tags' niet weghalen! Deze maakt automatisch de knopjes op basis van de metadata  -->
<!-- tags -->

## Maatregel
Controleer regelmatig of je algoritme bestand is tegen aanvallen. 

## Toelichting
Veel algoritmes veranderen in de loop van tijd. 
Daarom is het belangrijk om periodiek te blijven testen of de ingebouwde defensiemechanismen goed werken.
In traditionele cyber security wordt hiervoor de term [*red teaming*](https://www.nightfall.ai/ai-security-101/ai-model-red-teaming) of *pentesting* gebruikt. 

### Pentesting
Met pentesting wordt in feite een interactie tussen een aanvaller en het algoritme nagebootst.  
Verscheidene bedrijven die gespecialiseerd zijn in traditionele pentesting van IT systemen bieden nu ook specifiek pentesting van AI aan. 
Indien er voldoende kennis aanwezig is, is het mogelijk  dit zelf te implementeren. 
Dit kan bijvoorbeeld met behulp van de open-source ontwikkelde [Adversarial Robustness Toolbox (ART)](https://research.ibm.com/projects/adversarial-robustness-toolbox) ontwikkeld door IBM (en nu in beer door de Linux Foundation).

### Top-10 security risico’s van LLM’s
Het is lastig in te schatten met wat voor aanvallen er rekening gehouden moet worden voor een AI-systeem. 
Hiervoor heeft OWASP een [top 10 opgesteld van security risico’s van LLM’s](https://owasp.org/www-project-top-10-for-large-language-model-applications/). Veel risico's zijn waarschijnlijk ook van toepassing op andere soorten AI-systemen.

## Bijbehorende vereiste(n) { data-search-exclude }
??? expander "Bekijk alle vereisten"
    <!-- list_vereisten_on_maatregelen_page -->

## Risico
Als niet periodiek getest wordt of een algoritme nog bestand is tegen aanvallen, wordt de kans groter dat een aanvaller succesvol is.

## Bronnen
- [Nightfall, AI Model Red Teaming](https://www.nightfall.ai/ai-security-101/ai-model-red-teaming)
- [IBM, Adversarial Robustness Toolbox](https://research.ibm.com/projects/adversarial-robustness-toolbox)
- [OWASP Top 10 for Large Language Model Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/)
