/* exported numVowels */

/*
variable to store count of how many vowels | initial value 0
make string all lower cased for ease of comparison
for each letter in string
  if letter (string[i]) is equal to any vowel | use OR comparison
    increment count
return count
*/

function numVowels(string) {
  var count = 0;
  var stringLowerCased = string.toLowerCase();
  for (var i = 0; i < string.length; i++) {
    if (stringLowerCased[i] === 'a' || stringLowerCased[i] === 'e' || stringLowerCased[i] === 'i' || stringLowerCased[i] === 'o' || stringLowerCased[i] === 'u') {
      count++;
    }
  }
  return count;
}
