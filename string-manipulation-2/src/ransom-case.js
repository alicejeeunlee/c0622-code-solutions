/* exported ransomCase */

/*
for every other character in string, starting at index 1, iterate += 2
  uppercase that character
  return string
*/

function ransomCase(string) {
  var cased = string[0].toLowerCase();
  for (var i = 1; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      cased += string[i].toLowerCase();
    } else if (i % 2 === 0) {
      cased += string[i];
    } else {
      cased += string[i].toUpperCase();
    }
  }
  return cased;
}
