import pandas as pd


research = pd.read_csv(
    "bloco-37-secao-06_estrutura-de-dados-II/dia-03_pandas/activities/archives/pesquisa_pao_na_chapa.csv"
)


# Qual o dia da semana em que o queijo muçarela está com o menor preço?
mozzarella_suppliers = research.loc[
    research["produto"] == "queijo muçarela"
].sort_values(by="preco_reais")

cheapest_mozzarella = mozzarella_suppliers.iloc[0]

print(cheapest_mozzarella["dia_da_semana"])

# Qual o nome do fornecedor onde o tomate esteve com o maior preço histórico?
tomato_suppliers = research.loc[research["produto"] == "tomate"].sort_values(
    by="preco_reais", ascending=False
)

most_expensive = tomato_suppliers.iloc[0]

print(most_expensive["nome_do_fornecedor"])

# Em qual/quais dia/dias da semana o fornecedor soma pão aparentemente não abriu as portas?

not_working_days_soma_pao = research.loc[
    (research["nome_do_fornecedor"] == "soma pão")
    & (research["preco_reais"].isnull())
]

print(not_working_days_soma_pao["dia_da_semana"])

# Crie um novo DataFrame com o preço médio de cada produto pesquisado.

product_per_avg_price = research.groupby(by=["produto"]).mean(
    numeric_only=True
)

print(product_per_avg_price)
