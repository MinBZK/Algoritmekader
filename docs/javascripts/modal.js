function setSelectedValue(el, val) {
  const option = Array.from(el.options).find(opt => opt.value === val);
  if (option) {
    option.selected = true;
  }
}

function updateFieldsBasedOnType(selectedTypeElement) {
  const selectedType = selectedTypeElement.value;

  // Get all relevant form fields
  const riskGroupField = document.getElementById('risk-group');
  const transparencyField = document.getElementById('transparency-obligations');
  const systemicRiskField = document.getElementById('systemic-risk');

  // First disable all fields
  [riskGroupField, transparencyField, systemicRiskField].forEach(field => {
    field.disabled = true;
  });

  // Determine which fields should be enabled based on type
  const isAISystem = selectedType === 'ai-systeem' || selectedType === 'ai-systeem-voor-algemene-doeleinden';
  const isAIModel = selectedType === 'ai-model-voor-algemene-doeleinden';

  // Enable relevant fields based on selection
  if (isAISystem) {
    // For AI systems, enable risk group and transparency
    riskGroupField.disabled = false;
    transparencyField.disabled = false;
    systemicRiskField.disabled = true;
    setSelectedValue(systemicRiskField, "");
  } else if (isAIModel) {
    // For AI models, only enable systemic risk
    systemicRiskField.disabled = false;
    // Keep others disabled but visible
    riskGroupField.disabled = true;
    setSelectedValue(riskGroupField, "");
    transparencyField.disabled = true;
    setSelectedValue(transparencyField, "");
  }
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

function getBasePath() {
  const path = window.location.pathname;
  const isLocal = window.location.hostname === "127.0.0.1" || window.location.hostname === "localhost";
  const isPRPreview = path.includes('/pr-preview/');

  if (isLocal) {
    return '/Algoritmekader';
  } else if (isPRPreview) {
    // Extract everything up to and including the PR number
    const prMatch = path.match(/(\/Algoritmekader\/pr-preview\/pr-\d+)/);
    return prMatch ? prMatch[1] : '/Algoritmekader';
  } else {
    // Production
    return '/Algoritmekader';
  }
}

// Enhanced showModal function to support redirect functionality
function showModal(event, modalId, options = {}) {
  event.preventDefault();
  event.stopPropagation();
  const basePath = getBasePath();

  // Store redirect URL if provided
  if (options.redirectUrl) {
    // If redirectUrl is relative, make it absolute with basePath
    const redirectUrl = options.redirectUrl.startsWith('/') ? options.redirectUrl : `${basePath}/${options.redirectUrl}`;
    sessionStorage.setItem('pendingRedirect', redirectUrl);
  }

  if (modalId === "ai-act-labels") {
      onDynamicContentLoaded(document.getElementById("modal-content"), (cb) => {
          updateAIActForm();
          updateFieldsBasedOnType(document.getElementById("type"));
      });
      loadHTML(`${basePath}/html/ai-verordening-popup.html`, 'modal-content')
      document.getElementById("modal-content-container").classList.add("model-content-auto-size");
  } else if (modalId === "beslishulp AI-verordening") {
      document.getElementById("modal-content").innerHTML = `<iframe
          style="display: block; width: 100%; height: 100%; border: 0; padding: 0; margin: 0; overflow: hidden;"
          src="${basePath}/html/beslishulp.html"></iframe>`
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

function updateLabels(labels) {
  console.log('Received labels:', labels);

  // Define patterns to exclude
  const excludePatterns = [
    'niet van toepassing',
    'onbekend'
  ];

  // Filter out labels based on dynamic exclusion patterns
  const filteredLabels = labels.filter(label => {
    const labelObj = labelMapper.find(label);

    // Check if any exclude pattern matches the label or display value
    const shouldExclude = excludePatterns.some(pattern =>
      labelObj.label.toLowerCase().includes(pattern.toLowerCase()) ||
      labelObj.display_value.toLowerCase().includes(pattern.toLowerCase())
    );

    return !shouldExclude;
  });

  // If no meaningful labels remain, hide labels section
  if (filteredLabels.length === 0) {
    document.getElementById("ai-act-info-with-labels").classList.add("display-none");
    document.getElementById("ai-act-info-no-labels").classList.remove("display-none");
    document.getElementById('labelsInput').value = '';
    document.getElementById('ai-act-labels-container').innerHTML = '';
    return;
  }

  // Convert filtered labels to label objects
  const allLabels = filteredLabels.map(label => labelMapper.find(label));

  // Ignore groups not used by AK at the moment
  const ignoreGroups = ["conformiteitsbeoordelingsinstantie", "operationeel"];
  const appliedLabels = allLabels.filter(labelObj =>
    !ignoreGroups.includes(labelObj.group)
  );

  // Show labels section
  document.getElementById("ai-act-info-with-labels").classList.remove("display-none");
  document.getElementById("ai-act-info-no-labels").classList.add("display-none");

  // Update labels input
  const labelsToSet = appliedLabels.map(obj => obj.label).join(",");
  const labelsInputElement = document.getElementById('labelsInput');
  if (labelsInputElement) {
    labelsInputElement.value = labelsToSet;
  }
  
  // Trigger filtering after updating labels
  if (typeof filterTable === 'function') {
    filterTable();
  }

  // Generate labels HTML
  let labelsHTML = "";
  for (const label_obj of appliedLabels) {
    labelsHTML += "<span data-label-value='" + label_obj.label + "' class='info-label' onclick='removeLabel(event)'>" + label_obj.display_value + "</span>";
  }
  document.getElementById('ai-act-labels-container').innerHTML = labelsHTML;
}

function getLabelsFromForm(el) {
  const formData = new FormData(el);

  const labels = [];
  const uniqueKeys = [...new Set(formData.keys())];

  for (const key of uniqueKeys) {
    formData.getAll(key).forEach(value => {
      if (value.trim() !== '') {
        labels.push(`${key}-${value}`);
      }
    });
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
 * Given a label or list of synonyms, return an object with a label and display_value.
 * Labels are combined with the given group. Synonyms must provide their own full synonym, including group name is applicable.
 * Defaults to the given value of the mapping if not found.
 */
class ValueMapper {
  constructor() {
    this.map = new Map();
    this.groups = new Map();
  }

  addEntry(label, display_value, group, synonyms = []) {
    const standardFormat = {"label": group + "-" + label.toLowerCase(), group, display_value};
    const AKFilter = group + "-" + label.toLowerCase();
    this.map.set(AKFilter, standardFormat);
    synonyms.forEach(synonym => {
      this.map.set(synonym.toLowerCase(), standardFormat);
    });

    if (!this.groups.has(group)) {
      this.groups.set(group, new Set());
    }

    this.groups.get(group).add(AKFilter);
  }


  find(value) {
    if (this.map.has(value.toLowerCase())) {
      return this.map.get(value.toLowerCase());
    }
    return {"label": value, group: "onbekend", "display_value": value + " [onbekend]", "missing": true};
  }

}


// Usage example:
const labelMapper = new ValueMapper();

labelMapper.addEntry('hoog-risico-ai-systeem', 'Hoog risico AI Systeem', 'risicogroep', ['Risicogroep-hoog-risico AI']);
labelMapper.addEntry('geen-hoog-risico-ai-systeem', 'Geen hoog-risico AI Systeem', 'risicogroep', ['Risicogroep-geen hoog-risico AI']);
labelMapper.addEntry('verboden-ai', 'Verboden AI', 'risicogroep', ['Risicogroep-Verboden AI']);
labelMapper.addEntry('uitzondering-van-toepassing', 'Uitzondering van toepassing', 'risicogroep', ["Risicogroep-uitzondering van toepassing"]);
labelMapper.addEntry('niet-van-toepassing', 'Niet van toepassing', 'risicogroep', ["Risicogroep-niet van toepassing"]);

labelMapper.addEntry('aanbieder', 'Aanbieder', 'rol-ai-act', ["Rol-aanbieder"]);
labelMapper.addEntry('gebruiksverantwoordelijke', 'Gebruiksverantwoordelijke', 'rol-ai-act', ["Rol-gebruiksverantwoordelijke"])
labelMapper.addEntry('importeur', 'Importeur', 'rol-ai-act', ["Rol-importeur"]);
labelMapper.addEntry('distributeur', 'Distributeur', 'rol-ai-act', ["Rol-distributeur"]);

labelMapper.addEntry('ai-systeem', 'AI Systeem', 'soort-toepassing', ['Soort toepassing-AI-Systeem']);
labelMapper.addEntry('ai-systeem-voor-algemene-doeleinden', 'AI Systeem voor algemene doeleinden', 'soort-toepassing', ['Soort toepassing-AI-Systeem voor algemene doeleinden']);
labelMapper.addEntry('ai-model-voor-algemene-doeleinden', 'AI model voor algemene doeleinden', 'soort-toepassing', ['Soort toepassing-AI-model voor algemene doeleinden']);
labelMapper.addEntry('geen-algoritme', 'Geen algoritme', 'soort-toepassing', ["Soort toepassing-geen algoritme"]);

labelMapper.addEntry('transparantieverplichting', 'Transparantieverplichting', 'transparantieverplichting', ["Transparantieverplichting-transparantieverplichting"]);
labelMapper.addEntry('geen-transparantieverplichting', 'Geen transparantieverplichting', 'transparantieverplichting', ["Transparantieverplichting-geen transparantieverplichting"]);
labelMapper.addEntry('niet-van-toepassing', 'Niet van toepassing', 'transparantieverplichting', ["Transparantieverplichting-niet van toepassing"]);

labelMapper.addEntry('systeemrisico', 'Systeemrisico', 'systeemrisico', ["Systeemrisico-systeemrisico"]);
labelMapper.addEntry('geen-systeemrisico', 'Geen systeemrisico', 'systeemrisico', ["Systeemrisico-geen systeemrisico"]);
labelMapper.addEntry('niet-van-toepassing', 'Niet van toepassing', 'systeemrisico', ["Systeemrisico-niet van toepassing"]);

labelMapper.addEntry('open-source', 'Open source', 'open-source', ["Open source-open-source"]);
labelMapper.addEntry('geen-open-source', 'Geen open source', 'open-source', ["Open source-geen open-source"]);
labelMapper.addEntry('niet-van-toepassing', 'Niet van toepassing', 'open-source', ["Open source-niet van toepassing"]);

labelMapper.addEntry('in-gebruik', 'In gebruik', 'operationeel', ["Operationeel-in gebruik"]);
labelMapper.addEntry('in-ontwikkeling', 'In ontwikkeling', 'operationeel', ["Operationeel-in ontwikkeling"]);

labelMapper.addEntry('beoordeling-door-derde-partij', 'Beoordeling door derde partij', 'conformiteitsbeoordelingsinstantie', ["Conformiteitsbeoordelingsinstantie-beoordeling door derde partij"]);
labelMapper.addEntry('niet-van-toepassing', 'Niet van toepassing', 'conformiteitsbeoordelingsinstantie', ["Conformiteitsbeoordelingsinstantie-niet van toepassing"]);

// Enhanced message event listener for beslishulp-done event
window.addEventListener('message', (event) => {
  if (event.data.event === 'beslishulp-done') {
    console.log('Received beslishulp-done:', event.data.value);

    const redirectUrl = sessionStorage.getItem('pendingRedirect');
    const jsonObject = JSON.parse(sessionStorage.getItem("labelsbysubcategory"));

    if (redirectUrl && jsonObject) {
      // Store labels for processing after redirect
      sessionStorage.setItem('pendingLabels', JSON.stringify(jsonObject));
      sessionStorage.removeItem('pendingRedirect');

      // Close modal first, then redirect
      closeModal();

      // Small delay to ensure modal closes before redirect
      setTimeout(() => {
        window.location.href = redirectUrl;
      }, 100);
    } else if (jsonObject) {
      // Direct modal case - handle labels immediately
      const beslishulpLabels = Object.entries(jsonObject).flatMap(([key, values]) =>
        values.map(value => `${key}-${value}`)
      );
      updateLabels(beslishulpLabels);
      filterTable();
      closeModal();
    }
  }
});

document.addEventListener('DOMContentLoaded', () => {
  // Check for and process any pending labels (no modal needed)
  const pendingLabels = sessionStorage.getItem('pendingLabels');
  if (pendingLabels) {
    try {
      const jsonObject = JSON.parse(pendingLabels);
      const beslishulpLabels = Object.entries(jsonObject).flatMap(([key, values]) =>
        values.map(value => `${key}-${value}`)
      );
      updateLabels(beslishulpLabels);
      filterTable();
      sessionStorage.removeItem('pendingLabels'); // Clean up
    } catch (error) {
      console.error('Error processing pending labels:', error);
    }
  }
});
