/* exported swapChars */

function swapChars(firstIndex, secondIndex, string) {
  var firstChar = string[firstIndex];
  var secondChar = string[secondIndex];
  string.replace(string[firstIndex], secondChar);
  string.replace(string[secondIndex], firstChar);
  return string;
}
