function closeModal() {
  document.getElementById('modal').classList.add("display-none")
}

function onDynamicContentLoaded(targetDiv, callback) {
  const observer = new MutationObserver((mutations, observer) => {
    // Check if we have actual mutations
    if (mutations.length === 0) return;

    // Immediately disconnect the observer
    observer.disconnect();

    // Execute callback with the target div
    callback(targetDiv);
  });

  // Start observing with subtree and childList options
  observer.observe(targetDiv, {
    childList: true,
    subtree: true
  });

  // Return disconnect function in case manual cleanup is needed
  return () => observer.disconnect();
}

function showModal(event, modalId) {
  event.preventDefault();
  event.stopPropagation();
  if (modalId === "ai-act-labels") {
    onDynamicContentLoaded(document.getElementById("modal-content"), (cb) => {
      updateAIActForm();
    });
    loadHTML('../../html/ai-verordening-popup.html', 'modal-content')
    document.getElementById("modal-content-container").classList.add("model-content-auto-size");
  } else if (modalId === "beslishulp") {
    document.getElementById("modal-content").innerHTML = "<iframe style=\"display: block; width: 100%; height: 100%; border: 0; padding: 0; margin: 0; overflow: hidden;\" src=\"../../html/beslishulp.html\"></iframe>"
    document.getElementById("modal-content-container").classList.remove("model-content-auto-size");
  }
  document.getElementById("modal").classList.remove("display-none");
}

