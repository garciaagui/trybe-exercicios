// Exercício 9 - Três Números, pelo menos um Ímpar

const x = 1;
const y = 7;
const z = 4;

if (x%2 === 1 || y%2 === 1 || z%2 === 1) {
    console.log('True! Pelo menos UM dos valores inseridos é ímpar!');
} else {
    console.log('False! NENHUM dos números inseridos é ímpar!');
}