// Exercícios do Dia Parte I - Objetos e For/In

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// Passo 1
// console.log(`Bem-vinda, ${info['personagem']}!`);


// Passo 2
info['recorrente'] = 'Sim';
console.log(info);


// Passo 3
for (let key in info) {
  console.log(key);
}

// Passo 4
for (let key in info) {
  console.log(info[key]);
}
