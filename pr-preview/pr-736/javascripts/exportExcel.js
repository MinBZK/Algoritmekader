// Export filtered table to Excel
// Requires SheetJS library

function exportMaatregelen() {
    const button = document.getElementById('export-btn');
    if (button) {
        button.disabled = true;
        button.textContent = 'Exporteren...';
    }
    
    try {
        // Check if XLSX is available
        if (typeof XLSX === 'undefined') {
            throw new Error('SheetJS library niet geladen');
        }
        
        // Get visible rows from the filtered table
        const table = document.getElementById("myTable");
        if (!table) {
            throw new Error('Tabel niet gevonden');
        }
        
        const exportData = [];
        const rows = table.getElementsByTagName("tr");
        
        // Get header row
        if (rows.length > 0) {
            const headerCells = rows[0].getElementsByTagName("th");
            const headers = Array.from(headerCells).map(cell => cell.textContent.trim());
            exportData.push(headers);
        }
        
        // Get ALL data rows and clean multi-value fields
        for (let i = 1; i < rows.length; i++) {
            const cells = rows[i].getElementsByTagName("td");
            const rowData = Array.from(cells).map((cell, colIndex) => {
                // Remove debug elements and get clean text
                const clone = cell.cloneNode(true);
                const debugElements = clone.querySelectorAll('.debug');
                debugElements.forEach(el => el.remove());
                
                // Clean up text: remove extra whitespace and normalize line breaks
                let text = clone.textContent.trim();
                text = text.replace(/\s+/g, ' ');
                text = text.replace(/\n+/g, ' ');
                
                // Clean multi-value fields for better filtering
                const header = exportData[0][colIndex]?.toLowerCase() || '';
                if (header.includes('rollen') || header.includes('levenscyclus') || header.includes('onderwerp')) {
                    // Replace spaces between roles/values with semicolons for cleaner separation
                    text = text.replace(/\s+(?=\w+[-\w]*)/g, '; ');
                    // Remove duplicate separators
                    text = text.replace(/[;,]\s*[;,]/g, '; ');
                }
                
                return text;
            });
            exportData.push(rowData);
        }
        
        if (exportData.length <= 1) {
            throw new Error('Geen zichtbare data om te exporteren');
        }
        
        // Get current filters
        const activeFilters = getCurrentFilters();
        
        // Create workbook and worksheet
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.aoa_to_sheet(exportData);
        
        // Auto-size columns
        const colWidths = [];
        exportData.forEach(row => {
            row.forEach((cell, colIndex) => {
                const width = String(cell).length;
                colWidths[colIndex] = Math.max(colWidths[colIndex] || 10, Math.min(width + 2, 50));
            });
        });
        ws['!cols'] = colWidths.map(w => ({ width: w }));
        
        // Apply Excel filters to match website filters
        if (exportData.length > 1) {
            const range = XLSX.utils.encode_range({
                s: { c: 0, r: 0 },
                e: { c: exportData[0].length - 1, r: exportData.length - 1 }
            });
            ws['!autofilter'] = { ref: range };
            
            // Hide rows that don't match current website filters
            if (activeFilters.length > 0) {
                for (let rowIndex = 1; rowIndex < exportData.length; rowIndex++) {
                    const row = exportData[rowIndex];
                    let shouldHideRow = false;
                    
                    // Check if row matches all active filters
                    for (const filter of activeFilters) {
                        const colIndex = getColumnIndex(exportData[0], filter.type);
                        if (colIndex !== -1) {
                            const cellValue = row[colIndex].toLowerCase();
                            const filterValue = filter.value.toLowerCase();
                            
                            // If filter value not found in cell, hide this row
                            if (!cellValue.includes(filterValue)) {
                                shouldHideRow = true;
                                break;
                            }
                        }
                    }
                    
                    // Hide row in Excel by setting row height to 0
                    if (shouldHideRow) {
                        if (!ws['!rows']) ws['!rows'] = [];
                        ws['!rows'][rowIndex] = { hidden: true };
                    }
                }
            }
        }
        
        XLSX.utils.book_append_sheet(wb, ws, "Maatregelen");
        
        // Download file with timestamp
        const timestamp = new Date().toISOString().slice(0, 10);
        XLSX.writeFile(wb, `Algoritmekader_maatregelen_${timestamp}.xlsx`);
        
        console.log(`Exported ${exportData.length - 1} total maatregelen to Excel with ${activeFilters.length} filters applied`);
        
    } catch (error) {
        console.error('Excel export error:', error);
        alert('Excel export mislukt: ' + error.message);
    } finally {
        if (button) {
            button.disabled = false;
            button.textContent = 'Export naar Excel';
        }
    }
}

function splitMultiValue(text) {
    if (!text || text.trim() === '') return [''];
    
    // Split by common separators and clean up
    const values = text
        .split(/[,;]\s*|\s+(?=\w+-)/) // Split by comma, semicolon, or space before word-dash
        .map(v => v.trim())
        .filter(v => v.length > 0);
    
    return values.length > 0 ? values : [''];
}

function getColumnIndex(headers, filterType) {
    const typeMap = {
        'rollen': ['rollen', 'rol'],
        'levenscyclus': ['levenscyclus', 'lifecycle'],
        'onderwerp': ['onderwerp', 'subject', 'onderwerpen']
    };
    
    const searchTerms = typeMap[filterType] || [filterType];
    
    for (const term of searchTerms) {
        const index = headers.findIndex(header => 
            header.toLowerCase().includes(term.toLowerCase())
        );
        if (index !== -1) return index;
    }
    
    return -1;
}

function getCurrentFilters() {
    const filters = [];
    
    // Get selected roles
    const roleSelect = document.getElementById("filterSelect");
    if (roleSelect) {
        Array.from(roleSelect.options)
            .filter(option => option.selected && option.value)
            .forEach(option => {
                filters.push({ type: 'rollen', value: option.text });
            });
    }
    
    // Get selected levenscyclus
    const lcSelect = document.getElementById("filterLevenscyclusSelect");
    if (lcSelect) {
        Array.from(lcSelect.options)
            .filter(option => option.selected && option.value)
            .forEach(option => {
                filters.push({ type: 'levenscyclus', value: option.text });
            });
    }
    
    // Get selected onderwerp
    const onderwerpSelect = document.getElementById("filterOnderwerpSelect");
    if (onderwerpSelect) {
        Array.from(onderwerpSelect.options)
            .filter(option => option.selected && option.value)
            .forEach(option => {
                filters.push({ type: 'onderwerp', value: option.text });
            });
    }
    
    return filters;
}

// Make function globally available
window.exportMaatregelen = exportMaatregelen;