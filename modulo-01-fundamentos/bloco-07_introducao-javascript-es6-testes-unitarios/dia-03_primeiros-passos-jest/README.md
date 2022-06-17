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
test('returns the array [1, 2, 3, 4] without the item 3', () => {
  const array = [1,2,3,4];
  const item = 3;
  expect(myRemove(array, item)).toEqual([1,2,4]);
});
```

2. Verifique se a chamada `myRemove([1, 2, 3, 4], 3)` **não** retorna o array [1, 2, 3, 4].
```
test('does not return the array [1, 2, 3, 4] with the item 3', () => {
  const array = [1,2,3,4];
  const item = 3;
  expect(myRemove(array, item)).not.toEqual([1,2,3,4]);
});
```

3. Verifique se a chamada `myRemove([1, 2, 3, 4], 5)` retorna o array esperado.
```
test('returns the array [1, 2, 3, 4] when the item is 5', () => {
  const array = [1,2,3,4];
  const item = 5;
  expect(myRemove(array, item)).toEqual([1,2,3,4]);
});
```

## &#9989; Exercício 03
- A função `myFizzBuzz(num)` recebe um número `num` e retorna "fizzbuzz" se o número for divisível por 3 e 5, retorna "fizz" se for divisível apenas por 3, retorna "buzz" se divisível apenas por 5, retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso `num` não seja um número
```
function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}
```
1. Faça uma chamada com um **número divisível por 3 e 5** e verifique se o retorno é o esperado.
```
test('when num is divisible by 3 and 5, returns "fizzbuzz"', () => {
  const num = 15;
  expect (myFizzBuzz(num)).toBe('fizzbuzz');
});
```

2. Faça uma chamada com um **número divisível por 3** e verifique se o retorno é o esperado.
```
test('when num is only divisible by 3, returns "fizz"', () => {
  const num = 3;
  expect (myFizzBuzz(num)).toBe('fizz');
});
```

3. Faça uma chamada com um **número divisível por 5** e verifique se o retorno é o esperado.
```
test('when num is only divisible by 5, returns "buzz"', () => {
  const num = 5;
  expect (myFizzBuzz(num)).toBe('buzz');
});
```

4. Faça uma chamada com um **número que não é divisível por 3 ou 5** e verifique se o retorno é o esperado.
```
test('when num is not divisible by 3 nor 5, returns num', () => {
  const num = 2;
  expect (myFizzBuzz(num)).toBe(num);
});
```

5. Faça uma chamada com um parâmetro que **não é um número** e verifique se o retorno é o esperado.
```
test('when num is not a number, returns false', () => {
  const num = 'not a number';
  expect (myFizzBuzz(num)).toBeFalsy();
});
```