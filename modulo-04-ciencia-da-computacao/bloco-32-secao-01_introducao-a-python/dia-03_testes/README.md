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

2. Em alguns lugares é comum lembrar um número do telefone associando seus dígitos a letras. Dessa maneira, a expressão MY LOVE significa 69 5683. Sua tarefa é ler uma expressão e encontrar o número de telefone correspondente baseado na tabela abaixo. Uma expressão é composta por letras maiúsculas (A-Z), hifens (-) e os números 1 e 0. Relação de letras e números abaixo.

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

3. Faça uma função que valide um e-mail, lançando uma exceção quando o valor for inválido. Endereços de e-mail válidos devem seguir as seguintes regras:

- O nome de usuário deve conter somente letras, dígitos, traços e underscores (\_);
- O nome de usuário deve iniciar com uma letra;
- O nome do website deve conter somente letras e dígitos;
- O tamanho máximo da extensão é de 3 caracteres.

> Formato correto: `nomeusuario@nomewebsite.extensao`

- `exercise_3.py`

```
def validate_user(username: str):
    if not username[0].isalpha():
        raise ValueError(
            "Formato inválido! \n"
            "O nome de usuário deve iniciar com uma letra."
        )

    for character in username:
        if character.isnumeric():
            raise ValueError(
                "Formato inválido! O nome de usuário deve conter: \n"
                "Letras, dígitos, traços e underscores (_)."
            )


def validate_website(website: str):
    for character in website:
        if character.isnumeric():
            raise ValueError(
                "Formato inválido! \n"
                "O nome do website deve conter somente letras e dígitos."
            )


def validate_extension(extension: str):
    if len(extension) < 1 or len(extension) > 3:
        raise ValueError(
            "Formato inválido! \n"
            "O tamanho da extensão é de um a três caracteres."
        )

    for character in extension:
        if not character.isalpha():
            raise ValueError(
                "Formato inválido! \n"
                "O nome da extensão deve conter somente letras."
            )


def validate_email(email: str) -> str:
    splitted_email = email.replace(".", "@").split("@")
    validate_user(splitted_email[0])
    validate_website(splitted_email[1])
    validate_extension(splitted_email[2])

    return True
```

- `test_exercise_3.py`

```
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

```

4. Baseado no exercício anterior, escreva uma função que, dado uma lista de emails, deve retornar somente os emails válidos. Caso uma exceção ocorra, apenas a escreva na tela.

> Exemplo: `["valid@mail.com", "1nvalid@mail.com", "valid@domain.com"]` -> `["valid@mail.com", "valid@domain.com"]`

- `exercise_4.py`

```
from exercise_3 import validate_email


def filter_valid_emails(emails):
    valid_emails = []

    for email in emails:
        try:
            validate_email(email)
            valid_emails.append(email)
        except Exception as e:
            print(f"Email '{email}' não adicionado - {e}\n")

    return valid_emails
```

- `test_exercise_4.py`

```
from exercise_4 import filter_valid_emails


def test_only_valid_emails_are_filtered():
    input = ["valid@mail.com", "1nvalid@mail.com", "valid@domain.com"]
    output = ["valid@mail.com", "valid@domain.com"]

    assert filter_valid_emails(input) == output


def test_invalid_emails_group_results_an_empty_list():
    input = ["1nvalid@mail.com", "invalid@mail."]
    output = []

    assert filter_valid_emails(input) == output


def test_invalid_username_email_should_print_error_message(capsys):
    input = ["valid@mail.com", "1nvalid@mail.com", "valid@domain.com"]

    assert filter_valid_emails(input)

    captured = capsys.readouterr()

    assert (
        "Email '1nvalid@mail.com' não adicionado - Formato inválido!"
        in captured.out
    )


def test_invalid_website_email_should_print_error_message(capsys):
    input = ["valid@mail.com", "invalid@123.com", "valid@domain.com"]

    assert filter_valid_emails(input)

    captured = capsys.readouterr()

    assert (
        "Email 'invalid@123.com' não adicionado - Formato inválido!"
        in captured.out
    )


def test_invalid_extension_email_should_print_error_message(capsys):
    input = ["valid@mail.com", "invalid@mail.", "valid@domain.com"]

    assert filter_valid_emails(input)

    captured = capsys.readouterr()

    assert (
        "Email 'invalid@mail.' não adicionado - Formato inválido!"
        in captured.out
    )
```
