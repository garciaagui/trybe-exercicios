interface IVehicle {
  drive(): void;
}

interface IFlyingVehicle {
  fly(): void;
}

interface IFuturisticVehicle extends IVehicle, IFlyingVehicle { }

export { IVehicle, IFlyingVehicle, IFuturisticVehicle };