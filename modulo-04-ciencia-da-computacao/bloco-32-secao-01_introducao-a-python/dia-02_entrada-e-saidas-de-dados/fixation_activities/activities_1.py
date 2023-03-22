# Atividade 01
def print_name_vertically():
    name = input("Insira o seu nome: ")
    for word in name:
        print(word)


# Atividade 02


def sum_natural_numbers():
    sum = 0
    numbers = input(
        "Insira números NATURAIS, separando-os por um espaço (ex.: 1 2 3): "
    )

    # Método split pega cada valor separado.
    for number in numbers.split():
        # Método isdigit verificar se a string corresponde a um número natural
        if not number.isdigit():
            return f"Erro ao somar valores, '{number}' é um valor inválido."
        else:
            sum += int(number)

    return f"Soma dos números inseridos: {sum}."


# print_name_vertically()
print(sum_natural_numbers())
