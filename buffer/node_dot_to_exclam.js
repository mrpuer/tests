const stdin = process.stdin;
const stdout = process.stdout;

stdin.write('Enter some message.\n');

stdin.on('data', (message) => {
  const array = message.toString().split('');
  const result = array.map(item => item === '.' ? '!' : item);
  stdin.write(result.join(''));
  process.exit();
});

process.on('exit', () => process.stdout.write('\nGood Bye.'));