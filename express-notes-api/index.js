const express = require('express');
const dataJSON = require('./data.json');
const fs = require('fs');
const app = express();

app.use(express.json());

app.get('/api/notes', (req, res) => {
  const notesArray = [];
  const notes = dataJSON.notes;
  for (const id in notes) {
    notesArray.push(notes[id]);
  }
  res.status(200).send(notesArray);
});

app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (!(id)) {
    return res.status(400).send({ error: 'id must be a positive integer' });
  } else if (!dataJSON.notes[id]) {
    res.status(404).send({ error: `Cannot find note with id ${id}` });
  } else if (dataJSON.notes[id]) {
    res.status(200).send(dataJSON.notes[id]);
  }
});

app.post('/api/notes', (req, res) => {
  if (req.body.content === undefined) {
    res.status(400).json({ error: 'content is a required field' });
  } else if (req.body.content !== undefined) {
    const currentID = dataJSON.nextId;
    req.body.id = currentID;
    dataJSON.notes[currentID] = {
      id: currentID
    };
    dataJSON.notes[currentID] = req.body;
    dataJSON.nextId++;
    const newJSONData = JSON.stringify(dataJSON, null, 2);
    fs.writeFile('./data.json', newJSONData, err => {
      if (err) {
        console.error(err);
        res.status(500).send({ error: 'An unexpected error occured.' });
      } else {
        res.status(201).send(req.body);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (!(id)) {
    return res.status(400).send({ error: 'id must be a positive integer' });
  } else if (!dataJSON.notes[id]) {
    res.status(404).send({ error: `Cannot find note with id ${id}` });
  } else if (dataJSON.notes[id]) {
    delete dataJSON.notes[id];
    const newJSONData = JSON.stringify(dataJSON, null, 2);
    fs.writeFile('./data.json', newJSONData, err => {
      if (err) {
        console.error(err);
        res.status(500).send({ error: 'An unexpected error occured.' });
      } else {
        res.status(204).send();
      }
    });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
