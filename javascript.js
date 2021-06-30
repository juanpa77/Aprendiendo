
const canvas = document.getElementById("lienzo");
let button = document.getElementById("mover");
let x = 40;
let y = 0;
let ancho = 20;
let largo = 30;
let ctx = canvas.getContext("2d");


function draw() {
    ctx.beginPath();
    ctx.fillRect(x, y, ancho, largo);
    ctx.closePath();
    ctx.clearRect(x,y-ancho,ancho,largo);
}
function mover(){ 
    draw();
       
    y == 250 ? (clearInterval(inter), setInterval(draw, 100), y -= 5)
    : y += 5;
    
}

button.addEventListener("click",()=>setInterval(Mover,100));
