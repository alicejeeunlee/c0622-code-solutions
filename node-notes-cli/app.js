const fs = require('fs');

console.log(process.argv);

if (process.argv[2] === 'read') {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) throw err;
    const dataModel = require('./data.json');
    const notes = dataModel.notes;
    for (const note in notes) {
      console.log(`${note}: ${notes[note]}`);
    }
  });
}
