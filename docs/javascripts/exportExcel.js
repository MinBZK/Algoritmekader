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

function exportTable(config) {
    const button = document.getElementById(config.buttonId);
    const originalButtonHTML = button ? button.innerHTML : '';

    try {
        setButtonState(button, true, 'Exporteren...');
        validateRequirements(config);

        const table = document.getElementById(config.tableId);
        const exportData = extractTableData(table, config);
        const activeFilters = getCurrentFilters(config);
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

function extractTableData(table, config) {
    const rows = table.getElementsByTagName("tr");
    
    if (rows.length === 0) {
        throw new Error('Geen data om te exporteren');
    }

    const exportData = [];
    const headers = extractHeaders(rows[0]);
    exportData.push(headers);

    for (let i = 1; i < rows.length; i++) {
        const row = rows[i];
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
    applyFiltersToWorksheet(ws, exportData, activeFilters);

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

function applyFiltersToWorksheet(ws, exportData, activeFilters) {
    if (exportData.length <= 1 || activeFilters.length === 0) return;
    
    const headers = exportData[0];
    const rowsToHide = [];
    
    // Check each data row against active filters
    for (let rowIndex = 1; rowIndex < exportData.length; rowIndex++) {
        const row = exportData[rowIndex];
        let shouldHideRow = false;
        
        activeFilters.forEach(filter => {
            const columnIndex = findColumnIndex(headers, filter.type);
            if (columnIndex !== -1) {
                const cellValue = row[columnIndex]?.toString().toLowerCase() || '';
                const filterValue = filter.value.toLowerCase();
                
                // For text search, check if cell contains the filter value
                if (filter.type === 'zoeken') {
                    if (!cellValue.includes(filterValue)) {
                        shouldHideRow = true;
                    }
                } else {
                    // For dropdown filters, check if cell contains or matches the filter value
                    if (!cellValue.includes(filterValue)) {
                        shouldHideRow = true;
                    }
                }
            }
        });
        
        if (shouldHideRow) {
            rowsToHide.push(rowIndex);
        }
    }
    
    // Hide rows by setting row height to 0
    if (rowsToHide.length > 0) {
        ws['!rows'] = ws['!rows'] || [];
        rowsToHide.forEach(rowIndex => {
            ws['!rows'][rowIndex] = { hidden: true };
        });
    }
}

function findColumnIndex(headers, filterType) {
    return headers.findIndex(header => {
        const lowerHeader = header.toLowerCase();
        return lowerHeader.includes(filterType.toLowerCase());
    });
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
            button.innerHTML = '<i class="material-icons">hourglass_empty</i> ' + text;
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
