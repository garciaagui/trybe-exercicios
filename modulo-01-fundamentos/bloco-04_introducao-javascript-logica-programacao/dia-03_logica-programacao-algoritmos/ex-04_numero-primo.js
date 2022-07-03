// Exercício 4 - Maior número Primo

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