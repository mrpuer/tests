const numbers = process.argv.slice(2);
const response = numbers.reduce((acc, item) => {
  acc += +item;
  return acc;
}, 0);

process.stdin.write(`The sum of the numbers is ${response}`);