function loadHTML(url, targetDivId) {
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`); // Handle errors
      }
      return response.text(); // Get the HTML as text
    })
    .then(html => {
      const targetDiv = document.getElementById(targetDivId);
      if (targetDiv) {
        targetDiv.innerHTML = html; // Set the HTML content of the div
      } else {
        console.error(`Target div with ID '${targetDivId}' not found.`);
      }
    })
    .catch(error => {
      console.error("Error loading HTML:", error); // Handle fetch errors
    });
}

function convertLabels(labels) {
  return labels.map(function (label) { return labelMapper.find(label) })
}

function updateLabels(labels) {
  const convertedLabels = convertLabels(labels);
  document.getElementById("ai-act-info-with-labels").classList.remove("display-none");
  document.getElementById("ai-act-info-no-labels").classList.add("display-none");
  // appendQueryParams({"labels": convertedLabels.map(obj=> obj.label).join(",")});
  document.getElementById('labelsInput').value = convertedLabels.map(obj=> obj.label).join(",");

  let labelsHTML = "";
  for (const label_obj of convertedLabels) {
    labelsHTML += "<span data-label-value='" + label_obj.label + "' class='info-label' onclick='removeLabel(event)'>" + label_obj.display_value + "</span>"
  }
  document.getElementById('ai-act-labels-container').innerHTML = labelsHTML;
}

function getLabelsFromForm(el) {
  const formData = new FormData(el);
  const jsonObject = Array.from(formData.entries()).reduce((resultArray, [key, value]) => {
    resultArray[key] = resultArray.hasOwnProperty(key) ? (Array.isArray(resultArray[key]) ? [...resultArray[key], value] : [resultArray[key], value]) : value;
    return resultArray;
  }, {});
  const labels = Object.values(jsonObject).flatMap(v => Array.isArray(v) ? v : [v]).filter(v => v !== "");
  if (labels.length > 0) {
    console.log(labels);
    updateLabels(labels);
  } else {
    document.getElementById("ai-act-info-with-labels").classList.add("display-none");
    document.getElementById("ai-act-info-no-labels").classList.remove("display-none");
  }
  closeModal();
}

function removeLabel(event) {
  let currentLabels = document.getElementById('labelsInput').value.split(",");
  const label_obj = labelMapper.find(event.target.getAttribute("data-label-value"));
  currentLabels = currentLabels.filter(v => v !== label_obj.label);
  document.getElementById('labelsInput').value = currentLabels.join(',');
  event.target.remove();
  if (currentLabels.length === 0) {
    document.getElementById("ai-act-info-with-labels").classList.add("display-none");
    document.getElementById("ai-act-info-no-labels").classList.remove("display-none");
  }
  filterTable();
}

function updateAIActForm() {
  let currentLabels = document.getElementById('labelsInput').value.split(",");
  document.getElementById("ai-act-labels-form").querySelectorAll('[value]').forEach(element => {
    if (currentLabels.includes(labelMapper.find(element.getAttribute('value')).label)) {
      if (element.nodeName === "OPTION") {
        element.setAttribute("selected", "selected");
      } else {
        element.setAttribute("checked", "checked");
      }
    }
  })
}

function appendQueryParams(params) {
  const url = new URL(window.location.href);
  for (const key in params) {
    if (params.hasOwnProperty(key)) {
      url.searchParams.set(key, params[key]);
    }
  }
  window.history.replaceState(null, document.title, url.toString()); // Update URL without reload
}

/**
 * Given any key, display value or list of synonyms, return an object with a label and display_value.
 * Used to map between different input for labels, but always get the right combination.
 * Defaults to the given value of the mapping is not found.
 */
class ValueMapper {
  constructor() {
    this.map = new Map();
    this.groups = new Map();
  }

  addEntry(label, display_value, group, synonyms = []) {
    const standardFormat = { label, group, display_value };
    this.map.set(group + "-" + label.toLowerCase(), standardFormat);
    synonyms.forEach(synonym => {
      this.map.set(group + "-" + synonym.toLowerCase(), standardFormat);
    });

    if (!this.groups.has(group)) {
      this.groups.set(group, new Set());
    }

    this.groups.get(group).add(group + "-" + label.toLowerCase());
  }


  find(value) {
    if (this.map.has(value.toLowerCase())) {
      return this.map.get(value.toLowerCase());
    }
    return {"label": value, "display_value": value + " [onbekend]", "missing": true};
  }

}


// Usage example:
const labelMapper = new ValueMapper();

labelMapper.addEntry('hoog-risico-ai-systeem', 'Hoog risico AI Systeem', 'risicogroep', ['hoog-risico AI']);
labelMapper.addEntry('geen-hoog-risico-ai-systeem', 'Geen hoog-risico AI Systeem', 'risicogroep', ['geen hoog-risico AI']);
labelMapper.addEntry('verboden-ai', 'Verboden AI', 'risicogroep', ['Verboden AI']);
labelMapper.addEntry('uitzondering-van-toepassing', 'Uitzondering van toepassing', 'risicogroep', []);

labelMapper.addEntry('aanbieder', 'Aanbieder', 'rol-ai-act', []);
labelMapper.addEntry('gebruiksverantwoordelijke', 'Gebruiksverantwoordelijke', 'rol-ai-act', [])
labelMapper.addEntry('importeur', 'Importeur', 'rol-ai-act', []);
labelMapper.addEntry('distributeur', 'Distributeur','rol-ai-act', []);

labelMapper.addEntry('ai-systeem', 'AI Systeem', 'soort-toepassing', ['AI-Systeem','ai-systeem']);
labelMapper.addEntry('ai-systeem-voor-algemene-doeleinden', 'AI Systeem voor algemene doeleinden', 'soort-toepassing', ['AI-Systeem voor algemene doeleinden']);
labelMapper.addEntry('ai-model-voor-algemene-doeleinden', 'AI model voor algemen doeleinden', 'soort-toepassing',['AI-model voor algemene doeleinden']);
labelMapper.addEntry('impactvol-algoritme', 'Impactvol algoritme', 'soort-toepassing', []);
labelMapper.addEntry('niet-impactvol-algoritme', 'Niet-impactvol algoritme','soort-toepassing', []);

labelMapper.addEntry('transparantieverplichting', 'Transparantieverplichting', 'transparantieverplichting', []);
labelMapper.addEntry('geen-transparantieverplichting', 'Geen transparantieverplichting', 'transparantieverplichting', []);

labelMapper.addEntry('systeemrisico', 'Systeemrisico', 'systeemrisico', []);
labelMapper.addEntry('geen-systeemrisico', 'Geen systeemrisico', 'systeemrisico', []);

labelMapper.addEntry('open-source', 'Open source', 'open-source', []);
labelMapper.addEntry('geen-open-source', 'Geen open source', 'open-source', []);

labelMapper.addEntry('in-gebruik', 'In gebruik', 'in-gebruik', []);
labelMapper.addEntry('beoordeling-door-derde-partij', 'Beoordeling door derde partij', 'beoordeling-door-derde-partij', []);


window.addEventListener('message', (event) => {
  if (event.data.event === 'beslishulp-done') {
    // Handle the event
    console.log('Received beslishulp-done:', event.data.value);
    const jsonObject = JSON.parse(sessionStorage.getItem("labels"))
    const labels = convertLabels(Object.values(jsonObject).flatMap(v => Array.isArray(v) ? v : [v]).filter(v => v !== "")).map(obj => obj.label)
    updateLabels(labels);
    filterTable();
    closeModal();
  }
});
