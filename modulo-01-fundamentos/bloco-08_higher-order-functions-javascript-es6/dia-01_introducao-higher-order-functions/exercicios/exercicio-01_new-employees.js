const generateNewEmployee = (fullName) => {
  const nameWithUnderline = fullName.toLowerCase().replace(/ /g, '_');
  const newEmail = `${nameWithUnderline}@trybe.com`;
  return {
    name: fullName,
    email: newEmail
  };
}

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  }
  return employees;
}

console.log(newEmployees(generateNewEmployee));
