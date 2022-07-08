/* exported findIndex */

/*
set variable to be returned for when no value is found: none = -1
look through each item in array
-if array[i] is === value
--reassign index to i(current index)
--return index
return none | if no item in array is === value
*/

function findIndex(array, value) {
  var none = -1;
  for (var i = 0; i < array.length; i++) {
    var index = -1;
    if (array[i] === value) {
      index = i;
      return index;
    }
  }
  return none;
}
