import pandas as pd


chuvas_regiao_morumbi = pd.read_csv(
    "bloco-37-secao-06_estrutura-de-dados-II/dia-03_pandas/examples/archives/chuvas_morumbi.csv"
)
chuvas_regiao_morumbi.to_json(
    "bloco-37-secao-06_estrutura-de-dados-II/dia-03_pandas/examples/archives/chuvas_morumbi.json"
)
