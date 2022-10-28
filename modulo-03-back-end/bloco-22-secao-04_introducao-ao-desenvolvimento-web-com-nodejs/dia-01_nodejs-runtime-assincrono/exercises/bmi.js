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