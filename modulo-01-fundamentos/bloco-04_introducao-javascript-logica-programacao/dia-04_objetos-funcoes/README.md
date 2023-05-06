# &#9889; Atividades de Fixação & Exercícios | Bloco 04 - Dia 04

## &#9989; Atividade de Fixação 1 - Objetos

1. Crie um *objeto* **player** contendo as variáveis listadas abaixo.
```
let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };
```
- Resolução:
```
let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: {
    golden: 2,
    silver: 3,
  },
};
```

2. Acesse as *chaves* **name, lastName e age** e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".
```
console.log(`A jogadora ${player.name} ${player.lastName} tem ${player.age} anos de idade`);

// Resultado esperado: "A jogadora Marta Silva tem 34 anos de idade"
```

3. Adicione ao objeto a *chave* **bestInTheWorld** e atribua a esta chave um *array* contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.
```
[2006, 2007, 2008, 2009, 2010, 2018]
```
- Resolução:
```
player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];
```

4. Acesse a *chave* **bestInTheWorld** e faça um *console.log* no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".
```
console.log (`A jogadora ${player.name} ${player.lastName} foi eleita a melhor do mundo por ${player.bestInTheWorld.length} vezes`)

// Resultado esperado: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes"
```

5. Acesse a *chave* **medals** e faça um *console.log* no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".
```
console.log(`A jogadora possui ${player.medals.golden} medalhas de ouro e ${player.medals.silver} medalhas de prata`)

// Resultado esperado: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata"
```

## &#9989; Atividade de Fixação 2 - For/In e For/Of

1. Usando o objeto abaixo, utilize *for/in* e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o "xxxxx" pelo nome em questão.
```
let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};
```
- Resolução:
```
for (let person in names) {
  console.log(`Olá ${names[person]}`);
}

// Resultado esperado:
//Olá João
//Olá Maria
//Olá Jorge
```

2. Usando o objeto abaixo, utilize *for/in* e imprima um *console.log* com as *chaves* e valores desse objeto.

```
let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};
```
- Resolução:
```
let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (let key in car) {
  console.log(`${key}: ${car[key]}`);
}

// Resultado esperado:
//model: A3 Sedan
//manufacturer: Audi
//year: 2020
```

## &#9989; Exercícios do Dia Parte I - Objetos e For/In
Usando o objeto abaixo, faça os exercícios a seguir:
```
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
```
1. Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:
```
Bem-vinda, Margarida
```
- Resolução:
```
console.log(`Bem-vinda, ${info['personagem']}!`);
```
2. Insira no *objeto* uma nova *propriedade* com o nome de *chave* 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:
```
{
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
}
```
- Resolução:
```
info['recorrente'] = 'Sim';
console.log(info);
```

3. Faça um *for/in* que mostre todas as *chaves* do *objeto*. Valor esperado no console:
```
personagem
origem
nota
recorrente
```
- Resolução:
```
for (let key in info) {
  console.log(key);
}
```

4. Faça um novo *for/in*, mas agora mostre todos os valores das *chaves* do *objeto*. Valor esperado no console:
```
Margarida
Pato Donald
Namorada do personagem principal nos quadrinhos do Pato Donald
Sim
```
- Resolução:
```
for (let key in info) {
  console.log(info[key]);
}
```

5. Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:
```
Margarida e Tio Patinhas
Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
Ambos recorrentes // Atenção para essa última linha!
```
- Resolução:
```
let infoPatinhas = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
};

for (let key in infoPatinhas) {

  if (info[key] === infoPatinhas[key]) {
    console.log(`Ambos ${key}s`);
  
  } else {
    console.log(`${info[key]} e ${infoPatinhas[key]}`)

  }

}
```

- [MODIFICADO] Para os passos 6, 7 e 8, use o *objeto* abaixo:
```
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};
```

6. Acesse as *chaves* **nome, sobrenome e titulo**, que está dentro da *chave* **livrosFavoritos**, e faça um *console.log* no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".
```
console.log(`O livro favorito de ${leitor.nome} ${leitor.sobrenome} se chama '${leitor.livrosFavoritos[0]['titulo']}'`)
```

7. Adicione um novo livro favorito na chave **livrosFavoritos**, que é um *array*. Atribua a esta *chave* um *objeto* contendo as seguintes informações:
```
{
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
}
```
- Resolução:
```
leitor.livrosFavoritos[1] = {
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
}
```

8. Acesse as *chaves* **nome e livrosFavoritos** e faça um *console.log* no seguinte formato: "Julia tem 2 livros favoritos".
```
console.log(`${leitor.nome} tem ${leitor.livrosFavoritos.length} livros favoritos`)
```

## &#9989; Exercícios do Dia Parte II - Funções

1. Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
```
const word = 'arara';

function checkPalindrome(word) {
  const reversedWord = word.split('').reverse().join('');
  if (word === reversedWord) {
    return true;
  } else {
    return false;
  }
}
```

2. Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
```
const numbers = [2, 3, 6, 7, 10, 1];

function checkHighestValueIndex (array) {
  let highestValue = array[0];
  let highestValueIndex = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > highestValue) {
      highestValue = array[i];
      highestValueIndex = i;
    }
  }
  return highestValueIndex;
}

console.log(checkHighestValueIndex(numbers));
```

3. Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
```
const numbers = [2, 4, 6, 7, 10, 0, -3];

function checkLowestValueIndex (array) {
  let lowestValue = array[0];
  let lowestValueIndex = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] < lowestValue) {
      lowestValue = array[i];
      lowestValueIndex = i;
    }
  }
  return lowestValueIndex;
}

console.log(checkLowestValueIndex(numbers));
```

4. Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
```
const names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function checkLongestName(names) {
  let longestName = names[0];
  for (let i = 0; i < names.length; i += 1) {
    if (names[i].length > longestName.length) {
      longestName = names[i]
    }
  }
  return longestName;
}

console.log(checkLongestName(names));
```

5. Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
```
const numbers = [2, 3, 2, 5, 8, 2, 3];

function checkRepeats(array) {
  let repeats = 0;
  let mostRepeated = 0;
  let repeatedNumber = 0;
  for (let index = 0; index < array.length; index += 1) {
    repeats = 0;
    for (let i = 0; i < array.length; i += 1) {
      if (array[index] === array[i]) {
        repeats += 1;
      }
    }
    if (repeats > mostRepeated) {
      mostRepeated = repeats;
      repeatedNumber = array[index];
    }
  }
  return repeatedNumber;
}

console.log(checkRepeats(numbers));
```

6. Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
- Valor de teste: N = 5.
- Valor esperado no retorno da função: 1+2+3+4+5 = 15.
```

```

7. Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.
- Valor de teste: 'trybe' e 'be'
- Valor esperado no retorno da função: true
- verificaFimPalavra('trybe', 'be');
- Retorno esperado: true
- verificaFimPalavra('joaofernando', 'fernan');
- Retorno esperado: false
```

```
