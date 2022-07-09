// const fetch = require('node-fetch');
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

const createListItems = (array, currency) => {
  return array.reduce((listItems, { rank, symbol, name, priceUsd }) => {
    if (rank <= 10) {
      const formattedPrice = parseFloat(priceUsd*currency).toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'brl' });
      listItems += `<li>${name} (${symbol}): ${formattedPrice}</li>`;
    }
    return listItems;
    }, '');
}

const fetchCrypto = async () => {
  try {
    const brl = await convertUSDtoBRL()
    await fetch(cryptoUrl)
      .then(response => response.json())
      .then(info => list.innerHTML = `<ul> ${createListItems(info.data, brl)} </ul>`);
  }
  catch (error) {
    list.innerHTML = error;
  }
}

fetchCrypto();
