/* exported includes */

/*
look through items in array
  if items === value
    return true
  return false
*/

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
