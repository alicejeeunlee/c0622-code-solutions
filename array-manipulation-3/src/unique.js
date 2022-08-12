/* exported unique */

// make result variable initiated to empty array
// if array is empty return array
// else
// loop through array
// if current item is not in result
// push curremt item to result
// return result

function unique(array) {
  var result = [];
  if (array.length === 0) {
    return result;
  } else {
    for (var i = 0; i < array.length; i++) {
      if (!result.includes(array[i])) {
        result.push(array[i]);
      }
    }
    return result;
  }
}
