from typing import List, Dict
import posixpath
import re
from mkdocs.config.defaults import MkDocsConfig
from mkdocs.structure.files import File, Files
from re import Match

# Function to create a chip (link with icon)
def _create_chip(item: str, chip_type: str, current_file: File, config: MkDocsConfig) -> str:
    if not item:
        return ""
      
    # Initialize icon and color
    icon_svg, color_class = "", ""
    base_url = config.site_url if config.site_url else "/"

    # Determine chip-specific styles and icons
    if chip_type == 'rol':
        color_class = 'deep-orange'
        icon_svg = '<svg ... ></svg>'  # SVG for rol
        link = posixpath.join(base_url, 'rollen', item)
    elif chip_type == 'levenscyclus':
        color_class = 'indigo'
        icon_svg = '<svg ... ></svg>'  # SVG for levenscyclus
        link = posixpath.join(base_url, 'levenscyclus', item)
    elif chip_type == 'onderwerp':
        color_class = 'teal'
        icon_svg = '<svg ... ></svg>'  # SVG for onderwerp
        link = posixpath.join(base_url, 'onderwerpen', item)
    else:
        color_class = 'blue'
        icon_svg = '<svg ... ></svg>'  # Default SVG
        link = posixpath.join(base_url, chip_type, item)

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

# Function to create a row in the table
def _create_table_row(file: File, filter_options: Dict[str, bool], current_file: File, config: MkDocsConfig) -> str:
    base_url = config.site_url if config.site_url else "/"
    relative_link = posixpath.join(base_url, file.dest_path)

    # Extract metadata
    rollen = file.page.meta.get('rollen', [])
    levenscyclus = file.page.meta.get('levenscyclus', [])
    onderwerpen = file.page.meta.get('onderwerp', [])
    vereiste_id = file.page.meta.get('id', "")[14:]  # Trim URN prefix

    # Generate chips
    rollen_chips = ''.join(_create_chip(rol, 'rol', current_file, config) for rol in rollen) if filter_options.get("rol", True) else ""
    levenscyclus_chips = ''.join(_create_chip(lc, 'levenscyclus', current_file, config) for lc in levenscyclus) if filter_options.get("levenscyclus", True) else ""
    onderwerp_chips = ''.join(_create_chip(onderwerp, 'onderwerp', current_file, config) for onderwerp in onderwerpen) if filter_options.get("onderwerp", True) else ""
    
    return "".join(
        [
            "<tr>",
            f'<td><a href="{relative_link}">{vereiste_id}</a></td>',
            f'<td><a href="{relative_link}">{file.page.title}</a></td>',
            f"<td>{rollen_chips}</td>" if filter_options.get("rol", True) else "",
            f"<td>{levenscyclus_chips}</td>" if filter_options.get("levenscyclus", True) else "",
            f"<td>{onderwerp_chips}</td>" if filter_options.get("onderwerp", True) else "",
            "</tr>",
        ]
    )

# Main function to manage the environment and file processing
def on_env(env, config: MkDocsConfig, files: Files):
    # Function to generate filter options
    def generate_filters(content_type: str, file_list: List[File], filter_options: Dict[str, bool]) -> str:
        filters = []
        filters.append('<div class="filter-container">')

        if filter_options.get("search", True):
            filters.append('<div class="filter-item filter-item--search">')
            filters.append('<label for="filterInput">Zoeken</label>')
            filters.append(f'<input type="text" id="filterInput" class="filter-item__input" onkeyup="filterTable()" placeholder="Zoek op {content_type}">')
            filters.append('</div>')

        if filter_options.get("rol", True):
            rollen = sorted(set(rol for file in file_list for rol in file.page.meta.get("rollen", [])))
            if rollen:
                filters.append('<div class="filter-item filter-item--roles">')
                filters.append('<label for="filterSelect">Rollen</label>')
                filters.append('<select id="filterSelect" class="js-example-basic-multiple filter-item__select" name="states[]" multiple="multiple" data-placeholder="Selecteer rollen">')
                filters.extend(f'<option value="{rol}">{rol}</option>' for rol in rollen)
                filters.append('</select>')
                filters.append('</div>')

        # Repeat similar blocks for levenscyclus and onderwerp...

        filters.append('</div>')
        return "".join(filters)

    # Function to replace content with filtered list
    def replace_content(match: Match, content_type: str):
        params = match.groups()[0].strip() if match.groups()[0] else ""
        split_params = params.split() if params else []
        filter_criteria = split_params[0] if split_params else ""
        filter_tags = split_params[1:] if len(split_params) > 1 else []

        # Prepare filters
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

        file_list: List[File] = []
        for file in files:
            if not file.src_path.startswith(f"voldoen-aan-wetten-en-regels/{content_type}/"):
                continue
            if not file.src_path.endswith(".md"):
                continue
            if file.src_path.endswith("/index.md"):
                continue

            file_list.append(file)

        filters = generate_filters(content_type, file_list, filter_options)

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
                "</tr>",
                "</thead>",
                "<tbody>",
                *[_create_table_row(item, filter_options, file, config) for item in file_list],
                "</tbody>",
                "</table>",
            ]
        )

    # Process each file
    for file in files:
        if not file.src_path.endswith(".md"):
            continue

        # Replace placeholders with appropriate content
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