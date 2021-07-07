let teclado = {};

function agregarEventoTeclado() {
    agregarEvento(document,"keydown",function(e){
        teclado[e.keyCode] = true
        console.log(e.keyCode)
    })
    agregarEvento(document,"keyup",(e) => teclado[e.keyCode] = false)

    function agregarEvento(elemnto,nombreEvento,funcion) {
        elemnto.addEventListener(nombreEvento,funcion,false)
    }
}

