def linear_search(numbers, target):
    n = len(numbers)  # N será a quantidade de elementos da lista
    for index in range(0, n):  # vamos iterar a lista completa
        if (
            numbers[index] == target
        ):  # se encontrar o elemento alvo, retorne a posição
            return index

    return -1  # Não encontrou? Retorne -1
