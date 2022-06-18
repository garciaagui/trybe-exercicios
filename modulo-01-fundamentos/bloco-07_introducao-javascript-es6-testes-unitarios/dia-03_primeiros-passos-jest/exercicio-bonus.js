// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

console.log(Object.keys(professionalBoard[0]));

const checkIdValidaty = (seekedId) => {
  const professionalBoardValues = Object.values(professionalBoard);

  for (let i = 0; i < professionalBoardValues.length; i += 1) {
    if (professionalBoardValues[i].id === seekedId) return i;
  }
  return 'id not found';
}

const checkDetailValidaty = (seekedDetail) => {
  const details = Object.keys(professionalBoard[0]);
}

// const checkDetailValidaty = (nestedObject, seekedDetail) => {
//   const professionalBoardValues = Object.values(professionalBoard);
//   const id = professionalBoardValues[nestedObject].id;
// }

// Pesquisa
// const searchEmployee = (id, detail) => {

// };
