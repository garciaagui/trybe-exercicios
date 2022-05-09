# Exercícios | Bloco 03 - Dia 02

## Exercício 1: Introdução ao CSS

1. Modifique o tamanho do h1 para 65 pixels
```
    <style>
        h1 {    
            font-size: 65px;
        }
    </style>
```

2. Modifique a cor do texto do h1 para laranja
```
    <style>
        h1 {    
            color: orange;
        }
    </style>
```

3. Modifique a cor de fundo da lista não ordenada
```
    <style>
        ul {
            background-color: rgb(250, 228, 191);
        }
    </style>
```

4. Crie uma classe para modificar a cor de fundo da tag p e da ul ao mesmo tempo
```
    <head>
        <style>
            .background {
                background-color: rgb(201, 201, 230);
            }
        </style>
    </head>

    <body>
        <p class="background">Qual é a sua cor favorita?</p>

        <ul class="background">
            <li>Amarelo</li>
            <li>Vermelho</li>
            <li>Marrom</li>
        </ul>
    </body>

```

## Exercício 2: Propriedades de texto no CSS

1. Modifique o família do h1 para sans-serif
```
    <style>
        h1 {
            font-family: sans-serif;
        }
    </style>
```

2. Deixe o parágrafo com o font-weight 600
```
    <style>
        p {
            font-weight: 600;
        }
    </style>
```

3. Modifique o font-size do body para 16px
```
    <style>
        body {
                font-size: 16px;
        }
    </style>
```

4. Coloque o tamanho do parágrafo com o tamanho de 3 vezes o padrão do body
```
    <style>
        p {
            font-size: 3em;
        }
    </style>
```
_Explicações..._
- Como a tag pai do parágrafo é o body, o tamanho será 3x maior que o tamanho da fonte de body: 48px.


5. Explore as propriedades font-style, line-height, text-align e text-decoration
```
    <style>
        h1 {
            font-style:italic;
        }

        ul {
            line-height: 25px;
        }

        p {
          text-align: center;
          text-decoration:underline;
        }
    </style>
```

6. Troque a cor de fundo de cada item da lista para a cor correspondente ao texto
```
    <head>
        <style>
            #yellow {
            color: yellow;
            }

            #red {
            color: red;
            }

            #brown {
            color: brown;
            }
        </style>
    </head>

    <body>
        <ul class="background">
            <li id="yellow">Amarelo</li>
            <li id="red">Vermelho</li>
            <li id="brown">Marrom</li>
        </ul>
    </body>

```

## Exercício 3: CSS inline e externo

1. Coloque todo o CSS criado até agora nos exercícios anteriores em um arquivo externo.
```
    <head>
        <link rel="stylesheet" type="text/css" href="index.css">
    </head>
```
_Explicações..._
- Fora criado um arquivo à parte destinado exclusivamente ao CSS, redirecionando todo conteúdo da tag style do index.html para lá.
- Para aplicarmos a estilização, estabelecemos um link externo entre os dois arquivos por meio da tag link.