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
