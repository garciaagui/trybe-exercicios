const generateRandomNumber = () => Math.floor(Math.random() * 100);

const returnsUppercase = (str) => str.toUpperCase();

const returnsFirstLetter = (str) => str[0];

const joinsTwoWords = (firstStr, secondStr) => firstStr+secondStr;

module.exports = { 
  generateRandomNumber,
  returnsUppercase,
  returnsFirstLetter,
  joinsTwoWords,
}