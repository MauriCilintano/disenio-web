$("#btnmostrar").click(resultado);

function resultado(){
    let planPlus = $('#planSi')[0].checked
    let millas = 0
    
   if (planPlus){
     millas = Number($('#millas').val()) * 2
   }else{
    millas = Number($('#millas').val())
   }
    let plan;
    millas < 15000

    if (millas <15000){
        plan= "No dispone de las millas disponibles"
    }
    if (millas >=15000 && millas <30000){
        plan= "América del Sur (destino cercano)."
    }
    if (millas >=30000 && millas <60000 ){
        plan= "America del norte (destino intermedio)."
    }
    if (millas >60000){
        plan= "Europa (destino lejano)."
    }
    $("#resultado").html("resultado: "+plan);

}
    