$("#boton").click(Aceptar);

function Aceptar (){
    let texto = $("#texto").val().toUpperCase();
    $("#resultado").html(texto);
}