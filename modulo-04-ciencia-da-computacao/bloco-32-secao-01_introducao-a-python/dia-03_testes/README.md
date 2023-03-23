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
