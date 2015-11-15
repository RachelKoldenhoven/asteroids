var ctx;
var rocket;
var laser;
var rocketX;
var rocketY;
var c;
var keyLeft = 37;
var keyRight = 39;
var spaceBar = 32;
var keyMap = {};
var currentLasers = [];

$(document).ready(function(){

  // set up canvas
  c = document.getElementById("myCanvas");
  c.height = window.innerHeight;
  c.width = window.innerWidth;
  ctx = c.getContext("2d");

  // user input
  $(window).keydown(keydown);
  $(window).keyup(keyup);

  //load images
  rocket = new Image();
  rocket.onload = function(){
    rocketX = (window.innerWidth -rocket.width)/2;
    rocketY = window.innerHeight - rocket.height;
    window.requestAnimationFrame(render);
  }
  rocket.src = "rocket.png";

  laser = new Image();
  laser.onload = function(){
    window.requestAnimationFrame(render);
  }
  laser.src = "laser.png";
});



function keydown(ev) {
  //console.log(ev.keyCode);
  keyMap[ev.keyCode] = true;
  if(ev.keyCode === 32){
    var newLaser = {
      x:rocketX + rocket.width/2 - laser.width/2,
      y:rocketY - laser.height
    }
    currentLasers.push(newLaser);
  }
  console.log(keyMap);
}

function keyup(ev) {
  keyMap[ev.keyCode] = false;
  console.log(keyMap);
}

function render(timestamp){

  // initialize
  ctx.clearRect(0, 0, c.width, c.height);

  // update world state
  if(keyMap[37]===true){
    rocketX--;
  }
  if(keyMap[39]===true){
    rocketX++;
  }
  //draws each laser and removes them from array at screen edge
  for(var laserIdx = 0; laserIdx<currentLasers.length; laserIdx++) {
    var currentLaser = currentLasers[laserIdx];
    ctx.drawImage(laser, currentLaser.x, currentLaser.y);
    currentLaser.y--;
      if(currentLaser.y<0) {
        currentLasers.splice(laserIdx, 1);
        laserIdx--;
      }
  }

  // draw
  ctx.drawImage(rocket, rocketX, rocketY);

  //clean up
  window.requestAnimationFrame(render);
}
