import { maatregelen, toggleMaatregel, updateButtonState, renderMaatregelenList, updateMaatregelenInLocalStorage, renderStoredMaatregelen } from './maatregelen.js';

document.addEventListener("DOMContentLoaded", function () {
    let counterDisplayElem = document.querySelector('.counter-display');
    let clearStorageButton = document.querySelector('.clear-storage');
    let instrumentTableBody = document.querySelector('.instrument-list-body');
    let storedInstrumentsList = document.querySelector('.stored-instruments-list');
    let sendButton = document.getElementById('send-button');
    let cartBadge = document.querySelector('.myDIV');

    updateDisplay();
    renderMaatregelenList();
    renderStoredMaatregelen();

    clearStorageButton.addEventListener("click", () => {
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

    function updateDisplay() {
        const count = getSelectedMaatregelen().length;
        counterDisplayElem.textContent = count;
        cartBadge.querySelector('h1').textContent = count;
        renderStoredMaatregelen();
    }

    function renderStoredMaatregelen() {
        storedInstrumentsList.innerHTML = '';

        getSelectedMaatregelen().forEach(maatregel => {
            const li = document.createElement('li');
            li.textContent = maatregel.title;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Verwijder';
            deleteButton.classList.add('delete-button');
            deleteButton.addEventListener('click', () => {
                toggleMaatregel(maatregel.title);
                updateDisplay();
                renderStoredMaatregelen();
                updateMaatregelenInLocalStorage();
            });

            li.appendChild(deleteButton);
            storedInstrumentsList.appendChild(li);
        });

        logNewURL(); // Log the updated URL whenever the list is rendered
    }

    function logNewURL() {
        const maatregelenData = encodeURIComponent(JSON.stringify(getSelectedMaatregelen()));
        const url = `otherpage.html?maatregelen=${maatregelenData}`;
        console.log("New URL:", url);
    }

    function getSelectedMaatregelen() {
        return maatregelen.filter(maatregel => maatregel.selected);
    }

    instrumentTableBody.addEventListener('click', (event) => {
        if (event.target.classList.contains('toggle-button')) {
            const row = event.target.closest('tr');
            const title = row.cells[0].textContent;
            toggleMaatregel(title);
            updateDisplay();
            updateMaatregelenInLocalStorage();
        }
    });

    console.log("Maatregelen:", maatregelen);
});