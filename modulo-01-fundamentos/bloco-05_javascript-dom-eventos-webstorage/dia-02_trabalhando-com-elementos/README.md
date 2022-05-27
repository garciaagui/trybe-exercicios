# &#9889; Atividades de Fixação & Exercícios | Bloco 05 - Dia 02

## &#9989; Atividade de Fixação 01 - Buscando Elementos

1. Acesse o elemento **elementoOndeVoceEsta**.
```
const whereYouAre = document.getElementById('primeiroFilho').nextElementSibling;
```

2. Acesse **pai** a partir de **elementoOndeVoceEsta** e adicione uma *color* a ele.
```
const dad = whereYouAre.parentNode;
dad.style.color = 'blue';
```

3. Acesse o **primeiroFilhoDoFilho** e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
```
const firstChildOfSon = document.getElementById('primeiroFilhoDoFilho');
firstChildOfSon.innerHTML = 'Lorem ipsum dolor';
```

4. Acesse o **primeiroFilho** a partir de **pai**.
```
const firstSon = dad.firstElementChild;
```

5. Agora acesse o **primeiroFilho** a partir de **elementoOndeVoceEsta**.
```
whereYouAre.previousElementSibling;
```

6. Agora acesse o **texto** "Atenção!" a partir de **elementoOndeVoceEsta**.
```
whereYouAre.nextSibling;
```

7. Agora acesse o **terceiroFilho** a partir de **elementoOndeVoceEsta**.
```
const thirdSon = whereYouAre.nextElementSibling;
```

8. Agora acesse o **terceiroFilho** a partir de **pai**.
```
dad.children[2];
```

## &#9989; Atividade de Fixação 02 - Criando Elementos

1. Crie um *irmão* para **elementoOndeVoceEsta**.
```
const dad = document.getElementById('pai');
const newBrother = document.createElement('section');
newBrother.setAttribute('id', 'irmaoDoElementoOndeVoceEsta');
dad.appendChild(newBrother);
```

2. Crie um *filho* para **elementoOndeVoceEsta**.
```
const firstSon = document.getElementById('primeiroFilho');
const whereYouAre = firstSon.nextElementSibling;
const whereYouAreNewSon = document.createElement('section');
whereYouAreNewSon.setAttribute('id','novoFilhoDeElementoOndeVoceEsta');
whereYouAre.appendChild(whereYouAreNewSon);
```

3. Crie um *filho* para **primeiroFilhoDoFilho**.
```
const firstSonOfWhereYouAre = whereYouAre.firstElementChild
const firstSonOfFirstSon = document.createElement('section');
firstSonOfFirstSon.setAttribute('id', 'primeiroFilhoDePrimeiroFilho');
firstSonOfWhereYouAre.appendChild(firstSonOfFirstSon);
```

4. A partir desse **filho criado**, acesse **terceiroFilho**.
```
const thirdSon = firstSonOfFirstSon.parentElement.parentElement.nextElementSibling;
```

## &#9989; Atividade de Fixação 03 - Removendo Elementos
- Remova todos os elementos *filhos* de **paiDoPai** *exceto pai*, **elementoOndeVoceEsta** e **primeiroFilhoDoFilho**
- **Observação**: Os elementos criados e variáveis declaradas na Atividade anterior foram mantidas para realização desta Atvidade.

1. Removendo elementos *filhos* de **paiDoPai** - exceto **pai**.
```
const godfather = document.getElementById('paiDoPai');

for (let i = 0; i < godfather.childNodes.length; i += 1) {
  if (godfather.childNodes[i] !== dad) {
    godfather.removeChild(godfather.childNodes[i])
  }
}
```

2. Removendo os elementos *filhos* de **primeiroFilhoDoFilho**.
```
const whereYouAreFirstSon = whereYouAre.firstElementChild;

while (whereYouAreFirstSon.firstElementChild) {
  whereYouAreFirstSon.removeChild(whereYouAreFirstSon.firstElementChild);
}
```

3. Removendo os elementos *filhos* de **elementoOndeVoceEsta**.
```
while (whereYouAre.firstElementChild) {
  whereYouAre.removeChild(whereYouAre.firstElementChild);
}
```

