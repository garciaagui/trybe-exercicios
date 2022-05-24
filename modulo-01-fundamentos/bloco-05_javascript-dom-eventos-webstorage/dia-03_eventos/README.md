# &#9889; Atividades de Fixação & Exercícios | Bloco 05 - Dia 03

## &#9989; Atividade de Fixação - Conheça o addEventListener

1. Copie esse arquivo e edite apenas ele;
- Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
- Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
- Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
```
function changeClassName(addClassName) {
  const hadClassName = document.querySelector('.tech');
  hadClassName.classList.remove('tech');
  addClassName.target.classList.add('tech');
}
firstLi.addEventListener('click', changeClassName);
secondLi.addEventListener('click', changeClassName);
thirdLi.addEventListener('click', changeClassName);
```

3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento com a classe 'tech';
```
function changeContent() {
  const techClass = document.querySelector('.tech');
  techClass.innerHTML = input.value;
}
input.addEventListener('keyup', changeContent)
```

4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele redirecione para alguma página;
- Que tal redirecionar para seu portfólio?
```
function redirectPage() {
  window.open('https://garciaagui.github.io/', '_blank');
}
myWebpage.addEventListener('dblclick', redirectPage);
```

5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere a cor do mesmo;
```
const title = document.getElementsByTagName('h1')[0];
function changeTitleColor (event) {
  event.target.style.color = 'rgb(0, 109, 251)';
}
title.addEventListener('mouseover', changeTitleColor);
```
