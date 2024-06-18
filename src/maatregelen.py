import json
from html.parser import HTMLParser
from pathlib import Path

import yaml
from mkdocs.structure.files import File, Files
from mkdocs.structure.pages import Page


def on_files(files, config, **kwargs):
    #print(f"config: {config}")
    print(f"files: {files}")

    maatregelen=[]
    for file in files:
        myfile: File = file

        if myfile.src_uri.endswith('index.md'):
            continue
            
        if not myfile.src_uri.endswith(".md"):
            continue
    
        
        if myfile.src_uri.startswith("maatregelen/"):
            mypath = Path(myfile.src_uri)

            # maybe we need to html encode the names
            maatregelen.append(mypath.name)


def on_page_markdown(markdown: str, page: Page, config, files: Files ):
    myfile = page.file

    if myfile.src_uri.endswith('index.md'):
        return
        
    if not myfile.src_uri.endswith(".md"):
        return

    
    if myfile.src_uri.startswith("maatregelen/"):
        print(myfile.src_uri)
        print(page.meta)