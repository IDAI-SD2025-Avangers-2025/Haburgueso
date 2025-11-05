var formulario = document.getElementById("calcularPrecio");

function calcular() {
    var total = 0;
    var cantidad = document.getElementById("cantidad").value;
    // TAMAÑO HAMBURGUESA
    var tamaño = formulario.tam.value;
    if(tamaño == chico){
        total = 100;
    }
    else if (tamaño == mediano){
        total = 150;
    }
    else{
        total= 200;
    }

    //TIPO PAN
    var pan = formulario.pan.value;
    if(pan == "integral") {
        total = total + 15;
    }
    else if(pan == "blanco") {
        total = total + 0;
    }
    else if(pan == "papa") {
        total = total + 20;
    }
    else {
        total = total + 22;
    }
    
    
    //INGREDIENTES
    var ing = formulario.ingredientes.checked;
    if( ing == "QuesoExtra"){
        total = total + 15;
    }
    else if( ing == "CarneExtra") {
        total = total + 20;
    }
    else {
        total = total + 15;
    }
    alert(total)
}