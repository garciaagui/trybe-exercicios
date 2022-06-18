function hydrate(drinksDrunk) {
  let extractNumbers = drinksDrunk.match(/\d+/g).map(Number);
  let drinksNumber = 0;
  let glassesWater = 0;
  for (let i = 0; i < extractNumbers.length; i += 1) {
    drinksNumber += extractNumbers[i];
  }
  if (drinksNumber === 1) {
    glassesWater = `${drinksNumber} copo de água`;
  } else {
    glassesWater = `${drinksNumber} copos de água`;
  }
  return glassesWater;
}

module.exports = hydrate;
