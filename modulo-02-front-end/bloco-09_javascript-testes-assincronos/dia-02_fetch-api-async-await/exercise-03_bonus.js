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
