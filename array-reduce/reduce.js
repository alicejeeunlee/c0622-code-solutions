function reduce(array, reducer, initialValue) {
  let index = 0;
  let previous = initialValue;
  if (arguments.length === 2) {
    index = 1;
    previous = array[0];
  }
  for (let i = index; i < array.length; i++) {
    previous = reducer(previous, array[i]);
  }
  return previous;
}

const testSum = reduce([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], (x, y) => x + y);
console.log('testSum:', testSum);

const testProduct = reduce([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], (x, y) => x * y);
console.log('testProduct', testProduct);

const testBalance = reduce([
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
], (x, y) => y.type === 'deposit' ? (x + y.amount) : (x - y.amount), 0);
console.log('testBalance:', testBalance);

const testComposite = reduce([
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
], (x, y) => Object.assign(x, y), {});
console.log('testComposite:', testComposite);
