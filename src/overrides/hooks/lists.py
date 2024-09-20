from typing import List, Dict
import posixpath
import re
from mkdocs.config.defaults import MkDocsConfig
from mkdocs.structure.files import File, Files
from re import Match
import json  # Added for serialization of vereiste data

def on_env(env, config: MkDocsConfig, files: Files):
    def generate_filters(content_type: str, list: List[File], filter_options: Dict[str, bool]):
        filters = []

        filters.append('<div class="filter-container">')
        
        if filter_options.get("search", True):
            filters.append('<div class="filter-item filter-item--search">')
            filters.append('<label for="filterInput">Zoeken</label>')
            filters.append(f'<input type="text" id="filterInput" class="filter-item__input" onkeyup="filterTable()" placeholder="Zoek op {content_type}">')
            filters.append('</div>')
        
        if filter_options.get("rol", True):
            rollen = sorted(
                set(rol for file in list for rol in file.page.meta.get("rollen", []))
            )
            if rollen:
                filters.append('<div class="filter-item filter-item--roles">')
                filters.append('<label for="filterSelect">Rollen</label>')
                filters.append('<select id="filterSelect" class="js-example-basic-multiple filter-item__select" name="states[]" multiple="multiple" data-placeholder="Selecteer rollen">')
                filters.extend(f'<option value="{rol}">{rol}</option>' for rol in rollen)
                filters.append('</select>')
                filters.append('</div>')
        
        if filter_options.get("levenscyclus", True):
            levenscyclus = sorted(
                set(lc for file in list for lc in file.page.meta.get("levenscyclus", []))
            )
            if levenscyclus:
                filters.append('<div class="filter-item filter-item--levenscyclus">')
                filters.append('<label for="filterLevenscyclusSelect">Levenscyclus</label>')
                filters.append('<select id="filterLevenscyclusSelect" class="js-example-basic-multiple filter-item__select" name="states[]" multiple="multiple" data-placeholder="Selecteer fases">')
                filters.extend(f'<option value="{lc}">{lc}</option>' for lc in levenscyclus)
                filters.append('</select>')
                filters.append('</div>')

        if filter_options.get("onderwerp", True):
            onderwerpen = sorted(
                set(onderwerp for file in list for onderwerp in file.page.meta.get("onderwerp", []))
            )
            if onderwerpen:
                filters.append('<div class="filter-item filter-item--onderwerp">')
                filters.append('<label for="filterOnderwerpSelect">Onderwerpen</label>')
                filters.append('<select id="filterOnderwerpSelect" class="js-example-basic-multiple filter-item__select" name="subjects[]" multiple="multiple" data-placeholder="Selecteer onderwerpen">')
                filters.extend(f'<option value="{onderwerp}">{onderwerp}</option>' for onderwerp in onderwerpen)
                filters.append('</select>')
                filters.append('</div>')

        filters.append('</div>')  
        return "".join(filters)

    def replace_content(match: Match, content_type: str):
        params = match.groups()[0].strip() if match.groups()[0] else ""
        split_params = params.split() if params else []
        filter_criteria = split_params[0] if split_params else ""
        filter_tags = split_params[1:] if len(split_params) > 1 else []

        type_value_bundle = [y.split("/") for y in filter_criteria.split() if len(y.split("/")) == 2]

        # Remove the "vereiste" from filter_options
        filter_options = {
            "search": True,
            "rol": True,
            "levenscyclus": True,
            "onderwerp": True
        }

        for tag in filter_tags:
            if tag.startswith("no-"):
                filter_name = tag[3:]
                if filter_name in filter_options:
                    filter_options[filter_name] = False

        list: List[File] = []
        for file in files:
            if not file.src_path.startswith(f"{content_type}/"):
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

        filters = generate_filters(content_type, list, filter_options)

        # Remove the vereiste column from the table header and rows
        return "".join(
            [
                filters,
                "<table id='myTable'>",
                "<thead>",
                "<tr>",
                '<th role="columnheader">id</th>',
                f'<th role="columnheader">{content_type.capitalize()}</th>',
                '<th role="columnheader">Rollen</th>' if filter_options["rol"] else '',
                '<th role="columnheader">Levenscyclus</th>' if filter_options["levenscyclus"] else '',
                '<th role="columnheader">Onderwerpen</th>' if filter_options["onderwerp"] else '',
                # '<th role="columnheader">Vereiste</th>' if filter_options["vereiste"] else '',  # Remove this line
                "</tr>",
                "</thead>",
                "<tbody>",
                *[_create_table_row_2(item, filter_options, file, config) for item in list],
                "</tbody>",
                "</table>",
            ]
        )

    # NEW FUNCTION: To generate the Vereisten for a specific maatregel
    def generate_vereisten_for_maatregel(file: File) -> str:
        """Generates a table of vereisten for a specific maatregel, linking to the vereiste files and displaying the title."""
        vereisten = file.page.meta.get("vereiste", [])
        if not vereisten:
            return "<p>Geen vereisten beschikbaar voor deze maatregel.</p>"

        vereisten_table = [
            "<table>",
            "<thead>",
            "<tr>",
            "<th>Vereiste</th>",
            "</tr>",
            "</thead>", 
            "<tbody>",
        ]
        
        # Loop through each vereiste and create a link to its respective file
        for vereiste in vereisten:
            vereiste_file = find_file_by_name(vereiste, "vereisten", files)
            if vereiste_file:
                # Retrieve the title from the vereiste file's metadata
                vereiste_id = vereiste_file.page.meta.get("id", "")[14:] # remove the first part of the urn
                vereiste_title = vereiste_file.page.meta.get("title", vereiste)  # Fallback to vereiste name if no title
                vereiste_link = posixpath.join(config.site_url or "/", vereiste_file.url)
                vereisten_table.append(
                    f'<tr><td><a href="{vereiste_link}">{vereiste_id} - {vereiste_title}</a></td></tr>')
            else:
                vereisten_table.append(f'<tr><td>{vereiste}</td></tr>')  # No link if the file is not found

        vereisten_table.append("</tbody></table>")
        
        return "".join(vereisten_table)

    def find_file_by_name(name: str, content_type: str, files: Files) -> File:
        """Helper function to find the file corresponding to a 'vereiste' name based on the file name."""
        # Search for a file in the content_type folder that matches the vereiste name (without the .md)
        for file in files:
            file_name = posixpath.splitext(posixpath.basename(file.src_path))[0]  # Get the file name without .md
            if file.src_path.startswith(f"{content_type}/") and file_name == name:
                return file
        return None

    # NEW FUNCTION: Replaces the placeholder with Vereisten content
    def replace_vereisten_content(file: File):
        """Replaces the placeholder for vereisten with the actual table for the current maatregel."""
        file.page.content = re.sub(
            r"<!-- list_vereisten_on_maatregelen_page -->",
            lambda match: generate_vereisten_for_maatregel(file),
            file.page.content
        )

    # Only replace on specific maatregel pages
    for file in files:
        if not file.src_path.endswith(".md"):
            continue
        
        if "maatregelen" in file.src_path:
            replace_vereisten_content(file)

        # Replacing for existing placeholders
        file.page.content = re.sub(
            r"<!-- list_vereisten(.*?) -->",
            lambda match: replace_content(match, "vereisten"),
            file.page.content,
            flags=re.I | re.M,
        )

        file.page.content = re.sub(
            r"<!-- list_maatregelen(.*?) -->",
            lambda match: replace_content(match, "maatregelen"),
            file.page.content,
            flags=re.I | re.M,
        )

        file.page.content = re.sub(
            r"<!-- list_instrumenten(.*?) -->",
            lambda match: replace_content(match, "instrumenten"),
            file.page.content,
            flags=re.I | re.M,
        )

        # NEW FUNCTION CALL: Replacing the vereisten placeholder on maatregelen pages
        if "maatregelen" in file.src_path:
            replace_vereisten_content(file)

