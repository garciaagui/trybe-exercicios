// Exercício 05

import readline from 'readline-sync';
const units = ['km2', 'hm2', 'dam2', 'm2', 'dm2', 'cm2', 'mm2'];

export function convert(value: number, baseUnit: string, convertUnit: string): number {
  const expoent = ((units.indexOf(convertUnit)) - (units.indexOf(baseUnit))) * 2;
  return value * (10 ** expoent);
}

export function exec() {
  const valueToConvert = readline
    .questionFloat('Insira um valor a ser convertido: ');

  const fromUnit = readline
    .keyInSelect(units, 'Das unidades de medida disponíveis, qual é a unidade desse valor? ');

  const toUnit = readline
    .keyInSelect(units, 'Das unidades de medida disponíveis, deseja que o valor seja convertido para qual delas? ');

  const baseUnit = units[fromUnit];
  const convertUnit = units[toUnit];

  if (!baseUnit || !convertUnit) {
    console.log('Operação cancelada.');
    return null;
  }

  const valueConverted = convert(valueToConvert, baseUnit, convertUnit);

  console.log(`${valueToConvert}${baseUnit} é igual a ${valueConverted}${convertUnit}`);
}

exec();