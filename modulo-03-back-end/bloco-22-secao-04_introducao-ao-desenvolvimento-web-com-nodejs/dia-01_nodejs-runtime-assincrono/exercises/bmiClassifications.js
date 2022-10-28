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