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