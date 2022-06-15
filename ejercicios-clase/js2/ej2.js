$("#boton").click(Aceptar);    


function Aceptar(){
    let edad = Number($("#edad").val());
    let tope = Number($("#tope").val());

   alert(retorno(edad,tope))

}

function retorno(edad,tope){

return edad > tope 
}