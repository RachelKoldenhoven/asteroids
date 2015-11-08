$(document).ready(function(){
  var c = document.getElementById("myCanvas");
  c.height = window.innerHeight;
  c.width = window.innerWidth;
var ctx = c.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.fillRect(0,0,150,75);
})
