/* exported equal */

// check if length of both arrays is equal
// loop through both arrays and compare each at same indexed
//   if not equal return false
//   else return true

function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}
