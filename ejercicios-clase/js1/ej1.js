$("#boton").click(Aceptar);    

function Aceptar(){
    let num1 = Number($("#num1").val());
    let num2= Number($("#num2").val());

    mostrarPares(num1, num2);

}

function mostrarPares(num1, num2){

    let mayor;
    let menor;

  if (num1 > num2) {

    mayor = num1;
    menor = num2;
  } else{
      mayor = num2;
      menor = num1;
  }

    for(i = menor; i < mayor ; i++){
        if(i % 2 == 0){
            $("#resultado").append(i + '<br>');
        }

}
}




















  /*   if (numero1 >= numero) {
        var inicio = numero;
        var fin = numero1;
    }
    else{
        var inicio = numero1;
        var fin = numero;
    }

    $("#data").html('')

    for(i = inicio ; i <= fin ; i++){
        if(i % num2 == 0){
            $("#data").append(i + '<br>');
        }
    }
} */
