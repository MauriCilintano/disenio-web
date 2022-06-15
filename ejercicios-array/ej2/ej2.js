let numeros= [];
$("#btndata").click(guardar);

    function guardar () {
    let num1 = Number($("#num1").val());
    let mayor = 0;
    let menor = 0;

    numeros.push(num1);
    mayor = BuscarMayor(numeros);
    menor = BuscarMenor(numeros);
    console.log(numeros);
    $("#data").html("");

    $("#data").html("El menor numero ingresado es " + menor + " Y El mayor ingresado es " + mayor);
 
}


function BuscarMayor (numeros){

    let NumMayor = numeros[0];

    for (let i = 0; i < numeros.length; i++) {

        if(NumMayor < numeros[i]) {
            NumMayor = numeros[i];

    }
}

    return NumMayor;
}

function BuscarMenor (numeros){

    let NumMenor = numeros[0];

    for (let i = 0; i < numeros.length; i++) {

        if(NumMenor > numeros[i]){
            NumMenor = numeros[i];

        }
    }
    return NumMenor;
}