let circle=document.querySelector(".circle");
let ctx=circle.getContext("2d");
ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke();
