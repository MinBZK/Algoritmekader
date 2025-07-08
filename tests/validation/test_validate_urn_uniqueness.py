#!/usr/bin/env python3
"""
Unit tests voor validate_urn_uniqueness.py met pytest
"""

import pytest
from unittest.mock import patch, mock_open

# Import modules
from script.validation import validate_urn_uniqueness
from script.validation.validate_urn_uniqueness import (
    extract_urn,
    scan_directory,
    main,
)


# Fixture om globale variabelen terug te zetten voor elke test
@pytest.fixture(autouse=True)
def reset_globals():
    validate_urn_uniqueness.has_errors = False
    validate_urn_uniqueness.urn_map = {}
    yield


def test_extract_urn_valid():
    # given
    file_content = """---
id: urn:nl:ak:mtr:org-02
title: Test Document
---
Content here
"""
    with patch("builtins.open", mock_open(read_data=file_content)):
        # when
        result = extract_urn("test.md")

        # then
        assert result == "urn:nl:ak:mtr:org-02"
        assert not validate_urn_uniqueness.has_errors


def test_extract_urn_no_frontmatter():
    # given
    file_content = """No frontmatter here, just content."""
    with patch("builtins.open", mock_open(read_data=file_content)):
        # when
        result = extract_urn("test.md")

        # then
        assert result is None
        assert not validate_urn_uniqueness.has_errors


def test_extract_urn_no_id():
    # given
    file_content = """---
title: Test Document
---
Content here
"""
    with patch("builtins.open", mock_open(read_data=file_content)):
        # when
        result = extract_urn("test.md")

        # then
        assert result is None
        assert not validate_urn_uniqueness.has_errors


def test_extract_urn_invalid_yaml():
    # given
    file_content = """---
id: urn:nl:ak:mtr:org-02
title: Test Document
invalid yaml: : :
---
Content here
"""
    with (
        patch("builtins.open", mock_open(read_data=file_content)),
        patch("builtins.print") as mock_print,
    ):
        # when
        result = extract_urn("test.md")

        # then
        assert result is None
        assert validate_urn_uniqueness.has_errors
        # Controleer of de foutmelding het juiste patroon volgt
        assert mock_print.call_args is not None
        assert (
            "Error bij het parsen van frontmatter in test.md:"
            in mock_print.call_args[0][0]
        )


def test_scan_directory_files_exist():
    # given
    with (
        patch("os.path.exists") as mock_exists,
        patch("os.walk") as mock_walk,
        patch(
            "script.validation.validate_urn_uniqueness.extract_urn"
        ) as mock_extract_urn,
        patch("builtins.print"),
    ):
        mock_exists.return_value = True
        mock_walk.return_value = [
            ("/fake/path", [], ["file1.md", "file2.md", "index.md", "other.txt"])
        ]
        # Verschillende URNs, geen dubbelen
        mock_extract_urn.side_effect = ["urn:nl:ak:mtr:org-01", "urn:nl:ak:mtr:org-02"]

        # when
        scan_directory("/fake/path")

        # then
        # urn_map moet beide URNs bevatten
        assert len(validate_urn_uniqueness.urn_map) == 2
        assert (
            validate_urn_uniqueness.urn_map["urn:nl:ak:mtr:org-01"]
            == "/fake/path/file1.md"
        )
        assert (
            validate_urn_uniqueness.urn_map["urn:nl:ak:mtr:org-02"]
            == "/fake/path/file2.md"
        )
        assert not validate_urn_uniqueness.has_errors


def test_scan_directory_files_not_exist():
    # given
    with patch("os.path.exists") as mock_exists, patch("builtins.print") as mock_print:
        mock_exists.return_value = False

        # when
        scan_directory("/nonexistent/path")

        # then
        # urn_map moet leeg zijn
        assert len(validate_urn_uniqueness.urn_map) == 0
        mock_print.assert_called_once_with(
            "Waarschuwing: Directory niet gevonden: /nonexistent/path"
        )


