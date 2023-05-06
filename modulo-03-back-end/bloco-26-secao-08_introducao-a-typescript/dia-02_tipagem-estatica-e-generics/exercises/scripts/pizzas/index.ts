import CommonPizza from "./commonPizza";
import SweetPizza from "./sweetPizza";
import VeganPizza from "./veganPizza";

const Calabresa: CommonPizza = {
  flavor: 'Calabresa',
  slices: 8,
};

const Frango: CommonPizza = {
  flavor: 'Frango',
  slices: 6,
};

const Pepperoni: CommonPizza = {
  flavor: 'Pepperoni',
  slices: 4,
};

const Marguerita: VeganPizza = {
  flavor: 'Marguerita',
  slices: 8,
};

const Cogumelo: VeganPizza = {
  flavor: 'Cogumelo',
  slices: 4,
};

const Goiabada: SweetPizza = {
  flavor: 'Goiabada com Queijo',
  slices: 4,
};

console.log(Calabresa);
console.log(Frango);
console.log(Pepperoni);
console.log(Marguerita);
console.log(Cogumelo);
console.log(Goiabada);