// Initialize tablesort without interfering with MkDocs Material skiplink
(function() {
    function initializeTablesort() {
        var tables = document.querySelectorAll("article table:not([class])")
        tables.forEach(function(table) {
            new Tablesort(table)
        })
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeTablesort);
    } else {
        initializeTablesort();
    }
})()
