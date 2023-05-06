"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Subject {
    constructor(name) { this._name = name; }
    validateName(newName) {
        if (newName.length < 3)
            throw new Error('Subject name must have at least 3 letters.');
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        this.validateName(newName);
        this._name = newName;
    }
}
exports.default = Subject;
