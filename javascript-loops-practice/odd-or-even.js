/* exported oddOrEven */

/*
make list to hold labels
for each item in numbers(array)
-if item(array[i]) is even
--push 'even' to list
-else
--push 'odd' to list
return labels
*/

function oddOrEven(numbers) {
  var labels = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      labels.push('even');
    } else {
      labels.push('odd');
    }
  }
  return labels;
}
