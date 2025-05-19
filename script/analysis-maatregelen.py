import csv
import os
import re
import yaml
from collections import defaultdict
import pandas as pd

# import maatregelen from ark en adr from custom csv
df = pd.read_csv("script/maatregelen-adr-ark.csv", sep=";")

# replace source with abbreviations
df["source"] = df["source"].str.replace("Onderzoekskader Auditdienst Rijk", "ADR")
df["source"] = df["source"].str.replace("Toetsingskader Algemene Rekenkamer", "ARK")

# define path for markdown files maatregelen
path = "docs/voldoen-aan-wetten-en-regels/maatregelen"
files = os.listdir(path)

# define the filednames to extract
fieldnames = ["urn", "name", "description", "sources"]

# make empty dict for maatregelen algoritmekader
maatregelen_ak = {}

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

        front_matter_data = (
            yaml.safe_load(front_matter.group(1)) if front_matter else {}
        )

        # Extract sections from Markdown content
        sections = {
            "Maatregel": re.search(
                r"## Maatregel\n(.*?)(?=\n## |\n<!--)", content, re.DOTALL
            ),
            "Toelichting": re.search(
                r"## Toelichting\s*\n(.*?)(?=\n## |\n<!--)", content, re.DOTALL
            ),
            "Bronnen": re.search(
                r"## Bronnen\n(.*?)(?=\n## |\n<!--)", content, re.DOTALL
            ),
            "Risico": re.search(
                r"## Risico\n(.*?)(?=\n## |\n<!--)", content, re.DOTALL
            ),
            "Maatregelen": re.search(r"## Maatregelen.*\n(.*?)$", content, re.DOTALL),
        }

        # Use found sections or defaults
        explanation_text = (
            sections["Toelichting"].group(1)
            if sections["Toelichting"] and not sections["Risico"]
            else sections["Risico"].group(1)
            if sections["Risico"] and not sections["Toelichting"]
            else (sections["Toelichting"].group(1) + "\n" + sections["Risico"].group(1))
            if sections["Toelichting"] and sections["Risico"]
            else ""
        )

        description_text = (
            sections["Maatregel"].group(1) if sections["Maatregel"] else ""
        )
        urn = front_matter_data.get("id", "")
        title = front_matter_data.get("title", "")
        url_title = file_path.split("/")[-1].replace(".md", "")
        vereiste = front_matter_data.get("vereiste", "")
        sources_text = sections["Bronnen"] if sections["Bronnen"] else ""

        # Prepare data for YAML output
        yaml_data = {
            "systemcard_path": ".systemcard.requirements[]",
            "schema_version": "1.1.0",
            "name": title,
            "description": description_text,
            "explanation": explanation_text,
            "urn": urn,
            "language": "nl",
            "owners": [
                {"organization": "Algoritmekader", "name": "", "email": "", "role": ""}
            ],
            "date": "",
            "url": f"https://minbzk.github.io/Algoritmekader/voldoen-aan-wetten-en-regels/maatregelen/{url_title}/index.html",
            "sources": front_matter_data.get("sources", []),
            "subject": front_matter_data.get("onderwerp", []),
            "suggested_roles": front_matter_data.get("rollen", []),
            "lifecycle": front_matter_data.get("levenscyclus", []),
            "links": [
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
                "authors": [
                    {
                        "name": "$AUTHOR.NAME",
                        "email": "$AUTHOR.EMAIL",
                        "role": "$AUTHOR.ROLE",
                    }
                ],
            },
        }

        fields = [yaml_data[key] for key in fieldnames]

        # get dict from yaml data
        maatregelen_ak[yaml_data["urn"]] = yaml_data["sources"]

# sort urns
urns = sorted(maatregelen_ak.keys())

# make empty dicts (one for matrix and one for simple mapping)
final_dict: dict[tuple[str, str], set] = defaultdict(set)
matrix_dict: dict[tuple[str, str], dict[str, int]] = defaultdict(dict)

# vul final_dict eerst met alle bronnen uit adr en ark
for _, row in df.iterrows():
    tuple = (str(row["nummer"]), row["source"])
    final_dict[tuple] = set()
    for urn in urns:
        matrix_dict[tuple][urn] = 0


# voeg maatregel uit ak toe
for urn, sources in maatregelen_ak.items():
    if sources is None or sources == []:
        continue

    for source, number in sources.items():
        if isinstance(number, list):
            for i in number:
                tuple = (str(i), str(source))
                matrix_dict[tuple][urn] = 1
                final_dict[tuple].add(urn)

            continue

        tuple = (str(number), str(source))
        matrix_dict[tuple][urn] = 1
        final_dict[tuple].add(urn)

# export matrix to csv
with open("relatie-ak-tot-toetsingskaders.csv", "w") as file:
    header = ["nummer", "bron", "maatregelen-ak", *urns]
    writer = csv.writer(file)
    writer.writerow(header)

    for name, value in matrix_dict.items():
        writer.writerow([*name, sorted(final_dict[name]), *list(value.values())])
