/* exported dropRight */

/*
slice(start, end)
starts at 0
ends at array.length - count
*/

function dropRight(array, count) {
  return array.slice(0, array.length - count);
}
