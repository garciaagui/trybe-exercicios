# &#9889; Atividades de Fixação & Exercícios | Bloco 05 - Dia 02

## &#9989; Atividade de Fixação 01 - Buscando Elementos

1. Acesse o elemento **elementoOndeVoceEsta**.
```
const whereYouAre = document.getElementById('primeiroFilho').nextElementSibling;
```

2. Acesse **pai** a partir de **elementoOndeVoceEsta** e adicione uma *color* a ele.
```
whereYouAre.parentNode;
```

3. Acesse o **primeiroFilhoDoFilho** e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
```
const firstChild = document.getElementById('primeiroFilho');
firstChild.innerHTML = 'Lorem ipsum dolor';
```

4. Acesse o **primeiroFilho** a partir de **pai**.
```
const dad = document.getElementById('pai');
dad.firstElementChild;
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
whereYouAre.nextElementSibling;
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