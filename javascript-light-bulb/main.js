var off = true;
var $body = document.querySelector('body');
var $bulb = document.querySelector('.bulb');
/* console.log('off:', off); */

function lightswitch(event) {
  off = !off;
  /* console.log('off:', off); */
  if (off === true) {
    $bulb.className = 'bulb off';
    $body.className = 'light-off';
  } else {
    $bulb.className = 'bulb on';
    $body.className = 'light-on';
  }
}

$bulb.addEventListener('click', lightswitch);
