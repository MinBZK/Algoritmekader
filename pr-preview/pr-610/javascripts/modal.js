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
    // TODO: remove monitor when new beslishulp is released
    // monitor.start();
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
  appendQueryParams({"labels": convertedLabels.map(obj=> obj.label).join(",")});
  document.getElementById('labelsInput').value = convertedLabels.map(obj=> obj.label).join(",");

  let labelsHTML = "";
  for (const label_obj of convertedLabels) {
    labelsHTML += "<span class='info-label' onclick='removeLabel(event)'>" + label_obj.display_value + "</span>"
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
    updateLabels(labels);
  } else {
    document.getElementById("ai-act-info-with-labels").classList.add("display-none");
    document.getElementById("ai-act-info-no-labels").classList.remove("display-none");
  }
  closeModal();
}

function removeLabel(event) {
  let currentLabels = document.getElementById('labelsInput').value.split(",");
  const label_obj = labelMapper.find(event.target.textContent.trim());
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

class SessionStorageMonitor {
  constructor(key, targetValue, callback, interval = 1000) {
    this.key = key;
    this.targetValue = targetValue;
    this.callback = callback;
    this.interval = interval;
    this.timerId = null;
    this.hasValueChanged = false;
  }

  start() {
    // Check initial value
    const initialValue = sessionStorage.getItem(this.key);

    // If initial value matches target, we'll wait for it to change first
    this.hasValueChanged = initialValue !== this.targetValue;

    this.timerId = setInterval(() => {
      const currentValue = sessionStorage.getItem(this.key);

      // If value is different from target, mark that a change has occurred
      if (currentValue !== this.targetValue) {
        this.hasValueChanged = true;
      }

      // Only trigger callback if we've seen a change AND current value matches target
      if (this.hasValueChanged && currentValue === this.targetValue) {
        this.callback(currentValue);
        this.stop();
      }
    }, this.interval);
  }

  stop() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }
}

const monitor = new SessionStorageMonitor(
  'currentquestion',    // key to monitor
  "null",             // target value to watch for
  (value) => {
    console.log('currentquestion changed to null after having a different value');
    const jsonObject = JSON.parse(sessionStorage.getItem("labels"))
    const labels = convertLabels(Object.values(jsonObject).flatMap(v => Array.isArray(v) ? v : [v]).filter(v => v !== "")).map(obj => obj.label)
    updateLabels(labels);
  }
);


/**
 * Given any key, display value or list of synonyms, return an object with a label and display_value.
 * Used to map between different input for labels, but always get the right combination.
 * Defaults to the given value of the mapping is not found.
 */
class ValueMapper {
  constructor() {
    this.map = new Map();
  }

  addEntry(label, display_value, synonyms = []) {
    const standardFormat = { label, display_value };
    this.map.set(label.toLowerCase(), standardFormat);
    this.map.set(display_value.toLowerCase(), standardFormat);
    synonyms.forEach(synonym => {
      this.map.set(synonym.toLowerCase(), standardFormat);
    });
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

labelMapper.addEntry('hoog-risico-ai-systeem', 'Hoog risico AI Systeem', ['hoog-risico AI']);
labelMapper.addEntry('gebruiksverantwoordelijke', 'Gebruiksverantwoordelijke', [])
labelMapper.addEntry('aanbieder', 'Aanbieder', []);
labelMapper.addEntry('importeur', 'Importeur', []);
labelMapper.addEntry('distributeur', 'Distributeur', []);
labelMapper.addEntry('ai-systeem', 'AI Systeem', ['AI-Systeem','ai-systeem']);
labelMapper.addEntry('ai-model-voor-algemene-doeleinden', 'AI model voor algemen doeleinden', ['AI-model voor algemene doeleinden']);
labelMapper.addEntry('verboden-ai', 'Verboden AI', ['Verboden AI']);
labelMapper.addEntry('impactvol-algoritme', 'Impactvol algoritme', []);
labelMapper.addEntry('transparantieverplichting', 'Transparantieverplichting', []);
labelMapper.addEntry('ai-systeem-voor-algemene-doeleinden', 'AI Systeem voor algemene doeleinden', ['AI-Systeem voor algemene doeleinden']);
labelMapper.addEntry('systeemrisico', 'Systeemrisico', []);
labelMapper.addEntry('geen-hoog-risico-ai-systeem', 'Geen hoog-risico AI Systeem', ['geen hoog-risico AI']);
labelMapper.addEntry('open-source', 'Open source', []);
labelMapper.addEntry('in-gebruik', 'In gebruik', []);


window.addEventListener('message', (event) => {
  if (event.data.event === 'beslishulp-done') {
    // Handle the event
    console.log('Received beslishulp-done:', event.data.value);
    const jsonObject = JSON.parse(sessionStorage.getItem("labels"))
    const labels = convertLabels(Object.values(jsonObject).flatMap(v => Array.isArray(v) ? v : [v]).filter(v => v !== "")).map(obj => obj.label)
    updateLabels(labels);
    closeModal();
  }
});
