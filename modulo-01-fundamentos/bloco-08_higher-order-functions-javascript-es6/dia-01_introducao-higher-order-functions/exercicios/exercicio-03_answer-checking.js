const checkAnswers = (rightAnswersList, studentAnswersList) => {
  let score = 0;
  let hits = 0;
  for (let i = 0; i < rightAnswersList.length; i += 1) {
    if (studentAnswersList[i] === 'N.A') { score = score }
    else if (studentAnswersList[i] === rightAnswersList[i]) { score += 1; hits += 1 }
    else if (studentAnswersList[i] !== rightAnswersList[i]) { score -= 0.5 }
  }
  return {
    finalScore: `${score} points`,
    finalHits: `${hits} right answers`
  };
}

const determineFinalResult = (rightAnswersList, studentAnswersList, callback) => {
  return callback(rightAnswersList, studentAnswersList);
}

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(determineFinalResult(rightAnswers, studentAnswers, checkAnswers));