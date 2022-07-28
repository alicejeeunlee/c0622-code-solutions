/* exported reverseWords */

// split string into array of words
// create empty array to push reversed words
// loop through words array
// create empty string to hold reverse word
// loop through each word backwards
// concatenate each letter to empty string
// push reversed word to empty array
// join array into string
// return string with words reversed

function reverseWords(string) {
  var words = string.split(' ');
  var reversedWords = [];
  for (var i = 0; i < words.length; i++) {
    var reverse = '';
    for (var k = words[i].length - 1; k >= 0; k--) {
      reverse += words[i][k];
    }
    reversedWords.push(reverse);
  }
  var reversedString = reversedWords.join(' ');
  return reversedString;
}
