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

// Checagem da validade da ID
const checkIdValidity = (id) => {
  for (i = 0; i < professionalBoard.length; i += 1) {
    if (id === professionalBoard[i].id) {
      return i;
    }
  }
  // return undefined;
  throw new Error('ID não identificada');
};

// Checagem da disponibilidade da Informação/Detalhe
const checkDetailAvailability = (detail) => {
  const dataBaseDetails = Object.keys(professionalBoard[0]);
  for (i = 0; i < dataBaseDetails.length; i += 1) {
    if (detail === dataBaseDetails[i]) {
      return true;
    }
  }
  // return undefined;
  throw new Error('Informação indisponível');
};

// Pesquisa
const searchEmployee = (id, detail) => {
  try {
    const IdValidity = checkIdValidity(id, professionalBoard);
    // if (IdValidity === undefined) return 'ID não identificada';
    const position = IdValidity;
    checkDetailAvailability(detail, professionalBoard);
    // if (detailAvailability === undefined) return 'Informação indisponível';
    return professionalBoard[position][detail];
  }
  catch (error) {
    return error.message;
  }
};

console.log(searchEmployee('9852-2-2', 'specialities'));

module.exports = { checkIdValidity, checkDetailAvailability, searchEmployee };