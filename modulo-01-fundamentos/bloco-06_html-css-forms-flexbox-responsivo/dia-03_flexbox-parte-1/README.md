# &#9889; Atividades de Fixação & Exercícios | Bloco 06 - Dia 03

## &#9989; Atividade de Fixação 1 - Introdução, estrutura básica, flex-direction, flex-wrap, flex-flow e reverse

1. Teste as possibilidades para a propriedade `flex-direction`.
```
.box-container {
  background-color: #0fa36b;
  display: flex;
  /* ADICIONE AQUI SEUS TESTES */
  flex-direction: row;
  /* flex-direction: column; */
  /* flex-direction: row-reverse; */
  /* flex-direction: column-reverse; */
}
```

2. Teste as possibilidades para a propriedade `flex-wrap`.
```
.box-container {
  background-color: #0fa36b;
  display: flex;
  /* ADICIONE AQUI SEUS TESTES */
  flex-wrap: wrap;
  /* flex-wrap: nowrap; */
  /* flex-wrap: wrap-reverse; */
}
```

3. Teste as possibilidades para a propriedade `flex-flow`.
```
.box-container {
  background-color: #0fa36b;
  display: flex;
  /* ADICIONE AQUI SEUS TESTES */
  /* flex-flow: row wrap; */
  flex-flow: row nowrap;
  /* flex-flow: row wrap-reverse; */
  /* flex-flow: column wrap; */
  /* flex-flow: column nowrap; */
  /* flex-flow: column wrap-reverse; */
  /* flex-flow: row-reverse wrap; */
  /* flex-flow: row-reverse nowrap; */
  /* flex-flow: row-reverse wrap-reverse; */
  /* flex-flow: column-reverse wrap; */
  /* flex-flow: column-reverse nowrap; */
  /* flex-flow: column-reverse wrap-reverse;*/
}
```

## &#9989; Atividade de Fixação 2 - justify-content, align-items e align-content

1. Teste as possibilidades para a propriedade `justify-content`.
```
.box-container {
  background-color: #0fa36b;
  display: flex;
  /* ADICIONE AQUI SEUS TESTES */
  justify-content: flex-start;
  /* justify-content: flex-end; */
  /* justify-content: center; */
  /* justify-content: space-between; */
  /* justify-content: space-around; */
  /* justify-content: space-evenly; */
}
```

2. Teste as possibilidades para a propriedade `align-items`.
```
.box-container {
  background-color: #0fa36b;
  display: flex;
  /* ADICIONE AQUI SEUS TESTES */
  align-items:stretch;
  /* align-items:flex-start; */
  /* align-items:flex-end; */
  /* align-items:center; */
  /* align-items:baseline; */
}
```

3. Teste as possibilidades para a propriedade `align-content`.
```
.box-container {
  /* ADICIONE AQUI SEUS TESTES */
  background-color: #0fa36b;
  display: flex;
  flex-wrap: wrap;
  height: 600px;
  align-content: stretch;
  /* align-content: flex-start; */
  /* align-content: flex-end; */
  /* align-content: center; */
  /* align-content: space-between; */
  /* align-content: space-around; */
  /* align-content: space-evenly; */
}
```