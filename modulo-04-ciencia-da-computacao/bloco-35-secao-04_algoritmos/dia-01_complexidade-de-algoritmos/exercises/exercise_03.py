def kids_with_candies(candies, extra_candies):
    max_candies = max(candies)
    print(max_candies)
    return [candy + extra_candies >= max_candies for candy in candies]


candies = [2, 3, 5, 1, 3, 7]
extra_candies = 3
print(kids_with_candies(candies, extra_candies))
