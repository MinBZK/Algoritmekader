"""
MkDocs hook to automatically generate the definitions page from begrippenlijst.md
"""

import os
import re
from mkdocs.config.defaults import MkDocsConfig
from mkdocs.structure.files import Files
from mkdocs.structure.pages import Page


def on_pre_build(config: MkDocsConfig) -> None:
    """
    Generate definitions.md from begrippenlijst.md before build starts
    """
    # Path to begrippenlijst.md
    begrippenlijst_path = os.path.join(
        config["docs_dir"], "..", "includes", "begrippenlijst.md"
    )

    # Path to definitions.md
    definities_path = os.path.join(
        config["docs_dir"], "soorten-algoritmes-en-ai", "definities.md"
    )

    if not os.path.exists(begrippenlijst_path):
        print(f"Warning: {begrippenlijst_path} not found")
        return

    # Check if regeneration is needed (source is newer than target or target doesn't exist)
    if os.path.exists(definities_path):
        source_mtime = os.path.getmtime(begrippenlijst_path)
        target_mtime = os.path.getmtime(definities_path)
        if source_mtime <= target_mtime:
            # Target is up to date, no need to regenerate
            return

    try:
        # Read begrippenlijst.md
        with open(begrippenlijst_path, "r", encoding="utf-8") as f:
            begrippenlijst_content = f.read()

        # Extract terms and definitions using regex
        # Format: *[term]: definition
        terms = []
        for match in re.finditer(r"\*\[([^\]]+)\]:\s*(.+)", begrippenlijst_content):
            term = match.group(1).strip()
            definition = match.group(2).strip()
            terms.append((term, definition))

        # Sort terms alphabetically
        terms.sort(key=lambda x: x[0].lower())

        # Generate markdown table content
        table_content = []
        table_content.append("| Begrip | Definitie |")
        table_content.append("| ---- | ---- |")

        for term, definition in terms:
            # Escape pipe characters in definitions
            escaped_definition = definition.replace("|", "\\|")
            table_content.append(f"| {term} | {escaped_definition} |")

        # Create the complete definitions.md content
        definities_content = (
            """---
title: Woordenlijst
search:
  exclude: true
---

# Woordenlijst
<!-- Dit bestand wordt automatisch gegenereerd vanuit includes/begrippenlijst.md -->
<!-- Wijzig definities alleen in includes/begrippenlijst.md -->

"""
            + "\n".join(table_content)
            + "\n"
        )

        # Write the generated content to definitions.md
        with open(definities_path, "w", encoding="utf-8") as f:
            f.write(definities_content)

        print(
            f"✓ Generated {definities_path} with {len(terms)} definitions from {begrippenlijst_path}"
        )

    except Exception as e:
        print(f"Error generating definitions.md: {e}")


def on_files(files: Files, config: MkDocsConfig) -> Files:
    """
    Called after files are collected but before they are processed
    """
    return files


def on_page_markdown(
    markdown: str, page: Page, config: MkDocsConfig, files: Files
) -> str:
    """
    Called for each page after markdown is loaded but before it's converted to HTML
    """
    return markdown
