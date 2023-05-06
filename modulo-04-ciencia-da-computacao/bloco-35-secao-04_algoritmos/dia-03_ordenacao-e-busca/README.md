# ⚡ Atividades de Fixação & Exercícios | Bloco 35 - Dia 03 (Seção 04 - CS)

## ✅ Exercícios

1. Dado um array com os seguintes elementos `["zebra", "macaco", "elefante", "arara", "javali"]`, após **duas iterações** utilizando `bubble sort`, como estaria este array?

**Resposta**: ["elefante", "arara", "javali" ,"macaco","zebra"].

2. Demonstre o passo a passo do processo de mistura de um array, sendo ordenado utilizando `merge sort`. Comece o passo a passo a partir da linha abaixo:

```
7 3    5 4    6 8    2 1
```

**Resposta**:

- Primeiramente, deve-se dividir cada "dupla" de valores:

```
3    7    4    5    6    8    1    2

```

- Agora, deve-se uní-las novamente e ordená-las de forma crescente:

```
3 7    4 5    6 8    1 2

```

- O passo seguinte é unir duas "duplas" (esquerda e direita) em subjconjuntos e ordená-los:

```
3 4 5 7    1 2 6 8

```

- Por fim, unimos os subjconjuntos e ordenamos novamente, resultando na lista original corretamente ordenada.

```
1 2 3 4 5 6 7 8

```

3. Execute os algoritmos de ordenação por `seleção` e `inserção`, para as entradas de dados ordenadas, inversamente ordenadas e aleatórias. Em seguida, compare-os. Faça testes para entradas de tamanho 10.000, 100.000, 1.000.000.

**Resposta**: O método `seleção` possui complexidade `O(n²)`em **todos** os cenários. Já a `inserção` possui complexidade `O(n)` em seu melhor caso e `O(n²)` em seu caso médio e pior caso. Logo, o método `inserção` é mais performático que o método `seleção`.

4. Compare o tempo de execução do algoritmo `merge sort` e `bubble sort` para uma entrada de 10.000 valores aleatórios. Explique através de análise de complexidade o que ocorre.

**Resultados**

```
Bubble Sort demorou 6.401043907000712 segundos
Merge Sort demorou 0.024762649001786485 segundos
```

**Explicação**: Pelo fato de empregar a técnica de dividir e conquistar, o `merge sort` possui uma complexidade `O(n log n)` independemente se a lista passada estiver ordenada por completo, não ordenada ou parcialmente ordenada. Já o `bubble sort`, que emprega repetidas iterações, possui complexidade `O(n)` em seu melhor caso e `O(n²)` em seu caso médio e pior caso. Portanto, o `merge sort` é a opção mais performática.

5. Converta o algoritmo recursivo de busca binária em iterativo.

```
def binary_search(array, value):
    low_index = 0
    high_index = len(array) - 1

    while high_index >= low_index:
        middle_index = (high_index + low_index) // 2
        if array[middle_index] == value:
            return middle_index
        elif array[middle_index] > value:
            high_index = middle_index - 1
        else:
            low_index = middle_index + 1

    raise ValueError(f"{value} is not in list")
```

6. Para descobrirmos qual commit introduziu um erro no sistema, precisamos voltar no tempo verificando os commits antigos, de modo a descobrir um commit em que os testes falham. Supondo que isto será representado como um array de booleanos, descubra o índice onde o erro ocorreu pela primeira vez. Exemplo:

```
entrada: [True, True, True, True, False, False, False]  # saída: 4


entrada: [True, True, False, False, False, False, False]  # saída: 2
```

**Resposta...**

```
def find_first_bad_version(array):
    low_index = 0
    high_index = len(array) - 1

    while high_index >= low_index:
        middle_index = (high_index + low_index) // 2

        if array[middle_index] is False:
            high_index = middle_index - 1
        else:
            low_index = middle_index + 1

    return low_index
```
