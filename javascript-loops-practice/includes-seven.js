/* exported includesSeven */

/*
look at each item in array
-if each item(array[i]) is strictly equal to 7
--return true
return false otherwise | cannot contain else statement that returns false within the for loop because the loop exits when 7 is found and does not check subsequent items
*/

function includesSeven(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      return true;
    }
  }
  return false;
}
