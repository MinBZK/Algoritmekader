import json
from html.parser import HTMLParser
from pathlib import Path

import yaml
from mkdocs.structure.files import Files
from mkdocs.structure.pages import Page


def on_config(config):
    with open("maatregelen.json", "w") as f:
        f.write("[")

def on_page_markdown(markdown: str, page: Page, config, files: Files ):
    myfile = page.file

    if myfile.src_uri.endswith('index.md'):
        return
        
    if not myfile.src_uri.startswith("maatregelen/"):
        return

    print(myfile.src_uri)
    filepath = Path(myfile.src_uri)
    maatregel = {}
    maatregel["filename"] = filepath.stem
    maatregel["meta"] = {k:v for k, v in page.meta.items() if 'git' not in k}

    with open("maatregelen.json", "a") as f:
        json.dump(maatregel, f)
        f.write(",")


def on_env(env, config, files: Files ):
    with open("maatregelen.json", "a") as f:
        f.write("]")