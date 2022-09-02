const express = require('express');
const path = require('path');
const app = express();

const joinedPath = path.join(__dirname, 'public');

const publicFilesServer = express.static(joinedPath);

app.use(publicFilesServer);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
