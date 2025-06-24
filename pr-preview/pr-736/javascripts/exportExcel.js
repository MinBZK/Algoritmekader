// Export (filtered) table to excel for maatregelen and vereisten
// Requires SheetJS library
const EXPORT_CONFIG = {
    MIN_COL_WIDTH: 10,
    MAX_COL_WIDTH: 50,
    COL_PADDING: 2,
    MULTI_VALUE_SEPARATOR: '; '
};

// Shared configuration for both export types
const CONFIG = {
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
    ...CONFIG,
    filename: 'Algoritmekader_maatregelen',
    sheetName: 'Maatregelen'
};

const VEREISTEN_CONFIG = {
    ...CONFIG,
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
    const originalButtonText = button ? button.textContent : '';

    try {
        setButtonState(button, true, 'Exporteren...');

        if (typeof XLSX === 'undefined') {
            throw new Error('SheetJS library niet geladen');
        }

        const table = document.getElementById(config.tableId);
        if (!table) {
            throw new Error(`Tabel '${config.tableId}' niet gevonden`);
        }

        const exportData = extractTableData(table, config);
        const activeFilters = getCurrentFilters(config);
        const workbook = createWorkbook(exportData, activeFilters, config);

        const timestamp = new Date().toISOString().slice(0, 10);
        const filename = `${config.filename}_${timestamp}.xlsx`;
        XLSX.writeFile(workbook, filename);

        console.log(`Exported ${exportData.length - 1} ${config.sheetName.toLowerCase()} with ${activeFilters.length} filters`);

    } catch (error) {
        console.error('Excel export error:', error);
        alert(`Excel export mislukt: ${error.message}`);
    } finally {
        setButtonState(button, false, originalButtonText);
    }
}

function extractTableData(table, config) {
    const rows = table.getElementsByTagName("tr");

    if (rows.length === 0) {
        throw new Error('Geen data om te exporteren');
    }

    const exportData = [];

    // Extract headers
    const headerCells = rows[0].getElementsByTagName("th");
    const headers = Array.from(headerCells).map(cell => cleanText(cell.textContent));
    exportData.push(headers);

    // Extract data rows
    for (let i = 1; i < rows.length; i++) {
        const row = rows[i];

        // Skip hidden rows
        if (row.style.display === 'none' || row.hidden) {
            continue;
        }

        const cells = row.getElementsByTagName("td");
        const rowData = Array.from(cells).map((cell, colIndex) => {
            const text = getCleanCellText(cell);
            return isMultiValueColumn(headers[colIndex], config)
                ? cleanMultiValueField(text)
                : text;
        });
        exportData.push(rowData);
    }

    return exportData;
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

    // Set column widths
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

    // Apply autofilter
    if (exportData.length > 1) {
        const range = XLSX.utils.encode_range({
            s: { c: 0, r: 0 },
            e: { c: exportData[0].length - 1, r: exportData.length - 1 }
        });
        ws['!autofilter'] = { ref: range };
    }

    XLSX.utils.book_append_sheet(wb, ws, config.sheetName);
    return wb;
}

function getCurrentFilters(config) {
    return config.filters.flatMap(filterConfig => {
        const element = document.getElementById(filterConfig.id);
        if (!element) return [];

        if (element.tagName.toLowerCase() === 'input') {
            // For text input (search)
            const value = element.value.trim();
            if (value) {
                console.log(`Search filter found: "${value}"`); // DEBUG
                return [{ type: filterConfig.type, value: value }];
            }
            return [];
        } else {
            // For select elements (dropdown filters)
            const selected = Array.from(element.options)
                .filter(option => option.selected && option.value)
                .map(option => ({ type: filterConfig.type, value: option.text }));

            if (selected.length > 0) {
                console.log(`Dropdown filter found for ${filterConfig.type}:`, selected); // DEBUG
            }
            return selected;
        }
    });
}

function setButtonState(button, disabled, text) {
    if (button) {
        button.disabled = disabled;
        button.textContent = text;
    }
}

// Make functions globally available
window.exportMaatregelen = exportMaatregelen;
window.exportVereisten = exportVereisten;
