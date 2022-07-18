/* exported takeRight */

/*
slice(start)
if start is a negative index, indicates an offset from the end of the sequence
*/

function takeRight(array, count) {
  return array.slice(-count);
}
