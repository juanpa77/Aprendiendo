let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;

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
}
const button = document.getElementById("mover");
button.addEventListener('click',()=> x +=2)