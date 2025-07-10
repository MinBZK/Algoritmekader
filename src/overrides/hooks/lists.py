from typing import List, Dict
import posixpath
import re
from mkdocs.config.defaults import MkDocsConfig
from mkdocs.structure.files import File, Files
from re import Match


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


# Define _create_table_row_2 next, which references _create_chip
def _create_table_row_2(
    file: File,
    filter_options: Dict[str, bool],
    current_file: File,
    config: MkDocsConfig,
) -> str:
    base_url = config.site_url if config.site_url else "/"

    relative_link = posixpath.join(base_url, file.dest_path)

    rollen = file.page.meta.get("rollen", [])
    levenscyclus = file.page.meta.get("levenscyclus", [])
    onderwerpen = file.page.meta.get("onderwerp", [])
    vereiste_id = file.page.meta.get("id", "")[14:]  # remove the first part of the urn

    # AI act label fields
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

    rollen_chips = (
        "".join(_create_chip(rol, "rol", current_file, config) for rol in rollen)
        if filter_options.get("rol", True)
        else ""
    )
    levenscyclus_chips = (
        "".join(
            _create_chip(lc, "levenscyclus", current_file, config)
            for lc in levenscyclus
        )
        if filter_options.get("levenscyclus", True)
        else ""
    )
    onderwerp_chips = (
        "".join(
            _create_chip(onderwerp, "onderwerp", current_file, config)
            for onderwerp in onderwerpen
        )
        if filter_options.get("onderwerp", True)
        else ""
    )

    return "".join(
        [
            f"<tr {data_html_attribute}>",
            f'<td><a href="{relative_link}">{vereiste_id}</a></td>'
            if filter_options.get("id", True)
            else "",
            f'<td><a href="{relative_link}">{file.page.title}</a></td>',
            # f"<td>{categorie_chips}</td>" if filter_options.get("categorie", True) else "",
            f"<td>{rollen_chips}</td>" if filter_options.get("rol", True) else "",
            f"<td>{levenscyclus_chips}</td>"
            if filter_options.get("levenscyclus", True)
            else "",
            f"<td>{onderwerp_chips}</td>"
            if filter_options.get("onderwerp", True)
            else "",
            "</tr>",
        ]
    )


def should_show_export(current_file: File) -> bool:
    """Bepaalt of export functionaliteit getoond moet worden op basis van metadata van pagina"""
    return current_file.page.meta.get("allow_excel_export", False)


