
class Tank{
  
 constructor(x,y){
  this.x = x;
  this.y = y;
  this.ancho = 30;
  this.largo = 25;
 } 
  drawTank() {
    ctx.beginPath();
    ctx.save();
    ctx.fillRect(this.x,this.y, this.ancho, 20);
    ctx.restore();
    ctx.closePath();
  };
  
  moveTank(){
    if (teclado[37]) {
      this.x -= 7;
      if (this.x <0) this.x = 0;
    }
    if (teclado[39]) {
      let limite = canvas.width - this.ancho;
      this.x += 7;
      if (this.x > limite) this.x = limite;
    }
  }

  shot (){
    for (let i in shots) {
       {
        let shot = shots[i];
      }
    }
  }

  fire (){
    disparos.push({
      x: this.x +13,
      y: this.y -8,
      width: 10,
      height:30
    })
  }
};
tanke1 = new Tank(0,0);
console.log(tanke1);


