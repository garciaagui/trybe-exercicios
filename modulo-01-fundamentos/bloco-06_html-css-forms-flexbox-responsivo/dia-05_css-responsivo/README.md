# &#9889; Atividades de Fixação & Exercícios | Bloco 06 - Dia 05

## &#9989; Atividade de Fixação - Media Query
1. A primeira `div` só poderá aparecer se nossa tela possuir **largura mínima de 500px**.
```
@media screen and (min-width: 500px) {
  .card:nth-of-type(1) {
    display: flex;
  }
}
```

2. A segunda `div` só poderá aparecer apenas se a **largura estiver entre 600px e 1000px**.
```
@media screen and (min-width: 600px) and (max-width: 1000px) {
  .card:nth-of-type(2) {
    display: flex;
  }
}
```

3. A terceira `div` não deverá aparecer se nossa tela possuir **largura entre 650px e 950px**.
```
@media not screen and (min-width: 650px) and (max-width: 950px) {
  .card:nth-of-type(3) {
    display: flex;
  }
}
```

4. Sem alterar a classe trick, faça com que o texto dela apareça somente quando a tela estiver com **menos de 500px de largura**.
```
@media screen and (max-width: 500px) {
  p.trick {
    color: #525252;
  }
}
```
