class Car {
  _brand: string;
  _color: string;
  _doors: number;

  constructor(brand: string, color: string, doors: number) {
    this._brand = brand;
    this._color = color;
    this._doors = doors;
  }

  honk(): void {
    console.log('Carro buzinando!');
  }

  turnOn(): void {
    console.log('Carro ligando!');
  }

  turnOff(): void {
    console.log('Carro desligando!');
  }

  speedUp(): void {
    console.log('Carro acelerando!');
  }

  speedDown(): void {
    console.log('Carro reduzinho a velocidade!');
  }

  stop(): void {
    console.log('Carro parando!');
  }

  turn(direction: string): void {
    console.log(`Carro virando à ${direction}!`);
  }
}

const appCar = new Car('Volkswagen Gol', 'Prata', 4);

console.log('PRIMEIRA ROTA:')
appCar.turnOn();
appCar.speedUp();
appCar.speedDown();
appCar.turn('esquerda');
appCar.speedUp();
appCar.speedDown();
appCar.turn('direita');
appCar.speedUp();
appCar.speedDown();
appCar.turn('direita');
appCar.speedUp();
appCar.speedDown();
appCar.stop();

console.log('\n')

console.log('SEGUNDA ROTA:')
appCar.speedUp();
appCar.speedDown();
appCar.turn('direita');
appCar.speedUp();
appCar.speedDown();
appCar.turn('esquerda');
appCar.speedUp();
appCar.speedDown();
appCar.turn('direita');
appCar.speedUp();
appCar.speedDown();
appCar.stop();
appCar.speedUp();

export default Car;