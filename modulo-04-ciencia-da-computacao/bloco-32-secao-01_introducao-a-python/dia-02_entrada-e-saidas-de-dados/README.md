# ⚡ Atividades de Fixação & Exercícios | Bloco 32 - Dia 02 (Seção 01 - CS)

## ✅ Atividades de Fixação 1 - Entrada e Saída

1. Faça um programa que solicite o nome de uma pessoa usuária e imprima-o na vertical. Exemplo:

```
F
U
L
A
N
O
```

- **Resposta...**

```
def print_name_vertically():
    name = input("Insira o seu nome: ")
    for word in name:
        print(word)
```

2. Escreva um programa que receba vários números naturais e calcule a soma desses valores. Caso algum valor da entrada seja inválido (por exemplo uma letra), uma mensagem deve ser exibida na saída de erros no seguinte formato: `“Erro ao somar valores, {valor} é um valor inválido”`. Ao final, você deve imprimir a soma dos valores válidos.

```
def sum_natural_numbers():
    sum = 0
    numbers = input(
        "Insira números NATURAIS, separando-os por um espaço (ex.: 1 2 3): "
    )

    for number in numbers.split():
        if not number.isdigit():
            return f"Erro ao somar valores, '{number}' é um valor inválido."
        else:
            sum += int(number)

    return f"Soma dos números inseridos: {sum}."
```

## ✅ Atividades de Fixação 2 - Lidando com exceções

3. Dado um arquivo contendo estudantes e suas respectivas notas (`/fixation_activities/students.txt`), escreva um programa que:

- Lê todas essas informações;
- Aplique um filtro, mantendo somente as pessoas que estão reprovadas;
- Escreva seus nomes em outro arquivo.

```
def get_unapproved_students():
    unapproved_list = []

    with open("students.txt") as file:
        for line in file:
            student_info = line.split()
            if int(student_info[1]) < 6:
                unapproved_list.append(student_info[0] + "\n")

    return unapproved_list


def generate_unapproved_students_arch():
    unapproved_list = get_unapproved_students()

    with open("unapproved_students.txt", mode="w") as file:
        file.writelines(unapproved_list)
        print(unapproved_list)
```
