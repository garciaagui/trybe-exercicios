const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten(acc, value) {
  return acc.concat(value);
}

const newArray = arrays.reduce(flatten, [])

console.log(newArray);