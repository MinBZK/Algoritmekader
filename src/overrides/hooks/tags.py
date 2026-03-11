from __future__ import annotations

import logging
import posixpath
import re

from mkdocs.config.defaults import MkDocsConfig
from mkdocs.structure.files import File, Files
from mkdocs.structure.pages import Page
from re import Match

log = logging.getLogger("mkdocs.hooks.tags")

# -----------------------------------------------------------------------------
# Badge configuration
# -----------------------------------------------------------------------------

# For simple badge types that follow the pattern:
#   icon_path = "{category}/index.md"
#   text_path = "{category}/{value}.md"
#   text = value.capitalize().replace('-', ' ')
BADGE_CONFIG = {
    "levenscyclus": {
        "icon": "material-reload",
        "color": "indigo",
        "icon_path": "levenscyclus/index.md",
        "text_path": "levenscyclus/{value}.md",
        "title": "Levencyclus",
    },
    "rollen": {
        "icon": "material-account",
        "color": "deep-orange",
        "icon_path": "rollen/index.md",
        "text_path": "rollen/{value}.md",
        "title": "Rollen",
    },
    "onderwerp": {
        "icon": "material-lightbulb",
        "color": "teal",
        "icon_path": "onderwerpen/index.md",
        "text_path": "onderwerpen/{value}.md",
        "title": "Onderwerp",
    },
    "transparantieverplichting": {
        "icon": "material-magnify",
        "color": "blue",
        "icon_path": "soorten-algoritmes-en-ai/risico-van-ai-systemen.md#risico-op-misleiding",
        "text_path": "soorten-algoritmes-en-ai/risico-van-ai-systemen.md#risico-op-misleiding",
        "title": "Transparantieverplichting AI-verordening",
    },
    "systeemrisico": {
        "icon": "material-network",
        "color": "blue",
        "icon_path": "ai-verordening/ai-verordening-in-het-kort.md#ai-model-voor-algemene-doeleinden",
        "text_path": "ai-verordening/ai-verordening-in-het-kort.md#ai-model-voor-algemene-doeleinden",
        "title": "Systeemrisico AI-verordening",
    },
}

# Special text path mappings for soort-toepassing
_SOORT_TOEPASSING_PATHS = {
    "ai-systeem": "ai-verordening/ai-verordening-in-het-kort.md#ai-systeem",
    "ai-systeem-voor-algemene-doeleinden": "ai-verordening/ai-verordening-in-het-kort.md#ai-model-voor-algemene-doeleinden",
    "ai-model-voor-algemene-doeleinden": "ai-verordening/ai-verordening-in-het-kort.md#ai-model-voor-algemene-doeleinden",
}

# -----------------------------------------------------------------------------
# Hooks
# -----------------------------------------------------------------------------


# @todo
def on_page_markdown(markdown: str, *, page: Page, config: MkDocsConfig, files: Files):
    # Replace callback
    def replace(_: Match):
        buttons = []
        for tag_type in ["id", "levenscyclus", "rollen", "onderwerp"]:
            field = page.meta.get(tag_type, [])

            if isinstance(field, str):
                buttons.append(flag(tag_type, field, page, files))
            else:
                for role in field:
                    buttons.append(flag(tag_type, role, page, files))

        return "".join(buttons)

    # Replace callback
    def replace_ai_act(_: Match):
        buttons = []
        for tag_type in [
            "soort-toepassing",
            "risicogroep",
            "rol-ai-act",
            "systeemrisico",
            "transparantieverplichting",
        ]:
            field = page.meta.get(tag_type, [])
            if isinstance(field, str):
                if (
                    field != "niet-van-toepassing"
                    and field != "uitzondering-van-toepassing"
                ):  # Skip niet-van-toepassing and skip uitzondering van toepassing
                    buttons.append(flag(tag_type, field, page, files))
            else:
                for role in field:
                    # Skip niet-van-toepassing or uitzondering-van-toepassing
                    if (
                        role == "niet-van-toepassing"
                        or role == "uitzondering-van-toepassing"
                    ):
                        continue

                    buttons.append(flag(tag_type, role, page, files))

        # for non-aia vereisten, remove the buttons and add other toelichting
        page_id = page.meta.get("id")
        if not page_id or not page_id.startswith("urn:nl:ak:ver:aia-"):
            toelichting = "Deze vereiste geldt waarschijnlijk voor jouw algoritmische toepassingen. Bekijk de [bronnen](#bronnen) om te controleren of dit zo is."
            buttons = toelichting
        else:  # for aia vereisten, add toelichting to the buttons
            toelichting = "Deze vereiste is van toepassing voor onderstaande (combinatie van) labels. Gebruik de <a href=\"#\" onclick=\"showModal(event, 'beslishulp AI-verordening', {redirectUrl: 'voldoen-aan-wetten-en-regels/vereisten/'});\">beslishulp AI-verordening</a> voor hulp bij wat er in jouw situatie van toepassing is. <br/> <br/>"
            buttons.insert(0, toelichting)

        return "".join(buttons)

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


