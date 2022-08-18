const fs = require('fs');
const dataModel = require('./data.json');

const create = () => {
  const notes = dataModel.notes;
  notes[dataModel.nextId] = process.argv[3];
  dataModel.nextId++;
  const JSONdata = JSON.stringify(dataModel, null, 2);
  fs.writeFile('data.json', JSONdata, err => {
    if (err) throw err;
  });
};

module.exports = create;
