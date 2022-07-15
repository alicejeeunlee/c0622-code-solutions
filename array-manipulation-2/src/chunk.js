/* exported chunk */

/*
slice(start, end)
new empty array to store chunks
make for loop to increase index by size after each iteration
  start index increases by size for each chunk
  end index is current index + size
push to chunks
return chunks
*/

function chunk(array, size) {
  var chunks = [];
  for (var i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}
