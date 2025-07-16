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
    if (dropdown) {
        if (dropdown.style.display === 'none' || dropdown.style.display === '') {
            dropdown.style.display = 'block';
            dropdown.style.width = document.getElementById('export-btn').offsetWidth + 'px';
            // Add click outside listener to close dropdown
            setTimeout(() => {
                document.addEventListener('click', function closeDropdown(e) {
                    if (!dropdown.contains(e.target) && !document.getElementById('export-btn').contains(e.target)) {
                        dropdown.style.display = 'none';
                        document.removeEventListener('click', closeDropdown);
                    }
                });
            }, 100);
        } else {
            dropdown.style.display = 'none';
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
    
    // Voeg filterrij toe alleen als er filters actief zijn
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
    
    // Voeg filterrij toe alleen als er filters actief zijn
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

    // Styling en merging alleen voor ODS (met instructies)
    const numCols = exportData[0].length;
    if (format === 'ods' && exportData[0][0] && exportData[0][0].includes('Tip:')) {
        if (!ws['!merges']) ws['!merges'] = [];
        
        // Merge de instructierij (eerste rij) over alle kolommen
        if (numCols > 1) {
            ws['!merges'].push({
                s: { c: 0, r: 0 },
                e: { c: numCols - 1, r: 0 }
            });
        }
        
        // Style voor instructierij
        const instructionCellAddress = XLSX.utils.encode_cell({ c: 0, r: 0 });
        if (ws[instructionCellAddress]) {
            ws[instructionCellAddress].s = {
                fill: {
                    patternType: "solid",
                    fgColor: { rgb: "E6F7FF" } // Light blue
                },
                font: {
                    italic: true,
                    color: { rgb: "0066CC" }
                },
                alignment: {
                    horizontal: "left",
                    vertical: "center"
                }
            };
        }
    }
    
    // Als er filters actief zijn, style de filterrij
    const hasActiveFilters = activeFilters && activeFilters.length > 0;
    if (hasActiveFilters) {
        // Zoek de filterrij
        let filterRowIndex = -1;
        for (let i = 0; i < exportData.length; i++) {
            if (exportData[i][0] && exportData[i][0].includes('filters')) {
                filterRowIndex = i;
                break;
            }
        }
        
        if (filterRowIndex !== -1) {
            if (!ws['!merges']) ws['!merges'] = [];
            
            // Merge de filterrij over alle kolommen
            if (numCols > 1) {
                ws['!merges'].push({
                    s: { c: 0, r: filterRowIndex },
                    e: { c: numCols - 1, r: filterRowIndex }
                });
            }
            
            // Style voor filterrij
            const filterCellAddress = XLSX.utils.encode_cell({ c: 0, r: filterRowIndex });
            if (ws[filterCellAddress]) {
                ws[filterCellAddress].s = {
                    fill: {
                        patternType: "solid",
                        fgColor: { rgb: "F6D4B3" } // Orange
                    },
                    font: {
                        bold: true
                    },
                    alignment: {
                        horizontal: "left",
                        vertical: "center"
                    }
                };
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
        // Bepaal de header-rij index
        let headerRowIndex = 0; // Start met eerste rij
        
        // Check of er een filterrij is (bevat 'filters' in de tekst)
        if (exportData[0] && exportData[0][0] && exportData[0][0].includes('filters')) {
            headerRowIndex = 1; // filter + header
        }
        
        // Stel autofilter in alleen voor Excel
        const range = XLSX.utils.encode_range({
            s: { c: 0, r: headerRowIndex },
            e: { c: exportData[headerRowIndex].length - 1, r: exportData.length - 1 }
        });
        ws['!autofilter'] = { ref: range };
    }
    
    // Voeg header styling toe voor alle formats
    if (exportData.length > 1) {
        let headerRowIndex = 0;
        
        // Zoek de header rij (eerste rij die niet met "Tip:" of "filters" begint)
        for (let i = 0; i < exportData.length; i++) {
            const firstCell = exportData[i][0];
            if (firstCell && !firstCell.includes('Tip:') && !firstCell.includes('filters')) {
                headerRowIndex = i;
                break;
            }
        }
        
        // Style headers
        for (let col = 0; col < exportData[headerRowIndex].length; col++) {
            const cellAddress = XLSX.utils.encode_cell({ c: col, r: headerRowIndex });
            if (!ws[cellAddress]) {
                ws[cellAddress] = { v: exportData[headerRowIndex][col], t: 's' };
            }
            if (!ws[cellAddress].s) {
                ws[cellAddress].s = {};
            }
            ws[cellAddress].s.font = { bold: true };
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

// Export functions globally
window.toggleExportDropdown = toggleExportDropdown;
window.exportExcel = exportExcel;
window.exportODS = exportODS;
