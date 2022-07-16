/* exported invert */

/*
make empty object to hold result
loop through all properties in source(object);
  set property and value of result
  result[newProperty] = newValue
  result[source value] = source key
return result
*/

function invert(source) {
  var result = {};
  for (var key in source) {
    result[source[key]] = key;
  }
  return result;
}
