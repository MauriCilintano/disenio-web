$("#btnHace").click(Aceptar);

function Aceptar() {
    var plus = $("#plus option:selected").text();
    var millas
    var plan
    if (plus == "Si") {
        millas = Number($("#millas").val()) * 2
    }
    else {
        millas = Number($("#millas").val())

    }
    console.log(millas)
    if (millas >= 60000) {
        plan = "Su destino mas lejano es Europa"
    }
    else if (millas >= 30000) {
        plan = "Su destino mas lejano es America del Norte"

    }
    else if (millas >= 15000 && millas <= 30000) {
        plan = "Su destino mas lejano es America del Sur"

    }
    else {
        plan = "Sus millas no son suficientes "
    }
    $("#pResultado").html(plan)
}