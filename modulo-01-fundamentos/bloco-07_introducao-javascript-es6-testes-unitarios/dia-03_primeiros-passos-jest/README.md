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
1. Teste se o retorno de `sum(4, 5)` é **9**;
```
test('returns 9 when sum(4,5)', () => {
  expect(sum(4,5)).toEqual(9);
})
```

2. Teste se o retorno de `sum(0, 0)` é **0**;
```
test('returns 0 when sum(0,0)', () => {
  expect(sum(0,0)).toEqual(0);
})
```

3. Teste se a função `sum` lança um **erro** quando os **parâmetros são 4 e "5"**(string 5);
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
1. Verifique se a chamada `myRemove([1, 2, 3, 4], 3)` retorna o array esperado;
```
test('returns the array [1, 2, 3, 4] without the item 3', () => {
  const array = [1,2,3,4];
  const item = 3;
  expect(myRemove(array, item)).toEqual([1,2,4]);
});
```

2. Verifique se a chamada `myRemove([1, 2, 3, 4], 3)` **não** retorna o array [1, 2, 3, 4];
```
test('does not return the array [1, 2, 3, 4] with the item 3', () => {
  const array = [1,2,3,4];
  const item = 3;
  expect(myRemove(array, item)).not.toEqual([1,2,3,4]);
});
```

3. Verifique se a chamada `myRemove([1, 2, 3, 4], 5)` retorna o array esperado.
```
test('returns the array [1, 2, 3, 4] with all its values when the item is 5', () => {
  const array = [1,2,3,4];
  const item = 5;
  expect(myRemove(array, item)).toEqual([1,2,3,4]);
});
```

## &#9989; Exercício 03
- A função `myFizzBuzz(num)` recebe um número `num` e retorna "fizzbuzz" se o número for divisível por 3 e 5, retorna "fizz" se for divisível apenas por 3, retorna "buzz" se divisível apenas por 5, retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso `num` não seja um número.
```
function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}
```
1. Faça uma chamada com um **número divisível por 3 e 5** e verifique se o retorno é o esperado;
```
test('when num is divisible by 3 and 5, returns "fizzbuzz"', () => {
  const num = 15;
  expect (myFizzBuzz(num)).toBe('fizzbuzz');
});
```

2. Faça uma chamada com um **número divisível por 3** e verifique se o retorno é o esperado;
```
test('when num is only divisible by 3, returns "fizz"', () => {
  const num = 3;
  expect (myFizzBuzz(num)).toBe('fizz');
});
```

3. Faça uma chamada com um **número divisível por 5** e verifique se o retorno é o esperado;
```
test('when num is only divisible by 5, returns "buzz"', () => {
  const num = 5;
  expect (myFizzBuzz(num)).toBe('buzz');
});
```

4. Faça uma chamada com um **número que não é divisível por 3 ou 5** e verifique se o retorno é o esperado;
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

