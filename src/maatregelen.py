import json
from pathlib import Path
from mkdocs.structure.files import Files
from mkdocs.structure.pages import Page

# Initialiseer een lege lijst om alle items te verzamelen
maatregelen_list = []


def on_config(config):
    # Maak het JSON-bestand leeg aan het begin door een lege array te schrijven
    with open("docs/maatregelen.json", "w") as f:
        f.write("[")


def on_page_markdown(markdown: str, page: Page, config, files: Files):
    global maatregelen_list
    myfile = page.file

    if myfile.src_uri.endswith("index.md"):
        return

    if not myfile.src_uri.startswith("maatregelen/"):
        return

    print(myfile.src_uri)
    filepath = Path(myfile.src_uri)
    maatregel = {}
    maatregel["filename"] = filepath.stem
    maatregel["meta"] = {k: v for k, v in page.meta.items() if "git" not in k}

    # Voeg het maatregel toe aan de lijst
    maatregelen_list.append(maatregel)


def on_env(env, config, files: Files):
    # Schrijf alle items in de lijst naar het JSON-bestand in één keer
    with open("docs/maatregelen.json", "w") as f:
        f.write("[")
        for i, maatregel in enumerate(maatregelen_list):
            json.dump(maatregel, f)
            if i < len(maatregelen_list) - 1:
                f.write(",")
        f.write("]")
