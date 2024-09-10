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

    # function to create list of vereisten on governance page
    def replace_vereisten_governance(match: Match):
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
                "<tbody>",
                "<ul>",
                *([_create_list_item(item) for item in list]),
                "</ul>"
                "</tbody>",
            ]
        )
    
    # function to create list of vereisten
    def replace_vereisten_all(match: Match):

        list: List[File] = []
        for file in files:
            if file.src_path.startswith("vereisten/") and not file.src_path.endswith("index.md"):
                 list.append(file)

        return "".join(
            [
                "<tbody>",
                "<ul>",
                *([_create_list_item(item) for item in list]),
                "</ul>"
                "</tbody>",
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

    # function to create list of maatregelen
    def replace_maatregelen_governance(match: Match):
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
                "<tbody>",
                "<ul>",
                *([_create_list_item(item) for item in list]),
                "</ul>"
                "</tbody>",
            ]
        )
    
    # function to create list of maatregelen
    def replace_maatregelen_all(match: Match):
        list: List[File] = []
        for file in files:
            if file.src_path.startswith("maatregelen/") and not file.src_path.endswith("index.md"):
                 list.append(file)

        return "".join(
            [
                "<tbody>",
                "<ul>",
                *([_create_list_item(item) for item in list]),
                "</ul>"
                "</tbody>",
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

        # Find and replace all strings in current page to list of vereisten
        file.page.content = re.sub(
            r"<!-- list_vereisten_governance (.*?) -->", replace_vereisten_governance, file.page.content, flags=re.I | re.M
        )

         # Find and replace all strings in current page to list of vereisten
        file.page.content = re.sub(
            r"<!-- list_vereisten_all -->", replace_vereisten_all, file.page.content, flags=re.I | re.M
        )

        # Find and replace all strings in current page to list of maatregelen
        file.page.content = re.sub(
            r"<!-- list_maatregelen (.*?) -->", replace_maatregelen, file.page.content, flags=re.I | re.M
        )

        # Find and replace all strings in current page to list of maatregelen
        file.page.content = re.sub(
            r"<!-- list_maatregelen_governance (.*?) -->", replace_maatregelen_governance, file.page.content, flags=re.I | re.M
        )

        # Find and replace all strings in current page to list of maatregelen
        file.page.content = re.sub(
            r"<!-- list_maatregelen_all -->", replace_maatregelen_all, file.page.content, flags=re.I | re.M
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
            f'<td><a href="{f"../../" + file.dest_path}">{file.page.title}</a></td>',
            f"<td>{file.page.meta.get('toelichting', '')}</td>"
            "</tr>",
        ]
    )

# function to create list item
def _create_list_item(file: File):

    return "".join(
        [
            "<tr>",
            f'<li><a href="{f"../" + file.dest_path}">{file.page.title}</a></li>',
            "</tr>",
        ]
    )

def _resolve(dest_path: str):
    path = posixpath.relpath(dest_path)
    return "/" + posixpath.sep.join(path.split(posixpath.sep)[:-1])