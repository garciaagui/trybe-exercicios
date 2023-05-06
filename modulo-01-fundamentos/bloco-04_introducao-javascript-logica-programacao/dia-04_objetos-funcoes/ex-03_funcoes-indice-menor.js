const numbers = [2, 4, 6, 7, 10, 0, -3];

function checkLowestValueIndex (array) {
  let lowestValue = array[0];
  let lowestValueIndex = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] < lowestValue) {
      lowestValue = array[i];
      lowestValueIndex = i;
    }
  }
  return lowestValueIndex;
}

console.log(checkLowestValueIndex(numbers));