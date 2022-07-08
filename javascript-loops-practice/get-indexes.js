/* exported getIndexes */

/*
make empty list
look at each item in array
add item index to list | index = i if you set i = 0 because array are zero-indexed
return list
*/

function getIndexes(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray.push(i);
  }
  return newArray;
}
