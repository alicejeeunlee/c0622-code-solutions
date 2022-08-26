const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});
const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const sql = `
    SELECT *
    FROM "grades"
  `;
  db.query(sql)
    .then(result => {
      const grade = result.rows;
      res.status(200).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured.'
      });
    });
});

app.post('/api/grades', (req, res) => {
  const name = req.body.name;
  const course = req.body.course;
  const score = Number(req.body.score);
  if (!name || !course || !Number.isInteger(score) || score < 0 || score > 100) {
    res.status(400).json({
      error: 'Name, course, and score are required fields. Score must be an integer between 0 and 100'
    });
  } else {
    const sql = `
      INSERT INTO "grades" ("name", "course", "score")
      VALUES ($1, $2, $3)
      RETURNING *;
    `;
    const params = [name, course, score];
    db.query(sql, params)
      .then(result => {
        const grade = result.rows[0];
        res.status(201).json(grade);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({
          error: 'An unexpected error occured.'
        });
      });
  }
});

app.put('/api/grades/:gradeId', (req, res) => {
  const name = req.body.name;
  const course = req.body.course;
  const score = Number(req.body.score);
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId < 1 || !name || !course || !Number.isInteger(score) || score < 0 || score > 100) {
    res.status(400).json({
      error: 'GradeId must be a positive integer and specified in path. Name, course, and score are required fields. Score must be an integer between 0 and 100'
    });
  } else {
    const sql = `
      UPDATE "grades"
      SET "name"   = $1,
          "course" = $2,
          "score"  = $3
      WHERE "gradeId" = $4
      RETURNING *;
    `;
    const params = [name, course, score, gradeId];
    db.query(sql, params)
      .then(result => {
        const grade = result.rows[0];
        if (!grade) {
          res.status(404).json({
            error: `Cannot find grade with gradeId: ${gradeId}`
          });
        } else {
          res.status(200).json(grade);
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({
          error: 'An unexpected error occured'
        });
      });
  }
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId < 1) {
    res.status(400).json({
      error: 'GradeId must be a positive integer.'
    });
  } else {
    const sql = `
      DELETE FROM "grades"
      WHERE "gradeId" = $1
      RETURNING *;
    `;
    const params = [gradeId];
    db.query(sql, params)
      .then(result => {
        const grade = result.rows[0];
        if (!grade) {
          res.status(404).json({
            error: `Cannot find grade with gradeId: ${gradeId}`
          });
        } else {
          res.sendStatus(204);
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({
          error: 'An unexpected error occured'
        });
      });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
