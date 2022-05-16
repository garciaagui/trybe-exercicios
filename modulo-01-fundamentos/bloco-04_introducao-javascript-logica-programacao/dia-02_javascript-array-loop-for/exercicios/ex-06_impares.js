// Exercício 6 - Ímpares

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let odd = 0;

for (index = 0; index < numbers.length; index += 1) {

  if (numbers[index]%2 === 1) {
    // console.log(`${numbers[index]} é ímpar!`);
    odd += 1;
  }

}

if (odd > 0) {
  console.log(`Há ${odd} números ímpares no array numbers.`);

} else {
  console.log(`Nenhum valor ímpar encontrado.`);
}