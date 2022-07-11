/* exported filterOutStrings */

/*
make list to hold numbers | notString
look through each item in values(array)
-if each item(values[i]) is not a string | cannot just check if integer because will always evaluate to true creating an infinite loop... must make an expression to check if strictly equal to true
--push item to list
return list
*/

function filterOutStrings(values) {
  var notString = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      notString.push(values[i]);
    }
  }
  return notString;
}
