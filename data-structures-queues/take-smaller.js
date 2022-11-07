/* exported takeSmaller */

function takeSmaller(queue) {
  const first = queue.dequeue();
  if (queue.peek() === undefined) {
    return first;
  } else {
    const next = queue.dequeue();
    if (first < next) {
      queue.enqueue(next);
      return first;
    } else {
      queue.enqueue(first);
      return next;
    }
  }
}
