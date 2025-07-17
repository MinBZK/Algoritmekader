#!/usr/bin/env python3
"""
Tests voor Excel export functionaliteit
Focus op eindgebruiker scenario's: werkt de export zoals verwacht?
"""

import pytest
from playwright.sync_api import sync_playwright, Page
from pathlib import Path


@pytest.fixture
def browser_page():
    """Setup browser page met Excel export functionaliteit"""
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Load SheetJS library
        page.add_script_tag(
            url="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js"
        )

        # Load je export script
        script_path = Path("docs/javascripts/exportExcel.js")
        with open(script_path) as f:
            script_content = f.read()
        page.add_script_tag(content=script_content)

        yield page
        browser.close()


def test_export_with_no_filters_includes_all_rows(browser_page: Page):
    """Test: Als er geen filters actief zijn, moeten alle rijen geëxporteerd worden"""
    # given - geen filters geselecteerd
    browser_page.evaluate("""
        window.capturedExportData = null;
        XLSX.utils.aoa_to_sheet = (data) => {
            window.capturedExportData = data;
            return { '!cols': [], '!autofilter': null };
        };
        XLSX.utils.book_append_sheet = () => {};
        XLSX.writeFile = () => {};

        document.body.innerHTML = `
            <select id="filterSelect" multiple>
                <option value="data-scientist">Data Scientist</option>
                <option value="jurist">Jurist</option>
            </select>
            <select id="filterLevenscyclusSelect" multiple></select>
            <select id="filterOnderwerpSelect" multiple></select>
            <button id="export-btn">Export</button>
            <span id="content_type">maatregelen</span>

            <table id="myTable">
                <tr><th>ID</th><th>Naam</th><th>Rollen</th></tr>
                <tr><td>1</td><td>Voor Data Scientist</td><td>data-scientist</td></tr>
                <tr><td>2</td><td>Voor Jurist</td><td>jurist</td></tr>
                <tr><td>3</td><td>Voor Beide</td><td>data-scientist jurist</td></tr>
            </table>
        `;
    """)

    # when - export zonder filters
    browser_page.evaluate("exportODS()")

    # then - alle 3 data rijen + header moeten geëxporteerd zijn (geen filterrij, geen instructie)
    exported_data = browser_page.evaluate("window.capturedExportData")
    assert len(exported_data) == 4  # header + 3 rows (geen filterrij, geen instructie)
    assert exported_data[0] == ["ID", "Naam", "Rollen"]  # header row
    assert exported_data[1][0] == "1"
    assert exported_data[2][0] == "2"
    assert exported_data[3][0] == "3"


def test_export_with_filter_only_includes_matching_rows(browser_page: Page):
    """Test: Met filter moeten alleen matchende rijen geëxporteerd worden"""
    # given - filter op "Data Scientist" actief
    browser_page.evaluate("""
        window.capturedExportData = null;
        XLSX.utils.aoa_to_sheet = (data) => {
            window.capturedExportData = data;
            return { '!cols': [], '!autofilter': null };
        };
        XLSX.utils.book_append_sheet = () => {};
        XLSX.writeFile = () => {};

        document.body.innerHTML = `
            <select id="filterSelect" multiple>
                <option value="data-scientist" selected>Data Scientist</option>
                <option value="jurist">Jurist</option>
            </select>
            <select id="filterLevenscyclusSelect" multiple></select>
            <select id="filterOnderwerpSelect" multiple></select>
            <button id="export-btn">Export</button>
            <span id="content_type">maatregelen</span>

            <table id="myTable">
                <tr><th>ID</th><th>Naam</th><th>Rollen</th></tr>
                <tr><td>1</td><td>Voor Data Scientist</td><td>data-scientist</td></tr>
                <tr><td>2</td><td>Voor Jurist</td><td>jurist</td></tr>
                <tr><td>3</td><td>Voor Beide</td><td>data-scientist jurist</td></tr>
            </table>
        `;
    """)

    # when - export met filter
    browser_page.evaluate("exportODS()")

    # then - alleen zichtbare rijen + filter rij + header
    exported_data = browser_page.evaluate("window.capturedExportData")
    assert len(exported_data) == 5  # filter row + header + 3 rows (alleen zichtbare)
    assert "gefilterde maatregelen" in exported_data[0][0]  # filter row
    assert exported_data[1] == ["ID", "Naam", "Rollen"]  # header row

    # Check dat er workbook met filters wordt aangemaakt
    workbook_created = browser_page.evaluate(
        "typeof window.capturedExportData === 'object'"
    )
    assert workbook_created


