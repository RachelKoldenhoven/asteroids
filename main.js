var ctx;
var rocket;
var x;
var y;
var c;
var keyLeft = 37;
var keyRight = 39;
var keyMap = {};

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
    x = (window.innerWidth -rocket.width)/2;
    y = window.innerHeight - rocket.height;
    window.requestAnimationFrame(render);
  }
  rocket.src = "rocket.png";
});

function keydown(ev) {
  //console.log(ev.keyCode);
  keyMap[ev.keyCode] = true;
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
    x--;
  }
  if(keyMap[39]===true){
    x++;
  }

  // draw
  ctx.drawImage(rocket, x, y);

  //clean up
  window.requestAnimationFrame(render);
}
