/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  let first = queue.dequeue();
  let successor = queue.peek();
  while (first >= successor) {
    queue.enqueue(first);
    first = queue.dequeue();
    successor = queue.peek();
  }
  return first;
  // solution:
  // let nextSmallest = queue.dequeue();
  // while (nextSmallest > queue.peek()) {
  //   queue.enqueue(nextSmallest);
  //   nextSmallest = queue.dequeue();
  // }
  // return nextSmallest;
}
