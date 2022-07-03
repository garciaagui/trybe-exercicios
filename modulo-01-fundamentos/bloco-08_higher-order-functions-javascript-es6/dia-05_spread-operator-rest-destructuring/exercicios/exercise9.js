const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};

const yearMonths = () => {
  const { spring, summer, autumn, winter } = yearSeasons;
  [december, january, february ] = winter
  const months = [january, february, ...spring, ...summer, ...autumn, december];
  return months;
}

console.log(yearMonths())
