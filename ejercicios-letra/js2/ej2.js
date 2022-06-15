$("#boton").click(Aceptar);

function Aceptar() {

    let texto = $("#texto").val();
    let letra = $("#letra").val();
    $("#resultado").html(contarLetras(texto, letra));
}

function contarLetras(texto, letra) {

    let posicion = 0;
    let contador = 0;

    posicion = texto.indexOf(letra);

    while (posicion != -1) {
        contador++;
        posicion = texto.indexOf(letra, posicion + 1);
    }
    return contador;
}