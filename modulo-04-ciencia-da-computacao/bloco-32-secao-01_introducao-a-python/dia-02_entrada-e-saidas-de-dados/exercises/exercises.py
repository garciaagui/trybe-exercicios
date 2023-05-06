import random
import json
import csv


# Exercício 01
def print_name_vertically():
    name = input("Insira o seu nome: ")

    while len(name) >= 1:
        print(name)
        name = name[:-1]


# Exercício 02
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


# Exercício 03
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


# Exercício 04
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


# print_name_vertically()
# guess_the_scrambled_word_1()
# guess_the_scrambled_word_2()
# generate_books_report()
