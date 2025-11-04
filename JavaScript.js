var formulario = document.getElementById("calcularPrecio");
var cantidad = document.getElementById("cantidad").value;
function calcular() {
    //var tamC = document.getElementById("chico").value;
    var tamaño = formulario.tam.value;
    alert(tamaño);
    var total = 0;
    if(tamaño == chico){
        total = 100;
    }
    else if (tamaño == mediano){
        total = 150
    }
    else{
        total= 200
    }
    formulario.total.value = total;
}