// Hide hamburger menu above 1280px
function controlHamburgerMenu() {
    const hamburger = document.querySelector('.md-header__button[for="__drawer"]');
    if (!hamburger) return;
    
    function checkScreenSize() {
        if (window.innerWidth > 1280) {
            hamburger.style.display = 'none';
        } else {
            hamburger.style.display = '';
        }
    }
    
    // Initial check
    checkScreenSize();
    
    // Listen for resize events
    window.addEventListener('resize', checkScreenSize);
}

// Run when DOM is loaded
document.addEventListener('DOMContentLoaded', controlHamburgerMenu);

// Also run immediately in case DOMContentLoaded already fired
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', controlHamburgerMenu);
} else {
    controlHamburgerMenu();
}