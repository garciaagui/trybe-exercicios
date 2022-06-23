const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (namesArray) => {
  return namesArray.find((name) => name.length === 5);
}

console.log(findNameWithFiveLetters(names));
