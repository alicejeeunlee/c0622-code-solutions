var $popupWindow = document.querySelector('.dark');
var $openModalButton = document.querySelector('.open-modal-button');

function popup(event) {
  $popupWindow.className = 'dark display-flex';
}
$openModalButton.addEventListener('click', popup);

var $noButton = document.querySelector('.no-button');

function closePopup(event) {
  $popupWindow.className = 'dark display-flex hidden';
}
$noButton.addEventListener('click', closePopup);
