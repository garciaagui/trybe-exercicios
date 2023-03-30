from exercise_02 import Baralho
from collections.abc import Iterator


class OrdemInversaDasCartas(Iterator):
    def __init__(self, cartas):
        self.cartas = cartas
        self.index = -1

    def __next__(self):
        try:
            carta_atual = self.cartas[self.index]
            self.index -= 1

            return carta_atual

        except IndexError:
            raise StopIteration()


class BaralhoInverso(Baralho):
    def __iter__(self):
        return OrdemInversaDasCartas(self._cartas)


if __name__ == "__main__":
    print(BaralhoInverso())
