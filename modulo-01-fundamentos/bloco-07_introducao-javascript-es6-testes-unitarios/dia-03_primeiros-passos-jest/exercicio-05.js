function techList(techListArray, personName) {
  if (techListArray.length === 0 || personName === 0) return 'Vazio!';
  techListArray = techListArray.sort();
  let techPerson = [];
  for (let i = 0; i < techListArray.length; i += 1) {
    techPerson.push({
      tech: techListArray[i],
      name: personName,
    });
  }
  return techPerson;
}

module.exports = techList;
