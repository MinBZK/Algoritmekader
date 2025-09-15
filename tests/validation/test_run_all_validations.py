#!/usr/bin/env python3
"""
Tests voor run_all_validations.py met pytest
"""

from unittest.mock import patch, MagicMock

# Import modules
from script.validation import run_all_validations
from script.validation.run_all_validations import run_script, main


def test_run_script_success():
    # given
    script_path = "test_script.py"
    mock_process = MagicMock()
    mock_process.returncode = 0

    # when
    with (
        patch("subprocess.run", return_value=mock_process) as mock_run,
        patch("builtins.print") as mock_print,
    ):
        result = run_script(script_path)

    # then
    assert result is True
    mock_run.assert_called_once_with(["python", script_path], check=False)
    mock_print.assert_any_call("\n\n==== test_script.py uitvoeren ====\n")


def test_run_script_failure():
    # given
    script_path = "test_script.py"
    mock_process = MagicMock()
    mock_process.returncode = 1

    # when
    with (
        patch("subprocess.run", return_value=mock_process) as mock_run,
        patch("builtins.print") as mock_print,
    ):
        result = run_script(script_path)

    # then
    assert result is False
    mock_run.assert_called_once_with(["python", script_path], check=False)
    mock_print.assert_any_call("\n\n==== test_script.py uitvoeren ====\n")


def test_run_script_exception():
    # given
    script_path = "test_script.py"

    # when
    with (
        patch("subprocess.run", side_effect=Exception("Mock exception")) as mock_run,
        patch("builtins.print") as mock_print,
    ):
        result = run_script(script_path)

    # then
    assert result is False
    mock_run.assert_called_once_with(["python", script_path], check=False)
    mock_print.assert_any_call("\n\n==== test_script.py uitvoeren ====\n")
    mock_print.assert_any_call(
        "Fout bij het starten van script test_script.py: Mock exception"
    )


def test_main_all_scripts_succeed():
    # given
    with (
        # Zorg dat het juiste pad wordt gebruikt voor de patch
        patch(
            "script.validation.run_all_validations.os.path.exists", return_value=True
        ),
        patch(
            "script.validation.run_all_validations.run_script", return_value=True
        ) as mock_run_script,
        patch("builtins.print") as mock_print,
        patch("sys.exit") as mock_exit,
    ):
        # when
        main()

        # then
        assert mock_run_script.call_count == len(run_all_validations.VALIDATION_SCRIPTS)
        assert all(
            "succesvol uitgevoerd" in call_args[0][0]
            for call_args in mock_print.call_args_list
            if any(
                script in call_args[0][0]
                for script in run_all_validations.VALIDATION_SCRIPTS
            )
        )
        mock_exit.assert_called_once_with(0)


def test_main_some_scripts_fail():
    # given
    def mock_run_script_side_effect(script_path):
        # Laat het tweede script falen
        return "validate_all_labels.py" not in script_path

    with (
        # Zorg dat het juiste pad wordt gebruikt voor de patch
        patch(
            "script.validation.run_all_validations.os.path.exists", return_value=True
        ),
        patch(
            "script.validation.run_all_validations.run_script",
            side_effect=mock_run_script_side_effect,
        ) as mock_run_script,
        patch("builtins.print") as mock_print,
        patch("sys.exit") as mock_exit,
    ):
        # when
        main()

        # then
        assert mock_run_script.call_count == len(run_all_validations.VALIDATION_SCRIPTS)
        # Controleer of er zowel successen als fouten worden gerapporteerd
        assert any(
            "succesvol uitgevoerd" in call_args[0][0]
            for call_args in mock_print.call_args_list
        )
        assert any(
            "mislukt" in call_args[0][0] for call_args in mock_print.call_args_list
        )
        mock_exit.assert_called_once_with(1)


def test_main_script_not_found():
    # given
    with (
        # Zorg dat het juiste pad wordt gebruikt voor de patch
        patch(
            "script.validation.run_all_validations.os.path.exists", return_value=False
        ),
        patch("script.validation.run_all_validations.run_script") as mock_run_script,
        patch("builtins.print") as mock_print,
        patch("sys.exit") as mock_exit,
    ):
        # when
        main()

        # then
        mock_run_script.assert_not_called()
        assert any(
            "Script niet gevonden" in call_args[0][0]
            for call_args in mock_print.call_args_list
        )
        mock_exit.assert_called_once_with(1)
