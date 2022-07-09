/* exported initial */

/*
create an empty list | exceptLast
look through each item from the first (index 0) to second to last item (array.length - 1)
push items to exceptLast
return exceptLast
*/

function initial(array) {
  var exceptLast = [];
  for (var i = 0; i < array.length - 1; i++) {
    exceptLast.push(array[i]);
  }
  return exceptLast;
}
