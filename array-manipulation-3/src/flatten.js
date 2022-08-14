/* exported flatten */

// make empty array
// use concat method to merge multiple arrays (returns a new array)
// use spread operator to include contents of each array for each new arguement

function flatten(array) {
  var flatArray = [].concat(...array);
  return flatArray;
}
