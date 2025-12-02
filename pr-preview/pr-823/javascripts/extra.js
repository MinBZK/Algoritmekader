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
        fixSearchResultSemantics();
    }

    // Handle MkDocs Material SPA navigation
    if (typeof document$ !== 'undefined') {
        document$.subscribe(function() {
            // Only reset focus if it's not already on a specific element (like main-content)
            const focusedElement = document.activeElement;
            const isMainContent = focusedElement && focusedElement.id === 'main-content';
            const isSkipLink = focusedElement && focusedElement.classList.contains('skip-link');
            
            if (!isMainContent && !isSkipLink) {
                // Reset focus to document body to ensure skiplink is first tab stop
                document.body.setAttribute('tabindex', '-1');
                document.body.focus();
            }

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
        // Handle abbreviations with custom tooltips
        const abbreviations = document.querySelectorAll('abbr[title]');
        abbreviations.forEach(function(abbr) {
            makeElementAccessibleGlobal(abbr);
            setupCustomTooltip(abbr);
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
        // Make accessible with tab order to ensure keyboard navigation
        if (!element.hasAttribute('tabindex')) {
            element.setAttribute('tabindex', '0');
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

    // Function to setup custom tooltips
    function setupCustomTooltip(element) {
        let originalTitle = element.getAttribute('title');
        
        // Store original title in data attribute for CSS to use
        element.setAttribute('data-tooltip', originalTitle);
        
        // Remove title immediately to prevent native tooltip
        element.removeAttribute('title');
    }

    // Function to fix search result semantic structure 
    // Converts h1 tags in search results to h2 for proper semantic hierarchy
    function fixSearchResultSemantics() {
        // Find all search result h1 tags within the search output area
        const searchResults = document.querySelectorAll('.md-search-result h1, .md-search-result__title');
        
        searchResults.forEach(function(h1Element) {
            // Only convert h1 tags, not other elements with md-search-result__title class
            if (h1Element.tagName.toLowerCase() === 'h1') {
                // Create a new h2 element
                const h2Element = document.createElement('h2');
                
                // Copy all attributes from h1 to h2
                Array.from(h1Element.attributes).forEach(function(attr) {
                    h2Element.setAttribute(attr.name, attr.value);
                });
                
                // Copy all content from h1 to h2
                h2Element.innerHTML = h1Element.innerHTML;
                
                // Replace h1 with h2 in the DOM
                h1Element.parentNode.replaceChild(h2Element, h1Element);
            }
        });
    }

    // Make functions globally available
    window.initializeAccessibleAbbreviations = initializeAccessibleAbbreviations;
    window.makeElementAccessibleGlobal = makeElementAccessibleGlobal;
    window.setupCustomTooltip = setupCustomTooltip;
    window.fixSearchResultSemantics = fixSearchResultSemantics;

    // Add a MutationObserver to catch dynamically added content
    const tooltipObserver = new MutationObserver(function(mutations) {
        let shouldReinitTooltips = false;
        let shouldFixSemantics = false;

        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                Array.from(mutation.addedNodes).forEach(function(node) {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        // Check if the added node or its children have title attributes
                        const hasTitle = node.hasAttribute && node.hasAttribute('title');
                        const hasChildrenWithTitle = node.querySelectorAll && node.querySelectorAll('[title]').length > 0;

                        if (hasTitle || hasChildrenWithTitle) {
                            shouldReinitTooltips = true;
                        }

                        // Check if the added node contains search results
                        const isSearchResult = node.classList && node.classList.contains('md-search-result');
                        const hasSearchResults = node.querySelectorAll && node.querySelectorAll('.md-search-result').length > 0;
                        const hasH1InSearch = node.querySelectorAll && node.querySelectorAll('.md-search-result h1').length > 0;

                        if (isSearchResult || hasSearchResults || hasH1InSearch) {
                            shouldFixSemantics = true;
                        }
                    }
                });
            }
        });

        if (shouldReinitTooltips) {
            setTimeout(initializeAccessibleAbbreviations, 100);
        }

        if (shouldFixSemantics) {
            setTimeout(fixSearchResultSemantics, 50); // Run faster for better UX
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
