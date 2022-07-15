/* exported pick */

/*
make new empty object
look through all keys in object using for in loop
  look through each item in keys(array)

*/

function pick(source, keys) {
  var result = {};
  for (var i = 0; i < keys.length; i++) {
    for (var key in source) {
      if (keys[i] === key) {
        result[keys[i]] = source[key];
      }
    }
  }
  return result;
}
