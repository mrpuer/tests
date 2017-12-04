const fs = require('fs');
const path = require('path');

const filename = process.argv[2];
const extension = process.argv[3];

fs.readdir(filename, (err, files) => {
  if (err) return console.log(error);
  const result = files.filter(item => path.extname(item) === `.${extension}`);
  result.forEach(item => {
    console.log(item);
  })
});