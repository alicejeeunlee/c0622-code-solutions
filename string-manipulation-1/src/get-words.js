/* exported getWords */

/*
if string is not an empty string
  return an array of strings that splits argument by spaces
else
  return an empty array
*/

function getWords(string) {
  if (string !== '') {
    return string.split(' ');
  } else {
    return [];
  }

}
