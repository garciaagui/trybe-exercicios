type Bird = {
  name: string;
  color: string;
  lengthInCm: number;
  massInKg: number;
};

type SumFunc = (a: number, b: number) => number;

type Address = {
  street: string;
  number: number;
  district: string;
  city: string;
  country: string;
}


function printBird(bird: Bird) {
  console.log(`Características da ${bird.name}:`);
  console.log(`Cor: ${bird.color}`);
  console.log(`Tamanho: ${bird.lengthInCm} cm`);
  console.log(`Peso: ${bird.massInKg} kg \n`);
}

const sum: SumFunc = function (x: number, y: number) {
  const result = x + y;
  console.log(`Resultado da soma: ${result} \n`);
  return result;
}

function printAddress(address: Address) {
  console.log(`Rua: ${address.street}`);
  console.log(`Número: ${address.number}`);
  console.log(`Bairro: ${address.district}`);
  console.log(`Cidade: ${address.city}`);
  console.log(`País: ${address.country}`);
}

console.log('Atividade 01');
printBird({ name: 'Arara', color: 'Azul', lengthInCm: 100, massInKg: 1.2 });

console.log('Atividade 02');
sum(10, 20);

console.log('Atividade 03');
printAddress({ street: 'Rua 1', number: 2, district: 'Bristol', city: 'Gotham', country: 'EUA' });