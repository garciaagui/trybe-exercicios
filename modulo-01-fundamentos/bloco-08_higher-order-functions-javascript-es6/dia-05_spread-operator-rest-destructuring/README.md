# &#9889; Atividades de Fixação & Exercícios | Bloco 08 - Dia 05

## &#9989; Atividades de Fixação - Parte I: Spread Operator
- Faça uma função chamada `fruitSalad` passando como parâmetro `specialFruit` e `additionalItens`, faça a função retornar uma lista única contendo todos os itens da nossa salada de frutas usando o `spread`.
```
const specialFruit = ['maracujá', 'melancia', 'mexirica'];

const additionalItens = ['chocolate', 'sorvete', 'leite condensado'];

const fruitSalad = (fruit, additional) => {
  const mixedItems = [...fruit, ...additional];
  return mixedItems;
};

console.log(fruitSalad(specialFruit, additionalItens));
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
1. Precisamos criar um **terceiro objeto**, que terá os dados pessoais e os dados de cargo juntos. Para isso, utilize o `spread operator`.
```
const fullProfile = {...user, ...jobInfos};
```
2. Com o objeto em mãos, imprima no console uma frase utilizando os dados do objeto criado anteriormente. Para isso, utilize a **desestruturação de objetos** em conjunto com `template literals`.
```
const { name, age, nationality, profession, squad, squadInitials } = fullProfile;

console.log(`Hello there! My name is ${name} and I'm ${age} years old. I'm ${nationality} and I work for ${squad} (${squadInitials}) as a ${profession}.`);
```

## &#9989; Atividades de Fixação - Parte III: Array Destructuring
1. Produza o mesmo resultado do código abaixo, porém utilizando o **array destructuring** para recolher a função e a saudação.
```
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]);
```
- Resposta:
```
const [greeting , print] = saudacoes;

print(greeting);
```

2. A seguir, temos alguns valores que estão descritos em variáveis incoerentes. Através da **desestruturação de arrays**, corrija os valores das variáveis.
```
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';
```
- Resposta:
```
[comida, animal, bebida] = [bebida, comida, animal];

console.log(`Variável comida: ${comida};
Variável animal: ${animal};
Variável bebida: ${bebida}.`);
```

3. A array abaixo possui alguns números que não condizem com o conteúdo que ele deveria possuir. Através de **array destructuring**, faça com que existam apenas números pares na variável `numerosPares`.
```
let numerosPares = [1, 3, 5, 6, 8, 10, 12];
```
- Resposta:
```
const [odd1, odd2, odd3, ...restEvens] = numerosPares;

console.log(restEvens);
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
const getNationality = ({ firstName, nationality = 'Brazilian'}) => `${firstName} is ${nationality}`;
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
const getPosition = (latitude, longitude) => ({
  latitude,
  longitude,
});
```

## &#9989; Atividades de Fixação - Parte VI: Default Parameters
- Escreva uma função `multiply` que multiplique dois números passados como argumentos. Atribua como `default` o valor 1 caso não seja passado nenhum valor como segundo parâmetro.
```
const multiply = (number1, number2 = 1) => number1 * number2;
```

## &#9989; Exercícios do Dia
1. Dado o código abaixo, complete-o de forma que seja impressa a área dos 3 retângulos. O código deve retornar em sequência 2, 15 e 54.
```
const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  rectangleArea() // altere a chamada da funcao rectangleArea
  console.log(rectangle[0] * rectangle[1]);
});
```
- Resposta:
```

```

2. Crie uma função `sum` que dado um número variável de elementos retorna a soma desses elementos.
```

```

3. Escreva a função `personLikes`, que dado um objeto de parâmetro que representa uma pessoa, retorna todos os gostos daquela pessoa, conforme mostrado abaixo:
```
const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};

// complete a assinatura da função abaixo
const personLikes = () => `${name} is ${age} years old and likes ${likes.join(', ')}.`;

console.log(personLikes(alex)); // 'Alex is 26 years old and likes fly fishing.'
console.log(personLikes(gunnar)); // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'
```
- Resposta:
```

```

4. Escreva uma função `filterPeople` que, dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20:
```
const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];
```
- Resposta:
```

```

5. Escreva a função `swap`, que dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados. Detalhe: você precisa fazer essa função gastando 1 linha só:
```
const myList = [1, 2, 3];
```
- Resposta:
```

```

6. Suponha que você esteja lidando com carros e, da forma como o problema lhe foi entregue, cada carro é modelado como um array. Porém, essa modelagem está baixo nível. Cria uma função `toObject` que, dada uma lista, retorna um objeto representando o carro:
```
const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];
```
- Resposta:
```

```

7. Escreva uma função `shipLength` que, dado um objeto representando um navio, retorna o comprimento dele, mostrando também a devida unidade de comprimento:
```
const ships = [
  {
    name: 'Titanic',
    length: 269.1,
    measurementUnit: 'meters',
  },
  {
    name: 'Queen Mary 2',
    length: 1132,
    measurementUnit: 'feet',
  },
  {
    name: 'Yamato',
    length: 256,
    measurementUnit: 'meters',
  },
];

// escreva shipLength abaixo

console.log(shipLength(ships[0])); // 'Titanic is 269.1 meters long'
console.log(shipLength(ships[1])); // 'Queen Mary 2 is 1132 feet long'
console.log(shipLength(ships[2])); // 'Yamato is 256 meters long'
```
- Resposta:
```

```

8. Escreva uma função `greet` que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento:
```
// escreva greet abaixo

console.log(greet('John')) // 'Hi John'
console.log(greet('John', 'Good morning')) // 'Good morning John'
console.log(greet('Isabela', 'Oi')) // 'Oi Isabela'
```
- Resposta:
```

```

9. Existe um objeto `yearSeasons` que representam as estações do ano. Cada estação é uma chave deste objeto e o valor de cada chave é um array de strings, representando os meses daquela estação. A partir deste objeto, desestruture as estações do ano e espalhe-as em um array de meses do ano.
- **Observação**: As estações do ano aqui descritas têm base nas estações do hemisfério norte.
```
const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};
```
- Resposta:
```

```