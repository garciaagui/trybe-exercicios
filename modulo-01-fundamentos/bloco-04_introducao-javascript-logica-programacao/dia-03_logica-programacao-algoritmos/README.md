# &#9889; Exercícios | Bloco 04 - Dia 03

## &#9989; Exercícios do Dia
1. O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
```
O fatorial é representado pelo sinal !
4! = 4 x 3 x 2 x 1 = 24
```
- Com base nessas informações, crie um algoritmo que retorne o **fatorial de 10**.
```
let number = 10;
let fatorial = 0;


for (let index = number; index > 0; index -= 1) {

  if (index === number) {
    fatorial = number;

  } else {
    fatorial = fatorial * index;
  }

  // console.log(`${sum}`);
}

console.log(`\n${number}! é igual a : ${fatorial}.`);

//Resultado esperado: "10! é igual a : 3628800."
```

2. Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.
```
let word = 'tryber';
```
- Resolução:
```
let word = 'tryber';
let reversedWord = '';

for (index = (word.length-1); index >= 0; index -= 1) {
  // console.log(word[index]);
  reversedWord += word[index];
}

console.log(`O reverso de ${word} é: ${reversedWord}.`);

// Resultado esperado: "O reverso de tryber é: rebyrt."
```

3. Considere o array de strings abaixo:
```
let array = ['java', 'javascript', 'python', 'html', 'css'];
```
Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
- Agoritmo 1 - Maior palavra do array:
```
let array = ['java', 'javascript', 'python', 'html', 'css'];
let longerLength = 0;
let longerString = '';

for (index = 0; index < array.length; index += 1) {

  if (array[index].length > longerLength) {
    longerLength = array[index].length;
    longerString = array[index];
  }

}

console.log(`A maior palavra contida no array é: ${longerString}.`);

// Resultado esperado: "A maior palavra contida no array é: javascript."
```

- Agoritmo 2 - Menor palavra do array:
```
let array = ['java', 'javascript', 'python', 'html', 'css'];
let shorterLength = 0;
let shorterString = '';

for (index = 0; index < array.length; index += 1) {

  if (index === 0) {
    shorterLength = array[index].length;
    shorterString = array[index];
  }

  if (array[index].length < shorterLength) {
    shorterLength = array[index].length;
    shorterString = array[index];
  }

}

console.log(`A menor palavra contida no array é: ${shorterString}.`)

// Resultado esperado: "A menor palavra contida no array é: css."
```

4. Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.
```
let biggestPrime = 0;
let divs = 0;


for (index = 0; index <= 50; index += 1) {

  divs = 0;

  for (i = 0; i <= index; i += 1) {

    if (index%i === 0) {

      divs += 1;
    }
  }

  if (divs === 2) {
    if (index > biggestPrime) {
      biggestPrime = index;
    }
  }
}

console.log(`De 0 a 50, o maior número PRIMO é: ${biggestPrime}.`);

// Resultado esperado: "De 0 a 50, o maior número PRIMO é: 47."
```

## &#9989; Exercícios Bônus

1. Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:
```
n = 5

*****
*****
*****
*****
*****
```
- Resolução:
```
let n = 10;
let form = '*';

for (index = 0; index < n; index += 1) {

  console.log(form.repeat(n));

}

// Resultado esperado:
//**********
//**********
//**********
//**********
//**********
//**********
//**********
//**********
//**********
//**********
```


2. Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
```
n = 5

*
**
***
****
*****
```

3. Agora inverta o lado do triângulo. Por exemplo:
```
n = 5

    *
   **
  ***
 ****
*****
```
> Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.

4. Depois, faça uma pirâmide com n asteriscos de base:
```
n = 5

  *
 ***
*****
```

5. Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
```
Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
n = 7

   *
  * *
 *   *
*******
```


6. Faça um programa que diz se um número definido numa variável é primo ou não.
- Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.
> Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.