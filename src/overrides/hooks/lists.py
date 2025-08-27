from typing import List, Dict, Callable, Optional
import posixpath
import re
import os
from mkdocs.config.defaults import MkDocsConfig
from mkdocs.structure.files import File, Files
from re import Match

# Cache for abbreviations to avoid reading file multiple times
_abbreviations_cache = None
_current_config = None


def _load_abbreviations(config: MkDocsConfig) -> Dict[str, str]:
    """Load abbreviations from begrippenlijst.md"""
    global _abbreviations_cache

    if _abbreviations_cache is not None:
        return _abbreviations_cache

    possible_paths = [
        os.path.join(
            os.path.dirname(config["docs_dir"]), "includes", "begrippenlijst.md"
        ),
        os.path.join(config["docs_dir"], "..", "includes", "begrippenlijst.md"),
    ]

    for path in possible_paths:
        if os.path.exists(path):
            try:
                with open(path, "r", encoding="utf-8") as f:
                    content = f.read()

                abbreviations = {}
                for match in re.finditer(r"\*\[([^\]]+)\]:\s*(.+)", content):
                    term = match.group(1).strip()
                    definition = (
                        match.group(2).strip().rstrip(".")
                    )  # Remove trailing period
                    abbreviations[term.upper()] = definition

                _abbreviations_cache = abbreviations
                return abbreviations
            except Exception as e:
                print(f"Error loading abbreviations: {e}")
                break

    _abbreviations_cache = {}
    return {}


class ColumnConfig:
    """Configuration for a table column"""

    def __init__(
        self,
        key: str,
        title: str,
        render_cell: Callable[[File, MkDocsConfig, File], str],
        render_filter: Optional[
            Callable[[List[File], Dict[str, bool]], List[str]]
        ] = None,
        default_enabled: bool = True,
    ):
        self.key = key
        self.title = title
        self.render_cell = render_cell
        self.render_filter = render_filter
        self.default_enabled = default_enabled


def _render_wetcode_cell(file: File, config: MkDocsConfig, current_file: File) -> str:
    """Render wet-code column cell with mixed display (some full names, some abbreviations)"""
    vereiste_id = file.page.meta.get("id", "")[14:]
    wet_code = vereiste_id.split("-")[0] if vereiste_id else ""
    wet_code_upper = wet_code.upper()

    # Keep these as abbreviations with hover
    keep_abbreviated = {"AVG", "BIO", "BZK", "WOO", "AWB"}

    abbreviations = _load_abbreviations(config)

    if wet_code_upper in abbreviations:
        definition = abbreviations[wet_code_upper]
        if wet_code_upper in keep_abbreviated:
            # Show abbreviation with tooltip
            return f'<td><abbr title="{definition}">{wet_code_upper}</abbr></td>'
        else:
            # Show full name without hover
            return f"<td>{definition}</td>"
    else:
        return f"<td>{wet_code_upper}</td>"


def _render_title_cell(file: File, config: MkDocsConfig, current_file: File) -> str:
    """Render title column cell"""
    base_url = config.site_url if config.site_url else "/"
    relative_link = posixpath.join(base_url, file.dest_path)
    return f'<td><a href="{relative_link}">{file.page.title}</a></td>'


def _render_rol_cell(file: File, config: MkDocsConfig, current_file: File) -> str:
    """Render rol column cell"""
    rollen = file.page.meta.get("rollen", [])
    rollen_chips = "".join(
        _create_chip(rol, "rol", current_file, config) for rol in rollen
    )
    return f"<td>{rollen_chips}</td>"


def _render_levenscyclus_cell(
    file: File, config: MkDocsConfig, current_file: File
) -> str:
    """Render levenscyclus column cell"""
    levenscyclus = file.page.meta.get("levenscyclus", [])
    levenscyclus_chips = "".join(
        _create_chip(lc, "levenscyclus", current_file, config) for lc in levenscyclus
    )
    return f"<td>{levenscyclus_chips}</td>"