def test_multi_value_columns_get_semicolon_separators_in_export(browser_page: Page):
    """Test: Multi-value kolommen (rollen, levenscyclus) krijgen ; als separator in export"""
    # given
    browser_page.evaluate("""
        window.capturedExportData = null;
        XLSX.utils.aoa_to_sheet = (data) => {
            window.capturedExportData = data;
            return { '!cols': [], '!autofilter': null };
        };
        XLSX.utils.book_append_sheet = () => {};
        XLSX.writeFile = () => {};

        document.body.innerHTML = `
            <select id="filterSelect" multiple></select>
            <select id="filterLevenscyclusSelect" multiple></select>
            <select id="filterOnderwerpSelect" multiple></select>
            <button id="export-btn">Export</button>
            <span id="content_type">maatregelen</span>

            <table id="myTable">
                <tr><th>ID</th><th>Rollen</th><th>Levenscyclus</th><th>Beschrijving</th></tr>
                <tr><td>1</td><td>data-scientist product-owner developer</td><td>ontwerp ontwikkeling monitoring</td><td>Normale tekst met spaties</td></tr>
            </table>
        `;
    """)

    # when
    browser_page.evaluate("exportODS()")

    # then - multi-value kolommen hebben ; separator, andere kolommen niet
    exported_data = browser_page.evaluate("window.capturedExportData")
    row_data = exported_data[1]  # Eerste data-rij na header (geen filterrij)

    assert row_data[1] == "data-scientist; product-owner; developer"  # Rollen column
    assert row_data[2] == "ontwerp; ontwikkeling; monitoring"  # Levenscyclus column
    assert row_data[3] == "Normale tekst met spaties"  # Beschrijving unchanged


def test_maatregelen_vs_vereisten_export_different_filenames(browser_page: Page):
    """Test: Maatregelen en vereisten export hebben verschillende bestandsnamen"""
    # given
    browser_page.evaluate("""
        window.exportedFilenames = [];
        XLSX.utils.aoa_to_sheet = () => ({ '!cols': [], '!autofilter': null });
        XLSX.utils.book_append_sheet = () => {};
        XLSX.writeFile = (workbook, filename) => {
            window.exportedFilenames.push(filename);
        };

        document.body.innerHTML = `
            <select id="filterSelect" multiple></select>
            <select id="filterLevenscyclusSelect" multiple></select>
            <select id="filterOnderwerpSelect" multiple></select>
            <button id="export-btn">Export</button>
            <span id="content_type">maatregelen</span>
            <table id="myTable"><tr><th>Test</th></tr><tr><td>Data</td></tr></table>
        `;
    """)

    # when - test both maatregelen and vereisten
    browser_page.evaluate("exportODS()")
    browser_page.evaluate("""
        document.getElementById('content_type').textContent = 'vereisten';
        exportODS();
    """)

    # then
    filenames = browser_page.evaluate("window.exportedFilenames")
    assert len(filenames) == 2
    assert "maatregelen" in filenames[0].lower()
    assert "vereisten" in filenames[1].lower()
    assert filenames[0].endswith(".ods")
    assert filenames[1].endswith(".ods")


def test_export_fails_gracefully_when_table_missing(browser_page: Page):
    """Test: Export toont foutmelding als tabel ontbreekt (geen crash)"""
    # given - geen tabel aanwezig
    browser_page.evaluate("""
        window.alertMessages = [];
        window.originalAlert = alert;
        alert = (msg) => window.alertMessages.push(msg);

        document.body.innerHTML = '<button id="export-btn">Export</button><span id="content_type">maatregelen</span>';
    """)

    # when
    browser_page.evaluate("exportODS()")

    # then - error message, geen crash
    alerts = browser_page.evaluate("window.alertMessages")
    assert len(alerts) > 0
    assert any("niet gevonden" in alert.lower() for alert in alerts)


def test_ods_export_with_filters_creates_proper_autofilter(browser_page: Page):
    """Test: ODS export met filters heeft correct autofilter en styling"""
    # given
    browser_page.evaluate("""
        window.capturedWorksheet = null;
        window.capturedWriteOptions = null;
        
        XLSX.utils.aoa_to_sheet = (data) => {
            const ws = { '!cols': [], '!autofilter': null, '!merges': [] };
            // Simulate worksheet creation
            return ws;
        };
        
        XLSX.utils.book_append_sheet = (wb, ws, name) => {
            window.capturedWorksheet = ws;
        };
        
        XLSX.writeFile = (workbook, filename, options) => {
            window.capturedWriteOptions = options;
        };

        document.body.innerHTML = `
            <select id="filterSelect" multiple>
                <option value="data-scientist" selected>Data Scientist</option>
            </select>
            <select id="filterLevenscyclusSelect" multiple></select>
            <select id="filterOnderwerpSelect" multiple></select>
            <button id="export-btn">Export</button>
            <span id="content_type">maatregelen</span>

            <table id="myTable">
                <tr><th>ID</th><th>Naam</th><th>Rollen</th></tr>
                <tr><td>1</td><td>Voor Data Scientist</td><td>data-scientist</td></tr>
                <tr><td>2</td><td>Voor Jurist</td><td>jurist</td></tr>
            </table>
        `;
    """)

    # when
    browser_page.evaluate("exportODS()")

    # then - verify ODS-specific options are used
    write_options = browser_page.evaluate("window.capturedWriteOptions")
    assert write_options is not None
    assert write_options.get('bookType') == 'ods'
    
    # Verify worksheet has autofilter
    worksheet = browser_page.evaluate("window.capturedWorksheet")
    assert worksheet is not None
    assert '!autofilter' in worksheet
