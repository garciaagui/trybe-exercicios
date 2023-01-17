import { IFuturisticVehicle } from './interfaces';

export default class FuturisticCar implements IFuturisticVehicle {
  drive(): void { console.log('Driving a futuristic car'); }

  fly(): void { console.log('Flying a futuristic car'); }
}
