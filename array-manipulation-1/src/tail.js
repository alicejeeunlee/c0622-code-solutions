/* exported tail */

/*
create an empty list | exceptFirst
look through each item from index: 1 to the end of the array
push items to exceptFirst
return exceptFirst
*/

function tail(array) {
  var exceptFirst = [];
  for (var i = 1; i < array.length; i++) {
    exceptFirst.push(array[i]);
  }
  return exceptFirst;
}
