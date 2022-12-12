# ⚡ Atividades de Fixação & Exercícios | Bloco 26 - Dia 01 (Seção 08)

## ✅ Atividades de Fixação
1. Crie uma nova função para calcular a área de um losango. A área do losango é dada pelo resultado da multiplicação da diagonal maior (D) pela diagonal menor (d) dividido por dois - `A = (D * d) / 2`.
- Calcule a área de um losango que tem D = 32cm e d = 18cm;
- Calcule a área de um losango que tem D = 200cm e d = 50cm;
- Calcule a área de um losango que tem D = 75cm e d = 25cm.
```
// exercises.ts

//...

export function getDiamondArea(largerDiagonal: number, smallerDiagonal: number): number {
  return (largerDiagonal * smallerDiagonal) / 2;
}
```
```
// index.ts

import * as Ex from './exercises';

console.log("A ÁREA DE UM:");

//...

console.log(`- Losango de diagonal maior 32cm e diagonal menor 18cm: ${Ex.getDiamondArea(32, 18)}cm²`);
console.log(`- Losango de diagonal maior 200cm e diagonal menor 50cm: ${Ex.getDiamondArea(200, 50)}cm²`);
console.log(`- Losango de diagonal maior 75cm e diagonal menor tem 25cm: ${Ex.getDiamondArea(75, 25)}cm²`);

//...
```

2. Crie uma nova função para calcular a área de um trapézio. A área do trapézio é dada pelo produto da altura (h) com a soma da base maior (B) e a base menor (b) dividido por dois - `A = [(B + b) * h] / 2`.
- Calcule a área de um trapézio que tem B = 100cm, b = 70cm e altura = 50cm;
- Calcule a área de um trapézio que tem B = 75cm, b = 50cm e altura = 35cm;
- Calcule a área de um trapézio que tem B = 150cm, b = 120cm e altura = 80cm.
```
// exercises.ts

//...

export function getTrapezeArea(largerBase: number, smallerBase: number, height: number): number {
  return ((largerBase + smallerBase) * height) / 2;
}
```
```
// index.ts

import * as Ex from './exercises';

console.log("A ÁREA DE UM:");

//...

console.log(`- Trapézio de base maior 100cm, base menor 70cm e altura 50cm: ${Ex.getTrapezeArea(100, 70, 50)}cm²`);
console.log(`- Trapézio de base maior 75cm, base menor 50cm e altura 35cm: ${Ex.getTrapezeArea(75, 50, 35)}cm²`);
console.log(`- Trapézio de base maior 150cm, base menor 120cm e altura 80cm: ${Ex.getTrapezeArea(150, 120, 80)}cm²`);

//...
```

3. Crie uma nova função para calcular a área de um círculo. A área do círculo de raio r é calculada multiplicando o raio ao quadrado pelo número irracional ℼ (em geral utilizamos ℼ = 3,14) - `A = ℼ * r²`.
- Calcule a área de um círculo de raio igual 25cm;
- Calcule a área de um círculo de raio igual 100cm;
- Calcule a área de um círculo de raio igual 12,5cm.
```
// exercises.ts

//...

export function getCircleArea(radius: number): number {
  const result = (Math.PI * (radius ** 2)).toFixed(2);
  return parseFloat(result);
}
```
```
// index.ts

import * as Ex from './exercises';

console.log("A ÁREA DE UM:");

//...

console.log(`- Círculo de raio 25cm: ${Ex.getCircleArea(25)}cm²`);
console.log(`- Círculo de raio 100cm: ${Ex.getCircleArea(100)}cm²`);
console.log(`- Círculo de raio 12,5cm: ${Ex.getCircleArea(12.5)}cm²`);

//...
```

## ✅ Exercícios do dia

1. Temos um array characters que agrupa dados de jogadores em um MMORPG (“Jogo de representação de papéis online, multijogador em massa”) usado para manter o registro de uma guilda (grupo de jogadores) no acompanhamento da evolução do grupo. Esses dados foram adicionados sem se atentar para sua correta tipagem, o que pode ocasionar um bug no futuro. Faça a correta tipagem do array por meio do tipo Character e da função usada para imprimir as informações básicas de todos os jogadores.
```
type Character = any;

const characters: any = [
  {
    nickname: 'xKillerx',
    class: 'warrior',
    stats: { agi: 50, str: 100, int: 25, hp: 1000, mp: 300 },
    createdAt: new Date('2003-10-1'),
  },
  {
    nickname: 'jainaProud',
    class: 'mage',
    stats: { agi: 80, str: 40, int: 150, hp: 630, mp: 1100 },
    createdAt: new Date('2003-10-2'),
  },
  {
    nickname: 'catIn',
    class: 'hunter',
    stats: { agi: 150, str: 90, int: 80, hp: 800, mp: 600 },
    createdAt: new Date('2003-10-15'),
  },
];

function printCharacter(character: any, index: number) {
  const { nickname, class: cls, createdAt } = character;

  console.log(`\n\n===== Character: ${index + 1} ========`);
  console.log(`nickname: ${nickname}
