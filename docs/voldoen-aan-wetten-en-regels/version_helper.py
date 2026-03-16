#!/usr/bin/env python3
"""
Git-based version management for legal content.
Usage: python version_helper.py [command] [file]
Commands:
  add [file] - Add new version based on git commit
  sync [file|--all] [--force] - Sync version with git commit hash
  status - Show current version status
"""

import os
import yaml
import re
import subprocess
from datetime import datetime
from typing import Dict

VERSION_FILE = "versions.yml"


def load_versions() -> Dict:
    """Load version registry or create empty one."""
    if os.path.exists(VERSION_FILE):
        with open(VERSION_FILE, "r") as f:
            return yaml.safe_load(f) or {}
    return {
        "format_version": "1.0.0",
        "last_updated": datetime.now().strftime("%Y-%m-%d"),
        "files": {},
    }


def save_versions(versions: Dict) -> None:
    """Save version registry."""
    versions["last_updated"] = datetime.now().strftime("%Y-%m-%d")
    with open(VERSION_FILE, "w") as f:
        yaml.dump(versions, f, default_flow_style=False, allow_unicode=True)


def update_file_frontmatter(file_path: str, version: str, date: str) -> None:
    """Update version and date in file frontmatter."""
    with open(file_path, "r") as f:
        content = f.read()

    if content.startswith("---"):
        end_marker = content.find("---", 3)
        if end_marker != -1:
            frontmatter = content[3:end_marker]
            after_frontmatter = content[end_marker:]

            # Update or add version
            if "version:" in frontmatter:
                frontmatter = re.sub(
                    r'version:\s*["\']?[^"\'\\n]+["\']?',
                    f'version: "{version}"',
                    frontmatter,
                )
            else:
                frontmatter += f'version: "{version}"\n'

            # Update or add version_date
            if "version_date:" in frontmatter:
                frontmatter = re.sub(
                    r'version_date:\s*["\']?[^"\'\\n]+["\']?',
                    f'version_date: "{date}"',
                    frontmatter,
                )
            else:
                frontmatter += f'version_date: "{date}"\n'

            with open(file_path, "w") as f:
                f.write("---" + frontmatter + after_frontmatter)


def get_git_info(file_path: str) -> Dict:
    """Get git commit info for a file."""
    try:
        # Get last commit hash (8 chars)
        hash_cmd = ["git", "log", "-1", "--format=%H", file_path]
        hash_result = subprocess.run(
            hash_cmd, capture_output=True, text=True, check=True
        )
        commit_hash = hash_result.stdout.strip()[:8]

        # Get last commit date (YYYY-MM-DD)
        date_cmd = ["git", "log", "-1", "--format=%ci", file_path]
        date_result = subprocess.run(
            date_cmd, capture_output=True, text=True, check=True
        )
        commit_date = date_result.stdout.strip()[:10]

        # Get commit message
        msg_cmd = ["git", "log", "-1", "--format=%s", file_path]
        msg_result = subprocess.run(msg_cmd, capture_output=True, text=True, check=True)
        commit_message = msg_result.stdout.strip()

        return {"hash": commit_hash, "date": commit_date, "message": commit_message}
    except (subprocess.CalledProcessError, FileNotFoundError):
        # Fallback if not in git repo
        fallback_date = datetime.now().strftime("%Y-%m-%d")
        return {
            "hash": fallback_date.replace("-", ""),
            "date": fallback_date,
            "message": "No git info available",
        }


def add_version(file_path: str) -> None:
    """Add new version for a file."""
    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        return

    git_info = get_git_info(file_path)
    versions = load_versions()

    # Get or create file info
    file_info = versions.get("files", {}).get(file_path, {})
    current_version = file_info.get("current_version", "")

    # Check if already up to date
    if current_version == git_info["hash"]:
        print(
            f"File {file_path} already up to date: {git_info['hash']} ({git_info['date']})"
        )
        return

    # Update file info
    versions.setdefault("files", {})[file_path] = {
        "current_version": git_info["hash"],
        "version_type": "git",
        "created_date": file_info.get("created_date", git_info["date"]),
        "versions": [
            {
                "version": git_info["hash"],
                "date": git_info["date"],
                "changes": git_info["message"],
                "type": "git",
            }
        ]
        + file_info.get("versions", []),
    }

    save_versions(versions)
    update_file_frontmatter(file_path, git_info["hash"], git_info["date"])

    if current_version:
        print(
            f"Updated {file_path}: {current_version} → {git_info['hash']} ({git_info['date']})"
        )
    else:
        print(f"Added {file_path}: {git_info['hash']} ({git_info['date']})")


def sync_versions(file_pattern: str = None, force: bool = False) -> None:
    """Sync versions with git."""
    versions = load_versions()

    if file_pattern == "--all":
        # Sync all tracked files
        for file_path in versions.get("files", {}):
            if os.path.exists(file_path):
                sync_single_file(file_path, versions, force)
        save_versions(versions)
    elif file_pattern:
        # Sync single file
        sync_single_file(file_pattern, versions, force)
        save_versions(versions)
    else:
        print("Usage: sync [file|--all] [--force]")


def sync_single_file(file_path: str, versions: Dict, force: bool) -> None:
    """Sync a single file."""
    git_info = get_git_info(file_path)
    file_info = versions.get("files", {}).get(file_path, {})
    current_version = file_info.get("current_version", "")
    current_date = (
        file_info.get("versions", [{}])[0].get("date", "")
        if file_info.get("versions")
        else ""
    )

    needs_update = (
        current_version != git_info["hash"] or current_date != git_info["date"] or force
    )

    if needs_update:
        versions.setdefault("files", {})[file_path] = {
            "current_version": git_info["hash"],
            "version_type": "git",
            "created_date": file_info.get("created_date", git_info["date"]),
            "versions": [
                {
                    "version": git_info["hash"],
                    "date": git_info["date"],
                    "changes": git_info["message"],
                    "type": "git",
                }
            ]
            + [
                v
                for v in file_info.get("versions", [])
                if v.get("version") != git_info["hash"]
            ],
        }

        update_file_frontmatter(file_path, git_info["hash"], git_info["date"])
        print(
            f"Synced {file_path}: {current_version} → {git_info['hash']} ({git_info['date']})"
        )
    else:
        print(
            f"File {file_path} already up to date: {git_info['hash']} ({git_info['date']})"
        )


def show_status() -> None:
    """Show version status of all tracked files."""
    versions = load_versions()
    files = versions.get("files", {})

    if not files:
        print("No files tracked yet.")
        return

    print(f"Version registry: {len(files)} files tracked")
    for file_path, info in files.items():
        current = info.get("current_version", "unknown")
        version_type = info.get("version_type", "semantic")
        print(f"  {file_path}: {current} ({version_type})")


def main():
    import sys

    if len(sys.argv) < 2:
        print(__doc__)
        return

    command = sys.argv[1]

    if command == "add" and len(sys.argv) >= 3:
        add_version(sys.argv[2])

    elif command == "sync":
        force = "--force" in sys.argv
        file_arg = None
        for arg in sys.argv[2:]:
            if not arg.startswith("--"):
                file_arg = arg
                break
        sync_versions(file_arg, force)

    elif command == "status":
        show_status()

    else:
        print(__doc__)


if __name__ == "__main__":
    main()
