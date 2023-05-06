import IAgenda from "./interfaces/IAgenda";
import ITenis from "./interfaces/ITenis";
import Quadra from "./Quadra";
import normas from "./normas/normasDeUso";

export default class QuadraTenis extends Quadra {
  public normasTenis: ITenis = normas.tenis;

  public reservar<ITenis>(dataReservada: Date): IAgenda<ITenis> {
    return {
      protocolo: this.geraProtocolo(),
      data: dataReservada,
      regras: this.normasTenis as unknown as ITenis,
    }
  }

  private geraProtocolo(): string {
    return (Math.random() + 1).toString(30).substring(3);
  }
}