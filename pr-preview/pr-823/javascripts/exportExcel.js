// Export tables to Excel with filtering support
const EXPORT_CONFIG = {
    MIN_COL_WIDTH: 10,
    MAX_COL_WIDTH: 50,
    COL_PADDING: 2,
    MULTI_VALUE_SEPARATOR: '; '
};

const BASE_CONFIG = {
    tableId: 'myTable',
    buttonId: 'export-btn',
    multiValueColumns: ['rollen', 'levenscyclus', 'onderwerp'],
    filters: [
        { id: 'filterSelect', type: 'rollen' },
        { id: 'filterLevenscyclusSelect', type: 'levenscyclus' },
        { id: 'filterOnderwerpSelect', type: 'onderwerp' },
        { id: 'filterInput', type: 'zoeken' }
    ]
};

const MAATREGELEN_CONFIG = {
    ...BASE_CONFIG,
    filename: 'Algoritmekader_maatregelen',
    sheetName: 'Maatregelen'
};

const VEREISTEN_CONFIG = {
    ...BASE_CONFIG,
    filename: 'Algoritmekader_vereisten',
    sheetName: 'Vereisten'
};

function toggleExportDropdown() {
    const dropdown = document.getElementById('export-dropdown');
    const button = document.getElementById('export-btn');
    
    if (dropdown) {
        if (dropdown.style.display === 'none' || dropdown.style.display === '') {
            dropdown.style.display = 'block';
            dropdown.style.width = button.offsetWidth + 'px';
            
            // Update ARIA state
            button.setAttribute('aria-expanded', 'true');
            
            // Add click outside listener to close dropdown
            setTimeout(() => {
                document.addEventListener('click', function closeDropdown(e) {
                    if (!dropdown.contains(e.target) && !button.contains(e.target)) {
                        closeExportDropdown();
                        document.removeEventListener('click', closeDropdown);
                    }
                });
            }, 100);
        } else {
            closeExportDropdown();
        }
    }
}

function exportExcel() {
    const dropdown = document.getElementById('export-dropdown');
    if (dropdown) dropdown.style.display = 'none';

    // Determine which config to use based on the content type in the page
    const contentTypeElement = document.getElementById('content_type');
    const contentType = contentTypeElement ? contentTypeElement.textContent.toLowerCase() : '';

    if (contentType === 'maatregelen') {
        exportToExcel(MAATREGELEN_CONFIG);
    } else if (contentType === 'vereisten') {
        exportToExcel(VEREISTEN_CONFIG);
    }
}

function exportODS() {
    const dropdown = document.getElementById('export-dropdown');
    if (dropdown) dropdown.style.display = 'none';

    // Determine which config to use based on the content type in the page
    const contentTypeElement = document.getElementById('content_type');
    const contentType = contentTypeElement ? contentTypeElement.textContent.toLowerCase() : '';

    if (contentType === 'maatregelen') {
        exportToODS(MAATREGELEN_CONFIG);
    } else if (contentType === 'vereisten') {
        exportToODS(VEREISTEN_CONFIG);
    }
}

function getActiveFiltersString(activeFilters) {
    if (!activeFilters || activeFilters.length === 0) return 'Geen filters toegepast';
    return 'Dit zijn gefilterde maatregelen uit het Algoritmekader, geselecteerd op basis van de volgende filters: ' + activeFilters.map(f => `${capitalize(f.type)} = ${f.value}`).join('; ') + '\n';
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}


