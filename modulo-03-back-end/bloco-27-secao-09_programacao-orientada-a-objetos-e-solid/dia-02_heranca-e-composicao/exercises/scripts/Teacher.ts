import Employee from "./interfaces/IEmployee";
import Person from "./Person";
import Subject from "./Subject";

export default class Teacher extends Person implements Employee {
  private _subject: Subject;
  private _salary: number;
  private _registration: string;
  private _admissionDate: Date;

  constructor(name: string, birthdate: Date, subject: Subject, salary: number) {
    super(name, birthdate);
    this._subject = subject
    this._salary = salary;
    this._registration = this.generateRegistration();
    this._admissionDate = new Date();
  }

  public generateRegistration(): string {
    const randomStr = Math.floor(Date.now() * (Math.random() + 1));
    return `STU${randomStr}`;
  }

  private validateSalary(newSalary: number): void {
    if (newSalary < 0) throw new Error('Salary must be positive.')
  }

  private validateRegistration(newRegistration: string): void {
    if (newRegistration.length < 16) throw new Error('Registration must have at least 16 characters.')
  }

  private validateAdmissionDate(newDate: Date): void {
    if (newDate.getTime() > Date.now()) throw new Error('Admission date cannot be set in future.');
  }

  get subject(): Subject {
    return this._subject;
  }

  set subject(newSubject: Subject) {
    this._subject = newSubject;
  }

  get salary(): number {
    return this._salary;
  }

  set salary(newSalary: number) {
    this.validateSalary(newSalary);
    this._salary = newSalary;
  }

  get registration(): string {
    return this._registration;
  }

  set registration(newRegistration: string) {
    this.validateRegistration(newRegistration);
    this._registration = newRegistration;
  }

  get admissionDate(): Date {
    return this._admissionDate;
  }

  set admissionDate(newDate: Date) {
    this.validateAdmissionDate(newDate)
    this._admissionDate = newDate;
  }
}