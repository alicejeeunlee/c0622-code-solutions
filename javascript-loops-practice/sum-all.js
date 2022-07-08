/* exported sumAll */

/*
define function sumAll with parameter: numbers
start with empty sum value
look at each number in array
add that number to sum
return sum
*/

function sumAll(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
