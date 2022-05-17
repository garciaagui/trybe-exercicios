// Exercício 9 - Dividido por 2

let nums = [];
let div = 0;

for (index = 0; index < 25; index += 1) {
  nums.push(index+1);
}

for (index = 0; index < nums.length; index += 1) {
  div = nums[index]/2;
  console.log(`- ${nums[index]}/2 = ${div}.`);
}

//
