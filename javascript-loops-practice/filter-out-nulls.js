/* exported filterOutNulls */

/*
make list to hold notNull values
look through each item in values(array)
-if each item(value[i]) is not null,
--push item to list
return list
*/

function filterOutNulls(values) {
  var notNull = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      notNull.push(values[i]);
    }
  }
  return notNull;
}
