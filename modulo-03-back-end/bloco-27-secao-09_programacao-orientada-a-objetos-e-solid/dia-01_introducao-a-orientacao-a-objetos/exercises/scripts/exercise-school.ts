class Student {
  private _enrollment: string;
  private _name: string;
  private _examsGrades: number[];
  private _assignmentsGrades: number[];

  constructor(r: string, n: string) {
    this._enrollment = r;
    this._name = n;
    this._examsGrades = [];
    this._assignmentsGrades = [];
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
    if (arr.length !== 2) {
      console.log('Error: 2 grades must be added.');
    }
    else {
      this._assignmentsGrades = arr;
      console.log(`New assignments grades added: '${this._assignmentsGrades}'!`);
    }
  }

  sumGrades(): number {
    const arr = this._examsGrades.concat(this._assignmentsGrades);
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }

    return sum;
  }

  avgGrades(): number {
    const sum = this.sumGrades();
    const arr = this._examsGrades.concat(this._assignmentsGrades)
    const avg = sum / arr.length;

    return avg;
  }
}

const student1 = new Student('000000', 'Guilherme');

student1.examsGrades = [8, 6, 10, 9];
student1.assignmentsGrades = [5, 10];

console.log(`${student1.name}'s total score: ${student1.sumGrades()}`);
console.log(`${student1.name}'s average score: ${student1.avgGrades()}`);