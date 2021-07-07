const canvas = document.getElementById("lienzo");
const ctx = canvas.getContext("2d");
let shots = [...1];

function loadMedia() {
    let inter = setInterval(frameLoop, 1000/55);
};

function frameLoop(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    tanke1.moveTank();
    tanke1.drawTank();   
    tanke1.shots();
   }

agregarEventoTeclado();
loadMedia();