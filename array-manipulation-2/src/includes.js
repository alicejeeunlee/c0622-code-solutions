/* exported includes */

/*
look through items in array
  if items === value
    return true
  else
    return false
*/

function includes(array, value) {
  var includesValue = '';
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      includesValue = true;
    } else {
      includesValue = false;
    }
  }
  return includesValue;
}
