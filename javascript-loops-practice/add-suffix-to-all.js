/* exported addSuffixToAll */

/*
make new array
for each item in words(array)
-concatenate each item(string) with suffix(string)
-push item to new array
return array
*/

function addSuffixToAll(words, suffix) {
  var suffixAdded = [];
  for (var i = 0; i < words.length; i++) {
    suffixAdded.push(words[i] + suffix);
  }
  return suffixAdded;
}
