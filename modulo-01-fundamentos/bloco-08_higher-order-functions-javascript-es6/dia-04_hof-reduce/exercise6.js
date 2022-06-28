const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const averages = grades.map((grade) => {
  return grade.reduce((acc, curr) => {
    return acc + curr;
  })/grade.length;
});

function studentAverage() {
  return students.map((student, index) => {
    return {
      name: student,
      average: averages[index]
    };
  });
};

console.log(studentAverage());
