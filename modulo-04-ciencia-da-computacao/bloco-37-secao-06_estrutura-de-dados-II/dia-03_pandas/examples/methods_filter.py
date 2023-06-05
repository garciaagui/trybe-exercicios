import pandas as pd


data = {
    "comida": [
        "abacate",
        "requeijão",
        "margarina",
        "doce de leite",
        "abacaxi",
    ],
    "tipo": ["doce", "salgado", "salgado", "doce", "doce"],
}

df = pd.DataFrame(data)

# Aqui fazemos a filtragem pelo tipo "doce" passando a condição df["tipo"] == "doce" como índice do loc.
print(df.loc[df["tipo"] == "doce"])

# Filtragem pelo index
print(df.loc[0])
print(df.iloc[1])
print(df.iloc[2:])
