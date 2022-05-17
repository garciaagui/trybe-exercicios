// Exercício 5 - Maior Valor

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let biggestNumber = 0;

for (index = 0; index < numbers.length; index += 1) {

  if (numbers[index] > biggestNumber) {
    biggestNumber = numbers[index];

  } else {
    biggestNumber = biggestNumber;
  
  }

}

console.log(`O maior valor contido no array numbers é o: ${biggestNumber}.`)