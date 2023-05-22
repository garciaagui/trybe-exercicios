import pandas as pd

friends_dishes = {
    "name": ["Peter Parker", "Bruce Wayne", "Clark Kent"],
    "dish": ["Pizza", "Macarrão", "Hambuguer"],
    "dessert": ["Sorvete", "Pavê", "Torta"],
}

df = pd.DataFrame(friends_dishes)

names = df["name"]  # ou... pd.Series(friends_dishes["name"])
dishes = df["dish"]
desserts = df["dessert"]

print(names)
print(dishes)
print(desserts)
