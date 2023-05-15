numbers = {n: n * 2 for n in range(3, 21)}

for key in numbers.keys():
    if not key % 2 == 0:
        numbers[key] = key * 3