# Keeping your existing _create_chip function
def _create_chip(item: str, link: str, chip_type: str) -> str:
    if not item:
        return ""

    icon_svg, color_class = "", ""
    
    if chip_type == 'rol':
        color_class = 'deep-orange'
        icon_svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 4a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4Z"></path></svg>'
    elif chip_type == 'levenscyclus':
        color_class = 'indigo'
        icon_svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2 12a9 9 0 0 0 9 9c2.39 0 4.68-.94 6.4-2.6l-1.5-1.5A6.706 6.706 0 0 1 11 19c-6.24 0-9.36-7.54-4.95-11.95C10.46 2.64 18 5.77 18 12h-3l4 4h.1l3.9-4h-3a9 9 0 0 0-18 0Z"></path></svg>'
    elif chip_type == 'onderwerp':
        color_class = 'teal'
        icon_svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7M9 21a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1H9v1Z"></path></svg>'
    else:
        color_class = 'blue'
        icon_svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2 12a9 9 0 0 0 9 9c2.39 0 4.68-.94 6.4-2.6l-1.5-1.5A6.706 6.706 0 0 1 11 19c-6.24 0-9.36-7.54-4.95-11.95C10.46 2.64 18 5.77 18 12h-3l4 4h.1l3.9-4h-3a9 9 0 0 0-18 0Z"></path></svg>'
    
    return f'''
        <span class="mdx-badge" data-md-color-accent="{color_class}">
            <span class="mdx-badge__icon"> 
                    <span class="twemoji">{icon_svg}</span>
            </span>
            <span class="mdx-badge__text">
                {item}
            </span>
        </span>
    '''

