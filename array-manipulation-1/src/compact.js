/* exported compact */

/*
omits falsy values from array
make empty list | truthy
look at each item in array
  if Boolean value of that item is not false
  push to list
return truthy
*/

function compact(array) {
  var truthy = [];
  for (var i = 0; i < array.length; i++) {
    if (Boolean(array[i]) !== false) {
      truthy.push(array[i]);
    }
  }
  return truthy;
}
