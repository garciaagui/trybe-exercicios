"use strict";
class Dog {
    constructor(name, color, breed, age) {
        this._name = name;
        this._color = color;
        this._breed = breed;
        this._age = age;
    }
    bark() {
        console.log(`${this._name} is barking!`);
    }
    sniff() {
        console.log(`${this._name} is sniffing something...`);
    }
    run() {
        console.log(`${this._name} starts running!`);
    }
}
const dogmeat = new Dog('Dogmeat', 'Brown and black', 'German Shepherd', 4);
console.log(dogmeat);
dogmeat.bark();
dogmeat.sniff();
dogmeat.run();
console.log('\n');
class House {
    constructor(color, rooms, floors, location) {
        this._color = color;
        this._rooms = rooms;
        this._floors = floors;
        this._location = location;
    }
    open() {
        console.log(`The house is now opened!`);
    }
    close() {
        console.log(`The house is now closed!`);
    }
}
const kaerMorhen = new House('Grey', 40, 15, 'Kaedwen');
console.log(kaerMorhen);
kaerMorhen.open();
kaerMorhen.close();
console.log('\n');
class Flight {
    constructor(fromLocation, toLocation, airline) {
        this._fromLocation = fromLocation;
        this._toLocation = toLocation;
        this._airline = airline;
    }
    takeOff() {
        console.log(`The ${this._airline} plane is departing from ${this._fromLocation} to ${this._toLocation}`);
    }
    land() {
        console.log(`The ${this._airline} plane from ${this._fromLocation} has arrived in ${this._toLocation}`);
    }
}
const ourFlight = new Flight('Metropolis', 'Gotham', 'American Airlines');
console.log(ourFlight);
ourFlight.takeOff();
ourFlight.land();
