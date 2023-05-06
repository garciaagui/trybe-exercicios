from collections.abc import Iterator, Iterable


class Carta:
    def __init__(self, valor, naipe):
        self.valor = valor
        self.naipe = naipe

    def __repr__(self):
        return "<%s de %s>" % (self.valor, self.naipe)


class OrdemDasCartas(Iterator):
    def __init__(self, cartas):
        self.cartas = cartas
        self.index = 0

    def __next__(self):
        try:
            carta_atual = self.cartas[self.index]
            self.index += 1

            return carta_atual

        except IndexError:
            raise StopIteration()


class Baralho(Iterable):
    naipes = "copas ouros espadas paus".split()
    valores = "A 2 3 4 5 6 7 8 9 10 J Q K".split()

    def __init__(self):
        self._cartas = [
            Carta(valor, naipe)
            for naipe in self.naipes
            for valor in self.valores
        ]

    def __len__(self):
        return len(self._cartas)

    def __iter__(self):
        return OrdemDasCartas(self._cartas)

    def __str__(self) -> str:
        return f"{[carta for carta in self]}"


if __name__ == "__main__":
    print(Baralho())
