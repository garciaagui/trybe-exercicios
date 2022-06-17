const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const allLessons = Object.assign({}, {lesson1}, {lesson2}, {lesson3});

const getNumberOfStudentsPerSubject = (object, subject) => {
  const objectValues = Object.values(object);
  let numberOfStudents = 0;
  for (let i = 0; i < objectValues.length; i += 1) {
    if (objectValues[i].materia === subject) {
      numberOfStudents += objectValues[i].numeroEstudantes;
    }
  }
  return `O número total de estudantes que assistiram às aulas de ${subject} é de ${numberOfStudents}.`;
}
console.log(getNumberOfStudentsPerSubject(allLessons, 'História'));

const generateReport = (teacherName, totalSubjects, totalStudents) => {
  const report = {
    professor: teacherName,
    aulas: totalSubjects,
    estudantes: totalStudents
  }
  return report;
}

const generateTeacherReport = (object, teacher) => {
  const objectValues = Object.values(object);
  let subjectsTaught = [];
  let numberOfStudents = 0;
  for (let i = 0; i < objectValues.length; i += 1) {
    if (objectValues[i].professor === teacher) {
      subjectsTaught.push(objectValues[i].materia);
      numberOfStudents += objectValues[i].numeroEstudantes;
    }
  }
  const teacherReport = generateReport(teacher, subjectsTaught, numberOfStudents);
  return teacherReport;
}

console.log(generateTeacherReport(allLessons, 'Maria Clara'));