class Customer {
  private _name: string;

  constructor(n: string) {
    this._name = n;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (value.length !== 3) {
      console.log('Error: Customer name must have at least 3 characters.');
    }
    else {
      this._name = value;
    }
  }
}

class OrderItem {
  private _product: string;
  private _price: number;

  constructor(product: string, price: number) {
    this._product = product;
    this._price = price
  }

  get product(): string {
    return this._product;
  }

  set product(value: string) {
    if (value.length !== 3) {
      console.log('Error: Product name must have at least 3 characters.');
    }
    else {
      this._product = value;
    }
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    if (value <= 0) {
      console.log('Error: Price must be greater than 0.');
    }
    else {
      this._price = value;
    }
  }
}

class FullOrder {
  private _customer: Customer;
  private _items: OrderItem[] = [];
  private _paymentMethod: string;
  private _discountPct: number = 0;


  constructor(c: Customer, i: OrderItem[], p: string, d: number) {
    this._customer = c;
    this._items = i;
    this._paymentMethod = p;
    this._discountPct = d;
  }

  get customer(): Customer {
    return this._customer;
  }

  set customer(value: Customer) {
    this._customer = value;
  }

  get items(): OrderItem[] {
    return this._items;
  }

  set items(value: OrderItem[]) {
    if (value.length < 0) {
      console.log('Error: Orders must have at least 1 item.')
    }
    else {
      this._items = value;
    }
  }

  get paymentMethod(): string {
    return this._paymentMethod;
  }

  set paymentMethod(value: string) {
    if (value.length < 3) {
      console.log('Error: Payment method must have at least 3 characters.');
    }
    else {
      this._paymentMethod = value;
    }
  }

  get discountPct(): number {
    return this._discountPct;
  }

  set discountPct(value: number) {
    if (value > 0 && value < 0.5) {
      this._discountPct = value;
    }
    else {
      console.log('Error: Discount percentage cannot be less than 0% or greater than 50%.');
    }
  }

  calculateGrossValue(): number {
    const grossValue = this._items.reduce((acc, curr) => {
      acc += curr.price;
      return acc;
    }, 0)
    return grossValue;
  }

  calculateNetValue(): number {
    const grossValue = this.calculateGrossValue();
    const discountValue = grossValue * this._discountPct;
    return grossValue - discountValue;
  }
}

const customer1 = new Customer('Bruce Wayne');
const item1 = new OrderItem('Cheeseburger', 10);
const item2 = new OrderItem('Coke', 3);
const order1 = new FullOrder(customer1, [item1, item2], 'Credit Card', 0.1);
