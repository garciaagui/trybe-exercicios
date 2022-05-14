// Exercício 5 - Ângulos dos Triângulos

const a = 90;
const b = 70;
const c = 60;
const soma = a + b + c;

console.log("Valores inseridos:");
console.log(`- Ângulo "a" = ${a} graus.`);
console.log(`- Ângulo "b" = ${b} graus.`);
console.log(`- Ângulo "c" = ${c} graus.`);

if (a < 0 || b < 0 || c < 0) {
    console.log("Os valores dos ângulos precisam ser positivos, verifique os valores inseridos.");

}  else {
    
    if (soma === 180) {
        console.log (`True! Os ângulos inseridos representam os ângulos de um triângulo - a soma dos três é igual a ${soma} graus.`);
    
    } else {
        console.log (`False! Os ângulos inseridos NÃO representam os ângulos de um triângulo - a soma dos três é igual a ${soma} graus.`);
    }

}