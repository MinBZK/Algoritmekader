import * as yaml from "https://cdn.skypack.dev/js-yaml";

let maatregelen = [];

window.onload = function () {
    getMaatregelen();
}

function getPathPrefix() {
    return "/maatregelen_raw/"
}

async function getMaatregelen() {
    let pathPrefix = getPathPrefix();

    try {
        const response = await fetch(pathPrefix + "maatregelen.txt");
        const data = await response.text();
        const lines = data.split("\n").filter(el => el != null && el !== "");

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

function renderMaatregelenList() {
    try {
        const tableBody = document.querySelector('.instrument-list-body');
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
                logNewURL(); // Log the updated URL
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

function toggleMaatregel(title) {
    const index = maatregelen.findIndex(maatregel => maatregel.title === title);
    if (index !== -1) {
        maatregelen[index].selected = !maatregelen[index].selected;
        renderMaatregelenList();
    }
}

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

function updateMaatregelenInLocalStorage() {
    localStorage.setItem('maatregelen', JSON.stringify(maatregelen));
}

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

function getSelectedMaatregelen() {
    return maatregelen.filter(maatregel => maatregel.selected);
}

function logNewURL() {
    const maatregelenData = encodeURIComponent(JSON.stringify(getSelectedMaatregelen()));
    const url = `otherpage.html?maatregelen=${maatregelenData}`;
    console.log("New URL:", url);
}

export { renderMaatregelenList, toggleMaatregel, updateButtonState, updateMaatregelenInLocalStorage, renderStoredMaatregelen, maatregelen };