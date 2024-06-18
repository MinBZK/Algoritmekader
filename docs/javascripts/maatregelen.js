import * as yaml from "https://cdn.skypack.dev/js-yaml";

let maatregelen = [];

// On window load, fetch and render the maatregelen
window.onload = function () {
    getMaatregelen();
}

// Function to get the path prefix for fetching files
function getPathPrefix() {
    return "/maatregelen_raw/"
}

// Async function to fetch maatregelen from a list and parse them
async function getMaatregelen() {
    let pathPrefix = getPathPrefix();

    try {
        // Fetch the list of maatregelen file names
        const response = await fetch(pathPrefix + "maatregelen.txt");
        const data = await response.text();
        const lines = data.split("\n").filter(el => el != null && el !== "");

        // Fetch and parse each maatregel file
        for (const fileName of lines) {
            try {
                const fileResponse = await fetch(pathPrefix + fileName.trim() + ".txt");
                const mdData = await fileResponse.text();
                const regex = /---(.*?)---/gs;
                const matches = [...mdData.matchAll(regex)];
                if (matches.length > 0) {
                    const codeBlocks = matches[0][1].trim();
                    const myJSONBlock = yaml.load(codeBlocks);
                    if (myJSONBlock) {
                        maatregelen.push(myJSONBlock);
                    }
                } else {
                    console.warn(`No YAML front matter found in ${fileName}`);
                }
            } catch (e) {
                console.error(`Error fetching or parsing ${fileName}:`, e);
            }
        }

        console.log("Maatregelen loaded:", maatregelen);
        renderMaatregelenList();
    } catch (error) {
        console.error('Error fetching maatregelen:', error);
    }
}

// Function to render the list of maatregelen in a table
function renderMaatregelenList() {
    try {
        const tableBody = document.querySelector('.instrument-list-body');
        tableBody.innerHTML = '';

        // Create a table row for each maatregel
        maatregelen.forEach(maatregel => {
            const row = document.createElement('tr');

            // Action cell with toggle button
            const actionCell = document.createElement('td');
            const actionButton = document.createElement('button');
            updateButtonState(actionButton, maatregel.title);
            actionButton.classList.add('toggle-button');
            actionButton.addEventListener('click', () => {
                toggleMaatregel(maatregel.title);
                updateButtonState(actionButton, maatregel.title);
                updateMaatregelenInLocalStorage();
                logNewURL(); // Log the updated URL
            });
            actionCell.appendChild(actionButton);

            // Other cells for maatregel details
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

            // Append cells to row
            row.appendChild(actionCell);
            row.appendChild(titleCell);
            row.appendChild(toelichtingCell);
            row.appendChild(vereisteCell);
            row.appendChild(levenscyclusCell);
            row.appendChild(bouwblokCell);
            row.appendChild(rollenCell);

            // Append row to table body
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
    }
}

// Function to update the button state based on selection
function updateButtonState(button, title) {
    const maatregel = maatregelen.find(m => m.title === title);
    if (maatregel && maatregel.selected) {
        button.textContent = 'Toegevoegd';
        button.style.backgroundColor = '#28a745';
    } else {
        button.textContent = 'Voeg Toe';
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
    storedInstrumentsList.innerHTML = '';

    getSelectedMaatregelen().forEach(maatregel => {
        const li = document.createElement('li');
        li.textContent = maatregel.title;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Verwijder';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', () => {
            toggleMaatregel(maatregel.title);
            renderStoredMaatregelen();
            updateMaatregelenInLocalStorage();
            logNewURL(); // Log the updated URL
        });

        li.appendChild(deleteButton);
        storedInstrumentsList.appendChild(li);
    });
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

export { renderMaatregelenList, toggleMaatregel, updateButtonState, updateMaatregelenInLocalStorage, renderStoredMaatregelen, maatregelen };