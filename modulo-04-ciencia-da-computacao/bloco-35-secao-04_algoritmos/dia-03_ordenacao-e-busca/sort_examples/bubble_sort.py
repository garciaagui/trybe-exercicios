def bubble_sort(elements):
    # Quantidade de elementos na lista
    n = len(elements)

    # Precisamos ordenar n-1 elementos
    for ordered_elements in range(n - 1):
        # Vamos percorrer até o elemento anterior ao ordenado
        stop = n - 1 - ordered_elements
        for item in range(0, stop):
            # se um elemento for maior, flutuamos ele para cima
            if elements[item] > elements[item + 1]:
                current_element = elements[item]
                elements[item] = elements[item + 1]
                elements[item + 1] = current_element

                # Lembra da troca com desempacotamento?
                # elements[item], elements[item + 1] = elements[item + 1], elements[item]
    return elements
