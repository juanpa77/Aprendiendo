const canvas = document.getElementById("lienzo");
const ctx = canvas.getContext("2d");
let x = 0;
let y = 0;

class Tank{
  
 constructor(x,y){
  this.x = x;
  this.y = y;
  this.ancho = 40;
  this.largo = 25;
 } 
 drawTank() {
    ctx.beginPath();
    ctx.fillRect(this.x,this.y, this.ancho, 20);
    ctx.closePath();
  };
  disparo(){
    
  } 
};
tanke1 = new Tank(x,y);
console.log(tanke1);


