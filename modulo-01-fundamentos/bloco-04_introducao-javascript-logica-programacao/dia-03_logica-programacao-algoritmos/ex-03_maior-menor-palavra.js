// Exercício 3 - Maior E menor palavra

let array = ['java', 'javascript', 'python', 'html', 'css'];
let longerLength = 0;
let longerString = '';
let shorterLength = 0;
let shorterString = '';

// Maior palavra

for (index = 0; index < array.length; index += 1) {

  if (array[index].length > longerLength) {
    longerLength = array[index].length;
    longerString = array[index];
  }

}

console.log(`A maior palavra contida no array é: ${longerString}.`);


// Menor palavra

for (index = 0; index < array.length; index += 1) {

  if (index === 0) {
    shorterLength = array[index].length;
    shorterString = array[index];
  }

  if (array[index].length < shorterLength) {
    shorterLength = array[index].length;
    shorterString = array[index];
  }

}

console.log(`A menor palavra contida no array é: ${shorterString}.`)