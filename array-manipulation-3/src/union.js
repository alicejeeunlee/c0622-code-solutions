/* exported union */

// concatenate both arrays (first and second)
// same logic as unique function

function union(first, second) {
  var combine = first.concat(second);
  var result = [];
  for (var i = 0; i < combine.length; i++) {
    if (!result.includes(combine[i])) {
      result.push(combine[i]);
    }
  }
  return result;
}
