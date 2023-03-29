class Eletrodomestico:
    def __init__(self, cor, potencia, preco):
        self.cor = cor
        self.potencia = potencia
        self.preco = preco
        self.__ligado = False
        self.__velocidade = 0
        self.__velocidade_maxima = 3

    def ligar(self, velociade):
        if velociade < 0 or velociade > self.__velocidade_maxima:
            raise ValueError(
                f"Velocidade deve estar entre o e {self.__velocidade_maxima}"
            )

        self.__velocidade = velociade
        self.__ligado = True

    def desligar(self):
        self.__ligado = False
        self.__velocidade = 0

    def esta_ligado(self):
        return self.__ligado

    def __str__(self):
        return f"""
        Informações do Eletrodoméstico:
        - Eletrodoméstico: {type(self).__name__};
        - Cor: {self.cor};
        - Potência: {self.potencia} W;
        - Preço: {self.preco} BRL;
        - Ligado: {self.__ligado};
        - Velocidade atual: {self.__velocidade};
        - Velocidade máxima: {self.__velocidade_maxima}.
        """


class Secador(Eletrodomestico):
    pass


class Batedeira(Eletrodomestico):
    pass


class MaquinaDeLavar(Eletrodomestico):
    pass


secador = Secador("Preto", 1600, 150)
batedeira = Batedeira("Vermelha", 600, 300)
maquina_de_lavar = MaquinaDeLavar("Branca", 1000, 2000)


print(secador)
print(batedeira)
print(maquina_de_lavar)
