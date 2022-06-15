
let guardar = [];
let mostrar = [];
$("#btndata").click(guardar);

    function guardar () {
    let texto = $("#texto").val();

    guardar.push(texto);
    mostrar = MostrarCaracteres(guardar);
    MostrarFinal(mostrar);
}


function MostrarCaracteres(Mostrari) {

    let Arrayguardar = [];
    for (let i = 0; i < Mostrari.length; i++) {

        Arrayguardar.push(Mostrari[i].length);

    }

    return Arrayguardar;
}

function MostrarFinal(Array) {

    $("#data").html("");

    for (let i = 0; i < Array.length; i++) {

        $("#data").append(Array[i] + " ");

    }

}