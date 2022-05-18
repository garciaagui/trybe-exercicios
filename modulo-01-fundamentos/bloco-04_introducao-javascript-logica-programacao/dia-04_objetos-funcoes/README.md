# &#9889; Atividades de Fixação & Exercícios | Bloco 04 - Dia 04

## &#9989; Atividade de Fixação 1 - Objetos

1. Crie um *objeto* **player** contendo as variáveis listadas abaixo.
```
let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };
```
- Resolução:
```
let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: {
    golden: 2,
    silver: 3,
  },
};
```

2. Acesse as *chaves* **name, lastName e age** e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".
```
console.log(`A jogadora ${player.name} ${player.lastName} tem ${player.age} anos de idade`);

// Resultado esperado: "A jogadora Marta Silva tem 34 anos de idade"
```

3. Adicione ao objeto a *chave* **bestInTheWorld** e atribua a esta chave um *array* contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.
```
[2006, 2007, 2008, 2009, 2010, 2018]
```
- Resolução:
```
player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];
```

4. Acesse a *chave* **bestInTheWorld** e faça um *console.log* no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".
```
console.log (`A jogadora ${player.name} ${player.lastName} foi eleita a melhor do mundo por ${player.bestInTheWorld.length} vezes`)

// Resultado esperado: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes"
```

5. Acesse a *chave* **medals** e faça um *console.log* no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".
```
console.log(`A jogadora possui ${player.medals.golden} medalhas de ouro e ${player.medals.silver} medalhas de prata`)

// Resultado esperado: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata"
```

## &#9989; Atividade de Fixação 2 - For/In e For/Of

1. Usando o objeto abaixo, utilize *for/in* e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o "xxxxx" pelo nome em questão.
```
let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};
```
- Resolução:
```
for (let person in names) {
  console.log(`Olá ${names[person]}`);
}

// Resultado esperado:
//Olá João
//Olá Maria
//Olá Jorge
```

2. Usando o objeto abaixo, utilize *for/in* e imprima um *console.log* com as *chaves* e valores desse objeto.

```
let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};
```
- Resolução:
```
let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (let key in car) {
  console.log(`${key}: ${car[key]}`);
}

// Resultado esperado:
//model: A3 Sedan
//manufacturer: Audi
//year: 2020
```