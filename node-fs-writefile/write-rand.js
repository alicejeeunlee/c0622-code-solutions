const fs = require('fs');

const randomNum = Math.random();
fs.writeFile('random.txt', `${randomNum.toString()} \n`, err => {
  if (err) throw err;
});
