/* exported isPalindromic */
function isPalindromic(string) {

  // loop through half of the string
  // check each position
  // between the first (forward) and the last character (backward)

  for (let i = 0; i < string.length / 2; i++) {

    if (string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
