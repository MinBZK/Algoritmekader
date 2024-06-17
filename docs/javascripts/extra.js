document.addEventListener("DOMContentLoaded", function () {
    let counterDisplayElem = document.querySelector('.counter-display');
    let clearStorageButton = document.querySelector('.clear-storage');
    let instrumentTableBody = document.querySelector('.instrument-list-body');
    let storedInstrumentsList = document.querySelector('.stored-instruments-list');
    let sendButton = document.getElementById('send-button');
    let cartBadge = document.querySelector('.myDIV');
    let hideDiv = document.querySelector('.hide');

    // Retrieve instruments from localStorage or initialize it to an empty array
    let instruments = JSON.parse(localStorage.getItem('instruments')) || [];

    updateDisplay();
    renderMaatregelenList();
    renderStoredInstruments();

    clearStorageButton.addEventListener("click", () => {
        localStorage.removeItem('instruments'); // Clear localStorage
        instruments = []; // Clear the instruments array
        updateDisplay();
        renderMaatregelenList();
        renderStoredInstruments();
        console.log(instruments); // Print instruments array in console

        // Log the new URL after clearing instruments
        logNewURL();
    });

    sendButton.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default form submission

        // Construct the URL with instruments data
        const instrumentsData = encodeURIComponent(JSON.stringify(instruments));
        const url = `otherpage.html?instruments=${instrumentsData}`;

        // Clear instruments after sending
        localStorage.removeItem('instruments')
        instruments = [];
        updateDisplay();
        renderMaatregelenList();
        renderStoredInstruments();

        // Log the new URL before redirecting
        console.log("Redirecting to:", url);

        // Redirect to other page
        window.location.href = url;
    });

    function updateDisplay() {
        const count = instruments.length; // Calculate the count as the length of the instruments array
        console.log('Count:', count); // Log the count to console for debugging
        counterDisplayElem.textContent = count; // Update the counter display with the count
        cartBadge.querySelector('h1').textContent = count; // Update the cart badge with the count
    }

    async function renderMaatregelenList() {
        try {
            // Fetch maatregelen data from JSON file
            const response = await fetch('maatregelen.json');
            const maatregelen = await response.json();

            // Clear previous table body
            instrumentTableBody.innerHTML = '';

            // Render maatregelen list
            maatregelen.forEach(maatregel => {
                const tr = document.createElement('tr');

                // ID column
                const idCell = document.createElement('td');
                idCell.textContent = maatregel.urn;

                // Name column
                const nameCell = document.createElement('td');
                nameCell.textContent = maatregel.name;

                // Description column
                const descriptionCell = document.createElement('td');
                descriptionCell.textContent = maatregel.description;

                // Action column with Voeg Toe button
                const actionCell = document.createElement('td');
                const actionButton = document.createElement('button');
                updateButtonState(actionButton, maatregel.name); // Update button state initially
                actionButton.classList.add('toggle-button'); // Add class for styling
                actionButton.addEventListener('click', () => {
                    toggleInstrument(maatregel.name);
                });

                actionCell.appendChild(actionButton);

                // Append cells to the row
                tr.appendChild(idCell);
                tr.appendChild(nameCell);
                tr.appendChild(descriptionCell);
                tr.appendChild(actionCell);

                // Append row to the table body
                instrumentTableBody.appendChild(tr);
            });
        } catch (error) {
            console.error('Error fetching maatregelen:', error);
        }
    }

    function renderStoredInstruments() {
        storedInstrumentsList.innerHTML = ''; // Clear the existing list

        instruments.forEach(instrument => {
            const li = document.createElement('li');
            li.textContent = instrument;

            // Create delete button for each instrument
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Verwijder';
            deleteButton.classList.add('delete-button');
            deleteButton.addEventListener('click', () => {
                deleteInstrument(instrument);
            });

            li.appendChild(deleteButton);
            storedInstrumentsList.appendChild(li);
        });
    }

    function toggleInstrument(name) {
        const index = instruments.indexOf(name);
        if (index === -1) {
            instruments.push(name);
        } else {
            instruments.splice(index, 1);
        }

        localStorage.setItem('instruments', JSON.stringify(instruments));
        updateDisplay();
        renderMaatregelenList();
        renderStoredInstruments();
        logNewURL(); // Log new URL after toggling instrument
    }

    function deleteInstrument(name) {
        const index = instruments.indexOf(name);
        if (index !== -1) {
            instruments.splice(index, 1);
            localStorage.setItem('instruments', JSON.stringify(instruments));
            updateDisplay();
            renderMaatregelenList();
            renderStoredInstruments();
            logNewURL(); // Log new URL after deleting instrument
        }
    }

    function logNewURL() {
        const instrumentsData = encodeURIComponent(JSON.stringify(instruments));
        const url = `otherpage.html?instruments=${instrumentsData}`;
        console.log("New URL:", url);
    }

    function updateButtonState(button, name) {
        if (instruments.includes(name)) {
            button.textContent = 'Toegevoegd';
            button.style.backgroundColor = '#28a745'; // Green background for added items
        } else {
            button.textContent = 'Voeg Toe';
            button.style.backgroundColor = '#007bff'; // Blue background for non-added items
        }
    }

    // Event listener for deleting instruments from cart
    storedInstrumentsList.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-button')) {
            const li = event.target.parentNode; // Get the parent <li> element
            const instrumentName = li.textContent.replace('Delete', '').trim(); // Extract instrument name
            deleteInstrument(instrumentName);
        }
    });
});

