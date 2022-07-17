// const fetch = require('node-fetch');
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = (container) => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => container.innerHTML = data.joke);
};

window.onload = () => {
  const jokeContainer = document.getElementById('jokeContainer');
  jokeContainer.style.color = 'red';
  fetchJoke(jokeContainer);
}
