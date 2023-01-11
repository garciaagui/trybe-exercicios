class Student {
  private _enrollment: string;
  private _name: string;
  private _examsGrades: number[];
  private _assignmentsGrades: number[];

  constructor(r: string, n: string, en: number[], an: number[]) {
    this._enrollment = r;
    this._name = n;
    this._examsGrades = en;
    this._assignmentsGrades = an;
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    if (value.length !== 6) {
      console.log('Error: Enrollment value must have 6 characters.');
    }
    else {
      this._enrollment = value;
      console.log(`New enrollment added: '${this._enrollment}'!`);
    }
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (value.length < 3) {
      console.log('Error: Name value must have at least 3 characters.');
    }
    else {
      this._name = value;
      console.log(`New name added: '${this._name}'!`);
    }
  }

  get examsGrades(): number[] {
    return this._examsGrades;
  }

  set examsGrades(arr: number[]) {
    if (arr.length !== 4) {
      console.log('Error: 4 grades must be added.');
    }
    else {
      this._examsGrades = arr;
      console.log(`New exams grades added: '${this._examsGrades}'!`);
    }
  }

  get assignmentsGrades(): number[] {
    return this._assignmentsGrades;
  }

  set assignmentsGrades(arr: number[]) {
    if (arr.length !== 4) {
      console.log('Error: 2 grades must be added.');
    }
    else {
      this._assignmentsGrades = arr;
      console.log(`New assignments grades added: '${this._assignmentsGrades}'!`);
    }
  }
}

const student1 = new Student('000000', 'Guilherme', [8, 6, 9, 10], [10, 8]);