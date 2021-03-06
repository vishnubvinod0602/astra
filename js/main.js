console.clear();


var flipContainer = $('.flipster'),
    flipItemContainer = flipContainer.find('.flip-items'),
    flipItem = flipContainer.find('li');

var f = flipContainer.flipster({
  itemContainer: flipItemContainer,
  itemSelector: flipItem,
  loop: true,
  style: 'flat',
  spacing: 0,
  scrollwheel: false,
  buttons: true,
});

const shooter = document.getElementById("player-controlled-shooter")
function fireLaser() {
  let laser = createLaserElement()
  mainPlayArea.appendChild(laser)
  let laserSFX = new Audio('audio/laser-sfx.m4a')
  laserSFX.play()
  moveLaser(laser)
}
function createLaserElement() {
  let xPosition = parseInt(window.getComputedStyle(shooter).getPropertyValue('left'))
  let yPosition = parseInt(window.getComputedStyle(shooter).getPropertyValue('top'))
  let newLaser = document.createElement('img')
  newLaser.src = 'img/laser.png'
  newLaser.classList.add('laser')
  newLaser.style.left = `${xPosition}px`
  newLaser.style.top = `${yPosition - 10}px`
  return newLaser
}
