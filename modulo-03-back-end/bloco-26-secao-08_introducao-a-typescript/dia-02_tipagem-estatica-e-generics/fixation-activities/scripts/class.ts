class Dog {
  _name: string;
  _color: string;
  _breed: string;
  _age: number;

  constructor(name: string, color: string, breed: string, age: number) {
    this._name = name;
    this._color = color;
    this._breed = breed;
    this._age = age;
  }

  bark(): void {
    console.log(`${this._name} is barking!`);
  }

  sniff(): void {
    console.log(`${this._name} is sniffing something...`);
  }

  run(): void {
    console.log(`${this._name} starts running!`);
  }
}

const dogmeat = new Dog('Dogmeat', 'Brown and black', 'German Shepherd', 4);

console.log(dogmeat);
dogmeat.bark();
dogmeat.sniff();
dogmeat.run();

console.log('\n')

class House {
  _color: string;
  _rooms: number;
  _floors: number;
  _location: string;

  constructor(color: string, rooms: number, floors: number, location: string) {
    this._color = color;
    this._rooms = rooms;
    this._floors = floors;
    this._location = location;
  }

  open(): void {
    console.log(`The house is now opened!`);
  }

  close(): void {
    console.log(`The house is now closed!`);
  }
}

const kaerMorhen = new House('Grey', 40, 15, 'Kaedwen');

console.log(kaerMorhen);
kaerMorhen.open();
kaerMorhen.close();

console.log('\n')

class Flight {
  _fromLocation: string;
  _toLocation: string;
  _airline: string;

  constructor(fromLocation: string, toLocation: string, airline: string) {
    this._fromLocation = fromLocation;
    this._toLocation = toLocation;
    this._airline = airline;
  }

  takeOff(): void {
    console.log(`The ${this._airline} plane is departing from ${this._fromLocation} to ${this._toLocation}`);
  }

  land(): void {
    console.log(`The ${this._airline} plane from ${this._fromLocation} has arrived in ${this._toLocation}`);
  }
}

const ourFlight = new Flight('Metropolis', 'Gotham', 'American Airlines');

console.log(ourFlight);
ourFlight.takeOff();
ourFlight.land();