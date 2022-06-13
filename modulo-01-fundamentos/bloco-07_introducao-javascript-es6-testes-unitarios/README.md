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

## &#9989; Exercícios - Parte II
1. Crie uma função que receba um número e retorne seu fatorial.
```
const number = 10;

const factorial = (n) => {
  let total = 1;
  if (n === 0) return `Factorial -> ${n}! = ${total}.`;
  else {
    for (let i = 1; i <= n; i += 1) {
      total *= i;
    }
  return `Factorial -> ${n}! = ${total}.`;
  }
}

console.log(factorial(number));
```
- Bônus (opcional): tente fazer o mesmo exercício de forma recursiva.
```
const recursiveFactorial = (n) => n > 1 ? n * recursiveFactorial(n - 1) : 1;

console.log(`Recursive Factorial -> ${number}! = ${recursiveFactorial(number)}.`);
```

2. Crie uma função que receba uma frase e retorne a maior palavra.
```
const phrase = "I can't get no satisfaction";

const getLongestWord = (phrase) => {
  const splitPhrase = phrase.split(' ')
  let longestWord = splitPhrase[0];
  for (let word in splitPhrase) {
    (splitPhrase[word].length > longestWord.length) ? longestWord = splitPhrase[word] : longestWord;
  }
  return `A maior palavra da frase é: '${longestWord}'.`;
}

console.log(getLongestWord(phrase));
```

3. Crie uma página com um contador de cliques. Sua página deve conter:
- Um `button` ao qual será associado um `event listener`;
- Uma variável `clickCount` no arquivo JavaScript que acumule o número de clicks no botão;
- Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável `clickCount` é atualizada.
```
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exercício 03 - Parte II</title>
</head>
<body>
  <header>
    <h1>Contador de Cliques &#128433;&#65039;</h1>
  </header>
  <main>
    <button id="click-btn">Clique!!!</button>
    <p id="click-score"></p>
  </main>

  <script>
    const clickButton = document.querySelector('#click-btn');
    const clickScore = document.querySelector('#click-score');
    let clickCount = 0;

    window.addEventListener('load', () => {
      clickScore.innerText = `Número de cliques: ${clickCount}.`;
    })

    clickButton.addEventListener('click', () => {
      clickCount += 1;
      clickScore.innerText = `Número de cliques: ${clickCount}.`;
    })

  </script>
</body>
</html>
```
