# ⚡ Atividades de Fixação & Exercícios | Bloco 22 - Dia 01 (Seção 04)

## ✅ Exercícios do dia
1. Crie um código para calcular o índice de massa corporal(IMC) de uma pessoa.
- Armazene o código no arquivo `bmi.js`;
- Lembre-se que a altura é em metros, caso deseje usar em centímetros a conversão para metros será necessária;
- Por enquanto, não se preocupe em pedir input do usuário. Utilize valores fixos para `weight` e `height`.
```
// Arquivo bmi.js

console.log('-- Cálculo de IMC --')
const weightInKg = 62;
const heightInCm = 162;

function calculateBMI(weight, height) {
  const heightInMeters = height/100;
  const bmi = weight/(heightInMeters ** 2);

  return Number(bmi.toFixed(2));
}

function main() {
  console.log('-- Resultado --')
  const bmiCalculated = calculateBMI(weightInKg, heightInCm);

  console.log(`Peso: ${weightInKg} kg;
Altura: ${(heightInCm/100).toFixed(2)} m;
IMC: ${bmiCalculated}.
}

main();
```

2. Agora, permita que o código seja executado através do comando `npm run bmi`.
- O novo código criado deve conter o comando que chama o node para executar o arquivo `bmi.js`.
```
// Arquivo package.json

{
  "name": "my-scripts",
  "version": "1.0.0",
  "description": "trybe-exercises-22-01",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "bmi": "node bmi.js" // LINHA ADICIONADA!
  },
  "author": "Guilherme Garcia",
  "license": "ISC"
}
```

3. Edite o código para que os valores de `weight` e `height` sejam informados pela pessoa ao responder as perguntas: “What’ your weight?” e “What’ your height?”, deve-se utilizar o pacote `readline-sync`.

✏️ Respostas abaixo...
- Primeiramente, deve-se instalar o pacote `readline-sync`.
```
npm i readline-sync
```
- Com o pacote instalado, pode-se editar o código.
```
// Arquivo bmi.js

const readline = require('readline-sync');

console.log('-- Cálculo de IMC --')
const weightInKg = readline.questionInt('Qual é o seu peso em kg? ');
const heightInCm = readline.questionInt('Qual é a sua altura em cm? ');

function calculateBMI(weight, height) {
  const heightInMeters = height/100;
  const bmi = weight/(heightInMeters ** 2);

  return Number(bmi.toFixed(2));
}

function main() {
  console.log('-- Resultado --')
  const bmiCalculated = calculateBMI(weightInKg, heightInCm);

  console.log(`Peso: ${weightInKg} kg;
Altura: ${(heightInCm/100).toFixed(2)} m;
IMC: ${bmiCalculated}.
}

main();
```

4. Agora temos um problema, o peso não é um número inteiro. Isso quer dizer que precisamos mudar um pouco a forma como solicitamos o input desse dado.
- O pacote `readline-sync` possui uma função específica para tratar esses casos. Consulte a documentação do pacote e encontre a função adequada para realizar input de valores `float`.

R.: Mudança da função `readline.questionInt` para `readline.questionFloat`.
```
// Arquivo bmi.js

const readline = require('readline-sync');

console.log('-- Cálculo de IMC --')
const weightInKg = readline.questionFloat('Qual é o seu peso em kg? '); // LINHA ALTERADA - 'questionInt' PARA 'questionFloat'
const heightInCm = readline.questionInt('Qual é a sua altura em cm? ');

function calculateBMI(weight, height) {
  const heightInMeters = height/100;
  const bmi = weight/(heightInMeters ** 2);

  return Number(bmi.toFixed(2));
}

function main() {
  console.log('-- Resultado --')
  const bmiCalculated = calculateBMI(weightInKg, heightInCm);

  console.log(`Peso: ${weightInKg} kg;
Altura: ${(heightInCm/100).toFixed(2)} m;
IMC: ${bmiCalculated}.
}

main();
```

5. Vamos sofisticar um pouco mais nosso exercício. Além de imprimir o IMC na tela, imprima também em qual categoria da tabela abaixo aquele IMC se enquadra. Considere a seguinte tabela para classificar a situação do IMC:
- Abaixo de 18,5: Abaixo do peso (magreza);
- Entre 18,5 e 24,9: Peso normal;
- Entre 25,0 e 29,9: Acima do peso (sobrepeso);
- Entre 30,0 e 34,9: Obesidade grau I;
- Entre 35,0 e 39,9: Obesidade grau II;
- 40,0 e acima: Obesidade graus III e IV.

✏️ Respostas abaixo...
- Criação do arquivo `bmiClassifications.js`.
```
const BMI_CLASSIFICATIONS = {
  'Abaixo do peso (magreza)': {
    minBMI: 0,
    maxBMI: 18.4,
  },
  'Peso normal': {
    minBMI: 18.5,
    maxBMI: 24.9,
  },
  'Acima do peso (sobrepeso)': {
    minBMI: 25,
    maxBMI: 29.9,
  },
  'Obesidade grau I': {
    minBMI: 30.0,
    maxBMI: 34.9,
  },
  'Obesidade grau II': {
    minBMI: 35,
    maxBMI: 39.9,
  },
  'Obesidade graus III e IV': {
    minBMI: 40,
    maxBMI: 100,
  },
};

module.exports = BMI_CLASSIFICATIONS;
```
- Novo código do arquivo `bmi.js`.
```
const readline = require('readline-sync');
const BMI_CLASSIFICATIONS = require('./bmiClassifications');

console.log('-- Cálculo de IMC --')
const weightInKg = readline.questionFloat('Qual é o seu peso em kg? ');
const heightInCm = readline.questionInt('Qual é a sua altura em cm? ');

function calculateBMI(weight, height) {
  const heightInMeters = height/100;
  const bmi = weight/(heightInMeters ** 2);

  return Number(bmi.toFixed(2));
}

function matchBMIClassif(bmi) {
  let classifMatched
  const classifValues = Object.values(BMI_CLASSIFICATIONS);

  classifValues.forEach((value, index) => {
    const ranges = Object.values(value);

    if (bmi >= ranges[0] && bmi <= ranges[1]) {
      classifMatched = Object.keys(BMI_CLASSIFICATIONS)[index];
    }
  })
  return classifMatched
}

function main() {
  console.log('-- Resultado --')
  const bmiCalculated = calculateBMI(weightInKg, heightInCm);
  const bmiClassif = matchBMIClassif(bmiCalculated);

  console.log(`Peso: ${weightInKg} kg;
Altura: ${(heightInCm/100).toFixed(2)} m;
IMC: ${bmiCalculated};
Classificação: ${bmiClassif}`);
}

main();
```