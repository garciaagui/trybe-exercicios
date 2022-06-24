const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const setDragonAttackDamage = () => {
  const minDamage = 15;
  const maxDamage = dragon.strength;
  const dragonDamage = Math.floor(Math.random() * (maxDamage - minDamage + 1) + minDamage);
  return dragonDamage;
}

const setWarriorAttackDamage = () => {
  const minDamage = warrior.strength;
  const maxDamage = warrior.strength * warrior.weaponDmg
  const warriorDamage = Math.floor(Math.random() * (maxDamage - minDamage + 1) + minDamage);
  return warriorDamage;
}

const setMageAttackDamage = () => {
  let mageDamage = 0;
  if (mage.mana < 15) {
    mageDamage = 0;
    return 'Não possui mana suficiente';
  } else {
    mage.mana -= 15;
    const minDamage = mage.intelligence;
    const maxDamage = mage.intelligence * 2;
    mageDamage = Math.floor(Math.random() * (maxDamage - minDamage + 1) + minDamage);
    return mageDamage;
  }
}

const gameActions = {
  warriorTurn: (callback1) => {
    warrior.damage = callback1();
    dragon.healthPoints -= warrior.damage;
  },
  mageTurn: (callback2) => {
    mage.damage = callback2();
    dragon.healthPoints -= mage.damage;
  },
  dragonTurn: (callback3) => {
    dragon.damage = callback3();
    warrior.healthPoints -= dragon.damage;
    mage.healthPoints -= dragon.damage;
  },
  showStats: () => console.log(battleMembers),
}

gameActions.warriorTurn(setWarriorAttackDamage);
gameActions.mageTurn(setMageAttackDamage);
gameActions.dragonTurn(setDragonAttackDamage);
gameActions.showStats();
