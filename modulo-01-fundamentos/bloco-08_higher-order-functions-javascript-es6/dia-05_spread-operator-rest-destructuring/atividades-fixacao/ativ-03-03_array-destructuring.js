let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log acima

const [odd1, odd2, odd3, ...restEvens] = numerosPares;

console.log(restEvens);
