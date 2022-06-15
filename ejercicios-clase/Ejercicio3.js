$("#btndata").click(Aceptar);    


function Aceptar(){
    var numero = $("#Numero").val();
    var numero1 = $("#Numero1").val();
    var numero2 = $("#Numero2").val();

    if (numero1 >= numero) {
        var inicio = numero;
        var fin = numero1;
    }
    else{
        var inicio = numero1;
        var fin = numero;
    }

    $("#data").html('')

    for(i = inicio ; i <= fin ; i++){
        if(i % numero2 == 0){
            $("#data").append(i + '<br>');
        }
    }
}
