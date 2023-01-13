"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, birthdate) {
        this._name = name;
        this._birthDate = birthdate;
    }
    validateName(newName) {
        if (newName.length < 3)
            throw new Error('Name must have at least 3 letters.');
    }
    validateDate(newDate) {
        const nowDate = Date.now();
        const timeDiff = Math.abs(nowDate - newDate.getTime());
        const age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
        if (age > 120)
            throw new Error('Age cannot be more than 120 years old.');
        if (newDate.getTime() > nowDate)
            throw new Error('Birthdate cannot be set in future.');
    }
    get name() {
        return this._name;
    }
    get birthDate() {
        return this._birthDate;
    }
    set name(newName) {
        this.validateName(newName);
        this._name = newName;
    }
    set birthDate(newDate) {
        this.validateDate(newDate);
        this._birthDate = newDate;
    }
}
exports.default = Person;
