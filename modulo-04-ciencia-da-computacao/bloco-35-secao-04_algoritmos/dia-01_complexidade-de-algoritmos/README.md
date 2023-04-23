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

1. Dado um array de números de tamanho `n`, o algoritmo abaixo retorna `true` se há no array um número duplicado e `false` caso contrário. Analise e diga qual é a ordem de complexidade desse algoritmo para o melhor caso, pior caso e caso médio.

```
def contains_duplicate(numbers):
    numbers.sort()
    previous_number = 'not a number';
    for number in numbers:
        if(previous_number == number): return True
        previous_number = number

    return False
```

- **Resposta**: A complexidade do algoritmo é `O(n log n)`.
  - O método `sort()` utiliza como algoritmo de ordenação uma implementação do `TimSort`, um algoritmo de ordenação com complexidade `O(n log n)` para o pior caso.
  - Também percorremos toda nossa entrada em nosso laço `for`, um indicativo de que realizamos uma operação de complexidade `O(n)`.
  - Sendo assim, o melhor caso seria se os dois primeiros números do array fossem iguais, enquanto o pior caso aconteceria se os dois últimos números do array fossem iguais. Por fim, o caso médio ocorreria se os números que estivessem no meio do array fossem iguais, o que, **simplificando**, seria semelhante ao pior caso.

2. Utilize o módulo `random` da linguagem Python para gerar um array com 100 números. Cada um deve ser a média de n números gerados aleatoriamente. Qual é a ordem de complexidade de tempo e de espaço deste programa?

```
import random


def random_averages(n):
    list_of_averages = []

    for _ in range(100):
        average = 0
        for _ in range(n):
            average += random.randrange(1, n)
        average = average / n
        list_of_averages.append(average)

    return list_of_averages
```

- **Resposta**:
  - Complexidade de tempo: Linear (`O(n)`) - cresce de acordo com o tamanho da entrada.
  - Complexidade de espaço: Constante (`O(1)`) - Independentemente do tamanho da entrada, a saída continua com o mesmo tamanho.

3. Dado um array de doces `candies` e um valor inteiro `extra_candies`, onde o `candies[i]` representa o número de doces que a enésima criança possui. Para cada criança, o algoritmo abaixo verifica se há uma maneira de distribuir doces extras entre as crianças de forma que ela possa ter o maior número de doces entre elas. Observe que várias crianças podem ter o maior número de doces. Analise o código abaixo para o melhor, pior caso e caso médio. Faça a análise de complexidade de espaço também.

```
def kids_with_candies(candies, extra_candies):
    max_candies = max(candies)
    return [candy + extra_candies >= max_candies for candy in candies]
```

- **Resposta**:
  - Como o array é, necessariamente, percorrido todas as vezes em que a função é executada, vejo que em todos os cenários a complexidade é de `O(n)`.
  - Complexidade de tempo e espaço: Linear (`O(n)`) - cresce de acordo com o tamanho da entrada.
