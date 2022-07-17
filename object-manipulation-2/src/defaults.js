/* exported defaults */

/*
look through all properties(key) in source(object)
  check if key does not exists in target(object)
  want condition to evaluate when (key is not found in target => return false)
  !false = true | condition sastisfied
    set target property to key and assign value of source property (source[key])
    target[key] = source[key]
*/

function defaults(target, source) {
  for (var key in source) {
    if (!(key in target)) {
      target[key] = source[key];
    }
  }
}
