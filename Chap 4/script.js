let canvas=document.querySelector(".can")
let ctx=canvas.getContext('2d');
let grad=createLinearGradient(0,0,170,0);
ctx.strokeStyle="#FF0000"
ctx.strokeRect(20,20,150,100);