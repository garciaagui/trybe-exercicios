class Conjunto:
    def __init__(self):
        self.set = [False] * 1001
        self.last_element = 0

    def add(self, item):
        if not self.set[item]:
            self.set[item] = True
        if item > self.last_element:
            self.last_element = item

    def __str__(self):
        string = "{"

        for index, is_in_set in enumerate(self.set):
            if is_in_set:
                string += str(index)
                if index < self.last_element:
                    string += ", "

        string += "}"
        return string

    def __contains__(self, item):
        try:
            value = self.set[item]
            if value:
                return True
        except IndexError:
            return False
        else:
            return False

    def union(self, other_set):
        new_set = Conjunto()

        for index in range(1001):
            if self.set[index] or other_set.set[index]:
                new_set.add(index)

        return new_set

    def intersection(self, other_set):
        new_set = Conjunto()

        for index in range(1001):
            if self.set[index] and other_set.set[index]:
                new_set.add(index)

        return new_set

    def difference(self, other_set):
        new_set = Conjunto()

        for index in range(1001):
            if self.set[index] and not other_set.set[index]:
                new_set.add(index)

        return new_set

    def issubset(self, other_set):
        for index in range(1001):
            if self.set[index] and not other_set.set[index]:
                return False

        return True

    def issuperset(self, other_set):
        for index in range(1001):
            if other_set.set[index] and not self.set[index]:
                return False

        return True


if __name__ == "__main__":
    conj = Conjunto()

    for item in [0, 10, 100, 1000]:
        conj.add(item)

    print(conj)
    print(10 in conj)
    print(1001 in conj)

    conj1 = Conjunto()
    for i in [2, 4, 8, 16, 32]:
        conj1.add(i)

    conj2 = Conjunto()
    for i in [2, 4, 6, 8, 10]:
        conj2.add(i)

    conj3 = conj1.union(conj2)
    print(conj3)

    conj4 = conj1.intersection(conj2)
    print(conj4)

    conj5 = conj1.difference(conj2)
    print(conj5)

    print(conj1.issubset(conj2))
    print(conj1.issuperset(conj2))
