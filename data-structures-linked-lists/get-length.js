/* exported getLength */

function getLength(list) {
  let count = 1;
  while (list.next !== null) {
    list = list.next;
    count++;
  }
  return count;
}
