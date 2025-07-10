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
    exportTable(MAATREGELEN_CONFIG);
}

function exportVereisten() {
    exportTable(VEREISTEN_CONFIG);
}

function getActiveFiltersString(activeFilters) {
    if (!activeFilters || activeFilters.length === 0) return 'Geen filters toegepast';
    return 'Filters toegepast: ' + activeFilters.map(f => `${capitalize(f.type)} = ${f.value}`).join('; ');
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function exportTable(config) {
    const button = document.getElementById(config.buttonId);
    const originalButtonHTML = button ? button.innerHTML : '';

    try {
        setButtonState(button, true, 'Exporteren...');
        validateRequirements(config);

        const table = document.getElementById(config.tableId);
        const activeFilters = getCurrentFilters(config);
        const exportData = extractTableData(table, config, activeFilters);
        const workbook = createWorkbook(exportData, activeFilters, config);

        const timestamp = new Date().toISOString().slice(0, 10);
        const filename = `${config.filename}_${timestamp}.xlsx`;
        XLSX.writeFile(workbook, filename);

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
    // Voeg filterrij toe
    const filterRow = [getActiveFiltersString(activeFilters)];
    while (filterRow.length < headers.length) filterRow.push('');
    exportData.push(filterRow);
    exportData.push(headers);

    // Only export visible rows (after filtering)
    for (let i = 1; i < rows.length; i++) {
        const row = rows[i];
        
        // Skip rows that are hidden by CSS (filtered out)
        if (row.style.display === 'none') {
            continue;
        }
        
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

function createWorkbook(exportData, activeFilters, config) {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(exportData);

    setColumnWidths(ws, exportData);
    setAutoFilter(ws, exportData);

    // Geef de filterrij (eerste rij) een achtergrondkleur Oranje-300 (#F6D4B3)
    const filterRowIndex = 0;
    const numCols = exportData[0].length;
    for (let col = 0; col < numCols; col++) {
        const cellAddress = XLSX.utils.encode_cell({ c: col, r: filterRowIndex });
        if (!ws[cellAddress]) continue;
        ws[cellAddress].s = {
            fill: {
                patternType: "solid",
                fgColor: { rgb: "F6D4B3" }
            },
            font: {
                bold: true
            }
        };
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

function setAutoFilter(ws, exportData) {
    if (exportData.length > 1) {
        const range = XLSX.utils.encode_range({
            s: { c: 0, r: 0 },
            e: { c: exportData[0].length - 1, r: exportData.length - 1 }
        });
        ws['!autofilter'] = { ref: range };
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
