[![Built with Material for MkDocs](https://img.shields.io/badge/Material_for_MkDocs-brightgreen?logo=MaterialForMkDocs&logoColor=white)](https://squidfunk.github.io/mkdocs-material/)

# Algoritmekader

Het [Ministerie van Binnenlandse Zaken en Koninkrijksrelaties](https://github.com/MinBZK) ontwikkelt het Algoritmekader
op een open manier via Github. Het doel van het Algoritmekader is om overheden op een praktische wijze te ondersteunen,
zodat zij op een wettige en ethisch verantwoorde wijze algoritmes en AI-systemen gebruiken.

In deze repository ontwikkelen wij het Algoritmekader. De informatie van het Algoritmekader wordt uitgewerkt in
verschillende Markdown bestanden (een bestandsformaat voor platte tekstbestanden), welke je terug kan vinden in de map
[docs](docs).
Deze bestanden worden inzichtelijk gemaakt met behulp van [MkDocs](https://www.mkdocs.org/) en
[Material for MkDocs](https://squidfunk.github.io/mkdocs-material/).

Het Algoritmekader kun je bekijken op
[https://minbzk.github.io/Algoritmekader](https://minbzk.github.io/Algoritmekader/).

## Hoe kun je bijdragen?

Dat kan op verschillende manieren. Zie onze
[Contributing Guidelines](CONTRIBUTING.md) voor meer uitleg over hoe je kan bijdragen aan het Algoritmekader.

### Lokaal ontwikkelen

Het Algoritmekader project kan lokaal met behulp van [Python](https://www.python.org/) worden gedraaid. Installeer
hiervoor de benodigde packages in een [virtual environment](https://docs.python.org/3/library/venv.html):

```bash
pip install -r requirements.txt
```

Als je onderdeel bent van de [MinBZK organisatie](https://github.com/orgs/MinBZK/people) op GitHub, dan kun je ook de
productie versie installeren:

```bash
pip install -r requirements-prod.txt
```

Vervolgens kun je een preview van het Algoritmekader bekijken:

```bash
mkdocs serve
```

Het verschil tussen de twee versies is dat het Algoritmekader gebruik maakt van de
[insiders versie](https://squidfunk.github.io/mkdocs-material/insiders/) van
[Material for MkDocs](https://squidfunk.github.io/mkdocs-material/). De insiders versie is een gesponsorde versie en
bevat een aantal extra functionaliteiten. Hoewel deze versie onder een open source licentie beschikbaar is, vragen de
ontwikkelaars van Material for MkDocs in de aanvullende
[fair use policity](https://squidfunk.github.io/mkdocs-material/insiders/license/#fair-use-policy) om het niet publiek
te delen. Wij realiseren ons dat hierdoor niet iedereen de versie van het Algoritmekader, inclusief alle
functionaliteiten, op een eigen omgeving kan draaien. Om lokaal testen van mensen die geen toegang hebben tot de
betaalde versie mogelijk te maken, zit in `requirements.txt` de publiek toegangelijke
[mkdocs-material](https://pypi.org/project/mkdocs-material/) Python package met beperkte functionaliteit. In deze versie
werken de navigatie broodkruimels niet.

## Vragen?

Maak een [Issue](https://github.com/MinBZK/Algoritmekader/issues) aan op GitHub. Of stuur een e-mail naar
[algoritmes@minbzk.nl](mailto:algoritmes@minbzk.nl).
