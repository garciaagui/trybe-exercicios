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

## ✅ Exercícios do dia

1. Implemente a classe `TV` conforme as especificações abaixo.

- Atributos:

  - `volume` - será inicializado com um valor de 50 e só pode estar entre 0 e 99;
  - `canal` - será inicializado com um valor de 1 e só pode estar entre 1 e 99;
  - `tamanho` - será inicializado com o valor do parâmetro;
  - `ligada` - será inicializado com o valor de False, pois está inicialmente desligado.
  - Todos eles devem ser **privados**.

- Métodos:
  - `aumentar_volume` - aumenta o volume de 1 em 1 até o máximo de 99;
  - `diminuir_volume` - diminui o volume de 1 em 1 até o mínimo de 0;
  - `modificar_canal` - altera o canal de acordo com o parâmetro recebido e deve lançar uma exceção (`ValueError`) caso o valor esteja fora dos limites;
  - `ligar_desligar` - alterna o estado da TV entre ligado e desligado (True/False).

```
class TV:
    def __init__(self, tamanho: int):
        self.__volume = 50
        self.__canal = 1
        self.__tamanho = tamanho
        self.__ligada = False

    def __esta_ligada(self):
        if self.__ligada is False:
            raise ValueError("A TV está desligada!")

    def aumentar_volume(self):
        self.__esta_ligada()
        if self.__volume == 99:
            print("A TV já está no seu volume máximo de 99.")
        else:
            self.__volume += 1
            print(f"Volume aumentado para {self.__volume}.")

    def diminuir_volume(self):
        self.__esta_ligada()
        if self.__volume == 0:
            print("A TV já está no seu volume mínimo de 0.")
        else:
            self.__volume -= 1
            print(f"Volume diminuido para {self.__volume}")

    def modificar_canal(self, novo_canal):
        self.__esta_ligada()
        if novo_canal < 0 or novo_canal > 99:
            raise ValueError("Canal inválido! Canais válidos vão de 1 a 99.")
        else:
            self.__canal = novo_canal
            print(f"Canal alterado para {self.__canal}.")

    def ligar_desligar(self):
        if self.__ligada is False:
            self.__ligada = True
            print("Ligando TV...")
        else:
            self.__ligada = False
            print("Desligando TV...")

    def __str__(self):
        return f"""
        Informações da TV:
        - Tamanho: {self.__tamanho} polegadas;
        - Ligada: {"Sim" if self.__ligada else "Não"};
        - Volume atual: {self.__volume if self.__ligada else "TV desligada"};
        - Canal atual: {self.__canal if self.__ligada else "TV desligada"}.
        """
```

2. Defina uma classe `Estatistica` que calcule média, mediana e moda de uma lista de números.

```
from collections import Counter


class Estatistica:
    @classmethod
    def calcular_media(cls, numeros: "list[int]"):
        media = sum(numeros) / len(numeros)
        print(f"Resultado da média: {media}")
        return media

    @classmethod
    def calcular_mediana(cls, numeros: "list[int]"):
        numeros.sort()
        mediana = 0
        index_central = len(numeros) // 2
        tamanho_e_par = True if len(numeros) % 2 == 0 else False

        if not tamanho_e_par:
            mediana = numeros[index_central]
        else:
            mediana = (numeros[index_central] + numeros[index_central - 1]) / 2

        print(f"Resultado da mediana: {mediana}")
        return mediana

    @classmethod
    def calcular_moda(cls, numeros: "list[int]"):
        numero, repeticoes = Counter(numeros).most_common()[0]
        moda = numero

        if repeticoes == 1:
            moda = "Amodal"

        print(f"Resultado da moda: {moda}")
        return moda
```
