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
} else if (process.argv[2] === 'create') {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) throw err;
    const dataModel = require('./data.json');
    const notes = dataModel.notes;
    notes[dataModel.nextId] = process.argv[3];
    dataModel.nextId++;
    console.log(dataModel.nextId);
    console.log('updated dataModel', dataModel);
    const JSONdata = JSON.stringify(dataModel, null, 2);
    console.log(typeof JSONdata, JSONdata);
    fs.writeFile('data.json', JSONdata, err => {
      if (err) throw err;
    });
  });
}
