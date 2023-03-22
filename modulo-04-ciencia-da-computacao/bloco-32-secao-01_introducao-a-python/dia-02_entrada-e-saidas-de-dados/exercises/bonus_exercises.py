import json
import random


def generate_random_pokemon():
    with open("pokemons.json") as file:
        pokemons_list = json.load(file)["results"]

    random_pokemon = random.choice(pokemons_list)

    return random_pokemon["name"]


def guess_the_pokemon():
    random_pokemon = generate_random_pokemon()
    counter = 1

    print("Adivinhe o Pokémon!\n")

    while counter < len(random_pokemon):
        print(f"Dica: {random_pokemon[0:counter]}")
        guess = input(f"Palpite {counter}: ")
        if guess == random_pokemon:
            return print(f"Parabéns, você acertou! Pokémon: {random_pokemon}")
        counter += 1

    return print(f"Você perdeu. O pokémon era: {random_pokemon}")


# guess_the_pokemon()
