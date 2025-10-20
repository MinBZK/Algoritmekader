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
          
          // Trigger global tooltip reinitialization for modal content
          if (typeof initializeAccessibleAbbreviations === 'function') {
            initializeAccessibleAbbreviations();
          }
      });
      loadHTML(`${basePath}/html/ai-verordening-popup.html`, 'modal-content')
      document.getElementById("modal-content-container").classList.add("model-content-auto-size");
  } else if (modalId === "beslishulp AI-verordening") {
      document.getElementById("modal-content").innerHTML = `<iframe id="beslishulp-iframe"
          style="display: block; width: 100%; height: 100%; border: 0; padding: 0; margin: 0; overflow: hidden;"
          src="${basePath}/html/beslishulp.html"></iframe>`
      document.getElementById("modal-content-container").classList.remove("model-content-auto-size");
      
      // Try to inject accessibility improvements into the iframe
      setTimeout(function() {
        const iframe = document.getElementById('beslishulp-iframe');
        if (iframe) {
          injectIframeAccessibility(iframe);
        }
      }, 100);
      
      // Also try after a longer delay for dynamic content
      setTimeout(function() {
        const iframe = document.getElementById('beslishulp-iframe');
        if (iframe) {
          injectIframeAccessibility(iframe);
        }
      }, 2000);
  }
  document.getElementById("modal").classList.remove("display-none");
  
  // Initialize focus trap for modal
  initializeFocusTrap();
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

