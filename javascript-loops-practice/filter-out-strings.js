/* exported filterOutStrings */

/*
make list to hold numbers
look through each item in values(array)
-if each item(values[i]) is a number | cannot just check if integer because will always evaluate to true creating an infinite loop... must make an expression to check if strictly equal to true
--push item to notString
return list
*/

function filterOutStrings(values) {
  var numbers = [];
  for (var i = 0; i < values.length; i++) {
    if (Number.isInteger(values[i]) === true) {
      numbers.push(values[i]);
    }
  }
  return numbers;
}
