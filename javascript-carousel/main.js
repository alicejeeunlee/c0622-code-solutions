var $left = document.querySelector('.fa-less-than');
var $right = document.querySelector('.fa-greater-than');
var $img = document.querySelector('img');
var $icons = document.querySelectorAll('.icon');
var $iconwrapper = document.querySelector('.icon-wrapper');

var images = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];

var index = 0;

function rotateCarousel() {
  index++;
  if (index > 4) {
    index = 0;
  }
  showImage(index);
  darkenIcon(index);
}

var intervalID = setInterval(rotateCarousel, 3000);

function showImage(index) {
  $img.setAttribute('src', images[index]);
}

function darkenIcon(index) {
  for (var i = 0; i < $icons.length; i++) {
    if (index === i) {
      $icons[i].className = 'fas fa-circle';
    } else {
      $icons[i].className = 'far fa-circle';
    }
  }
}

function rightClick(event) {
  clearInterval(intervalID);
  intervalID = null;
  var $currentIcon = document.querySelector('.fas');
  var currentIndex = Number.parseInt($currentIcon.id);
  var nextIndex = currentIndex + 1;
  index = nextIndex;
  if (nextIndex > 4) {
    nextIndex = 0;
  }
  showImage(nextIndex);
  darkenIcon(nextIndex);
  intervalID = setInterval(rotateCarousel, 3000);
}

$right.addEventListener('click', rightClick);

function leftClick(event) {
  clearInterval(intervalID);
  intervalID = null;
  var $currentIcon = document.querySelector('.fas');
  var currentIndex = Number.parseInt($currentIcon.id);
  var nextIndex = currentIndex - 1;
  index = nextIndex;
  if (nextIndex < 0) {
    nextIndex = 4;
  }
  showImage(nextIndex);
  darkenIcon(nextIndex);
  intervalID = setInterval(rotateCarousel, 3000);
}

$left.addEventListener('click', leftClick);

function iconClick(event) {
  if (event.target.matches('i')) {
    clearInterval(intervalID);
    intervalID = null;
    var currentIndex = Number.parseInt(event.target.id);
    index = currentIndex;
    showImage(currentIndex);
    darkenIcon(currentIndex);
  }
  intervalID = setInterval(rotateCarousel, 3000);
}

$iconwrapper.addEventListener('click', iconClick);
