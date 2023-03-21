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
