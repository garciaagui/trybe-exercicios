const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten(acc, curr) {
  return acc.concat(curr);
}

const flattenedArray = arrays.reduce(flatten, []);

console.log(flattenedArray);