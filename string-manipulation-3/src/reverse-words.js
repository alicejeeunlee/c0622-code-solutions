/* exported reverseWords */

// create an empty string that will store reversed
// for loop start at last character and decrement
// concatenate each string[i] into reversed
// return reversed

function reverseWords(string) {
  var reversed = '';
  for (var i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }
  return reversed;
}
