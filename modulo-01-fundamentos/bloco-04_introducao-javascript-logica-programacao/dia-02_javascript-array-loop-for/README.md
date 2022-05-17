# &#9889; Atividades de Fixação & Exercícios | Bloco 04 - Dia 02

#### Obs.: .

## &#9989; Atividade de Fixação 1 - Arrays (listas)

1. Obtenha o valor "Serviços" do *array* menu.
```
let menuServices = menu[1];
console.log(menuServices);

// Resultado esperado: "Serviços"
```

2. Procure o índice do valor "Portfólio" do *array* menu.
```
let indexOfPortfolio = menu.indexOf('Portfólio');
console.log(indexOfPortfolio);

// Resultado esperado: 2
```

3. Adicione o valor "Contato" no final do array menu:
```
menu.push('Contato');
console.log(menu);

// Resultado esperado: [ 'Home', 'Serviços', 'Portfólio', 'Links', 'Contato' ]
```

## &#9989; Atividade de Fixação 2 - For

- Utilize o *for* para imprimir os elementos da lista **groceryList** com o *console.log()*.
```
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length; index += 1) {
  console.log(`Item ${index+1}: ${groceryList[index]}`);
}
```

## &#9989; Exercícios do Dia

Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse *array* para realizar os exercícios do 1 ao 7:

> let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

```
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
}
```

2. Para o segundo exercício, some todos os valores contidos no *array* e imprima o resultado;
```
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
}

console.log(`A soma de todos os valores do array numbers é: ${sum}!`);

// Resultado esperado: "A soma de todos os valores do array numbers é: 278!"
```

3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no *array*;
- A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
```
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
}

let average = sum/numbers.length;

console.log(`A média aritmética dos valores do array numbers é igual a: ${average}.`);

// Resultado esperado: A média aritmética dos valores do array numbers é igual a: 27.8.
```

4. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
```
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
}

let average = sum/numbers.length;

console.log(`A média aritmética dos valores do array numbers é igual a: ${average}.`);

if (average > 20) {
  console.log("valor maior que 20");
} else {
  console.log("valor menor ou igual a 20");
}

// Resultado esperado:
//A média aritmética dos valores do array numbers é igual a: 27.8.
// valor maior que 20
```

5. Utilizando *for*, descubra qual o maior valor contido no *array* e imprima-o;
```
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let biggestNumber = 0;

for (index = 0; index < numbers.length; index += 1) {

  if (numbers[index] > biggestNumber) {
    biggestNumber = numbers[index];

  } else {
    biggestNumber = biggestNumber;
  
  }

}

console.log(`O maior valor contido no array numbers é o: ${biggestNumber}.`)

// Resultado esperado: "O maior valor contido no array numbers é o: 100." 
```

6. Descubra quantos valores ímpares existem no *array* e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
```
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let odd = 0;

for (index = 0; index < numbers.length; index += 1) {

  if (numbers[index]%2 === 1) {
    // console.log(`${numbers[index]} é ímpar!`);
    odd += 1;
  }

}

if (odd > 0) {
  console.log(`Há ${odd} números ímpares no array numbers.`);

} else {
  console.log(`Nenhum valor ímpar encontrado.`);
}

// Resultado esperado: "Há 6 números ímpares no array numbers."
```

7. Utilizando *for*, descubra qual o menor valor contido no *array* e imprima-o;
```
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let leastNumber = 0;


for (index = 0; index < numbers.length; index += 1) {

  if (index === 0) {
    leastNumber = numbers[index];
  }

  if (leastNumber > numbers[index]) {
    leastNumber = numbers[index];
  } else {
    leastNumber = leastNumber;
  }

}

console.log (`O menor valor contido no array numbers é o: ${leastNumber}.`);

// Resultado esperado: "O menor valor contido no array numbers é o: 2."
```

8. Utilizando *for*, crie um *array* que vá de 1 até 25 e imprima o resultado.
```
let nums = [];

for (index = 0; index < 25; index += 1) {
  nums.push(index+1);
  // console.log(`- Valor do índice ${index} do array: ${nums[index]}`);
}

console.log(`Valores contidos no array nums:\n${nums}.`)

// Resultado esperado:
// "Valores contidos no array nums:
// 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25."

```

9. Utilizando o *array* criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.
```
let nums = [];
let div = 0;

for (index = 0; index < 25; index += 1) {
  nums.push(index+1);
}

for (index = 0; index < nums.length; index += 1) {
  div = nums[index]/2;
  console.log(`- ${nums[index]}/2 = ${div}.`);
}

// Resultado esperado:
//- 1/2 = 0.5.
//- 2/2 = 1.
//- 3/2 = 1.5.
//- 4/2 = 2.
//- 5/2 = 2.5.
//- 6/2 = 3.
//- 7/2 = 3.5.
//- 8/2 = 4.
//- 9/2 = 4.5.
//- 10/2 = 5.
//- 11/2 = 5.5.
//- 12/2 = 6.
//- 13/2 = 6.5.
//- 14/2 = 7.
//- 15/2 = 7.5.
//- 16/2 = 8.
//- 17/2 = 8.5.
//- 18/2 = 9.
//- 19/2 = 9.5.
//- 20/2 = 10.
//- 21/2 = 10.5.
//- 22/2 = 11.
//- 23/2 = 11.5.
//- 24/2 = 12.
//- 25/2 = 12.5.
```

## &#9989; Exercícios Bônus - Bubble Sort

- Considere a estrutura e o array abaixo e faça os exercícios.
```
for (let index = 1; index < array.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (array[index] < array[secondIndex]) {
      let position = array[index];
      array[index] = array[secondIndex];
      array[secondIndex] = position;
    }
  }
}
```
```
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
```

1. Ordene o *array* **numbers** em ordem crescente e imprima seus valores;
```
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {

  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {

    if (numbers[index] < numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;

    }
  }
  // Para acompanhar o ordenamento a cada iteração...
  console.log(numbers)
}
```

2. Ordene o array numbers em ordem decrescente e imprima seus valores;
```

```

3. Agora crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push. O resultado deve ser o array abaixo:
> [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]
```

```