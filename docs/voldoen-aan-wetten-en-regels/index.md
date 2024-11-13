---
title: Algoritmekader
summary: In het Algoritmekader staan alle regels, tips en hulpmiddelen voor overheden voor verantwoord gebruik van algoritmes en AI.
hide:
  - toc
  - navigation
---
# Voldoen aan wetten en regels

<section class="header-container">
  <div class="subheader">Wetten en regels, tips en hulpmiddelen voor verantwoord gebruik van algoritmes en AI.</div>
</section>

<section class="float-container">
  <article class="styled-list">
    <h2><b>De AI-verordening</b></h2>
    <p>In augustus 2024 is de Verordening Artificiële Intelligentie in werking getreden. Lees meer over de AI-verordening of gebruik de beslishulp om te bepalen of de AI-verordening geldt voor jouw beoogde toepassing.</p>
    <ul>
      <li><a href="ai-verordening/">De AI-verordening in het kort</a></li>
      <li><a href="https://ai-act-decisiontree.apps.digilab.network/">Gebruik de beslishulp AI-verordening</a></li>
    </ul>
    <a href="https://ai-act-decisiontree.apps.digilab.network/" class="button button-primary">Voer beslishulp AI-verordening uit</a>
    <!-- Modal Trigger -->
    <p><a class="button" href="#popup1" id="openModalButton">Voer beslishulp AI-verordening uit</a></p>
    <!-- Modal Structure -->
    <div id="popup1" class="overlay">
      <div class="popup">
        <h2>Beslishulp AI-Verordening</h2>
        <a class="close" href="javascript:void(0);" onclick="closeModal();">&times;</a>
        <div class="content">
          <div id="app">
            <!-- Dynamisch script wordt hier geladen -->
          </div>
        </div>
      </div>
    </div>
  </article>
</section>

<section class="float-container">
  <article class="styled-list">
    <h2><b>Vereisten</b></h2>
    <p>Overzicht van de belangrijkste vereisten voor overheden die algoritmes of AI-systemen ontwikkelen of gebruiken. Gebaseerd op wet- en regelgeving en bestaand beleid.</p>
    <ul>
      <li><a href="vereisten/aia-27-beoordelen-gevolgen-grondrechten/">Beoordeling van grondrechten</a></li>
      <li><a href="vereisten/aut-01-auteursrechten/">Auteursrechten</a></li>
      <li><a href="vereisten/grw-01-fundamentele-rechten/">Beschermen van fundamentele rechten en vrijheden</a></li>
    </ul>
    <a href="vereisten/" class="show-more"><b>Bekijk alle vereisten</b></a>
  </article>
</section>

<section class="float-container">
  <article class="styled-list">
    <h2><b>Maatregelen</b></h2>
    <p>Overzicht van aanbevolen maatregelen voor verantwoord gebruik van algoritmes en AI-systemen. Het zijn adviezen om te voldoen aan de vereisten voor overheden. Andere maatregelen zijn ook mogelijk.</p>
    <ul>
      <li><a href="maatregelen/voer_een_biasanalyse_uit/">Voer een biasanalyse uit</a></li>
      <li><a href="maatregelen/backups/">Maak back-ups van algoritmes</a></li>
      <li><a href="maatregelen/datakwaliteit/">Data is van voldoende kwaliteit</a></li>
    </ul>
    <a href="maatregelen/" class="show-more"><b>Bekijk alle maatregelen</b></a>
  </article>
  
  <article class="styled-list">
    <h2><b>Hulpmiddelen</b></h2>
    <p>Overzicht van aanbevolen hulpmiddelen voor het verantwoord ontwikkelen, gebruiken, beoordelen en monitoren van algoritmes en AI-systemen.</p>
    <ul>
      <li><a href="hulpmiddelen/DPIA/">Data Protection Impact Assessment</a></li>
      <li><a href="hulpmiddelen/IAMA/">Impact Assessment Mensenrechten en Algoritmes</a></li>
      <li><a href="hulpmiddelen/algoritmeregister/">Algoritmeregister</a></li>
    </ul>
    <a href="hulpmiddelen/" class="show-more"><b>Bekijk alle hulpmiddelen</b></a>
  </article>
</section>

<script>
// Functie om de modal te openen
document.getElementById('openModalButton').addEventListener('click', function() {
  openModal();
});

function openModal() {
  // Wacht even voor het openen van de modal om ervoor te zorgen dat de animaties zijn geladen
  setTimeout(function() {
    var scriptElement = document.createElement('script');
    scriptElement.src = 'https://github.com/MinBZK/ai-act-decisiontree/releases/download/1.1.7/index.js';
    scriptElement.type = 'text/javascript';
    scriptElement.id = 'modalScript'; // Geef het script een id zodat we het kunnen verwijderen bij het sluiten van de modal
    document.getElementById('app').appendChild(scriptElement);
  }, 500); // Wacht 500ms voordat het script wordt geladen, pas dit aan indien nodig
}

// Functie om de modal te sluiten en het script te verwijderen
function closeModal() {
  document.getElementById('popup1').style.display = 'none'; // Verberg de modal
  var scriptElement = document.getElementById('modalScript');
  if (scriptElement) {
    scriptElement.remove(); // Verwijder het script
  }
}

// Zorg ervoor dat de modal niet wegklikt wanneer je buiten de modal klikt
document.getElementById('popup1').addEventListener('click', function(event) {
  if (event.target === this) {
    closeModal();
  }
});
</script>