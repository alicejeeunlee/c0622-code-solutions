/* exported isVowel */

/*
create list with all upper and lower cased vowels | allVowels
for each vowel in list
  if vowel(allVowels[i]) is equal to char
    return true
return false
*/

function isVowel(char) {
  var allVowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  for (var i = 0; i < allVowels.length; i++) {
    if (allVowels[i] === char) {
      return true;
    }
  }
  return false;
}
