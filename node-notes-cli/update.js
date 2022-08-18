const fs = require('fs');
const dataModel = require('./data.json');

const update = () => {
  const notes = dataModel.notes;
  const id = process.argv[3];
  const edit = process.argv[4];
  notes[id] = edit;
  const JSONdata = JSON.stringify(dataModel, null, 2);
  fs.writeFile('data.json', JSONdata, err => {
    if (err) throw err;
  });
};

module.exports = update;
