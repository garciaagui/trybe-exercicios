# ⚡ Atividades de Fixação & Exercícios | Bloco 32 - Dia 01 (Seção 01 - CS)

## ✅ Atividades de Fixação - Operações básicas

1. No terminal, inicialize duas variáveis `a` e `b`, sendo `a = 10` e `b = 5`. Mostre o resultado das 7 operações básicas (soma, subtração, multiplicação, divisão, divisão inteira, potenciação e módulo) envolvendo essas variáveis.

```
# Declaração das variáveis
a = 10
b = 5

# Soma
a + b # Saída: 15

# Subtração
b - a # Saída: -5

# Multiplicação
a * b # Saída: 50

# Divisão
b / a # Saída: 0.5

# Divisão inteira
b // a # Saída: 0

# Potenciação
a ** b # Saída: 100000

# Módulo
a % b # Saída: 0

```

2. Declare e inicialize uma variável: `hours = 6`. Quantos minutos têm em 6 horas? E quantos segundos? Declare e inicialize variáveis minutes e seconds que recebem os respectivos resultados das contas. Depois, imprima cada uma delas.

```
# Declaração das variáveis
hours = 6
minutes = 60 * hours
seconds = 60 * minutes

# Impressão
minutes # Saída: 360
seconds # Saída: 21600
```

3. Teste e verifique o que acontece se você colocar um ponto e vírgula no final de uma instrução em Python.

```
exercise3 = 'test';
exercise3; # Saída: 'test'

# O resultado prova que é possível acrescentar ";" no final das linhas, assim como ocorre no JavaScript.
```

4. Suponha que o preço de capa de um livro seja R$ 24,20, mas as livrarias recebem um desconto de 40%. O transporte custa 3,00 para o primeiro exemplar e 75 centavos para cada exemplar adicional. Qual é o custo total de atacado para 60 cópias? Escreva uma expressão que receba o custo total e a imprima.

```
# Declaração das variáveis
units = 60
unitsCost = (24.2 - (24.2 * 0.4)) * units
transportCost = 3 + ((units - 1) * 0.75)
totalCost = round(unitsCost, 2) + transportCost

# Resultado final
totalCost # Saída: 918.45
```

## ✅ Atividades de Fixação - Tipos de dados embutidos

- ℹ️ A lista abaixo será utilizada nas atividades 6 e 7:

```
trybe_course = ["Introdução", "Front-end", "Back-end"]
```

5. Adicione o elemento “Ciência da Computação” à lista.

```
trybe_course.append("Ciência da Computação")

trybe_course # Saída: ["Introdução", "Front-end", "Back-end", "Ciência da Computação"]
```

6. Acesse e altere o primeiro elemento da lista para “Fundamentos”.

```
trybe_course[0] = "Fundamentos"

trybe_course # Saída: ["Fundamentos", "Front-end", "Back-end", "Ciência da Computação"]
```

7. Um conjunto ou set pode ser inicializado utilizando-se também o método `set()`. Inicialize uma variável com essa função `var = set()` e adicione seu nome ao conjunto utilizando um dos métodos vistos. Depois, imprima a variável e confira se o retorno é: `{‘seu_nome’}`.

```
var = set()
var.add("Guilherme")

# Resultado
var # Saída: {'Guilherme'}
```

- ℹ️ O código abaixo será utilizado nas atividades 8 e 9:

```
info = {
  "personagem": "Margarida",
  "origem": "Pato Donald",
  "nota": "Namorada do personagem principal nos quadrinhos do Pato Donald",
}
```

8. Insira no objeto uma nova propriedade com o nome de chave “recorrente” e o valor “Sim”. Em seguida, imprima o objeto no console.

```
info["recorrente"] = "Sim"

# Impressão
info # Saída: {'personagem': 'Margarida', 'origem': 'Pato Donald', 'nota': 'Namorada do personagem principal nos quadrinhos do Pato Donald', 'recorrente': 'Sim'}
```

9. Remova a propriedade cuja chave é “origem” e imprima o objeto no console.

