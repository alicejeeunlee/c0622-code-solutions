/* exported isAnagram */

// remove spaces on all strings
// create hashmap for both words, based on a counter
// this check for duplicates since if all letters are the same, we will end up with 0

function isAnagram(firstString, secondString) {
  firstString = firstString.replaceAll(' ', '');
  secondString = secondString.replaceAll(' ', '');
  if (firstString.length !== secondString.length) return false;

  var letters = {};

  for (var i = 0; i < firstString.length; i++) {
    if (letters[firstString[i]] !== null) {
      letters[firstString[i]] += 1;
    } else {
      letters[firstString[i]] = 1;
    }
    letters[secondString[i]] = letters[secondString[i]] ? letters[secondString[i]] - 1 : -1;
  }

  for (var letter in letters) {
    if (letters[letter] !== 0) {
      return false;
    }
  }
  return true;
}

//   var first = {};
//   var second = {};

//   for (let i = 0; i < firstString.length; i++) {
//     if (first[firstString[i]] === !first[firstString[i]]) {
//       first[firstString[i]] = first[firstString[i]] + 1;
//     } else {
//       first[firstString[i]] = 1;
//     }
//   }
//   for (var letter in first) {
//     if (first[letter] !== 0) {
//       return false;
//     }
//   }
//   return true;
// }
// };
