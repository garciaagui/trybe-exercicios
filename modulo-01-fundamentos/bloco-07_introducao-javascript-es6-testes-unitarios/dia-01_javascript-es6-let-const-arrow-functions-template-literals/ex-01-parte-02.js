const number = 10;

// Metódo 1

const factorial = (n) => {
  let total = 1;
  if (n === 0) return `Factorial -> ${n}! = ${total}.`;
  else {
    for (let i = 1; i <= n; i += 1) {
      total *= i;
    }
  return `Factorial -> ${n}! = ${total}.`;
  }
}

console.log(factorial(number));

// Metódo 2 - Bônus

const recursiveFactorial = (n) => n > 1 ? n * recursiveFactorial(n - 1) : 1;

console.log(`Recursive Factorial -> ${number}! = ${recursiveFactorial(number)}.`);
