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

## &#9989; Exercício do Dia - Parte I
1. Faça o **tamanho da fonte** ser maior;
```
body {
  font-size: 1.4em;
}
```

2. Faça o tamanho da fonte dos elementos `h1` ser menor;
```
h1 {
  font-size: 1.7em;
}
```

3. Aumente o **espaçamento entre as figuras**;
```
figure {
	margin-bottom: 30px;
}
```

4. Adicione um pouco de `margin` na página.
```
*, *:before, *:after {
  box-sizing: inherit;
  margin: 7px;
}
```

5. Guarde a largura da tela no ponto que você identificou que o layout atual não funcionou bem. Esse será o **primeiro breakpoint** do layout. Um breakpoint é apenas um ponto onde estamos definindo que o design atual deve mudar;
- Breakpoint: 522px.

6. Crie uma `media query` no seu arquivo CSS, usando a dimensão em pixels que você guardou como o `min-width` do teste da media query. Dentro desse **breakpoint**, adicione os seguintes ajustes:
- Altere a **cor de fundo**;
```
@media screen and (min-width: 522px) {
  body {
    background-color: wheat;
  }
}
```

- Ajuste o **tamanho da fonte**;
```
@media screen and (min-width: 522px) {
  body {
    font-size: 1.5em;
  }

  h1 {
    font-size: 1.75em;
  }
}
```

- Ajuste as **margens da página**;
```
@media screen and (min-width: 522px) {
  *, *:before, *:after {
    box-sizing: inherit;
    margin: 16px 8px 0;
  }
}
```

- Faça as **imagens** serem mostradas em **duas colunas**.
```
@media screen and (min-width: 522px) {
  section {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 100%;
  }

  figure {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    width: 45%;
  } 
}
```

7. Agora, você vai criar **outro breakpoint** para **telas grandes**. Redimensione sua tela de novo para encontrar um novo breakpoint.
- Breakpoint: 1.054px.


8. Crie uma nova `media query` no seu arquivo CSS usando a dimensão que você encontrou para **telas grandes**, e realize os seguintes ajustes dentro do breakpoint:
- Altere a **cor de fundo**;
```
@media screen and (min-width: 1054px) {
  body {
    background-color: orangered;
  }
}
```

- Ajuste o **tamanho da fonte**;
```
@media screen and (min-width: 1054px) {
  body {
    font-size: 1.6em;
  }

  h1 {
    font-size: 1.8em;
  }
}
```

- Ajuste as **margens da página**;
```
@media screen and (min-width: 1054px) {
  *, *:before, *:after {
    box-sizing: inherit;
    margin: 17px 9px 0;
  }
}
```

- Adicione a propriedade `max-width` à página, para garantir que a largura das linhas não fique muito grande.
```
@media screen and (min-width: 1054px) {
  body {
    max-width: 1522px;
  }
}
```
