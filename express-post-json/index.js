const express = require('express');

const app = express();

const gradesArray = [];
let nextId = 1;
let grades = {};

app.get('/api/grades', (req, res) => {
  gradesArray.push(grades);
  res.json(gradesArray);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  grades = req.body;
  grades.id = nextId;
  nextId++;
  res.json(req.body);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
