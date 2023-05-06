# Exercício Bônus 01 - Opção 01
def get_smallest_number(num_list):
    smallest_num = num_list[0]

    for num in num_list:
        if smallest_num > num:
            smallest_num = num

    return smallest_num


# Exercício Bônus 01 - Opção 02
# def get_smallest_number(num_list):
#    return min(num_list)


# Exercício Bônus 02
def print_triangle(num):
    for row in range(0, (num + 1)):
        print(row * "*")


# Exercício Bônus 03
def get_summation(num):
    sum = 0
    for counter in range(1, (num + 1)):
        sum += counter

    return sum


# Exercício Bônus 04
def calculate_fuel_price(liters, fuel):
    type = ()
    discounted_price = 0

    if fuel == "A":
        type = (0.03, 0.05, 1.90)
    elif fuel == "G":
        type = (0.04, 0.06, 2.50)
    else:
        return "Invalid Fuel"

    if liters <= 20:
        discounted_price = (1 - type[0]) * type[2]
    else:
        discounted_price = (1 - type[1]) * type[2]

    return round((discounted_price * liters), 2)


# print(get_smallest_number([5, 9, 3, 19, 70, 8, 100, 2, 35, 27]))
# print_triangle(5)
# print(get_summation(5))
# print(calculate_fuel_price(25, "G"))
