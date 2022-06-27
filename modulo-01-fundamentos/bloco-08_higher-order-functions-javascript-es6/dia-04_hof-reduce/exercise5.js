const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA(array) {
  return array.reduce((acc, curr) => {
    return acc + (curr.toUpperCase().split('A').length - 1);
  }, 0);
}

console.log(containsA(names));
