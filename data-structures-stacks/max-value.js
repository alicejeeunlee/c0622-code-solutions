/* exported maxValue */

function maxValue(stack) {
  let max = stack.pop();
  if (max === undefined) {
    return -Infinity;
  }
  while (stack.peek() !== undefined) {
    const pop = stack.pop();
    max = pop > max ? pop : max;
  }
  return max;
}
