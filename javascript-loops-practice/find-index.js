/* exported findIndex */

/*
set variable to be returned for when no value is found: index = -1
look through each item in array
-if array[i] is === value
--reassign index to i(current index)
--return index
return index
*/

function findIndex(array, value) {
  var index = -1;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      index = i;
      return index;
    }
  }
  return index;
}
