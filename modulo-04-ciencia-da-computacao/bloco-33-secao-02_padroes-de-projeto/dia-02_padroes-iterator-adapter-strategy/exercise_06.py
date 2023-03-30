from abc import ABC, abstractmethod


class EstrategiaImposto(ABC):
    @abstractmethod
    def calcular(cls, valor):
        raise NotImplementedError


class ISS(EstrategiaImposto):
    @classmethod
    def calcular(cls, valor):
        return valor * 0.1


class ICMS(EstrategiaImposto):
    @classmethod
    def calcular(cls, valor):
        return valor * 0.06


class PIS(EstrategiaImposto):
    @classmethod
    def calcular(cls, valor):
        return valor * 0.0065


class COFINS(EstrategiaImposto):
    @classmethod
    def calcular(cls, valor):
        return valor * 0.03


class Orcamento:
    def calcular_imposto(self, imposto, valor):
        return imposto.calcular(valor)


if __name__ == "__main__":
    o = Orcamento()
    valor = 1000

    print(o.calcular_imposto(ISS, valor))
    print(o.calcular_imposto(ICMS, valor))
    print(o.calcular_imposto(PIS, valor))
    print(o.calcular_imposto(COFINS, valor))