def test_scan_directory_with_duplicates():
    # given
    with (
        patch("os.path.exists") as mock_exists,
        patch("os.walk") as mock_walk,
        patch(
            "script.validation.validate_urn_uniqueness.extract_urn"
        ) as mock_extract_urn,
        patch("builtins.print") as mock_print,
    ):
        mock_exists.return_value = True
        mock_walk.return_value = [
            ("/fake/path", [], ["file1.md", "file2.md", "file3.md"])
        ]
        # Duplicaat URN
        mock_extract_urn.side_effect = [
            "urn:nl:ak:mtr:org-01",
            "urn:nl:ak:mtr:org-02",
            "urn:nl:ak:mtr:org-01",  # Duplicaat
        ]

        # when
        scan_directory("/fake/path")

        # then
        assert validate_urn_uniqueness.has_errors
        # urn_map moet nog steeds beide URNs bevatten, maar de eerste blijft behouden
        assert len(validate_urn_uniqueness.urn_map) == 2
        assert (
            validate_urn_uniqueness.urn_map["urn:nl:ak:mtr:org-01"]
            == "/fake/path/file1.md"
        )
        # Er moet een foutmelding zijn over de duplicaat
        assert any(
            "ERROR: Dubbele URN gevonden:" in call_args[0][0]
            for call_args in mock_print.call_args_list
        )


def test_scan_directory_with_no_urns():
    # given
    with (
        patch("os.path.exists") as mock_exists,
        patch("os.walk") as mock_walk,
        patch(
            "script.validation.validate_urn_uniqueness.extract_urn"
        ) as mock_extract_urn,
        patch("builtins.print") as mock_print,
    ):
        mock_exists.return_value = True
        mock_walk.return_value = [("/fake/path", [], ["file1.md", "file2.md"])]
        # Geen URNs gevonden
        mock_extract_urn.side_effect = [None, None]

        # when
        scan_directory("/fake/path")

        # then
        # urn_map moet leeg zijn
        assert len(validate_urn_uniqueness.urn_map) == 0
        # Er moeten twee waarschuwingen zijn (één voor elk bestand)
        assert mock_print.call_count == 2
        assert all(
            "Waarschuwing: Geen URN gevonden in" in call_args[0][0]
            for call_args in mock_print.call_args_list
        )


def test_main_success():
    # given
    with (
        patch("script.validation.validate_urn_uniqueness.scan_directory") as mock_scan,
        patch("builtins.print") as mock_print,
        patch("sys.exit") as mock_exit,
    ):
        # Simuleer een gevulde urn_map zonder duplicaten
        def side_effect_scan(dir_path):
            if dir_path == validate_urn_uniqueness.MEASURES_DIR:
                validate_urn_uniqueness.urn_map["urn:nl:ak:mtr:org-01"] = (
                    "/path1/file1.md"
                )
            elif dir_path == validate_urn_uniqueness.REQUIREMENTS_DIR:
                validate_urn_uniqueness.urn_map["urn:nl:ak:ver:aia-01"] = (
                    "/path2/file2.md"
                )

        mock_scan.side_effect = side_effect_scan

        # when
        main()

        # then
        assert mock_scan.call_count == 2
        mock_exit.assert_called_once_with(0)
        # Controleer of de succesboodschap wordt getoond
        success_message = mock_print.call_args_list[-1][0][0]
        assert "Succes!" in success_message
        assert "2 URNs zijn uniek" in success_message


def test_main_with_duplicates():
    # given
    with (
        patch("script.validation.validate_urn_uniqueness.scan_directory") as mock_scan,
        patch("builtins.print") as mock_print,
        patch("sys.exit") as mock_exit,
    ):
        # Simuleer duplicaat URNs
        def side_effect_scan(dir_path):
            if dir_path == validate_urn_uniqueness.MEASURES_DIR:
                validate_urn_uniqueness.urn_map["urn:nl:ak:mtr:org-01"] = (
                    "/path1/file1.md"
                )
                validate_urn_uniqueness.has_errors = (
                    True  # Dit zou normaal in scan_directory gebeuren
                )

        mock_scan.side_effect = side_effect_scan

        # when
        main()

        # then
        assert mock_scan.call_count == 2
        mock_exit.assert_called_once_with(1)
        # Controleer of de foutmelding wordt getoond
        assert any(
            "Validatie mislukt: Dubbele URNs gevonden" in call_args[0][0]
            for call_args in mock_print.call_args_list
        )


def test_main_no_urns():
    # given
    with (
        patch("script.validation.validate_urn_uniqueness.scan_directory") as mock_scan,
        patch("builtins.print") as mock_print,
        patch("sys.exit") as mock_exit,
    ):
        # Simuleer geen URNs gevonden
        mock_scan.return_value = None  # scan_directory vult urn_map niet

        # when
        main()

        # then
        assert mock_scan.call_count == 2
        mock_exit.assert_called_once_with(0)
        # Controleer of de waarschuwing wordt getoond
        assert any(
            "Waarschuwing: Geen URNs gevonden." in call_args[0][0]
            for call_args in mock_print.call_args_list
        )