## &#9989; Exercícios do Dia
### - Adição de elementos
1. Adicione a tag **h1** com o texto "Exercício 5.2 - JavaScript DOM" como **filho** da tag **body**;
```
const bodyTag = document.querySelector('body');
const mainTitle = document.createElement('h1');
mainTitle.innerHTML = 'Exercício 5.2 - JavaScript DOM';
bodyTag.appendChild(mainTitle);
```

2. Adicione a tag **main** com a *classe main-content* como **filho** da tag **body**;
```
const mainTag = document.createElement('main');
mainTag.setAttribute('class','main-content');
bodyTag.appendChild(mainTag);
```

3. Adicione a tag **section** com a *classe center-content* como **filho** da tag **main** criada no passo 2;
```
const centerSection = document.createElement('section');
centerSection.setAttribute('class','center-content');
mainTag.appendChild(centerSection);
```

4. Adicione a tag **p** como **filho** do **section** criado no passo 3 e coloque algum texto;
```
const firstParagraph = document.createElement('p');
firstParagraph.innerHTML = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi porro earum iste saepe! Veritatis numquam explicabo eum ab aut in.';
centerSection.appendChild(firstParagraph);
```

5. Adicione a tag **section** com a *classe left-content* como **filho** da tag **main** criada no passo 2;
```
  const leftSection = document.createElement('section');
  leftSection.setAttribute('class','left-content');
  mainTag.appendChild(leftSection);
```

6. Adicione a tag **section** com a *classe right-content* como filho da tag **main** criada no passo 2;
```
  const rightSection = document.createElement('section');
  rightSection.setAttribute('class','right-content');
  mainTag.appendChild(rightSection);
```

7. Adicione uma **imagem** com *src* configurado para o valor https://picsum.photos/200 e *classe small-image*. Esse elemento deve ser **filho** do **section** criado no passo 5;
```
const image = document.createElement('img');
image.setAttribute('src','https://picsum.photos/200');
image.setAttribute('class','small-image');
leftSection.appendChild(image);
```

8. Adicione uma **lista não ordenada** com os valores de 1 a 10 por extenso, ou seja, um, dois, três, ... como valores da lista. Essa lista deve ser **filha** do **section** criado no passo 6;
```
const list = document.createElement('ul');
rightSection.appendChild(list);

let listItems = ['um','dois','três','quatro','cinco','seis','sete','oito','nove','dez'];

for (i = 0; i < listItems.length; i += 1){
  let item = document.createElement('li');
  item.innerHTML = listItems[i];
  list.appendChild(item);
}
```

9. Adicione 3 tags **h3**, todas sendo **filhas** do **main** criado no passo 2.
```
for(i = 1; i <= 3; i += 1) {
  let heading = document.createElement('h3');
  mainTag.appendChild(heading);
}
```

### - Alteração e remoção de elementos
1. Adicione a *classe title* na tag **h1** criada;
```
mainTitle.setAttribute('class', 'title');
```

2. Adicione a *classe description* nas 3 tags **h3** criadas;
```
const descriptionTitles = document.getElementsByTagName('h3')

for(let i = 0; i < descriptionTitles.length; i += 1) {
  descriptionTitles[i].setAttribute('class', 'description');
}
```

3. Remova a **section** criado no passo 5 (aquele que possui a *classe left-content*). Utilize a função *.removeChild()*;
```
mainTag.removeChild(mainTag.childNodes[1]);
```

4. Centralize a **section** criado no passo 6 (aquele que possui a *classe right-content*). Dica: para centralizar, basta configurar o *margin-right: auto* da **section**;
```
rightSection.style.marginRight = 'auto';
```

5. Troque a cor de fundo do **elemento pai da section** criada no passo 3 (aquela que possui a *classe center-content*) para a cor verde;
```
centerSection.parentElement.style.backgroundColor = 'green';
```

6. Remova os **dois últimos elementos** (nove e dez) da **lista** criada no passo 8.
```
for (i = (list.childNodes.length - 1); i > 0; i -= 1) {
  if (i === 8 || i === 9) {
    list.removeChild(list.childNodes[i]);
  }
}
```