const fs = require('fs');
const dataModel = require('./data.json');

const deleteNote = () => {
  const id = process.argv[3];
  const notes = dataModel.notes;
  delete notes[id];
  const JSONdata = JSON.stringify(dataModel, null, 2);
  fs.writeFile('data.json', JSONdata, err => {
    if (err) throw err;
  });
};

module.exports = deleteNote;
