# &#9889; Exercícios | Bloco 04 - Dia 03

## &#9989; Exercício 1 - Fatorial
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