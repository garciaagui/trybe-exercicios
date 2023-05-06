import pytest

from exercise_3 import validate_email


def test_valid_email_should_return_true():
    assert validate_email("valid@mail.com") is True


def test_invalid_initial_char_username_should_raise_an_exception():
    with pytest.raises(
        ValueError, match="O nome de usuário deve iniciar com uma letra."
    ):
        assert validate_email("1nvalid@mail.com")


def test_invalid_chars_username_should_raise_an_exception():
    with pytest.raises(
        ValueError,
        match="O nome de usuário deve conter:",
    ):
        assert validate_email("inv4l1d@mail.com")


def test_invalid_chars_website_should_raise_an_exception():
    with pytest.raises(
        ValueError,
        match="O nome do website deve conter somente letras e dígitos.",
    ):
        assert validate_email("valid@1nv4lid.com")


def test_0_char_extension_should_raise_an_exception():
    with pytest.raises(
        ValueError,
        match="O tamanho da extensão é de um a três caracteres.",
    ):
        assert validate_email("valid@mail.")


def test_more_than_3_char_extension_should_raise_an_exception():
    with pytest.raises(
        ValueError,
        match="O tamanho da extensão é de um a três caracteres.",
    ):
        assert validate_email("valid@mail.comm")


def test_invalid_chars_extension_should_raise_an_exception():
    with pytest.raises(
        ValueError,
        match="O nome da extensão deve conter somente letras.",
    ):
        assert validate_email("valid@mail.1-")