// Enhanced message event listener for beslishulp-done event
window.addEventListener('message', (event) => {
  if (event.data.event === 'beslishulp-done') {

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

// Initialize accessible info-icon tooltips when modal content loads
function initializeInfoIconTooltips() {
  // Use the global tooltip function if available
  if (typeof initializeAccessibleAbbreviations === 'function') {
    initializeAccessibleAbbreviations();
    return;
  }
  
  // Fallback: Handle .info-icon elements in modal only
  const modal = document.getElementById('modal-content');
  if (!modal) return;
  
  const infoIcons = modal.querySelectorAll('.info-icon[title]');
  infoIcons.forEach(function(icon) {
    makeElementAccessible(icon);
  });
  
  // Handle abbr elements in modal
  const abbreviations = modal.querySelectorAll('abbr[title]');
  abbreviations.forEach(function(abbr) {
    makeElementAccessible(abbr);
  });
  
  // Handle any other elements with title attributes in modal
  const allTitledElements = modal.querySelectorAll('[title]:not(.info-icon):not(abbr)');
  allTitledElements.forEach(function(element) {
    if (!element.hasAttribute('tabindex')) {
      makeElementAccessible(element);
    }
  });
}

function makeElementAccessible(element) {
  // Use the global function if available
  if (typeof makeElementAccessibleGlobal === 'function') {
    makeElementAccessibleGlobal(element);
    return;
  }
  
  // Fallback implementation
  // Ensure tabindex is set for keyboard accessibility
  if (!element.hasAttribute('tabindex')) {
    element.setAttribute('tabindex', '0');
  }
  
  // Add keyboard event listeners
  element.addEventListener('keydown', function(event) {
    // Show tooltip on Enter or Space
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      // Focus will trigger the CSS :focus state which shows the tooltip
      this.focus();
    }
  });
  
  // Add ARIA label for screen readers
  const title = element.getAttribute('title');
  if (title && !element.hasAttribute('aria-label')) {
    const prefix = element.classList.contains('info-icon') ? 'Info: ' : 'Definitie: ';
    element.setAttribute('aria-label', prefix + title);
  }
  
  // Add role button for better screen reader experience
  if (!element.hasAttribute('role') && !element.closest('button') && !element.closest('a')) {
    element.setAttribute('role', 'button');
  }
}

// Function to inject accessibility improvements into iframe (for beslishulp)
function injectIframeAccessibility(iframe) {
  try {
    // Function to try injection
    const tryInject = function() {
      try {
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        
        if (!iframeDoc || !iframeDoc.body) {
          return false;
        }
        
        // Make aiv-definition elements keyboard accessible
        const definitionElements = iframeDoc.querySelectorAll('.aiv-definition');
        let tooltipCount = 0;
        
        definitionElements.forEach(function(element) {
          if (!element.hasAttribute('tabindex')) {
            element.setAttribute('tabindex', '0');
            element.setAttribute('role', 'button');
            element.setAttribute('aria-label', 'Definitie: ' + element.textContent.trim());
            tooltipCount++;
            
            // Keyboard support
            element.addEventListener('keydown', function(event) {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                this.focus();
              }
            });
          }
        });
        
        // Add CSS for accessible tooltips in iframe
        if (tooltipCount > 0) {
          const style = iframeDoc.createElement('style');
          style.textContent = `
            /* Special styling for aiv-definition tooltips */
            .aiv-definition[tabindex="0"] {
              position: relative;
              cursor: help;
              outline-offset: 2px;
            }
            
            .aiv-definition[tabindex="0"]:focus {
              outline: 2px solid #154273;
              outline-offset: 2px;
            }
            
            /* Show the nested definition text on hover AND focus - this is the original tooltip! */
            .aiv-definition:hover .aiv-definition-text,
            .aiv-definition[tabindex="0"]:focus .aiv-definition-text {
              display: block !important;
              visibility: visible !important;
              opacity: 1 !important;
            }
          `;
          iframeDoc.head.appendChild(style);
        }
        
        // Set up MutationObserver to watch for dynamic content changes
        const observer = new MutationObserver(function(mutations) {
          let shouldRetry = false;
          mutations.forEach(function(mutation) {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
              Array.from(mutation.addedNodes).forEach(function(node) {
                if (node.nodeType === Node.ELEMENT_NODE) {
                  const hasAivDefinition = node.classList?.contains('aiv-definition') || 
                                         node.querySelector?.('.aiv-definition');
                  
                  if (hasAivDefinition) {
                    shouldRetry = true;
                  }
                }
              });
            }
          });
          
          if (shouldRetry) {
            setTimeout(tryInject, 100);
          }
        });
        
        // Start observing
        observer.observe(iframeDoc.body, {
          childList: true,
          subtree: true
        });
        
        return true;
      } catch (error) {
        return false;
      }
    };
    
    // Try immediately
    if (!tryInject()) {
      // If failed, try again after iframe loads
      iframe.onload = function() {
        setTimeout(tryInject, 500);
        setTimeout(tryInject, 1500);
        setTimeout(tryInject, 3000);
        setTimeout(tryInject, 5000);
      };
    }
    
  } catch (error) {
    // Silent fail for cross-origin issues
  }
}

// Initialize info-icon tooltips when DOM is ready
document.addEventListener('DOMContentLoaded', initializeInfoIconTooltips);

// Also initialize when modal content changes
const observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
      // Check if info-icon elements were added
      const hasInfoIcons = Array.from(mutation.addedNodes).some(node => 
        node.nodeType === Node.ELEMENT_NODE && 
        (node.classList?.contains('info-icon') || node.querySelector?.('.info-icon'))
      );
      if (hasInfoIcons) {
        initializeInfoIconTooltips();
      }
      
      // Update focus trap if it's active and modal content changed
      if (focusTrapActive) {
        setTimeout(updateFocusableElements, 100);
      }
    }
  });
});

// Observe modal content for changes
const modalContent = document.getElementById('modal-content');
if (modalContent) {
  observer.observe(modalContent, { childList: true, subtree: true });
}

// Focus trap functionality for modal accessibility
let focusTrapActive = false;
let focusableElements = [];
let firstFocusableElement = null;
let lastFocusableElement = null;