function exportToExcel(config) {
    console.log('exportToExcel called with config:', config);

    const button = document.getElementById(config.buttonId);
    const originalButtonHTML = button ? button.innerHTML : '';
    console.log('Button found:', button);

    try {
        console.log('Setting button state...');
        setButtonState(button, true, 'Exporteren...');

        console.log('Validating requirements...');
        validateRequirements(config);

        console.log('Getting table and filters...');
        const table = document.getElementById(config.tableId);
        const activeFilters = getCurrentFilters(config);
        console.log('Table:', table, 'Active filters:', activeFilters);

        console.log('Extracting table data for Excel...');
        const exportData = extractTableDataForExcel(table, config, activeFilters);
        console.log('Export data:', exportData);

        console.log('Creating workbook...');
        const workbook = createWorkbook(exportData, activeFilters, config, 'xlsx');
        console.log('Workbook created:', workbook);

        const timestamp = new Date().toISOString().slice(0, 10);
        const filename = `${config.filename}_${timestamp}.xlsx`;
        console.log('Filename:', filename);

        console.log('Writing file...');
        XLSX.writeFile(workbook, filename, { bookType: 'xlsx' });
        console.log('File written successfully');

    } catch (error) {
        console.error('Excel export error:', error);
        alert(`Excel export mislukt: ${error.message}`);
    } finally {
        console.log('Restoring button state...');
        restoreButtonState(button, originalButtonHTML);
    }
}

function exportToODS(config) {
    const button = document.getElementById(config.buttonId);
    const originalButtonHTML = button ? button.innerHTML : '';

    try {
        setButtonState(button, true, 'Exporteren...');
        validateRequirements(config);

        const table = document.getElementById(config.tableId);
        const activeFilters = getCurrentFilters(config);
        const exportData = extractTableDataForODS(table, config, activeFilters);
        const workbook = createWorkbook(exportData, activeFilters, config, 'ods');

        const timestamp = new Date().toISOString().slice(0, 10);
        const filename = `${config.filename}_${timestamp}.ods`;

        XLSX.writeFile(workbook, filename, { bookType: 'ods' });

    } catch (error) {
        console.error('ODS export error:', error);
        alert(`ODS export mislukt: ${error.message}`);
    } finally {
        restoreButtonState(button, originalButtonHTML);
    }
}

function validateRequirements(config) {
    if (typeof XLSX === 'undefined') {
        throw new Error('SheetJS library niet geladen');
    }

    const table = document.getElementById(config.tableId);
    if (!table) {
        throw new Error(`Tabel '${config.tableId}' niet gevonden`);
    }
}

function extractTableDataForExcel(table, config, activeFilters) {
    const rows = table.getElementsByTagName("tr");

    if (rows.length === 0) {
        throw new Error('Geen data om te exporteren');
    }

    const exportData = [];
    const headers = extractHeaders(rows[0]);

    // Add filterrow is active filters are present
    const hasActiveFilters = activeFilters && activeFilters.length > 0;
    if (hasActiveFilters) {
        const filterRow = [getActiveFiltersString(activeFilters)];
        while (filterRow.length < headers.length) filterRow.push('');
        exportData.push(filterRow);
    }

    exportData.push(headers);

    // Only export visible rows (after filtering)
    for (let i = 1; i < rows.length; i++) {
        const row = rows[i];
        if (row.classList && row.classList.contains('filter-row')) continue;
        if (row.style.display === 'none') continue;
        const rowData = extractRowData(row, headers, config);
        exportData.push(rowData);
    }

    return exportData;
}

function extractTableDataForODS(table, config, activeFilters) {
    const rows = table.getElementsByTagName("tr");

    if (rows.length === 0) {
        throw new Error('Geen data om te exporteren');
    }

    const exportData = [];
    const headers = extractHeaders(rows[0]);

    // Add filterrow if filters are active
    const hasActiveFilters = activeFilters && activeFilters.length > 0;
    if (hasActiveFilters) {
        const filterRow = [getActiveFiltersString(activeFilters)];
        while (filterRow.length < headers.length) filterRow.push('');
        exportData.push(filterRow);
    }

    exportData.push(headers);

    // Only export visible rows (after filtering)
    for (let i = 1; i < rows.length; i++) {
        const row = rows[i];
        if (row.classList && row.classList.contains('filter-row')) continue;
        if (row.style.display === 'none') continue;
        const rowData = extractRowData(row, headers, config);
        exportData.push(rowData);
    }

    return exportData;
}

