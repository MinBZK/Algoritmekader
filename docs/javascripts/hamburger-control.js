// Force hide hamburger menu above 800px - Aggressive override for Material Insiders
function controlHamburgerMenu() {
    function findAndHideHamburger() {
        const hamburgers = document.querySelectorAll('.md-header__button[for="__drawer"], .md-header__button.md-icon--menu, .md-nav__button');
        
        hamburgers.forEach(hamburger => {
            if (window.innerWidth > 800) {
                hamburger.style.setProperty('display', 'none', 'important');
                hamburger.style.setProperty('visibility', 'hidden', 'important');
                hamburger.style.setProperty('opacity', '0', 'important');
                hamburger.style.setProperty('pointer-events', 'none', 'important');
                console.log('Hamburger forcefully hidden:', hamburger.className);
            } else {
                hamburger.style.removeProperty('display');
                hamburger.style.removeProperty('visibility');  
                hamburger.style.removeProperty('opacity');
                hamburger.style.removeProperty('pointer-events');
                console.log('Hamburger restored:', hamburger.className);
            }
        });
        
        console.log('Screen width check:', window.innerWidth, 'Found hamburgers:', hamburgers.length);
    }
    
    // Initial check
    findAndHideHamburger();
    
    // Listen for resize events
    window.addEventListener('resize', findAndHideHamburger);
    
    // Force check every 500ms to override any dynamic changes from Material Insiders
    const forceInterval = setInterval(findAndHideHamburger, 500);
    
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