"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = __importDefault(require("./Person"));
class Teacher extends Person_1.default {
    constructor(name, birthdate, subject, salary) {
        super(name, birthdate);
        this._subject = subject;
        this._salary = salary;
        this._registration = this.generateRegistration();
        this._admissionDate = new Date();
    }
    generateRegistration() {
        const randomStr = Math.floor(Date.now() * (Math.random() + 1));
        return `STU${randomStr}`;
    }
    validateSalary(newSalary) {
        if (newSalary < 0)
            throw new Error('Salary must be positive.');
    }
    validateRegistration(newRegistration) {
        if (newRegistration.length < 16)
            throw new Error('Registration must have at least 16 characters.');
    }
    validateAdmissionDate(newDate) {
        if (newDate.getTime() > Date.now())
            throw new Error('Admission date cannot be set in future.');
    }
    get subject() {
        return this._subject;
    }
    set subject(newSubject) {
        this._subject = newSubject;
    }
    get salary() {
        return this._salary;
    }
    set salary(newSalary) {
        this.validateSalary(newSalary);
        this._salary = newSalary;
    }
    get registration() {
        return this._registration;
    }
    set registration(newRegistration) {
        this.validateRegistration(newRegistration);
        this._registration = newRegistration;
    }
    get admissionDate() {
        return this._admissionDate;
    }
    set admissionDate(newDate) {
        this.validateAdmissionDate(newDate);
        this._admissionDate = newDate;
    }
}
exports.default = Teacher;
