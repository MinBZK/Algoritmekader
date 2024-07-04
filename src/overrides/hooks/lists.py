from __future__ import annotations
from typing import List

import posixpath
import re

from mkdocs.config.defaults import MkDocsConfig
from mkdocs.structure.files import File, Files
from mkdocs.structure.pages import Page
from re import Match

# -----------------------------------------------------------------------------
# Hooks
# -----------------------------------------------------------------------------


# @todo
def on_env(env, config: MkDocsConfig, files: Files):

    # function to create list of vereisten
    def replace_vereisten(match: Match):
        type = match.groups()[0]
        types = re.split(r"\s+", type)
        type_value_bundle = [y.split("/") for y in types]

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

        return "".join(
            [
                "<table>",
                "<thead>",
                "<tr>",
                '<th role="columnheader"><strong>Vereiste</strong></th>',
                '<th role="columnheader"><strong>Uitleg</strong></th>',
                "</tr>",
                "</thead>",
                "<tbody>",
                *([_create_table_row(item) for item in list]),
                "</tbody>",
                "</table>",
            ]
        )
    
    # function to create list of maatregelen
    def replace_maatregelen(match: Match):
        type = match.groups()[0]
        types = re.split(r"\s+", type)
        type_value_bundle = [y.split("/") for y in types]

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

        return "".join(
            [
                "<table>",
                "<thead>",
                "<tr>",
                '<th role="columnheader"><strong>Maatregel</strong></th>',
                '<th role="columnheader"><strong>Uitleg</strong></th>',
                "</tr>",
                "</thead>",
                "<tbody>",
                *([_create_table_row(item) for item in list]),
                "</tbody>",
                "</table>",
            ]
        )

    # function to create list of instrumenten
    def replace_instrumenten(match: Match):
        type = match.groups()[0]
        types = re.split(r"\s+", type)
        type_value_bundle = [y.split("/") for y in types]

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

        return "".join(
            [
                "<table>",
                "<thead>",
                "<tr>",
                '<th role="columnheader"><strong>Instrument</strong></th>',
                '<th role="columnheader"><strong>Uitleg</strong></th>',
                "</tr>",
                "</thead>",
                "<tbody>",
                *([_create_table_row(item) for item in list]),
                "</tbody>",
                "</table>",
            ]
        )

    # function to create list of vereisten on maatregelen page
    def replace_vereisten_on_maatregelen_page(match: Match):

        list_of_vereisten = file.page.meta.get('vereiste', '')

        list: List[File] = []
        for new_files in files:
            if not new_files.src_path.startswith("vereisten/"):
                continue

            if not new_files.src_path.endswith(".md"):
                continue

            if new_files.name in list_of_vereisten:
                list.append(new_files)

        return "".join(
            [
                "<table>",
                "<thead>",
                "<tr>",
                '<th role="columnheader"><strong>Vereiste</strong></th>',
                '<th role="columnheader"><strong>Uitleg</strong></th>',
                "</tr>",
                "</thead>",
                "<tbody>",
                *([_create_table_row(item) for item in list]),
                "</tbody>",
                "</table>",
            ]
        )
    
    for file in files:
        if not file.src_path.endswith(".md"):
            continue
        
        # Find and replace all strings in current page to list of vereisten
        file.page.content = re.sub(
            r"<!-- list_vereisten (.*?) -->", replace_vereisten, file.page.content, flags=re.I | re.M
        )

        # Find and replace all strings in current page to list of maatregelen
        file.page.content = re.sub(
            r"<!-- list_maatregelen (.*?) -->", replace_maatregelen, file.page.content, flags=re.I | re.M
        )

        # Find and replace all strings in current page to list of instrumenten
        file.page.content = re.sub(
            r"<!-- list_instrumenten (.*?) -->", replace_instrumenten, file.page.content, flags=re.I | re.M
        )

        # Find and replace all strings in current page to list of vereisten on maatregelen page
        file.page.content = re.sub(
            r"<!-- list_vereisten_on_maatregelen_page -->", replace_vereisten_on_maatregelen_page, file.page.content, flags=re.I | re.M
        )

def _create_table_row(file: File):

    return "".join(
        [
            "<tr>",
            f'<td><a href="{file.dest_path}">{file.page.title}</a></td>',
            f'<td><a href="{file.url}">{file.page.title}</a></td>',
            f"<td>{file.page.meta.get('toelichting', '')}</td>"
            "</tr>",
        ]
    )


def _resolve(dest_path: str):
    path = posixpath.relpath(dest_path)
    return "/" + posixpath.sep.join(path.split(posixpath.sep)[:-1])
