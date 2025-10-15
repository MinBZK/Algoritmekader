// Wait for MkDocs Material content loading events
document$.subscribe(function() {
    // Initialize Choices.js when the document is loaded or content is switched
    initializeChoices();

    // Set active navigation link on page load or after navigation
    setActiveLink();

    // Attach event listeners to the filters for table filtering
    attachFilterListeners();
    
    // Initialize skiplink functionality after navigation
    initializeSkiplinks();

    // Reinitialize Choices.js when content is dynamically updated
    document.addEventListener('contentUpdated', function() {
        initializeChoices();
        attachFilterListeners(); // Re-attach listeners after content updates
        initializeSkiplinks(); // Re-initialize skiplinks after content updates
    });
});

// Track if user is using keyboard navigation
let isKeyboardUser = false;
document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        isKeyboardUser = true;
    }
});

document.addEventListener('mousedown', function() {
    isKeyboardUser = false;
});



// Also catch location changes for SPA navigation
if (typeof location$ !== 'undefined') {
    location$.subscribe(function() {
        setTimeout(() => {
            initializeSkiplinks();
            // Only focus skiplink if user was using keyboard
            if (isKeyboardUser) {
                setTimeout(() => {
                    const skiplink = document.querySelector('.custom-skiplink');
                    if (skiplink) {
                        skiplink.focus();
                    }
                }, 50);
            }
        }, 100);
    });
}

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

// Function to initialize skiplink functionality after page navigation
function initializeSkiplinks() {
    // Always create our own skiplink to ensure it works after SPA navigation
    createSkiplink();
}

// Create a skiplink if none exists
function createSkiplink() {
    // Remove any existing custom skiplinks first
    const existingCustom = document.querySelector('.custom-skiplink');
    if (existingCustom) {
        existingCustom.remove();
    }
    
    const skiplink = document.createElement('a');
    skiplink.href = '#main-content';
    skiplink.textContent = 'Ga naar inhoud';
    skiplink.className = 'custom-skiplink';
    skiplink.style.cssText = `
        position: fixed !important;
        top: -50px !important;
        left: 10px !important;
        z-index: 9999 !important;
        color: white !important;
        background: #007bc7 !important;
        padding: 10px 20px !important;
        text-decoration: none !important;
        border-radius: 4px !important;
        transition: top 0.3s !important;
        font-weight: bold !important;
        font-size: 14px !important;
        border: 2px solid white !important;
    `;
    
    // Show on focus
    skiplink.addEventListener('focus', function() {
        this.style.top = '10px !important';
    });
    
    skiplink.addEventListener('blur', function() {
        this.style.top = '-50px !important';
    });
    
    // Add click handler
    skiplink.addEventListener('click', handleSkiplinkClick);
    
    // Insert at beginning of body
    document.body.insertBefore(skiplink, document.body.firstChild);
    
    // Make sure it's the first tab stop
    skiplink.tabIndex = 1;
    
}

// Handle skiplink clicks with proper focus management
function handleSkiplinkClick(event) {
    event.preventDefault();
    
    let href = this.getAttribute('href');
    
    // Extract fragment from full URL if needed
    if (href.includes('#')) {
        href = '#' + href.split('#')[1];
    }
    
    const targetId = href.substring(1); // Remove the #
    
    // Try to find the target element
    let targetElement = document.getElementById(targetId);
    
    // If target not found, try common main content selectors
    if (!targetElement) {
        const fallbackSelectors = [
            '.md-content__inner',
            '.md-content', 
            'main',
            '[role="main"]',
            '.md-main__inner',
            'h1'
        ];
        
        for (const selector of fallbackSelectors) {
            targetElement = document.querySelector(selector);
            if (targetElement) break;
        }
    }
    
    if (targetElement) {
        // Make element focusable if it isn't already
        if (!targetElement.hasAttribute('tabindex')) {
            targetElement.setAttribute('tabindex', '-1');
        }
        
        // Focus the target element
        targetElement.focus();
        
        // Scroll to the element smoothly
        targetElement.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
        
        // Optional: Add visual indication that focus has moved
        targetElement.style.outline = '2px solid #007bc7';
        targetElement.style.outlineOffset = '2px';
        
        // Remove outline after a short delay
        setTimeout(() => {
            targetElement.style.outline = '';
            targetElement.style.outlineOffset = '';
        }, 1500);
        
    } else {
        
        // Fallback: scroll to top of content area
        const contentArea = document.querySelector('.md-content') || document.querySelector('main');
        if (contentArea) {
            contentArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
}
