const fs = require('fs');

let index = 2;
function readFiles() {
  if (index < process.argv.length) {
    fs.readFile(process.argv[index], 'utf8', (err, data) => {
      if (err) throw err;
      console.log(data);
      index++;
      readFiles();
    });
  }
}

readFiles();
