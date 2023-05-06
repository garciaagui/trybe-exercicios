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

const setDragonAttackDamage = (dragon) => {
  const minDamage = 15;
  const maxDamage = dragon.strength;
  const dragonDamage = Math.floor(Math.random() * (maxDamage - minDamage + 1) + minDamage);
  return dragonDamage;
}

const setWarriorAttackDamage = (warrior) => {
  const minDamage = warrior.strength;
  const maxDamage = warrior.strength * warrior.weaponDmg;
  const warriorDamage = Math.floor(Math.random() * (maxDamage - minDamage + 1) + minDamage);
  return warriorDamage;
}

const setMageAttackDamage = (mage) => {
  const minDamage = mage.intelligence;
  const maxDamage = mage.intelligence * 2;
  const mageStats = {
    manaSpent: 0,
    attack: 'Não possui mana suficiente'
  }
  if (mage.mana < 15) {
    return mageStats;
  } else {
    mageStats.attack = Math.floor(Math.random() * (maxDamage - minDamage + 1) + minDamage);
    mageStats.manaSpent = 15;
    return mageStats;
  }
}

const gameActions = {
  warriorTurn: (callback1) => {
    const warriorDamage = callback1(warrior);
    warrior.damage = warriorDamage;
    dragon.healthPoints -= warriorDamage;
  },
  mageTurn: (callback2) => {
    const mageStats = callback2(mage);
    const mageDamage = mageStats.attack;
    const mageMana = mageStats.manaSpent;
    mage.damage = mageDamage;
    mage.mana -= mageMana;
    dragon.healthPoints -= mageDamage;
  },
  dragonTurn: (callback3) => {
    const dragonDamage = callback3(dragon);
    dragon.damage = dragonDamage;
    warrior.healthPoints -= dragonDamage;
    mage.healthPoints -= dragonDamage;
  },
  showStats: () => console.log(battleMembers),
}

gameActions.warriorTurn(setWarriorAttackDamage);
gameActions.mageTurn(setMageAttackDamage);
gameActions.dragonTurn(setDragonAttackDamage);
gameActions.showStats();
