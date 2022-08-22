const express = require('express');
const data = require('./data.json');
const fs = require('fs');
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
    return res.status(400).send({ error: 'id must be a positive integer' });
  }
  const notes = data.notes;
  for (const id in notes) {
    if (req.params.id === id) {
      return res.status(200).send(notes[id]);
    }
  }
  res.status(400).send({ error: `Cannot find note with id ${id}` });
});

app.post('/api/notes', (req, res) => {
  if (req.body.content === undefined) {
    res.status(400).json({ error: 'content is a required field' });
  } else if (req.body.content !== undefined) {
    const currentID = data.nextId;
    req.body.id = currentID;
    data.notes[currentID] = {
      id: currentID
    };
    data.notes[currentID] = req.body;
    data.nextId++;
    const newJSONData = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', newJSONData, err => {
      if (err) {
        res.status(500).send({ error: 'An unexpected error occured.' });
        console.error(err);
      } else {
        res.status(201).send(req.body);
      }
    });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
