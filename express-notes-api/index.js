const express = require('express');
const data = require('./data.json');
const app = express();

app.use(express.json());

app.get('/api/notes', (req, res) => {
  const notesArray = [];
  const notes = data.notes;
  for (const id in notes) {
    notesArray.push(notes[id]);
  }
  res.status(200).send(notesArray);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
