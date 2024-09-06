from typing import List, Dict
import posixpath
import re
from mkdocs.config.defaults import MkDocsConfig
from mkdocs.structure.files import File, Files
from re import Match

def on_env(env, config: MkDocsConfig, files: Files):
    def generate_filters(content_type: str, list: List[File], filter_options: Dict[str, bool]):
        filters = []

        filters.append('<div class="filter-container">')  # Ensure this line is added
        
        if filter_options.get("search", True):
            filters.append('<div class="filter-item filter-item--search">')
            filters.append('<label for="filterInput">Zoeken</label>')
            filters.append(f'<input type="text" id="filterInput" class="filter-item__input" onkeyup="filterTable()" placeholder="Zoek op {content_type}">')
            filters.append('</div>')
        
        if filter_options.get("rol", True):
            rollen = sorted(
                set(rol for file in list for rol in file.page.meta.get("rollen", []))
            )
            if rollen:  # Only show filter if there are roles to filter by
                filters.append('<div class="filter-item filter-item--roles">')
                filters.append('<label for="filterSelect">Rollen</label>')
                filters.append('<select id="filterSelect" class="js-example-basic-multiple filter-item__select" name="states[]" multiple="multiple" data-placeholder="Selecteer 1 of meerdere rollen">')
                filters.extend(f'<option value="{rol}">{rol}</option>' for rol in rollen)
                filters.append('</select>')
                filters.append('</div>')
        
        if filter_options.get("levenscyclus", True):
            levenscyclus = sorted(
                set(lc for file in list for lc in file.page.meta.get("levenscyclus", []))
            )
            if levenscyclus:  # Only show filter if there are lifecycle stages to filter by
                filters.append('<div class="filter-item filter-item--levenscyclus">')
                filters.append('<label for="filterLevenscyclusSelect">Levenscyclus</label>')
                filters.append('<select id="filterLevenscyclusSelect" class="js-example-basic-multiple filter-item__select" name="states[]" multiple="multiple" data-placeholder="Selecteer 1 of meerdere fases">')
                filters.extend(f'<option value="{lc}">{lc}</option>' for lc in levenscyclus)
                filters.append('</select>')
                filters.append('</div>')

        if filter_options.get("onderwerp", True):
            onderwerpen = sorted(
                set(onderwerp for file in list for onderwerp in file.page.meta.get("onderwerp", []))
            )
            if onderwerpen:  # Only show filter if there are subjects to filter by
                filters.append('<div class="filter-item filter-item--onderwerp">')
                filters.append('<label for="filterOnderwerpSelect">Onderwerpen</label>')
                filters.append('<select id="filterOnderwerpSelect" class="js-example-basic-multiple filter-item__select" name="subjects[]" multiple="multiple" data-placeholder="Selecteer 1 of meerdere onderwerpen">')
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

        filter_options = {
            "search": True,  
            "rol": True,     
            "levenscyclus": True, 
            "onderwerp": True
        }

        # Process no- filters
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

            if not type_value_bundle or all(
                value in file.page.meta.get(type, [])
                for type, value in type_value_bundle
            ):
                list.append(file)

        filters = generate_filters(content_type, list, filter_options)

        return "".join(
            [
                filters,
                "<table id='myTable'>",
                "<thead>",
                "<tr>",
                f'<th role="columnheader">{content_type.capitalize()}</th>',
                '<th role="columnheader">Rollen</th>' if filter_options["rol"] else '',
                '<th role="columnheader">Levenscyclus</th>' if filter_options["levenscyclus"] else '',
                '<th role="columnheader">Onderwerpen</th>' if filter_options["onderwerp"] else '',
                "</tr>",
                "</thead>",
                "<tbody>",
                *[_create_table_row_2(item, filter_options) for item in list],
                "</tbody>",
                "</table>",
            ]
        )

    for file in files:
        if not file.src_path.endswith(".md"):
            continue

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

def _create_chip(item: str, link: str, chip_type: str) -> str:
    if not item:
        return ""  # Return an empty string if the item is None or empty

    if chip_type == 'rol':
        color_class = 'deep-orange'
        icon_svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 4a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4Z"></path></svg>'
    elif chip_type == 'levenscyclus':
        color_class = 'indigo'
        icon_svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2 12a9 9 0 0 0 9 9c2.39 0 4.68-.94 6.4-2.6l-1.5-1.5A6.706 6.706 0 0 1 11 19c-6.24 0-9.36-7.54-4.95-11.95C10.46 2.64 18 5.77 18 12h-3l4 4h.1l3.9-4h-3a9 9 0 0 0-18 0Z"></path></svg>'
    else:
        color_class = 'blue'
        icon_svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2 12a9 9 0 0 0 9 9c2.39 0 4.68-.94 6.4-2.6l-1.5-1.5A6.706 6.706 0 0 1 11 19c-6.24 0-9.36-7.54-4.95-11.95C10.46 2.64 18 5.77 18 12h-3l4 4h.1l3.9-4h-3a9 9 0 0 0-18 0Z"></path></svg>'
    
    return f'''
        <span class="mdx-badge" data-md-color-accent="{color_class}">
            <span class="mdx-badge__icon">
                <a href="{link}" title="{item}">
                    <span class="twemoji">{icon_svg}</span>
                </a>
            </span>
            <span class="mdx-badge__text">
                <a href="{link}">{item}</a>
            </span>
        </span>
    '''

def _create_table_row_2(file: File, filter_options: Dict[str, bool]) -> str:
    # Ensure metadata exists or is defaulted to empty list
    rollen = file.page.meta.get('rollen', [])
    levenscyclus = file.page.meta.get('levenscyclus', [])
    onderwerpen = file.page.meta.get('onderwerp', [])

    # Create chips conditionally based on filter options
    rollen_chips = ''.join(
        _create_chip(rol, f"../../rollen/{rol}.md", 'rol') for rol in rollen
    ) if filter_options.get("rol", True) else ""

    levenscyclus_chips = ''.join(
        _create_chip(lc, f"../../levenscyclus/{lc}.md", 'levenscyclus') for lc in levenscyclus
    ) if filter_options.get("levenscyclus", True) else ""

    onderwerp_chips = ''.join(
        _create_chip(onderwerp, f"../../onderwerpen/{onderwerp}.md", 'onderwerp') for onderwerp in onderwerpen
    ) if filter_options.get("onderwerp", True) else ""

    return "".join(
        [
            "<tr>",
            f'<td><a href="{f"../../" + file.dest_path}">{file.page.title}</a></td>',
            f"<td>{rollen_chips}</td>" if filter_options.get("rol", True) else "",
            f"<td>{levenscyclus_chips}</td>" if filter_options.get("levenscyclus", True) else "",
            f"<td>{onderwerp_chips}</td>" if filter_options.get("onderwerp", True) else "",
            "</tr>",
        ]
    )