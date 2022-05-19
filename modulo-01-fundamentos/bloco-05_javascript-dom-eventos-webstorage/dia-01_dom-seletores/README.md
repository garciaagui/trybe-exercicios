# &#9889; Atividades de Fixação & Exercícios | Bloco 05 - Dia 01

## &#9989; Atividade de Fixação 1 - getElementById

1. Recupere o elemento que contém o **título da página** e faça algo com ele, como alterá-lo para o nome do seu filme favorito.
```
document.getElementById("page-title").innerText = 'Vingadores: Ultimato';
```
2. Agora recupere o **segundo parágrafo** e use sua criatividade para alterá-lo.
```
document.getElementById("second-paragraph").innerText = 'O filme em que nos despedimos do Homem de Ferro e do Capitão América :(';
```

3. Por fim, recupere o **subtítulo** e altere-o também.
```
document.getElementById("subtitle").innerText = 'A conclusão da Saga do Infinito!';
```

## &#9989; Atividade de Fixação 2 - getElementByClassName + ByTagName

1. Adicione uma classe igual para os dois parágrafos.
```
<p id="paragraph" class="cParagraph">Dê uma cor para este parágrafo!</p>
<p id="second-paragraph" class="cParagraph">Segundo parágrafo!</p>
```

2. Recupere os seus parágrafos via código JavaScript, usando a função getElementsByClassName;
```
document.getElementsByClassName("cParagraph");
```

3. Altere algum estilo do primeiro deles.
```
document.getElementsByClassName("cParagraph")[0].style.color = "green";
```

4. Recupere o subtítulo e altere a cor dele usando a função getElementsByTagName.
```
document.getElementsByTagName("h4")[0].style.color = "blue";
```

## &#9989; Atividade de Fixação 3 - Seletores

![Imagem](/atividades-fixacao/objetivo-ativ-03.png)

- O objetivo da atividade é manipular os códigos fornecidos e chegar aproximadamente ao resultado acima.
- A atividade não determina os passos para realiza-la. Portanto, os passos abaixo foram os que tomei para completa-la.

1. Modificação da backgroundColor do **header**.
```
document.getElementById('header-container').style.backgroundColor = 'green';

```

2. Modificação da backgroundColor dos elementos da classe **emergency-tasks**.
```
document.getElementsByClassName('emergency-tasks')[0].style.backgroundColor = 'lightsalmon';
```

3. Modificação da backgroundColor dos **h3** pertencentes à **emergency-tasks**.
```
let urgentTitles = document.querySelectorAll('.emergency-tasks h3');

for (i = 0; i < urgentTitles.length; i += 1) {
  urgentTitles[i].style.backgroundColor = 'purple';
}
```

4. Modificação da backgroundColor dos elementos da classe **no-emergency-tasks**.
```
document.getElementsByClassName('no-emergency-tasks')[0].style.backgroundColor = 'yellow';
```

5. Modificação da backgroundColor dos **h3** pertencentes à **no-emergency-tasks**.
```
let nonUrgentTitles = document.querySelectorAll('.no-emergency-tasks h3');

for (i = 0; i < nonUrgentTitles.length; i += 1) {
  nonUrgentTitles[i].style.backgroundColor = 'black';
}
```

6. Modificação da backgroundColor do **footer**.
```
document.getElementById('footer-container').style.backgroundColor = 'darkslategray';
```