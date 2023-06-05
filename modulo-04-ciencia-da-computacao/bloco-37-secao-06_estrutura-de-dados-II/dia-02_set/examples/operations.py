# Podemos instanciar um set vazio ou inicializar com valores de um objeto
# iterável, como uma lista
conjunto_a = set()

# Ao inicializar com valores de uma lista, os valores duplicados serão
# desconsiderados e a ordem de inserção será perdida.
conjunto_b = set([1, 1, 2, 3, 3, 3])

# Add - adiciona o elemento ao conjunto
conjunto_a.add(5)
conjunto_a.add(3)
conjunto_a.add(0)

conjunto_b.add(5)
conjunto_b.add(10)

# sets admitem objetos mistos. Ou seja, admitem ter _strings_ com _ints_
# dentro de um mesmo objeto, por exemplo.
conjunto_a.add("elemento")

# Temos 2 jeitos de remover elementos:
# - remove() causa erro caso o elemento não esteja no set;
# - discard() não causa erro caso o elemento não esteja no set.

# Não vai dar erro
conjunto_b.remove(3)

# Vai dar erro pois já removemos esse elemento e set não guarda duplicatas
# conjunto_b.remove(3)

# Não vai dar erro
conjunto_b.discard(3)

# Pop - remove e retorna um elemento aleatório do set
# - set é um objeto iterável, mas não conseguimos garantir em que ordem os
#   elementos serão acessados.
# - A função pop () é útil quando queremos trabalhar com algum elemento do
#   set, mas não sabemos de antemão quais elementos estão dentro dele.
some_element = conjunto_a.pop()

# clear() remove todos os itens do set
# conjunto_b.clear()

# Consulta
# A consulta é feita com o operador "in"
if 2 in conjunto_a:
    print("2 está em A")

if 7 not in conjunto_a:
    print("7 não está em A")

# retorna True se o set1 não tem nenhum elemento em comum com set2,
# ou seja, se a intersecção é vazia;
intersecção = conjunto_a.isdisjoint(conjunto_b)
print(intersecção)

# verifica se set1 é um subconjunto de set2,
# ou seja, se todo elemento de set1 está em set2;
subconjunto = conjunto_a.issubset(conjunto_b)
print(subconjunto)

# verifica se set1 é um superconjunto de set2,
# ou seja, se todos os elementos de set2 estão em set1.
# A diferença de um superconjunto e de um subconjunto é
# que no superconjunto podem haver outros elementos,
# além dos elementos de set2 já presentes dentro de set1.
# Já no subconjunto não;
superconjunto = conjunto_a.issuperset(conjunto_b)
print(superconjunto)


# verifica se os conjuntos são iguais,
# ou seja, se todos os elementos de set1 estão em set2 e
# se todos os elementos de set2 estão em set1.
# Lembre-se que a ordem não importa.
# Não existe função dedicada para a comparação de igualdade.
print(conjunto_a == conjunto_b)


# Os métodos a seguir operam sobre dois ou mais conjuntos por vez. Cada uma das operações nessa seção tem a sua versão que modifica o set original com o resultado da operação e não retorna nada:
# set.union(others): retorna a união entre o set e todos os other passados;
# set.intersection(others): retorna a intersecção entre set e todos os other passados;
# set.difference(others): retorna a diferença entre set e todos os other passados;
# set.symmetric_difference(others): retorna todos os elementos que estejam em um mas não estejam no outro conjunto (opera apenas sobre dois conjuntos).
