// Definindo Variáveis
const bodyTag = document.getElementsByTagName('body')[0]
const bgColorInput = document.getElementById('bg-color-input');
const bgColorBtn = document.getElementById('bg-color-btn');
const textColorInput = document.getElementById('text-color-input')
const textColorBtn = document.getElementById('text-color-btn')

// Definindo Funções
function changeBackgroundColor() {
  bodyTag.style.backgroundColor = bgColorInput.value;
  localStorage.setItem('backgroundColor', bgColorInput.value);
  bgColorInput.value = '';
}

function changeTextColor() {
  bodyTag.style.color = textColorInput.value;
  localStorage.setItem('textColor', textColorInput.value);
  textColorInput.value = '';
}

// Ativando Funções
bgColorBtn.addEventListener('click', changeBackgroundColor);
textColorBtn.addEventListener('click', changeTextColor);

// Preferências do usuário
bodyTag.style.backgroundColor = localStorage.getItem('backgroundColor');
bodyTag.style.color = localStorage.getItem('textColor');