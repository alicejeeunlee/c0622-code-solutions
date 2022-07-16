/* exported defaults */

function defaults(target, source) {
  for (var key in source) {
    for (var properties in target) {
      if (key === properties) {
        target[key] = target[properties];
      } else {
        target[key] = source[key];
      }
    }
  }
}
