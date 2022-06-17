const numbers = [2, 3, 2, 5, 8, 2, 3];

function checkRepeats(array) {
  let repeats = 0;
  let mostRepeated = 0;
  let repeatedNumber = 0;
  for (let index = 0; index < array.length; index += 1) {
    repeats = 0;
    for (let i = 0; i < array.length; i += 1) {
      if (array[index] === array[i]) {
        repeats += 1;
      }
    }
    if (repeats > mostRepeated) {
      mostRepeated = repeats;
      repeatedNumber = array[index];
    }
  }
  return repeatedNumber;
}

console.log(checkRepeats(numbers))