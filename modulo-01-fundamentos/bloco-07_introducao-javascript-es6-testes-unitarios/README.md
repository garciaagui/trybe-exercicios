# &#9889; Atividades de Fixação & Exercícios | Bloco 07 - Dia 01

## &#9989; Exercícios - Parte I
1. Faça as modificações necessárias na função abaixo para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
```
function testingScope(escopo) {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true);
```
- Modifique a estrutura da função para que ela seja uma `arrow function`.
- Modifique as concatenações para `template literals`.
```
const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope}, ótimo, fui utilizada no escopo !`;
    return ifScope;
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    return elseScope;
  }
}

console.log(testingScope(true));
```

2. Copie o código abaixo e faça uma função que retorne o `array` **oddsAndEvens** em ordem crescente.
```
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.

console.log(oddsAndEvens); // será necessário alterar essa linha 😉
```
- Utilize `template literals` para que a chamada `console.log(<seu código>oddsAndEvens<seu código>)`; retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
```
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortArray = (array) => {
  for (let i1 = 0; i1 < array.length; i1 += 1) {
    for (let i2 = 0; i2 < i1; i2 += 1) {
      if (array[i1] < array[i2]) {
        let actualPosition = array[i1];
        array[i1] = array[i2];
        array[i2] = actualPosition;
      }
    }
  }
  return array;
}

console.log(`Os números ${sortArray(oddsAndEvens)} se encontram ordenados de forma crescente!`);
```
- Bônus (opcional): tente fazer o mesmo exercício utilizando o método `array.sort()`.
```
console.log(`Os números ${(oddsAndEvens.sort((a, b) => a - b))} se encontram ordenados de forma crescente!`);
```