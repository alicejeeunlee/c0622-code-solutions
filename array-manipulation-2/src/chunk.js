/* exported chunk */

/*
slice(start, end)
make a new empty array to store chunks

return chunks
*/

function chunk(array, size) {
  var chunks = [];
  for (var i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}
