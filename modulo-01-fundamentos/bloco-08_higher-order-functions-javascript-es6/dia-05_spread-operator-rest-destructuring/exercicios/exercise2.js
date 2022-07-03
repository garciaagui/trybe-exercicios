const sum = (...args) => {
  return args.reduce((acc, curr) => acc + curr, 0);
};

console.log(sum(2,5,8,9,10,20));
