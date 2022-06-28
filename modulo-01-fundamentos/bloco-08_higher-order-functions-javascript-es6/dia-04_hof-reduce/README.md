# &#9889; Atividades de Fixação & Exercícios | Bloco 08 - Dia 04

## &#9989; Exercício 01
- Dada a matriz abaixo, transforme em um array.
```
const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

```
- Resposta:
```
function flatten(acc, value) {
  return acc.concat(value);
}

const newArray = arrays.reduce(flatten, [])

console.log(newArray);
```

### - Para os Exercícios 02, 03 e 04 considere o seguinte array.
```
const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];
```


## &#9989; Exercício 02
- Crie uma string com os nomes de todas as pessoas autoras.
```
function reduceNames(acc, book, index) {
  if (index === (books.length - 1)) {
    return `${acc} ${book.author.name}.`;
  }
  return `${acc} ${book.author.name},`;
}

const authorNames = books.reduce(reduceNames, '');

console.log(authorNames);
```

## &#9989; Exercício 03
- Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
```
function averageAge(acc, book) {
  return (acc + (book.releaseYear - book.author.birthYear));
} 

const averageAuthorsAge = books.reduce(averageAge, 0)/books.length;

console.log(averageAuthorsAge);
```

## &#9989; Exercício 04
- Encontre o livro com o maior nome.
```
function longestNamedBook(array) {
  return array.reduce((acc, curr) => {
    return (acc.name.length > curr.name.length) ? acc : curr;
  }, array[0]);
};

console.log(longestNamedBook(books));
```

## &#9989; Exercício 05
- Dada o array de nomes (abaixo), retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
```
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];
```
- Resposta:
```
function containsA(array) {
  return array.reduce((acc, curr) => {
    return acc + (curr.toUpperCase().split('A').length - 1);
  }, 0);
}

console.log(containsA(names));
```

## &#9989; Exercício 06
- Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada objeto terá o formato `{ name: nome do aluno, average: media das notas }`. Para isso vamos assumir que a posição 0 de `notas` refere-se ao aluno na posição 0 de `alunos`, aqui além de `reduce` será necessário utilizar também a função `map`.
```
const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];
```
- Resposta:
```
const averages = grades.map((grade) => {
  return grade.reduce((acc, curr) => {
    return acc + curr;
  })/grade.length;
});

function studentAverage() {
  return students.map((student, index) => {
    return {
      name: student,
      average: averages[index]
    };
  });
};

console.log(studentAverage());
```
