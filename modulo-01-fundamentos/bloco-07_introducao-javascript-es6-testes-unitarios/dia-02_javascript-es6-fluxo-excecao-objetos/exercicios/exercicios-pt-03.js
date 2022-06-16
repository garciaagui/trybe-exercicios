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


// Tarefa 01
const addShift = (object, key, value) => {
  object[key] = value;
  return object;
}
console.log(addShift(lesson2, 'turno', 'noite'));

// Tarefa 02
const listObjectKeys = (object) => Object.keys(object);
console.log(listObjectKeys(lesson1));
console.log(listObjectKeys(lesson2));
console.log(listObjectKeys(lesson3));

// Tarefa 03
const getObjectLength = (object) => Object.keys(object).length;
console.log(getObjectLength(lesson1));
console.log(getObjectLength(lesson2));
console.log(getObjectLength(lesson3));

// Tarefa 04
const listObjectValues = (object) => Object.values(object);
console.log(listObjectValues(lesson1));
console.log(listObjectValues(lesson2));
console.log(listObjectValues(lesson3));

// Tarefa 05
const allLessons = Object.assign({}, {lesson1}, {lesson2}, {lesson3});
console.log(allLessons);

// Tarefa 06
const getAllStudents = (object) => {
  const objectValues = Object.values(object);
  let totalStudents = 0;
  for (let i = 0; i < objectValues.length; i += 1) {
    totalStudents += objectValues[i].numeroEstudantes;
  }
  return `O número total de estudantes entre todas as classes é de ${totalStudents}.`;
}
console.log(getAllStudents(allLessons));

// Tarefa 07
const getValueByNumber = (object, value) => {
  const keyValues = Object.values(object);
  return keyValues[value];
}
console.log(getValueByNumber(lesson1, 0));

// // Tarefa 08
const verifyPair = (object, key, value) => {
  if (object[key] == value) return true
  else return false
}
console.log(verifyPair(lesson1, 'materia', 'Matemática'));