def _render_onderwerp_cell(file: File, config: MkDocsConfig, current_file: File) -> str:
    """Render onderwerp column cell"""
    onderwerpen = file.page.meta.get("onderwerp", [])
    onderwerp_chips = "".join(
        _create_chip(onderwerp, "onderwerp", current_file, config)
        for onderwerp in onderwerpen
    )
    return f"<td>{onderwerp_chips}</td>"


def _render_rol_filter(
    file_list: List[File], filter_options: Dict[str, bool]
) -> List[str]:
    """Generate filter options for rol column"""
    rollen = sorted(
        set(rol for file in file_list for rol in file.page.meta.get("rollen", []))
    )
    if not rollen:
        return []

    filter_id = "filter-rol"
    filter_html = [
        '<div class="filter-item filter-item--roles">',
        f'<label for="{filter_id}">Rollen</label>',
        f'<select id="{filter_id}" class="js-example-basic-multiple filter-item__select" name="states[]" multiple="multiple" data-placeholder="" data-filter-column="rol">',
    ]
    filter_html.extend(f'<option value="{rol}">{rol}</option>' for rol in rollen)
    filter_html.extend(["</select>", "</div>"])
    return filter_html


def _render_levenscyclus_filter(
    file_list: List[File], filter_options: Dict[str, bool]
) -> List[str]:
    """Generate filter options for levenscyclus column"""
    levenscyclus = sorted(
        set(lc for file in file_list for lc in file.page.meta.get("levenscyclus", []))
    )
    if not levenscyclus:
        return []

    filter_id = "filter-levenscyclus"
    filter_html = [
        '<div class="filter-item filter-item--levenscyclus">',
        f'<label for="{filter_id}">Levenscyclus</label>',
        f'<select id="{filter_id}" class="js-example-basic-multiple filter-item__select" name="states[]" multiple="multiple" data-placeholder="" data-filter-column="levenscyclus">',
    ]
    filter_html.extend(f'<option value="{lc}">{lc}</option>' for lc in levenscyclus)
    filter_html.extend(["</select>", "</div>"])
    return filter_html


def _render_onderwerp_filter(
    file_list: List[File], filter_options: Dict[str, bool]
) -> List[str]:
    """Generate filter options for onderwerp column"""
    onderwerpen = sorted(
        set(
            onderwerp
            for file in file_list
            for onderwerp in file.page.meta.get("onderwerp", [])
        )
    )
    if not onderwerpen:
        return []

    filter_id = "filter-onderwerp"
    filter_html = [
        '<div class="filter-item filter-item--onderwerp">',
        f'<label for="{filter_id}">Onderwerpen</label>',
        f'<select id="{filter_id}" class="js-example-basic-multiple filter-item__select" name="subjects[]" multiple="multiple" data-placeholder="" data-filter-column="onderwerp">',
    ]
    filter_html.extend(
        f'<option value="{onderwerp}">{onderwerp}</option>' for onderwerp in onderwerpen
    )
    filter_html.extend(["</select>", "</div>"])
    return filter_html


def _render_wetcode_filter(
    file_list: List[File], filter_options: Dict[str, bool]
) -> List[str]:
    """Generate filter options for wet-code column"""
    global _current_config
    
    wet_codes = set()
    for file in file_list:
        vereiste_id = file.page.meta.get("id", "")[14:]
        wet_code = vereiste_id.split("-")[0] if vereiste_id else ""
        if wet_code:
            wet_codes.add(wet_code)

    if not wet_codes:
        return []

    wet_mapping = {
        "aia": "AI-verordening",
        "avg": "Algemene Verordening Gegevensbescherming",
        "grw": "Grondwet",
        "awb": "Algemene wet bestuursrecht",
        "woo": "Wet open overheid",
        "dat": "Databankenwet",
        "bzk": "BZK/Algoritmeregister",
        "bio": "Baseline Informatiebeveiliging Overheid",
        "aut": "Auteursrecht",
        "arc": "Archiefwet",
    }

    sorted_codes = sorted(wet_codes, key=lambda x: wet_mapping.get(x, x.upper()))

    filter_id = "filter-wetcode"
    filter_html = [
        '<div class="filter-item filter-item--wetcode">',
        f'<label for="{filter_id}">Wetgeving</label>',
        f'<select id="{filter_id}" class="js-example-basic-multiple filter-item__select" name="wetcodes[]" multiple="multiple" data-placeholder="" data-filter-column="wetcode">',
    ]

    if _current_config:
        abbreviations = _load_abbreviations(_current_config)
    else:
        abbreviations = {}
        
    keep_abbreviated = {"AVG", "BIO", "BZK", "WOO", "AWB"}

    for code in sorted_codes:
        wet_code_upper = code.upper()
        display_name = wet_mapping.get(code, wet_code_upper)
        
        if wet_code_upper in abbreviations and wet_code_upper in keep_abbreviated:
            table_display = wet_code_upper
            filter_display = wet_code_upper
        elif wet_code_upper in abbreviations:
            table_display = abbreviations[wet_code_upper]
            filter_display = abbreviations[wet_code_upper]
        else:
            table_display = display_name
            filter_display = display_name
            
        filter_html.append(
            f'<option value="{table_display}">{filter_display}</option>'
        )

    filter_html.extend(["</select>", "</div>"])
    return filter_html


