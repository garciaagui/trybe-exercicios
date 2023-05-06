// Exercícios do Dia Parte I - Objetos e For/In (Parte I)

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// Passo 1
console.log(`Bem-vinda, ${info['personagem']}!`);


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

// Passo 5
let infoPatinhas = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
};

for (let key in infoPatinhas) {

  if (info[key] === infoPatinhas[key]) {
    console.log(`Ambos ${key}s`);
  
  } else {
    console.log(`${info[key]} e ${infoPatinhas[key]}`);

  }

}