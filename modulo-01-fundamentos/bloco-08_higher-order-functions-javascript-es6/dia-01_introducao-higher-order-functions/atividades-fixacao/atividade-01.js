const wakeUp = () => { return 'Acordando!!' };

const takeBreakfast = () => { return 'Bora tomar café!!' };

const goToBed = () => { return 'Partiu dormir!!' };

const doingThings = (func) => { return console.log(func) };

doingThings(wakeUp());
doingThings(takeBreakfast());
doingThings(goToBed());
