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
