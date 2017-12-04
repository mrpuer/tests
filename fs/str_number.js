const fs = require('fs');

const getAttribute = (flag) => {
  const index = process.argv.indexOf(flag);

  return process.argv[index + 1];
}

const filename = getAttribute('-f');
const symbol = '\n'.charCodeAt(0);

fs.readFile(filename, (err, content) => {
  if (err) return console.log(err);

  // console.log(content);
  // return content.reduce((acc, item) => {
  //   if (item === symbol) {
  //     acc++;
  //   }

  //   return acc;
  // }, 0);
  let acc = 0;
  for (let i = 0; i < content.length; i++) {
    if (content[i] === symbol) {
      acc++;
    }
  }

  console.log(`File ${filename} has a ${acc} strings.`);
});
