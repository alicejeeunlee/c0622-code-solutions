/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  const insert = new LinkedList(value);
  insert.next = list.next;
  list.next = insert;
}
