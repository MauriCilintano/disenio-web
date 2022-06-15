$("#boton").click(Aceptar);    


function Aceptar(){
    let peso = Number($("#peso").val());
    let estatura = Number($("#estatura").val());

    indiceMasa(peso, estatura);

}

function indiceMasa(peso, estatura){
    
    estatura = Math.round(estatura) / 100;
    peso = Math.round(peso);
    var indice =Math.round(peso / Math.pow(estatura, 2));

    if (indice <=18.5 ){
        $("#resultado").html("Su imc es " + indice + " y su peso es inferior al normal ");
    } else if (indice >18.5 && indice <=24.9){
        $("#resultado").html("Su imc es " + indice + " y su peso es normal ");
    } else if (indice >25 && indice <= 29.9){
        $("#resultado").html("Su imc es " + indice + " y su peso es superior al normal ");
    }else{
        $("#resultado").html("Su imc es " + indice + " obesidad ");
    }
}