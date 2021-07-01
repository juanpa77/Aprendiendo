
const canvas = document.getElementById("lienzo");
const button = document.getElementById("mover");
const shotButton = document.getElementById("disparo");
const ctx = canvas.getContext("2d");
let x = 40;
let y = 0;
let dx = 5;
let dy = 4;

let shotX = 0;

let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;

let ancho = 20;
let largo = 30;

document.addEventListener("keyup",keyUpHandler, false);
document.addEventListener("keydown",keyDownHandler, false);

function keyDownHandler(e) {
switch (e.keyCode) {
        case 39:
            rightPressed = true;
            break;
    
        case 37:
            leftPressed = true;
            break;

        case 38:
            upPressed = true;
            break;
        
        case 40:
            downPressed = true;
            break;
    }
   // console.log(e.keyCode)
   /* if (e.keyCode == 39) {
        rightPressed = true;
    } 
    else if (e.keyCode == 37) {
        leftPressed = true;
    } */
}

function keyUpHandler(e) {
    switch (e.keyCode) {
        case 39:
            rightPressed = false;
            break;
    
        case 37:
            leftPressed = false;
            break;

        case 38:
            upPressed = false;
            break;
        
        case 40:
            downPressed = false;
            break;
    }
   /* if (e.keyCode == 39) {
        rightPressed = false;
    }
    else if (e.keyCode == 37) {
        leftPressed = false; 
    } */
}

function drawCuadrado() {
    ctx.beginPath();
    ctx.fillRect(x, y, ancho, largo);
    ctx.closePath();
}
function drawShot() {
    ctx.beginPath();
    ctx.fillRect(shotX + x,y,10,10);
    ctx.closePath();
    function shot() {
        shotX += dx;   
    }
    shot()
}

function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawCuadrado();
    
    if (rightPressed) {
        x += dx;        
    }
    else if (leftPressed) {
        x -= dx;
    }

    if (upPressed) {
        y -= dy;
    } else if (downPressed) {
        y += dy;
    }
/* 
---- Comprovacion para invertir movimiento animacion-----
if (y + dy >= canvas.height) {
     dy = -dy
 }
 
 y += dy; */
button.addEventListener("click",()=> setInterval(draw, 200));
shotButton.addEventListener("click",()=> setInterval(drawShot, 10));

