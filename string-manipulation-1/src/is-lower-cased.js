/* exported isLowerCased */

/*
make empty string to hold all lowercase characters | lowercased
look through each character(word[i]) in word(string)
  lower case each character then concatenate to lowercased
  if word is strictly equal to all lowercased word
    return true
return false
*/

function isLowerCased(word) {
  var lowercased = '';
  for (var i = 0; i < word.length; i++) {
    lowercased += (word[i].toLowerCase());
    if (word === lowercased) {
      return true;
    }
  }
  return false;
}
