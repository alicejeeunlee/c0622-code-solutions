/* exported getKeys */

/*
make empty list to store property | keys
for each key in object
push key in list
return list
*/

function getKeys(object) {
  var keys = [];
  for (var key in object) {
    keys.push(key);
  }
  return keys;
}
