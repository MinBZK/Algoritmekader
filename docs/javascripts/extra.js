function filterTable() {
    var input, filter, select, selectValue, levenscyclusSelect, levenscyclusValue, table, tr, td, i, txtValue, roles, lc, txtValue2, txtValue3;
    input = document.getElementById("filterInput");
    filter = input ? input.value.toUpperCase() : "";
    select = document.getElementById("filterSelect");
    selectValue = select ? select.value.toUpperCase() : "";
    levenscyclusSelect = document.getElementById("filterLevenscyclusSelect");
    levenscyclusValue = levenscyclusSelect ? levenscyclusSelect.value.toUpperCase() : "";
    table = document.getElementById("myTable");
    tr = table ? table.getElementsByTagName("tr") : [];

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        roles = tr[i].getElementsByTagName("td")[2];
        lc = tr[i].getElementsByTagName("td")[3];

        if (td && roles && lc) {
            txtValue = td.textContent || td.innerText;
            txtValue2 = roles.textContent || roles.innerText;
            txtValue3 = lc.textContent || lc.innerText;

            if ((txtValue.toUpperCase().indexOf(filter) > -1) &&
                (selectValue === '' || txtValue2.toUpperCase().indexOf(selectValue) > -1) &&
                (levenscyclusValue === '' || txtValue3.toUpperCase().indexOf(levenscyclusValue) > -1)) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
