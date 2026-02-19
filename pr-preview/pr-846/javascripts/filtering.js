/**
 * FLEXIBLE FILTERING SYSTEM
 * =========================
 *
 * This JavaScript automatically adapts to column configuration changes in Python.
 * It reads column mapping from data-attributes and creates flexible filtering.
 *
 * NO HARDCODED COLUMN INDICES OR ELEMENT IDS!
 *
 * How it works:
 * 1. Python injects column mapping via data-column-mapping attribute
 * 2. JavaScript reads this mapping to know which columns exist and their positions
 * 3. Filters are identified by data-filter-column attributes
 * 4. Everything scales automatically with configuration changes
 */

// Global variables for configuration
let columnMapping = {};
let filterElements = {};

// Initialize on DOM ready without interfering with MkDocs Material skiplink
(function() {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeFlexibleFiltering);
    } else {
        initializeFlexibleFiltering();
    }

    // Reinitialize when content is dynamically updated
    document.addEventListener('contentUpdated', function () {
        initializeFlexibleFiltering();
    });

    // Handle MkDocs Material SPA navigation
    if (typeof document$ !== 'undefined') {
        document$.subscribe(function() {
            // Small delay to ensure DOM is ready
            setTimeout(initializeFlexibleFiltering, 100);
        });
    }

    // Additional fallback for navigation events
    window.addEventListener('popstate', function() {
        setTimeout(initializeFlexibleFiltering, 100);
    });
})();

/**
 * Main initialization function
 */
function initializeFlexibleFiltering() {
    console.log("Initializing flexible filtering system...");

    // Step 1: Read column mapping from Python-generated data
    if (!readColumnMapping()) {
        console.warn("No column mapping found, filtering not available");
        return;
    }

    // Step 2: Initialize filter elements
    initializeFilterElements();

    // Step 3: Apply any special ordering (e.g., levenscyclus)
    applySpecialOrdering();

    // Step 4: Initialize Choices.js for multi-select filters
    initializeChoices();

    // Step 5: Attach event listeners
    attachFilterListeners();

    console.log("Flexible filtering system initialized:", {
        columnMapping,
        filterElements
    });
}

/**
 * Read column mapping from Python-generated data-attributes
 */
function readColumnMapping() {
    const container = document.getElementById('table-container');
    if (!container) {
        console.warn("Table container not found");
        return false;
    }

    const mappingData = container.getAttribute('data-column-mapping');
    if (!mappingData) {
        console.warn("Column mapping data not found");
        return false;
    }

    try {
        columnMapping = JSON.parse(mappingData);
        console.log("Column mapping loaded:", columnMapping);
        return true;
    } catch (error) {
        console.error("Failed to parse column mapping:", error);
        return false;
    }
}

/**
 * Find and catalog all filter elements
 */
function initializeFilterElements() {
    filterElements = {};

    // Find all filter elements by their data-filter-column attribute
    const filters = document.querySelectorAll('[data-filter-column]');

    filters.forEach(element => {
        const columnKey = element.getAttribute('data-filter-column');
        if (columnKey && columnMapping[columnKey]) {
            filterElements[columnKey] = {
                element: element,
                columnIndex: columnMapping[columnKey].index
            };
            console.log(`Registered filter for column '${columnKey}' at index ${columnMapping[columnKey].index}`);
        }
    });

    // Also register search input if it exists
    const searchInput = document.getElementById('filterInput');
    if (searchInput) {
        filterElements['search'] = {
            element: searchInput,
            columnIndex: null // Search works across all columns
        };
    }
}

/**
 * Apply special ordering for specific columns (like levenscyclus)
 */
function applySpecialOrdering() {
    // Apply levenscyclus ordering if that column exists
    if (filterElements['levenscyclus']) {
        setLevenscyclusOrder(filterElements['levenscyclus'].element);
    }
}

/**
 * Function to set a specific order to the levenscyclus dropdown
 */
function setLevenscyclusOrder(selectElement) {
    if (!selectElement) return;

    // Define the desired order for levenscyclus items
    const desiredOrder = [
        'organisatieverantwoordelijkheden',
        'probleemanalyse',
        'ontwerp',
        'dataverkenning-en-datapreparatie',
        'ontwikkelen',
        'verificatie-en-validatie',
        'implementatie',
        'monitoring-en-beheer',
        'uitfaseren',
    ];

    // Get options and map to their values
    const options = Array.from(selectElement.options);

    // Sort the options based on the desired order
    options.sort((a, b) => {
        return desiredOrder.indexOf(a.value) - desiredOrder.indexOf(b.value);
    });

    // Clear the existing options and append them in the correct order
    selectElement.innerHTML = '';

    // Append sorted options back into the select
    options.forEach(option => selectElement.appendChild(option));

    // Reinitialize Choices.js with the sorted options if it exists
    if (selectElement.choicesInstance) {
        selectElement.choicesInstance.setChoices(
            options.map(option => ({
                value: option.value,
                label: option.text,
                selected: option.selected,
                disabled: option.disabled
            })),
            'value',
            'label',
            false
        );
    }
}

