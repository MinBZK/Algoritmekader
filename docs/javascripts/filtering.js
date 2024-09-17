// Wait for MkDocs Material content loading events
document$.subscribe(function () {
    // Initialize Choices.js when the document is loaded or content is switched
    initializeChoices();

    // Attach event listeners to the filters for table filtering
    attachFilterListeners();

    // Reinitialize Choices.js and filter listeners when content is dynamically updated
    document.addEventListener('contentUpdated', function () {
        initializeChoices();
        attachFilterListeners();
    });
});

// Function to initialize Choices.js for multi-select filters
function initializeChoices() {
    const elements = document.querySelectorAll('.js-example-basic-multiple');

    elements.forEach(function (element) {
        // Check if Choices.js is already initialized
        if (!element.choicesInstance) {
            const choices = new Choices(element, {
                removeItemButton: true,
                placeholder: true,
                searchEnabled: true,
                noResultsText: 'Geen resultaten',
                noChoicesText: 'Geen keuzes beschikbaar',
                itemSelectText: 'Klik om te selecteren',
                resetScrollPosition: false
            });

            // Store the Choices.js instance to avoid re-initialization
            element.choicesInstance = choices;
            console.log("Choices.js initialized");
        }
    });
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

    for (var i = 1; i < tr.length; i++) { // Skip header row
        var td = tr[i].getElementsByTagName("td")[0];  // Maatregelen column (td[0])
        var roles = tr[i].getElementsByTagName("td")[1]; // Rollen column (td[1])
        var lc = tr[i].getElementsByTagName("td")[2];   // Levenscyclus column (td[2])
        var onderwerpen = tr[i].getElementsByTagName("td")[3]; // Onderwerpen column (td[3])

        if (td && roles && lc && onderwerpen) {
            var txtValue = td.textContent || td.innerText;  // Maatregelen value
            var txtValue2 = roles.textContent || roles.innerText; // Rollen value
            var txtValue3 = lc.textContent || lc.innerText; // Levenscyclus value
            var txtValue4 = onderwerpen.textContent || onderwerpen.innerText; // Onderwerpen value

            console.log(`Row ${i} values: `, { txtValue, txtValue2, txtValue3, txtValue4 });

            // Check if all selected filters are present
            var roleMatch = selectedRoles.every(role => txtValue2.toUpperCase().indexOf(role) > -1);
            var lcMatch = selectedLevenscyclus.every(lc => txtValue3.toUpperCase().indexOf(lc) > -1);
            var onderwerpMatch = selectedOnderwerpen.every(onderwerp => txtValue4.toUpperCase().indexOf(onderwerp) > -1);

            if (txtValue.toUpperCase().indexOf(filter) > -1 && roleMatch && lcMatch && onderwerpMatch) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }

    // Trigger contentUpdated to reinitialize Choices.js after filtering
    document.dispatchEvent(new Event('contentUpdated'));
}

// Function to display vereisten when a specific maatregel is clicked
function showVereisten(link) {
    // Get the vereisten associated with the clicked maatregel from the data attribute
    const vereisten = JSON.parse(link.getAttribute('data-vereisten'));

    // Find or create a container for displaying vereisten
    let vereistenTable = document.getElementById('vereistenTable');
    if (!vereistenTable) {
        vereistenTable = document.createElement('table');
        vereistenTable.id = 'vereistenTable';
        vereistenTable.innerHTML = `
            <thead>
                <tr>
                    <th>Vereisten</th>
                </tr>
            </thead>
            <tbody></tbody>
        `;
        document.body.appendChild(vereistenTable); // You can place it in a specific container
    }

    // Clear previous vereisten content
    const tbody = vereistenTable.querySelector('tbody');
    tbody.innerHTML = '';

    // Populate the table with the vereisten
    vereisten.forEach(vereiste => {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.textContent = vereiste;
        row.appendChild(cell);
        tbody.appendChild(row);
    });

    // Optionally scroll to the vereisten table or focus on it
    vereistenTable.scrollIntoView({ behavior: 'smooth' });
}