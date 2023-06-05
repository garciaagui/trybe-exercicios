# ⚡ Atividades de Fixação & Exercícios | Bloco 37 - Dia 03 (Seção 05 - CS)

## ✅ Atividades de Fixação

1. Crie um novo DataFrame a partir de um dicionário que contém três pares de chave-valor. O primeiro par terá os nomes de seus amigos mais próximos, já o segundo terá o prato preferido de cada amigo, o terceiro e último par terá a sobremesa preferida deles. Confira se a saída condiz com o resultado esperado.

```
import pandas as pd

friends_dishes = {
    "name": ["Peter Parker", "Bruce Wayne", "Clark Kent"],
    "dish": ["Pizza", "Macarrão", "Hambuguer"],
    "dessert": ["Sorvete", "Pavê", "Torta"],
}

print(pd.DataFrame(friends_dishes))
```

2. A partir do dicionário criado no exercício 1, armazene os DataSeries referentes a cada uma das colunas em variáveis e imprima a saída.

```
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
```

3. Construa um novo DataFrame a partir do seguinte conjunto de dados:

```
{
    "Grande Região": ["Norte", "Nordeste", "Sudeste", "Sul", "Centro-Oeste"],
    "Número de Municípios": [450, 1794, 1668, 1191, 467],
    "População em situação de rua": [4399, 22864, 49792, 16021, 8777],
    "Total de Municípios (%)": [8.10, 32.20, 29.90, 21.40, 8.40],
    "Total em situação de rua (%)": [4.32, 22.45, 48.89, 15.73, 8.62]
}

# Dados IPEA(2015)
```

Agora, responda aos seguintes questionamentos:

- Quantas linhas e colunas possui o nosso conjunto de dados?

**Resposta:** 5 linhas e 5 colunas. Atributo utilizado: `shape`.

- Há valores nulos no DataFrame?

**Resposta:** Não. Método utilizado: `info()` ou `isnull().sum()`.

- Qual o número médio de pessoas em situação de rua por região do Brasil em nosso DataFrame?

**Resposta:** 20370.60. Método utilizado: `describe()`.

- Qual região tem proporcionalmente a maior quantidade de pessoas nessa situação? E qual tem menos?

**Resposta:** Sudeste possui a maior quantidade (48.89%), enquanto o Norte possui a menor quantidade (4.32%). Método utilizado: `describe()`.

4. A lanchonete Pão na Chapa está pensando em expandir o seu negócio. Mas, para garantir a saúde financeira do empreendimento, ela resolveu consultar vários fornecedores, e assim, estabelecer a melhor relação entre custo x benefício para os principais ingredientes usados na sua cozinha. A pesquisa se deu ao longo de 7 dias, com objetivo de identificar qual dos fornecedores possuía a melhor relação de custo x benefício para os principais ingredientes usados.

Usando o conjunto de dados (`/activities/archives/pesquisa_pao_na_chapa.csv`), responda as perguntas abaixo:

- Qual o dia da semana em que o queijo muçarela está com o menor preço?

**Resposta:** Às quintas. Método:

```
mozzarella_suppliers = research.loc[
    research["produto"] == "queijo muçarela"
].sort_values(by="preco_reais")

cheapest_mozzarella = mozzarella_suppliers.iloc[0]
```

- Qual o nome do fornecedor onde o tomate esteve com o maior preço histórico?

**Resposta:** Dividir pra Conquistar. Método:

```
tomato_suppliers = research.loc[research["produto"] == "tomate"].sort_values(
    by="preco_reais", ascending=False
)

most_expensive = tomato_suppliers.iloc[0]
```

- Em qual/quais dia/dias da semana o fornecedor soma pão aparentemente não abriu as portas?

**Resposta:** Quinta e sexta, tendo em vista que os valores dos pães nessas datas são nulos. Método:

```
not_working_days_soma_pao = research.loc[
    (research["nome_do_fornecedor"] == "soma pão")
    & (research["preco_reais"].isnull())
]
```

- Crie um novo DataFrame com o preço médio de cada produto pesquisado.

**Resposta:**

```
product_per_avg_price = research.groupby(by=["produto"]).mean(
    numeric_only=True
)
```
