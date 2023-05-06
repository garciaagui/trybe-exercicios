export default class Subject {
  private _name: string;

  constructor(name: string) { this._name = name; }

  private validateName(newName: string): void {
    if (newName.length < 3) throw new Error('Subject name must have at least 3 letters.');
  }

  get name(): string {
    return this._name;
  }

  set name(newName: string) {
    this.validateName(newName);
    this._name = newName;
  }
}