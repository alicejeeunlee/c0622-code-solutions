const express = require('express');

const app = express();

const gradesArray = [];
let nextId = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  for (const key in grades) {
    gradesArray.push(grades[key]);
  }
  res.json(gradesArray);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  req.body.id = nextId;
  grades.nextId = req.body;
  nextId++;
  res.json(req.body);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
