import IAgenda from "./interfaces/IAgenda";

abstract class Quadra {
  protected abstract reservar<T>(dataReservada: Date): IAgenda<T>;
}

export default Quadra;
