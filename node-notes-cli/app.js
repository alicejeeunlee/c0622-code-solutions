const read = require('./read');
const create = require('./create');
const udpate = require('./update');
const deleteNote = require('./delete');

if (process.argv[2] === 'read') {
  read();
} else if (process.argv[2] === 'create') {
  create();
} else if (process.argv[2] === 'update') {
  udpate();
} else if (process.argv[2] === 'delete') {
  deleteNote();
}
