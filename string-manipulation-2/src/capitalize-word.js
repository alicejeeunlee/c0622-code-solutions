/* exported capitalizeWord */

/*
store word(string) in a variable and make all lowercased
if word is javascript
  return JavaScript
else
return word at 0 capitalized concatenated with rest of word
*/

function capitalizeWord(word) {
  var lowercased = word.toLowerCase();
  if (lowercased === 'javascript') {
    return 'JavaScript';
  } else {
    return lowercased[0].toUpperCase() + lowercased.slice(1, word.length);
  }
}
