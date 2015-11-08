var ctx;
var rocket;
var x;
var y;
var c;
$(document).ready(function(){
  c = document.getElementById("myCanvas");
  c.height = window.innerHeight;
  c.width = window.innerWidth;

  ctx = c.getContext("2d");
  rocket = new Image();
  rocket.onload = function(){
    x = (window.innerWidth -rocket.width)/2;
    y = window.innerHeight - rocket.height;
    window.requestAnimationFrame(render);
  }
  rocket.src = "rocket.png";

})
function render(timestamp){
  ctx.clearRect(0, 0, c.width, c.height);
  ctx.drawImage(rocket, x, y);
  y--;
  window.requestAnimationFrame(render);
}
