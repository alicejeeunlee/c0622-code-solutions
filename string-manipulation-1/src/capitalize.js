/* exported capitalize */

/*
get first character | word[0]
capitalize character | .toUpperCase()
get rest of character | .slice(indexStart, indexEnd)
lower case rest of character | .toLowerCase()
return capitalized word
*/

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