function initializeFocusTrap() {
  const modal = document.getElementById('modal');
  if (!modal || modal.classList.contains('display-none')) {
    return;
  }
  
  focusTrapActive = true;
  
  // Get all focusable elements within the modal
  updateFocusableElements();
  
  // Focus the first focusable element
  setTimeout(function() {
    if (firstFocusableElement) {
      firstFocusableElement.focus();
    }
  }, 100);
  
  // Add event listeners
  document.addEventListener('keydown', handleFocusTrap);
  modal.addEventListener('keydown', handleModalKeydown);
}

function updateFocusableElements() {
  const modal = document.getElementById('modal');
  if (!modal) return;
  
  // Get all focusable elements including all possible tooltips
  const focusableSelectors = [
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    'a[href]',
    '[tabindex]:not([tabindex="-1"])',
    'iframe',
    'abbr[title]',
    '.info-icon[title]', 
    '[title]',
    '[data-md-tooltip]'
  ].join(',');
  
  // Only search within the modal for focus trap
  focusableElements = Array.from(modal.querySelectorAll(focusableSelectors))
    .filter(element => {
      // Filter out invisible elements, but be more lenient for tooltip elements
      const isTooltipElement = element.hasAttribute('title') || element.classList.contains('info-icon') || element.hasAttribute('data-md-tooltip');
      if (isTooltipElement) {
        // For tooltip elements, check if they're not display:none and have actual content
        const style = window.getComputedStyle(element);
        const hasContent = element.textContent.trim().length > 0 || element.offsetWidth > 0;
        return style.display !== 'none' && style.visibility !== 'hidden' && hasContent;
      }
      // For other elements, use standard visibility check
      return element.offsetWidth > 0 && element.offsetHeight > 0;
    })
    // Sort elements by their position in the DOM for logical tab order
    .sort((a, b) => {
      const position = a.compareDocumentPosition(b);
      if (position & Node.DOCUMENT_POSITION_FOLLOWING) return -1;
      if (position & Node.DOCUMENT_POSITION_PRECEDING) return 1;
      return 0;
    });
  
  // Find the first meaningful focusable element (skip "Hulp nodig?" button)
  let meaningfulFirstElement = focusableElements.find(element => {
    // Skip elements that are just helper tooltips or "Hulp nodig?" button
    const isHelpButton = element.textContent?.trim().toLowerCase().includes('hulp nodig');
    const isTooltipOnly = element.hasAttribute('title') && 
                          !element.matches('button, input, select, textarea, a[href]');
    return !isHelpButton && !isTooltipOnly;
  });
  
  firstFocusableElement = meaningfulFirstElement || focusableElements[0];
  lastFocusableElement = focusableElements[focusableElements.length - 1];
  
}

function handleFocusTrap(event) {
  if (!focusTrapActive || event.key !== 'Tab') {
    return;
  }
  
  const modal = document.getElementById('modal');
  if (!modal || modal.classList.contains('display-none')) {
    disableFocusTrap();
    return;
  }
  
  // Update focusable elements in case modal content changed
  updateFocusableElements();
  
  if (focusableElements.length === 0) {
    event.preventDefault();
    return;
  }
  
  // Check if we're tabbing forward or backward
  if (event.shiftKey) {
    // Shift + Tab (backward)
    if (document.activeElement === firstFocusableElement) {
      event.preventDefault();
      lastFocusableElement.focus();
    }
  } else {
    // Tab (forward)
    if (document.activeElement === lastFocusableElement) {
      event.preventDefault();
      firstFocusableElement.focus();
    }
  }
}

function handleModalKeydown(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}

function disableFocusTrap() {
  focusTrapActive = false;
  document.removeEventListener('keydown', handleFocusTrap);
  
  const modal = document.getElementById('modal');
  if (modal) {
    modal.removeEventListener('keydown', handleModalKeydown);
  }
}

// Update closeModal function to disable focus trap
const originalCloseModal = window.closeModal;
window.closeModal = function() {
  disableFocusTrap();
  if (originalCloseModal) {
    originalCloseModal();
  } else {
    // Fallback close functionality
    const modal = document.getElementById('modal');
    if (modal) {
      modal.classList.add('display-none');
    }
  }
};
