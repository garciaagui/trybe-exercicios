// Definindo Variáveis
const bodyTag = document.getElementsByTagName('body')[0];
const bgColorInput = document.getElementById('bg-color-input');
const bgColorBtn = document.getElementById('bg-color-btn');
const textColorInput = document.getElementById('text-color-input')
const textColorBtn = document.getElementById('text-color-btn')
const fontSizeInput = document.getElementById('font-size-input');
const fontSizeBtn = document.getElementById('font-size-btn');
const lineHeightInput = document.getElementById('line-height-input');
const lineHeightBtn = document.getElementById('line-height-btn');
const fontFamilyInput = document.getElementById('font-family-input');
const fontFamilyBtn = document.getElementById('font-family-btn');

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

function changeFontSize() {
  bodyTag.style.fontSize = fontSizeInput.value;
  localStorage.setItem('fontSize', fontSizeInput.value);
  fontSizeInput.value = '';
}

function changeLineHeight() {
  bodyTag.style.lineHeight = lineHeightInput.value;
  localStorage.setItem('lineHeight', lineHeightInput.value);
  lineHeightInput.value = '';
}

function changeFontFamily() {
  bodyTag.style.fontFamily = fontFamilyInput.value;
  localStorage.setItem('fontFamily', fontFamilyInput.value);
  fontFamilyInput.value = '';
}

function applyPreferences () {
  bodyTag.style.backgroundColor = localStorage.getItem('backgroundColor');
  bodyTag.style.color = localStorage.getItem('textColor');
  bodyTag.style.fontSize = localStorage.getItem('fontSize');
  bodyTag.style.lineHeight = localStorage.getItem('lineHeight');
  bodyTag.style.fontFamily = localStorage.getItem('fontFamily');
}

// Ativando Funções
bgColorBtn.addEventListener('click', changeBackgroundColor);
textColorBtn.addEventListener('click', changeTextColor);
fontSizeBtn.addEventListener('click', changeFontSize);
lineHeightBtn.addEventListener('click', changeLineHeight);
fontFamilyBtn.addEventListener('click', changeFontFamily);
applyPreferences();
