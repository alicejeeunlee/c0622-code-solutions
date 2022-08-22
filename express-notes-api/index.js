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

app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (!(id)) {
    return res.status(400).json({
      error: 'id must be a positive integer'
    });
  }
  const notes = data.notes;
  for (const id in notes) {
    if (req.params.id === id) {
      return res.status(200).json(notes[id]);
    }
  }
  return res.status(400).json({
    error: `Cannot find note with id ${id}`
  });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
