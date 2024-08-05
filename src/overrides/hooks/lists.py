from __future__ import annotations
from typing import List
import posixpath
import re
from mkdocs.config.defaults import MkDocsConfig
from mkdocs.structure.files import File, Files
from re import Match


def on_env(env, config: MkDocsConfig, files: Files):
    def replace_vereisten(match: Match):
        type = match.groups()[0]
        types = re.split(r"\s+", type)
        type_value_bundle = [y.split("/") for y in types if len(y.split("/")) == 2]

        list: List[File] = []
        for file in files:
            if not file.src_path.startswith("vereisten/"):
                continue

            if not file.src_path.endswith(".md"):
                continue

            if all(
                value in file.page.meta.get(type, [])
                for type, value in type_value_bundle
            ):
                list.append(file)

        rollen = sorted(
            set(rol for file in list for rol in file.page.meta.get("rollen", []))
        )

        levenscyclus = sorted(
            set(lc for file in list for lc in file.page.meta.get("levenscyclus", []))
        )

        return "".join(
            [
                '<input type="text" id="filterInput" onkeyup="filterTable()" placeholder="Zoek op vereiste...">',
                '<select id="filterSelect" onchange="filterTable()">',
                '<option value="">Filter op rol...</option>',
                *(f'<option value="{rol}">{rol}</option>' for rol in rollen),
                "</select>",
                '<select id="filterLevenscyclusSelect" onchange="filterTable()">',
                '<option value="">Filter op levenscyclus...</option>',
                *(f'<option value="{lc}">{lc}</option>' for lc in levenscyclus),
                "</select>",
                "<table id='myTable'>",
                "<thead>",
                "<tr>",
                '<th role="columnheader"><strong>Vereiste</strong></th>',
                '<th role="columnheader"><strong>Uitleg</strong></th>',
                '<th role="columnheader"><strong>Rollen</strong></th>',
                '<th role="columnheader"><strong>Levenscyclus</strong></th>',
                "</tr>",
                "</thead>",
                "<tbody>",
                *[_create_table_row_2(item) for item in list],
                "</tbody>",
                "</table>",
                "<script src='filter.js'></script>",
            ]
        )

    def replace_maatregelen(match: Match):
        type = match.groups()[0]
        types = re.split(r"\s+", type)
        type_value_bundle = [y.split("/") for y in types if len(y.split("/")) == 2]

        list: List[File] = []
        for file in files:
            if not file.src_path.startswith("maatregelen/"):
                continue

            if not file.src_path.endswith(".md"):
                continue

            if all(
                value in file.page.meta.get(type, [])
                for type, value in type_value_bundle
            ):
                list.append(file)

        rollen = sorted(
            set(rol for file in list for rol in file.page.meta.get("rollen", []))
        )

        levenscyclus = sorted(
            set(lc for file in list for lc in file.page.meta.get("levenscyclus", []))
        )

        return "".join(
            [
                '<input type="text" id="filterInput" onkeyup="filterTable()" placeholder="Zoek op maatregel...">',
                '<select id="filterSelect" onchange="filterTable()">',
                '<option value="">Filter op rol...</option>',
                *(f'<option value="{rol}">{rol}</option>' for rol in rollen),
                "</select>",
                '<select id="filterLevenscyclusSelect" onchange="filterTable()">',
                '<option value="">Filter op levenscyclus...</option>',
                *(f'<option value="{lc}">{lc}</option>' for lc in levenscyclus),
                "</select>",
                "<table id='myTable'>",
                "<thead>",
                "<tr>",
                '<th role="columnheader"><strong>Maatregel</strong></th>',
                '<th role="columnheader"><strong>Uitleg</strong></th>',
                '<th role="columnheader"><strong>Rollen</strong></th>',
                '<th role="columnheader"><strong>Levenscyclus</strong></th>',
                "</tr>",
                "</thead>",
                "<tbody>",
                *[_create_table_row_2(item) for item in list],
                "</tbody>",
                "</table>",
                "<script src='filter.js'></script>",
            ]
        )

    def replace_instrumenten(match: Match):
        type = match.groups()[0]
        types = re.split(r"\s+", type)
        type_value_bundle = [y.split("/") for y in types if len(y.split("/")) == 2]

        list: List[File] = []
        for file in files:
            if not file.src_path.startswith("instrumenten/"):
                continue

            if not file.src_path.endswith(".md"):
                continue

            if all(
                value in file.page.meta.get(type, [])
                for type, value in type_value_bundle
            ):
                list.append(file)

        rollen = sorted(
            set(rol for file in list for rol in file.page.meta.get("rollen", []))
        )

        levenscyclus = sorted(
            set(lc for file in list for lc in file.page.meta.get("levenscyclus", []))
        )

        return "".join(
            [
                '<input type="text" id="filterInput" onkeyup="filterTable()" placeholder="Zoek op instrument...">',
                '<select id="filterSelect" onchange="filterTable()">',
                '<option value="">Filter op rol...</option>',
                *(f'<option value="{rol}">{rol}</option>' for rol in rollen),
                "</select>",
                '<select id="filterLevenscyclusSelect" onchange="filterTable()">',
                '<option value="">Filter op levenscyclus...</option>',
                *(f'<option value="{lc}">{lc}</option>' for lc in levenscyclus),
                "</select>",
                "<table id='myTable'>",
                "<thead>",
                "<tr>",
                '<th role="columnheader"><strong>Instrument</strong></th>',
                '<th role="columnheader"><strong>Uitleg</strong></th>',
                '<th role="columnheader"><strong>Rollen</strong></th>',
                '<th role="columnheader"><strong>Levenscyclus</strong></th>',
                "</tr>",
                "</thead>",
                "<tbody>",
                *[_create_table_row_2(item) for item in list],
                "</tbody>",
                "</table>",
                "<script src='filter.js'></script>",
            ]
        )

    for file in files:
        if not file.src_path.endswith(".md"):
            continue

        # Find and replace all strings in current page

        # Find and replace all strings in current page to list of vereisten
        file.page.content = re.sub(
            r"<!-- list_vereisten (.*?) -->",
            replace_vereisten,
            file.page.content,
            flags=re.I | re.M,
        )

        # Find and replace all strings in current page to list of maatregelen
        file.page.content = re.sub(
            r"<!-- list_maatregelen (.*?) -->",
            replace_maatregelen,
            file.page.content,
            flags=re.I | re.M,
        )

        # Find and replace all strings in current page to list of instrumenten
        file.page.content = re.sub(
            r"<!-- list_instrumenten (.*?) -->",
            replace_instrumenten,
            file.page.content,
            flags=re.I | re.M,
        )


def _create_table_row_1(file: File):
    return "".join(
        [
            "<tr>",
            f'<td><a href="{f"../" + file.dest_path}">{file.page.title}</a></td>',
            f"<td>{file.page.meta.get('toelichting', '')}</td>",
            f"<td>{file.page.meta.get('rollen', '')}</td>" "</tr>",
            f"<td>{file.page.meta.get('levenscyclus', '')}</td>" "</tr>",
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
