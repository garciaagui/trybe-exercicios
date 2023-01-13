import Person from "./Person";
import Student from "./Student";
import Subject from "./Subject";
import Teacher from "./Teacher";

const person1 = new Person('Bruce Wayne', new Date('1939-03-27'));
const person2 = new Person('Peter Parker', new Date('1962-08-01'));

// console.log(person1);
// console.log(person2);

const student1 = new Student('Dick Grayson', new Date('1940-03-06'));
const student2 = new Student('Miles Morales', new Date('2011-07-20'));
const student3 = new Student('Kamala Khan', new Date('2013-08-01'));
const student4 = new Student('William Kaplan', new Date('2005-02-09'));
const student5 = new Student('America Chavez', new Date('2011-07-06'));

student1.examsGrades = [10, 7, 6.5, 9];
student2.examsGrades = [6, 5.5, 8, 7];
student3.examsGrades = [6, 10, 8, 10];
student4.examsGrades = [10, 10, 8.8, 9];
student5.examsGrades = [7, 7, 9, 9.7];

student1.assignmentsGrades = [10, 4];
student2.assignmentsGrades = [10, 9];
student3.assignmentsGrades = [7.5, 8];
student4.assignmentsGrades = [10, 10];
student5.assignmentsGrades = [8, 8];

// console.log(student1);
// console.log(student2);
// console.log(student3);
// console.log(student4);
// console.log(student5);

// console.log(student1.avgGrades());
// console.log(student1.sumGrades());

const subject1 = new Subject('Math');
const subject2 = new Subject('History');
const subject3 = new Subject('Philosophy');

// console.log(subject1);
// console.log(subject2);
// console.log(subject3);

const teacher1 = new Teacher('Professor Xavier', new Date('1963-07-02'), subject3, 10000);
const teacher2 = new Teacher('Iruka Sensei', new Date('1980-05-26'), subject2, 3000);
const teacher3 = new Teacher('Master Yoda', new Date('1900-11-18'), subject1, 0);

// console.log(teacher1);
// console.log(teacher2);
// console.log(teacher3);