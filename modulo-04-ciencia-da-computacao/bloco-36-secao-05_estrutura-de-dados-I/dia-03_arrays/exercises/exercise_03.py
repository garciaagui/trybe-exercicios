def get_products_combinations(products):
    combinations = 0

    for index in range(0, len(products)):
        start = index + 1

        for product in products[start:]:
            if products[index] == product:
                combinations += 1

    return combinations
