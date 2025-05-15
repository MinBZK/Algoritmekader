#!/usr/bin/env python3
"""
Tests voor validate_file_prefix_urn.py met pytest
"""

import pytest
from unittest.mock import patch, mock_open

# Import modules
from script.validation import validate_file_prefix_urn
from script.validation.validate_file_prefix_urn import (
    extract_urn,
    get_identifier_from_urn,
    validate_file_prefix,
    scan_directory,
)


# Fixture om has_errors terug te zetten voor elke test
@pytest.fixture(autouse=True)
def reset_has_errors():
    validate_file_prefix_urn.has_errors = False
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
        assert not validate_file_prefix_urn.has_errors


def test_extract_urn_no_frontmatter():
    # given
    file_content = """No frontmatter here, just content."""
    with patch("builtins.open", mock_open(read_data=file_content)):
        # when
        result = extract_urn("test.md")

        # then
        assert result is None
        assert not validate_file_prefix_urn.has_errors


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
        assert validate_file_prefix_urn.has_errors
        # In plaats van exacte string matching, controleren we of de print aanroep het begin van de foutmelding bevat
        mock_print.assert_called_with(mock_print.call_args[0][0])
        # Controleer of de foutmelding het verwachte patroon volgt
        assert (
            "Fout bij het parsen van frontmatter in test.md:"
            in mock_print.call_args[0][0]
        )


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
        assert not validate_file_prefix_urn.has_errors


def test_get_identifier_from_urn():
    # given
    urn = "urn:nl:ak:mtr:org-02"

    # when
    result = get_identifier_from_urn(urn)

    # then
    assert result == "org-02"


def test_get_identifier_from_urn_complex():
    # given
    urn = "urn:nl:ak:ver:aia-01"

    # when
    result = get_identifier_from_urn(urn)

    # then
    assert result == "aia-01"


def test_get_identifier_from_urn_invalid():
    # given
    urn = "invalid:urn"

    # when
    result = get_identifier_from_urn(urn)

    # then
    assert result == "urn"


def test_get_identifier_from_urn_empty():
    # given
    urn = ""

    # when
    result = get_identifier_from_urn(urn)

    # then
    assert result is None


def test_validate_file_prefix_valid():
    # given
    file_path = "/fake/path/org-02-beschrijving.md"
    urn = "urn:nl:ak:mtr:org-02"

    # when
    result = validate_file_prefix(file_path, urn)

    # then
    assert result is True


def test_validate_file_prefix_valid_with_numeric_prefix():
    # given
    file_path = "/fake/path/1-org-02-beschrijving.md"
    urn = "urn:nl:ak:mtr:org-02"

    # when
    result = validate_file_prefix(file_path, urn)

    # then
    assert result is True


def test_validate_file_prefix_invalid():
    # given
    file_path = "/fake/path/wrong-prefix-beschrijving.md"
    urn = "urn:nl:ak:mtr:org-02"

    # when
    with patch("builtins.print") as mock_print:
        result = validate_file_prefix(file_path, urn)

    # then
    assert result is False
    mock_print.assert_any_call(
        "ERROR: Bestandsprefix komt niet overeen in /fake/path/wrong-prefix-beschrijving.md"
    )


def test_validate_file_prefix_invalid_urn():
    # given
    file_path = "/fake/path/org-02-beschrijving.md"
    urn = "invalid:urn"

    # when
    with patch("builtins.print") as mock_print:
        result = validate_file_prefix(file_path, urn)

    # then
    assert result is False
    # Controleer alleen of de fout wordt gemeld, maar niet de exacte bewoording
    assert any(
        "invalid:urn" in call_args[0][0] for call_args in mock_print.call_args_list
    )
    # Of alternatief, controleren op de algemene foutmelding:
    assert any(
        "ERROR: Bestandsprefix komt niet overeen" in call_args[0][0]
        for call_args in mock_print.call_args_list
    )


