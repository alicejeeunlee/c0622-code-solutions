const express = require('express');

const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};

const getJSON = express();

getJSON.get('/api/grades', (req, res) => {
  const gradesList = [];
  for (const key in grades) {
    gradesList.push(grades[key]);
  }
  res.json(gradesList);
});

getJSON.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port 3000');
});
