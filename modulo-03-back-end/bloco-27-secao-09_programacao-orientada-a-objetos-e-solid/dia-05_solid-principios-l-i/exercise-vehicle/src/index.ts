import AirPlane from "./AirPlane";
import Car from "./Car";
import FuturisticCar from "./FuturisticCar";

const createVehicles = () => {
  const fusca = new Car();
  fusca.drive();

  const boeing = new AirPlane();
  boeing.fly();

  const eve = new FuturisticCar();
  eve.drive();
  eve.fly();
}

createVehicles();