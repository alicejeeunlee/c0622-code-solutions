/* exported swapChars */

/*
store empty string to store swapped string | swapped
look through each character in string
  if index is at firstIndex
    concatenate string[secondIndex]
  else if index is at secondIndex
    concatenate string[firstIndex]
  else
    concatenate at string[i]
return swapped
*/

function swapChars(firstIndex, secondIndex, string) {
  var swapped = '';
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      swapped += string[secondIndex];
    } else if (i === secondIndex) {
      swapped += string[firstIndex];
    } else {
      swapped += string[i];
    }
  }
  return swapped;
}
