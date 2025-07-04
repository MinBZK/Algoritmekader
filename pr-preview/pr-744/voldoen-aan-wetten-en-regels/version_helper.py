#!/usr/bin/env python3
"""
Version management helper for legal content.
Usage: python version-helper.py [command] [file]
Commands:
  bump [file] [patch|minor|major] - Bump version of a file
  status - Show current version status
  init [file] - Initialize versioning for a file
"""

import os
import yaml
import re
from datetime import datetime
from typing import Dict, List, Optional

VERSION_FILE = "versions.yml"

def load_versions() -> Dict:
    """Load version registry or create empty one."""
    if os.path.exists(VERSION_FILE):
        with open(VERSION_FILE, 'r') as f:
            return yaml.safe_load(f) or {}
    return {
        'format_version': '1.0.0',
        'last_updated': datetime.now().strftime('%Y-%m-%d'),
        'files': {}
    }

def save_versions(versions: Dict) -> None:
    """Save version registry."""
    versions['last_updated'] = datetime.now().strftime('%Y-%m-%d')
    with open(VERSION_FILE, 'w') as f:
        yaml.dump(versions, f, default_flow_style=False, allow_unicode=True)

def get_file_version(file_path: str) -> Optional[str]:
    """Extract version from file frontmatter."""
    try:
        with open(file_path, 'r') as f:
            content = f.read()
        
        # Extract frontmatter
        if content.startswith('---'):
            end_marker = content.find('---', 3)
            if end_marker != -1:
                frontmatter = content[3:end_marker]
                match = re.search(r'version:\s*["\']?([^"\'\\n]+)["\']?', frontmatter)
                if match:
                    return match.group(1)
    except FileNotFoundError:
        pass
    return None

def update_file_version(file_path: str, new_version: str) -> None:
    """Update version in file frontmatter."""
    with open(file_path, 'r') as f:
        content = f.read()
    
    date_str = datetime.now().strftime('%Y-%m-%d')
    
    if content.startswith('---'):
        end_marker = content.find('---', 3)
        if end_marker != -1:
            frontmatter = content[3:end_marker]
            after_frontmatter = content[end_marker:]
            
            # Update or add version
            if 'version:' in frontmatter:
                frontmatter = re.sub(r'version:\s*["\']?[^"\'\\n]+["\']?', f'version: "{new_version}"', frontmatter)
            else:
                frontmatter += f'version: "{new_version}"\n'
            
            # Update or add version_date
            if 'version_date:' in frontmatter:
                frontmatter = re.sub(r'version_date:\s*["\']?[^"\'\\n]+["\']?', f'version_date: "{date_str}"', frontmatter)
            else:
                frontmatter += f'version_date: "{date_str}"\n'
            
            new_content = '---' + frontmatter + after_frontmatter
            
            with open(file_path, 'w') as f:
                f.write(new_content)

def bump_version(current: str, bump_type: str) -> str:
    """Bump version number."""
    parts = current.split('.')
    if len(parts) != 3:
        return "1.0.0"
    
    major, minor, patch = map(int, parts)
    
    if bump_type == 'major':
        return f"{major + 1}.0.0"
    elif bump_type == 'minor':
        return f"{major}.{minor + 1}.0"
    elif bump_type == 'patch':
        return f"{major}.{minor}.{patch + 1}"
    else:
        return current

def main():
    import sys
    
    if len(sys.argv) < 2:
        print(__doc__)
        return
    
    command = sys.argv[1]
    
    if command == 'status':
        versions = load_versions()
        print(f"Version registry: {len(versions.get('files', {}))} files tracked")
        for file_path, info in versions.get('files', {}).items():
            current = info.get('current_version', 'unknown')
            print(f"  {file_path}: v{current}")
    
    elif command == 'init' and len(sys.argv) >= 3:
        file_path = sys.argv[2]
        if not os.path.exists(file_path):
            print(f"File not found: {file_path}")
            return
        
        versions = load_versions()
        if file_path not in versions.get('files', {}):
            versions.setdefault('files', {})[file_path] = {
                'current_version': '1.0.0',
                'created_date': datetime.now().strftime('%Y-%m-%d'),
                'versions': [{
                    'version': '1.0.0',
                    'date': datetime.now().strftime('%Y-%m-%d'),
                    'changes': 'Initial version'
                }]
            }
            save_versions(versions)
            update_file_version(file_path, '1.0.0')
            print(f"Initialized versioning for {file_path}")
        else:
            print(f"File already tracked: {file_path}")
    
    elif command == 'bump' and len(sys.argv) >= 4:
        file_path = sys.argv[2]
        bump_type = sys.argv[3]
        
        if not os.path.exists(file_path):
            print(f"File not found: {file_path}")
            return
        
        versions = load_versions()
        file_info = versions.get('files', {}).get(file_path, {})
        current_version = file_info.get('current_version', '1.0.0')
        
        new_version = bump_version(current_version, bump_type)
        
        # Update registry
        versions.setdefault('files', {})[file_path] = file_info
        versions['files'][file_path]['current_version'] = new_version
        versions['files'][file_path].setdefault('versions', []).insert(0, {
            'version': new_version,
            'date': datetime.now().strftime('%Y-%m-%d'),
            'changes': input(f"Change description for v{new_version}: ").strip() or f"Version bump to {new_version}"
        })
        
        save_versions(versions)
        update_file_version(file_path, new_version)
        print(f"Bumped {file_path} from v{current_version} to v{new_version}")
    
    else:
        print(__doc__)

if __name__ == '__main__':
    main()