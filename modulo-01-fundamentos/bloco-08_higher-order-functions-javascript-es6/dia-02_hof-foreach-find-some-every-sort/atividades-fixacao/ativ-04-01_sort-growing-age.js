const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const orderByGrowingAge = (array) => {
  return array.sort((elementA, elementB) => elementA.age > elementB.age ? 1 : -1 );
};

console.log(orderByGrowingAge(people));