def get_column_config() -> List[ColumnConfig]:
    """
    Column configuration for maatregelen tables.
    See src/FLEXIBLE_FILTERS_README.md for detailed documentation.
    """
    return [
        ColumnConfig("title", "Title", _render_title_cell),
        ColumnConfig("rol", "Rollen", _render_rol_cell, _render_rol_filter),
        ColumnConfig(
            "levenscyclus",
            "Levenscyclus",
            _render_levenscyclus_cell,
            _render_levenscyclus_filter,
        ),
        ColumnConfig(
            "onderwerp", "Onderwerpen", _render_onderwerp_cell, _render_onderwerp_filter
        ),
    ]


def get_vereisten_column_config() -> List[ColumnConfig]:
    """
    Column configuration for vereisten tables (includes wetcode column).
    See src/FLEXIBLE_FILTERS_README.md for detailed documentation.
    """
    return [
        ColumnConfig("title", "Title", _render_title_cell),
        ColumnConfig(
            "wetcode", "Wetgeving", _render_wetcode_cell, _render_wetcode_filter
        ),
        ColumnConfig("rol", "Rollen", _render_rol_cell, _render_rol_filter),
        ColumnConfig(
            "levenscyclus",
            "Levenscyclus",
            _render_levenscyclus_cell,
            _render_levenscyclus_filter,
        ),
        ColumnConfig(
            "onderwerp", "Onderwerpen", _render_onderwerp_cell, _render_onderwerp_filter
        ),
    ]


def _create_chip(
    item: str, chip_type: str, current_file: File, config: MkDocsConfig
) -> str:
    if not item:
        return ""

    # Initialize icon and color
    icon_svg, color_class = "", ""

    # Initialize base_url
    base_url = config.site_url if config.site_url else "/"

    # Determine chip-specific styles and icons
    if chip_type == "rol":
        color_class = "deep-orange"
        icon_svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 4a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4Z"></path></svg>'
        link = posixpath.join(base_url, "rollen", item)
    elif chip_type == "levenscyclus":
        color_class = "indigo"
        icon_svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2 12a9 9 0 0 0 9 9c2.39 0 4.68-.94 6.4-2.6l-1.5-1.5A6.706 6.706 0 0 1 11 19c-6.24 0-9.36-7.54-4.95-11.95C10.46 2.64 18 5.77 18 12h-3l4 4h.1l3.9-4h-3a9 9 0 0 0-18 0Z"></path></svg>'
        link = posixpath.join(base_url, "levenscyclus", item)
    elif chip_type == "onderwerp":
        color_class = "teal"
        icon_svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7M9 21a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1H9v1Z"></path></svg>'
        link = posixpath.join(base_url, "onderwerpen", item)
    elif chip_type == "vereiste":
        color_class = "blue"
        icon_svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM10 7l5 5-5 5V7z"/></svg>'
        link = posixpath.join(
            base_url, "vereisten", item
        )  # Define a path for 'vereiste'
    else:
        color_class = "blue"
        icon_svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2 12a9 9 0 0 0 9 9c2.39 0 4.68-.94 6.4-2.6l-1.5-1.5A6.706 6.706 0 0 1 11 19c-6.24 0-9.36-7.54-4.95-11.95C10.46 2.64 18 5.77 18 12h-3l4 4h.1l3.9-4h-3a9 9 0 0 0-18 0Z"></path></svg>'
        link = posixpath.join(base_url, chip_type, item)  # Fallback to generic type

    return f'''
        <a href="{link}" class="mdx-badge" data-md-color-accent="{color_class}">
            <span class="mdx-badge__icon">
                <span class="twemoji">{icon_svg}</span>
            </span>
            <span class="mdx-badge__text">
                {item}
            </span>
        </a>
    '''


