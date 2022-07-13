/*
Query DOM for all span elements

look at each node in nodelist | access like an array with square brackets and index number
each node has a textContent property that has the string value of the letter | set variable for letter
if letter is equal to event.key | event.key returns the string value of the key pressed by user
  reassign className property of node at that index to 'correct'
  reassign className property of next node 'underline'
  increment index | need RETURN to stop the loop and exit the function
else
  reassign className property of node at that index to 'wrong'
*/

var $nodeList = document.querySelectorAll('span');
var index = 0;

function logKey(event) {
  for (var i = 0; i < $nodeList.length; i++) {
    var letter = $nodeList[index].textContent;
    if (letter === event.key) {
      $nodeList[index].className = 'correct';
      $nodeList[index + 1].className = 'underline';
      return index++;
    } else {
      $nodeList[index].className = 'wrong';
    }
  }
}

document.addEventListener('keydown', logKey);
