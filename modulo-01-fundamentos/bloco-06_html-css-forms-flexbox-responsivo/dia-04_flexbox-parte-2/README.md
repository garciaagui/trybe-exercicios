# &#9889; Atividades de Fixação & Exercícios | Bloco 06 - Dia 04

## &#9989; Atividade de Fixação 01 - align-self
- Teste as possibilidades para a propriedade `align-self`.
```
.change {
  /* Altere a propriedade align-self. */
  align-self: center;
  background-color: #FBD26A;
  display: flex;
  justify-content: center;
  width: 200px;
  list-style: none;
  /* align-self: stretch; */
  align-self: center;
  /* align-self: flex-start; */
  /* align-self: flex-end; */
  /* align-self: baseline; */
}
```

## &#9989; Atividade de Fixação 02 - order
- Teste as possibilidades para a propriedade `order`.
```
.one {
  background-color: #FBD26A;
  display: flex;
  /* Altere a propriedade order. */
  order: 1;
  /* order: 2; */
  /* order: 3; */
  /* order: 4; */
  list-style: none;
}

.two {
  background-color: #FAA488;
  display: flex;
  /* Altere a propriedade order. */
  order: 2;
  /* order: 1; */ 
  /* order: 3; */
  /* order: 4; */
  list-style: none;
}

.three {
  background-color: #9069EF;
  display: flex;
  /* Altere a propriedade order. */
  order: 3;
  /* order: 1; */
  /* order: 2; */
  /* order: 4; */
  list-style: none;
}

.four {
  background-color: #006472;
  display: flex;
  /* Altere a propriedade order. */
  order: 4;
  /* order: 1; */
  /* order: 2; */
  /* order: 3; */
  list-style: none;
}
```
- Observação: A propriedade `order` aceita também números negativos.

## &#9989; Atividade de Fixação 03 - flex-grow, flex-shrink, flex-basis
1. Teste as possibilidades para a propriedade `flex-grow`.
```
.one {
  background-color: #FBD26A;
  display: flex;
  /* Altere a propriedade grow. */
  flex-grow: 1;
  /* flex-grow: 2; */
  /* flex-grow: 3; */
  /* flex-grow: 4; */
  list-style: none;
}

.two {
  background-color: #FAA488;
  display: flex;
  /* Altere a propriedade grow. */
  flex-grow: 1;
  /* flex-grow: 2; */
  /* flex-grow: 3; */
  /* flex-grow: 4; */
  list-style: none;
}

.three {
  background-color: #9069EF;
  display: flex;
  /* Altere a propriedade grow. */
  flex-grow: 1;
  /* flex-grow: 2; */
  /* flex-grow: 3; */
  /* flex-grow: 4; */
  list-style: none;
}

.four {
  background-color: #006472;
  display: flex;
  /* Altere a propriedade grow. */
  flex-grow: 1;
  /* flex-grow: 2; */
  /* flex-grow: 3; */
  /* flex-grow: 4; */
  list-style: none;
}
```
- Observação: a propriedade `flex-grow` aceita valores superiores a 4.

2. Teste as possibilidades para a propriedade `flex-shrink`.
```
.one {
  background-color: #FBD26A;
  display: flex;
  /* Altere a propriedade shrink. */
  flex-shrink: 1;
  /* flex-shrink: 2; */
  /* flex-shrink: 3; */
  /* flex-shrink: 4; */
  list-style: none;
}

.two {
  background-color: #FAA488;
  display: flex;
  /* Altere a propriedade shrink. */
  flex-shrink: 1;
  /* flex-shrink: 2; */
  /* flex-shrink: 3; */
  /* flex-shrink: 4; */
  list-style: none;
}

.three {
  background-color: #9069EF;
  display: flex;
  /* Altere a propriedade shrink. */
  flex-shrink: 1;
  /* flex-shrink: 2; */
  /* flex-shrink: 3; */
  /* flex-shrink: 4; */
  list-style: none;
}

.four {
  background-color: #006472;
  display: flex;
  /* Altere a propriedade shrink. */
  flex-shrink: 1;
  /* flex-shrink: 2; */
  /* flex-shrink: 3; */
  /* flex-shrink: 4; */
  list-style: none;
}
```
- Observação: a propriedade `flex-shrink` aceita valores superiores a 4.

3. Teste as possibilidades para a propriedade `flex-basis`.
```
.box {
  align-items: center;
  display: flex;
  justify-content: center;
  /* Altere a propriedade flex-basis */
  flex-basis: 500px;
  /* flex-basis: 350px; */
  /* flex-basis: 200px; */
  /* flex-basis: 50px; */
  flex-grow: 0;
  flex-shrink: 1;
}
```

## &#9989; Exercícios do Dia - Parte I
1. Adicione uma propriedade que defina o **tamanho Flexbox base** para o container da imagem 268px e para o container do menu 500px. Após aplicar as propriedades o `header` deverá estar similar a imagem abaixo:
![img](./exercicios/imagens/parte-1_passo-1.jpeg)
```
.logo-container {
  display: flex;
  justify-content: center;
  flex-basis: 268px;
}

.menu-container {
  display: flex;
  flex-basis: 500px;
}
```

2. Adicione uma propriedade Flexbox que **modifique a ordem** em que a logomarca e os itens do menu aparecem na tela. Após aplicar a propriedade o header deverá estar similar a imagem abaixo:
![img](./exercicios/imagens/parte-1_passo-2.jpeg)
```
.logo-container {
  display: flex;
  justify-content: center;
  flex-basis: 268px;
  order: 1;
}

.menu-container {
  display: flex;
  flex-basis: 500px;
  order: 2;
}
```

3. Adicione uma propriedade Flexbox que **faça o container do menu crescer**, quando houver espaço disponível. Após aplicar a propriedade o header deverá estar similar a imagem abaixo:
![img](./exercicios/imagens/parte-1_passo-3.jpeg)
```
.menu-container {
  display: flex;
  flex-basis: 500px;
  flex-grow: 1;
  order: 2;
}
```

4. Utilize a propriedade `align-self` no elemento correto para que o header da página tenha o seguinte comportamento:
![img](./exercicios/imagens/parte-1_passo-4.jpeg)
```
.menu-container {
  align-self: center;
  display: flex;
  flex-basis: 500px;
  flex-grow: 1;
  order: 2;
}
```

## &#9989; Exercícios do Dia - Parte II
1. Aplique uma base de 350px para seu container aside. Deverá ficar similar a imagem abaixo:
```

```

2. Aplique um alinhamento para centralizar e outro para expandir. Seu aside apresentar o seguinte comportamento:
```

```

3. Adicione uma propriedade que faça com que seu container de filmes tenha uma base de 700px e outra base de 16% para as div do container de seu card. Deve ficar similar a imagem abaixo:
```

```

4. Aplique uma propriedade com o valor 10 que expanda o container de filmes. Deve ficar similar a imagem abaixo:
```

```

5. Adicione uma propriedade com o valor 1 que faça com que suas div do container de filmes ocupe todo o espaço em branco. Deve ficar similar a imagem abaixo:
```

```

## &#9989; Exercícios do Dia - Parte III
- Para finalizar, escolha alguns exercícios antigos como, por exemplo, o portfólio ou até mesmo os projetos de HTML, CSS e JavaScript e estruture as páginas utilizando Flexbox.
```

```