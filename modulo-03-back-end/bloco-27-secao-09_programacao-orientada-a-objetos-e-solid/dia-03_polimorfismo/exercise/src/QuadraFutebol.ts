import IAgenda from "./interfaces/IAgenda";
import IFutebol from "./interfaces/IFutebol";
import Quadra from "./Quadra";
import normas from "./normas/normasDeUso";

export default class QuadraFutebol extends Quadra {
  public normasFutebol: IFutebol = normas.futebol;

  public reservar<IFutebol>(dataReservada: Date): IAgenda<IFutebol> {
    return {
      protocolo: this.geraProtocolo(),
      data: dataReservada,
      regras: this.normasFutebol as unknown as IFutebol,
    }
  }

  private geraProtocolo(): string {
    return (Math.random() + 1).toString(30).substring(3);
  }
}
