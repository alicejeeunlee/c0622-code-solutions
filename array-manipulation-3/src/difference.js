/* exported difference */

// filter through first to return items not in second
// filter through second to return items not in first
// combine the two returned arrays
// return result

function difference(first, second) {
  var uniqueInFirst = first.filter(function uniqueInFirst(i) {
    return !second.includes(i);
  });
  var uniqueInSecond = second.filter(function uniqueInSceond(i) {
    return !first.includes(i);
  });
  return uniqueInFirst.concat(uniqueInSecond);
}
