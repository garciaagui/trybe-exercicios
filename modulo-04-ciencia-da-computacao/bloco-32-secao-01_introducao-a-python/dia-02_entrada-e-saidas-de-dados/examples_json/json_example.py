import json

with open("pokemons.json") as file:
    pokemons = json.load(file)["results"]

    # Alternativa utilizando o método loads:
    # content = file.read()
    # pokemons = json.loads(content)["results"]


grass_type_pokemons = [
    pokemon for pokemon in pokemons if "Grass" in pokemon["type"]
]

with open("grass_pokemons.json", "w") as file:
    json.dump(grass_type_pokemons, file)

    # Alternativa utilizando o método dumps:
    # json_to_write = json.dumps(grass_type_pokemons)
    # file.write(json_to_write)
