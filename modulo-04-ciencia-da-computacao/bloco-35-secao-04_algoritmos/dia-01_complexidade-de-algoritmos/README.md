# ⚡ Atividades de Fixação & Exercícios | Bloco 35 - Dia 01 (Seção 04 - CS)

## ✅ Atividades de fixação

1. Qual é a Ordem de Complexidade (complexidade de tempo) do algoritmo abaixo? E a complexidade de espaço?

```
def multiply_array(numbers):
    result = 1
    for number in numbers:
        result *= number

    return result
```

- **Resposta**:
  - Complexidade de tempo: Linear (`O(n)`) - cresce de acordo com o tamanho da entrada.
  - Complexidade de espaço: Constante (`O(1)`) - Independentemente do tamanho da entrada, a saída continua com o mesmo tamanho.

2. Meça o tempo de execução do algoritmo abaixo e, mudando o tamanho das entradas, veja como, se você aumenta a entrada em n vezes, o tempo de execução aumenta em `n²` vezes!

```
def multiply_arrays(array1, array2):
    result = []
    number_of_iterations = 0

    for number1 in array1:
        print(f"Array 1: {number1}")
        for number2 in array2:
            print(f"Array 2: {number2}")
            result.append(number1 * number2)
            number_of_iterations += 1

    print(f"{number_of_iterations} iterações!")
    return result


n = 100
meu_array = list(range(1, n))

multiply_arrays(meu_array, meu_array)

```

- **Resposta**: Algumas medições...
  - 10 elementos: 0,024s
  - 100 elementos: 0,062s
  - 1000 elementos: 10,048s

3. Faça um algoritmo qualquer com três loops aninhados um dentro do outro. Entenda como ele terá uma complexidade de `O(n³)`!

```
def multiply_arrays(array1, array2, array3):
    result = []
    number_of_iterations = 0

    for number1 in array1:
        for number2 in array2:
            for number3 in array3:
                result.append(number1 * number2 * number3)
                number_of_iterations += 1

    print(f"{number_of_iterations} iterações!")
    return result


n = 1000
meu_array = list(range(1, n))
multiply_arrays(meu_array, meu_array, meu_array)
```

## ✅ Exercícios
