// Hide hamburger menu above 1280px
function controlHamburgerMenu() {
    const hamburger = document.querySelector('.md-header__button[for="__drawer"]');
    if (!hamburger) return;
    
    function checkScreenSize() {
        console.log('Screen width:', window.innerWidth, 'Device pixel ratio:', window.devicePixelRatio);
        if (window.innerWidth >= 1200) {
            hamburger.style.display = 'none';
            console.log('Hamburger hidden');
        } else {
            hamburger.style.display = '';
            console.log('Hamburger visible');
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