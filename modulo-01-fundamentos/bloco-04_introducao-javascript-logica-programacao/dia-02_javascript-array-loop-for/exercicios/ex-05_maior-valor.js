// Exercício 5 - Maior Valor

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let biggerNumber = 0;

for (index = 0; index < numbers.length; index += 1) {

  if (numbers[index] > biggerNumber) {
    biggerNumber = numbers[index];

  } else {
    biggerNumber = biggerNumber;
  
  }

}

console.log(`O maior valor contido no array numbers é o: ${biggerNumber}.`)