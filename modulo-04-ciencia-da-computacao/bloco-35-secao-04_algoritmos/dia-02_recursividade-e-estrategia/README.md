# ⚡ Atividades de Fixação & Exercícios | Bloco 35 - Dia 02 (Seção 04 - CS)

## ✅ Atividades de fixação

1. Faça um algoritmo recursivo de soma. Esse algoritmo deve receber um número de parâmetro e deve somar todos os números antecessores a ele.

```
def sum(n):
    if n == 0:  # caso base
        return 0
    else:
        return n + sum(n - 1)  # caso recursivo
```
