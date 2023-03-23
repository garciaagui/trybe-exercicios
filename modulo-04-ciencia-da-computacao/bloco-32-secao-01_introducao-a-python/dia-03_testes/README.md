# ⚡ Atividades de Fixação & Exercícios | Bloco 32 - Dia 03 (Seção 01 - CS)

## ✅ Exercícios do dia

1. Escreva um programa que retorne uma lista com os valores numéricos de 1 a N, mas com as seguintes exceções:

- Números divisíveis por 3 deve aparecer como “Fizz” ao invés do número;
- Números divisíveis por 5 devem aparecer como “Buzz” ao invés do número;
- Números divisíveis por 3 e 5 devem aparecer como “FizzBuzz” ao invés do número.

> Exemplo: `3 -> [1, 2, "Fizz"]`.

- `exercise_1.py`

```
def identify_fizz_buzz(number: int) -> str or int:
    if number % 3 == 0 and number % 5 == 0:
        return "FizzBuzz"
    elif number % 3 == 0:
        return "Fizz"
    elif number % 5 == 0:
        return "Buzz"
    else:
        return number


def fizz_buzz(number: int) -> "list[int, str]":
    fizz_buzz_number_group = []

    for num in range(1, (int(number) + 1)):
        new_num_value = identify_fizz_buzz(num)
        fizz_buzz_number_group.append(new_num_value)

    return fizz_buzz_number_group
```

- `test_exercise_1.py`

```
import pytest
from exercise_1 import fizz_buzz


def test_fizz_buzz_should_return_list_of_numbers():
    assert fizz_buzz(2) == [1, 2]


def test_fizz_buzz_should_return_list_of_numbers_and_strings():
    assert fizz_buzz(5) == [1, 2, "Fizz", 4, "Buzz"]


def test_fizz_buzz_divisible_by_three_should_be_fizz():
    assert fizz_buzz(3)[-1] == "Fizz"


def test_fizz_buzz_divisible_by_five_should_be_buzz():
    assert fizz_buzz(5)[-1] == "Buzz"


def test_fizz_buzz_divisible_by_five_and_three_should_be_fizzbuzz():
    assert fizz_buzz(15)[-1] == "FizzBuzz"


def test_fizz_buzz_should_raise_exception_when_non_number_string_is_passed():
    with pytest.raises(ValueError, match="invalid literal for int()"):
        assert fizz_buzz("x")
```

2. Em alguns lugares é comum lembrar um número do telefone associando seus dígitos a letras. Dessa maneira, a expressão MY LOVE significa 69 5683. Claro que existem alguns problemas, uma vez que alguns números de telefone não formam uma palavra ou uma frase, e os dígitos 1 e 0 não estão associados a nenhuma letra.

Sua tarefa é ler uma expressão e encontrar o número de telefone correspondente baseado na tabela abaixo. Uma expressão é composta por letras maiúsculas (A-Z), hifens (-) e os números 1 e 0.

```
Letras  ->  Número
ABC     ->  2
DEF     ->  3
GHI     ->  4
JKL     ->  5
MNO     ->  6
PQRS    ->  7
TUV     ->  8
WXYZ    ->  9
```

> Exemplo: `1-HOME-SWEET-HOME -> 1-4663-79338-4663`.

- `exercise_2.py`

```
import re

WORDS_NUMBERS_CORRESPONDENTS_DICT = {
    "ABC": 2,
    "DEF": 3,
    "GHI": 4,
    "JKL": 5,
    "MNO": 6,
    "PQRS": 7,
    "TUV": 8,
    "WXY": 9,
}


def get_corresponding_number(character: str) -> str:
    for key, value in WORDS_NUMBERS_CORRESPONDENTS_DICT.items():
        if character in key:
            return str(value)

    return character


def verify_expression_format(expression: str):
    regex = re.compile(r"^[A-Z0-1-]+$")
    isValid = re.search(regex, expression)

    if len(expression) < 1 or len(expression) > 30:
        raise ValueError("A expressão deve ter de 1 a 30 caracteres.")

    elif not isValid:
        raise ValueError(
            "Formato inválido. A expressão deve ser composta por: "
            "Letras maiúsculas (A-Z), hifens (-) e/ou os números 1 e 0."
        )


def generate_phone_number(expression: str) -> str:
    verify_expression_format(expression)

    phone_number = ""

    for character in expression:
        converted_value = get_corresponding_number(character)
        phone_number += converted_value

    return phone_number
```

- `test_exercise_2.py`

```
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
```
