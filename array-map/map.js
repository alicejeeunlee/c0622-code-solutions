function map(array, transform) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(transform(array[i]));
  }
  return newArray;
}

const testDoubled = map([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], x => x * 2);
console.log('testDoubled:', testDoubled);

const testPrices = map([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], x => `$${x.toFixed(2)}`);
console.log('testPrices:', testPrices);

const testUpperCased = map([
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
], word => word.toUpperCase());
console.log('testUpperCased:', testUpperCased);

const testFirstLetters = map([
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
], word => word[0]);
console.log('testFirstLetters:', testFirstLetters);
