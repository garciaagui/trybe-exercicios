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
  const name = entries[0][1];
  const phoneNumber = entries[1][1];
  const adressStreet = entries[2][1].street;
  const adressNumber = entries[2][1].number;
  const adressApartment = entries[2][1].apartment;
  return `Olá ${deliveryPerson}, entrega para: ${name}, Telefone: ${phoneNumber}, R. ${adressStreet}, Nº: ${adressNumber}, AP: ${adressApartment}.`;
}

console.log(customerInfo(order));

const orderModifier = (order) => {
  const oldOrder = order;
  const newOrder = Object.assign({}, oldOrder);
  newOrder.name = 'Luiz Silva';
  newOrder.payment.total = 50;
  return newOrder;
}

console.log(orderModifier(order));