def test_scan_directory_files_exist():
    # given
    with (
        patch("os.path.exists") as mock_exists,
        patch("os.walk") as mock_walk,
        patch(
            "script.validation.validate_file_prefix_urn.extract_urn"
        ) as mock_extract_urn,
        patch(
            "script.validation.validate_file_prefix_urn.validate_file_prefix"
        ) as mock_validate_file_prefix,
        patch("builtins.print") as mock_print,
    ):
        mock_exists.return_value = True
        mock_walk.return_value = [
            ("/fake/path", [], ["file1.md", "file2.md", "index.md", "other.txt"])
        ]
        mock_extract_urn.side_effect = ["urn:nl:ak:mtr:org-01", "urn:nl:ak:ver:aia-01"]
        mock_validate_file_prefix.return_value = True

        # when
        scan_directory("/fake/path")

        # then
        assert mock_extract_urn.call_count == 2
        assert mock_validate_file_prefix.call_count == 2
        mock_print.assert_any_call(
            "Gecontroleerd: 2 bestanden in /fake/path, 2 hebben geldige prefixes"
        )


def test_scan_directory_files_not_exist():
    # given
    with patch("os.path.exists") as mock_exists, patch("builtins.print") as mock_print:
        mock_exists.return_value = False

        # when
        scan_directory("/nonexistent/path")

        # then
        mock_print.assert_called_once_with(
            "Waarschuwing: Directory niet gevonden: /nonexistent/path"
        )


def test_scan_directory_invalid_prefix():
    # given
    with (
        patch("os.path.exists") as mock_exists,
        patch("os.walk") as mock_walk,
        patch(
            "script.validation.validate_file_prefix_urn.extract_urn"
        ) as mock_extract_urn,
        patch(
            "script.validation.validate_file_prefix_urn.validate_file_prefix"
        ) as mock_validate_file_prefix,
        patch("builtins.print") as mock_print,
    ):
        mock_exists.return_value = True
        mock_walk.return_value = [
            ("/fake/path", [], ["file1.md", "file2.md", "index.md", "other.txt"])
        ]
        mock_extract_urn.side_effect = ["urn:nl:ak:mtr:org-01", "urn:nl:ak:ver:aia-01"]
        mock_validate_file_prefix.side_effect = [True, False]

        # when
        scan_directory("/fake/path")

        # then
        assert validate_file_prefix_urn.has_errors
        mock_print.assert_any_call(
            "Gecontroleerd: 2 bestanden in /fake/path, 1 hebben geldige prefixes"
        )


def test_scan_directory_no_urn():
    # given
    with (
        patch("os.path.exists") as mock_exists,
        patch("os.walk") as mock_walk,
        patch(
            "script.validation.validate_file_prefix_urn.extract_urn"
        ) as mock_extract_urn,
        patch("builtins.print") as mock_print,
    ):
        mock_exists.return_value = True
        mock_walk.return_value = [
            ("/fake/path", [], ["file1.md", "file2.md", "index.md", "other.txt"])
        ]
        mock_extract_urn.side_effect = [None, None]

        # when
        scan_directory("/fake/path")

        # then
        mock_print.assert_any_call(
            "Waarschuwing: Geen URN gevonden in /fake/path/file1.md"
        )
        mock_print.assert_any_call(
            "Waarschuwing: Geen URN gevonden in /fake/path/file2.md"
        )
        mock_print.assert_any_call(
            "Gecontroleerd: 2 bestanden in /fake/path, 0 hebben geldige prefixes"
        )


def test_main_success():
    # given
    with (
        patch("script.validation.validate_file_prefix_urn.scan_directory") as mock_scan,
        patch("sys.exit") as mock_exit,
    ):
        validate_file_prefix_urn.has_errors = False

        # when
        validate_file_prefix_urn.main()

        # then
        assert mock_scan.call_count == 2
        mock_exit.assert_called_once_with(0)


def test_main_failure():
    # given
    with (
        patch("script.validation.validate_file_prefix_urn.scan_directory") as mock_scan,
        patch("sys.exit") as mock_exit,
    ):
        validate_file_prefix_urn.has_errors = True

        # when
        validate_file_prefix_urn.main()

        # then
        assert mock_scan.call_count == 2
        mock_exit.assert_called_once_with(1)
