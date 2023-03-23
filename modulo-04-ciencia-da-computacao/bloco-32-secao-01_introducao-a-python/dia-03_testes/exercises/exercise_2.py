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


print(generate_phone_number("MY-MISERABLE-JOB-1"))
