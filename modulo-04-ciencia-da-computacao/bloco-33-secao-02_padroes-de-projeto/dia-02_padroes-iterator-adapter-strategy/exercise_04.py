from collections.abc import Iterator, Iterable
from abc import ABC, abstractmethod


class Carta:
    def __init__(self, valor, naipe):
        self.valor = valor
        self.naipe = naipe

    def __repr__(self):
        return "<%s de %s>" % (self.valor, self.naipe)


class OrdemDasCartas(Iterator):
    def __init__(self, cartas, ordem_estrategia):
        self.cartas = cartas
        self._ordem_estrategia = ordem_estrategia
        self.index = self._ordem_estrategia.posicao_inicial

    def __next__(self):
        try:
            carta_atual = self.cartas[self.index]
            self.index = self._ordem_estrategia.proxima_carta(self.index)

            return carta_atual

        except IndexError:
            raise StopIteration()


class EstrategiaIteracao(ABC):
    posicao_inicial = 0

    @abstractmethod
    def proxima_carta(cls, index):
        raise NotImplementedError


class EstrategiaRegular(EstrategiaIteracao):
    posicao_inicial = 0

    @classmethod
    def proxima_carta(cls, index):
        return index + 1


class EstrategiaReversa(EstrategiaIteracao):
    posicao_inicial = -1

    @classmethod
    def proxima_carta(cls, index):
        return index - 1


class Baralho(Iterable):
    naipes = "copas ouros espadas paus".split()
    valores = "A 2 3 4 5 6 7 8 9 10 J Q K".split()

    def __init__(self, ordem_estrategia):
        self._ordem_estrategia = ordem_estrategia
        self._cartas = [
            Carta(valor, naipe)
            for naipe in self.naipes
            for valor in self.valores
        ]

    def __len__(self):
        return len(self._cartas)

    def __iter__(self):
        return OrdemDasCartas(self._cartas, self._ordem_estrategia)

    def __str__(self) -> str:
        return f"{[carta for carta in self]}"


if __name__ == "__main__":
    print(Baralho(EstrategiaReversa))
