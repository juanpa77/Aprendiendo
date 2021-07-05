function loop() {
   button.addEventListener('click',mover);
    ctx.clearRect(0,0,canvas.width,canvas.height);
    tanke1.drawTank()
    button.addEventListener('click',mover);
 
    if (rightPressed) {
        x += 2;        
    }
    else if (leftPressed) {
        x -= 2;
    }

    if (upPressed) {
        y -= 2;
    } else if (downPressed) {
        y += 2;
    }
    x++;
    window.requestAnimationFrame(loop);
}

 button.addEventListener('click',mover);
function mover(){
  x+=29;
}
loop()