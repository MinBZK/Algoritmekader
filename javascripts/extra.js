// Simple initialization for Choices.js and filtering - no interference with MkDocs Material skiplink
(function() {
    // Initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initialize);
    } else {
        initialize();
    }

    function initialize() {
        initializeChoices();
        initializeAccessibleAbbreviations();
    }

    // Handle MkDocs Material SPA navigation
    if (typeof document$ !== 'undefined') {
        document$.subscribe(function() {
            // Reset focus to document body to ensure skiplink is first tab stop
            document.body.setAttribute('tabindex', '-1');
            document.body.focus();

            // Small delay to ensure DOM is ready
            setTimeout(initialize, 100);
        });
    }

    // Additional fallback for navigation events
    window.addEventListener('popstate', function() {
        setTimeout(initialize, 100);
    });

    // Handle content updates
    document.addEventListener('contentUpdated', function () {
        initialize();
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
            }
        });
    }


    // Function to initialize accessible abbreviations and tooltips
    function initializeAccessibleAbbreviations() {
        // Handle abbreviations
        const abbreviations = document.querySelectorAll('abbr[title]');
        abbreviations.forEach(function(abbr) {
            makeElementAccessibleGlobal(abbr);
        });

        // Handle ALL elements with title attributes (including MkDocs tooltips)
        const allTitledElements = document.querySelectorAll('[title]:not(abbr):not(.info-icon)');

        allTitledElements.forEach(function(element) {
            const inButton = element.closest('button');
            const inLink = element.closest('a[href]');
            const hasTabindex = element.hasAttribute('tabindex');

            // Make accessible unless it's already fully accessible
            if (!hasTabindex && !inButton && !inLink) {
                makeElementAccessibleGlobal(element);
            }
        });
    }

    function makeElementAccessibleGlobal(element) {
        // Remove from tab order to avoid interfering with skiplink navigation
        if (!element.hasAttribute('tabindex')) {
            element.setAttribute('tabindex', '-1');
        }

        // Add keyboard event listeners for better accessibility
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
            const prefix = element.tagName === 'ABBR' ? '' : 'Definitie: ';
            const label = element.tagName === 'ABBR' ? element.textContent + ': ' + title : prefix + title;
            element.setAttribute('aria-label', label);
        }

        // Add role for non-abbr elements
        if (element.tagName !== 'ABBR' && !element.hasAttribute('role')) {
            element.setAttribute('role', 'button');
        }
    }

    // Make functions globally available
    window.initializeAccessibleAbbreviations = initializeAccessibleAbbreviations;
    window.makeElementAccessibleGlobal = makeElementAccessibleGlobal;

    // Add a MutationObserver to catch dynamically added content
    const tooltipObserver = new MutationObserver(function(mutations) {
        let shouldReinit = false;

        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                Array.from(mutation.addedNodes).forEach(function(node) {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        // Check if the added node or its children have title attributes
                        const hasTitle = node.hasAttribute && node.hasAttribute('title');
                        const hasChildrenWithTitle = node.querySelectorAll && node.querySelectorAll('[title]').length > 0;

                        if (hasTitle || hasChildrenWithTitle) {
                            shouldReinit = true;
                        }
                    }
                });
            }
        });

        if (shouldReinit) {
            setTimeout(initializeAccessibleAbbreviations, 100);
        }
    });

    // Start observing when DOM is ready
    document.addEventListener('DOMContentLoaded', function() {
        // Observe the entire body for changes
        tooltipObserver.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
})();
