import {
    maatregelen,
    toggleMaatregel,
    updateButtonState,
    renderMaatregelenList,
    updateMaatregelenInLocalStorage,
    renderStoredMaatregelen,
    getMaatregelen,
    updateDisplay
} from './maatregelen.js';

document.addEventListener("DOMContentLoaded", function () {
    const counterDisplayElem = document.querySelector('.counter-display');
    const clearStorageButton = document.querySelector('.clear-storage');
    const instrumentTableBody = document.querySelector('.instrument-list-body');
    const storedInstrumentsList = document.querySelector('.stored-instruments-list');
    const sendButton = document.getElementById('send-button');
    const cartBadge = document.querySelector('.myDIV');

    console.log("Elements selected:", {
        counterDisplayElem,
        clearStorageButton,
        instrumentTableBody,
        storedInstrumentsList,
        sendButton,
        cartBadge
    });

    if (!counterDisplayElem || !clearStorageButton || !instrumentTableBody || !storedInstrumentsList || !sendButton || !cartBadge) {
        console.error("One or more DOM elements not found. Ensure the HTML contains the correct elements with the specified selectors.");
        return;
    }

    // Load initial state from localStorage and render
    loadMaatregelenFromLocalStorage();
    updateDisplay();
    renderMaatregelenList();
    renderStoredMaatregelen();

    clearStorageButton.addEventListener("click", () => {
        console.log("Clear storage button clicked");
        localStorage.removeItem('maatregelen');
        maatregelen.forEach(maatregel => {
            maatregel.selected = false;
        });
        updateDisplay();
        renderMaatregelenList();
        renderStoredMaatregelen();
    });

    sendButton.addEventListener("click", (event) => {
        console.log("Send button clicked");
        event.preventDefault();
        const maatregelenData = encodeURIComponent(JSON.stringify(getSelectedMaatregelen()));
        const url = `otherpage.html?maatregelen=${maatregelenData}`;

        localStorage.removeItem('maatregelen');
        maatregelen.forEach(maatregel => {
            maatregel.selected = false;
        });
        updateDisplay();
        renderMaatregelenList();
        renderStoredMaatregelen();

        console.log("Redirecting to:", url);
        window.location.href = url;
    });

    function getSelectedMaatregelen() {
        return maatregelen.filter(maatregel => maatregel.selected);
    }

    instrumentTableBody.addEventListener('click', (event) => {
        console.log("Table body clicked");
        if (event.target.classList.contains('toggle-button')) {
            const row = event.target.closest('tr');
            const title = row.cells[1].textContent;
            console.log("Toggle button clicked for:", title);
            toggleMaatregel(title);
            updateDisplay();
            updateMaatregelenInLocalStorage();
        }
    });

    console.log("Maatregelen:", maatregelen);
});

// Function to load maatregelen from localStorage
function loadMaatregelenFromLocalStorage() {
    const storedMaatregelen = localStorage.getItem('maatregelen');
    if (storedMaatregelen) {
        maatregelen = JSON.parse(storedMaatregelen);
        renderMaatregelenList();
        renderStoredMaatregelen();
        updateDisplay(); // Ensure the display is updated when the state is loaded
    }
}

// Function to log the new URL with selected maatregelen
function logNewURL() {
    const maatregelenData = encodeURIComponent(JSON.stringify(getSelectedMaatregelen()));
    const url = `otherpage.html?maatregelen=${maatregelenData}`;
    console.log("New URL:", url);
}
