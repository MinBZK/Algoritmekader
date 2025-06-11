// Export filtered table to Excel
// Requires SheetJS library

// Configuration constants
const EXPORT_CONFIG = {
    MIN_COL_WIDTH: 10,
    MAX_COL_WIDTH: 50,
    COL_PADDING: 2,
    MULTI_VALUE_SEPARATOR: '; '
};

function exportMaatregelen() {
    const button = document.getElementById('export-btn');
    
    try {
        setButtonState(button, true, 'Exporteren...');
        
        validateDependencies();
        const table = getTable();
        const exportData = extractTableData(table);
        const activeFilters = getCurrentFilters();
        
        const workbook = createStyledWorkbook(exportData, activeFilters);
        downloadWorkbook(workbook);
        
        logExportSuccess(exportData.length - 1, activeFilters.length);
        
    } catch (error) {
        handleExportError(error);
    } finally {
        setButtonState(button, false, 'Export naar Excel');
    }
}

function validateDependencies() {
    if (typeof XLSX === 'undefined') {
        throw new Error('SheetJS library niet geladen');
    }
}

function getTable() {
    const table = document.getElementById("myTable");
    if (!table) {
        throw new Error('Tabel niet gevonden');
    }
    return table;
}

function extractTableData(table) {
    const rows = table.getElementsByTagName("tr");
    const exportData = [];
    
    // Extract headers
    if (rows.length > 0) {
        const headers = extractHeaders(rows[0]);
        exportData.push(headers);
    }
    
    // Extract data rows
    for (let i = 1; i < rows.length; i++) {
        const rowData = extractRowData(rows[i], exportData[0]);
        exportData.push(rowData);
    }
    
    if (exportData.length <= 1) {
        throw new Error('Geen data om te exporteren');
    }
    
    return exportData;
}

function extractHeaders(headerRow) {
    const headerCells = headerRow.getElementsByTagName("th");
    return Array.from(headerCells).map(cell => 
        cleanText(cell.textContent)
    );
}

function extractRowData(row, headers) {
    const cells = row.getElementsByTagName("td");
    return Array.from(cells).map((cell, colIndex) => {
        const text = getCleanCellText(cell);
        return isMultiValueColumn(headers[colIndex]) 
            ? cleanMultiValueField(text) 
            : text;
    });
}

function getCleanCellText(cell) {
    const clone = cell.cloneNode(true);
    
    // Remove debug elements
    const debugElements = clone.querySelectorAll('.debug');
    debugElements.forEach(el => el.remove());
    
    return cleanText(clone.textContent);
}

function cleanText(text) {
    return text
        .trim()
        .replace(/[\s\n]+/g, ' '); // Single regex for all whitespace
}

function isMultiValueColumn(header) {
    if (!header) return false;
    const lowerHeader = header.toLowerCase();
    return ['rollen', 'levenscyclus', 'onderwerp'].some(col => 
        lowerHeader.includes(col)
    );
}

function cleanMultiValueField(text) {
    return text
        .replace(/\s+(?=\w+[-\w]*)/g, EXPORT_CONFIG.MULTI_VALUE_SEPARATOR)
        .replace(/[;,]\s*[;,]/g, EXPORT_CONFIG.MULTI_VALUE_SEPARATOR);
}

function createStyledWorkbook(exportData, activeFilters) {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(exportData);
    
    setColumnWidths(ws, exportData);
    applyFilters(ws, exportData, activeFilters);
    
    XLSX.utils.book_append_sheet(wb, ws, "Maatregelen");
    return wb;
}

function setColumnWidths(worksheet, exportData) {
    const colWidths = calculateColumnWidths(exportData);
    worksheet['!cols'] = colWidths.map(width => ({ width }));
}

function calculateColumnWidths(exportData) {
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
    
    return colWidths;
}

function applyFilters(worksheet, exportData, activeFilters) {
    if (exportData.length <= 1) return;
    
    const range = XLSX.utils.encode_range({
        s: { c: 0, r: 0 },
        e: { c: exportData[0].length - 1, r: exportData.length - 1 }
    });
    worksheet['!autofilter'] = { ref: range };
    
    if (activeFilters.length > 0) {
        applyRowFiltering(worksheet, exportData, activeFilters);
    }
}

function applyRowFiltering(worksheet, exportData, activeFilters) {
    for (let rowIndex = 1; rowIndex < exportData.length; rowIndex++) {
        if (shouldHideRow(exportData[rowIndex], exportData[0], activeFilters)) {
            if (!worksheet['!rows']) worksheet['!rows'] = [];
            worksheet['!rows'][rowIndex] = { hidden: true };
        }
    }
}

function shouldHideRow(row, headers, activeFilters) {
    return activeFilters.some(filter => {
        const colIndex = getColumnIndex(headers, filter.type);
        if (colIndex === -1) return false;
        
        const cellValue = row[colIndex].toLowerCase();
        const filterValue = filter.value.toLowerCase();
        
        return !cellValue.includes(filterValue);
    });
}

function getColumnIndex(headers, filterType) {
    const typeMap = {
        'rollen': ['rollen', 'rol'],
        'levenscyclus': ['levenscyclus', 'lifecycle'],
        'onderwerp': ['onderwerp', 'subject', 'onderwerpen']
    };
    
    const searchTerms = typeMap[filterType] || [filterType];
    
    return searchTerms.reduce((index, term) => {
        if (index !== -1) return index;
        return headers.findIndex(header => 
            header.toLowerCase().includes(term.toLowerCase())
        );
    }, -1);
}

function getCurrentFilters() {
    const filterConfigs = [
        { id: 'filterSelect', type: 'rollen' },
        { id: 'filterLevenscyclusSelect', type: 'levenscyclus' },
        { id: 'filterOnderwerpSelect', type: 'onderwerp' }
    ];
    
    return filterConfigs.flatMap(config => 
        getSelectedOptions(config.id, config.type)
    );
}

function getSelectedOptions(selectId, filterType) {
    const select = document.getElementById(selectId);
    if (!select) return [];
    
    return Array.from(select.options)
        .filter(option => option.selected && option.value)
        .map(option => ({ type: filterType, value: option.text }));
}

function downloadWorkbook(workbook) {
    const timestamp = new Date().toISOString().slice(0, 10);
    const filename = `Algoritmekader_maatregelen_${timestamp}.xlsx`;
    XLSX.writeFile(workbook, filename);
}

function setButtonState(button, disabled, text) {
    if (!button) return;
    button.disabled = disabled;
    button.textContent = text;
}

function handleExportError(error) {
    console.error('Excel export error:', error);
    alert(`Excel export mislukt: ${error.message}`);
}

function logExportSuccess(rowCount, filterCount) {
    console.log(`Exported ${rowCount} total maatregelen to Excel with ${filterCount} filters applied`);
}

// Make function globally available
window.exportMaatregelen = exportMaatregelen;