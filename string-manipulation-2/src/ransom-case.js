/* exported ransomCase */

/*
make variable with first letter lower cased | cased
look at each letter in string after the first
if index is even AND is uppercased | test case QUUX
  concatenate lower case letter at index to cased
if index is even
  concatenate lower case letter at index to cased
else
  concatenate upper case letter at index to cased
return cased
*/

function ransomCase(string) {
  var cased = string[0].toLowerCase();
  for (var i = 1; i < string.length; i++) {
    if (i % 2 === 0 && string[i] === string[i].toUpperCase()) {
      cased += string[i].toLowerCase();
    } else if (i % 2 === 0) {
      cased += string[i].toLowerCase();
    } else {
      cased += string[i].toUpperCase();
    }
  }
  return cased;
}