# Keeping the existing _create_table_row_2 function
def _create_table_row_2(file: File, filter_options: Dict[str, bool], current_file: File, config: MkDocsConfig) -> str:
    # Base URL from the site config or fallback to "/"
    base_url = config.site_url if config.site_url else "/"

    # Detect if we're in a PR preview environment and adjust the base URL
    if "minbzk.github.io" in base_url and "pr-preview" in current_file.abs_dest_path:
        pr_preview_index = current_file.abs_dest_path.index("pr-preview")
        pr_preview_path = current_file.abs_dest_path[pr_preview_index:].split('/')[0:3]  # e.g., ['pr-preview', 'pr-269']
        base_url = "/" + "/".join(pr_preview_path) + "/"

    # Construct the link using base_url and file.dest_path without relpath
    relative_link = posixpath.join(base_url, file.dest_path)

    rollen = file.page.meta.get('rollen', [])
    levenscyclus = file.page.meta.get('levenscyclus', [])
    onderwerpen = file.page.meta.get('onderwerp', [])
    vereiste = file.page.meta.get('vereiste', [])
    id = file.page.meta.get('id', "")[14:] # remove the first part of the urn

    # Generate chips (visual labels)
    rollen_chips = ''.join(
        _create_chip(rol, relative_link, 'rol') for rol in rollen
    ) if filter_options.get("rol", True) else ""

    levenscyclus_chips = ''.join(
        _create_chip(lc, relative_link, 'levenscyclus') for lc in levenscyclus
    ) if filter_options.get("levenscyclus", True) else ""

    onderwerp_chips = ''.join(
        _create_chip(onderwerp, relative_link, 'onderwerp') for onderwerp in onderwerpen
    ) if filter_options.get("onderwerp", True) else ""

    vereiste_chips = ''.join(
        _create_chip(vereiste, relative_link, 'vereiste') for vereiste in vereiste
    ) if filter_options.get("vereiste", True) else ""

    # Create a link for the 'maatregel' that passes its associated 'vereisten' in the data attribute
    vereiste_data = json.dumps(vereiste)  # Serialize the list of vereisten as a JSON string
    return "".join(
        [
            "<tr>",
            # f'<td><a href="{relative_link}">{file.page.title}</a></td>',
            f'<td><a href="{relative_link}">{id}</a></td>',
            f'<td><a href="{relative_link}">{file.page.title}</a></td>',
            f"<td>{rollen_chips}</td>" if filter_options.get("rol", True) else "",
            f"<td>{levenscyclus_chips}</td>" if filter_options.get("levenscyclus", True) else "",
            f"<td>{onderwerp_chips}</td>" if filter_options.get("onderwerp", True) else "",
            f"<td>{vereiste_chips}</td>" if filter_options.get("vereiste", False) else "",
            "</tr>",
        ]
    )