/**
 * Initialize Choices.js for multi-select filters
 */
function initializeChoices() {
    const elements = document.querySelectorAll('.js-example-basic-multiple');

    elements.forEach(function (element) {
        // Initialize Choices.js for the first time
        if (!element.choicesInstance) {
            const choices = new Choices(element, {
                removeItemButton: true,
                placeholder: true,
                searchEnabled: true,
                noResultsText: 'Geen resultaten',
                noChoicesText: 'Geen keuzes beschikbaar',
                itemSelectText: 'Klik om te selecteren',
                resetScrollPosition: false,
                shouldSort: false,
                shouldSortItems: false,
                sorter: (a, b) => 0
            });

            // Store the Choices.js instance to avoid re-initialization
            element.choicesInstance = choices;
        }
    });
}

/**
 * Attach event listeners to all filter elements
 */
function attachFilterListeners() {
    Object.keys(filterElements).forEach(columnKey => {
        const filterInfo = filterElements[columnKey];
        const element = filterInfo.element;

        if (element) {
            // Use 'input' for text inputs and 'change' for selects
            const eventType = element.tagName.toLowerCase() === 'input' ? 'input' : 'change';
            element.addEventListener(eventType, filterTable);
            console.log(`Attached ${eventType} listener to ${columnKey} filter`);
        }
    });
}

/**
 * Evaluates a label expression against a list of selected labels using labelMapper (oude logica)
 * @param {string} expression - Boolean expression like "(rol-ai-act-aanbieder || rol-ai-act-gebruiksverantwoordelijke) && (risicogroep-hoog-risico-ai-systeem)"
 * @param {Array} selectedLabels - Array of selected label strings
 * @returns {boolean} - True if the expression matches
 */
