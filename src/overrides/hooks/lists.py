from typing import List, Dict
import posixpath
import re
from mkdocs.config.defaults import MkDocsConfig
from mkdocs.structure.files import File, Files
from re import Match

def on_env(env, config: MkDocsConfig, files: Files):
    def generate_filters(content_type: str, list: List[File], filter_options: Dict[str, bool]):
        filters = []
        
        if filter_options.get("search", True):
            filters.append(f'<input type="text" id="filterInput" onkeyup="filterTable()" placeholder="Zoek op {content_type}...">')
        
        if filter_options.get("rol", True):
            rollen = sorted(
                set(rol for file in list for rol in file.page.meta.get("rollen", []))
            )
            if rollen:  # Only show filter if there are roles to filter by
                filters.append('<select id="filterSelect" onchange="filterTable()">')
                filters.append('<option value="">Filter op rol...</option>')
                filters.extend(f'<option value="{rol}">{rol}</option>' for rol in rollen)
                filters.append('</select>')
        
        if filter_options.get("levenscyclus", True):
            levenscyclus = sorted(
                set(lc for file in list for lc in file.page.meta.get("levenscyclus", []))
            )
            if levenscyclus:  # Only show filter if there are lifecycle stages to filter by
                filters.append('<select id="filterLevenscyclusSelect" onchange="filterTable()">')
                filters.append('<option value="">Filter op levenscyclus...</option>')
                filters.extend(f'<option value="{lc}">{lc}</option>' for lc in levenscyclus)
                filters.append('</select>')

        return "".join(filters)

    def replace_content(match: Match, content_type: str):
        # Extract parameters if they exist
        params = match.groups()[0].strip() if match.groups()[0] else ""
        
        # Split parameters; handle the case where there might not be any filter criteria
        split_params = params.split() if params else []
        filter_criteria = split_params[0] if split_params else ""
        filter_tags = split_params[1:] if len(split_params) > 1 else []

        type_value_bundle = [y.split("/") for y in filter_criteria.split() if len(y.split("/")) == 2]

        # Default filter options
        filter_options = {
            "search": True,
            "rol": True,
            "levenscyclus": True
        }

        # Parse filter tags to disable specific filters
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
                f'<th role="columnheader"><strong>{content_type.capitalize()}</strong></th>',
                '<th role="columnheader"><strong>Uitleg</strong></th>',
                '<th role="columnheader"><strong>Rollen</strong></th>',
                '<th role="columnheader"><strong>Levenscyclus</strong></th>',
                "</tr>",
                "</thead>",
                "<tbody>",
                *[_create_table_row_2(item) for item in list],
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

def _create_table_row_1(file: File):
    return "".join(
        [
            "<tr>",
            f'<td><a href="{f"../" + file.dest_path}">{file.page.title}</a></td>',
            f"<td>{file.page.meta.get('toelichting', '')}</td>",
            f"<td>{file.page.meta.get('rollen', '')}</td>",
            f"<td>{file.page.meta.get('levenscyclus', '')}</td>",
            "</tr>",
        ]
    )

def _create_table_row_2(file: File):
    return "".join(
        [
            "<tr>",
            f'<td><a href="{f"../../" + file.dest_path}">{file.page.title}</a></td>',
            f"<td>{file.page.meta.get('toelichting', '')}</td>",
            f"<td>{file.page.meta.get('rollen', '')}</td>",
            f"<td>{file.page.meta.get('levenscyclus', '')}</td>",
            "</tr>",
        ]
    )

def _resolve(dest_path: str):
    path = posixpath.relpath(dest_path)
    return "/" + posixpath.sep.join(path.split(posixpath.sep)[:-1])
