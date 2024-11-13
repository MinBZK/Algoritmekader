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
        for type in ["id", "levenscyclus", "rollen", "onderwerp"]:
            field = page.meta.get(type, [])

            if isinstance(field, str):
                buttons.append(flag(type, field, page, files))   
            else:
                for role in field:
                    buttons.append(flag(type, role, page, files))

        return "".join(buttons)

        # Replace callback
    def replace_ai_act(_: Match):
        buttons = []
        for type in ["soort-toepassing", "risicogroep", "rol-ai-act"]:
            field = page.meta.get(type, [])

            if isinstance(field, str):
                buttons.append(flag(type, field, page, files))   
            else:
                for role in field:
                    buttons.append(flag(type, role, page, files))

        return "".join(buttons)

    # Find and replace all external asset URLs in current page
        # Find and replace all external asset URLs in current page
    markdown = re.sub(
        r"<!-- tags -->",
        lambda match: replace(match),
        markdown,
        flags=re.I | re.M,
    )

    markdown = re.sub(
        r"<!-- tags-ai-act -->",
        lambda match: replace_ai_act(match),
        markdown,
        flags=re.I | re.M,
    )

    return markdown

# -----------------------------------------------------------------------------
# Helper functions
# -----------------------------------------------------------------------------

# Create a flag of a specific type
def flag(type: str, arg: str, page: Page, files: Files):
    if type == "id":
        return _badge_id(page, files, arg)
    elif type == "levenscyclus":
        return _badge_levenscyclus(page, files, arg)
    elif type == "rollen":
        return _badge_rollen(page, files, arg)
    elif type == "onderwerp":
        return _badge_onderwerp(page, files, arg)
    elif  type == "soort-toepassing":
        return _badge_soort_toepassing(page, files, arg)
    elif  type == "risicogroep":
        return _badge_risicogroep(page, files, arg)
    elif  type == "rol-ai-act":
        return _badge_rol_ai_act(page, files, arg)

    return ""


def _resolve_path(path: str, page: Page, files: Files):
    path, anchor, *_ = f"{path}#".split("#")
    file = files.get_file_from_path(path)
    
    # Check if file is None and handle the error
    if file is None:
        return ""  # or a default value
    
    resolved_path = _resolve(file, page)
    return "#".join([resolved_path, anchor]) if anchor else resolved_path

def _resolve(file: File, page: Page):
    # Ensure file and page.file are valid objects with src_uri
    if not file or not page.file:
        print(f"Error: Invalid file or page when resolving. file={file}, page.file={page.file}")
        return ""
    
    path = posixpath.relpath(file.src_uri, page.file.src_uri)
    return posixpath.sep.join(path.split(posixpath.sep)[1:])


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

# Create badge for id
def _badge_id(page: Page, files: Files, phase: str):
    icon = "material-tag"
    href_id = _resolve_path("vereisten/index.md", page, files)
    return _badge(
        icon=f"[:{icon}:]({href_id} 'Vereiste ID')",
        text=f"{phase[-6:]}",
        color="blue",
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
    href_onderwerp = _resolve_path("onderwerpen/index.md", page, files)
    href_fase = _resolve_path(f"onderwerpen/{blok}.md", page, files)
    return _badge(
        icon=f"[:{icon}:]({href_onderwerp} 'Onderwerp')",
        text=f"[{blok.capitalize().replace('-', ' ')}]({href_fase})",
        color="teal",
    )

# Create badge for soort-toepassing
def _badge_soort_toepassing(page: Page, files: Files, rol: str):
    icon = "material-graph"
    href_soort_toepassing = _resolve_path("overhetalgoritmekader/soorten-algoritmes.md", page, files)
    return _badge(
        icon=f"[:{icon}:]({href_soort_toepassing} 'Soort toepassing')",
        text=f"[{rol.replace('-', ' ').replace('ai ', 'AI-')}]({href_soort_toepassing})",
        color="blue",
    )

# Create badge for risicogroep
def _badge_risicogroep(page: Page, files: Files, rol: str):
    icon = "material-alert"
    href_risicogroep = _resolve_path("overhetalgoritmekader/soorten-algoritmes.md#risicogroepen-ai-systemen", page, files)
    return _badge(
        icon=f"[:{icon}:]({href_risicogroep} 'Risicogroep')",
        text=f"[{rol.replace('-', ' ').replace('ai', 'AI').replace('AI ', 'AI-')}]({href_risicogroep})",
        color="blue",
    )

# Create badge for rol-ai-act
def _badge_rol_ai_act(page: Page, files: Files, rol: str):
    icon = "material-account-details"
    href_rol_ai_act = _resolve_path("overhetalgoritmekader/soorten-algoritmes.md", page, files)
    return _badge(
        icon=f"[:{icon}:]({href_rol_ai_act} 'Rol AI-verordening')",
        text=f"[{rol.capitalize().replace('-', ' ')}]({href_rol_ai_act})",
        color="blue",
    )