function evaluateLabelExpression(expression, selectedLabels) {
    if (!expression || expression.trim() === '') {
        return false; // oude logica: lege expressie matcht niks
    }

    try {
        // Transformeer labels in de expressie naar hasLabel functie
        const transformedExpression = expression.replace(/["']?([a-zA-Z0-9-_]+)["']?/g, "hasLabel('$1')");

        // Maak de functie die geëvalueerd wordt
        const functionBody = `
            const hasLabel = (label) => {
                // Controleer of een van de geselecteerde labels overeenkomt via labelMapper
                for (const selLabel of selectedLabels) {
                    const mappedLabel = labelMapper.find(selLabel)?.label;
                    if (mappedLabel && mappedLabel === label) return true;
                }
                return false;
            };
            return ${transformedExpression};
        `;

        return new Function('selectedLabels', functionBody)(selectedLabels);
    } catch (error) {
        console.error('Error evaluating label expression (oude logica):', error, 'Expression:', expression);
        return false;
    }
}

/**
 * Checks if any of the given expressions match the selected labels (oude logica)
 * @param {Array} expressions - Array of expression strings
 * @param {Array} selectedLabels - Array of selected label strings
 * @returns {boolean} - True if any expression matches
 */
function anyExpressionMatches(expressions, selectedLabels) {
    if (!expressions || expressions.length === 0) return false;

    return expressions.some(expression =>
        evaluateLabelExpression(expression, selectedLabels)
    );
}

/**
 * FLEXIBLE FILTERING FUNCTION
 * ============================
 *
 * This function automatically adapts to any column configuration.
 * No more hardcoded column indices!
 */
function filterTable() {
    console.log("filterTable called with flexible system");

    const table = document.getElementById("myTable");
    if (!table) {
        console.warn("Table not found");
        return;
    }

    const rows = table.getElementsByTagName("tr");
    if (rows.length <= 1) {
        console.warn("No data rows found");
        return;
    }

    // Collect all filter values
    const filterValues = {};

    Object.keys(filterElements).forEach(columnKey => {
        const filterInfo = filterElements[columnKey];
        const element = filterInfo.element;

        if (element) {
            if (element.tagName.toLowerCase() === 'input') {
                // Text search
                filterValues[columnKey] = element.value.toUpperCase();
            } else if (element.tagName.toLowerCase() === 'select') {
                // Multi-select
                filterValues[columnKey] = Array.from(element.options)
                    .filter(option => option.selected)
                    .map(option => option.value.toUpperCase());
            }
        }
    });

    // Get labels for AI Act filtering (if exists)
    const labelsInput = document.getElementById("labelsInput");
    let labelsToFilterOn = [];

    if (labelsInput) {
        const labelsInputValues = labelsInput.value.split(",")
            .map(item => item.trim())
            .filter(item => item !== "");

        if (labelsInputValues.length > 0) {
            labelsToFilterOn.push(...labelsInputValues);
            // Apply label mapper logic if available
            if (typeof labelMapper !== 'undefined') {
                for (const [_, labels] of labelMapper.groups) {
                    let foundLabelInGroup = labelsInputValues.some(label => labels.has(label));
                    if (!foundLabelInGroup) {
                        labelsToFilterOn.push(...labels);
                    }
                }
            }
        }
    }

    // Fix missing labels for AI-models for general purposes
    const hasAiModel = labelsToFilterOn.includes('soort-toepassing-ai-model-voor-algemene-doeleinden');
    const hasSysteemrisico = labelsToFilterOn.includes('systeemrisico-systeemrisico');

    if (hasAiModel && hasSysteemrisico) {
        // Add missing "niet-van-toepassing" labels
        if (!labelsToFilterOn.includes('risicogroep-niet-van-toepassing')) {
            labelsToFilterOn.push('risicogroep-niet-van-toepassing');
        }
        if (!labelsToFilterOn.includes('transparantieverplichting-niet-van-toepassing')) {
            labelsToFilterOn.push('transparantieverplichting-niet-van-toepassing');
        }

        // Remove exception label that incorrectly blocks relevant requirements
        const exceptionIndex = labelsToFilterOn.indexOf('risicogroep-uitzondering-van-toepassing');
        if (exceptionIndex > -1) {
            labelsToFilterOn.splice(exceptionIndex, 1);
        }
    }

    // Filter each row
    for (let i = 1; i < rows.length; i++) { // Skip header row
        const row = rows[i];
        const cells = row.getElementsByTagName("td");

        let showRow = true;

        // Check each filter
        Object.keys(filterValues).forEach(columnKey => {
            if (!showRow) return; // Already hidden

            const filterValue = filterValues[columnKey];
            const columnIndex = filterElements[columnKey].columnIndex;

            if (columnKey === 'search') {
                // Search across all visible columns
                if (filterValue) {
                    const allText = Array.from(cells)
                        .map(cell => cell.textContent || cell.innerText)
                        .join(' ')
                        .toUpperCase();

                    if (allText.indexOf(filterValue) === -1) {
                        showRow = false;
                    }
                }
            } else if (columnIndex !== null && columnIndex < cells.length) {
                // Filter specific column
                const cellText = (cells[columnIndex].textContent || cells[columnIndex].innerText).toUpperCase();

                if (Array.isArray(filterValue)) {
                    // Multi-select: any selected value must be present in the cell (OR logic)
                    if (filterValue.length > 0) {
                        const hasAnyValue = filterValue.some(value => cellText.indexOf(value) > -1);
                        if (!hasAnyValue) {
                            showRow = false;
                        }
                    }
                } else if (filterValue) {
                    // Text filter
                    if (cellText.indexOf(filterValue) === -1) {
                        showRow = false;
                    }
                }
            }
        });

        // AI Act label filtering (if applicable)
        if (showRow && labelsToFilterOn.length > 0) {
            const labelMatchConditions = row.getAttribute("data-labels") || "";
            let labelMatch = labelMatchConditions === "" ||
                            (typeof evaluateLabelExpression !== 'undefined' &&
                             evaluateLabelExpression(labelMatchConditions, labelsToFilterOn));

            if (!labelMatch) {
                showRow = false;
            }
        }

        // Show or hide the row
        row.style.display = showRow ? "" : "none";
    }

    // Update counter and trigger events
    updateFilterCount();
    document.dispatchEvent(new Event('contentUpdated'));
}

/**
 * Update the visible row count
 */
function updateFilterCount() {
    const table = document.getElementById('myTable');
    if (!table) return;

    const visibleRows = Array.from(table.querySelectorAll('tbody tr')).filter(row =>
        row.style.display !== 'none'
    ).length;

    const countElement = document.getElementById('total-count');
    if (countElement) {
        countElement.textContent = visibleRows;
    }
}

// Export functions for backwards compatibility
window.filterTable = filterTable;
window.initializeFlexibleFiltering = initializeFlexibleFiltering;
