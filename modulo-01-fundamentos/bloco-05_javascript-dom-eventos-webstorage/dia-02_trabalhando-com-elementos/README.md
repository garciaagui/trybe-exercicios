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