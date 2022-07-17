// const fetch = require('node-fetch');
const url = 'https://api.coincap.io/v2/assets';
const list = document.getElementById('container-list');

const formatCurrency = (value) => {
  const format = { minimumFractionDigits: 2, style: 'currency', currency: 'USD' };
  return value.toLocaleString('en-US', format);
}

const createListItems = (content) => {
  return content.data.reduce((listItems, { rank, symbol, name, priceUsd }) => {
    if (rank <= 10) {
      listItems += `<li>${name} (${symbol}): ${formatCurrency(parseFloat(priceUsd))}</li>`;
    }
    return listItems;
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
    list.innerHTML = error;
  }
}

fetchCrypto();
