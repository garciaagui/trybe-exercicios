const names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function checkLongestName(names) {
  let longestName = names[0];
  for (let i = 0; i < names.length; i += 1) {
    if (names[i].length > longestName.length) {
      longestName = names[i]
    }
  }
  return longestName;
}

console.log(checkLongestName(names));
