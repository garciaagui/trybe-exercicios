const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const entries = Object.entries(order);
  const deliveryPerson = entries[3][1].delivery.deliveryPerson;
  const customerName = entries[0][1];
  const customerPhoneNumber = entries[1][1];
  const customerAdressStreet = entries[2][1].street;
  const customerAdressNumber = entries[2][1].number;
  const customerAdressApartment = entries[2][1].apartment;
  return `Olá ${deliveryPerson}, entrega para: ${customerName}, Telefone: ${customerPhoneNumber}, R. ${customerAdressStreet}, Nº: ${customerAdressNumber}, AP: ${customerAdressApartment}.`;
}

console.log(customerInfo(order));

const orderModifier = (order) => {
  const oldOrder = order;
  const newOrder = Object.assign({}, oldOrder);
  const customerName = newOrder.name = 'Luiz Silva';
  const pizzas = Object.keys(newOrder.order.pizza);
  const pizza1 = pizzas[0];
  const pizza2 = pizzas[1];
  const drink = Object.values(newOrder.order.drinks.coke);
  const drink1 = drink[0];
  const totalPrice = newOrder.payment.total = 50;
  return `Olá ${customerName}, o total do seu pedido de ${pizza1}, ${pizza2} e ${drink1} é R$ ${totalPrice},00.`;
}

console.log(orderModifier(order));
