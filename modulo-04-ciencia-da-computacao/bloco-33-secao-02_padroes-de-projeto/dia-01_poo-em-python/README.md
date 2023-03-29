# ⚡ Atividades de Fixação & Exercícios | Bloco 33 - Dia 01 (Seção 02 - CS)

## ✅ Atividades de Fixação

1. Crie duas classes: `Ventilador` e `Pessoa`. Após isso, faça o seguinte:

- Faça com que a pessoa tenha um ventilador como atributo através da **composição**.
- Crie também um método `comprar_ventilador`.
- Faça com que o print de `Pessoa` informe se sua instância possui ou não um ventilador.

```
class Ventilador:
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
        Informações do Ventilador:
        - Cor: {self.cor};
        - Potência: {self.potencia} W;
        - Preço: {self.preco} USD;
        - Ligado: {self.__ligado};
        - Velocidade atual: {self.__velocidade};
        - Velocidade máxima: {self.__velocidade_maxima}.
        """


class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.ventilador = None

    def comprar_ventilador(self, ventilador: Ventilador):
        if ventilador.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= ventilador.preco
            self.ventilador = ventilador

    def __str__(self):
        return f"""
        Informações da Pessoa:
        - Nome: {self.nome};
        - Saldo na conta: {self.saldo_na_conta} USD;
        - Possui ventilador: {True if self.ventilador else False}.
        """


ventilador_de_gotham = Ventilador("Preto", 130, 150)
cidadao_de_gotham = Pessoa("Bruce Wayne", 5000)

cidadao_de_gotham.comprar_ventilador(ventilador_de_gotham)

print(cidadao_de_gotham)

```

2. Implemente as classes `Secador`, `Batedeira` e `MaquinaDeLavar`, sempre herdando da classe `Eletrodomestico`. Para testar, instancie as novas classes e realize alguns prints.

```
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

```
