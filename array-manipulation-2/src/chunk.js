/* exported chunk */

/*
slice(start, end)
make a new empty array to store chunks

return chunks

function chunk(array, size) {
  var chunks = [];
  for (var i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}
*/

/*
two empty arrays called chunks and result
look through array until the end
Inside our loop, we push to temp using temp.push(arr[a]); if the remainder of a / size is not equal to size - 1.
Otherwise, we push to temp, push temp to the result variable and reset temp to an empty array.
Next, if temp isn’t an empty array, we push it to result.
Return result

function chunk(array, size) {
  var chunks = [];
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (i % size !== size - 1) {
      chunks.push(array[i]);
    } else {
      chunks.push(array[i]);
      result.push(chunks);
      chunks = [];
    }
  }
  if (chunks.length !== 0) {
    result.push(chunks);
  }
  return result;
}
*/