class: ${cls}
createdAt: ${createdAt}`);
}

characters.forEach(printCharacter);
```
- Resposta...
```
// scripts/rpg.ts

type Character = {
  nickname: string,
  class: string,
  stats: {
    agi: number,
    str: number,
    int: number,
    hp: number,
    mp: number,
  }
  createdAt: Date,
};

const characters: Character[] = [
  {
    nickname: 'xKillerx',
    class: 'warrior',
    stats: { agi: 50, str: 100, int: 25, hp: 1000, mp: 300 },
    createdAt: new Date('2003-10-1')
  },
  {
    nickname: 'jainaProud',
    class: 'mage',
    stats: { agi: 80, str: 40, int: 150, hp: 630, mp: 1100 },
    createdAt: new Date('2003-10-2')
  },
  {
    nickname: 'catIn',
    class: 'hunter',
    stats: { agi: 150, str: 90, int: 80, hp: 800, mp: 600 },
    createdAt: new Date('2003-10-15')
  },
]

function printCharacter(character: Character, index: number) {
  const { nickname, class: cls, createdAt } = character;

  console.log(`\n\n===== Character: ${index + 1} ========`);
  console.log(`nickname: ${nickname}
class: ${cls}
createdAt: ${createdAt}`);
}

characters.forEach(printCharacter);
```

2. Crie um script para converter unidades de medida de comprimento:
- Esse script deverá se chamar `length.ts`;
- Ele deverá possuir uma função chamada `convert` que recebe como parâmetro:
  - valor - number
  - unidade base - string
  - unidade para a conversão - string
```
// scripts/length.ts

const units = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];

export function convert(value: number, baseUnit: string, convertUnit: string): number {
  const expoent = (units.indexOf(convertUnit)) - (units.indexOf(baseUnit));
  return value * (10 ** expoent);
}
```

3. Crie um script para converter unidades de medida de massa:
- Esse script deverá se chamar `mass.ts`;
- Ele deverá possuir uma função chamada `convert` que recebe como parâmetro:
  - valor - number
  - unidade base - string
  - unidade para a conversão - string
```
// scripts/mass.ts

const units = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'gg'];

export function convert(value: number, baseUnit: string, convertUnit: string): number {
  const expoent = (units.indexOf(convertUnit)) - (units.indexOf(baseUnit));
  return value * (10 ** expoent);
}
```

4. Crie um script para converter unidades de medida de capacidade:
- Esse script deverá se chamar `capacity.ts`;
- Ele deverá possuir uma função chamada `convert` que recebe como parâmetro:
  - valor - number
  - unidade base - string
  - unidade para a conversão - string
```
// scripts/capacity.ts

const units = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];

export function convert(value: number, baseUnit: string, convertUnit: string): number {
  const expoent = (units.indexOf(convertUnit)) - (units.indexOf(baseUnit));
  return value * (10 ** expoent);
}
```

5. Crie um script para converter unidades de medida de área:
- Esse script deverá se chamar `area.ts`;
- Ele deverá possuir uma função chamada `convert` que recebe como parâmetro:
  - valor - number
  - unidade base - string
  - unidade para a conversão - string
```
// scripts/area.ts

const units = ['km2', 'hm2', 'dam2', 'm2', 'dm2', 'cm2', 'mm2'];

export function convert(value: number, baseUnit: string, convertUnit: string): number {
  const expoent = ((units.indexOf(convertUnit)) - (units.indexOf(baseUnit))) * 2;
  return value * (10 ** expoent);
}
```

6. Crie um script para converter unidades de medida de volume:
- Esse script deverá se chamar `volume.ts`;
- Ele deverá possuir uma função chamada `convert` que recebe como parâmetro:
  - valor - number
  - unidade base - string
  - unidade para a conversão - string
```
// scripts/volume.ts

const units = ['km3', 'hm3', 'dam3', 'm3', 'dm3', 'cm3', 'mm3'];

export function convert(value: number, baseUnit: string, convertUnit: string): number {
  const expoent = ((units.indexOf(convertUnit)) - (units.indexOf(baseUnit))) * 3;
  return value * (10 ** expoent);
}
```

7. Utilize o pacote `readline-sync` e torne os scripts mais interativos. Em cada script, crie uma função chamada `exec q`ue:
- Capta as entradas da pessoa usuária via terminal;
- Chama a função de conversão passando as entradas da pessoa usuária como parâmetro;
- Exibe uma mensagem com o resultado. Ex: “1km é igual a 1000m.”;
- Não se esqueça de chamar a função `exec()`; ao final do script.

OBS.: A adaptação abaixo foi implementada em todos os outros scripts criados.
```
// scripts/length.ts

import readline from 'readline-sync';
const units = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];

export function convert(value: number, baseUnit: string, convertUnit: string): number {
  const expoent = (units.indexOf(convertUnit)) - (units.indexOf(baseUnit));
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
```

8. Crie um arquivo `index.ts` que pergunta qual conversão a pessoa usuária deseja realizar, e chama o script correspondente:
- O script deve ser acionado por meio do comando `npm start` no `package.json`;
- Utilize o `readline-sync` para realizar o input de dados;
- Quando executado, o script deve exibir uma lista numerada dos scripts disponíveis;
- Você pode utilizar o `require` para executar o script em questão.
```
// scripts/index.ts

import readline from "readline-sync";

const scripts = [
  { name: "Converter comprimento", script: "./length" },
  { name: "Converter massa", script: "./mass" },
  { name: "Converter capacidade", script: "./capacity" },
  { name: "Converter área", script: "./area" },
  { name: "Converter volume", script: "./volume" }
];

const scriptNames = scripts.map(item => item.name);

const choice = readline.keyInSelect(scriptNames, "Escolha um número para executar o script de conversão de unidade");

require(scripts[choice].script);
```