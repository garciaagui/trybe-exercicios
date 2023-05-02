from sort_examples.bubble_sort import bubble_sort
from sort_examples.merge_sort import merge_sort
from exercises.cronometro import Cronometro
from random import shuffle

numbers = list(range(10000))
shuffle(numbers)


with Cronometro("Bubble Sort"):
    bubble_sort(numbers)

with Cronometro("Merge Sort"):
    merge_sort(numbers)
