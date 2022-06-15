$("#boton").click(Aceptar);

function Aceptar(){

let texto = $("#texto").val();

for (let i = texto.length; i >= -1; i--) {
   
    $("#resultado").append(texto.charAt(i));
}





 







}
