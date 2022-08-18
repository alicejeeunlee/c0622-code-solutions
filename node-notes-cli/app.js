const fs = require('fs');

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
    const JSONdata = JSON.stringify(dataModel, null, 2);
    fs.writeFile('data.json', JSONdata, err => {
      if (err) throw err;
    });
  });
} else if (process.argv[2] === 'update') {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) throw err;
    const dataModel = require('./data.json');
    const notes = dataModel.notes;
    const id = process.argv[3];
    const edit = process.argv[4];
    notes[id] = edit;
    const JSONdata = JSON.stringify(dataModel, null, 2);
    fs.writeFile('data.json', JSONdata, err => {
      if (err) throw err;
    });
  });
} else if (process.argv[2] === 'delete') {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) throw err;
    const id = process.argv[3];
    const dataModel = require('./data.json');
    const notes = dataModel.notes;
    delete notes[id];
    const JSONdata = JSON.stringify(dataModel, null, 2);
    fs.writeFile('data.json', JSONdata, err => {
      if (err) throw err;
    });
  });
}
