const checkNumbers = (betNumber, prizeNumber) => {
  if (betNumber <= 0 || betNumber > 5) return 'Número apostado precisa estar entre 1 e 5';
  if (betNumber === prizeNumber) return 'Parabéns você ganhou';
  return 'Tente novamente';
};

const prizeDrawResult = (betNumber, callback) => {
  const prizeNumber = Math.floor((Math.random() * 5) + 1);
  return callback(betNumber, prizeNumber);
}

console.log(prizeDrawResult(5,checkNumbers));