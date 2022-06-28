// Faça uma lista com as suas frutas favoritas
const specialFruit = ['maracujá', 'melancia', 'mexirica'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['chocolate', 'sorvete', 'leite condensado'];

const fruitSalad = (fruit, additional) => {
  const mixedItems = [...fruit, ...additional];
  return mixedItems;
};

console.log(fruitSalad(specialFruit, additionalItens));