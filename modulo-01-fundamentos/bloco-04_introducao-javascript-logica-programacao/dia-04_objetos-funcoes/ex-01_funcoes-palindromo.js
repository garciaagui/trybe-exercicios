const word = 'arara';

function checkPalindrome(word) {
  const reversedWord = word.split('').reverse().join('');
  if (word === reversedWord) {
    return true;
  } else {
    return false;
  }
}

console.log(checkPalindrome(word));