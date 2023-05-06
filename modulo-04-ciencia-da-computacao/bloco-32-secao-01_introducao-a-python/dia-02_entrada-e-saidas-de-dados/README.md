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

## ✅ Exercícios do dia

1. Faça um programa que receba um nome e imprima o mesmo na vertical em escada invertida. Exemplo:

```
PEDRO
PEDR
PED
PE
P
```

- **Resposta...**

```
def print_name_vertically():
    name = input("Insira o seu nome: ")

    while len(name) >= 1:
        print(name)
        name = name[:-1]
```

2. Desenvolva um jogo em que a pessoa usuária tenha que adivinhar uma palavra que será mostrada com as letras embaralhadas. O programa terá uma lista de palavras e escolherá uma aleatoriamente. O jogador terá três tentativas para adivinhar a palavra. Ao final, a palavra deve ser mostrada na tela, informando se a pessoa ganhou ou perdeu o jogo.

```
import random

def guess_the_scrambled_word_1():
    word_list = ["Playstation", "Retângulo", "Dicionário"]
    random_word = random.choice(word_list)
    scrambled_word = "".join(random.sample(random_word, len(random_word)))
    counter = 1

    print(f"Descubra a palavra embaralhada: {scrambled_word}\n")

    while counter <= 3:
        guess = input(f"Palpite {counter}: ")
        if guess == random_word:
            return print("Parabéns, você acertou!")
        counter += 1

    return print("Este foi o seu último palpite. Tente novamente...")
```

3. Modifique o exercício anterior para que as palavras sejam lidas de um arquivo (`./exercises/words.json`). Considere que o arquivo terá cada palavra em uma linha.

```
import random

def guess_the_scrambled_word_2():
    with open("words.json") as file:
        word_list = json.load(file)["words"]

    random_word = random.choice(word_list)
    scrambled_word = "".join(random.sample(random_word, len(random_word)))
    counter = 1

    print(f"Descubra a palavra embaralhada: {scrambled_word}\n")

    while counter <= 3:
        guess = input(f"Palpite {counter}: ")
        if guess == random_word:
            return print("Parabéns, você acertou!")
        counter += 1

    return print("Este foi o seu último palpite. Tente novamente...")
```

4. Dado o arquivo `books.json` disponível em `./exercises`, calcule a porcentagem de livros em cada categoria em relação ao número total de livros. O resultado deve ser escrito em um arquivo no formato CSV como o exemplo abaixo.

```
categoria,porcentagem
Python,0.23201856148491878
Java,0.23201856148491878
PHP,0.23201856148491878
```

- **Resposta...**

```
import json
import csv

def filter_books_by_category():
    with open("books.json") as file:
        books_list = json.load(file)

    books_pct_by_category = {}

    for book in books_list:
        categories = book["categories"]

        for category in categories:
            if category not in books_pct_by_category:
                books_pct_by_category[category] = 0
            books_pct_by_category[category] += 1 / len(books_list) * 100

    return books_pct_by_category


def generate_books_report():
    books_pct_by_category = filter_books_by_category()

    with open(
        "books_pct_by_category_report.csv", "w", encoding="utf-8"
    ) as file:
        headers = ["Categoria", "Porcentagem"]

        writer = csv.DictWriter(file, fieldnames=headers)
        writer.writeheader()

        for category, pct in books_pct_by_category.items():
            row = {"Categoria": category, "Porcentagem": round(pct, 2)}
            writer.writerow(row)
```

## ✅ Exercício Bônus

5. Utilizando o arquivo `pokemons.json` disponível em `./exercises`, escreva um programa que sorteie um pokemon aleatoriamente. O programa deve perguntar à pessoa usuária “Quem é esse pokemon?” até que ela o acerte. A cada erro, apresente um número de letras do nome daquele pokemon igual ao número de erros.

- Exemplo: O pokemon sorteado pelo programa é `butterfree`; a pessoa usuária chuta "charizard"; o programa deve exibir `b`. Em seguida, a pessoa chuta "blastoise"; o programa deve exibir `bu`; e assim por diante até a pessoa acertar.

```
import json
import random


def generate_random_pokemon():
    with open("pokemons.json") as file:
        pokemons_list = json.load(file)["results"]

    random_pokemon = random.choice(pokemons_list)

    return random_pokemon["name"]


def guess_the_pokemon():
    random_pokemon = generate_random_pokemon()
    counter = 0

    print("Adivinhe o Pokémon!\n")

    while counter < len(random_pokemon):
        print(
            (f"Dica: { random_pokemon[0:counter]}")
            if counter > 0
            else "Primeiramente, tente adivinhar sem dica :)"
        )

        guess = input(f"Palpite {counter + 1}: ")

        if guess == random_pokemon:
            return print(f"Parabéns, você acertou! Pokémon: {random_pokemon}")

        counter += 1

    return print(f"Você perdeu. O pokémon era: {random_pokemon}")
```
