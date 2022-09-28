/* exported includes */

function includes(list, value) {
  while (list.next) {
    if (list.data === value) {
      return true;
    }
    list = list.next;
  }
  return (list.data === value);
}
