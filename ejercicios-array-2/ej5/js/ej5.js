let numeros = [];
$("#btndata").click(guardar);

    function guardar () {
    let num1 = Number($("#num1").val());

    numeros.push(num1);
    
}

$("#btndata2").click(Finalizar);

function Finalizar(){

    let mayor = Mayor20();
    
    $("#data").html("");

    for (let i = 0; i < numeros.length; i++) {
        $("#data").append("<br> Los numeros mayores a 20 son: " + mayor + " ");
        
    }

}

function Mayor20(){

    let contador = [];

    for (i = 0; i < numeros.length; i++) {
        
        if (numeros[i]>20) {
            contador.push(numeros[i]);
        }
    }
    return contador;
}
