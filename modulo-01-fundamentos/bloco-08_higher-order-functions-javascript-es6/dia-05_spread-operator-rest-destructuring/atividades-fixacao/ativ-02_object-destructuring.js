const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const fullProfile = {...user, ...jobInfos};

const { name, age, nationality, profession, squad, squadInitials } = fullProfile;

console.log(`Hello there! My name is ${name} and I'm ${age} years old. I'm ${nationality} and I work for ${squad} (${squadInitials}) as a ${profession}.`);