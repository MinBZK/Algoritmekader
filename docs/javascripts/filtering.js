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

// Wait for MkDocs Material content loading events
document$.subscribe(function () {
    initializeFlexibleFiltering();

    // Reinitialize when content is dynamically updated
    document.addEventListener('contentUpdated', function () {
        initializeFlexibleFiltering();
    });
});

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

    console.log("Filter values:", filterValues);

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
                    // Multi-select: all selected values must be present in the cell
                    if (filterValue.length > 0) {
                        const hasAllValues = filterValue.every(value => cellText.indexOf(value) > -1);
                        if (!hasAllValues) {
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
            const uitzonderingMatchConditions = (row.getAttribute("data-uitzondering") || "")
                .split(",")
                .map(item => item.trim())
                .filter(item => item !== "");

            let labelMatch = labelMatchConditions === "" ||
                            (typeof evaluateLabelExpression !== 'undefined' &&
                             evaluateLabelExpression(labelMatchConditions, labelsToFilterOn));

            let uitzonderingMatch = typeof anyExpressionMatches !== 'undefined' &&
                                   anyExpressionMatches(uitzonderingMatchConditions, labelsToFilterOn);

            if (uitzonderingMatch && labelMatch) {
                labelMatch = false;
            }

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
