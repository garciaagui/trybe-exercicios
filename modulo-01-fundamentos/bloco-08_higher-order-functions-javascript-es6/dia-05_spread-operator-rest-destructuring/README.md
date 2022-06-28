# &#9889; Atividades de Fixação & Exercícios | Bloco 08 - Dia 05

## &#9989; Atividades de Fixação - Parte I: Spread Operator
- Faça uma função chamada `fruitSalad` passando como parâmetro `specialFruit` e `additionalItens`, faça a função retornar uma lista única contendo todos os itens da nossa salada de frutas usando o `spread`.
```

```

## &#9989; Atividades de Fixação - Parte II: Object Destructuring
- Temos dois objetos, um com informações pessoais de uma pessoa usuária e outro com informações referentes ao cargo desta pessoa usuária na empresa **trappistEnterprise**. 
```
const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};
```
1. Precisamos criar um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos. Para isso, utilize o `spread operator`.
```

```
2. Com o objeto em mãos, imprima no console uma frase utilizando os dados do objeto criado anteriormente. Para isso, utilize a desestruturação de objetos em conjunto com `template literals`.
```

```

## &#9989; Atividades de Fixação - Parte III: Array Destructuring
1. Produza o mesmo resultado do código, porém utilizando o **array destructuring** para recolher a função e a saudação.
```
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]);
```
- Resposta:
```

```

2. A seguir, temos alguns valores que estão descritos em variáveis incoerentes. Através da **desestruturação de arrays**, corrija os valores das variáveis.
```
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';
```
- Resposta:
```

```

3. A array abaixo possui alguns números que não condizem com o conteúdo que ele deveria possuir. Através de **array destructuring**, faça com que existam apenas números pares na variável `numerosPares`.
```
let numerosPares = [1, 3, 5, 6, 8, 10, 12];
```
- Resposta:
```

```

## &#9989; Atividades de Fixação - Parte IV: Default Destructuring
- Do jeito que está, quando passamos `person` para a função `GetNationality` o retorno é `João is undefined`. Ajuste a função `GetNationality` para que a chamada `GetNationality(person)` retorne `João is Brazilian`.
```
const getNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};
```
- Resposta:
```

```

## &#9989; Atividades de Fixação - Parte V: Object Property Shorthand
- Altere a função `getPosition` utilizando a `property shorthand`.
```
const getPosition = (latitude, longitude) => ({
  latitude: latitude,
  longitude: longitude});

console.log(getPosition(-19.8157, -43.9542));
```
- Resposta:
```

```

## &#9989; Atividades de Fixação - Parte VI: Default Parameters
- Escreva uma função `multiply` que multiplique dois números passados como argumentos. Atribua como `default` o valor 1 caso não seja passado nenhum valor como segundo parâmetro.
```

```
