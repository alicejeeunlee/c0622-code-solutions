const dataModel = require('./data.json');

const read = () => {
  const notes = dataModel.notes;
  for (const note in notes) {
    console.log(`${note}: ${notes[note]}`);
  }
};

module.exports = read;
