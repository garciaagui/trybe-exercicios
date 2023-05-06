"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = __importDefault(require("./Person"));
class Student extends Person_1.default {
    constructor(name, birthdate) {
        super(name, birthdate);
        this._examsGrades = [];
        this._assignmentsGrades = [];
        this._enrollment = this.generateEnrollment();
    }
    sumGrades() {
        const arr = this._examsGrades.concat(this._assignmentsGrades);
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }
    avgGrades() {
        const sum = this.sumGrades();
        const arr = this._examsGrades.concat(this._assignmentsGrades);
        const avg = sum / arr.length;
        return avg;
    }
    generateEnrollment() {
        const randomStr = Math.floor(Date.now() * (Math.random() + 1));
        return `STU${randomStr}`;
    }
    validateEnrollment(newEnrollment) {
        if (newEnrollment.length < 16)
            throw new Error('Enrollment must have at least 16 characters.');
    }
    validateExamsGrades(newGrades) {
        if (newGrades.length !== 4)
            throw new Error('4 exams grades must be added.');
    }
    validateAssignmentsGrades(newGrades) {
        if (newGrades.length !== 2)
            throw new Error('2 assignments grades must be added.');
    }
    get enrollment() {
        return this._enrollment;
    }
    set enrollment(newEnrollment) {
        this.validateEnrollment(newEnrollment);
        this._enrollment = newEnrollment;
    }
    get examsGrades() {
        return this._examsGrades;
    }
    set examsGrades(newGrades) {
        this.validateExamsGrades(newGrades);
        this._examsGrades = newGrades;
    }
    get assignmentsGrades() {
        return this._assignmentsGrades;
    }
    set assignmentsGrades(newGrades) {
        this.validateAssignmentsGrades(newGrades);
        this._assignmentsGrades = newGrades;
    }
}
exports.default = Student;
