export default class Person {
  private _name: string;
  private _birthDate: Date;

  constructor(name: string, birthdate: Date) {
    this._name = name;
    this._birthDate = birthdate;
  }

  private validateName(newName: string): void {
    if (newName.length < 3) throw new Error('Name must have at least 3 letters.');
  }

  private validateDate(newDate: Date): void {
    const nowDate = Date.now();

    const timeDiff = Math.abs(nowDate - newDate.getTime());
    const age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);

    if (age > 120) throw new Error('Age cannot be more than 120 years old.');
    if (newDate.getTime() > nowDate) throw new Error('Birthdate cannot be set in future.');
  }

  get name(): string {
    return this._name;
  }

  get birthDate(): Date {
    return this._birthDate;
  }

  set name(newName: string) {
    this.validateName(newName);
    this._name = newName;
  }

  set birthDate(newDate: Date) {
    this.validateDate(newDate)
    this._birthDate = newDate;
  }
}