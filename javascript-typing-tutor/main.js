var $nodeList = document.querySelectorAll('span');
/* console.log($nodeList); */

function logKey(event) {
  for (var i = 0; i < $nodeList.length; i++) {
    var letter = $nodeList[i].textContent;
    if (letter === event.key) {
      $nodeList[i].className = 'green';
      return;
    } else {
      $nodeList[i].className = 'default';
    }
  }
}

document.addEventListener('keydown', logKey);
