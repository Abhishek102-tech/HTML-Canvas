
window.onload=function(){
let canvas=document.querySelector(".image");
let ctx=canvas.getContext('2d');
let img=document.querySelector(".img");
ctx.drawImage(img,10,10);
}