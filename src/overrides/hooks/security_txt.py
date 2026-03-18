"""
Hook to fetch and deploy security.txt file during MkDocs build.

This hook:
1. Attempts to fetch security.txt from NCSC (https://www.ncsc.nl/.well-known/security.txt)
2. Updates the Canonical field to point to our own domain
3. Places the file in .well-known/security.txt in the built site
4. Falls back to a basic security.txt if the fetch fails
"""

import os
import urllib.request
import urllib.error
from datetime import datetime, timedelta
from mkdocs.config.defaults import MkDocsConfig


def on_post_build(config: MkDocsConfig) -> None:
    """
    Hook that runs after the MkDocs build completes.
    Fetches NCSC security.txt and deploys it to the built site.
    """
    site_dir = config.site_dir
    well_known_dir = os.path.join(site_dir, ".well-known")
    security_txt_path = os.path.join(well_known_dir, "security.txt")

    # Create .well-known directory if it doesn't exist
    os.makedirs(well_known_dir, exist_ok=True)

    ncsc_security_txt_url = "https://www.ncsc.nl/.well-known/security.txt"
    canonical_url = "https://minbzk.github.io/Algoritmekader/.well-known/security.txt"

    # Try to fetch NCSC security.txt
    security_txt_content = _fetch_ncsc_security_txt(
        ncsc_security_txt_url, canonical_url
    )

    if security_txt_content:
        print("Successfully fetched and deployed security.txt from NCSC")
    else:
        print("Failed to fetch NCSC security.txt, using fallback")
        security_txt_content = _generate_fallback_security_txt(canonical_url)

    # Write security.txt to the built site
    with open(security_txt_path, "w", encoding="utf-8") as f:
        f.write(security_txt_content)

    print(f"  Location: {security_txt_path}")


def _fetch_ncsc_security_txt(url: str, canonical_url: str) -> str:
    """
    Fetch security.txt from NCSC and update the Canonical field.

    Returns:
        The modified security.txt content, or empty string if fetch fails.
    """
    try:
        with urllib.request.urlopen(url, timeout=10) as response:
            content = response.read().decode("utf-8")

        # Update the Canonical field to point to our domain
        lines = content.split("\n")
        updated_lines = []
        canonical_found = False

        for line in lines:
            if line.lower().startswith("canonical:"):
                updated_lines.append(f"Canonical: {canonical_url}")
                canonical_found = True
            else:
                updated_lines.append(line)

        # If Canonical wasn't found, add it
        if not canonical_found:
            # Insert Canonical after Contact (or at the end if no Contact)
            contact_idx = None
            for i, line in enumerate(updated_lines):
                if line.lower().startswith("contact:"):
                    contact_idx = i
                    break

            if contact_idx is not None:
                updated_lines.insert(contact_idx + 1, f"Canonical: {canonical_url}")
            else:
                updated_lines.append(f"Canonical: {canonical_url}")

        return "\n".join(updated_lines)

    except (urllib.error.URLError, urllib.error.HTTPError, Exception) as e:
        print(f"  Error fetching NCSC security.txt: {e}")
        return ""


def _generate_fallback_security_txt(canonical_url: str) -> str:
    """
    Generate a basic security.txt file as fallback when NCSC fetch fails.

    Returns:
        The fallback security.txt content.
    """
    # Set expiry to 1 year from now
    expires_date = (datetime.utcnow() + timedelta(days=365)).strftime(
        "%Y-%m-%dT%H:%M:%SZ"
    )

    return f"""# This is a fallback security.txt file.
# It was generated because the NCSC security.txt could not be fetched during the build.
# For the most current version, visit: https://www.ncsc.nl/.well-known/security.txt

Contact: https://www.ncsc.nl/contact/kwetsbaarheid-melden
Expires: {expires_date}
Preferred-Languages: nl, en
Canonical: {canonical_url}
"""
