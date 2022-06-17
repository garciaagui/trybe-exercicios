const numbers = [2, 3, 6, 7, 10, 1];

function checkHighestValueIndex (array) {
  let highestValue = array[0];
  let highestValueIndex = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > highestValue) {
      highestValue = array[i];
      highestValueIndex = i;
    }
  }
  return highestValueIndex;
}

console.log(checkHighestValueIndex(numbers));