def _badge_generic(tag_type: str, value: str, page: Page, files: Files) -> str:
    """Generate a badge from the BADGE_CONFIG dictionary."""
    cfg = BADGE_CONFIG.get(tag_type)
    if not cfg:
        return ""
    icon = cfg["icon"]
    color = cfg["color"]
    title = cfg["title"]
    icon_path = cfg["icon_path"]
    text_path = cfg["text_path"].format(value=value)

    href_icon = _resolve_path(icon_path, page, files)
    href_text = _resolve_path(text_path, page, files)
    display_text = value.capitalize().replace("-", " ")
    return _badge(
        icon=f"[:{icon}:]({href_icon} '{title}')",
        text=f"[{display_text}]({href_text})",
        color=color,
    )


# Create a flag of a specific tag_type
def flag(tag_type: str, arg: str, page: Page, files: Files):
    # Handle types in BADGE_CONFIG with the generic approach
    if tag_type in BADGE_CONFIG:
        return _badge_generic(tag_type, arg, page, files)

    # Handle special types that need custom logic
    if tag_type == "id":
        return _badge_id(page, files, arg)
    elif tag_type == "soort-toepassing":
        return _badge_soort_toepassing(page, files, arg)
    elif tag_type == "risicogroep":
        return _badge_risicogroep(page, files, arg)
    elif tag_type == "rol-ai-act":
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
    # Ensure file and page.file are valid objects
    if not file or not page.file:
        log.warning(
            "Invalid file or page when resolving. file=%s, page.file=%s",
            file,
            page.file,
        )
        return ""

    # Use URL instead of src_uri to get the correct HTML path
    if hasattr(file, "url") and hasattr(page.file, "url"):
        # Calculate relative path from current page to target file
        current_dir = posixpath.dirname(page.file.url)
        target_url = file.url

        # Calculate relative path
        if current_dir == "":
            return target_url
        else:
            # Get relative path from current directory to target
            return posixpath.relpath(target_url, current_dir)
    else:
        # Fallback to old method
        path = posixpath.relpath(file.src_uri, page.file.src_uri)
        return posixpath.sep.join(path.split(posixpath.sep)[1:])


# Create badge - keep original system but remove icon link, keep text link
def _badge(icon: str, text: str = "", tag_type: str = "", color: str = "blue"):
    classes = f"mdx-badge mdx-badge--{tag_type}" if tag_type else "mdx-badge"

    # Extract just the icon name without the link
    icon_content = icon
    if icon.startswith("[:") and "](" in icon:
        # Parse [:icon-name:](href 'title') format and extract just the icon name
        parts = icon[2:].split(":](", 1)
        if len(parts) >= 1:
            icon_content = f":{parts[0]}:"

    return "".join(
        [
            f'<span class="{classes}" data-md-color-accent="{color}">',
            *([f'<span class="mdx-badge__icon">{icon_content}</span>'] if icon else []),
            *([f'<span class="mdx-badge__text">{text}</span>'] if text else []),
            "</span>",
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


# Create badge for soort-toepassing
def _badge_soort_toepassing(page: Page, files: Files, soort: str):
    icon = "material-graph"
    href_soort_toepassing = _resolve_path(
        "soorten-algoritmes-en-ai/wat-is-een-algoritme.md", page, files
    )
    href_fase = href_soort_toepassing
    if soort in _SOORT_TOEPASSING_PATHS:
        href_fase = _resolve_path(_SOORT_TOEPASSING_PATHS[soort], page, files)

    return _badge(
        icon=f"[:{icon}:]({href_soort_toepassing} 'Soort toepassing')",
        text=f"[{soort.capitalize().replace('-', ' ').replace('Ai ', 'AI-')}]({href_fase})",
        color="blue",
    )


# Create badge for risicogroep
def _badge_risicogroep(page: Page, files: Files, risicogroep: str):
    icon = "material-alert"
    href_risicogroep = _resolve_path(
        "ai-verordening/ai-verordening-in-het-kort.md#risicogroepen", page, files
    )
    if risicogroep == "geen-hoog-risico-ai-systeem":
        href_fase = _resolve_path(
            "soorten-algoritmes-en-ai/risico-van-ai-systemen.md#hoog-risico-ai-systeem",
            page,
            files,
        )
    else:
        href_fase = _resolve_path(
            f"soorten-algoritmes-en-ai/risico-van-ai-systemen.md#{risicogroep}",
            page,
            files,
        )
    return _badge(
        icon=f"[:{icon}:]({href_risicogroep} 'Risicogroep')",
        text=f"[{risicogroep.capitalize().replace('-', ' ').replace('ai', 'AI').replace('AI ', 'AI-')}]({href_fase})",
        color="blue",
    )


# Create badge for rol-ai-act
def _badge_rol_ai_act(page: Page, files: Files, rol: str):
    icon = "material-account-details"
    href_rol_ai_act = _resolve_path(
        "ai-verordening/ai-verordening-in-het-kort.md#rollen-uit-de-ai-verordening",
        page,
        files,
    )
    if rol == "aanbieder" or rol == "gebruiksverantwoordelijke":
        href_fase = _resolve_path(
            f"ai-verordening/ai-verordening-in-het-kort.md#{rol}", page, files
        )
    else:
        href_fase = _resolve_path(
            "ai-verordening/ai-verordening-in-het-kort.md#andere-rollen", page, files
        )
    return _badge(
        icon=f"[:{icon}:]({href_rol_ai_act} 'Rol AI-verordening')",
        text=f"[{rol.capitalize().replace('-', ' ')}]({href_fase})",
        color="blue",
    )
