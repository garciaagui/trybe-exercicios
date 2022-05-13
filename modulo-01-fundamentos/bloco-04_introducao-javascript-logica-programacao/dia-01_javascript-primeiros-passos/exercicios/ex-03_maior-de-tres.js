// Exercício 3 - Maior de Três

const a = 125;
const b = 211;
const c = 79;

console.log (`Constante a = ${a}.`);
console.log (`Constante b = ${b}.`);
console.log (`Constante c = ${c}.`);


if (a > b && a > c) {
    console.log (`A constante com maior valor é a "a" = ${a}.`);

} else if (b > a && b > c) {
    console.log (`A constante com maior valor é a "b" = ${b}.`);

} else {
    console.log (`A constante com maior valor é a "c" = ${c}.`);
}