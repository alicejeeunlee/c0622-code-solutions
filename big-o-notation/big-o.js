/* exported uniqueQuadratic, uniqueLinear */

function uniqueLinear(words) {
  const seen = {};                  // 1 * 1 = O(1) -- CONSTANT time
  const unique = [];                // 1 * 1 = O(1)
  for (
    let i = 0;                      // 1 * 1 = O(1) -- initialization expression evaulated once in loop
    i < words.length;               // 3 * n = O(3n) ~= O(n) -- LINEAR time: calculate length of array, comparison, test for truthiness; condition expression evaluated per loop iteration
    i++                             // 2 * n = O(2n) ~= O(n) -- increment, reassign; final expression evaluated per loop iteration
  ) {
    const word = words[i];          // 2 * n = O(2n) ~= O(n) -- get element at index i, reassign; loop code block runs once every iteration
    if (!seen[word]) {              // 3 * n = O(3n) ~= O(n) -- get value of property (word) in object (seen), not operator evaluation, conditional expression
      seen[word] = true;            // 2 * n = O(2n) ~= O(n) -- get value of seen[word], reassign to true
      unique[unique.length] = word; // 3 * n = O(3n) ~= O(n) -- evaluate length of unique, get element at index(unique.length) in array(unique), reassign to word
    }
  }
  return unique;                    // 1 * 1 = O(1)
} // Big O Notation for uniqueLinear: O(n)

function uniqueQuadratic(words) {
  const unique = [];                // 1 * 1 = O(1)
  for (
    let i = 0;                      // 1 * 1 = O(1)
    i < words.length;               // 3 * n ~= O(n)
    i++                             // 2 * n ~= O(n)
  ) {
    const word = words[i];          // 2 * n ~= O(2n)
    let isUnique = true;            // 1 * n = O(n) -- assign value to variable; in loop code block
    for (
      let c = 0;                    // 1 * n = O(n) -- nested loop (*n)
      c < i;                        // 2 * n^2 ~= O(n^2) -- QUADRATIC time: comparison, test
      c++                           // 2 * n^2 ~= O(n^2) -- increment, reassign
    ) {
      const comparing = words[c];   // 2 * n^2 ~= O(n^2) -- get element words[c], reassign to comparing; nested loop code block (*n)
      if (comparing === word) {     // 2 * n^2 ~= O(n^2) -- comparison, conditional
        isUnique = false;           // 1 * n^2  = O(n^2) -- reassign
      }
    }
    if (isUnique) {                 // 1 * n = O(n) -- conditional; outside of nested loop evaluated once per outer loop iteration
      unique[unique.length] = word; // 3 * n = O(3n) ~= O(n) -- evaluate unique.length, get element in array unique[unique.length], reassign to word
    }
  }
  return unique;                    // 1 * 1 = O(1)
} // Big O Notation for uniqueQuadratic: O(n^2)
