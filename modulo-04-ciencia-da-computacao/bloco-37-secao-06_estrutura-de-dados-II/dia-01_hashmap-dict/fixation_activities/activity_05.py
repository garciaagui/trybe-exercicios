dict = {}
str = "bbbbaaaacccaaaaaaddddddddccccccc"

for char in str:
    if char not in dict:
        dict[char] = 1
    else:
        dict[char] += 1

print(dict)
