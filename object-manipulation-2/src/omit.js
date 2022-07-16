/* exported omit */

/*
create new object to hold desired result
look through each property in source(object) | key
  look through each item in key(array) | keys[i]
    if key is not equal to keys[i]
      add property and value to result object
    else
      remove keys at index | done comparing THROW IT AWAY O:< or else it keeps iterating through
return result
*/

function omit(source, keys) {
  var result = {};
  for (var key in source) {
    for (var i = 0; i < keys.length; i++) {
      if (key !== keys[i]) {
        result[key] = source[key];
      } else {
        keys.shift();
      }
    }
  }
  return result;
}
