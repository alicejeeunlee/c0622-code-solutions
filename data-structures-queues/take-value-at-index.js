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
}
