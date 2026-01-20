// Force hide hamburger menu above 800px - Aggressive override for Material Insiders
function controlHamburgerMenu() {
    function findAndHideHamburger() {
        // Even more aggressive selector search
        const selectors = [
            '.md-header__button[for="__drawer"]',
            '.md-header__button.md-icon--menu',
            '.md-nav__button',
            'button[for="__drawer"]',
            '[data-md-component="navigation"]',
            '.md-header__button[type="button"]',
            '.md-header button'
        ];

        const hamburgers = document.querySelectorAll(selectors.join(', '));

        hamburgers.forEach(hamburger => {
            if (window.innerWidth > 800) {
                // Nuclear option - remove all possible CSS
                hamburger.style.cssText = 'display: none !important; visibility: hidden !important; opacity: 0 !important; pointer-events: none !important; position: absolute !important; left: -9999px !important;';
                hamburger.setAttribute('hidden', 'true');
                hamburger.setAttribute('aria-hidden', 'true');
                hamburger.disabled = true;
                console.log('Hamburger NUKED:', hamburger.className, hamburger.tagName);
            } else {
                hamburger.style.cssText = '';
                hamburger.removeAttribute('hidden');
                hamburger.removeAttribute('aria-hidden');
                hamburger.disabled = false;
                console.log('Hamburger restored:', hamburger.className);
            }
        });

        console.log('Screen width check:', window.innerWidth, 'Found hamburgers:', hamburgers.length);
    }

    // Initial check
    findAndHideHamburger();

    // Listen for resize events
    window.addEventListener('resize', findAndHideHamburger);

    // Force check every 100ms to override any dynamic changes from Material Insiders
    const forceInterval = setInterval(findAndHideHamburger, 100);

    // Also watch for DOM mutations
    if (typeof MutationObserver !== 'undefined') {
        const observer = new MutationObserver(findAndHideHamburger);
        observer.observe(document.body, { childList: true, subtree: true });
    }

    // Clear interval after 10 seconds to avoid performance impact
    setTimeout(() => clearInterval(forceInterval), 10000);
}

// Run immediately
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', controlHamburgerMenu);
} else {
    controlHamburgerMenu();
}

// Also run on page show (for browser back/forward)
window.addEventListener('pageshow', controlHamburgerMenu);

// Run again after a delay to catch any late-loading elements
setTimeout(controlHamburgerMenu, 1000);
