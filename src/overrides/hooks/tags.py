from __future__ import annotations

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
def on_page_markdown(markdown: str, *, page: Page, config: MkDocsConfig, files: Files):

    # Replace callback
    def replace(_: Match):
        buttons = []
        for type in ["levenscyclus", "rollen", "onderwerp"]:
            for role in page.meta.get(type, []):
                buttons.append(flag(type, role, page, files))

        return "".join(buttons)

    # Find and replace all external asset URLs in current page
    return re.sub(r"<!-- tags -->", replace, markdown, flags=re.I | re.M)


# -----------------------------------------------------------------------------
# Helper functions
# -----------------------------------------------------------------------------


# Create a flag of a specific type
def flag(type: str, arg: str, page: Page, files: Files):
    if type == "levenscyclus":
        return _badge_levenscyclus(page, files, arg)
    elif type == "rollen":
        return _badge_rollen(page, files, arg)
    elif type == "onderwerp":
        return _badge_onderwerp(page, files, arg)

    return ""


# Create a linkable option
def option(type: str):
    _, *_, name = re.split(r"[.:]", type)
    return f"[`{name}`](#+{type}){{ #+{type} }}\n\n"


# Create a linkable setting - @todo append them to the bottom of the page
def setting(type: str):
    _, *_, name = re.split(r"[.*]", type)
    return f"`{name}` {{ #{type} }}\n\n[{type}]: #{type}\n\n"


# -----------------------------------------------------------------------------


# Resolve path of file relative to given page - the posixpath always includes
# one additional level of `..` which we need to remove
def _resolve_path(path: str, page: Page, files: Files):
    path, anchor, *_ = f"{path}#".split("#")
    path = _resolve(files.get_file_from_path(path), page)
    return "#".join([path, anchor]) if anchor else path


# Resolve path of file relative to given page - the posixpath always includes
# one additional level of `..` which we need to remove
def _resolve(file: File, page: Page):
    path = posixpath.relpath(file.src_uri, page.file.src_uri)
    return posixpath.sep.join(path.split(posixpath.sep)[1:])


# -----------------------------------------------------------------------------


# Create badge
def _badge(icon: str, text: str = "", type: str = "", color: str = "blue"):
    classes = f"mdx-badge mdx-badge--{type}" if type else "mdx-badge"
    return "".join(
        [
            f'<span class="{classes}" data-md-color-accent="{color}">',
            *([f'<span class="mdx-badge__icon">{icon}</span>'] if icon else []),
            *([f'<span class="mdx-badge__text">{text}</span>'] if text else []),
            f"</span>",
        ]
    )


# Create badge for levenscyclus
def _badge_levenscyclus(page: Page, files: Files, phase: str):
    icon = "material-reload"
    href_levenscyclus = _resolve_path("levenscyclus/index.md", page, files)
    href_fase = _resolve_path(f"levenscyclus/{phase}.md", page, files)
    return _badge(
        icon=f"[:{icon}:]({href_levenscyclus} 'Levencyclus')",
        text=f"[{phase.capitalize().replace('-', ' ')}]({href_fase})",
        color="indigo",
    )


# Create badge for rollen
def _badge_rollen(page: Page, files: Files, rol: str):
    icon = "material-account"
    href_rol = _resolve_path("rollen/index.md", page, files)
    href_fase = _resolve_path(f"rollen/{rol}.md", page, files)
    return _badge(
        icon=f"[:{icon}:]({href_rol} 'Rollen')",
        text=f"[{rol.capitalize().replace('-', ' ')}]({href_fase})",
        color="deep-orange",
    )


# Create badge for onderwerp
def _badge_onderwerp(page: Page, files: Files, blok: str):
    icon = "material-lightbulb"
    if blok == 'governance':
        href_onderwerp = _resolve_path("onderwerpen/index.md", page, files)
        href_fase = _resolve_path(f"governance/index.md", page, files)
    else:
        href_onderwerp = _resolve_path("onderwerpen/index.md", page, files)
        href_fase = _resolve_path(f"onderwerpen/{blok}/index.md", page, files)
    return _badge(
        icon=f"[:{icon}:]({href_onderwerp} 'Onderwerp')",
        text=f"[{blok.capitalize().replace('-', ' ')}]({href_fase})",
        color="teal",
    )