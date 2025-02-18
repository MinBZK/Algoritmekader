function updateFieldsBasedOnType(selectedType) {
  // Get all relevant form fields
  const riskGroupField = document.getElementById('risk-group');
  const transparencyField = document.getElementById('transparency-obligations');
  const systemicRiskField = document.getElementById('systemic-risk');
  
  // Get their parent rows
  const riskGroupRow = riskGroupField.closest('.form__row');
  const transparencyRow = transparencyField.closest('.form__row');
  const systemicRiskRow = systemicRiskField.closest('.form__row');

  // First disable and reset all fields
  [riskGroupField, transparencyField, systemicRiskField].forEach(field => {
    field.value = '';
    field.disabled = true;
  });

  // Make sure all rows are visible
  [riskGroupRow, transparencyRow, systemicRiskRow].forEach(row => {
    row.style.display = '';
  });

  // Determine which fields should be enabled based on type
  const isAISystem = selectedType === 'ai-systeem' || selectedType === 'ai-systeem-voor-algemene-doeleinden';
  const isAIModel = selectedType === 'ai-model-voor-algemene-doeleinden';

  // Enable relevant fields based on selection
  if (isAISystem) {
    // For AI systems, enable risk group and transparency
    riskGroupField.disabled = false;
    transparencyField.disabled = false;
    // Keep systemic risk disabled but visible
    systemicRiskField.disabled = true;
  } else if (isAIModel) {
    // For AI models, only enable systemic risk
    systemicRiskField.disabled = false;
    // Keep others disabled but visible
    riskGroupField.disabled = true;
    transparencyField.disabled = true;
  } else if (selectedType === 'impactvol-algoritme' || selectedType === 'niet-impactvol-algoritme') {
    // For algoritmes, keep all fields disabled but visible
    [riskGroupField, transparencyField, systemicRiskField].forEach(field => {
      field.disabled = true;
    });
  }
}

// Initialize tooltips
function initializeTooltips() {
  const tooltips = document.querySelectorAll('.info-icon');
  tooltips.forEach(tooltip => {
    tooltip.addEventListener('mouseover', (e) => {
      const tooltipText = e.target.getAttribute('title');
      const tooltipDiv = document.createElement('div');
      tooltipDiv.className = 'tooltip';
      tooltipDiv.textContent = tooltipText;
      document.body.appendChild(tooltipDiv);
      
      const rect = e.target.getBoundingClientRect();
      tooltipDiv.style.top = `${rect.top - tooltipDiv.offsetHeight - 5}px`;
      tooltipDiv.style.left = `${rect.left + (rect.width / 2) - (tooltipDiv.offsetWidth / 2)}px`;
    });

    tooltip.addEventListener('mouseout', () => {
      const tooltips = document.querySelectorAll('.tooltip');
      tooltips.forEach(t => t.remove());
    });
  });
}

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
  return labels.map(function (label) {
    return labelMapper.find(label)
  })
}

function updateLabels(labels) {
  const convertedLabels = convertLabels(labels);
  document.getElementById("ai-act-info-with-labels").classList.remove("display-none");
  document.getElementById("ai-act-info-no-labels").classList.add("display-none");
  document.getElementById('labelsInput').value = convertedLabels.map(obj => obj.label).join(",");

  // Filter out 'niet-van-toepassing' labels and create a unique set based on display_value
  const uniqueLabels = new Map(); // Using Map to maintain order
  
  convertedLabels.forEach(label_obj => {
      // Skip 'niet-van-toepassing' labels
      if (!label_obj.label.endsWith('-niet-van-toepassing')) {
          // Use display_value as key to prevent duplicates
          uniqueLabels.set(label_obj.display_value, label_obj);
      }
  });

  let labelsHTML = "";
  for (const label_obj of uniqueLabels.values()) {
      labelsHTML += "<span data-label-value='" + label_obj.label + "' class='info-label' onclick='removeLabel(event)'>" + 
                   label_obj.display_value + "</span>";
  }
  
  document.getElementById('ai-act-labels-container').innerHTML = labelsHTML;
}
function getLabelsFromForm(el) {
  const formData = new FormData(el);
  const labels = [];
  
  // Get all select elements in the form
  const selects = el.querySelectorAll('select');
  
  // Process each select
  selects.forEach(select => {
      const name = select.getAttribute('name');
      // If nothing is selected, add the "niet-van-toepassing" value
      if (!select.value) {
          labels.push(`${name}-niet-van-toepassing`);
      } else {
          // Add the selected value
          labels.push(`${name}-${select.value}`);
      }
  });

  // Process checkboxes (for roles)
  const uniqueKeys = [...new Set(formData.keys())];
  for (const key of uniqueKeys) {
      // Only process non-select fields (i.e., checkboxes)
      if (!key.endsWith('select')) {
          formData.getAll(key).forEach(value => {
              if (value.trim() !== '') {
                  labels.push(`${key}-${value}`);
              }
          });
      }
  }

  if (labels.length > 0) {
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
  document.getElementById("ai-act-labels-form").querySelectorAll("input").forEach(
    element => {
      let groupName = element.getAttribute("name");
      let labelValue = element.getAttribute("value");
      let labelWithGroup = groupName + "-" + labelValue;
      if (currentLabels.includes(labelMapper.find(labelWithGroup).label)) {
        element.setAttribute("checked", "checked");
      }
    }
  )

  document.getElementById("ai-act-labels-form").querySelectorAll("select").forEach(
    element => {
      let groupName = element.getAttribute("name");
      element.querySelectorAll("option").forEach(optionElement => {
        let labelValue = optionElement.getAttribute("value");
        let labelWithGroup = groupName + "-" + labelValue;
        if (currentLabels.includes(labelMapper.find(labelWithGroup).label)) {
          optionElement.setAttribute("selected", "selected");
        }
      })
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
    const standardFormat = {"label": group + "-" + label.toLowerCase(), group, display_value};
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
labelMapper.addEntry('distributeur', 'Distributeur', 'rol-ai-act', []);

labelMapper.addEntry('ai-systeem', 'AI Systeem', 'soort-toepassing', ['AI-Systeem', 'ai-systeem']);
labelMapper.addEntry('ai-systeem-voor-algemene-doeleinden', 'AI Systeem voor algemene doeleinden', 'soort-toepassing', ['AI-Systeem voor algemene doeleinden']);
labelMapper.addEntry('ai-model-voor-algemene-doeleinden', 'AI model voor algemen doeleinden', 'soort-toepassing', ['AI-model voor algemene doeleinden']);
labelMapper.addEntry('impactvol-algoritme', 'Impactvol algoritme', 'soort-toepassing', []);
labelMapper.addEntry('niet-impactvol-algoritme', 'Niet-impactvol algoritme', 'soort-toepassing', []);

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
