/* exported intersection */

// filter through first to return items in second
// return intersection

function intersection(first, second) {
  var intersection = first.filter(function intersection(i) {
    return second.includes(i);
  });
  return intersection;
}
