/* exported zip */

// make result variable initiated to empty array
// if length of first is less than or equal to length of second
//   loop through first.length
//   make array pair [first[i], second[i]]
//   push pair to results
// else
//   loop through second.length

function zip(first, second) {
  var result = [];
  if (first.length <= second.length) {
    for (var i = 0; i < first.length; i++) {
      var pairs = [first[i], second[i]];
      result.push(pairs);
    }
  } else {
    for (var k = 0; k < second.length; k++) {
      var pair2 = [first[k], second[k]];
      result.push(pair2);
    }
  }
  return result;
}
