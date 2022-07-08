/* exported reverseWord */

/*
empty string to contain reversed order
look at each character in word backward
  start at last letter | word.length - 1
  loop until i is equal to 0 | word[0]
  decrement | i--
concatenate each character to reversed
return reversed
*/

function reverseWord(word) {
  var reversed = '';
  for (var i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }
  return reversed;
}
