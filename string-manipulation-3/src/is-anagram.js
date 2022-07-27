/* exported isAnagram */

// remove spaces on all strings
// if length of first and second string is not equal cannot be an anagram
// create hashtable for firstString with all letters accounted for as properties
// loop through all letters in firstString
//  if there is no property for the current letter
//     make property named that letter assigned to zero
//  increment value if letter is present in hashtable
// loop through all letters in secondString
//  if letter is not in hashTable
//    return false
//  decrement value of letter in hashTable
// loop runs completely return true

function isAnagram(firstString, secondString) {
  firstString = firstString.replaceAll(' ', '');
  secondString = secondString.replaceAll(' ', '');
  if (firstString.length !== secondString.length) return false;
  var hashTable = {};

  for (var i = 0; i < firstString.length; i++) {
    if (!hashTable[firstString[i]]) {
      hashTable[firstString[i]] = 0;
    }
    hashTable[firstString[i]]++;
  }

  for (var j = 0; j < secondString.length; j++) {
    if (!hashTable[secondString[j]]) {
      return false;
    }
    hashTable[secondString[j]]--;
  }

  return true;
}
