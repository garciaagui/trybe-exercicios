from sort_examples.selection_sort import selection_sort
from sort_examples.insertion_sort import insertion_sort
from exercises.cronometro import Cronometro
from random import shuffle

number = 10000
ordenados = list(range(number))
inversamente_ordenados = list(reversed(range(number)))
aleatorios = ordenados[:]
shuffle(aleatorios)


with Cronometro("Seleção - Ordenados"):
    selection_sort(ordenados)

with Cronometro("Seleção - Inversamente Ordernados"):
    selection_sort(inversamente_ordenados)

with Cronometro("Seleção - Aleatórios"):
    selection_sort(aleatorios)

print("---------------------------------------")

with Cronometro("Inserção - Ordenados"):
    insertion_sort(ordenados)

with Cronometro("Inserção - Inversamente Ordernados"):
    insertion_sort(inversamente_ordenados)

with Cronometro("Inserção - Aleatórios"):
    insertion_sort(aleatorios)
