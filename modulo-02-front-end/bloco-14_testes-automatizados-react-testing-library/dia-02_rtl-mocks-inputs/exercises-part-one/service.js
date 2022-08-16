const fetch = require('node-fetch');

const generateRandomNumber = () => Math.floor(Math.random() * 100);

const returnsUppercase = (str) => str.toUpperCase();

const returnsFirstLetter = (str) => str[0];

const joinsTwoWords = (firstStr, secondStr) => firstStr+secondStr;

const fetchDogImage = () => {
    const url = 'https://dog.ceo/api/breeds/image/random';
    fetch(url)
      .then((response) => response.json())
      .then((data) => data);
}

module.exports = { 
  generateRandomNumber,
  returnsUppercase,
  returnsFirstLetter,
  joinsTwoWords,
  fetchDogImage,
}