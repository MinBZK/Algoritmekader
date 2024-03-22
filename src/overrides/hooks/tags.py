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
        for type in ["levenscyclus", "rollen", "techniek"]:
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
    href_levenscyclus = _resolve_path("rollen/index.md", page, files)
    href_fase = _resolve_path(f"rollen/{rol}.md", page, files)
    return _badge(
        icon=f"[:{icon}:]({href_levenscyclus} 'Rollen')",
        text=f"[{rol.capitalize().replace('-', ' ')}]({href_fase})",
        color="green",
    )


# Create sponsors badge
def _badge_for_sponsors(page: Page, files: Files):
    icon = "material-heart"
    href = _resolve_path("maatregelen/index.md", page, files)
    return _badge(icon=f"[:{icon}:]({href} 'Sponsors only')", type="heart")


# Create badge for version
def _badge_for_version(text: str, page: Page, files: Files):
    spec = text
    path = f"changelog/index.md#{spec}"

    # Return badge
    icon = "material-tag-outline"
    href = _resolve_path("conventions.md#version", page, files)
    return _badge(
        icon=f"[:{icon}:]({href} 'Minimum version')",
        text=f"[{text}]({_resolve_path(path, page, files)})" if spec else "",
    )


# Create badge for version of Insiders
def _badge_for_version_insiders(text: str, page: Page, files: Files):
    spec = text.replace("insiders-", "")
    path = f"insiders/changelog/index.md#{spec}"

    # Return badge
    icon = "material-tag-heart-outline"
    href = _resolve_path("conventions.md#version-insiders", page, files)
    return _badge(
        icon=f"[:{icon}:]({href} 'Minimum version')",
        text=f"[{text}]({_resolve_path(path, page, files)})" if spec else "",
    )


# Create badge for feature
def _badge_for_feature(text: str, page: Page, files: Files):
    icon = "material-toggle-switch"
    href = _resolve_path("conventions.md#feature", page, files)
    return _badge(icon=f"[:{icon}:]({href} 'Optional feature')", text=text)


# Create badge for plugin
def _badge_for_plugin(text: str, page: Page, files: Files):
    icon = "material-floppy"
    href = _resolve_path("conventions.md#plugin", page, files)
    return _badge(icon=f"[:{icon}:]({href} 'Plugin')", text=text)


# Create badge for extension
def _badge_for_extension(text: str, page: Page, files: Files):
    icon = "material-language-markdown"
    href = _resolve_path("conventions.md#extension", page, files)
    return _badge(icon=f"[:{icon}:]({href} 'Markdown extension')", text=text)


# Create badge for utility
def _badge_for_utility(text: str, page: Page, files: Files):
    icon = "material-package-variant"
    href = _resolve_path("conventions.md#utility", page, files)
    return _badge(icon=f"[:{icon}:]({href} 'Third-party utility')", text=text)


# Create badge for example
def _badge_for_example(text: str, page: Page, files: Files):
    return "\n".join(
        [
            _badge_for_example_download(text, page, files),
            _badge_for_example_view(text, page, files),
        ]
    )


# Create badge for example view
def _badge_for_example_view(text: str, page: Page, files: Files):
    icon = "material-folder-eye"
    href = f"https://mkdocs-material.github.io/examples/{text}/"
    return _badge(icon=f"[:{icon}:]({href} 'View example')", type="right")


# Create badge for example download
def _badge_for_example_download(text: str, page: Page, files: Files):
    icon = "material-folder-download"
    href = f"https://mkdocs-material.github.io/examples/{text}.zip"
    return _badge(
        icon=f"[:{icon}:]({href} 'Download example')",
        text=f"[`.zip`]({href})",
        type="right",
    )


# Create badge for default value
def _badge_for_default(text: str, page: Page, files: Files):
    icon = "material-water"
    href = _resolve_path("conventions.md#default", page, files)
    return _badge(icon=f"[:{icon}:]({href} 'Default value')", text=text)


# Create badge for empty default value
def _badge_for_default_none(page: Page, files: Files):
    icon = "material-water-outline"
    href = _resolve_path("conventions.md#default", page, files)
    return _badge(icon=f"[:{icon}:]({href} 'Default value is empty')")


# Create badge for computed default value
def _badge_for_default_computed(page: Page, files: Files):
    icon = "material-water-check"
    href = _resolve_path("conventions.md#default", page, files)
    return _badge(icon=f"[:{icon}:]({href} 'Default value is computed')")


# Create badge for metadata property flag
def _badge_for_metadata(page: Page, files: Files):
    icon = "material-list-box-outline"
    href = _resolve_path("conventions.md#metadata", page, files)
    return _badge(icon=f"[:{icon}:]({href} 'Metadata property')")


# Create badge for required value flag
def _badge_for_required(page: Page, files: Files):
    icon = "material-alert"
    href = _resolve_path("conventions.md#required", page, files)
    return _badge(icon=f"[:{icon}:]({href} 'Required value')")


# Create badge for customization flag
def _badge_for_customization(page: Page, files: Files):
    icon = "material-brush-variant"
    href = _resolve_path("conventions.md#customization", page, files)
    return _badge(icon=f"[:{icon}:]({href} 'Customization')")


# Create badge for multiple instance flag
def _badge_for_multiple(page: Page, files: Files):
    icon = "material-inbox-multiple"
    href = _resolve_path("conventions.md#multiple-instances", page, files)
    return _badge(icon=f"[:{icon}:]({href} 'Multiple instances')")
