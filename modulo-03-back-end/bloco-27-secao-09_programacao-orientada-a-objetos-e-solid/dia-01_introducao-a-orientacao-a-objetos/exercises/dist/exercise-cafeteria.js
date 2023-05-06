"use strict";
class Customer {
    constructor(n) {
        this._name = n;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        if (value.length !== 3) {
            console.log('Error: Customer name must have at least 3 characters.');
        }
        else {
            this._name = value;
        }
    }
}
class OrderItem {
    constructor(product, price) {
        this._product = product;
        this._price = price;
    }
    get product() {
        return this._product;
    }
    set product(value) {
        if (value.length !== 3) {
            console.log('Error: Product name must have at least 3 characters.');
        }
        else {
            this._product = value;
        }
    }
    get price() {
        return this._price;
    }
    set price(value) {
        if (value <= 0) {
            console.log('Error: Price must be greater than 0.');
        }
        else {
            this._price = value;
        }
    }
}
class FullOrder {
    constructor(c, i, p, d) {
        this._items = [];
        this._discountPct = 0;
        this._customer = c;
        this._items = i;
        this._paymentMethod = p;
        this._discountPct = d;
    }
    get customer() {
        return this._customer;
    }
    set customer(value) {
        this._customer = value;
    }
    get items() {
        return this._items;
    }
    set items(value) {
        if (value.length < 0) {
            console.log('Error: Orders must have at least 1 item.');
        }
        else {
            this._items = value;
        }
    }
    get paymentMethod() {
        return this._paymentMethod;
    }
    set paymentMethod(value) {
        if (value.length < 3) {
            console.log('Error: Payment method must have at least 3 characters.');
        }
        else {
            this._paymentMethod = value;
        }
    }
    get discountPct() {
        return this._discountPct;
    }
    set discountPct(value) {
        if (value > 0 && value < 0.5) {
            this._discountPct = value;
        }
        else {
            console.log('Error: Discount percentage cannot be less than 0% or greater than 50%.');
        }
    }
    calculateGrossValue() {
        const grossValue = this._items.reduce((acc, curr) => {
            acc += curr.price;
            return acc;
        }, 0);
        return grossValue;
    }
    calculateNetValue() {
        const grossValue = this.calculateGrossValue();
        const discountValue = grossValue * this._discountPct;
        return grossValue - discountValue;
    }
}
const gothamCustomer = new Customer('Bruce Wayne');
const item1 = new OrderItem('Cheeseburger', 10);
const item2 = new OrderItem('Coke', 3);
const order1 = new FullOrder(gothamCustomer, [item1, item2], 'Credit Card', 0.1);
console.log(order1.calculateNetValue());
