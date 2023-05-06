// Exercício Bônus 3 - Triângulo Retângulo Invertido

let n = 10;
let form = '*';
let blank = " ";

for (index = 1; index <= n; index += 1) {

  console.log((blank.repeat((n-index)))+(form.repeat(index)));

}