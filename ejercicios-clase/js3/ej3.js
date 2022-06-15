$("#boton").click(Aceptar);    


function Aceptar(){
    let base = Number($("#base").val());
    let altura = Number($("#altura").val());

    calcularTriangulo(base, altura);

}

function calcularTriangulo(base, altura){
    
    let area;
    
    if (base > 0 && altura > 0) {
        area = (base * altura) / 2;
        $("#resultado").html("El area del triangulo es " + area);
        
    }else{
        $("#resultado").html("-1");
    }

}