def _create_table_row_2(
    file: File,
    filter_options: Dict[str, bool],
    current_file: File,
    config: MkDocsConfig,
    column_config: Optional[List[ColumnConfig]] = None,
) -> str:
    if column_config is None:
        # Determine content type from file path to use correct column config
        if "vereisten/" in file.src_path:
            column_config = get_vereisten_column_config()
        else:
            column_config = get_column_config()

    # AI act label fields for data attributes
    ai_act_labels = {
        "soort-toepassing": file.page.meta.get("soort-toepassing", []),
        "risicogroep": file.page.meta.get("risicogroep", []),
        "rol-ai-act": file.page.meta.get("rol-ai-act", []),
        "transparantieverplichting": file.page.meta.get(
            "transparantieverplichting", []
        ),
        "systeemrisico": file.page.meta.get("systeemrisico", []),
        "open-source": file.page.meta.get("open-source", []),
    }

    # create match expression for labels
    label_match_expression = []
    for key, values in ai_act_labels.items():
        if values:
            label_match_expression.append(
                "(" + " || ".join(f"{key}-{value}" for value in values) + ")"
            )
    label_match_expression_str = (
        " && ".join(label_match_expression) if label_match_expression else ""
    )

    data_html_attribute = 'data-labels="' + label_match_expression_str + '"'
    data_html_attribute += (
        'data-uitzondering="'
        + ",".join(
            expr.replace('"', "'") for expr in file.page.meta.get("uitzondering", [])
        )
        + '"'
    )

    # Build cells dynamically based on column configuration
    cells = []
    for column in column_config:
        if filter_options.get(column.key, column.default_enabled):
            cells.append(column.render_cell(file, config, current_file))

    return f"<tr {data_html_attribute}>{''.join(cells)}</tr>"


def should_show_export(current_file: File) -> bool:
    """Bepaalt of export functionaliteit getoond moet worden op basis van metadata van pagina"""
    return current_file.page.meta.get("allow_excel_export", False)