## &#9989; Exercício 04
- Para as funções `encode` e `decode` (abaixo) crie os testes em Jest a seguir.
```
function encode(decodedPhrase) {
  let coded = '';
  for (let i = 0; i < decodedPhrase.length; i += 1) {
    let auxiliar = decodedPhrase[i];
    switch (auxiliar) {
    case 'a': auxiliar = 1; break;
    case 'e': auxiliar = 2; break;
    case 'i': auxiliar = 3; break;
    case 'o': auxiliar = 4; break;
    case 'u': auxiliar = 5; break;
    default:
    }
    coded += auxiliar;
  }
  return coded;
}

function decode(codedPhrase) {
  let decoded = '';
  for (let i = 0; i < codedPhrase.length; i += 1) {
    let auxiliar = codedPhrase[i];
    switch (auxiliar) {
    case '1': auxiliar = 'a'; break;
    case '2': auxiliar = 'e'; break;
    case '3': auxiliar = 'i'; break;
    case '4': auxiliar = 'o'; break;
    case '5': auxiliar = 'u'; break;
    default:
    }
    decoded += auxiliar;
  }
  return decoded;
}
```
1. Teste se `encode` e `decode` são **funções**;
```
describe('The encode function' , () => {
  test('encode is a function' , () => {
    expect(typeof encode).toBe('function');
  });
});

describe('The decode function' , () => {
  test('decode is a function' , () => {
    expect(typeof decode).toBe('function');
  });
});
```
2. Para a função `encode` teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
```
describe('The encode function' , () => {
  test('converts the vowel "a" to the number 1 in the string' , () => {
    const string = 'car';
    expect(encode(string)).toBe('c1r');
  });
  test('converts the vowel "e" to the number 2 in the string' , () => {
    const string = 'leg';
    expect(encode(string)).toBe('l2g');
  });
  test('converts the vowel "i" to the number 3 in the string' , () => {
    const string = 'light';
    expect(encode(string)).toBe('l3ght');
  });
  test('converts the vowel "o" to the number 4 in the string' , () => {
    const string = 'owl';
    expect(encode(string)).toBe('4wl');
  });
  test('converts the vowel "u" to the number 5 in the string' , () => {
    const string = 'luck';
    expect(encode(string)).toBe('l5ck');
  });
});
```
3. Para a função `decode` teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente;
```
describe('The decode function' , () => {
  test('converts the number 1 to the vowel "a" in the string' , () => {
    const string = 'c1r';
    expect(decode(string)).toBe('car');
  });
  test('converts the number 2 to the vowel "e" in the string' , () => {
    const string = 'l2g';
    expect(decode(string)).toBe('leg');
  });
  test('converts the number 3 to the vowel "i" in the string' , () => {
    const string = 'l3ght';
    expect(decode(string)).toBe('light');
  });
  test('converts the number 4 to the vowel "o" in the string' , () => {
    const string = '4wl';
    expect(decode(string)).toBe('owl');
  });
  test('converts the number 5 to the vowel "u" in the string' , () => {
    const string = 'l5ck';
    expect(decode(string)).toBe('luck');
  });
});
```
4. Teste se as demais letras/números não são convertidos para cada caso;
```
describe('The encode function' , () => {
  test('does not convert the letter to a number if the letter is a consonant' , () => {
    const string = 'b-c-d-f-g-h-j-k-l-m-n-p-q-r-s-t-v-w-x-y-z'
    expect(encode(string)).toBe('b-c-d-f-g-h-j-k-l-m-n-p-q-r-s-t-v-w-x-y-z');
  });
});

describe('The decode function' , () => {
  test('does not convert the number to a vowel if the number is 0 or greater than 5' , () => {
    const string = '0 2 6 7 1 8 3 5';
    expect(decode(string)).toBe('0 e 6 7 a 8 i u');
  });
});
```
5. Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.
```
describe('The encode function' , () => {
  test('the output has the same number of characters as the input' , () => {
    const string = 'hello';
    const stringLength = string.length;
    expect((encode(string)).length).toEqual(stringLength);
  });
});

describe('The decode function' , () => {
  test('the output has the same number of characters as the input' , () => {
    const string = 'h2ll4';
    const stringLength = string.length;
    expect((decode(string)).length).toEqual(stringLength);
  });
});
```

## &#9989; Exercício 05
- A função `techList` recebe como parâmetros um array contendo uma lista de tecnologias e uma string com um nome. Para cada tecnologia no array a função cria, em ordem alfabética, um objeto com a seguinte estrutura:
```
{
  tech: 'nomeTecnologia',
  name: name,
}
```
- Implemente a função `techList` a partir dos testes abaixo. É importante nunca alterar os testes ou as variáveis já escritas no código.
```
describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});
```
- Resposta:
```
function techList(techListArray, personName) {
  if (techListArray.length === 0 || personName === 0) return 'Vazio!';
  techListArray = techListArray.sort();
  let techPerson = [];
  for (let i = 0; i < techListArray.length; i += 1) {
    techPerson.push({
      tech: techListArray[i],
      name: personName,
    });
  }
  return techPerson;
}
```

## &#9989; Exercício 06
- A função `hydrate` recebe uma string no formato "numero bebida", e retorna a sugestão de quantos copos de água você deve beber para se hidratar. Para cada bebida, deve-se tomar um copo de água para não ter ressaca. Exemplo:
```
// string recebida
'1 cerveja'
// retorno da função
'1 copo de água'

// string recebida
'1 cerveja, 2 shots e 1 catuaba'
// retorno da função
'4 copos de água'

// string recebida
'2 caipirinhas'
// retorno da função
'2 copos de água'
```
- Implemente a função `hydrate` a partir dos testes abaixo. É importante nunca alterar os testes ou as variáveis já escritas no código.
```
describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});
```
- Resposta:
```
function hydrate(drinksDrunk) {
  let extractNumbers = drinksDrunk.match(/\d+/g).map(Number);
  let drinksNumber = 0;
  let glassesWater = 0;
  for (let i = 0; i < extractNumbers.length; i += 1) {
    drinksNumber += extractNumbers[i];
  }
  if (drinksNumber === 1) {
    glassesWater = `${drinksNumber} copo de água`;
  } else {
    glassesWater = `${drinksNumber} copos de água`;
  }
  return glassesWater;
}
```

## &#9989; Exercício Bônus
