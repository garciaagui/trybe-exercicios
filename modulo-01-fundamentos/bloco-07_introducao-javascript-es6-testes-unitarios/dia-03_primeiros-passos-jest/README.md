# &#9889; Atividades de Fixação & Exercícios | Bloco 07 - Dia 03

## &#9989; Exercício 01
- A função `sum(a, b)` retorna a soma do parâmetro a com o b:
```
function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}
```
1. Teste se o retorno de `sum(4, 5)` é **9**.
```
test('returns 9 when sum(4,5)', () => {
  expect(sum(4,5)).toEqual(9);
})
```

2. Teste se o retorno de `sum(0, 0)` é **0**.
```
test('returns 0 when sum(0,0)', () => {
  expect(sum(0,0)).toEqual(0);
})
```

3. Teste se a função `sum` lança um **erro** quando os **parâmetros são 4 e "5"**(string 5).
```
test('throws an error when a string is as a parameter', () => {
  expect(() => sum(4,'5')).toThrow(Error);
})
```

4. Teste se a **mensagem de erro** é "parameters must be numbers" quando realizar a chamada `sum(4, "5")`.
```
test('throws the error message "parameters must be numbers" when a string is as a parameter', () => {
  expect(() => sum(4,'5')).toThrowError('parameters must be numbers');
})
```

## &#9989; Exercício 02
- A função `myRemove(arr, item)` recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
```
function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}
```
1. Verifique se a chamada `myRemove([1, 2, 3, 4], 3)` retorna o array esperado.
```

```

2. Verifique se a chamada `myRemove([1, 2, 3, 4], 3)` **não** retorna o array [1, 2, 3, 4].
```

```

3. Verifique se a chamada `myRemove([1, 2, 3, 4], 5)` retorna o array esperado.
```

```
