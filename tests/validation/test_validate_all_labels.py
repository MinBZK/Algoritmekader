#!/usr/bin/env python3
"""
Tests voor validate_all_labels.py
"""

from unittest.mock import patch, mock_open

# Import modules
from script.validation import validate_all_labels
from script.validation.validate_all_labels import (
    get_valid_values_from_directory,
    check_labels,
    check_label_list,
    scan_directory,
)


def test_get_valid_values_from_directory():
    # given
    with patch("os.path.exists") as mock_exists, patch("os.walk") as mock_walk:
        mock_exists.return_value = True
        mock_walk.return_value = [
            ("/fake/path", [], ["file1.md", "file2.md", "index.md", "other.txt"])
        ]

        # when
        result = get_valid_values_from_directory("/fake/path")

        # then
        assert result == ["file1", "file2"]

    # given
    with patch("os.path.exists") as mock_exists:
        mock_exists.return_value = False

        # when
        result = get_valid_values_from_directory("/nonexistent/path")

        # then
        assert result == []


def test_check_labels_valid():
    # given
    file_content = """---
levenscyclus: ontwerp
onderwerp: fairness
rollen: data-scientist
---
Content here
"""
    with patch("builtins.open", mock_open(read_data=file_content)):
        # setup
        validate_all_labels.has_errors = False
        valid_lifecycles = ["ontwerp", "ontwikkeling"]
        valid_subjects = ["fairness", "robustness"]
        valid_roles = ["data-scientist", "product-owner"]

        # when
        check_labels(
            "test.md",
            is_requirement=False,
            valid_lifecycles=valid_lifecycles,
            valid_subjects=valid_subjects,
            valid_roles=valid_roles,
        )

        # then
        assert not validate_all_labels.has_errors


def test_check_labels_invalid():
    # given
    file_content = """---
levenscyclus: invalid-lifecycle
onderwerp: fairness
rollen: data-scientist
---
Content here
"""
    with (
        patch("builtins.open", mock_open(read_data=file_content)),
        patch("builtins.print") as mock_print,
    ):
        # setup
        validate_all_labels.has_errors = False
        valid_lifecycles = ["ontwerp", "ontwikkeling"]
        valid_subjects = ["fairness", "robustness"]
        valid_roles = ["data-scientist", "product-owner"]

        # when
        check_labels(
            "test.md",
            is_requirement=False,
            valid_lifecycles=valid_lifecycles,
            valid_subjects=valid_subjects,
            valid_roles=valid_roles,
        )

        # then
        assert validate_all_labels.has_errors
        mock_print.assert_any_call(
            'ERROR: Ongeldige levenscyclus-waarde "invalid-lifecycle" in test.md'
        )


def test_check_ai_act_labels_valid():
    # given
    file_content = """---
levenscyclus: ontwerp
onderwerp: fairness
rollen: data-scientist
soort-toepassing: ai-systeem
risicogroep: hoog-risico-ai-systeem
transparantieverplichting: transparantieverplichting
systeemrisico: systeemrisico
open-source: open-source
rol-ai-act: aanbieder
---
Content here
"""
    with patch("builtins.open", mock_open(read_data=file_content)):
        # setup
        validate_all_labels.has_errors = False
        valid_lifecycles = ["ontwerp"]
        valid_subjects = ["fairness"]
        valid_roles = ["data-scientist"]

        # when
        check_labels(
            "test.md",
            is_requirement=True,
            valid_lifecycles=valid_lifecycles,
            valid_subjects=valid_subjects,
            valid_roles=valid_roles,
        )

        # then
        assert not validate_all_labels.has_errors


def test_check_ai_act_labels_invalid():
    # given
    file_content = """---
levenscyclus: ontwerp
onderwerp: fairness
rollen: data-scientist
soort-toepassing: invalid-soort
---
Content here
"""
    with (
        patch("builtins.open", mock_open(read_data=file_content)),
        patch("builtins.print") as mock_print,
    ):
        # setup
        validate_all_labels.has_errors = False
        valid_lifecycles = ["ontwerp"]
        valid_subjects = ["fairness"]
        valid_roles = ["data-scientist"]

        # when
        check_labels(
            "test.md",
            is_requirement=True,
            valid_lifecycles=valid_lifecycles,
            valid_subjects=valid_subjects,
            valid_roles=valid_roles,
        )

        # then
        assert validate_all_labels.has_errors
        mock_print.assert_any_call(
            'ERROR: Ongeldige soort-toepassing-waarde "invalid-soort" in test.md'
        )


def test_check_label_list_valid():
    # given
    validate_all_labels.has_errors = False
    frontmatter = {"levenscyclus": ["ontwerp", "ontwikkeling"]}
    valid_values = ["ontwerp", "ontwikkeling", "ingebruikname"]

    # when
    check_label_list(frontmatter, "levenscyclus", valid_values, "test.md")

    # then
    assert not validate_all_labels.has_errors


def test_check_label_list_invalid():
    # given
    validate_all_labels.has_errors = False
    frontmatter = {"levenscyclus": ["ontwerp", "invalid-value"]}
    valid_values = ["ontwerp", "ontwikkeling", "ingebruikname"]

    # when
    check_label_list(frontmatter, "levenscyclus", valid_values, "test.md")

    # then
    assert validate_all_labels.has_errors


def test_scan_directory_files_exist():
    # given
    with (
        patch(
            "script.validation.validate_all_labels.check_labels"
        ) as mock_check_labels,
        patch("os.path.exists") as mock_exists,
        patch("os.walk") as mock_walk,
    ):
        mock_exists.return_value = True
        mock_walk.return_value = [
            ("/fake/path", [], ["file1.md", "file2.md", "index.md", "other.txt"])
        ]

        # when
        scan_directory(
            "/fake/path",
            is_requirement=False,
            valid_lifecycles=["test"],
            valid_subjects=["test"],
            valid_roles=["test"],
        )

        # then
        assert mock_check_labels.call_count == 2


def test_scan_directory_files_not_exist():
    # given
    with (
        patch(
            "script.validation.validate_all_labels.check_labels"
        ) as mock_check_labels,
        patch("os.path.exists") as mock_exists,
    ):
        mock_exists.return_value = False

        # when
        scan_directory("/nonexistent/path")

        # then
        mock_check_labels.assert_not_called()


def test_main_success():
    # given
    with (
        patch("script.validation.validate_all_labels.scan_directory") as mock_scan,
        patch(
            "script.validation.validate_all_labels.get_valid_values_from_directory"
        ) as mock_get_values,
        patch("sys.exit") as mock_exit,
    ):
        mock_get_values.side_effect = [
            ["rol1", "rol2"],
            ["fase1", "fase2"],
            ["onderwerp1", "onderwerp2"],
        ]
        validate_all_labels.has_errors = False

        # when
        validate_all_labels.main()

        # then
        assert mock_scan.call_count == 2
        mock_exit.assert_called_once_with(0)


def test_main_failure():
    # given
    with (
        patch("script.validation.validate_all_labels.scan_directory") as mock_scan,
        patch(
            "script.validation.validate_all_labels.get_valid_values_from_directory"
        ) as mock_get_values,
        patch("sys.exit") as mock_exit,
    ):
        mock_get_values.side_effect = [
            ["rol1", "rol2"],
            ["fase1", "fase2"],
            ["onderwerp1", "onderwerp2"],
        ]
        validate_all_labels.has_errors = True

        # when
        validate_all_labels.main()

        # then
        assert mock_scan.call_count == 2
        mock_exit.assert_called_once_with(1)
