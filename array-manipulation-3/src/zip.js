/* exported zip */

function zip(first, second) {
  var result = first.map(function (first, i) {
    return [first, second[i]];
  });
  return result;
}
