# &#9889; Atividades de Fixação & Exercícios | Bloco 09 - Dia 01

## &#9989; Atividades de Fixação
- Para as duas atividades a seguir, trabalharemos com o código abaixo.
```
const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const getUser = () => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
};
```
1. Adicione uma `callback` como parâmetro da função `getUser`.
- Insira o retorno da função `getUser`;
- (1.1)  Complete a chamada da função `getUser` de modo que o retorno seja: "Hello! My name is Ivan Ivanovich";
- (1.2.) Complete a chamada da função `getUser` de modo que o retorno seja: "Ivan is Russian".
```
const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const getUser = (callback) => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
  return callback(userToReturn);
};

console.log(getUser(userFullName)); // (1.1)
console.log(getUser(userNationality)); // (1.2)
```

2. Passe, como parâmetro e como retorno, uma `callback` para a função `getUser`.
- No código abaixo a função `getUser` foi modificada e agora funciona de modo assíncrono.
```
const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const getUser = () => {
  setTimeout(() => {
    const user = {
      firstName: "Ivan",
      lastName: "Ivanovich",
      nationality: "Russian",
    };
    // Retorne a `callback` passada como parâmetro na função `getUser`
    console.log(user);
  }, delay());
};
```
- Insira uma `callback` como parâmetro da função `getUser`;
- Retorne a `callback` passada como parâmetro na função `getUser`;
```
const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const getUser = (callback) => {
  setTimeout(() => {
    const user = {
      firstName: "Ivan",
      lastName: "Ivanovich",
      nationality: "Russian",
    };
    return console.log(callback(user));
  }, delay());
};

getUser(userFullName);
getUser(userNationality);
```