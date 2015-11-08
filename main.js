var ctx;
var rocket;
var x;
var y;
$(document).ready(function(){
  var c = document.getElementById("myCanvas");
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
  ctx.drawImage(rocket, x, y);
  window.requestAnimationFrame(render);
}
