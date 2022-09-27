/* exported take2nd */

function take2nd(queue) {
  // const first = queue.dequeue();
  // if (queue.peek() === undefined) {
  //   return first;
  // } else {
  //   const second = queue.dequeue();
  //   queue.enqueue(first);
  //   return second;
  // }
  if (queue.peek() === undefined) {
    return undefined;
  }
  queue.enqueue(queue.dequeue());
  return queue.dequeue();
}
