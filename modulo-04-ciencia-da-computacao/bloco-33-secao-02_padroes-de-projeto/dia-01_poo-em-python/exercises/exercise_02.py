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


if __name__ == "__main__":
    e = Estatistica()

    e.calcular_media([10, 20, 30])
    e.calcular_mediana([1, 5, 3])
    e.calcular_media([2, 30, 50, 15])
    e.calcular_moda([7, 13, 23, 29, 0])
    e.calcular_moda([9, 11, 9, 25])
