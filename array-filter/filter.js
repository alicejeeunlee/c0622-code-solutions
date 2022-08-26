function filter(array, predicate) {
  const shallowCopy = [];
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      shallowCopy.push(array[i]);
    }
  }
  return shallowCopy;
}

const testEven = filter([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], num => num % 2 === 0);
console.log('testEven:', testEven);

const testOverFive = filter([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], num => num > 5);
console.log('testOverFive:', testOverFive);

const testStartWithE = filter([
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
], name => name.startsWith('E'));
console.log('testStartWithE:', testStartWithE);

const testHaveD = filter(
  [
    'Ada',
    'Hedy',
    'Jean',
    'Grace',
    'Evelyn',
    'Joan',
    'Elizabeth',
    'Janese',
    'Donna'
  ], name => name.includes('D') || name.includes('d'));
console.log('testHaveD:', testHaveD);
