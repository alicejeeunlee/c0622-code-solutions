/* exported getValues */

function getValues(object) {
  var propertyKeys = [];
  for (var key in object) {
    propertyKeys.push(object[key]);
  }
  return propertyKeys;
}
