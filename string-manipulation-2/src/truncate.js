/* exported truncate */

/*
slice(indexStart, indexEnd)
concatenate '...'
*/

function truncate(length, string) {
  return string.slice(0, length) + '...';
}
