$("#btnHace").click(Aceptar);

function Aceptar() {
    let codigo = $("#codigo").val().toUpperCase()
    switch (codigo) {
        case 'A':
            $("#pResultado").html("Canelones")
            break;

        case 'B':
            $("#pResultado").html("Maldonado")
            break;

        case 'C':
            $("#pResultado").html("Rocha")
            break;

        case 'D':
            $("#pResultado").html("Treinta y Tres")
            break;

        case 'E':
            $("#pResultado").html("Cerro Largo")
            break;

        case 'F':
            $("#pResultado").html("Rivera")
            break;

        case 'G':
            $("#pResultado").html("Artigas")
            break;

        case 'H':
            $("#pResultado").html("Salto")
            break;

        case 'I':
            $("#pResultado").html("Paysandu")
            break;

        case 'J':
            $("#pResultado").html("Rio Negro")
            break;

        case 'K':
            $("#pResultado").html("Soriano")
            break;

        case 'L':
            $("#pResultado").html("Colonia")
            break;

        case 'M':
            $("#pResultado").html("San Jose")
            break;

        case 'N':
            $("#pResultado").html("Flores")
            break;

        case 'O':
            $("#pResultado").html("Florida")
            break;

        case 'P':
            $("#pResultado").html("Lavalleja")
            break;

        case 'Q':
            $("#pResultado").html("Durazno")
            break;

        case 'R':
            $("#pResultado").html("Tacuarembo")
            break;

        case 'S':
            $("#pResultado").html("Montevideo")
            break;
        default:
            $("#pResultado").html("No existe")
            break;
    }

}