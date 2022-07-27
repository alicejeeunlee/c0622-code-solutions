var $countdown = document.querySelector('.countdown-display');
var start = 3;
var intervalID;

function countdown() {
  $countdown.textContent = start;
  start--;
  if (start < 0) {
    clearInterval(intervalID);
    $countdown.textContent = '~Earth Beeeelooowww Us~';
  }
}

intervalID = setInterval(countdown, 1000);
