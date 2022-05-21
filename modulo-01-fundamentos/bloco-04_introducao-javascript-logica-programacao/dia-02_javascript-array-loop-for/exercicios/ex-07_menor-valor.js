// Exercício 7 - Menor Valor

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let leastNumber = numbers[0];

for (index = 0; index < numbers.length; index += 1) {

  if (leastNumber > numbers[index]) {
    leastNumber = numbers[index];
  }
}

console.log (`O menor valor contido no array numbers é o: ${leastNumber}.`);