# &#9889; Atividades de Fixação & Exercícios | Bloco 08 - Dia 01

## &#9989; Atividade de Fixação - Estruturando uma Higher Order Function (HOF)
1. Crie uma função que retorne a string 'Acordando!!';
```
const wakeUp = () => { return 'Acordando!!' };
```

2. Crie outra função que retorne a string 'Bora tomar café!!'
```
const takeBreakfast = () => { return 'Bora tomar café!!' };
```

3. Crie mais uma função que retorne a string 'Partiu dormir!!';
```
const goToBed = () => { return 'Partiu dormir!!' };
```

4. Agora desenvolva uma HOF chamada `doingThings` e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores.
```
const doingThings = (func) => { return console.log(func) };

doingThings(wakeUp());
doingThings(takeBreakfast());
doingThings(goToBed());
```

## &#9989; Exercício 01 - New Employees
- Crie uma função que retorne um objeto no formato `{ nomeCompleto, email }` representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF `newEmployees` para criar cada pessoa contratada em seu **respectivo id**. A sua função deve receber como parâmetro o **nome completo** da pessoa funcionária e a partir dele gerar automaticamente um **email** no formato `nome_da_pessoa@trybe.com`.
```
const newEmployees = () => {
  const employees = {
    id1: '', // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: '', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: '', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};
```
- Reposta:
```
const generateNewEmployee = (fullName) => {
  const nameWithUnderline = fullName.toLowerCase().replace(/ /g, '_');
  const newEmail = `${nameWithUnderline}@trybe.com`;
  return {
    name: fullName,
    email: newEmail
  };
}

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  }
  return employees;
}

console.log(newEmployees(generateNewEmployee));
```

## &#9989; Exercício 02 - Resultado de Sorteio
Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").
```
const checkNumbers = (betNumber, prizeNumber) => {
  if (betNumber <= 0 || betNumber > 5) return 'Número apostado precisa estar entre 1 e 5';
  if (betNumber === prizeNumber) return 'Parabéns você ganhou';
  return 'Tente novamente';
};

const prizeDrawResult = (betNumber, callback) => {
  const prizeNumber = Math.floor((Math.random() * 5) + 1);
  return callback(betNumber, prizeNumber);
}

console.log(prizeDrawResult(5,checkNumbers));
```

## &#9989; Exercício 03 - Checagem de Respostas
- Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
- Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.
```
const checkAnswers = (rightAnswersList, studentAnswersList) => {
  let score = 0;
  let hits = 0;
  for (let i = 0; i < rightAnswersList.length; i += 1) {
    if (studentAnswersList[i] === 'N.A') { score = score }
    else if (studentAnswersList[i] === rightAnswersList[i]) { score += 1; hits += 1 }
    else if (studentAnswersList[i] !== rightAnswersList[i]) { score -= 0.5 }
  }
  return {
    finalScore: `${score} points`,
    finalHits: `${hits} right answers`
  };
}

const determineFinalResult = (rightAnswersList, studentAnswersList, callback) => {
  return callback(rightAnswersList, studentAnswersList);
}

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(determineFinalResult(rightAnswers, studentAnswers, checkAnswers));
```