function extractHeaders(headerRow) {
    const headerCells = headerRow.getElementsByTagName("th");
    return Array.from(headerCells).map(cell => cleanText(cell.textContent));
}


function extractRowData(row, headers, config) {
    const cells = row.getElementsByTagName("td");
    return Array.from(cells).map((cell, colIndex) => {
        const text = getCleanCellText(cell);
        return isMultiValueColumn(headers[colIndex], config)
            ? cleanMultiValueField(text)
            : text;
    });
}

function getCleanCellText(cell) {
    const clone = cell.cloneNode(true);
    const debugElements = clone.querySelectorAll('.debug');
    debugElements.forEach(el => el.remove());
    return cleanText(clone.textContent);
}

function cleanText(text) {
    return text.trim().replace(/[\s\n]+/g, ' ');
}

function isMultiValueColumn(header, config) {
    if (!header) return false;
    const lowerHeader = header.toLowerCase();
    return config.multiValueColumns.some(col => lowerHeader.includes(col));
}

function cleanMultiValueField(text) {
    return text
        .replace(/\s+(?=\w+[-\w]*)/g, EXPORT_CONFIG.MULTI_VALUE_SEPARATOR)
        .replace(/[;,]\s*[;,]/g, EXPORT_CONFIG.MULTI_VALUE_SEPARATOR);
}

function createWorkbook(exportData, activeFilters, config, format = 'xlsx') {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(exportData);

    setColumnWidths(ws, exportData);
    setAutoFilter(ws, exportData, format);
    const numCols = exportData[0].length;

    // If filterrow is active, merge it
    const hasActiveFilters = activeFilters && activeFilters.length > 0;
    if (hasActiveFilters) {
        // Search for filterrow
        let filterRowIndex = -1;
        for (let i = 0; i < exportData.length; i++) {
            if (exportData[i][0] && exportData[i][0].includes('filters')) {
                filterRowIndex = i;
                break;
            }
        }

        if (filterRowIndex !== -1) {
            if (!ws['!merges']) ws['!merges'] = [];

            // Merge filterrow over all columns
            if (numCols > 1) {
                ws['!merges'].push({
                    s: { c: 0, r: filterRowIndex },
                    e: { c: numCols - 1, r: filterRowIndex }
                });
            }
        }
    }

    XLSX.utils.book_append_sheet(wb, ws, config.sheetName);
    return wb;
}

function setColumnWidths(ws, exportData) {
    const colWidths = [];
    exportData.forEach(row => {
        row.forEach((cell, colIndex) => {
            const width = String(cell).length + EXPORT_CONFIG.COL_PADDING;
            colWidths[colIndex] = Math.max(
                colWidths[colIndex] || EXPORT_CONFIG.MIN_COL_WIDTH,
                Math.min(width, EXPORT_CONFIG.MAX_COL_WIDTH)
            );
        });
    });
    ws['!cols'] = colWidths.map(width => ({ width }));
}

function setAutoFilter(ws, exportData, format = 'xlsx') {
    if (exportData.length > 1 && format === 'xlsx') {
        // Assess the header row index
        let headerRowIndex = 0; // Start met eerste rij

        // Check whether the first row is a filter row
        if (exportData[0] && exportData[0][0] && exportData[0][0].includes('filters')) {
            headerRowIndex = 1; // filter + header
        }

        // Apply autofilter for excel
        const range = XLSX.utils.encode_range({
            s: { c: 0, r: headerRowIndex },
            e: { c: exportData[headerRowIndex].length - 1, r: exportData.length - 1 }
        });
        ws['!autofilter'] = { ref: range };
    }

    // Add header styling for all formats
    if (exportData.length > 1) {
        let headerRowIndex = 0;

        // Search headers row
        for (let i = 0; i < exportData.length; i++) {
            const firstCell = exportData[i][0];
            if (firstCell && !firstCell.includes('Tip:') && !firstCell.includes('filters')) {
                headerRowIndex = i;
                break;
            }
        }
    }
}


