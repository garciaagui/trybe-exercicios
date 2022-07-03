const greet = (personName, greeting = 'Hello') => {
  return `${greeting}, ${personName}!`;
}

console.log(greet('John'));
console.log(greet('John', 'Good morning'));
console.log(greet('Isabela', 'Oi'));
