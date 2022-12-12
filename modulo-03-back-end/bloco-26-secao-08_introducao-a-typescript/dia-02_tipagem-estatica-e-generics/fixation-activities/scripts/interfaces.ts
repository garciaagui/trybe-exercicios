interface Car {
  model: string;
  brand: string;
  color: string;
  year: number;
  action(): void;
}

const ferrari: Car = {
  model: 'Ferrari F8',
  brand: 'Ferrari',
  color: 'Red',
  year: 2022,
  action(): void {
    console.log(`${this.model} is accelerating!`);
  }
}

console.log(ferrari);
ferrari.action();

console.log('\n');


interface Feline {
  name: string;
  breed: string;
  color: string;
  age: number;
  meow(): void;
}

const garfield: Feline = {
  name: 'Garfield',
  breed: 'Persian',
  color: 'Orange',
  age: 44,
  meow(): void {
    console.log(`${this.name} is meowing... maybe he wants lasagna?`)
  },
}

console.log(garfield);
garfield.meow();

console.log('\n');

interface Aircraft {
  model: string;
  type: string;
  country: string;
  action(): void;
}

const f16: Aircraft = {
  model: 'General Dynamics F-16',
  type: 'Military',
  country: 'USA',
  action(): void {
    console.log(`${this.model} is taking flight!`)
  },
}

console.log(f16);
f16.action();