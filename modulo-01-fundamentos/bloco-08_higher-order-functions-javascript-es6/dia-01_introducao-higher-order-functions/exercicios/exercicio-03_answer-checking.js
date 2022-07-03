const checkAnswers = (rightAnswer, studentAnswer) => {
  if (rightAnswer === studentAnswer) return 1;
  if (studentAnswer === 'N.A') return 0;
  return -0.5;
;}

const determineFinalResult = (rightAnswersList, studentAnswersList, callback) => {
  let score = 0;
  for (let i = 0; i < rightAnswersList.length; i += 1) {
    const check = callback(rightAnswersList[i], studentAnswersList[i]);
    score += check;
  }
  return `Resultado final: ${score} pontos.`;
}

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(determineFinalResult(rightAnswers, studentAnswers, checkAnswers));