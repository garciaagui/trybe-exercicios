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

## &#9989; Exercício Bônus: Game Actions Simulator - Parte I
- Nestes exercícios você irá implementar HOFs que simulam um turno de batalha em um jogo. Você irá criar funções que calculam dano, atualizam status, e ao final, retornam os resultados da rodada. Para os exercícios, considerar o código abaixo.
```
const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };
```

1. Crie uma função que retorna o dano do dragão.
- O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo `strength` (dano máximo).
```
const setDragonAttackDamage = () => {
  const minDamage = 15;
  const maxDamage = dragon.strength;
  const dragonDamage = Math.floor(Math.random() * (maxDamage - minDamage + 1) + minDamage);
  return dragonDamage;
}
```

2. Crie uma função que retorna o dano causado pelo warrior.
- O dano será um número aleatório entre o valor do atributo `strength` (dano mínimo) e o valor de `strength` * `weaponDmg` (dano máximo). 
```
const setWarriorAttackDamage = () => {
  const minDamage = warrior.strength;
  const maxDamage = warrior.strength * warrior.weaponDmg
  const warriorDamage = Math.floor(Math.random() * (maxDamage - minDamage + 1) + minDamage);
  return warriorDamage;
}
```

3. Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
- O dano será um número aleatório entre o valor do atributo `intelligence` (dano mínimo) e o valor de `intelligence` * 2 (dano máximo).
- A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.
```
const setMageAttackDamage = () => {
  let mageDamage = 0;
  if (mage.mana < 15) {
    mageDamage = 0;
    return 'Não possui mana suficiente';
  } else {
    mage.mana -= 15;
    const minDamage = mage.intelligence;
    const maxDamage = mage.intelligence * 2;
    mageDamage = Math.floor(Math.random() * (maxDamage - minDamage + 1) + minDamage);
    return mageDamage;
  }
}
```

## &#9989; Exercício Bônus: Game Actions Simulator - Parte II
Agora que você já possui a implementação das funções relativas aos três exercícios anteriores, passe-as como parâmetro para outras funções que irão compor um objeto gameActions. O objeto será composto por ações do jogo e cada ação é por denifição uma HOF, pois neste caso, são funções que recebem como parâmetro outra função. Para os exercícios, considerar o código abaixo.
```
const gameActions = {
};
```
1. Crie a primeira HOF que compõe o objeto `gameActions`. Ela será a função que simula o turno do personagem `warrior`. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem `warrior` e atualizará os `healthPoints` do monstro `dragon`. Além disto ela também deve atualizar o valor da chave `damage` do `warrior`.
```
const gameActions = {
  warriorTurn: (callback1) => {
    warrior.damage = callback1();
    dragon.healthPoints -= warrior.damage;
}
```

2. Crie a segunda HOF que compõe o objeto `gameActions`. Ela será a função que simula o turno do personagem `mage`. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem `mage` e atualizará os `healthPoints` do monstro `dragon`. Além disto ela também deve atualizar o valor das chaves `damage` e `mana` do `mage`.
```
const gameActions = {
  warriorTurn: (callback1) => {
    warrior.damage = callback1();
    dragon.healthPoints -= warrior.damage;
  },
  mageTurn: (callback2) => {
    mage.damage = callback2();
    dragon.healthPoints -= mage.damage;
  },
}
```

3. Crie a terceira HOF que compõe o objeto `gameActions`. Ela será a função que simula o turno do monstro `dragon`. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo monstro `dragon` e atualizará os `healthPoints` dos personagens `mage` e `warrior`. Além disto ela também deve atualizar o valor da chave `damage` do monstro.
```
const gameActions = {
  warriorTurn: (callback1) => {
    warrior.damage = callback1();
    dragon.healthPoints -= warrior.damage;
  },
  mageTurn: (callback2) => {
    mage.damage = callback2();
    dragon.healthPoints -= mage.damage;
  },
  dragonTurn: (callback3) => {
    dragon.damage = callback3();
    warrior.healthPoints -= dragon.damage;
    mage.healthPoints -= dragon.damage;
  },
}
```

4. Adicione ao objeto `gameActions` uma função que retorne o objeto `battleMembers` atualizado e faça um `console.log` para visualizar o resultado final do turno.
```
const gameActions = {
  warriorTurn: (callback1) => {
    warrior.damage = callback1();
    dragon.healthPoints -= warrior.damage;
  },
  mageTurn: (callback2) => {
    mage.damage = callback2();
    dragon.healthPoints -= mage.damage;
  },
  dragonTurn: (callback3) => {
    dragon.damage = callback3();
    warrior.healthPoints -= dragon.damage;
    mage.healthPoints -= dragon.damage;
  },
  showStats: () => console.log(battleMembers),
}
```