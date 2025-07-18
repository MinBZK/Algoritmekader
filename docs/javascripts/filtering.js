// Wait for MkDocs Material content loading events
document$.subscribe(function () {
    // Ensure order is applied before initializing Choices.js
    setLevenscyclusOrder();

    // Initialize Choices.js after order has been set
    initializeChoices();

    // Attach event listeners to the filters for table filtering
    attachFilterListeners();

    // Reinitialize Choices.js and filter listeners when content is dynamically updated
    document.addEventListener('contentUpdated', function () {
        setLevenscyclusOrder();  // Reapply order after content update
        initializeChoices();
        attachFilterListeners();
    });
});

// Function to initialize Choices.js for multi-select filters
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
                shouldSort: false,  // Prevent sorting of options
                shouldSortItems: false,  // Prevent sorting of selected items
                sorter: (a, b) => 0  // Custom sorting function (no sorting)
            });

            // Store the Choices.js instance to avoid re-initialization
            element.choicesInstance = choices;
        }
    });
}

// Function to set a specific order to the levenscyclus dropdown
function setLevenscyclusOrder() {
    const levenscyclusSelect = document.getElementById("filterLevenscyclusSelect");
    if (levenscyclusSelect) {
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
        const options = Array.from(levenscyclusSelect.options);

        // Sort the options based on the desired order
        options.sort((a, b) => {
            return desiredOrder.indexOf(a.value) - desiredOrder.indexOf(b.value);
        });

        // Clear the existing options and append them in the correct order
        levenscyclusSelect.innerHTML = ''; // Empty the select

        // Append sorted options back into the select
        options.forEach(option => levenscyclusSelect.appendChild(option));

        // Reinitialize Choices.js with the sorted options
        if (levenscyclusSelect.choicesInstance) {
            // Set the sorted choices back into the Choices.js instance
            levenscyclusSelect.choicesInstance.setChoices(
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
}

// Attach event listeners to trigger table filtering when filters change
function attachFilterListeners() {
    var filterSelect = document.getElementById("filterSelect");
    var levenscyclusSelect = document.getElementById("filterLevenscyclusSelect");
    var onderwerpSelect = document.getElementById("filterOnderwerpSelect");
    var filterInput = document.getElementById("filterInput");

    if (filterSelect) {
        filterSelect.addEventListener('change', filterTable);
    }

    if (levenscyclusSelect) {
        levenscyclusSelect.addEventListener('change', filterTable);
    }

    if (onderwerpSelect) {
        onderwerpSelect.addEventListener('change', filterTable);
    }

    if (filterInput) {
        filterInput.addEventListener('input', filterTable);
    }
}

// Function for filtering a table based on selected choices
function filterTable() {
    console.log("filterTable is aangeroepen");

    var input = document.getElementById("filterInput");
    var filter = input ? input.value.toUpperCase() : "";

    var select = document.getElementById("filterSelect"); // Rollen filter
    var selectedRoles = Array.from(select.options)
        .filter(option => option.selected)
        .map(option => option.value.toUpperCase());

    var levenscyclusSelect = document.getElementById("filterLevenscyclusSelect"); // Levenscyclus filter
    var selectedLevenscyclus = Array.from(levenscyclusSelect.options)
        .filter(option => option.selected)
        .map(option => option.value.toUpperCase());

    var onderwerpSelect = document.getElementById("filterOnderwerpSelect"); // Onderwerpen filter
    var selectedOnderwerpen = Array.from(onderwerpSelect.options)
        .filter(option => option.selected)
        .map(option => option.value.toUpperCase());

    var table = document.getElementById("myTable");
    var tr = table ? table.getElementsByTagName("tr") : [];

    var labelsInput = document.getElementById("labelsInput").value.split(",").map(item => item.trim()).filter(item => item !== "");

    var labelsToFilterOn = []
    if (labelsInput.length > 0) {
        labelsToFilterOn.push(...labelsInput);
        // prefill all labels that are missing, the rule is:
        for (const [_, labels] of labelMapper.groups) {
            let foundLabelInGroup = labelsInput.some(label => labels.has(label));
            if (!foundLabelInGroup) {
                labelsToFilterOn.push(...labels);
            }
        }
    }

    for (let i = 1; i < tr.length; i++) { // Skip header row
        var labelMatchConditions = ""
        if (tr[i].hasAttribute("data-labels")) {
            labelMatchConditions = tr[i].getAttribute("data-labels")
        }
        var uitzonderingMatchConditions = [];
        if (tr[i].hasAttribute("data-uitzondering")) {
            uitzonderingMatchConditions = tr[i].getAttribute("data-uitzondering").split(",").map(item => item.trim()).filter(item => item !== "");
        }

        var td = tr[i].getElementsByTagName("td")[1];  // Maatregelen column (td[0])
        var roles = tr[i].getElementsByTagName("td")[2]; // Rollen column (td[1])
        var lc = tr[i].getElementsByTagName("td")[3];   // Levenscyclus column (td[2])
        var onderwerpen = tr[i].getElementsByTagName("td")[4]; // Onderwerpen column (td[3])

        if (td && roles && lc && onderwerpen) {
            var txtValue = td.textContent || td.innerText;  // Maatregelen value
            var txtValue2 = roles.textContent || roles.innerText; // Rollen value
            var txtValue3 = lc.textContent || lc.innerText; // Levenscyclus value
            var txtValue4 = onderwerpen.textContent || onderwerpen.innerText; // Onderwerpen value

            if (tr[i].getElementsByTagName("td")[2].querySelectorAll(".debug").length === 0) {
                tr[i].getElementsByTagName("td")[2].innerHTML += "<div class='debug'></div>";
            }

            // Check if all selected filters are present
            var roleMatch = selectedRoles.every(role => txtValue2.toUpperCase().indexOf(role) > -1);
            var lcMatch = selectedLevenscyclus.every(lc => txtValue3.toUpperCase().indexOf(lc) > -1);
            var onderwerpMatch = selectedOnderwerpen.every(onderwerp => txtValue4.toUpperCase().indexOf(onderwerp) > -1);
            var labelMatch = labelMatchConditions === "" || labelsToFilterOn.length === 0 || evaluateLabelExpression(labelMatchConditions, labelsToFilterOn);
            var uitzonderingMatch = anyExpressionMatches(uitzonderingMatchConditions, labelsInput);

            if (uitzonderingMatch && labelMatch) {
                labelMatch = false
            }

            if (txtValue.toUpperCase().indexOf(filter) > -1 && roleMatch && lcMatch && onderwerpMatch && labelMatch) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }

    // Trigger contentUpdated to reinitialize Choices.js after filtering
    document.dispatchEvent(new Event('contentUpdated'));
    updateFilterCount();
}

/*
Given an expression like: ("ai-systeem-voor-algemene-doeleinden" || "ai-systeem") && "open-source" && "geen-transparantieverplichting" && "geen-hoog-risico-ai-systeem"
and an array of labels, evaluates the expression and returns true or false.
 */
function evaluateLabelExpression(expression, labels) {
    if (expression === "" || labels.length === 0) {
        return false;
    }
    // replace the string with function calls to hasLabel so we get true / false values
    const transformedExpression = expression.replace(/["']?([a-zA-Z0-9-_]+)["']?/g, "hasLabel('$1')");

    // create the function that executes our expression
    const functionBody =
      'const hasLabel = (label) => labels.includes(labelMapper.find(label).label);' +
      'return ' + transformedExpression + ';';

    try {
        return new Function('labels', functionBody)(labels);
    } catch (error) {
        console.error('Error evaluating expression:', error);
        return false;
    }
}

/**
 * Given a list of expressions and the current labels, returns true if any expression matches with the given labels, else false
 * @param expressions a list of expressions, like:
 * ["uitzondering-van-toepassing", ("ai-systeem-voor-algemene-doeleinden" || "ai-systeem") && "open-source" && "geen-transparantieverplichting" && "geen-hoog-risico-ai-systeem"]
 * @param labels the labels the test against, like ["ai-systeem","uitzondering-van-toepassing"]
 * @returns true if any expression matches with the given labels, else false
 */
function anyExpressionMatches(expressions, labels) {
    return expressions.some(expression => evaluateLabelExpression(expression, labels));
}

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
