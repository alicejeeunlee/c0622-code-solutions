/* exported reverse */

/*
make empty list | reversed
look at each item in array from last element (index: array.length - 1) to first by decrementing
  push item(array[i]) to reversed
return reversed
*/

function reverse(array) {
  var reversed = [];
  for (var i = array.length - 1; i >= 0; i--) {
    reversed.push(array[i]);
  }
  return reversed;
}
