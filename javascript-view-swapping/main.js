var $tabContainer = document.querySelector('.tab-container');
var $allTab = document.querySelectorAll('.tab');
var $allView = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $allTab.length; i++) {
      if ($allTab[i] === event.target) {
        $allTab[i].className = 'tab active';
      } else {
        $allTab[i].className = 'tab';
      }
    }
  }
  if (event.target.className === 'tab active') {
    var $dataViewValue = event.target.getAttribute('data-view');
    for (var j = 0; j < $allView.length; j++) {
      if ($allView[j].getAttribute('data-view') === $dataViewValue) {
        $allView[j].className = 'view';
      } else {
        $allView[j].className = 'view hidden';
      }
    }
  }
});
