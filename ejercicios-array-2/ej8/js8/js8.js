let arreglado = [];
let exonerado = [];
let reprobado = [];

$("#btndata").click(guardar);

function guardar () {
    
    
    let cedula = Number($("#num1").val());
    let promedio = Number($("#num2").val()); 
    arreglado.push(cedula, promedio);
    
    exonerado = [];
    reprobado = [];

    for (let i = 0; i < arreglado.length; i+=2) {

        cedula = arreglado [i];
        promedio = arreglado [i + 1];

           if (promedio>=8) {
               exonerado.push(cedula,promedio);
           }else{

            let periodo = " ";
               if(promedio >=4) {
                   periodo = "diciembre";
               }else{
                   periodo = "febrero";
               }
               reprobado.push(cedula,promedio,periodo);
               
           }
        }
        
    }
        

$("#btndata2").click(mostrar);

function mostrar(){

    $("#data").html("La cedula y promedio de cada alumno: "+arreglado);
    $("#data2").html("La cedula y promedio de los que exoneraron: "+exonerado);
    $("#data3").html("La cedula, promedio y periodo de los que reprobaron: "+reprobado);

    }