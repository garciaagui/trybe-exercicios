# ⚡ Atividades de Fixação & Exercícios | Bloco 36 - Dia 03 (Seção 05 - CS)

## ✅ Atividades de Fixação

1. Tipos abstratos de dados possuem uma única implementação bem documentada?

**Resposta:** Não. TAD é um conceito abstrato que tem como objetivo fornecer uma interface mínima e um conjunto de comportamentos a serem seguidos.

2. Listas(`list`), dicionários(`dict`) e conjuntos(`set`), que já vêm no Python, são considerados tipos de dados? Caso negativo, justifique sua resposta.

**Resposta:** Sim, são implementações concretas de TADs.

3. Que tal adicionarmos um método `update` que atualiza o valor a partir de um índice?

- Classe original (`array_example.py`):

```
class ListaArray:
    def __init__(self):
        self.data = []

    def __len__(self):
        return len(self.data)

    def __str__(self):
        return str(self.data)

    def get(self, index):
        return self.data[index]

    def set(self, index, value):
        self.data.insert(index, value)

    def remove(self, index):
        return self.data.pop(index)
```

- **Resposta:**

```
class ListaArray:

    # ...

    def update(self, index, value):
        self.data[index] = value
        return self.data[index]
```

## ✅ Exercícios

1. Em um software monitor, o qual verifica a resiliência de outro software, precisamos saber o tempo máximo que um software permaneceu sem instabilidades. Para isto, a cada hora é feito uma requisição ao sistema para verificamos se está tudo bem. Supondo um array que contenha os estados coletados por nosso software, calcule quanto tempo máximo que o servidor permaneceu sem instabilidades. Faça a análise de complexidade da sua solução.

```
1 - OK
0 - Instabilidades

valores_coletados = [0, 1, 1, 1, 0, 0, 1, 1]
resultado = 3

valores_coletados = [1, 1, 1, 1, 0, 0, 1, 1]
resultado = 4
```

- **Resposta:** Complexidade `O(n)`, visto que toda a lista (`collected_values`) será iterada, independente do cenário.

```
def get_max_time_without_instabilities(collected_values):
    max_time = 0
    current_time = 0

    for value in collected_values:
        if value == 1:
            current_time += 1

            if current_time > max_time:
                max_time = current_time

        else:
            current_time = 0

    return max_time
```

2. Em um jogo de baralho, as cartas estão representadas por um array numérico. Para iniciar o jogo, devemos embaralhar as cartas. Faremos isto dividindo uma porção de cartas em 2 e depois mesclando as duas porções, conforme o exemplo abaixo. Faça a análise de complexidade da sua solução.

```
Exemplo 1:
cartas = [2, 6, 4, 5]
cartas por parte = 2

resultado = [2, 4, 6, 5]

Exemplo 2:
cartas = [1, 4, 4, 7, 6, 6]
cartas por parte = 3

resultado = [1, 7, 4, 6, 4, 6]
```

- **Resposta:** Complexidade `O(n)`.

```
def shuffle_cards(cards):
    shuffled_cards = []
    middle_index = len(cards) // 2

    for offset in range(middle_index):
        shuffled_cards.extend(cards[offset::middle_index])

    return shuffled_cards
```

3. Imagine que você esteja trabalhando em um e-commerce, e foi lhe dado a demanda de analisar um array de números inteiros que representam os produtos dessa empresa. Verifique quantos produtos formam boas combinações, ou seja, quando um produto é igual ao outro e seu índice é maior que o anterior. Esta combinação pode ser utilizada para modificar os produtos de uma página, conforme o exemplo abaixo. Faça a análise de complexidade da sua solução.

```
Exemplo 1:
produtos = [1, 3, 1, 1, 2, 3]
resultado = 4
Os índices (0, 2), (0, 3), (1, 5), (2, 3) formam combinações.

Exemplo 2:
produtos = [1, 1, 2, 3]
resultado = 1
Os índices (0, 1) formam a única combinação.
```

- **Resposta:** Complexidade `O(n²)`.

```
def get_products_combinations(products):
    combinations = 0

    for index in range(0, len(products)):
        start = index + 1

        for product in products[start:]:
            if products[index] == product:
                combinations += 1

    return combinations
```

4. Você têm dois arrays de números inteiros que representam instantes de entrada e saídas em uma biblioteca. Dado um número que represente um instante a ser buscado, retorne quantas pessoas estudantes estão na biblioteca naquele instante. Considere que todo estudante entrou e saiu da biblioteca, conforme o exemplo abaixo. Faça a análise de complexidade da sua solução.

```
entradas = [1, 2, 3]
saidas = [3, 2, 7]
instante_buscado = 4
resultado: 1

O estudante 1 entrou no instante 1 e saiu no 3, já o segundo entrou no 2
e saiu no 2 e o último foi único a estar presente no instante 4.
```

- **Resposta:** Complexidade `O(n)`.

```
def get_attendance_by_hour(entries, departures, hour):
    attendance = 0
    stop = len(entries)  # or len(departures)

    for index in range(0, stop):
        entry = entries[index]
        departure = departures[index]

        if entry <= hour <= departure:
            attendance += 1

    return attendance
```

5. Em um software gerenciador de servidores, precisamos verificar o número de servidores que se comunicam. Os servidores estão representados como um array bidimensional onde o valor 1 representa um computador e 0 a ausência do mesmo. Dois servidores se comunicam se eles estão na mesma linha ou mesma coluna, conforme o exemplo abaixo.

```
servidores =  [[1,0],[0,1]]
resultado: 0
Linhas e colunas são diferentes.

servidores = [[1,0],[1,1]]
resultado: 3
Todos os servidores se comunicam com ao menos um outro servidor.

servidores = [[1, 0, 0],
              [1, 0, 0],
              [0, 0, 1]]
resultado: 2
O servidor de índice (2, 2) não possui nenhum outro na mesma linha e coluna.
```

- **Resposta:**

```
def get_same_row_connections(servers):
    counter = 0
    stop = len(servers)

    for index, server in enumerate(servers):
        for i in range(index + 1, stop):
            if server == servers[i] == 1:
                counter += 1

    return counter


def get_connected_servers(servers):
    counter = 0
    stop = len(servers)

    for row in range(stop):
        counter += get_same_row_connections(servers[row])

        for column in range(stop):
            for index in range(stop):
                if index == row:
                    continue

                if servers[index][column] == servers[row][column] == 1:
                    counter += 1

    return counter
```
