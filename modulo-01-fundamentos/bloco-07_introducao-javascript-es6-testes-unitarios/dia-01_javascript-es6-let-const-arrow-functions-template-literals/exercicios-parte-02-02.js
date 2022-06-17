const phrase = "I can't get no satisfaction";

const getLongestWord = (phrase) => {
  const splitPhrase = phrase.split(' ')
  let longestWord = splitPhrase[0];
  for (let word in splitPhrase) {
    (splitPhrase[word].length > longestWord.length) ? longestWord = splitPhrase[word] : longestWord;
  }
  return `A maior palavra da frase é: '${longestWord}'.`;
}

console.log(getLongestWord(phrase));