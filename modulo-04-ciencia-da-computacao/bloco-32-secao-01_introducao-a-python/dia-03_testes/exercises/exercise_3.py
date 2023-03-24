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


if __name__ == "__main__":
    validate_email("valid@mail.com")
