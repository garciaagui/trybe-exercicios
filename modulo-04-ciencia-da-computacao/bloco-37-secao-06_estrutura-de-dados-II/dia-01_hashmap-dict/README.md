# ⚡ Atividades de Fixação & Exercícios | Bloco 37 - Dia 01 (Seção 06 - CS)

## ✅ Atividades de Fixação

1. Use a entrada abaixo para criar objetos `Employee` e instancie a classe `HashMap` e use os objetos `Employee` para povoá-la.

- Imprima na tela o nome da pessoa de `id_num = 23`, acessando a informação a partir da `HashMap`.
- A pessoa de `id_num = 10` está com o nome errado, deveria ser `name30`. Implemente um método `update_value` em `HashMap`, onde `id_num` é a chave para localizar o registro que queremos alterar e `new_name` é o nome a ser colocado. Verifique se o seu código está realmente alterando o nome, imprimindo o nome antes e depois da alteração:

```
employees = [(14, "name1"), (23, "name2"), (10, "name3"), (9, "name4")]
```

**Resposta...**

- Classe `HashMap`:

```
class HashMap:
    def __init__(self):
        self._buckets = [None for i in range(10)]

    def get_address(self, id_num):
        return id_num % 10

    def insert(self, employee):
        address = self.get_address(employee.id_num)
        self._buckets[address] = employee

    def get_value(self, id_num):
        address = self.get_address(id_num)
        return self._buckets[address].name

    def has(self, id_num):
        address = self.get_address(id_num)
        return self._buckets[address] is not None

    def update_value(self, id_num, new_name):
        address = self.get_address(id_num)
        self._buckets[address].name = new_name
```

- Atividade:

```
from examples.hashmap_example import Employee, HashMap


employees = [(14, "name1"), (23, "name2"), (10, "name3"), (9, "name4")]
registry = HashMap()

for id, name in employees:
    new_employee = Employee(id, name)
    registry.insert(new_employee)


print(registry.get_value(23))

print(f"Before update: {registry.get_value(10)}")
registry.update_value(10, "name30")
print(f"After update: {registry.get_value(10)}")
```

2. Descubra qual técnica de tratamento de colisão é utilizada pelo `Dict`, de Python e o `HashMap`, do Java. Em inglês, o termo de busca é “collision resolution“.

**Resposta:**

- A classe `Dict`, de Python, utiliza a técnica de tratamento de colisão chamada **Open Addressing** e busca o próximo espaço vazio em duas fases. Ambas as fases utilizam a representação binária da chave e aplicam fórmulas matemáticas para definir o próximo índice a ser visitado.

- A classe `HashMap`, de Java, utiliza a técnica de **Separate Chaining**, mas quando a lista do bucket começa a ficar grande, a linguagem substitui essa lista por uma Árvore Binária de Busca.

3. Como as diferentes implementações afetam a performance? Quais são os prós e contras da implementação de cada linguagem?

**Resposta:**

- A solução do Python determina o próximo índice a ser visitado de maneira relativamente randômica e resulta em uma complexidade assintótica de tempo de `O(1)`. Por outro lado, para evitar que o vetor buckets fique rapidamente sem espaço, um Dict é inicializado com uma lista de tamanho 2\*\*15 ints. Como em Python cada int ocupa 24 bytes, no mínimo, o uso de memória é considerável.

- Em Java, o tamanho inicial é menor, uma vez que o que tende a crescer são as chains de cada bucket e não a lista de buckets. Por outro lado, temos o trade-off com o custo de tempo. Para cada consulta, o tempo de busca é proporcional à quantidade de itens naquele bucket que, sendo uma árvore, chega a `O(log n)`, sendo n a quantidade de itens naquele bucket.

- Resumindo: Python tem complexidade mais baixa, mas gasta muito espaço. Java utiliza bem melhor a memória, porém tem maior complexidade para consultas.

4. Consulte a forma de se criar um dicionário chamado de _dict comprehension_ e crie um dicionário que mapeia inteiros de 3 a 20 para o seu dobro, conforme o exemplo abaixo.

```
- 3 deve ser mapeado para 6;

- 10 deve ser mapeado para 20.
```

**Resposta:**

```
numbers = {n: n * 2 for n in range(3, 21)}
```

5. Dada uma string, construa um dicionário com a contagem de cada caractere da palavra. Utilize o pseudocódigo e o exemplo abaixo para se nortear.

```
Para cada char na string: - Se o char não estiver no dicionário, inclua com o valor 1;

    - Se estiver, incremente o valor.


# Exemplo:

str = "bbbbaaaacccaaaaaaddddddddccccccc"
# saída: {'b': 4, 'a': 10, 'c': 10, 'd': 8}

str = "coxinha"
# saída: {'c': 1, 'o': 1, 'x': 1, 'i': 1, 'n': 1, 'h': 1, 'a': 1}
# Explicação: Nenhuma letra repete em coxinha :)
```

**Resposta:**

```
dict = {}
str = "bbbbaaaacccaaaaaaddddddddccccccc" # Example

for char in str:
    if char not in dict:
        dict[char] = 1
    else:
        dict[char] += 1
```

6. Utilize o dicionário criado no exercício 4. Para as chaves ímpares, não queremos mais mapear para o seu dobro, mas sim para o seu triplo. Consulte o método `keys()` e atualize o seu dicionário para a nova regra.

```
numbers = {n: n * 2 for n in range(3, 21)}

for key in numbers.keys():
    if not key % 2 == 0:
        numbers[key] = key * 3
```
