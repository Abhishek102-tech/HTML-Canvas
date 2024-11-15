let canvas=document.querySelector(".Text");
let cnx=canvas.getContext('2d');
let gra=cnx.createRadialGradient(0,0,200,0,60,100);

gra.addColorStop(0,'cyan');
gra.addColorStop(1,'skyblue');

cnx.fillStyle=gra;
cnx.fillRect(10,10,150,80);