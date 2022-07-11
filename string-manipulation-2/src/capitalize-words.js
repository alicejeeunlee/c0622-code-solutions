/* exported capitalizeWords */

/*
start with all letters lowercased
split into each individual word (at spaces)
store array into variable | words
for each word
  capitalize first letter (index: 0) and concatenate with rest of word (substring(1))
join array of words back to string separated by space
return string
*/

function capitalizeWords(string) {
  var words = string.toLowerCase().split(' ');
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
  }
  return words.join(' ');
}
