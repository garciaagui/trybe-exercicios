// Exercício 2 - Inversão de Palavra

let word = 'tryber';
let reversedWord = '';

for (index = (word.length-1); index >= 0; index -= 1) {
  // console.log(word[index]);
  reversedWord += word[index];
}

console.log(`O reverso de ${word} é: ${reversedWord}.`);