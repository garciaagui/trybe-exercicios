# &#9889; Atividades de Fixação & Exercícios | Bloco 09 - Dia 02

## &#9989; Exercício 01 - Gerador de Piadas Ruins
- API utilizada: https://icanhazdadjoke.com/api;
- **OBJETIVO**: fazer a piada aparecer no DOM da página;
- Estruturas base fornecidas - HTML e JavaScript, respectivamente:
```
<!DOCTYPE html>
<html>
  <head>
    <title>Best jokes ever</title>
    <script src="apiScript.js" ></script>
  </head>
  <body>
    <h1>Get ready for a great joke!</h1>
    <h2 id="jokeContainer"></h2>
  </body>
</html>
```
```
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!
};

window.onload = () => fetchJoke();
```
- Resposta:
```
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
```

## &#9989; Exercício 02 - Top 10 Criptomoedas
- API utilizada: https://docs.coincap.io/;
- **OBJETIVO**: Mostrar as 10 primeiras criptomoedas;
- Resposta - HTML e JavaScript, respectivamente:
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Crypto</title>
</head>
<body>
  <h1>Crypto List - Top 10 Cryptocurrencies</h1>
  <ul id="container-list" style="font-size: 18px;"></ul>
  <script src="./exercise-02_crypto.js"></script>
</body>
</html>
```
```
const url = 'https://api.coincap.io/v2/assets';
const list = document.getElementById('container-list');

const formatCurrency = (value) => {
  const format = { minimumFractionDigits: 2, style: 'currency', currency: 'USD' };
  return value.toLocaleString('en-US', format);
}

const createListItems = (content) => {
  return content.data.reduce((htmlList, { rank, symbol, name, priceUsd }) => {
    if (rank <= 10) {
      htmlList += `<li>${name} (${symbol}): ${formatCurrency(parseFloat(priceUsd))}</li>`;
    }
    return htmlList;
  }, '');
}

const fetchCrypto = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    list.innerHTML = createListItems(data);
  }
  catch(error) {
    list.style.color = 'red';
    list.innerHTML = 'ERRO! Não foi possível gerar a lista. Tente novamente mais tarde.'
  }
}

fetchCrypto();
```

## &#9989; Exercício 03 (Bônus) - Conversor de USD para BRL
- API utilizada: https://github.com/fawazahmed0/currency-api#readme;
- OBJETIVO: Converter o preço das criptomoedas do exercício anterior para a nossa moeda local ao invés de mostrar o seu valor em dólar.
- Resposta - HTML e JavaScript, respectivamente:
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Crypto</title>
</head>
<body>
  <h1>Crypto List - USD converted to BRL</h1>
  <ul id="container-list" style="font-size: 18px;"></ul>
  <script src="./exercise-03_bonus.js"></script>
</body>
</html>
```
```
const cryptoUrl = 'https://api.coincap.io/v2/assets';
const converterUrl = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json';
const list = document.getElementById('container-list');

const convertUSDtoBRL = async () => {
  try {
    const response = await fetch(converterUrl);
    const data = await response.json();
    return data.usd.brl;
  } 
  catch (error){
    return error;
  } 
}

const formatCurrency = (value) => {
  const format = { minimumFractionDigits: 2, style: 'currency', currency: 'brl' };
  return value.toLocaleString('pt-BR', format);
}

const createListItems = (content, currency) => {
  return content.data.reduce((listItems, { rank, symbol, name, priceUsd }) => {
    if (rank <= 10) {
      listItems += `<li>${name} (${symbol}): ${formatCurrency(parseFloat(priceUsd * currency))}</li>`;
    }
    return listItems;
  }, '');
}

const fetchCrypto = async () => {
  try {
    const brl = await convertUSDtoBRL()
    const response = await fetch(cryptoUrl);
    const data = await response.json();
    list.innerHTML = createListItems(data, brl);
  }
  catch(error) {
    list.style.color = 'red';
    list.innerHTML = error;
  }
}

fetchCrypto();
```
