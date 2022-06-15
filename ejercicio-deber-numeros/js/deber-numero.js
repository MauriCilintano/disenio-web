$(()=>{

     
$("#btndata").click(Resultado);   

function Resultado(){

var numero = Number($("#Numero").val());
    
var numero2 = Number($("#Numero2").val());

var numero3 = Number($("#Numero3").val());

if (numero2>=numero) {

    var inicio = numero;
    var fin = numero2;

}else{

    var inicio = numero2;
    var fin = numero;

}


$("#data").html('');

for (i = inicio ; i < fin; i++) {
    
    if (i % numero3 == 0){
        $("#data").append(i + " es multiplo de " + numero3 + "<br>");
    }
}

}

})
