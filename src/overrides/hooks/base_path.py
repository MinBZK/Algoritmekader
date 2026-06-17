"""Expose the site_url path prefix to templates as ``config.extra.base_path``.

Client-side code (``modal.js``) needs the absolute URL prefix the site is served
under -- e.g. ``/kader`` (production/preview container), ``/Algoritmekader``
(GitHub Pages) or ``""`` (served at the domain root) -- to load HTML fragments
and the beslishulp iframe.

Deriving it from ``site_url`` at build time keeps it correct on every deployment
and, unlike a value read from the DOM at click time, stable under Material's
instant navigation (which rewrites ``document.baseURI`` without updating stale
relative references).
"""

from urllib.parse import urlsplit

from mkdocs.config.defaults import MkDocsConfig


def on_config(config: MkDocsConfig) -> MkDocsConfig:
    config.extra["base_path"] = urlsplit(config.site_url or "").path.rstrip("/")
    return config