```
del info["origem"]

# Impressão
info # Saída: {'personagem': 'Margarida', 'nota': 'Namorada do personagem principal nos quadrinhos do Pato Donald', 'recorrente': 'Sim'}

```

10. Após uma consulta do banco de dados, temos linhas que contém nome, sobrenome e idade como: `"Thiago", "Nobre", 29`. Que estrutura vista anteriormente seria recomendada dado que após esta consulta somente exibimos estes valores?

- **Resposta**: Tupla (tuple).

11. Realizar a contagem de quantas vezes cada elemento aparece em uma sequência é uma técnica muito útil na solução de alguns problemas. Qual é a estrutura mais recomendada para o armazenamento desta contagem?

- **Resposta**: Dict.

## ✅ Atividades de Fixação - Estruturas de repetição

12. O Fatorial de um número inteiro é representado pela multiplicação de todos os números predecessores maiores que 0. Escreva um código que calcule o fatorial de um número inteiro.

```
num = 5
result = 1

for counter in range(1, (num + 1)):
     result *= counter;
     print(result);

# Saída:
1
2
6
24
120

```

13. Um sistema de avaliações registra valores de 0 a 10 para cada avaliação. Após algumas mudanças estes valores precisam ser ajustados para avaliações de 0 a 100. Dado uma sequência de avaliações ratings = [6, 8, 5, 9, 10]. Escreva um código capaz de gerar as avaliações após a mudança. Neste caso o resultado deveria ser [60, 80, 50, 90, 100].

```
ratings = [6, 8, 5, 9, 10]

new_ratings = [
    rating * 10
    for rating in ratings
]

new_ratings # Saída: [60, 80, 50, 90, 100]
```

14. Percorra a lista do exercício 13 e imprima “Múltiplo de 3” se o elemento for divisível por 3.

```
for rating in ratings:
    if (rating % 3) == 0:
            print(f'{rating} é múltiplo de 3!');

# Saída:
6 é múltiplo de 3!
9 é múltiplo de 3!

```

## ✅ Exercícios do dia

1. Crie uma função que receba dois números e retorne o maior deles.

```
def get_greatest_number(num1, num2):
    if num1 > num2:
        return num1
    else:
        return num2
```

2. Calcule a média aritmética dos valores contidos em uma lista.

```
def calculate_arithmetic_average(num_list):
    sum = 0
    for num in num_list:
        sum += num

    return sum / len(num_list)
```

3. Faça um programa que, dado um valor n qualquer, tal que `n > 1`, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:

```
n = 5

*****
*****
*****
*****
*****
```

- **Resposta...**

```
def print_square(num):
    for row in range(1, (num + 1)):
        print(num * "*")
```

4. Crie uma função que receba uma lista de nomes e retorne o nome com a maior quantidade de caracteres.

```
def get_longest_name(name_list):
    longest_name = name_list[0]

    for name in name_list:
        if len(longest_name) < len(name):
            longest_name = name

    return longest_name
```

5. Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00. Crie uma função que retorne dois valores em uma tupla contendo a quantidade de latas de tinta a serem compradas e o preço total a partir do tamanho de uma parede (em m²).

```
def get_paint_cans_and_price_per_square_meters(square_meters):
    square_meters_per_liter = 3
    can_liter_capacity = 18
    can_brl_price = 80

    required_liters = square_meters / square_meters_per_liter
    required_cans = ceil(required_liters / can_liter_capacity)
    price = required_cans * can_brl_price

    return (required_cans, price)
```

6. Crie uma função que receba os três lado de um triângulo e informe qual o tipo de triângulo formado ou "não é triangulo", caso não seja possível formar um triângulo.

```
def get_triangle_type(s1, s2, s3):
    if ((s1 + s2) < s3) or ((s1 + s3) < s2) or ((s2 + s3) < s1):
        return "Não é um triângulo!"

    elif s1 == s2 == s3:
        return "Triângulo Equilátero"

    elif s1 == s2 or s1 == s3 or s2 == s3:
        return "Triângulo Isósceles"

    else:
        return "Triângulo Escaleno"
```
