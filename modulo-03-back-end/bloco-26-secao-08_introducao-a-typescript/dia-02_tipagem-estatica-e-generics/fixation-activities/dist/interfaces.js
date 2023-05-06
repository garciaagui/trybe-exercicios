"use strict";
const ferrari = {
    model: 'Ferrari F8',
    brand: 'Ferrari',
    color: 'Red',
    year: 2022,
    action() {
        console.log(`${this.model} is accelerating!`);
    }
};
console.log(ferrari);
ferrari.action();
console.log('\n');
const garfield = {
    name: 'Garfield',
    breed: 'Persian',
    color: 'Orange',
    age: 44,
    meow() {
        console.log(`${this.name} is meowing... maybe he wants lasagna?`);
    },
};
console.log(garfield);
garfield.meow();
console.log('\n');
const f16 = {
    model: 'General Dynamics F-16',
    type: 'Military',
    country: 'USA',
    action() {
        console.log(`${this.model} is taking flight!`);
    },
};
console.log(f16);
f16.action();
