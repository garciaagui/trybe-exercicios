import Clube from "./Clube";
import QuadraFutebol from "./QuadraFutebol";
import QuadraTenis from "./QuadraTenis";

const clube1 = new Clube();
const quadra1 = new QuadraFutebol();
const quadra2 = new QuadraTenis();

clube1.adicionarQuadra(quadra1);
clube1.adicionarQuadra(quadra2);

const reserva1 = quadra1.reservar(new Date('2023-09-23'));
const reserva2 = quadra2.reservar(new Date('2023-12-23'));

console.log(clube1);
console.log(clube1.buscarQuadra(1));
console.log(reserva1)
console.log(reserva2);