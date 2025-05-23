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
        for type in [
            "soort-toepassing",
            "risicogroep",
            "rol-ai-act",
            "systeemrisico",
            "transparantieverplichting",
        ]:
            field = page.meta.get(type, [])
            if isinstance(field, str):
                if (
                    field != "niet-van-toepassing"
                    and field != "uitzondering-van-toepassing"
                ):  # Skip niet-van-toepassing and skip uitzondering van toepassing
                    buttons.append(flag(type, field, page, files))
            else:
                for role in field:
                    # Skip niet-van-toepassing or uitzondering-van-toepassing
                    if (
                        role == "niet-van-toepassing"
                        or role == "uitzondering-van-toepassing"
                    ):
                        continue

                    buttons.append(flag(type, role, page, files))

        # for non-aia vereisten, remove the buttons and add other toelichting
        if not page.meta.get("id").startswith("urn:nl:ak:ver:aia-"):
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
    elif type == "soort-toepassing":
        return _badge_soort_toepassing(page, files, arg)
    elif type == "risicogroep":
        return _badge_risicogroep(page, files, arg)
    elif type == "rol-ai-act":
        return _badge_rol_ai_act(page, files, arg)
    elif type == "transparantieverplichting":
        return _badge_transparantieverplichting(page, files, arg)
    elif type == "systeemrisico":
        return _badge_systeemrisico(page, files, arg)
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
        print(
            f"Error: Invalid file or page when resolving. file={file}, page.file={page.file}"
        )
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
def _badge_soort_toepassing(page: Page, files: Files, soort: str):
    icon = "material-graph"
    href_soort_toepassing = _resolve_path(
        "soorten-algoritmes-en-ai/wat-is-een-algoritme.md", page, files
    )
    href_fase = href_soort_toepassing
    if soort == "ai-systeem":
        href_fase = _resolve_path(
            "voldoen-aan-wetten-en-regels/ai-verordening.md#ai-systeem", page, files
        )
    elif soort == "ai-systeem-voor-algemene-doeleinden":
        href_fase = _resolve_path(
            "voldoen-aan-wetten-en-regels/ai-verordening.md#ai-model-voor-algemene-doeleinden",
            page,
            files,
        )
    elif soort == "ai-model-voor-algemene-doeleinden":
        href_fase = _resolve_path(
            "voldoen-aan-wetten-en-regels/ai-verordening.md#ai-model-voor-algemene-doeleinden",
            page,
            files,
        )

    return _badge(
        icon=f"[:{icon}:]({href_soort_toepassing} 'Soort toepassing')",
        text=f"[{soort.capitalize().replace('-', ' ').replace('Ai ', 'AI-')}]({href_fase})",
        color="blue",
    )


# Create badge for risicogroep
def _badge_risicogroep(page: Page, files: Files, risicogroep: str):
    icon = "material-alert"
    href_risicogroep = _resolve_path(
        "voldoen-aan-wetten-en-regels/ai-verordening.md#risicogroepen", page, files
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
        "voldoen-aan-wetten-en-regels/ai-verordening.md#rollen-uit-de-ai-verordening",
        page,
        files,
    )
    if rol == "aanbieder" or rol == "gebruiksverantwoordelijke":
        href_fase = _resolve_path(
            f"voldoen-aan-wetten-en-regels/ai-verordening.md#{rol}", page, files
        )
    else:
        href_fase = _resolve_path(
            "voldoen-aan-wetten-en-regels/ai-verordening.md#andere-rollen", page, files
        )
    return _badge(
        icon=f"[:{icon}:]({href_rol_ai_act} 'Rol AI-verordening')",
        text=f"[{rol.capitalize().replace('-', ' ')}]({href_fase})",
        color="blue",
    )


# Create badge for transparantieverplichting
def _badge_transparantieverplichting(page: Page, files: Files, rol: str):
    icon = "material-magnify"
    href_transparantieverplichting = _resolve_path(
        "soorten-algoritmes-en-ai/risico-van-ai-systemen.md#risico-op-misleiding",
        page,
        files,
    )
    return _badge(
        icon=f"[:{icon}:]({href_transparantieverplichting} 'Transparantieverplichting AI-verordening')",
        text=f"[{rol.capitalize().replace('-', ' ')}]({href_transparantieverplichting})",
        color="blue",
    )


# Create badge for systeemrisico
def _badge_systeemrisico(page: Page, files: Files, rol: str):
    icon = "material-network"
    href_systeemrisico = _resolve_path(
        "voldoen-aan-wetten-en-regels/ai-verordening.md#ai-model-voor-algemene-doeleinden",
        page,
        files,
    )
    return _badge(
        icon=f"[:{icon}:]({href_systeemrisico} 'Systeemrisico AI-verordening')",
        text=f"[{rol.capitalize().replace('-', ' ')}]({href_systeemrisico})",
        color="blue",
    )
