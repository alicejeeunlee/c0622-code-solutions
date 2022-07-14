/* exported ransomCase */

/*
make variable with first letter lower cased | cased
look at each letter in string after the first
  if not even
    concatenate upperCase
  else
    concatenate lowerCase
return cased
*/

/* if not even
    cased += lower
*/

function ransomCase(string) {
  var cased = string[0].toLowerCase();
  for (var i = 1; i < string.length; i++) {
    if (i % 2 !== 0) {
      cased += string[i].toUpperCase();
    } else {
      cased += string[i].toLowerCase();
    }
  }
  return cased;
}