# Define the on_env function and other utility functions
def on_env(env, config: MkDocsConfig, files: Files):
    global _current_config
    _current_config = config
    def generate_filters(
        content_type: str,
        list: List[File],
        filter_options: Dict[str, bool],
        current_file: File,
        column_config: Optional[List[ColumnConfig]] = None,
    ):
        if column_config is None:
            column_config = (
                get_vereisten_column_config()
                if content_type == "vereisten"
                else get_column_config()
            )

        filters = []

        # Add wrapper div with blue background around entire filter section
        wrapper_class = "filter-wrapper"
        if content_type == "vereisten":
            wrapper_class += " vereisten-wrapper"

        filters.append(
            f'<div class="{wrapper_class}" style="background-color: #e6f3fb; padding: 16px; border-radius: 8px; margin-bottom: 16px;">'
        )

        filters.append('<form autocomplete="off" onsubmit="return false;">')

        # Add special class for vereisten to enable compact layout
        container_class = "filter-container info"
        if content_type == "vereisten":
            container_class += " vereisten-filters"

        filters.append(f'<div class="{container_class}">')

        filters.append('<input type="hidden" id="labelsInput"></input>')

        if filter_options.get("search", True):
            filters.append('<div class="filter-item filter-item--search">')
            filters.append('<label for="filterInput">Zoeken</label>')
            filters.append(
                f'<input type="text" id="filterInput" class="filter-item__input" onkeyup="filterTable()" placeholder="Zoek op {content_type}">'
            )
            filters.append("</div>")

        # Generate filters dynamically based on column configuration
        for column in column_config:
            if (
                filter_options.get(column.key, column.default_enabled)
                and column.render_filter
            ):
                filter_html = column.render_filter(list, filter_options)
                filters.extend(filter_html)

        filters.append("</div>")
        filters.append("</form>")

        # AI-act labels info as separate div below the filter container
        if filter_options.get("ai-act-labels", False):
            filters.append("<div id='ai-act-labels-info' style='margin-top: 12px;'>")
            filters.append(
                "<div id='ai-act-info-no-labels'><strong><a href='#' onclick=\"showModal(event, 'ai-act-labels');\">Kies je AI-verordeningprofiel</a> of <a href='#' onclick=\"showModal(event, 'beslishulp AI-verordening');\">gebruik de beslishulp AI-verordening</a> om vereisten te filteren.</strong></div>"
            )
            filters.append(
                "<div id='ai-act-info-with-labels' class='display-none'>Jouw AI-verordening profiel: <span id='ai-act-labels-container'></span> <a href='#' onclick=\"showModal(event, 'ai-act-labels');\">Wijzig je profiel</a> of <a href='#' onclick=\"showModal(event, 'beslishulp AI-verordening');\">open de beslishulp AI-verordening</a>.</div>"
            )
            filters.append("</div>")

        # Close the wrapper div
        filters.append("</div>")

        # Conditional excel export
        if should_show_export(current_file) and content_type in [
            "vereisten",
            "maatregelen",
        ]:
            filters.extend(
                [
                    '<div id="export-excel">',
                    '<div style="display: flex; align-items: center; gap: 20px;">',
                    "<div>",
                    f'Er zijn <strong><span id="total-count">{len(list)}</span></strong> resultaten gevonden',
                    "</div>",
                    "<div>",
                    '<div class="export-dropdown-container" style="position: relative; display: inline-block;">',
                    '<button id="export-btn" onclick="toggleExportDropdown()" class="button md-button--secondary">',
                    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width: 24px; height: 24px; vertical-align: middle; fill: #154271"><path d="M5,20h14a1,1 0 0,0 1-1v-2h-2v2H6v-2H4v2A1,1 0 0,0 5,20M19,9h-4V3H9v6H5l7,7l7-7z"/></svg> Exporteer <span id="content_type">'
                    + content_type
                    + "</span>",
                    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width: 24px; height: 24px; vertical-align: middle; fill: #154271"><path d="M7 10l5 5 5-5" stroke="#154271" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>'
                    "</button>",
                    '<div id="export-dropdown" class="export-dropdown" style="display: none; position: absolute; background: white; border: 1px solid #ccc; border-radius: 4px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); width: 100%; z-index: 10000; font-family: ROsanswebtextregular, Arial, sans-serif; top: calc(100% - 1px); left: 0;">',
                    '<div onclick="exportExcel()" style="padding: 12px 16px; cursor: pointer; border-bottom: 1px solid #eee; color: #154273; font-size: 14px; font-family: ROsanswebtextregular, Arial, sans-serif;" onmouseover="this.style.backgroundColor=\'#f5f5f5\'" onmouseout="this.style.backgroundColor=\'white\'">Excel (XLSX)</div>',
                    '<div onclick="exportODS()" style="padding: 12px 16px; cursor: pointer; color: #154273; font-size: 14px; font-family: ROsanswebtextregular, Arial, sans-serif;" onmouseover="this.style.backgroundColor=\'#f5f5f5\'" onmouseout="this.style.backgroundColor=\'white\'">OpenDocument Spreadsheet (ODS)</div>',
                    "</div>",
                    "</div>",
                    "</div>",
                    "</div>",
                    "</div>",
                ]
            )

        return "".join(filters)

    def replace_content(match: Match, content_type: str, current_file: File):
        params = match.groups()[0].strip() if match.groups()[0] else ""
        split_params = params.split() if params else []
        filter_criteria = split_params[0] if split_params else ""

        type_value_bundle = [
            y.split("/") for y in filter_criteria.split() if len(y.split("/")) == 2
        ]

        # Generate filter_options dynamically based on column configuration
        # Use different column config based on content type
        column_config = (
            get_vereisten_column_config()
            if content_type == "vereisten"
            else get_column_config()
        )
        filter_options = {
            "search": True,
            "ai-act-labels": False,  # Default to False
        }

        # Add all configured columns to filter_options
        for column in column_config:
            filter_options[column.key] = column.default_enabled

        # Process filter tags
        for tag in split_params:
            if tag.startswith("no-"):
                filter_name = tag[3:]
                if filter_name in filter_options:
                    filter_options[filter_name] = False
            elif tag.startswith("add-"):
                filter_name = tag[4:]
                if filter_name in filter_options:
                    filter_options[filter_name] = True

        list: List[File] = []
        for file in files:
            if not file.src_path.startswith(
                f"voldoen-aan-wetten-en-regels/{content_type}/"
            ):
                continue
            if not file.src_path.endswith(".md"):
                continue
            if file.src_path.endswith("/index.md"):
                continue

            if not type_value_bundle or all(
                value in file.page.meta.get(type, [])
                for type, value in type_value_bundle
            ):
                list.append(file)

        # Only enable ai-act-labels if we're on the main vereisten page AND this is a vereisten list
        if (
            current_file.src_path == "voldoen-aan-wetten-en-regels/vereisten/index.md"
            and content_type == "vereisten"
        ):
            filter_options["ai-act-labels"] = True
        else:
            filter_options["ai-act-labels"] = False

        filters = generate_filters(
            content_type, list, filter_options, current_file, column_config
        )

        # Generate table headers dynamically based on column configuration
        table_headers = []
        for column in column_config:
            if filter_options.get(column.key, column.default_enabled):
                # Special case for title column to use content_type
                if column.key == "title":
                    table_headers.append(
                        f'<th role="columnheader">{content_type.capitalize()}</th>'
                    )
                else:
                    table_headers.append(f'<th role="columnheader">{column.title}</th>')

        # Create column mapping data for JavaScript
        enabled_columns = [
            col
            for col in column_config
            if filter_options.get(col.key, col.default_enabled)
        ]
        column_mapping = {
            col.key: {"index": idx, "filterable": col.render_filter is not None}
            for idx, col in enumerate(enabled_columns)
        }

        import json

        column_mapping_json = json.dumps(column_mapping)

        result = "".join(
            [
                filters,  # Zinnetje en filtervelden/export-knop boven de tabel
                f"<div id=\"table-container\" data-column-mapping='{column_mapping_json}'>",
                "<table id='myTable'>",
                "<thead>",
                "<tr>",
                *table_headers,
                "</tr>",
                "</thead>",
                "<tbody>",
                *[
                    _create_table_row_2(
                        item, filter_options, current_file, config, column_config
                    )
                    for item in list
                ],
                "</tbody>",
                "</table>",
                "</div>",
            ]
        )

        return result

    # NEW FUNCTION: To generate the Vereisten for a specific maatregel
    def generate_vereisten_for_maatregel(file: File) -> str:
        vereisten = file.page.meta.get("vereiste", [])
        if not vereisten:
            return "<p>Geen vereisten beschikbaar voor deze maatregel.</p>"

        vereisten_table = [
            "<table>",
            "<thead>",
            "<tr>",
            "<th>ID</th>",
            "<th>Vereiste</th>",
            "</tr>",
            "</thead>",
            "<tbody>",
        ]

        for vereiste in vereisten:
            vereiste_file = find_file_by_name(vereiste, "vereisten", files)
            if vereiste_file:
                # Retrieve the title from the vereiste file's metadata
                vereiste_id = vereiste_file.page.meta.get("id", "")[
                    14:
                ]  # remove the first part of the urn
                vereiste_title = vereiste_file.page.meta.get(
                    "title", vereiste
                )  # Fallback to vereiste name if no title
                vereiste_link = posixpath.join(
                    config.site_url or "/", vereiste_file.url
                )
                vereisten_table.append(
                    f'<tr><td><a href="{vereiste_link}">{vereiste_id}</a></td><td><a href="{vereiste_link}">{vereiste_title}</a></td></tr>'
                )
            else:
                vereisten_table.append(
                    f"<tr><td>{vereiste}</td></tr>"
                )  # No link if the file is not found

        vereisten_table.append("</tbody></table>")

        return "".join(vereisten_table)

    # NEW FUNCTION: To generate the Maatregelen for a specific Hulpmiddel
    def generate_maatregelen_for_hulpmiddel(file: File) -> str:
        maatregelen = file.page.meta.get("maatregel", [])
        if not maatregelen:
            return "<p>Geen maatregelen beschikbaar voor dit hulpmiddel.</p>"

        maatregelen_table = [
            "<table>",
            "<thead>",
            "<tr>",
            "<th>ID</th>",
            "<th>Maatregel</th>",
            "</tr>",
            "</thead>",
            "<tbody>",
        ]
        for maatregel in maatregelen:
            maatregel_file = find_file_by_name(maatregel, "maatregelen", files)
            if maatregel_file:
                # Retrieve the title from the maatregel file's metadata
                maatregel_id = maatregel_file.page.meta.get("id", "")[
                    14:
                ]  # remove the first part of the urn
                maatregel_title = maatregel_file.page.meta.get(
                    "title", maatregel
                )  # Fallback to maatregel name if no title
                maatregel_link = posixpath.join(
                    config.site_url or "/", maatregel_file.url
                )
                maatregelen_table.append(
                    f'<tr><td><a href="{maatregel_link}">{maatregel_id}</a></td><td><a href="{maatregel_link}">{maatregel_title}</a></td></tr>'
                )
            else:
                maatregelen_table.append(
                    f"<tr><td>{maatregel}</td></tr>"
                )  # No link if the file is not found

        maatregelen_table.append("</tbody></table>")

        return "".join(maatregelen_table)

    def find_file_by_name(name: str, content_type: str, files: Files) -> File:
        for file in files:
            file_name = posixpath.splitext(posixpath.basename(file.src_path))[0]
            if (
                file.src_path.startswith(
                    f"voldoen-aan-wetten-en-regels/{content_type}/"
                )
                and file_name == name
            ):
                return file
        return None

    def replace_vereisten_content(file: File):
        file.page.content = re.sub(
            r"<!-- list_vereisten_on_maatregelen_page -->",
            lambda match: generate_vereisten_for_maatregel(file),
            file.page.content,
        )

    def replace_maatregelen_content(file: File):
        file.page.content = re.sub(
            r"<!-- list_maatregelen_on_hulpmiddelen_page -->",
            lambda match: generate_maatregelen_for_hulpmiddel(file),
            file.page.content,
        )

    for file in files:
        if not file.src_path.endswith(".md"):
            continue

        if file.page.content is None:
            if file.page.file.is_modified():
                file.page.read_source(config)
                file.page.render(config, files)
            else:
                continue

        print("Processing file", file.src_path)

        try:
            if "maatregelen" in file.src_path or "hulpmiddelen" in file.src_path:
                replace_vereisten_content(file)

            if "hulpmiddelen" in file.src_path:
                replace_maatregelen_content(file)

            # Pass the current file to replace_content
            file.page.content = re.sub(
                r"<!-- list_vereisten(.*?) -->",
                lambda match: replace_content(match, "vereisten", file),
                file.page.content,
                flags=re.I | re.M,
            )

            file.page.content = re.sub(
                r"<!-- list_maatregelen(.*?) -->",
                lambda match: replace_content(match, "maatregelen", file),
                file.page.content,
                flags=re.I | re.M,
            )

            file.page.content = re.sub(
                r"<!-- list_hulpmiddelen(.*?) -->",
                lambda match: replace_content(match, "hulpmiddelen", file),
                file.page.content,
                flags=re.I | re.M,
            )
        except Exception as e:
            print(e)
