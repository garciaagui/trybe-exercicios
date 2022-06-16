const nome = 'Guilherme';

const replaceX = (name) => {
  const frase = 'Tryber x aqui!';
  const fraseAlterada = frase.replace('x', name);
  return fraseAlterada;
}

const skillsTrybe = (tryber) => {
  const skills = ['HTML', 'CSS', 'JavaScript'];
  return `${tryber}
  Minhas três principais habilidades são:
  - ${skills[0]};
  - ${skills[1]};
  - ${skills[2]}.`
}

// console.log(skillsTrybe(replaceX(nome)));