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
    def replace(match: Match):
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

    for file in files:
        if not file.src_path.endswith(".md"):
            continue

        # Find and replace all external asset URLs in current page
        file.page.content = re.sub(
            r"<!-- list_vereisten (.*?) -->", replace, file.page.content, flags=re.I | re.M
        )


def _create_table_row(file: File):

    return "".join(
        [
            "<tr>",
            f'<td><a href="{_resolve(file.dest_path)}">{file.page.title}</a></td>',
            f"<td>{file.page.meta.get('toelichting', '')}</td>",
            "</tr>",
        ]
    )


def _resolve(dest_path: str):
    path = posixpath.relpath(dest_path)
    return "/" + posixpath.sep.join(path.split(posixpath.sep)[:-1])


# def _icon_true():
#     return '<span class="twemoji" style="color: #4DB6AC"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m9 20.42-6.21-6.21 2.83-2.83L9 14.77l9.88-9.89 2.83 2.83L9 20.42Z"></path></svg></span>'


# def _icon_false():
#     return '<span class="twemoji" style="color: #EF5350"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z"></path></svg></span>'