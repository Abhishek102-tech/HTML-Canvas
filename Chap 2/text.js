let canvas=document.querySelector(".Text")
let ctx=canvas.getContext("2d");
ctx.font='30px Comic Sans MS';
// ctx.fillText("Hello World",10,50);
ctx.fillStyle="red";
ctx.textAlign='center';
ctx.fillText("Hello World",canvas.width/2,canvas.height/2);