function getCurrentFilters(config) {
    return config.filters.flatMap(filterConfig => {
        const element = document.getElementById(filterConfig.id);
        if (!element) return [];

        return element.tagName.toLowerCase() === 'input'
            ? getInputFilter(element, filterConfig)
            : getSelectFilter(element, filterConfig);
    });
}

function getInputFilter(element, filterConfig) {
    const value = element.value.trim();
    return value ? [{ type: filterConfig.type, value }] : [];
}

function getSelectFilter(element, filterConfig) {
    return Array.from(element.options)
        .filter(option => option.selected && option.value)
        .map(option => ({ type: filterConfig.type, value: option.text }));
}

function setButtonState(button, disabled, text) {
    if (button) {
        button.disabled = disabled;
        if (disabled) {
            button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width: 24px; height: 24px; vertical-align: middle; margin-right: 4px;"><path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6z"/></svg> ' + text;
        }
    }
}

function restoreButtonState(button, originalHTML) {
    if (button) {
        button.disabled = false;
        button.innerHTML = originalHTML;
    }
}

// Keyboard navigation for export dropdown
function handleExportKeydown(event) {
    const dropdown = document.getElementById('export-dropdown');
    
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggleExportDropdown();
        
        // If dropdown was opened, focus the first menu item
        if (dropdown && dropdown.style.display === 'block') {
            const firstButton = dropdown.querySelector('button[role="menuitem"]');
            if (firstButton) {
                firstButton.tabIndex = 0;
                firstButton.focus();
            }
        }
    } else if (event.key === 'Escape') {
        closeExportDropdown();
    }
}

function handleDropdownKeydown(event, exportType) {
    const dropdown = document.getElementById('export-dropdown');
    const menuItems = dropdown ? Array.from(dropdown.querySelectorAll('button[role="menuitem"]')) : [];
    const currentIndex = menuItems.findIndex(item => item === event.target);
    
    switch (event.key) {
        case 'ArrowDown':
            event.preventDefault();
            const nextIndex = (currentIndex + 1) % menuItems.length;
            menuItems[currentIndex].tabIndex = -1;
            menuItems[nextIndex].tabIndex = 0;
            menuItems[nextIndex].focus();
            break;
            
        case 'ArrowUp':
            event.preventDefault();
            const prevIndex = currentIndex === 0 ? menuItems.length - 1 : currentIndex - 1;
            menuItems[currentIndex].tabIndex = -1;
            menuItems[prevIndex].tabIndex = 0;
            menuItems[prevIndex].focus();
            break;
            
        case 'Enter':
        case ' ':
            event.preventDefault();
            if (exportType === 'excel') {
                exportExcel();
            } else if (exportType === 'ods') {
                exportODS();
            }
            break;
            
        case 'Escape':
            event.preventDefault();
            closeExportDropdown();
            document.getElementById('export-btn').focus();
            break;
    }
}

function closeExportDropdown() {
    const dropdown = document.getElementById('export-dropdown');
    const button = document.getElementById('export-btn');
    
    if (dropdown) {
        dropdown.style.display = 'none';
        
        // Reset all menu item tab indexes
        const menuItems = dropdown.querySelectorAll('button[role="menuitem"]');
        menuItems.forEach(item => item.tabIndex = -1);
    }
    
    // Update ARIA state
    if (button) {
        button.setAttribute('aria-expanded', 'false');
    }
}

// Export functions globally
window.toggleExportDropdown = toggleExportDropdown;
window.exportExcel = exportExcel;
window.exportODS = exportODS;
window.handleExportKeydown = handleExportKeydown;
window.handleDropdownKeydown = handleDropdownKeydown;
window.closeExportDropdown = closeExportDropdown;
