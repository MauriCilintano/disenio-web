$("#btnHace").click(Aceptar);

function Aceptar() {
    let ingresos = $("#ingresos").val()
    let valor = $("#valor").val()
    let calculo = $("#valor")


    if (ingresos <= 20000) {
        calculo = valor * 0.15
        const pago = Math.round((valor - calculo) / (12 * 7))
        $("#pResultado").html("El primer pago sera de " + calculo)
        $("#pago").html("Los siguientes pagos seran de :  " + pago + " por mes")


    } else {
        calculo = valor * 0.30
        const pago = Math.round((valor - calculo) / 12)
        $("#pResultado").html("El primer pago sera de " + calculo)
        $("#pago").html("Los siguientes pagos seran de :  " + pago + " por mes")

    }
}