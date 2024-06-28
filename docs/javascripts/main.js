import {
    maatregelen,
    toggleMaatregel,
    updateButtonState,
    renderMaatregelenList,
    updateMaatregelenInLocalStorage,
    renderStoredMaatregelen,
    getMaatregelen,
    updateDisplay,
    loadMaatregelenFromLocalStorage
} from './maatregelen.js';

document.addEventListener("DOMContentLoaded", function () {
    let counterDisplayElem = document.querySelector('.counter-display');
    let clearStorageButton = document.querySelector('.clear-storage');
    let instrumentTableBody = document.querySelector('.instrument-list-body');
    let storedInstrumentsList = document.querySelector('.stored-instruments-list');
    let sendButton = document.getElementById('send-button');
    let cartBadge = document.querySelector('.myDIV');

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
        logNewURL();
    });

    sendButton.addEventListener("click", (event) => {
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

    function updateDisplay() {
        const count = getSelectedMaatregelen().length;
        counterDisplayElem.textContent = count;
        cartBadge.querySelector('h1').textContent = count;
        renderStoredMaatregelen();
    }

    function logNewURL() {
        const maatregelenData = encodeURIComponent(JSON.stringify(getSelectedMaatregelen()));
        const url = `otherpage.html?maatregelen=${maatregelenData}`;
        console.log("New URL:", url);
    }

    instrumentTableBody.addEventListener('click', (event) => {
        console.log("Table body clicked");
        if (event.target.classList.contains('toggle-button')) {
            const row = event.target.closest('tr');
            const title = row.cells[0].textContent;
            console.log("Toggle button clicked for:", title);
            toggleMaatregel(title);
            updateDisplay();
            updateMaatregelenInLocalStorage();
        }
    });

    console.log("Maatregelen:", maatregelen);
});
