// const fetch = require('node-fetch');
const url = 'https://api.coincap.io/v2/assets';
const list = document.getElementById('container-list');

const fetchCrypto = () => {
  fetch(url)
    .then(response => response.json())
    .then(info => {
      list.innerHTML = `<ul> 
      ${info.data
        .reduce((htmlList, { rank, symbol, name, priceUsd }) => {
        if (rank <= 10) {
          const formattedPrice = parseFloat(priceUsd).toLocaleString('en-US', { minimumFractionDigits: 2, style: 'currency', currency: 'USD' });
          htmlList += `<li>${name} (${symbol}): ${formattedPrice}</li>`;
        }
        return htmlList;
        }, '')
      } </ul>`;
    })
}

fetchCrypto();