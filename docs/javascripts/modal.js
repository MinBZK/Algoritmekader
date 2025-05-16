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

/**
 * Closes the modal and handles redirection if needed
 * @param {boolean} shouldRedirect - Whether to check for and perform a redirect
 */
function closeModal(shouldRedirect = false) {
  document.getElementById('modal').classList.add("display-none");
  
  // Handle redirect if needed
  if (shouldRedirect) {
    const redirectUrl = sessionStorage.getItem('pendingRedirect');
    if (redirectUrl) {
      sessionStorage.removeItem('pendingRedirect');
    }
  }
}

// Function to store redirect URL without immediate redirection
function storeRedirectUrl(targetUrl) {
  sessionStorage.setItem('pendingRedirect', targetUrl);
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

// Keep this for backward compatibility
function redirectThenShowModal(event, targetUrl) {
  showBeslishulpWithRedirect(event, targetUrl);
}

/**
 * Shows a modal with planned redirection after closing
 * @param {Event} event - The event that triggered the modal
 * @param {string} modalId - The ID of the modal to show (e.g., 'beslishulp', 'ai-act-labels')
 * @param {string} redirectUrl - The URL to redirect to after closing
 */
function showModalWithRedirect(event, modalId, redirectUrl) {
  event.preventDefault();
  sessionStorage.setItem('pendingRedirect', redirectUrl);
  showModal(event, modalId);
}

/**
 * Shows a modal without any redirection behavior
 * @param {Event} event - The event that triggered the modal
 * @param {string} modalId - The ID of the modal to show (e.g., 'beslishulp', 'ai-act-labels')
 */
function showModal(event, modalId) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
  
  const basePath = getBasePath();
  
  if (modalId === "ai-act-labels") {
      onDynamicContentLoaded(document.getElementById("modal-content"), (cb) => {
          updateAIActForm();
          updateFieldsBasedOnType(document.getElementById("type"));
      });
      loadHTML(`${basePath}/html/ai-verordening-popup.html`, 'modal-content')
      document.getElementById("modal-content-container").classList.add("model-content-auto-size");
  } else if (modalId === "beslishulp") {
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
  document.getElementById('labelsInput').value = appliedLabels.map(obj => obj.label).join(",");

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

// Simplified message handler that doesn't rely on intermediate flags
// Window message handler for beslishulp-closing event
window.addEventListener('message', function(event) {
  // Validate event data
  if (!event.data || !event.data.event) return;
  
  // Handle beslishulp closing
  if (event.data.event === 'beslishulp-closing') {
    console.log('Received beslishulp-closing event');
    
    try {
      // Get the redirect URL if it exists
      var redirectUrl = sessionStorage.getItem('pendingRedirect');
      
      // Try multiple sources for the labels data
      var jsonObject = null;
      
      // First check the standardized location where beslishulp.html stored the data
      try {
        var storedClosingData = sessionStorage.getItem('beslishulp_closing_data');
        if (storedClosingData) {
          jsonObject = JSON.parse(storedClosingData);
        }
      } catch (e) {
        console.error('Error parsing closing data:', e);
      }
      
      // Fall back to labelsbysubcategory if needed
      if (!jsonObject) {
        try {
          var labelsData = sessionStorage.getItem("labelsbysubcategory");
          if (labelsData) {
            jsonObject = JSON.parse(labelsData);
          }
        } catch (e) {
          console.error('Error parsing labelsbysubcategory:', e);
        }
      }
      
      console.log('Processing closing with state:', { 
        hasRedirectUrl: !!redirectUrl, 
        hasLabels: !!jsonObject 
      });
      
      // Process based on available data
      if (jsonObject) {
        if (redirectUrl) {
          // Store labels for after redirect
          sessionStorage.setItem('pendingLabels', JSON.stringify(jsonObject));
          sessionStorage.setItem('showModalAfterRedirect', 'true');
          
          // Do not remove pendingRedirect until after the redirect has been executed
          // This line was causing the issue:
          // sessionStorage.removeItem('pendingRedirect');
          
          // Clean up
          sessionStorage.removeItem('beslishulp_closing_data');
          
          // Close and redirect - ensure this function handles the redirect properly
          console.log('Closing with redirect to:', redirectUrl);
          closeModal(true);
        } else {
          // Apply labels immediately
          console.log('Applying labels immediately');
          
        try {
          // Convert the labels to the format expected by updateLabels
          var beslishulpLabels = Object.entries(jsonObject).flatMap(function(entry) {
            var key = entry[0];
            var values = entry[1];
            return values.map(function(value) {
              return key + "-" + value;
            });
          });
          
          // Apply the labels
          updateLabels(beslishulpLabels);
          
          // Apply filters if the function exists
          if (typeof filterTable === 'function') {
            filterTable();
          }
        } catch (e) {
          console.error('Error applying labels:', e);
        }
        
        // Clean up
        sessionStorage.removeItem('beslishulp_closing_data');
        
        // Close modal
        closeModal(false);
      }
    } else {
      // No labels found, just close (and redirect if needed)
      console.log('No labels found, just closing modal');
      closeModal(redirectUrl ? true : false);
      
      // Clean up redirect URL - but only after redirection has been executed
      // if (redirectUrl) {
      //   sessionStorage.removeItem('pendingRedirect');
      // }
    }
    } catch (e) {
      console.error('Error handling beslishulp-closing:', e);
      
      // Attempt to close the modal anyway
      try {
        closeModal(false);
      } catch (e2) {
        console.error('Error closing modal:', e2);
      }
    }
  }
});

      
document.addEventListener('DOMContentLoaded', () => {
  // Check if we should show modal
  const shouldShowModal = sessionStorage.getItem('showModalAfterRedirect');
  if (shouldShowModal) {
    sessionStorage.removeItem('showModalAfterRedirect');
    showModal(new Event('click'), 'beslishulp');
  }

  // Check for and process any pending labels
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