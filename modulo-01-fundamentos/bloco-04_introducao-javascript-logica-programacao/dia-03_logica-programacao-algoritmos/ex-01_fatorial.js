// Exercício 1 - Fatorial

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