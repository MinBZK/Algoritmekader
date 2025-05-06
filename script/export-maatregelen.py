import csv
import os
import re
import yaml
from collections import defaultdict

import pandas as pd
import numpy as np

# define path for markdown files maatregelen
path = 'docs/voldoen-aan-wetten-en-regels/maatregelen'
files = sorted(os.listdir(path))

# define the filednames to extract
fieldnames = ['urn', 'titel', 'maatregel', 'onderwerp', 'levenscyclus', 'rollen', 'toelichting', 'risico', 'bijbehorende-vereisten', 'bronnen', 'url']

# create csv
with open("algoritmekader-maatregelen.csv", "w") as file:
    header = fieldnames
    writer = csv.writer(file)
    writer.writerow(header)

    for filename in files:
        
        file_path = os.path.join(path, filename)
        if os.path.isfile(file_path) and "index" not in filename:

            with open(file_path, encoding="utf-8") as file:
                content = file.read()

            # Remove comments enclosed in <!-- -->
            content = re.sub(r"<!--.*?-->", "", content, flags=re.DOTALL)
            # print(content)

            # Extract front-matter (YAML-like header)
            front_matter = re.search(r"---\n(.*?)\n---", content, re.DOTALL)

            front_matter_data = yaml.safe_load(front_matter.group(1)) if front_matter else {}

            # Extract sections from Markdown content
            sections = {
                "Maatregel": re.search(r"## Maatregel\s*\n(.*?)(?=\n## |\n<!--)", content, re.DOTALL),
                "Toelichting": re.search(r"## Toelichting\s*\n(.*?)(?=\n## |\n<!--)", content, re.DOTALL),
                "Bronnen": re.search(r"## Bronnen\n(.*?)(?=\n## |\n<!--)", content, re.DOTALL),
                "Risico": re.search(r"## Risico\s*\n(.*?)(?=\n##)", content, re.DOTALL),
                "Maatregelen": re.search(r"## Maatregelen.*\n(.*?)$", content, re.DOTALL),
            }

            explanation_text = sections["Toelichting"].group(1) if sections["Toelichting"] else ""
            description_text = sections["Maatregel"].group(1) if sections["Maatregel"] else ""
            risico_text = sections["Risico"].group(1) if sections["Risico"] else ""
            urn = front_matter_data.get("id", "")
            title = front_matter_data.get("title", "")
            url_title = file_path.split("/")[-1].replace(".md", "")
            vereiste = front_matter_data.get("vereiste", "")
            sources_text = sections["Bronnen"].group(1) if sections["Bronnen"] else ""

            # Prepare data for YAML output
            yaml_data = {
                "systemcard_path": ".systemcard.requirements[]",
                "schema_version": "1.1.0",
                "titel": title,
                "maatregel": description_text,
                "toelichting": explanation_text,
                "risico": risico_text,
                "urn": urn,
                "language": "nl",
                "owners": [{"organization": "Algoritmekader", "name": "", "email": "", "role": ""}],
                "date": "",
                "url": f"https://minbzk.github.io/Algoritmekader/voldoen-aan-wetten-en-regels/maatregelen/{url_title}/index.html",
                "sources-meta": front_matter_data.get("sources", []),
                "bronnen": sources_text,
                "onderwerp": front_matter_data.get("onderwerp", []),
                "rollen": front_matter_data.get("rollen", []),
                "levenscyclus": front_matter_data.get("levenscyclus", []),
                "bijbehorende-vereisten": [
                    f"urn:nl:ak:ver:{item if '-' not in item else item.split('-')[0] + '-' + item.split('-')[1]}"
                    for item in vereiste
                ]
                if vereiste
                else [],
                "template": {
                    "requirement": "$REQUIREMENT",
                    "remarks": "$REMARKS",
                    "status": "$STATUS",
                    "timestamp": "$TIMESTAMP",
                    "authors": [{"name": "$AUTHOR.NAME", "email": "$AUTHOR.EMAIL", "role": "$AUTHOR.ROLE"}],
                },
            }

            fields = [yaml_data[key] for key in fieldnames]

            # write fields to csv 
            writer.writerow(fields)  
