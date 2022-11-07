/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  let count = 0;
  if (queue.peek() === undefined) {
    return undefined;
  }
  while (index !== count) {
    queue.enqueue(queue.dequeue());
    count++;
  }
  return queue.dequeue();
  // solution:
  // if (queue.peek() === undefined) {
  //   return undefined;
  // }
  // while (index > 0) {
  //   queue.enqueue(queue.dequeue());
  //   index--;
  // }
  // return queue.dequeue();
}
