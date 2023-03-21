from math import ceil


# Exercício 01
def get_greatest_number(num1, num2):
    if num1 > num2:
        return num1
    else:
        return num2


# Exercício 02
def calculate_arithmetic_average(num_list):
    sum = 0
    for num in num_list:
        sum += num

    return sum / len(num_list)


# Exercício 03
def print_square(num):
    for row in range(1, (num + 1)):
        print(num * "*")


# Exercício 04
def get_longest_name(name_list):
    longest_name = name_list[0]

    for name in name_list:
        if len(longest_name) < len(name):
            longest_name = name

    return longest_name


# Exercício 05
def get_paint_cans_and_price_per_square_meters(square_meters):
    square_meters_per_liter = 3
    can_liter_capacity = 18
    can_brl_price = 80

    required_liters = square_meters / square_meters_per_liter
    required_cans = ceil(required_liters / can_liter_capacity)
    price = required_cans * can_brl_price

    return (required_cans, price)


# Exercício 05
def get_triangle_type(s1, s2, s3):
    if ((s1 + s2) < s3) or ((s1 + s3) < s2) or ((s2 + s3) < s1):
        return "Não é um triângulo!"

    elif s1 == s2 == s3:
        return "Triângulo Equilátero"

    elif s1 == s2 or s1 == s3 or s2 == s3:
        return "Triângulo Isósceles"

    else:
        return "Triângulo Escaleno"


# print(get_greatest_number(4, 2))
# print(calculate_arithmetic_average([1, 10, 25]))
# print(print_square(5))
# print(get_longest_name(["José", "Lucas", "Nádia", "Fernanda", "Cairo"]))
# print(get_paint_cans_and_price_per_square_meters(150))
# print(get_triangle_type(1, 2, 4))
