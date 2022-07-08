/* exported isUpperCased */

/*
start with empty string to hold word in call caps | UPPERCASED
look through each character(word[i]) in word(string)
  capitalize each character then concatenate to UPPERCASED
  if word is strictly equal to all caps word
    return true
return false
*/

function isUpperCased(word) {
  var UPPERCASED = '';
  for (var i = 0; i < word.length; i++) {
    UPPERCASED += (word[i].toUpperCase());
    if (word === UPPERCASED) {
      return true;
    }
  }
  return false;
}
