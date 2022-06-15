let arreglado = [];

$("#btndata").click(guardar);

    function guardar () {
    
    
    let alias = $("#texto").val(); 

    let contador = 0;
    
    for (let i = 0; i < arreglado.length; i++) {
        
        if (arreglado[i] === alias) {

            contador++;
            
        } 
    }

    if (contador === 0){
        arreglado.push(alias)
    }
    console.log(arreglado)
}
        

$("#btndata2").click(mostrar);

function mostrar(){


    $("#data").html(`${arreglado}`);
        
    }