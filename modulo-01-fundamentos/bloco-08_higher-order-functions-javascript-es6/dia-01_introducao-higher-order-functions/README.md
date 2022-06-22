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
