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

console.log(`A soma de todos os valores da array numbers é: ${sum}!`);

// Resultado esperado: "A soma de todos os valores da array numbers é: 278!"
```
