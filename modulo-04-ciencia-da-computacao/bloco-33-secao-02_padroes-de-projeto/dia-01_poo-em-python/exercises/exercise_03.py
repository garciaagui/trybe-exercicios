from abc import ABC, abstractmethod

PI = 3.14


class FiguraGeometrica(ABC):
    @abstractmethod
    def calcular_area(self):
        ...

    @abstractmethod
    def calcular_perimetro(self):
        ...


class Quadrado(FiguraGeometrica):
    def __init__(self, lado):
        self.lado = lado

    def calcular_area(self):
        area = self.lado * self.lado

        print(f"Área do Quadrado: {area} m2.")
        return area

    def calcular_perimetro(self):
        perimetro = self.lado * 4

        print(f"Perímetro do Quadrado: {perimetro} m.")
        return perimetro


class Retangulo(FiguraGeometrica):
    def __init__(self, base, altura):
        self.base = base
        self.altura = altura

    def calcular_area(self):
        area = self.base * self.altura

        print(f"Área do Retângulo: {area} m2.")
        return area

    def calcular_perimetro(self):
        perimetro = (2 * self.base) + (2 * self.altura)

        print(f"Perímetro do Retângulo: {perimetro} m.")
        return perimetro


class Circulo(FiguraGeometrica):
    def __init__(self, raio):
        self.raio = raio

    def calcular_area(self):
        area = PI * (self.raio**2)

        print(f"Área do Círculo: {area} m2.")
        return area

    def calcular_perimetro(self):
        perimetro = 2 * PI * self.raio

        print(f"Perímetro do Círculo: {perimetro} m.")
        return perimetro


if __name__ == "__main__":
    quadrado = Quadrado(10)
    quadrado.calcular_area()
    quadrado.calcular_perimetro()

    print("\n")

    retangulo = Retangulo(5, 2)
    retangulo.calcular_area()
    retangulo.calcular_perimetro()

    print("\n")

    circulo = Circulo(7)
    circulo.calcular_area()
    circulo.calcular_perimetro()
