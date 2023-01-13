import Person from "./Person";

export default class Student extends Person {
  private _enrollment: string;
  private _examsGrades: number[] = [];
  private _assignmentsGrades: number[] = [];

  constructor(name: string, birthdate: Date) {
    super(name, birthdate);
    this._enrollment = this.generateEnrollment();
  }

  public sumGrades(): number {
    const arr = this._examsGrades.concat(this._assignmentsGrades);
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }

  public avgGrades(): number {
    const sum = this.sumGrades();
    const arr = this._examsGrades.concat(this._assignmentsGrades)
    const avg = sum / arr.length;

    return avg;
  }

  private generateEnrollment(): string {
    const randomStr = Math.floor(Date.now() * (Math.random() + 1));
    return `STU${randomStr}`;
  }

  private validateEnrollment(newEnrollment: string): void {
    if (newEnrollment.length < 16) throw new Error('Enrollment must have at least 16 characters.')
  }

  private validateExamsGrades(newGrades: number[]): void {
    if (newGrades.length !== 4) throw new Error('4 exams grades must be added.')
  }

  private validateAssignmentsGrades(newGrades: number[]): void {
    if (newGrades.length !== 2) throw new Error('2 assignments grades must be added.')
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(newEnrollment: string) {
    this.validateEnrollment(newEnrollment);
    this._enrollment = newEnrollment;
  }

  get examsGrades(): number[] {
    return this._examsGrades;
  }

  set examsGrades(newGrades: number[]) {
    this.validateExamsGrades(newGrades);
    this._examsGrades = newGrades;
  }

  get assignmentsGrades(): number[] {
    return this._assignmentsGrades;
  }

  set assignmentsGrades(newGrades: number[]) {
    this.validateAssignmentsGrades(newGrades);
    this._assignmentsGrades = newGrades;
  }

}