let numeros = [];
$("#btndata").click(guardar);

    function guardar () {
    let num1 = Number($("#num1").val());

    numeros.push(num1);

}

$("#btndata2").click(Finalizar);

function Finalizar(){

    $("#data").html("");

    $("#data").append("<br> La cantidad de numeros mayores a 100 son: " + Mayor100());
    $("#data").append("<br> La cantidad de numeros pares son: " + NumPar());
    $("#data").append("<br> Suma de los numeros impares mayores a 101 son: " + SumaImpar());
    $("#data").append("<br> El promedio de los numero ingresado es " + PromedioFinal());
}


function Mayor100(){

    let contador = 0;

    for (i = 0; i < numeros.length; i++) {
        
        if (numeros[i]>100) {
            contador++;
        }
    }
    return contador;
}

function NumPar(){

    let par = 0;

    for (i = 0; i < numeros.length; i++) {
        
        if (numeros[i]%2===0) {
            par++;
        }
    }
    return par;
}

function SumaImpar(){

    let sumimpar = 0;

    for (i = 0; i < numeros.length; i++) {
        
        if (numeros[i]%2===1 && numeros[i]>101) {
            sumimpar+=numeros[i];
        }
    }
    return sumimpar;
}

function PromedioFinal(){

   let promedio = 0;

    for (i = 0; i < numeros.length; i++) {
        
        promedio = promedio+numeros[i];

}
   
    promedio = promedio / numeros.length;

    return promedio;
}
