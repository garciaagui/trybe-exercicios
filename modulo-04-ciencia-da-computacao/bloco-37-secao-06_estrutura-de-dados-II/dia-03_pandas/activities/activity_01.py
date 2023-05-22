import pandas as pd

friends_dishes = {
    "name": ["Peter Parker", "Bruce Wayne", "Clark Kent"],
    "dish": ["Pizza", "Macarrão", "Hambuguer"],
    "dessert": ["Sorvete", "Pavê", "Torta"],
}

print(pd.DataFrame(friends_dishes))
