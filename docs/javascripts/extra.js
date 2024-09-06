// Wait for MkDocs Material content loading events
document$.subscribe(function() {
    // Initialize Choices.js when the document is loaded or content is switched
    initializeChoices();

    // Set active navigation link on page load or after navigation
    setActiveLink();

    // Attach event listeners to the filters for table filtering
    attachFilterListeners();

    // Reinitialize Choices.js when content is dynamically updated
    document.addEventListener('contentUpdated', function() {
        initializeChoices();
        attachFilterListeners(); // Re-attach listeners after content updates
    });
});

// Function to initialize Choices.js for multi-select filters
function initializeChoices() {
    const elements = document.querySelectorAll('.js-example-basic-multiple');

    elements.forEach(function(element) {
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

// Function to set active link in the navigation based on the current page
function setActiveLink() {
    var currentUrl = window.location.pathname;

    // Remove all existing active classes
    document.querySelectorAll('.md-nav__item--active, .md-nav__link--active, .md-nav__dropdown-item--active, .md-nav__dropdown-link--active').forEach(function(el) {
        el.classList.remove('md-nav__item--active', 'md-nav__link--active', 'md-nav__dropdown-item--active', 'md-nav__dropdown-link--active');
    });

    // Don't set any active class if on root URL
    if (currentUrl === '/') {
        return;
    }

    // Function to set the active class for a given element
    function setActiveClass(el) {
        el.classList.add('md-nav__link--active');
        var item = el.closest('.md-nav__item');
        if (item) {
            item.classList.add('md-nav__item--active');
        }
    }

    // Function to check if the link matches the current URL
    function isPathActive(linkPath) {
        return currentUrl === linkPath || currentUrl.startsWith(linkPath + '/');
    }

    // Set active class for top navigation links
    document.querySelectorAll('.md-nav--top .md-nav__link').forEach(function(link) {
        var linkPath = new URL(link.href).pathname;
        if (isPathActive(linkPath)) {
            setActiveClass(link);
        }
    });

    // Set active class for dropdown links
    document.querySelectorAll('.md-nav__dropdown-link').forEach(function(link) {
        var linkPath = new URL(link.href).pathname;
        if (isPathActive(linkPath)) {
            link.classList.add('md-nav__dropdown-link--active');
            var dropdownItem = link.closest('.md-nav__dropdown-item');
            if (dropdownItem) {
                dropdownItem.classList.add('md-nav__dropdown-item--active');
                var parentItem = dropdownItem.closest('.md-nav__item');
                if (parentItem) {
                    parentItem.classList.add('md-nav__item--active');
                }
            }
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

// Example filterTable function for filtering a table based on selected choices
function filterTable() {
    console.log("filterTable is aangeroepen");

    var input = document.getElementById("filterInput");
    var filter = input ? input.value.toUpperCase() : "";

    var select = document.getElementById("filterSelect");
    var selectedRoles = Array.from(select.options)
        .filter(option => option.selected)
        .map(option => option.value.toUpperCase());

    var levenscyclusSelect = document.getElementById("filterLevenscyclusSelect");
    var selectedLevenscyclus = Array.from(levenscyclusSelect.options)
        .filter(option => option.selected)
        .map(option => option.value.toUpperCase());

    var onderwerpSelect = document.getElementById("filterOnderwerpSelect");
    var selectedOnderwerpen = Array.from(onderwerpSelect.options)
        .filter(option => option.selected)
        .map(option => option.value.toUpperCase());

    var table = document.getElementById("myTable");
    var tr = table ? table.getElementsByTagName("tr") : [];

    for (var i = 1; i < tr.length; i++) { // Skip header row
        var td = tr[i].getElementsByTagName("td")[0];
        var roles = tr[i].getElementsByTagName("td")[2]; // Update this for correct roles
        var lc = tr[i].getElementsByTagName("td")[3];   // levenscyclus
        var onderwerpen = tr[i].getElementsByTagName("td")[1]; // Updated to get onderwerpen from td[1]

        if (td && roles && lc && onderwerpen) {
            var txtValue = td.textContent || td.innerText;
            var txtValue2 = onderwerpen.textContent || onderwerpen.innerText; // 'onderwerpen' now using value2
            var txtValue3 = roles.textContent || roles.innerText;
            var txtValue4 = lc.textContent || lc.innerText;

            // Check if all selected filters are present
            var onderwerpMatch = selectedOnderwerpen.every(onderwerp => txtValue2.toUpperCase().indexOf(onderwerp) > -1);
            var roleMatch = selectedRoles.every(role => txtValue3.toUpperCase().indexOf(role) > -1);
            var lcMatch = selectedLevenscyclus.every(lc => txtValue4.toUpperCase().indexOf(lc) > -1);

            if (txtValue.toUpperCase().indexOf(filter) > -1 && onderwerpMatch && roleMatch && lcMatch) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }

    // Trigger contentUpdated to reinitialize Choices.js after filtering
    document.dispatchEvent(new Event('contentUpdated'));
}