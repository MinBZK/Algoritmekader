let maatregelen = [];

// On window load, fetch and render the maatregelen from localStorage if available
window.onload = function () {
    loadMaatregelenFromLocalStorage();
    getMaatregelen();
}

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

// Function to construct the correct path to the JSON file
function getFilePath() {
    return "../../maatregelen.json";
}

// Async function to fetch maatregelen from a JSON file and parse them
async function getMaatregelen() {
    const filePath = getFilePath();
    console.log(`Fetching JSON from: ${filePath}`);

    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        data.forEach(item => {
            const meta = item.meta;
            if (meta) {
                maatregelen.push({
                    title: meta.title || 'No title',
                    toelichting: meta.toelichting || '',
                    vereiste: meta.vereiste || [],
                    levenscyclus: meta.levenscyclus || [],
                    bouwblok: meta.bouwblok || [],
                    rollen: meta.rollen || [],
                    selected: false
                });
            } else {
                console.warn(`No meta found for item: ${JSON.stringify(item)}`);
            }
        });

        console.log("Maatregelen loaded:", maatregelen);
        renderMaatregelenList();
        renderStoredMaatregelen();
        updateDisplay(); // Ensure the display is updated when the state is loaded
    } catch (error) {
        console.error('Error fetching maatregelen:', error);
    }
}

// Function to render the list of maatregelen in a table
function renderMaatregelenList() {
    try {
        const tableBody = document.querySelector('.instrument-list-body');
        if (!tableBody) {
            console.error('Table body not found');
            return;
        }
        tableBody.innerHTML = '';

        maatregelen.forEach(maatregel => {
            const row = document.createElement('tr');

            const actionCell = document.createElement('td');
            const actionButton = document.createElement('button');
            updateButtonState(actionButton, maatregel.title);
            actionButton.classList.add('toggle-button');
            actionButton.addEventListener('click', () => {
                toggleMaatregel(maatregel.title);
                updateButtonState(actionButton, maatregel.title);
                updateMaatregelenInLocalStorage();
                updateDisplay(); // Ensure the display is updated when the state changes
            });
            actionCell.appendChild(actionButton);

            const titleCell = document.createElement('td');
            titleCell.textContent = maatregel.title || '';

            const toelichtingCell = document.createElement('td');
            toelichtingCell.textContent = maatregel.toelichting || '';

            const vereisteCell = document.createElement('td');
            vereisteCell.textContent = maatregel.vereiste ? maatregel.vereiste.join(', ') : '';

            const levenscyclusCell = document.createElement('td');
            levenscyclusCell.textContent = maatregel.levenscyclus ? maatregel.levenscyclus.join(', ') : '';

            const bouwblokCell = document.createElement('td');
            bouwblokCell.textContent = maatregel.bouwblok ? maatregel.bouwblok.join(', ') : '';

            const rollenCell = document.createElement('td');
            rollenCell.textContent = maatregel.rollen ? maatregel.rollen.join(', ') : '';

            row.appendChild(actionCell);
            row.appendChild(titleCell);
            row.appendChild(toelichtingCell);
            row.appendChild(vereisteCell);
            row.appendChild(levenscyclusCell);
            row.appendChild(bouwblokCell);
            row.appendChild(rollenCell);

            tableBody.appendChild(row);
        });

    } catch (error) {
        console.error('Error rendering maatregelen:', error);
    }
}

// Function to toggle the selection state of a maatregel
function toggleMaatregel(title) {
    const index = maatregelen.findIndex(maatregel => maatregel.title === title);
    if (index !== -1) {
        maatregelen[index].selected = !maatregelen[index].selected;
        renderMaatregelenList();
        updateDisplay(); // Ensure the display is updated when the state changes
    }
}

// Function to update the button state based on selection
function updateButtonState(button, title) {
    const maatregel = maatregelen.find(m => m.title === title);
    if (maatregel && maatregel.selected) {
        button.textContent = 'Toegevoegd';
        button.style.backgroundColor = '#28a745';
    } else {
        button.textContent = 'Voeg toe';
        button.style.backgroundColor = '#007bff';
    }
}

// Function to update the maatregelen in localStorage
function updateMaatregelenInLocalStorage() {
    localStorage.setItem('maatregelen', JSON.stringify(maatregelen));
}

// Function to render the stored maatregelen in the list
function renderStoredMaatregelen() {
    const storedInstrumentsList = document.querySelector('.stored-instruments-list');
    if (!storedInstrumentsList) {
        console.error('Stored instruments list not found');
        return;
    }
    storedInstrumentsList.innerHTML = '';

    getSelectedMaatregelen().forEach(maatregel => {
        const li = document.createElement('li');
        li.textContent = maatregel.title;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Verwijder';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', () => {
            toggleMaatregel(maatregel.title);
            updateDisplay(); // Ensure the display is updated when the state changes
            renderStoredMaatregelen();
            updateMaatregelenInLocalStorage();
        });

        li.appendChild(deleteButton);
        storedInstrumentsList.appendChild(li);
    });

    logNewURL();
}

// Function to get the selected maatregelen
function getSelectedMaatregelen() {
    return maatregelen.filter(maatregel => maatregel.selected);
}

// Function to log the new URL with selected maatregelen
function logNewURL() {
    const maatregelenData = encodeURIComponent(JSON.stringify(getSelectedMaatregelen()));
    const url = `otherpage.html?maatregelen=${maatregelenData}`;
    console.log("New URL:", url);
}

// Function to update the display of the counter and stored maatregelen
function updateDisplay() {
    const count = getSelectedMaatregelen().length;
    console.log("Updating display, count:", count);
    const counterDisplayElem = document.querySelector('.counter-display');
    const cartBadge = document.querySelector('.myDIV');
    if (counterDisplayElem) {
        counterDisplayElem.textContent = count;
    }
    if (cartBadge) {
        cartBadge.querySelector('h1').textContent = count;
    }
    renderStoredMaatregelen();
}

export {
    getMaatregelen,
    renderMaatregelenList,
    toggleMaatregel,
    updateButtonState,
    updateMaatregelenInLocalStorage,
    renderStoredMaatregelen,
    maatregelen,
    updateDisplay
};
