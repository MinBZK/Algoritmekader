function filterTable() {
    var input = document.getElementById("filterInput");
    var filter = input ? input.value.toUpperCase() : "";
    var select = document.getElementById("filterSelect");
    var selectValue = select ? select.value.toUpperCase() : "";
    var levenscyclusSelect = document.getElementById("filterLevenscyclusSelect");
    var levenscyclusValue = levenscyclusSelect ? levenscyclusSelect.value.toUpperCase() : "";
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
document.addEventListener('DOMContentLoaded', function() {
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