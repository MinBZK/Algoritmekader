function filterTable() {
    console.log("filterTable is aangeroepen");
    
    var input = document.getElementById("filterInput");
    var filter = input ? input.value.toUpperCase() : "";

    var select = document.getElementById("filterSelect");
    var selectedRoles = $(select).val().map(option => option.toUpperCase());

    var levenscyclusSelect = document.getElementById("filterLevenscyclusSelect");
    var selectedLevenscyclus = $(levenscyclusSelect).val().map(option => option.toUpperCase());

    var table = document.getElementById("myTable");
    var tr = table ? table.getElementsByTagName("tr") : [];

    for (var i = 1; i < tr.length; i++) { // Start at 1 to skip the header row
        var td = tr[i].getElementsByTagName("td")[0];
        var roles = tr[i].getElementsByTagName("td")[1];
        var lc = tr[i].getElementsByTagName("td")[2];

        if (td && roles && lc) {
            var txtValue = td.textContent || td.innerText;
            var txtValue2 = roles.textContent || roles.innerText;
            var txtValue3 = lc.textContent || lc.innerText;

            // Controleer of alle geselecteerde rollen aanwezig zijn
            var roleMatch = selectedRoles.every(role => txtValue2.toUpperCase().indexOf(role) > -1);
            // Controleer of alle geselecteerde levenscycli aanwezig zijn
            var lcMatch = selectedLevenscyclus.every(lc => txtValue3.toUpperCase().indexOf(lc) > -1);

            if (txtValue.toUpperCase().indexOf(filter) > -1 && roleMatch && lcMatch) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

$(document).ready(function() {
    console.log("jQuery versie:", $.fn.jquery);  // Controleer de geladen jQuery-versie
    console.log("Select2 beschikbaar:", typeof $.fn.select2 !== 'undefined');  // Controleer of Select2 beschikbaar is

    // Controleer of Select2 geladen is
    if (typeof $.fn.select2 === 'function') {
        // Initializeer Select2 voor multi-select elementen
        $('.js-example-basic-multiple').select2();
    } else {
        console.error("Select2 is niet geladen of is niet correct geïnitieerd.");
    }

    function setActiveLink() {
        var currentUrl = window.location.pathname;

        // Remove existing active classes
        document.querySelectorAll('.md-nav__item--active, .md-nav__link--active, .md-nav__dropdown-item--active, .md-nav__dropdown-link--active').forEach(function(el) {
            el.classList.remove('md-nav__item--active', 'md-nav__link--active', 'md-nav__dropdown-item--active', 'md-nav__dropdown-link--active');
        });

        // If on root URL, don't set any active class
        if (currentUrl === '/') {
            return;
        }

        function setActiveClass(el) {
            el.classList.add('md-nav__link--active');
            var item = el.closest('.md-nav__item');
            if (item) {
                item.classList.add('md-nav__item--active');
            }
        }

        function isPathActive(linkPath) {
            return currentUrl === linkPath || currentUrl.startsWith(linkPath + '/');
        }

        // Set active class for top nav links
        document.querySelectorAll('.md-nav--top .md-nav__link').forEach(function(link) {
            var linkPath = new URL(link.href).pathname;
            if (isPathActive(linkPath)) {
                setActiveClass(link);
            }
        });

        // Set active class for dropdown links
        document.querySelectorAll('.md-nav__dropdown-link').forEach(function(link) {
            var linkPath = new URL(link.href).pathname;
            if (isPathActive(linkPath)) {
                link.classList.add('md-nav__dropdown-link--active');
                var dropdownItem = link.closest('.md-nav__dropdown-item');
                if (dropdownItem) {
                    dropdownItem.classList.add('md-nav__dropdown-item--active');
                    var parentItem = dropdownItem.closest('.md-nav__item');
                    if (parentItem) {
                        parentItem.classList.add('md-nav__item--active');
                    }
                }
            }
        });
    }

    // Initially set active link
    setActiveLink();

    // Add event listener for navigation links to update active state on click
    document.querySelectorAll('.md-nav__link, .md-nav__dropdown-link').forEach(function(link) {
        link.addEventListener('click', function() {
            // Use requestAnimationFrame to ensure update happens after DOM update
            requestAnimationFrame(setActiveLink);
        });
    });
});
