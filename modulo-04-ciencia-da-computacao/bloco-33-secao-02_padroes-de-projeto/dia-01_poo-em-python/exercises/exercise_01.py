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


if __name__ == "__main__":
    tv = TV(32)

    tv.ligar_desligar()
    tv.aumentar_volume()
    tv.aumentar_volume()
    tv.diminuir_volume()
    tv.modificar_canal(45)
    print(tv)

    tv.ligar_desligar()
    print(tv)
