/* exported toObject */

/*
create empty object
square bracket notation to reassign value of object[property]
object[key] = value
object[index: 0] = index: 1
return object
*/

function toObject(keyValuePair) {
  var object = {};
  object[keyValuePair[0]] = keyValuePair[1];
  return object;
}
