const fs = require('fs');

fs.writeFile('random.txt', `${Math.random().toString()} \n`, err => {
  if (err) throw err;
});
