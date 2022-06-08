const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Método 1

const sortArray1 = (array) => {
  for (let i1 = 0; i1 < array.length; i1 += 1) {
    for (let i2 = 0; i2 < i1; i2 += 1) {
      if (array[i1] < array[i2]) {
        let actualPosition = array[i1];
        array[i1] = array[i2];
        array[i2] = actualPosition;
      }
    }
  }
  return array;
}

console.log(`Os números ${sortArray1(oddsAndEvens)} se encontram ordenados de forma crescente!`);

// Método 2 - Bônus

console.log(`Os números ${(oddsAndEvens.sort((a, b) => a - b))} se encontram ordenados de forma crescente!`);