# Define the on_env function and other utility functions
def on_env(env, config: MkDocsConfig, files: Files):
    def generate_filters(
        content_type: str,
        list: List[File],
        filter_options: Dict[str, bool],
        current_file: File,
    ):
        filters = []
        filters.append('<form autocomplete="off" onsubmit="return false;">')
        filters.append('<div class="filter-container info">')

        filters.append('<input type="hidden" id="labelsInput"></input>')

        if filter_options.get("search", True):
            filters.append('<div class="filter-item filter-item--search">')
            filters.append('<label for="filterInput">Zoeken</label>')
            filters.append(
                f'<input type="text" id="filterInput" class="filter-item__input" onkeyup="filterTable()" placeholder="Zoek op {content_type}">'
            )
            filters.append("</div>")

        if filter_options.get("rol", True):
            rollen = sorted(
                set(rol for file in list for rol in file.page.meta.get("rollen", []))
            )
            if rollen:
                filters.append('<div class="filter-item filter-item--roles">')
                filters.append('<label for="filterSelect">Rollen</label>')
                filters.append(
                    '<select id="filterSelect" class="js-example-basic-multiple filter-item__select" name="states[]" multiple="multiple" data-placeholder="Selecteer rollen">'
                )
                filters.extend(
                    f'<option value="{rol}">{rol}</option>' for rol in rollen
                )
                filters.append("</select>")
                filters.append("</div>")

        if filter_options.get("levenscyclus", True):
            levenscyclus = sorted(
                set(
                    lc for file in list for lc in file.page.meta.get("levenscyclus", [])
                )
            )
            if levenscyclus:
                filters.append('<div class="filter-item filter-item--levenscyclus">')
                filters.append(
                    '<label for="filterLevenscyclusSelect">Levenscyclus</label>'
                )
                filters.append(
                    '<select id="filterLevenscyclusSelect" class="js-example-basic-multiple filter-item__select" name="states[]" multiple="multiple" data-placeholder="Selecteer fases">'
                )
                filters.extend(
                    f'<option value="{lc}">{lc}</option>' for lc in levenscyclus
                )
                filters.append("</select>")
                filters.append("</div>")

        if filter_options.get("onderwerp", True):
            onderwerpen = sorted(
                set(
                    onderwerp
                    for file in list
                    for onderwerp in file.page.meta.get("onderwerp", [])
                )
            )
            if onderwerpen:
                filters.append('<div class="filter-item filter-item--onderwerp">')
                filters.append('<label for="filterOnderwerpSelect">Onderwerpen</label>')
                filters.append(
                    '<select id="filterOnderwerpSelect" class="js-example-basic-multiple filter-item__select" name="subjects[]" multiple="multiple" data-placeholder="Selecteer onderwerpen">'
                )
                filters.extend(
                    f'<option value="{onderwerp}">{onderwerp}</option>'
                    for onderwerp in onderwerpen
                )
                filters.append("</select>")
                filters.append("</div>")

        if filter_options.get("ai-act-labels", False):
            filters.append("<div id='ai-act-labels-info'>")
            filters.append(
                "<div id='ai-act-info-no-labels'><strong><a href='#' onclick=\"showModal(event, 'ai-act-labels');\">Kies je AI-verordeningprofiel</a> of <a href='#' onclick=\"showModal(event, 'beslishulp AI-verordening');\">gebruik de beslishulp AI-verordening</a> om vereisten te filteren.</strong></div>"
            )
            filters.append(
                "<div id='ai-act-info-with-labels' class='display-none'>Jouw AI-verordening profiel: <span id='ai-act-labels-container'></span> <a href='#' onclick=\"showModal(event, 'ai-act-labels');\">Wijzig je profiel</a> of <a href='#' onclick=\"showModal(event, 'beslishulp AI-verordening');\">open de beslishulp AI-verordening</a>.</div>"
            )
            filters.append("</div>")

        filters.append("</form>")
        filters.append("</div>")

        # Conditional excel export
        if should_show_export(current_file) and content_type in [
            "vereisten",
            "maatregelen",
        ]:
            export_function = f"export{content_type.capitalize()}"
            filters.extend(
                [
                    '<div id="export-excel">',
                    '<div style="display: flex; align-items: center; gap: 20px;">',
                    "<div>",
                    f'Er zijn <strong><span id="total-count">{len(list)}</span></strong> resultaten gevonden',
                    "</div>",
                    "<div>",
                    f'<button id="export-btn" onclick="{export_function}()" class="button md-button--secondary">',
                    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width: 24px; height: 24px; vertical-align: middle; fill: #154271"><path d="M5,20h14a1,1 0 0,0 1-1v-2h-2v2H6v-2H4v2A1,1 0 0,0 5,20M19,9h-4V3H9v6H5l7,7l7-7z"/></svg> Exporteer <span id="content_type">'
                    + content_type
                    + "</span> naar excel",
                    "</button>",
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

        filter_options = {
            "id": True,
            "search": True,
            "rol": True,
            "levenscyclus": True,
            "onderwerp": True,
            "ai-act-labels": False,  # Default to False
        }

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

        filters = generate_filters(content_type, list, filter_options, current_file)

        result = "".join(
            [
                filters,  # Zinnetje en filtervelden/export-knop boven de tabel
                "<table id='myTable'>",
                "<thead>",
                "<tr>",
                '<th role="columnheader">id</th>' if filter_options["id"] else "",
                f'<th role="columnheader">{content_type.capitalize()}</th>',
                '<th role="columnheader">Rollen</th>' if filter_options["rol"] else "",
                '<th role="columnheader">Levenscyclus</th>'
                if filter_options["levenscyclus"]
                else "",
                '<th role="columnheader">Onderwerpen</th>'
                if filter_options["onderwerp"]
                else "",
                "</tr>",
                "</thead>",
                "<tbody>",
                *[
                    _create_table_row_2(item, filter_options, current_file, config)
                    for item in list
                ],
                "</tbody>",
                "</table>",
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
