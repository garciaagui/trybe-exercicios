// Bônus: Exercício 3 - Novo Array

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newNumbers = [];

for (let index = 0; index < numbers.length; index += 1) {

  if ((index+2) > numbers.length) {
    newNumbers.push(numbers[index]*2)
    // console.log(newNumbers)

  } else {
    newNumbers.push(numbers[index]*numbers[index+1])
    // console.log(newNumbers)

  }

}

console.log(`Array original: ${numbers}.`)
console.log(`Array nova: ${newNumbers}.`)