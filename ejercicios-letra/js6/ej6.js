$("#boton").click(Aceptar);

function Aceptar (){
    let texto = $("#texto").val();

    $("#resultado").html(verificarTexto(texto));
}

function verificarTexto(texto){

    for (let i = 0; i < texto.length; i++) {

        let numeroCaracteres = texto.length;

        if (texto.charAt(0) == texto.charAt(texto.length -1)){
            mensaje = `La primera y la ultima letra son la misma y es la letra: ${texto.charAt(0)}`
        } else{
            mensaje = "La primera y la ultima letra no son las mismas letra"
        }
        return mensaje;
 
    }
}