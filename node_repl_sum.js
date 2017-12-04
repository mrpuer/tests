process.stdin.write('Введите числа для сложения, через пробел.\n')
process.stdin.on('data', (data) => {
  const stringData = data.toString();
  const arrayData = stringData.split(' ');
  const response = arrayData.reduce((acc, item) => {
    acc += +item;
    return acc;
  }, 0);
  process.stdout.write(response.toString());
  process.exit();
});

process.on('exit', () => process.stdout.write('\nGood Bye.') );
