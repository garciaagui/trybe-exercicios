import pytest

from exercise_2 import generate_phone_number


def test_generate_phone_number_should_return_a_phone_number_correctly():
    assert generate_phone_number("1-HOME-SWEET-HOME") == "1-4663-79338-4663"


def test_should_raise_exception_for_0_char_expression():
    with pytest.raises(
        ValueError, match="A expressão deve ter de 1 a 30 caracteres."
    ):
        assert generate_phone_number("")


def test_should_raise_exception_for_more_than_30_char_expression():
    with pytest.raises(
        ValueError, match="A expressão deve ter de 1 a 30 caracteres."
    ):
        assert generate_phone_number("1-HOME-SWEET-HOME1-HOME-SWEET-0")


def test_should_raise_exception_for_invalid_format():
    with pytest.raises(
        ValueError,
        match="Formato inválido. A expressão deve ser composta por:",
    ):
        assert generate_phone_number("invalid_format")
