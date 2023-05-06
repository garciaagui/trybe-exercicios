def identify_fizz_buzz(number: int) -> str or int:
    if number % 3 == 0 and number % 5 == 0:
        return "FizzBuzz"
    elif number % 3 == 0:
        return "Fizz"
    elif number % 5 == 0:
        return "Buzz"
    else:
        return number


def fizz_buzz(number: int) -> "list[int, str]":
    fizz_buzz_number_group = []

    for num in range(1, (int(number) + 1)):
        new_num_value = identify_fizz_buzz(num)
        fizz_buzz_number_group.append(new_num_value)

    return fizz_buzz_number_group


if __name__ == "__main__":
    print(fizz_buzz(15))
