$(document).ready(function(){
  var c = document.getElementById("myCanvas");
  c.height = window.innerHeight;
  c.width = window.innerWidth;
var ctx = c.getContext("2d");
var rocket = new Image();
rocket.onload = function(){
  ctx.drawImage(rocket, 50, 50);
}
rocket.src = "rocket.png";

})
