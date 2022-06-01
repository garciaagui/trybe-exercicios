# &#9889; Exercícios | Bloco 05 - Dia 04

Imagine que você é a pessoa responsável por desenvolver uma página que servirá como um leitor de conteúdo escrito.
Esse conteúdo escrito pode ser uma página de livro, uma reportagem de revista ou uma nota de jornal online. 
Até aqui, nenhuma novidade, mas essa demanda exige que você aplique preferências das pessoas leitoras na página para melhorar a experiência de leitura dessas pessoas.
As pessoas devem ter o poder de alterar:
- Cor de fundo da tela;
- Cor do texto;
- Tamanho da fonte;
- Espaçamento entre as linhas do texto;
- Tipo da fonte (Font family).
Essas preferências devem ser salvas de forma que, ao retornar à página, as preferências que foram previamente configuradas possam ser aplicadas na tela.

1. Cor de fundo da tela.
```
<!-- HTML -->
<section id="bg-color-container">
  <label for="bg-color-input">Cor de Fundo</label>
  <input type="text" name="" id="bg-color-input" placeholder="Ex.: red, blue, green...">
  <button id="bg-color-btn">Definir</button>
</section>

<!-- JavaScript -->
const bodyTag = document.getElementsByTagName('body')[0];
const bgColorInput = document.getElementById('bg-color-input');
const bgColorBtn = document.getElementById('bg-color-btn');

function changeBackgroundColor() {
  bodyTag.style.backgroundColor = bgColorInput.value;
  localStorage.setItem('backgroundColor', bgColorInput.value);
  bgColorInput.value = '';
}

bgColorBtn.addEventListener('click', changeBackgroundColor);
```

2. Cor do texto.
```
<!-- HTML -->
<section id="text-color-container">
  <label for="text-color-input">Cor do Texto</label>
  <input type="text" name="" id="text-color-input" placeholder="Ex.: red, blue, green...">
  <button id="text-color-btn">Definir</button>
</section>

<!-- JavaScript -->
const textColorInput = document.getElementById('text-color-input');
const textColorBtn = document.getElementById('text-color-btn');

function changeTextColor() {
  bodyTag.style.color = textColorInput.value;
  localStorage.setItem('textColor', textColorInput.value);
  textColorInput.value = '';
}

textColorBtn.addEventListener('click', changeTextColor);
```

3. Tamanho da fonte.
```
<!-- HTML -->
<section id="font-size-container">
  <label for="font-size-input">Tamanho da Fonte</label>
  <input type="text" name="" id="font-size-input" placeholder="Ex.: 12px, large...">
  <button id="font-size-btn">Definir</button>
</section>

<!-- JavaScript -->
const fontSizeInput = document.getElementById('font-size-input');
const fontSizeBtn = document.getElementById('font-size-btn');

function changeFontSize() {
  bodyTag.style.fontSize = fontSizeInput.value;
  localStorage.setItem('fontSize', fontSizeInput.value);
  fontSizeInput.value = '';
}

fontSizeBtn.addEventListener('click', changeFontSize);
```

4. Espaçamento entre as linhas do texto.
```
<!-- HTML -->
<section id="line-height-container">
  <label for="line-height-input">Espaçamento entre as Linhas</label>
  <input type="text" name="" id="line-height-input" placeholder="Ex.: 20px, normal...">
  <button id="line-height-btn">Definir</button>
</section>

<!-- JavaScript -->
const lineHeightInput = document.getElementById('line-height-input');
const lineHeightBtn = document.getElementById('line-height-btn');

function changeLineHeight() {
  bodyTag.style.lineHeight = lineHeightInput.value;
  localStorage.setItem('lineHeight', lineHeightInput.value);
  lineHeightInput.value = '';
}

lineHeightBtn.addEventListener('click', changeLineHeight);
```

5. Tipo da fonte (Font family).
```
<!-- HTML -->
<section id="font-family-container">
  <label for="font-family-input">Família da Fonte</label>
  <input type="text" id="font-family-input" placeholder="Ex.: Arial, Times New Roman...">
  <button id="font-family-btn">Definir</button>
</section>

<!-- JavaScript -->
const fontFamilyInput = document.getElementById('font-family-input');
const fontFamilyBtn = document.getElementById('font-family-btn');

function changeFontFamily() {
  bodyTag.style.fontFamily = fontFamilyInput.value;
  localStorage.setItem('fontFamily', fontFamilyInput.value);
  fontFamilyInput.value = '';
}

fontFamilyBtn.addEventListener('click', changeFontFamily);
applyPreferences();
```

6. Aplicação das preferências, utilizando `localStorage.getItem`.
```
function applyPreferences() {
  bodyTag.style.backgroundColor = localStorage.getItem('backgroundColor');
  bodyTag.style.color = localStorage.getItem('textColor');
  bodyTag.style.fontSize = localStorage.getItem('fontSize');
  bodyTag.style.lineHeight = localStorage.getItem('lineHeight');
  bodyTag.style.fontFamily = localStorage.getItem('fontFamily');
}
applyPreferences();
```