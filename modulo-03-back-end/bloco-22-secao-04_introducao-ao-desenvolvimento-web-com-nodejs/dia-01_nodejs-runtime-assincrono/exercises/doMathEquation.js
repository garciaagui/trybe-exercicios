const readline = require('readline-sync');

async function doMathEquation(n1, n2, n3) {
  return new Promise((resolve, reject) => {
    if (typeof n1 !== 'number' || typeof n2 !== 'number' || typeof n3 !== 'number') {
      reject(new Error("Informe apenas números"));
    }

    const result = ((n1 + n2) * n3);
    
    if (result < 50) {
      reject(new Error("Valor muito baixo"));
    }
    resolve(result)
  });
}

async function main() {
  const n1 = readline.questionInt('Insira o primeiro número: ');
  const n2 = readline.questionInt('Insira o segundo número: ');
  const n3 = readline.questionInt('Insira o terceiro número: ');
  try {
    const result = await doMathEquation(n1, n2, n3);
    console.log(result);
    } catch (error) {
    console.log(error.message);
    }
}

main();