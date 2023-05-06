const readline = require('readline-sync');

function showFibonacciSequenceElements(n) {
  const hiddenSequence = [0, 1];

  if (n <= 0 ) throw(new Error("Valor Inválido"));
  if (n === 1) return console.log(hiddenSequence.slice(1, 2));

  const wantedSequence = [...hiddenSequence];

  for (let i = 2; i <= n; i++) {
    wantedSequence.push(wantedSequence[i-2] + wantedSequence[i-1]);
  }

  // Remove o zero da sequência...
  wantedSequence.splice(0,1);
  return console.log(wantedSequence);
}  

function main() {
  const n = readline.questionInt('Insira um número inteiro positivo: ');
  console.log(`Os ${n} primeiros elementos da sequência Fibonacci são: \n`)
  showFibonacciSequenceElements(n);
}

main();