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

function exportMaatregelen() {
    exportTable(MAATREGELEN_CONFIG, 'ods');
}

function exportVereisten() {
    exportTable(VEREISTEN_CONFIG, 'ods');
}

function getActiveFiltersString(activeFilters) {
    if (!activeFilters || activeFilters.length === 0) return 'Geen filters toegepast';
    return 'Dit zijn gefilterde maatregelen uit het Algoritmekader, geselecteerd op basis van de volgende filters: ' + activeFilters.map(f => `${capitalize(f.type)} = ${f.value}`).join('; ');
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function exportTable(config, format = 'xlsx') {
    const button = document.getElementById(config.buttonId);
    const originalButtonHTML = button ? button.innerHTML : '';

    try {
        setButtonState(button, true, 'Exporteren...');
        validateRequirements(config);

        const table = document.getElementById(config.tableId);
        const activeFilters = getCurrentFilters(config);
        const exportData = extractTableData(table, config, activeFilters);
        const workbook = createWorkbook(exportData, activeFilters, config, format);

        const timestamp = new Date().toISOString().slice(0, 10);
        const extension = format === 'ods' ? 'ods' : 'xlsx';
        const filename = `${config.filename}_${timestamp}.${extension}`;
        
        const writeOptions = format === 'ods' ? { bookType: 'ods' } : { bookType: 'xlsx' };
        XLSX.writeFile(workbook, filename, writeOptions);

    } catch (error) {
        console.error('Excel export error:', error);
        alert(`Excel export mislukt: ${error.message}`);
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

function extractTableData(table, config, activeFilters) {
    const rows = table.getElementsByTagName("tr");

    if (rows.length === 0) {
        throw new Error('Geen data om te exporteren');
    }

    const exportData = [];
    const headers = extractHeaders(rows[0]);
    
    // Voeg instructierij toe
    const instructionRow = ["💡 Tip: Selecteer de header-rij en klik op Data → Standaard Filter of AutoFilter om kolommen te filteren"];
    while (instructionRow.length < headers.length) instructionRow.push('');
    exportData.push(instructionRow);
    
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
        // Sla filterrijen in de HTML-tabel over (voor de zekerheid)
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
    setAutoFilter(ws, exportData, format); // Pass format to setAutoFilter

    // Merge de instructierij (eerste rij) over alle kolommen
    const numCols = exportData[0].length;
    if (numCols > 1) {
        if (!ws['!merges']) ws['!merges'] = [];
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
    
    // Als er filters actief zijn, geef de filterrij en merge alle kolommen
    const hasActiveFilters = activeFilters && activeFilters.length > 0;
    if (hasActiveFilters) {
        const filterRowIndex = 1; // Nu tweede rij
        
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
    if (exportData.length > 1) {
        // Bepaal de header-rij index
        // Rij 0 = instructies, rij 1 = filters (als actief), laatste rij voor data = headers
        let headerRowIndex = 1; // Start met instructie + header (geen filters)
        
        // Check of er een filterrij is (bevat 'filters' in de tekst)
        if (exportData[1] && exportData[1][0] && exportData[1][0].includes('filters')) {
            headerRowIndex = 2; // instructie + filter + header
        }
        
        // Stel autofilter in voor alle formats
        const range = XLSX.utils.encode_range({
            s: { c: 0, r: headerRowIndex },
            e: { c: exportData[headerRowIndex].length - 1, r: exportData.length - 1 }
        });
        ws['!autofilter'] = { ref: range };
        
        // Voeg header styling toe voor betere zichtbaarheid
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
window.exportMaatregelen = exportMaatregelen;
window.exportVereisten = exportVereisten;
