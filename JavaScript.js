var formulario = document.getElementById("calcularPrecio");

function calcular() {
    var cantidad = document.getElementById("cantidad").value;
    var tamaño = formulario.tam.value;
    var pan = formulario.pan.value;
    var total = 0;
    //TAMAÑO 
    if(tamaño == "chico"){
        total = 100;
    }
    else if (tamaño == "mediano"){
        total = 150;
    }
    else if (tamaño == "grande"){
        total = 200;
    }
    else {
        return;
    }

    //TIPO PAN
    if(pan == "integral") {
        total = total + 15;
    }
    else if(pan == "blanco") {
        total = total + 0;
    }
    else if(pan == "papa") {
        total = total + 20;
    }
    else if (pan == "parmesano") {
        total = total + 22;
    }
    else {
        return;
    }
    
    //INGREDIENTES
    if (formulario.tomate.checked) {
        total += 0;
    }
    if (formulario.lechuga.checked) {
        total += 0;
    }
    if (formulario.cebolla.checked) {
        total += 0;
    }
    if (formulario.ketchup.checked) {
        total += 0;
    }
    if (formulario.mostaza.checked) {
        total += 0;
    }
    if (formulario.mayonesa.checked) {
        total += 0;
    }
    if (formulario.jamon.checked) {
        total += 0;
    }
    if (formulario.quesoAmericano.checked) {
        total += 0;
    }
    if (formulario.QuesoExtra.checked) {
        total += 15;
    }
    if (formulario.CarneExtra.checked) {
        total += 30;
    }
    if (formulario.TocinoExtra.checked) {
        total += 20;
    }

    //COMBO
    if (formulario.combo.value == "si") {
        total += 65;
    }

    //TOTAL
    formulario.total.value = total * cantidad;
}