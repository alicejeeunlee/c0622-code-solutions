/* exported countdown */

/*
define function named countdown with parameter: number
make list to hold numbers
look at all numbers from number to 0
-add each number to the list
-decrement each number
return list
*/

function countdown(number) {
  var countdown = [];
  while (number >= 0) {
    countdown.push(number);
    number--;
  }
  return countdown;
}
